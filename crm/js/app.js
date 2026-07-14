import { db } from './db.js';
import { auth } from './auth.js';
import { parseIncomingMessage } from './parser.js';
import { pdfGenerator } from './pdf.js';
import { saveSupabaseConfig, getSupabaseConfig, saveOpenAIKey, getOpenAIKey } from './config.js';

// Core State
let currentModule = 'dashboard';
let activeOrderFilter = 'active';
let activeProductView = 'catalog'; // 'catalog' | 'matrix' | 'supplier-lists'
let currentIngestingMsgId = null;
let highlightOrderId = null;
let activeInboxSubTab = 'customer'; // 'customer' | 'driver'
let activeDeliverySubTab = 'active'; // 'active' | 'drivers' | 'inbox'

// Router & Init
async function init() {
  // 1. Initialise DB Adapter
  await db.initialize();

  // 2. Auth Guard Check
  if (!auth.isAuthenticated()) {
    showLogin();
  } else {
    showApp();
    handleRouting();
  }

  // 3. Register Global Event Listeners
  window.addEventListener('hashchange', handleRouting);
  setupGlobalListeners();
}

function showLogin() {
  document.getElementById('app').style.display = 'none';
  document.getElementById('login-container').style.display = 'flex';
  window.location.hash = '#login';
}

function showApp() {
  document.getElementById('login-container').style.display = 'none';
  document.getElementById('app').style.display = 'flex';
  
  // Set avatar initials
  const user = auth.getCurrentUser();
  if (user) {
    const data = JSON.parse(user);
    const name = data.user || 'Admin';
    document.getElementById('user-display-name').textContent = name;
    document.getElementById('avatar-letters').textContent = name.substring(0, 2).toUpperCase();
  }
}

function handleRouting() {
  if (!auth.isAuthenticated()) {
    showLogin();
    return;
  }

  const hash = window.location.hash.substring(1) || 'dashboard';
  
  if (hash === 'login') {
    if (auth.isAuthenticated()) {
      window.location.hash = '#dashboard';
    }
    return;
  }

  currentModule = hash;
  showApp();
  
  // Update nav UI active states
  document.querySelectorAll('.sidebar-menu-item, .mobile-nav-item').forEach(item => {
    if (item.dataset.menu === currentModule) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  // Set Topbar Title
  const titles = {
    dashboard: 'Daily Operations Dashboard',
    inbox: 'Communication Inbox',
    orders: 'Customer Orders Management',
    delivery: 'Daily Delivery Operations',
    products: 'Products & Suppliers Database',
    inventory: 'Inventory & Materials Stock',
    settings: 'CRM Settings'
  };
  document.getElementById('page-header-title').textContent = titles[currentModule] || 'BALI FRUITS CRM';

  // Render View
  renderActiveView();
}

function renderActiveView() {
  const main = document.getElementById('main-content-view');
  main.innerHTML = ''; // Clear

  switch (currentModule) {
    case 'dashboard':
      renderDashboard(main);
      break;
    case 'inbox':
      renderInbox(main);
      break;
    case 'orders':
      renderOrders(main);
      break;
    case 'delivery':
      renderDelivery(main);
      break;
    case 'products':
      renderProducts(main);
      break;
    case 'inventory':
      renderInventory(main);
      break;
    case 'settings':
      renderSettings(main);
      break;
    default:
      main.innerHTML = `<p>Module ${currentModule} not found.</p>`;
  }
}

// Helpers
function formatRupiah(amount) {
  return 'Rp ' + amount.toLocaleString('id-ID');
}

function renderPipelineRibbon(container, activeIndex, stages) {
  const ribbon = document.createElement('div');
  ribbon.className = 'workflow-ribbon';
  
  const stepper = document.createElement('div');
  stepper.className = 'stepper';
  
  stages.forEach((stage, idx) => {
    const step = document.createElement('div');
    step.className = 'step';
    if (idx === activeIndex) step.classList.add('active');
    if (idx < activeIndex) step.classList.add('completed');
    
    step.innerHTML = `
      <div class="step-number">${idx < activeIndex ? '✓' : idx + 1}</div>
      <div class="step-label">${stage}</div>
    `;
    
    stepper.appendChild(step);
    
    if (idx < stages.length - 1) {
      const line = document.createElement('div');
      line.className = 'step-line';
      if (idx < activeIndex) line.classList.add('completed');
      stepper.appendChild(line);
    }
  });
  
  ribbon.appendChild(stepper);
  container.appendChild(ribbon);
}

// ==================== MODULE 1: DASHBOARD ====================
async function renderDashboard(container) {
  // Render workflow header
  const dashboardStages = ['Message', 'Order', 'ProductsChecked', 'Packaged', 'Scheduled', 'Delivered', 'Paid', 'Done'];
  renderPipelineRibbon(container, 1, dashboardStages); // Order is active dashboard focus

  // Fetch metrics
  const inbox = await db.getInbox();
  const orders = await db.getOrders();
  const materials = await db.getMaterials();

  const newMessages = inbox.filter(m => m.status === 'Received').length;
  const ordersToday = orders.filter(o => o.deliveryDate === new Date().toISOString().split('T')[0]).length;
  const delayedOrders = orders.filter(o => o.issue !== 'None').length;
  const lowMaterials = materials.filter(m => m.status === 'Low Stock' || m.status === 'Reorder Needed').length;
  const deliveriesToday = orders.filter(o => o.deliveryDate === new Date().toISOString().split('T')[0] && o.stage !== 'Completed').length;
  const pendingPayments = orders.filter(o => o.paymentStatus === 'Pending').length;

  const dashboardHTML = `
    <div class="dashboard-grid">
      
      <div class="card-summary" onclick="window.location.hash='#inbox'">
        <div class="card-summary-icon orange">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" style="width:24px;height:24px;"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        </div>
        <h3>New Ingestion Messages</h3>
        <div class="card-summary-number">${newMessages}</div>
        <div class="card-summary-status text-orange">
          <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#ef6c00;"></span>
          ${newMessages > 0 ? 'Requires parsing' : 'Inbox clear'}
        </div>
        <div class="card-summary-action">➔</div>
      </div>

      <div class="card-summary" onclick="window.location.hash='#orders'">
        <div class="card-summary-icon green">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" style="width:24px;height:24px;"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
        </div>
        <h3>Orders Scheduled Today</h3>
        <div class="card-summary-number">${ordersToday}</div>
        <div class="card-summary-status text-green">
          <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#2e7d32;"></span>
          Delivery scheduled
        </div>
        <div class="card-summary-action">➔</div>
      </div>

      <div class="card-summary" onclick="window.location.hash='#orders'">
        <div class="card-summary-icon red">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" style="width:24px;height:24px;"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        </div>
        <h3>Delayed / Issue Flagged</h3>
        <div class="card-summary-number">${delayedOrders}</div>
        <div class="card-summary-status text-red">
          <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#c62828;"></span>
          Requires resolution
        </div>
        <div class="card-summary-action">➔</div>
      </div>

      <div class="card-summary" onclick="window.location.hash='#delivery'">
        <div class="card-summary-icon green">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" style="width:24px;height:24px;"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
        </div>
        <h3>Active Deliveries</h3>
        <div class="card-summary-number">${deliveriesToday}</div>
        <div class="card-summary-status text-green">
          <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#2e7d32;"></span>
          Out for dispatch
        </div>
        <div class="card-summary-action">➔</div>
      </div>

      <div class="card-summary" onclick="window.location.hash='#orders'">
        <div class="card-summary-icon orange">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" style="width:24px;height:24px;"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
        </div>
        <h3>Payments Pending</h3>
        <div class="card-summary-number">${pendingPayments}</div>
        <div class="card-summary-status text-orange">
          <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#ef6c00;"></span>
          Awaiting confirmation
        </div>
        <div class="card-summary-action">➔</div>
      </div>

      <div class="card-summary" onclick="window.location.hash='#inventory'">
        <div class="card-summary-icon red">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" style="width:24px;height:24px;"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
        </div>
        <h3>Low / Out of Stock Items</h3>
        <div class="card-summary-number">${lowMaterials}</div>
        <div class="card-summary-status text-red">
          <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#c62828;"></span>
          Reorder materials
        </div>
        <div class="card-summary-action">➔</div>
      </div>

    </div>
  `;
  
  const div = document.createElement('div');
  div.innerHTML = dashboardHTML;
  container.appendChild(div);
}

// ==================== MODULE 2: INBOX ====================
async function renderInbox(container) {
  renderPipelineRibbon(container, 1, ['Received', 'Parsed', 'Reviewed', 'Action Created', 'Done']);

  const inbox = await db.getInbox();

  // Tab Selector UI
  const tabRow = document.createElement('div');
  tabRow.style.display = 'flex';
  tabRow.style.gap = '10px';
  tabRow.style.marginBottom = '20px';
  tabRow.innerHTML = `
    <button class="btn btn-sm ${activeInboxSubTab === 'customer' ? 'btn-primary' : 'btn-secondary'}" id="btn-inbox-customer" style="font-weight:700;">👤 Customer Messages</button>
    <button class="btn btn-sm ${activeInboxSubTab === 'driver' ? 'btn-primary' : 'btn-secondary'}" id="btn-inbox-driver" style="font-weight:700;">🚚 Driver Inbox</button>
  `;
  container.appendChild(tabRow);

  // Tab click events
  tabRow.querySelector('#btn-inbox-customer').addEventListener('click', () => {
    activeInboxSubTab = 'customer';
    renderActiveView();
  });
  tabRow.querySelector('#btn-inbox-driver').addEventListener('click', () => {
    activeInboxSubTab = 'driver';
    renderActiveView();
  });
  
  // Filter inbox list
  const filteredInbox = inbox.filter(msg => {
    if (activeInboxSubTab === 'driver') {
      return msg.isDriver === true;
    } else {
      return !msg.isDriver;
    }
  });

  const inboxWrapper = document.createElement('div');
  inboxWrapper.className = 'cards-list';
  
  if (filteredInbox.length === 0) {
    inboxWrapper.innerHTML = `
      <div style="text-align:center; padding: 40px; background-color: var(--cream-strong); border-radius: 20px; border: 1px solid var(--line);">
        <p style="font-weight:600; color:var(--grey-text);">Inbox is clear! No messages to process.</p>
      </div>
    `;
    container.appendChild(inboxWrapper);
    return;
  }

  filteredInbox.forEach(msg => {
    const card = document.createElement('div');
    card.className = 'task-card';
    
    // Status Badge
    let badgeClass = 'badge-orange';
    if (msg.status === 'Done') badgeClass = 'badge-green';
    
    let linkHTML = '';
    if (msg.status === 'Done' && (msg.orderId || msg.orderNumber || msg.orderRef)) {
      const displayRef = msg.orderNumber || msg.orderRef || msg.orderId;
      linkHTML = `
        <div style="margin-top: 10px; font-size: 13px; font-weight: 700; color: var(--green);">
          Linked Order: <a href="#orders" class="inbox-order-link" data-order-ref="${displayRef}" style="text-decoration: underline; color: var(--olive); font-weight: 800; cursor: pointer;">${displayRef}</a>
        </div>
      `;
    } else if (msg.orderRef) {
      linkHTML = `
        <div style="margin-top: 10px; font-size: 13px; font-weight: 700; color: var(--green);">
          Order Reference: <a href="#orders" class="inbox-order-link" data-order-ref="${msg.orderRef}" style="text-decoration: underline; color: var(--olive); font-weight: 800; cursor: pointer;">${msg.orderRef}</a>
        </div>
      `;
    }

    // Quick Action for driver delivered updates
    let quickActionHTML = '';
    if (msg.isDriver && msg.status !== 'Done' && msg.orderRef && (msg.messageText.toLowerCase().includes('deliver') || msg.messageText.toLowerCase().includes('completed') || msg.messageText.toLowerCase().includes('consegnato'))) {
      quickActionHTML = `
        <button class="btn btn-primary btn-sm btn-quick-delivered" data-order-ref="${msg.orderRef}" data-msg-id="${msg.id}" style="font-weight: 700;">✓ Mark Delivered</button>
      `;
    }
    
    card.innerHTML = `
      <div class="task-card-header">
        <div class="task-card-title">
          <h3>Message from: ${msg.senderName || 'Unknown'}</h3>
          <span class="task-card-badge ${badgeClass}">${msg.status}</span>
        </div>
        <span style="font-size:12px; color:var(--grey-text); font-weight:600;">${new Date(msg.date).toLocaleString('id-ID')}</span>
      </div>
      
      <div style="background-color:rgba(255,255,255,0.7); border:1px solid var(--line); border-radius:12px; padding:15px; font-size:14px; line-height:1.5; white-space:pre-wrap; margin-bottom:18px;">${msg.messageText}</div>
      
      <div class="task-card-info" style="border:none; margin-bottom:5px; padding-bottom:0;">
        <div class="info-item">
          <div class="info-label">Contact</div>
          <div class="info-val">${msg.phoneOrEmail}</div>
        </div>
        <div class="info-item">
          <div class="info-label">Source</div>
          <div class="info-val">${msg.source} (${msg.language || 'Unknown Lang'})</div>
        </div>
        <div class="info-item">
          <div class="info-label">Suggested Action</div>
          <div class="info-val" style="color:var(--olive); font-weight:700;">${msg.suggestedAction}</div>
        </div>
      </div>
      
      ${linkHTML}
      
      <div class="task-card-actions" style="margin-top: 15px;">
        ${msg.status !== 'Done' ? `
          <button class="btn btn-primary btn-sm btn-parse-card" data-msg-id="${msg.id}">Parse & Process</button>
          <button class="btn btn-secondary btn-sm btn-mark-done" data-msg-id="${msg.id}">Mark Done</button>
          ${quickActionHTML}
        ` : `
          <span style="color:var(--grey-text); font-size:13px; font-weight:600;">Processed Successfully</span>
        `}
      </div>
    `;
    inboxWrapper.appendChild(card);
  });
  
  container.appendChild(inboxWrapper);

  // Link Click Listener
  inboxWrapper.querySelectorAll('.inbox-order-link').forEach(link => {
    link.addEventListener('click', async (e) => {
      e.preventDefault();
      const ref = e.target.dataset.orderRef;
      const orders = await db.getOrders();
      const order = orders.find(o => o.orderNumber === ref || o.id === ref);
      if (order) {
        highlightOrderId = order.id;
        window.location.hash = '#orders';
      } else {
        alert(`Could not find matching order record for reference: ${ref}`);
      }
    });
  });

  // Quick Action Click Listener
  inboxWrapper.querySelectorAll('.btn-quick-delivered').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      const msgId = e.target.dataset.msgId;
      const ref = e.target.dataset.orderRef;
      
      const orders = await db.getOrders();
      const order = orders.find(o => o.orderNumber === ref || o.id === ref);
      if (order) {
        order.deliveryStatus = 'Delivered';
        order.stage = 'Completed';
        await db.saveOrder(order);
      }

      const msg = inbox.find(m => m.id === msgId);
      if (msg) {
        msg.status = 'Done';
        await db.saveInbox(msg);
      }

      alert(`Order ${ref} has been marked as Delivered, and driver message completed!`);
      renderActiveView();
    });
  });

  // Add Ingestion Pre-populate Listener
  inboxWrapper.querySelectorAll('.btn-parse-card').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      const msgId = e.target.dataset.msgId;
      const msg = inbox.find(m => m.id === msgId);
      if (msg) {
        currentIngestingMsgId = msg.id;
        document.getElementById('raw-message-text').value = msg.messageText;

        // If pre-parsed data is already present, bypass parsing and load review directly
        if (msg.parsedData) {
          document.getElementById('ingest-input-panel').style.display = 'none';
          document.getElementById('ingest-detected-type').textContent = `Detected Message Type: ${msg.suggestedType || (msg.parsedData.supplierName ? 'Supplier quotation' : 'New order')}`;
          const formContainer = document.getElementById('review-fields-container');
          formContainer.innerHTML = '';
          
          if (msg.suggestedType === 'Supplier quotation' || msg.parsedData.supplierName) {
            populateSupplierReview(formContainer, msg.parsedData);
          } else if (msg.suggestedType === 'Driver message' || msg.isDriver) {
            populateDriverReview(formContainer, msg.parsedData);
          } else {
            populateOrderReview(formContainer, msg.parsedData);
          }
          
          document.getElementById('ingest-review-panel').style.display = 'block';
        } else {
          // Normal flow (start at input panel)
          document.getElementById('ingest-review-panel').style.display = 'none';
          document.getElementById('ingest-input-panel').style.display = 'block';
        }

        openIngestModal();
      }
    });
  });

  inboxWrapper.querySelectorAll('.btn-mark-done').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      const msgId = e.target.dataset.msgId;
      const msg = inbox.find(m => m.id === msgId);
      if (msg) {
        msg.status = 'Done';
        await db.saveInbox(msg);
        renderActiveView();
      }
    });
  });
}

// ==================== MODULE 3: ORDERS ====================
async function renderOrders(container) {
  // Inject highlight style if not already present
  if (!document.getElementById('highlight-style')) {
    const style = document.createElement('style');
    style.id = 'highlight-style';
    style.innerHTML = `
      @keyframes flashGlow {
        0% { box-shadow: 0 0 0px var(--green); border-color: var(--line); }
        50% { box-shadow: 0 0 20px var(--green); border-color: var(--green); transform: scale(1.01); }
        100% { box-shadow: 0 0 0px var(--green); border-color: var(--line); }
      }
      .flash-highlight {
        animation: flashGlow 2s ease-in-out infinite;
        border: 2px solid var(--green) !important;
      }
    `;
    document.head.appendChild(style);
  }

  const ordersStages = ['Received', 'Confirmed', 'Products Checked', 'Packaged', 'Scheduled', 'Delivered', 'Paid', 'Completed'];
  renderPipelineRibbon(container, 2, ordersStages);

  const orders = await db.getOrders();

  // Filter Buttons UI
  const filterRow = document.createElement('div');
  filterRow.style.display = 'flex';
  filterRow.style.gap = '10px';
  filterRow.style.marginBottom = '20px';
  filterRow.innerHTML = `
    <button class="btn btn-sm ${activeOrderFilter === 'active' ? 'btn-primary' : 'btn-secondary'}" id="btn-filter-active">Active Orders</button>
    <button class="btn btn-sm ${activeOrderFilter === 'completed' ? 'btn-primary' : 'btn-secondary'}" id="btn-filter-completed">Completed</button>
    <button class="btn btn-sm ${activeOrderFilter === 'all' ? 'btn-primary' : 'btn-secondary'}" id="btn-filter-all">All</button>
  `;
  container.appendChild(filterRow);

  // Filter Logic
  let filteredOrders = orders;
  if (activeOrderFilter === 'active') {
    filteredOrders = orders.filter(o => o.stage !== 'Completed');
  } else if (activeOrderFilter === 'completed') {
    filteredOrders = orders.filter(o => o.stage === 'Completed');
  }

  const orderList = document.createElement('div');
  orderList.className = 'cards-list';

  if (filteredOrders.length === 0) {
    orderList.innerHTML = `
      <div style="text-align:center; padding: 40px; background-color: var(--cream-strong); border-radius: 20px; border: 1px solid var(--line);">
        <p style="font-weight:600; color:var(--grey-text);">No orders found matching this filter.</p>
      </div>
    `;
    container.appendChild(orderList);
    setupOrderFilters();
    return;
  }

  filteredOrders.forEach(order => {
    const card = document.createElement('div');
    card.className = 'task-card';
    card.dataset.orderId = order.id;

    // Highlight linked order redirect
    if (highlightOrderId === order.id) {
      card.classList.add('flash-highlight');
      setTimeout(() => {
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(() => card.classList.remove('flash-highlight'), 4000);
      }, 150);
    }
    
    // Check for alerts
    let badgeClass = 'badge-orange';
    if (order.stage === 'Completed') badgeClass = 'badge-green';
    if (order.issue !== 'None') badgeClass = 'badge-red';

    const itemsHTML = order.products.map(item => `
      <span class="product-row-item">${item.quantity} x ${item.name} (${item.unit || 'kg'})</span>
    `).join('');

    card.innerHTML = `
      <div class="task-card-header">
        <div class="task-card-title">
          <h3>Order ${order.orderNumber || order.id}</h3>
          <span class="task-card-badge ${badgeClass}">${order.issue !== 'None' ? order.issue : order.stage}</span>
        </div>
        <span style="font-size:14px; font-weight:800; color:var(--green-ink);">${formatRupiah(order.totalAmount)}</span>
      </div>

      <div class="task-card-info">
        <div class="info-item">
          <div class="info-label">Customer</div>
          <div class="info-val">${order.clientName} (${order.whatsapp})</div>
        </div>
        <div class="info-item">
          <div class="info-label">Delivery Zone</div>
          <div class="info-val">${order.deliveryZone}</div>
        </div>
        <div class="info-item">
          <div class="info-label">Schedule</div>
          <div class="info-val">${order.deliveryDate} (${order.timeWindow || 'Flexible'})</div>
        </div>
        <div class="info-item">
          <div class="info-label">Payment</div>
          <div class="info-val" style="color:${order.paymentStatus === 'Paid' ? '#2e7d32' : '#ef6c00'}; font-weight:700;">${order.paymentStatus}</div>
        </div>
      </div>

      <div class="task-card-products">
        <div class="info-label">Items</div>
        <div>${itemsHTML}</div>
      </div>

      ${order.notes ? `
        <div style="background-color:rgba(23,61,43,0.04); border-left:3px solid var(--olive); padding:8px 12px; font-size:13px; font-style:italic; border-radius:0 8px 8px 0; margin-bottom:20px;">
          <strong>Notes:</strong> ${order.notes}
        </div>
      ` : ''}

      <div class="task-card-actions">
        ${order.stage !== 'Completed' ? `
          <button class="btn btn-primary btn-sm btn-move-forward" data-order-id="${order.id}">Move Forward (➔)</button>
        ` : ''}
        
        ${order.paymentStatus !== 'Paid' ? `
          <button class="btn btn-secondary btn-sm btn-mark-paid" data-order-id="${order.id}">Mark Paid</button>
        ` : ''}

        <button class="btn btn-secondary btn-sm btn-edit-order" data-order-id="${order.id}" style="color:var(--olive); font-weight:700;">✏️ Edit Details</button>
        <button class="btn btn-secondary btn-sm btn-procure-order" data-order-id="${order.id}" style="color:var(--green); font-weight:700;">📦 Procure PO</button>
        <button class="btn btn-secondary btn-sm btn-pdf-order" data-order-id="${order.id}">Download Order PDF</button>
        <button class="btn btn-secondary btn-sm btn-pdf-invoice" data-order-id="${order.id}">Download Invoice PDF</button>
        
        ${order.issue === 'None' ? `
          <button class="btn btn-danger btn-sm btn-flag-issue" data-order-id="${order.id}">Flag Issue</button>
        ` : `
          <button class="btn btn-secondary btn-sm btn-resolve-issue" data-order-id="${order.id}">Resolve Issue</button>
        `}
      </div>
    `;
    orderList.appendChild(card);
  });

  container.appendChild(orderList);
  setupOrderFilters();

  // Reset highlight tracking
  highlightOrderId = null;

  // Button Action Handlers
  orderList.querySelectorAll('.btn-edit-order').forEach(btn => {
    btn.addEventListener('click', (e) => {
      showEditOrderModal(e.target.dataset.orderId);
    });
  });

  orderList.querySelectorAll('.btn-procure-order').forEach(btn => {
    btn.addEventListener('click', (e) => {
      showProcureOrderModal(e.target.dataset.orderId);
    });
  });

  orderList.querySelectorAll('.btn-move-forward').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      const orderId = e.target.dataset.orderId;
      const order = orders.find(o => o.id === orderId);
      if (order) {
        const idx = ordersStages.indexOf(order.stage);
        if (idx !== -1 && idx < ordersStages.length - 1) {
          order.stage = ordersStages[idx + 1];
          
          // Hook: If stage moves to "Packaged", auto deduct fresh inventory stock and materials (boxes)
          if (order.stage === 'Packaged') {
            await handleInventoryDeduction(order);
          }
          
          // Hook: If stage is "Delivered", check payment status. If also Paid, mark Completed.
          if (order.stage === 'Delivered' && order.paymentStatus === 'Paid') {
            order.stage = 'Completed';
          }

          await db.saveOrder(order);
          renderActiveView();
        }
      }
    });
  });

  orderList.querySelectorAll('.btn-mark-paid').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      const orderId = e.target.dataset.orderId;
      const order = orders.find(o => o.id === orderId);
      if (order) {
        order.paymentStatus = 'Paid';
        if (order.stage === 'Delivered') {
          order.stage = 'Completed';
        }
        await db.saveOrder(order);
        renderActiveView();
      }
    });
  });

  orderList.querySelectorAll('.btn-pdf-order').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const orderId = e.target.dataset.orderId;
      const order = orders.find(o => o.id === orderId);
      if (order) pdfGenerator.generateOrderPDF(order);
    });
  });

  orderList.querySelectorAll('.btn-pdf-invoice').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const orderId = e.target.dataset.orderId;
      const order = orders.find(o => o.id === orderId);
      if (order) pdfGenerator.generateInvoicePDF(order);
    });
  });

  orderList.querySelectorAll('.btn-flag-issue').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      const orderId = e.target.dataset.orderId;
      const issueType = prompt('Enter issue type (e.g. Missing Product, Supplier Delay, Delivery Delay, Customer Not Responding):', 'Missing Product');
      if (issueType) {
        const order = orders.find(o => o.id === orderId);
        if (order) {
          order.issue = issueType;
          await db.saveOrder(order);
          renderActiveView();
        }
      }
    });
  });

  orderList.querySelectorAll('.btn-resolve-issue').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      const orderId = e.target.dataset.orderId;
      const order = orders.find(o => o.id === orderId);
      if (order) {
        order.issue = 'None';
        await db.saveOrder(order);
        renderActiveView();
      }
    });
  });
}

function setupOrderFilters() {
  document.getElementById('btn-filter-active').addEventListener('click', () => {
    activeOrderFilter = 'active';
    renderActiveView();
  });
  document.getElementById('btn-filter-completed').addEventListener('click', () => {
    activeOrderFilter = 'completed';
    renderActiveView();
  });
  document.getElementById('btn-filter-all').addEventListener('click', () => {
    activeOrderFilter = 'all';
    renderActiveView();
  });
}

async function showEditOrderModal(orderId) {
  const orders = await db.getOrders();
  const order = orders.find(o => o.id === orderId);
  if (!order) return;

  const zones = await db.getDeliveryZones();
  const catalog = await db.getProducts();

  const modal = document.createElement('div');
  modal.className = 'modal-overlay active';
  modal.style.zIndex = '2000';

  let productRows = '';
  order.products.forEach((p, idx) => {
    productRows += `
      <tr class="edit-prod-row" data-idx="${idx}">
        <td>
          <input type="text" class="form-control edit-prod-name" list="catalog-products" value="${p.name}" required style="padding: 6px 10px; font-size:13px;">
        </td>
        <td>
          <input type="number" step="any" class="form-control edit-prod-qty" value="${p.quantity}" required style="padding: 6px 10px; font-size:13px; width:70px;">
        </td>
        <td>
          <input type="text" class="form-control edit-prod-unit" value="${p.unit || 'kg'}" required style="padding: 6px 10px; font-size:13px; width:60px;">
        </td>
        <td>
          <input type="number" class="form-control edit-prod-price" value="${p.price || 0}" required style="padding: 6px 10px; font-size:13px; width:90px;">
        </td>
        <td>
          <button type="button" class="btn btn-danger btn-sm btn-delete-row" style="padding:4px 8px; font-size:11px;">Remove</button>
        </td>
      </tr>
    `;
  });

  const selectZonesHTML = zones.map(z => `
    <option value="${z.name}" ${z.name.toLowerCase() === order.deliveryZone.toLowerCase() ? 'selected' : ''}>${z.name} (Fee: Rp ${z.fee.toLocaleString()})</option>
  `).join('');

  modal.innerHTML = `
    <datalist id="catalog-products">
      ${catalog.map(p => `<option value="${p.name}"></option>`).join('')}
    </datalist>
    <div class="modal-box" style="max-width: 800px;">
      <div class="modal-header">
        <h2>Edit Order Details & Items</h2>
        <button class="modal-close btn-close-edit">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="width:24px;height:24px;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>

      <form id="edit-order-form">
        <div class="review-grid">
          <div class="form-group">
            <label class="form-label">Client Name</label>
            <input type="text" id="edit-client-name" class="form-control" value="${order.clientName}" required>
          </div>
          <div class="form-group">
            <label class="form-label">WhatsApp Contact</label>
            <input type="text" id="edit-whatsapp" class="form-control" value="${order.whatsapp}" required>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Delivery Address</label>
          <input type="text" id="edit-address" class="form-control" value="${order.deliveryAddress}" required>
        </div>
        <div class="review-grid">
          <div class="form-group">
            <label class="form-label">Delivery Zone</label>
            <select id="edit-zone" class="form-control" required>
              ${selectZonesHTML}
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Preferred Date</label>
            <input type="date" id="edit-date" class="form-control" value="${order.deliveryDate}" required>
          </div>
        </div>
        <div class="review-grid">
          <div class="form-group">
            <label class="form-label">Time Window</label>
            <input type="text" id="edit-time" class="form-control" value="${order.timeWindow || ''}" placeholder="e.g. 09:00 - 12:00">
          </div>
          <div class="form-group">
            <label class="form-label">Payment Status</label>
            <select id="edit-payment-status" class="form-control">
              <option value="Pending" ${order.paymentStatus === 'Pending' ? 'selected' : ''}>Pending</option>
              <option value="Paid" ${order.paymentStatus === 'Paid' ? 'selected' : ''}>Paid</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Order Items</label>
          <table class="review-products-table" style="width: 100%;">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Unit</th>
                <th>Price (IDR)</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody id="edit-order-products-body">
              ${productRows}
            </tbody>
          </table>
          <button type="button" class="btn btn-secondary btn-sm" id="btn-add-edit-row" style="margin-top:10px;">+ Add Item</button>
        </div>

        <div class="form-group">
          <label class="form-label">Special Notes</label>
          <textarea id="edit-notes" class="form-control" style="min-height:60px;">${order.notes || ''}</textarea>
        </div>

        <div class="actions-row">
          <button type="button" class="btn btn-secondary btn-close-edit" style="flex:1;">Cancel</button>
          <button type="submit" class="btn btn-primary" style="flex:2;">Save Changes</button>
        </div>
      </form>
    </div>
  `;

  document.body.appendChild(modal);

  const closeModal = () => modal.remove();
  modal.querySelectorAll('.btn-close-edit').forEach(btn => btn.addEventListener('click', closeModal));

  modal.querySelector('#btn-add-edit-row').addEventListener('click', () => {
    const tbody = modal.querySelector('#edit-order-products-body');
    const idx = tbody.children.length;
    const row = document.createElement('tr');
    row.className = 'edit-prod-row';
    row.dataset.idx = idx;
    row.innerHTML = `
      <td>
        <input type="text" class="form-control edit-prod-name" list="catalog-products" value="Avocado Bali" required style="padding: 6px 10px; font-size:13px;">
      </td>
      <td>
        <input type="number" step="any" class="form-control edit-prod-qty" value="1" required style="padding: 6px 10px; font-size:13px; width:70px;">
      </td>
      <td>
        <input type="text" class="form-control edit-prod-unit" value="kg" required style="padding: 6px 10px; font-size:13px; width:60px;">
      </td>
      <td>
        <input type="number" class="form-control edit-prod-price" value="55000" required style="padding: 6px 10px; font-size:13px; width:90px;">
      </td>
      <td>
        <button type="button" class="btn btn-danger btn-sm btn-delete-row" style="padding:4px 8px; font-size:11px;">Remove</button>
      </td>
    `;
    tbody.appendChild(row);

    row.querySelector('.btn-delete-row').addEventListener('click', () => row.remove());

    const nameInput = row.querySelector('.edit-prod-name');
    nameInput.addEventListener('change', (e) => {
      const match = catalog.find(p => p.name.toLowerCase() === e.target.value.toLowerCase());
      if (match) {
        row.querySelector('.edit-prod-unit').value = match.unit || 'kg';
        row.querySelector('.edit-prod-price').value = match.sellingPrice || 0;
      }
    });
  });

  modal.querySelectorAll('.btn-delete-row').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.target.closest('tr').remove();
    });
  });

  modal.querySelectorAll('.edit-prod-name').forEach(nameInput => {
    nameInput.addEventListener('change', (e) => {
      const row = e.target.closest('tr');
      const match = catalog.find(p => p.name.toLowerCase() === e.target.value.toLowerCase());
      if (match) {
        row.querySelector('.edit-prod-unit').value = match.unit || 'kg';
        row.querySelector('.edit-prod-price').value = match.sellingPrice || 0;
      }
    });
  });

  modal.querySelector('#edit-order-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const clientName = modal.querySelector('#edit-client-name').value.trim();
    const whatsapp = modal.querySelector('#edit-whatsapp').value.trim();
    const deliveryAddress = modal.querySelector('#edit-address').value.trim();
    const deliveryZone = modal.querySelector('#edit-zone').value;
    const deliveryDate = modal.querySelector('#edit-date').value;
    const timeWindow = modal.querySelector('#edit-time').value.trim();
    const paymentStatus = modal.querySelector('#edit-payment-status').value;
    const notes = modal.querySelector('#edit-notes').value.trim();

    const productsList = [];
    modal.querySelectorAll('.edit-prod-row').forEach(row => {
      const name = row.querySelector('.edit-prod-name').value.trim();
      const qty = parseFloat(row.querySelector('.edit-prod-qty').value);
      const unit = row.querySelector('.edit-prod-unit').value.trim();
      const price = parseInt(row.querySelector('.edit-prod-price').value, 10);

      if (name && !isNaN(qty) && !isNaN(price)) {
        productsList.push({ name, quantity: qty, unit, price });
      }
    });

    if (productsList.length === 0) {
      alert('Order must contain at least one item.');
      return;
    }

    const selectedZone = zones.find(z => z.name.toLowerCase() === deliveryZone.toLowerCase());
    const deliveryFee = selectedZone ? selectedZone.fee : 20000;
    const subtotal = productsList.reduce((acc, p) => acc + (p.price * p.quantity), 0);
    const totalAmount = subtotal + deliveryFee - (order.discount || 0);

    order.clientName = clientName;
    order.whatsapp = whatsapp;
    order.deliveryAddress = deliveryAddress;
    order.deliveryZone = deliveryZone;
    order.deliveryDate = deliveryDate;
    order.timeWindow = timeWindow;
    order.paymentStatus = paymentStatus;
    order.notes = notes;
    order.products = productsList;
    order.subtotal = subtotal;
    order.deliveryFee = deliveryFee;
    order.totalAmount = totalAmount;

    await db.saveOrder(order);
    closeModal();
    renderActiveView();
  });
}

async function showProcureOrderModal(orderId) {
  const orders = await db.getOrders();
  const order = orders.find(o => o.id === orderId);
  if (!order) return;

  const suppliers = await db.getSuppliers();
  const catalog = await db.getProducts();

  const modal = document.createElement('div');
  modal.className = 'modal-overlay active';
  modal.style.zIndex = '2000';

  let rowsHTML = '';
  order.products.forEach((p, idx) => {
    const catItem = catalog.find(c => c.name.toLowerCase() === p.name.toLowerCase());
    const bestSupplier = catItem ? (catItem.bestSupplier || suppliers[0].name) : suppliers[0].name;
    const costPrice = catItem ? (catItem.supplierPrice || 0) : 0;
    const unit = p.unit || 'kg';

    const supplierOptions = suppliers.map(s => `
      <option value="${s.name}" ${s.name === bestSupplier ? 'selected' : ''}>${s.name}</option>
    `).join('');

    rowsHTML += `
      <tr class="procure-item-row" data-name="${p.name}" data-qty="${p.quantity}" data-unit="${unit}" data-cost="${costPrice}">
        <td style="text-align: center;">
          <input type="checkbox" checked class="procure-item-checkbox" style="width:18px; height:18px; accent-color:var(--green);">
        </td>
        <td style="font-weight: 700; color:var(--green);">${p.name}</td>
        <td style="font-weight: 700; text-align: center;">${p.quantity} ${unit}</td>
        <td>
          <select class="form-control procure-item-supplier" style="padding: 6px 10px; font-size:13px;">
            ${supplierOptions}
          </select>
        </td>
      </tr>
    `;
  });

  modal.innerHTML = `
    <div class="modal-box" style="max-width: 700px;">
      <div class="modal-header">
        <h2>Procure Items for Customer Order ${order.orderNumber || order.id}</h2>
        <button class="modal-close btn-close-procure">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="width:24px;height:24px;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>

      <div style="font-size: 13px; color: var(--grey-text); margin-bottom: 20px; line-height: 1.4;">
        Select products and suppliers to automatically generate Purchase Orders (POs) linked to this customer order.
      </div>

      <form id="procure-order-form">
        <table class="review-products-table" style="width:100%; margin-bottom: 20px;">
          <thead>
            <tr>
              <th style="width: 50px; text-align: center;">Procure?</th>
              <th>Product</th>
              <th style="text-align: center;">Quantity</th>
              <th>Supplier</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHTML}
          </tbody>
        </table>

        <div class="actions-row">
          <button type="button" class="btn btn-secondary btn-close-procure" style="flex:1;">Cancel</button>
          <button type="submit" class="btn btn-primary" style="flex:2;">🚀 Generate Purchase Orders</button>
        </div>
      </form>
    </div>
  `;

  document.body.appendChild(modal);

  const closeModal = () => modal.remove();
  modal.querySelectorAll('.btn-close-procure').forEach(btn => btn.addEventListener('click', closeModal));

  modal.querySelector('#procure-order-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const supplierBaskets = {};
    modal.querySelectorAll('.procure-item-row').forEach(row => {
      const checkbox = row.querySelector('.procure-item-checkbox');
      if (checkbox && checkbox.checked) {
        const name = row.dataset.name;
        const qty = parseFloat(row.dataset.qty);
        const unit = row.dataset.unit;
        const cost = parseInt(row.dataset.cost, 10);
        const supplierName = row.querySelector('.procure-item-supplier').value;

        supplierBaskets[supplierName] = supplierBaskets[supplierName] || [];
        supplierBaskets[supplierName].push({ name, quantity: qty, unit, expectedPrice: cost });
      }
    });

    const supplierNames = Object.keys(supplierBaskets);
    if (supplierNames.length === 0) {
      alert('Please select at least one item to procure.');
      return;
    }

    let poCount = 0;
    for (const [suppName, items] of Object.entries(supplierBaskets)) {
      const totalPrice = items.reduce((acc, it) => acc + (it.expectedPrice * it.quantity), 0);
      const newPO = {
        supplierName: suppName,
        products: items.map(it => ({
          name: it.name,
          quantity: it.quantity,
          unit: it.unit,
          expectedPrice: it.expectedPrice,
          confirmedPrice: it.expectedPrice
        })),
        totalPrice: totalPrice,
        eta: order.deliveryDate || new Date().toISOString().split('T')[0],
        paymentStatus: 'Waiting Quote',
        qualityStatus: 'OK',
        attachments: [],
        date: new Date().toISOString(),
        orderRef: order.orderNumber || order.id
      };

      await db.savePurchaseRequest(newPO);
      poCount++;
    }

    alert(`Successfully generated ${poCount} Purchase Order(s) for customer order ${order.orderNumber || order.id}!`);
    closeModal();
    renderActiveView();
  });
}

// Automatically deduct stock and boxes when packaging starts
async function handleInventoryDeduction(order) {
  const stock = await db.getFreshStock();
  const materials = await db.getMaterials();

  // 1. Deduct fruits from freshStock
  for (const item of order.products) {
    const freshItem = stock.find(fs => fs.name.toLowerCase() === item.name.toLowerCase());
    if (freshItem) {
      freshItem.quantity = Math.max(0, freshItem.quantity - item.quantity);
      // Reduce reserved count
      if (freshItem.reservedQuantity) {
        freshItem.reservedQuantity = Math.max(0, freshItem.reservedQuantity - item.quantity);
      }
      await db.saveFreshStock(freshItem);
    }
  }

  // 2. Deduct boxes from materials (assume Medium Box for standard orders)
  const boxItem = materials.find(m => m.name === 'Delivery Box Medium');
  if (boxItem) {
    boxItem.quantity = Math.max(0, boxItem.quantity - 1);
    if (boxItem.quantity < boxItem.minQuantity) {
      boxItem.status = boxItem.quantity === 0 ? 'Reorder Needed' : 'Low Stock';
    }
    await db.saveMaterial(boxItem);
  }
}

// ==================== MODULE 4: DELIVERY ====================
async function renderDelivery(container) {
  renderPipelineRibbon(container, 1, ['Scheduled', 'Assigned', 'Picked Up', 'On Delivery', 'Delivered']);

  const orders = await db.getOrders();
  const drivers = await db.getDrivers();
  const inbox = await db.getInbox();

  // Tab Selector UI
  const tabRow = document.createElement('div');
  tabRow.style.display = 'flex';
  tabRow.style.gap = '10px';
  tabRow.style.marginBottom = '25px';
  tabRow.innerHTML = `
    <button class="btn btn-sm ${activeDeliverySubTab === 'active' ? 'btn-primary' : 'btn-secondary'}" id="btn-deliv-active" style="font-weight:700;">📦 Active Deliveries</button>
    <button class="btn btn-sm ${activeDeliverySubTab === 'drivers' ? 'btn-primary' : 'btn-secondary'}" id="btn-deliv-drivers" style="font-weight:700;">👤 Drivers List</button>
    <button class="btn btn-sm ${activeDeliverySubTab === 'inbox' ? 'btn-primary' : 'btn-secondary'}" id="btn-deliv-inbox" style="font-weight:700;">💬 Delivery Inbox</button>
  `;
  container.appendChild(tabRow);

  // Tab click handlers
  tabRow.querySelector('#btn-deliv-active').addEventListener('click', () => {
    activeDeliverySubTab = 'active';
    renderActiveView();
  });
  tabRow.querySelector('#btn-deliv-drivers').addEventListener('click', () => {
    activeDeliverySubTab = 'drivers';
    renderActiveView();
  });
  tabRow.querySelector('#btn-deliv-inbox').addEventListener('click', () => {
    activeDeliverySubTab = 'inbox';
    renderActiveView();
  });

  // SUB-VIEW 1: ACTIVE DELIVERIES
  if (activeDeliverySubTab === 'active') {
    const delivList = document.createElement('div');
    delivList.className = 'cards-list';
    
    const deliveryOrders = orders.filter(o => o.stage !== 'Received' && o.stage !== 'Confirmed');

    if (deliveryOrders.length === 0) {
      delivList.innerHTML = `
        <div style="text-align:center; padding: 40px; background-color: var(--cream-strong); border-radius: 20px; border: 1px solid var(--line);">
          <p style="font-weight:600; color:var(--grey-text);">No deliveries scheduled currently. Move orders forward from received status.</p>
        </div>
      `;
      container.appendChild(delivList);
      return;
    }

    deliveryOrders.forEach(order => {
      const card = document.createElement('div');
      card.className = 'task-card';

      let deliveryStage = order.deliveryStatus || 'Scheduled';
      let badgeClass = 'badge-orange';
      if (deliveryStage === 'Delivered') badgeClass = 'badge-green';
      if (order.issue === 'Delivery Delay' || order.issue === 'Delivery Failed') badgeClass = 'badge-red';

      // Match driver to get details
      let assignedDriverName = 'Unassigned';
      let matchDriver = null;
      if (order.notes) {
        // Look for "Driver assigned: [Name]"
        const match = order.notes.match(/Driver assigned:\s*([^.]+)/);
        if (match) {
          assignedDriverName = match[1].trim();
          matchDriver = drivers.find(d => d.name.toLowerCase() === assignedDriverName.toLowerCase());
        }
      }

      let waDispatchHTML = '';
      if (matchDriver) {
        waDispatchHTML = `
          <button class="btn btn-secondary btn-sm btn-dispatch-wa" data-order-id="${order.id}" style="color:#2e7d32; font-weight:700;">💬 Dispatch WA</button>
        `;
      }

      card.innerHTML = `
        <div class="task-card-header">
          <div class="task-card-title">
            <h3>Delivery for Order ${order.orderNumber || order.id}</h3>
            <span class="task-card-badge ${badgeClass}">${deliveryStage}</span>
          </div>
          <span style="font-weight:800;">${order.deliveryZone}</span>
        </div>

        <div class="task-card-info" style="border:none; margin-bottom:5px;">
          <div class="info-item">
            <div class="info-label">Client Address</div>
            <div class="info-val" style="font-weight:700; color:var(--green);">${order.clientName} - ${order.deliveryAddress}</div>
          </div>
          <div class="info-item">
            <div class="info-label">WhatsApp Contact</div>
            <div class="info-val">${order.whatsapp}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Time Window</div>
            <div class="info-val">${order.deliveryDate} (${order.timeWindow || 'Flexible'})</div>
          </div>
          <div class="info-item">
            <div class="info-label">Driver Assigned</div>
            <div class="info-val" style="color:var(--olive); font-weight:700;">${assignedDriverName}</div>
          </div>
        </div>

        <div class="task-card-actions" style="margin-top:15px;">
          <button class="btn btn-primary btn-sm btn-assign-driver" data-order-id="${order.id}">Assign Driver</button>
          ${waDispatchHTML}
          <button class="btn btn-secondary btn-sm btn-status-pickup" data-order-id="${order.id}">Picked Up</button>
          <button class="btn btn-secondary btn-sm btn-status-dispatch" data-order-id="${order.id}">On Delivery</button>
          <button class="btn btn-secondary btn-sm btn-status-delivered" data-order-id="${order.id}">Delivered</button>
          <button class="btn btn-danger btn-sm btn-delivery-failed" data-order-id="${order.id}">Failed / Delay</button>
        </div>
      `;
      delivList.appendChild(card);
    });

    container.appendChild(delivList);

    // Event Handlers for Active Deliveries
    delivList.querySelectorAll('.btn-assign-driver').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        const orderId = e.target.dataset.orderId;
        const currentOrder = orders.find(o => o.id === orderId);
        if (!currentOrder) return;

        // Custom Driver Selector Modal
        const driverOptions = drivers.map(d => `<option value="${d.name}">${d.name} (${d.vehicle})</option>`).join('');
        const modal = document.createElement('div');
        modal.className = 'modal-overlay active';
        modal.style.zIndex = '2000';
        modal.innerHTML = `
          <div class="modal-box" style="max-width: 450px;">
            <div class="modal-header">
              <h2>Assign Driver to Delivery</h2>
              <button class="modal-close btn-close-assign">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="width:24px;height:24px;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </div>
            <form id="assign-driver-form">
              <div class="form-group">
                <label class="form-label">Select Driver</label>
                <select id="assign-driver-select" class="form-control" required style="padding: 10px 14px;">
                  <option value="">-- Select Registered Driver --</option>
                  ${driverOptions}
                  <option value="custom">-- Type Custom Name --</option>
                </select>
              </div>
              <div class="form-group" id="custom-driver-group" style="display:none;">
                <label class="form-label">Custom Driver Name</label>
                <input type="text" id="assign-driver-custom" class="form-control" placeholder="e.g. Ketut Delivery" style="padding: 10px 14px;">
              </div>
              <div class="actions-row">
                <button type="button" class="btn btn-secondary btn-close-assign" style="flex:1;">Cancel</button>
                <button type="submit" class="btn btn-primary" style="flex:1;">Assign</button>
              </div>
            </form>
          </div>
        `;
        document.body.appendChild(modal);

        // Close handlers
        const closeModal = () => modal.remove();
        modal.querySelectorAll('.btn-close-assign').forEach(b => b.addEventListener('click', closeModal));

        // Dropdown change handler
        const select = modal.querySelector('#assign-driver-select');
        const customGroup = modal.querySelector('#custom-driver-group');
        select.addEventListener('change', (ev) => {
          if (ev.target.value === 'custom') {
            customGroup.style.display = 'block';
            modal.querySelector('#assign-driver-custom').required = true;
          } else {
            customGroup.style.display = 'none';
            modal.querySelector('#assign-driver-custom').required = false;
          }
        });

        // Form submit handler
        modal.querySelector('#assign-driver-form').addEventListener('submit', async (formEv) => {
          formEv.preventDefault();
          let name = select.value;
          if (name === 'custom') {
            name = modal.querySelector('#assign-driver-custom').value.trim();
          }

          if (name) {
            // Clean previous assignment notes if any
            let cleanNotes = currentOrder.notes || '';
            cleanNotes = cleanNotes.replace(/Driver assigned:[^.]+\.?\s*/g, '');

            currentOrder.notes = `Driver assigned: ${name}. ${cleanNotes}`.trim();
            currentOrder.deliveryStatus = 'Assigned';
            if (currentOrder.stage === 'Confirmed' || currentOrder.stage === 'Products Checked') {
              currentOrder.stage = 'Delivery Scheduled';
            }
            await db.saveOrder(currentOrder);
            closeModal();
            renderActiveView();
          }
        });
      });
    });

    // Dispatch WA Event Handler
    delivList.querySelectorAll('.btn-dispatch-wa').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        const orderId = e.target.dataset.orderId;
        const currentOrder = orders.find(o => o.id === orderId);
        if (!currentOrder) return;

        let assignedDriverName = '';
        if (currentOrder.notes) {
          const match = currentOrder.notes.match(/Driver assigned:\s*([^.]+)/);
          if (match) assignedDriverName = match[1].trim();
        }

        const matchDriver = drivers.find(d => d.name.toLowerCase() === assignedDriverName.toLowerCase());
        if (matchDriver) {
          const itemsText = currentOrder.products.map(p => `- ${p.quantity} ${p.unit || 'kg'} of ${p.name}`).join('\n');
          const msg = `Hello ${matchDriver.name}!\n\nHere are the delivery details for Order ${currentOrder.orderNumber || currentOrder.id}:\n\nClient: ${currentOrder.clientName} (${currentOrder.whatsapp})\nAddress: ${currentOrder.deliveryAddress} (${currentOrder.deliveryZone})\nPreferred Time: ${currentOrder.deliveryDate} (${currentOrder.timeWindow || 'Flexible'})\nItems:\n${itemsText}\n\nNotes: ${currentOrder.notes || 'None'}\n\nPlease confirm when picked up! Thank you.`;
          
          const phone = matchDriver.whatsapp.replace(/[\s-+]/g, '');
          window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
        } else {
          alert('No registered driver found to get contact number.');
        }
      });
    });

    const updateDeliveryStatus = async (orderId, status, stageVal) => {
      const order = orders.find(o => o.id === orderId);
      if (order) {
        order.deliveryStatus = status;
        if (stageVal) order.stage = stageVal;
        await db.saveOrder(order);
        renderActiveView();
      }
    };

    delivList.querySelectorAll('.btn-status-pickup').forEach(btn => {
      btn.addEventListener('click', (e) => updateDeliveryStatus(e.target.dataset.orderId, 'Picked Up', 'Scheduled'));
    });
    delivList.querySelectorAll('.btn-status-dispatch').forEach(btn => {
      btn.addEventListener('click', (e) => updateDeliveryStatus(e.target.dataset.orderId, 'On Delivery', 'Scheduled'));
    });
    delivList.querySelectorAll('.btn-status-delivered').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const orderId = e.target.dataset.orderId;
        updateDeliveryStatus(orderId, 'Delivered', 'Completed');
      });
    });
    delivList.querySelectorAll('.btn-delivery-failed').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        const orderId = e.target.dataset.orderId;
        const reason = prompt('Specify Delivery Failure/Delay Reason:', 'Customer Not Responding');
        if (reason) {
          const order = orders.find(o => o.id === orderId);
          if (order) {
            order.deliveryStatus = 'Failed / Reschedule';
            order.issue = 'Delivery Delay';
            order.notes = `Delivery issues: ${reason}. ${order.notes || ''}`;
            await db.saveOrder(order);
            renderActiveView();
          }
        }
      });
    });
  }

  // SUB-VIEW 2: DRIVERS LIST
  else if (activeDeliverySubTab === 'drivers') {
    const listCard = document.createElement('div');
    listCard.className = 'task-card';
    listCard.style.padding = '24px';
    listCard.style.backgroundColor = 'var(--cream-strong)';

    let driverRowsHTML = '';
    drivers.forEach(d => {
      driverRowsHTML += `
        <tr style="border-bottom:1px solid var(--line); font-size:14px;">
          <td style="padding:12px; font-weight:700; color:var(--green);">${d.name}</td>
          <td style="padding:12px;">${d.whatsapp}</td>
          <td style="padding:12px; font-weight:600;">${d.vehicle}</td>
          <td style="padding:12px;">
            <span class="task-card-badge ${d.status === 'Active' ? 'badge-green' : 'badge-grey'}" style="font-size:10px; padding:2px 8px;">${d.status}</span>
          </td>
          <td style="padding:12px; text-align:right;">
            <div style="display:flex; gap:6px; justify-content:flex-end;">
              <button class="btn btn-secondary btn-sm btn-driver-wa" data-phone="${d.whatsapp}" data-name="${d.name}" style="padding:4px 8px; font-size:11px; color:#2e7d32; font-weight:700;">💬 Chat</button>
              <button class="btn btn-secondary btn-sm btn-driver-edit" data-id="${d.id}" style="padding:4px 8px; font-size:11px; font-weight:700;">✏️ Edit</button>
              <button class="btn btn-danger btn-sm btn-driver-delete" data-id="${d.id}" style="padding:4px 8px; font-size:11px; font-weight:700;">🗑️ Delete</button>
            </div>
          </td>
        </tr>
      `;
    });

    listCard.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
        <h2 style="font-family: var(--font-title); font-size: 20px; font-weight: 800; color: var(--green); margin:0;">Registered Fleet Drivers</h2>
        <button class="btn btn-primary btn-sm" id="btn-add-driver" style="font-weight:700;">➕ Add New Driver</button>
      </div>

      <div style="overflow-x: auto; border: 1px solid var(--line); border-radius:12px; box-shadow: var(--shadow); background-color:#fff;">
        <table style="width:100%; border-collapse:collapse;">
          <thead>
            <tr style="background-color: var(--green); color:var(--cream-strong); font-size:12px; text-align:left;">
              <th style="padding:12px;">Driver Name</th>
              <th style="padding:12px;">WhatsApp Number</th>
              <th style="padding:12px;">Vehicle Type</th>
              <th style="padding:12px;">Status</th>
              <th style="padding:12px; text-align:right;">Actions</th>
            </tr>
          </thead>
          <tbody>
            ${driverRowsHTML || '<tr><td colspan="5" style="padding:20px; text-align:center; color:var(--grey-text); font-style:italic;">No registered drivers.</td></tr>'}
          </tbody>
        </table>
      </div>
    `;
    container.appendChild(listCard);

    // Add Driver Event Handler
    listCard.querySelector('#btn-add-driver').addEventListener('click', async () => {
      const name = prompt('Enter Driver Name:');
      if (!name) return;
      const phone = prompt('Enter WhatsApp Number (e.g. +628123456789):', '+62');
      if (!phone) return;
      const vehicle = prompt('Enter Vehicle Type (Scooter, Car, Van):', 'Scooter');
      if (!vehicle) return;

      const newDriver = {
        name,
        whatsapp: phone,
        status: 'Active',
        vehicle
      };
      await db.saveDriver(newDriver);
      renderActiveView();
    });

    // Chat Driver Handler
    listCard.querySelectorAll('.btn-driver-wa').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const phone = e.target.dataset.phone.replace(/[\s-+]/g, '');
        const name = e.target.dataset.name;
        const msg = `Hello ${name}, this is BALI FRUITS operations department. Let us know if you are ready for today's deliveries.`;
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
      });
    });

    // Edit Driver Handler
    listCard.querySelectorAll('.btn-driver-edit').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        const id = e.target.dataset.id;
        const driver = drivers.find(d => d.id === id);
        if (driver) {
          const name = prompt('Edit Driver Name:', driver.name);
          if (!name) return;
          const phone = prompt('Edit WhatsApp Number:', driver.whatsapp);
          if (!phone) return;
          const vehicle = prompt('Edit Vehicle Type:', driver.vehicle);
          if (!vehicle) return;
          const status = prompt('Edit Status (Active, Inactive):', driver.status);
          if (!status) return;

          driver.name = name;
          driver.whatsapp = phone;
          driver.vehicle = vehicle;
          driver.status = status;

          await db.saveDriver(driver);
          renderActiveView();
        }
      });
    });

    // Delete Driver Handler
    listCard.querySelectorAll('.btn-driver-delete').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        const id = e.target.dataset.id;
        const driver = drivers.find(d => d.id === id);
        if (driver && confirm(`Are you sure you want to delete driver ${driver.name}?`)) {
          await db.deleteDriver(id);
          renderActiveView();
        }
      });
    });
  }

  // SUB-VIEW 3: DELIVERY INBOX
  else if (activeDeliverySubTab === 'inbox') {
    const listWrapper = document.createElement('div');
    listWrapper.className = 'cards-list';
    
    // Filter driver messages
    const driverMessages = inbox.filter(msg => msg.isDriver === true);

    if (driverMessages.length === 0) {
      listWrapper.innerHTML = `
        <div style="text-align:center; padding: 40px; background-color: var(--cream-strong); border-radius: 20px; border: 1px solid var(--line);">
          <p style="font-weight:600; color:var(--grey-text);">No driver updates in inbox currently.</p>
        </div>
      `;
      container.appendChild(listWrapper);
      return;
    }

    driverMessages.forEach(msg => {
      const card = document.createElement('div');
      card.className = 'task-card';
      
      let badgeClass = 'badge-orange';
      if (msg.status === 'Done') badgeClass = 'badge-green';
      
      let linkHTML = '';
      if (msg.orderRef) {
        linkHTML = `
          <div style="margin-top: 10px; font-size: 13px; font-weight: 700; color: var(--green);">
            Order Reference: <a href="#orders" class="inbox-order-link" data-order-ref="${msg.orderRef}" style="text-decoration: underline; color: var(--olive); font-weight: 800; cursor: pointer;">${msg.orderRef}</a>
          </div>
        `;
      }

      let quickActionHTML = '';
      if (msg.status !== 'Done' && msg.orderRef && (msg.messageText.toLowerCase().includes('deliver') || msg.messageText.toLowerCase().includes('completed') || msg.messageText.toLowerCase().includes('consegnato'))) {
        quickActionHTML = `
          <button class="btn btn-primary btn-sm btn-quick-delivered" data-order-ref="${msg.orderRef}" data-msg-id="${msg.id}" style="font-weight: 700;">✓ Mark Delivered</button>
        `;
      }
      
      card.innerHTML = `
        <div class="task-card-header">
          <div class="task-card-title">
            <h3>Driver Update: ${msg.senderName || 'Unknown'}</h3>
            <span class="task-card-badge ${badgeClass}">${msg.status}</span>
          </div>
          <span style="font-size:12px; color:var(--grey-text); font-weight:600;">${new Date(msg.date).toLocaleString('id-ID')}</span>
        </div>
        
        <div style="background-color:rgba(255,255,255,0.7); border:1px solid var(--line); border-radius:12px; padding:15px; font-size:14px; line-height:1.5; white-space:pre-wrap; margin-bottom:18px;">${msg.messageText}</div>
        
        <div class="task-card-info" style="border:none; margin-bottom:5px; padding-bottom:0;">
          <div class="info-item">
            <div class="info-label">WhatsApp Contact</div>
            <div class="info-val">${msg.phoneOrEmail}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Source</div>
            <div class="info-val">${msg.source}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Action Required</div>
            <div class="info-val" style="color:var(--olive); font-weight:700;">${msg.suggestedAction}</div>
          </div>
        </div>
        
        ${linkHTML}
        
        <div class="task-card-actions" style="margin-top:15px;">
          ${msg.status !== 'Done' ? `
            <button class="btn btn-primary btn-sm btn-parse-card" data-msg-id="${msg.id}">Process</button>
            <button class="btn btn-secondary btn-sm btn-mark-done" data-msg-id="${msg.id}">Mark Done</button>
            ${quickActionHTML}
          ` : `
            <span style="color:var(--grey-text); font-size:13px; font-weight:600;">Processed Successfully</span>
          `}
        </div>
      `;
      listWrapper.appendChild(card);
    });

    container.appendChild(listWrapper);

    // Event Bindings for Delivery Inbox
    listWrapper.querySelectorAll('.inbox-order-link').forEach(link => {
      link.addEventListener('click', async (e) => {
        e.preventDefault();
        const ref = e.target.dataset.orderRef;
        const ordersList = await db.getOrders();
        const order = ordersList.find(o => o.orderNumber === ref || o.id === ref);
        if (order) {
          highlightOrderId = order.id;
          window.location.hash = '#orders';
        }
      });
    });

    listWrapper.querySelectorAll('.btn-quick-delivered').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        const msgId = e.target.dataset.msgId;
        const ref = e.target.dataset.orderRef;
        
        const ordersList = await db.getOrders();
        const order = ordersList.find(o => o.orderNumber === ref || o.id === ref);
        if (order) {
          order.deliveryStatus = 'Delivered';
          order.stage = 'Completed';
          await db.saveOrder(order);
        }

        const msg = inbox.find(m => m.id === msgId);
        if (msg) {
          msg.status = 'Done';
          await db.saveInbox(msg);
        }

        alert(`Order ${ref} has been marked as Delivered!`);
        renderActiveView();
      });
    });

    listWrapper.querySelectorAll('.btn-parse-card').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        const msgId = e.target.dataset.msgId;
        const msg = inbox.find(m => m.id === msgId);
        if (msg) {
          currentIngestingMsgId = msg.id;
          document.getElementById('raw-message-text').value = msg.messageText;
          
          if (msg.parsedData) {
            document.getElementById('ingest-input-panel').style.display = 'none';
            document.getElementById('ingest-detected-type').textContent = `Detected Message Type: Driver message`;
            const formContainer = document.getElementById('review-fields-container');
            formContainer.innerHTML = '';
            populateDriverReview(formContainer, msg.parsedData);
            document.getElementById('ingest-review-panel').style.display = 'block';
          } else {
            document.getElementById('ingest-review-panel').style.display = 'none';
            document.getElementById('ingest-input-panel').style.display = 'block';
          }
          openIngestModal();
        }
      });
    });

    listWrapper.querySelectorAll('.btn-mark-done').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        const msgId = e.target.dataset.msgId;
        const msg = inbox.find(m => m.id === msgId);
        if (msg) {
          msg.status = 'Done';
          await db.saveInbox(msg);
          renderActiveView();
        }
      });
    });
  }
}

// ==================== MODULE 5: PRODUCTS & SUPPLIERS ====================
async function renderProducts(container) {
  renderPipelineRibbon(container, 3, ['Supplier Message', 'Parsed List', 'Staff Review', 'Price Updated', 'Supplier Selected', 'Ready for Order']);

  const products = await db.getProducts();
  const suppliers = await db.getSuppliers();
  const requests = await db.getPurchaseRequests();

  // 1. Render Sub-navigation view toggle row
  const viewToggleRow = document.createElement('div');
  viewToggleRow.style.display = 'flex';
  viewToggleRow.style.gap = '10px';
  viewToggleRow.style.marginBottom = '25px';
  viewToggleRow.style.borderBottom = '1px solid var(--line)';
  viewToggleRow.style.paddingBottom = '15px';
  
  viewToggleRow.innerHTML = `
    <button class="btn btn-sm ${activeProductView === 'catalog' ? 'btn-primary' : 'btn-secondary'}" id="btn-prod-catalog" style="font-weight:700;">📂 Catalog Cards</button>
    <button class="btn btn-sm ${activeProductView === 'matrix' ? 'btn-primary' : 'btn-secondary'}" id="btn-prod-matrix" style="font-weight:700;">📊 Comparison Matrix</button>
    <button class="btn btn-sm ${activeProductView === 'supplier-lists' ? 'btn-primary' : 'btn-secondary'}" id="btn-prod-supplier-lists" style="font-weight:700;">🤝 Supplier Price Lists</button>
  `;
  container.appendChild(viewToggleRow);

  // Hook toggle events
  viewToggleRow.querySelector('#btn-prod-catalog').addEventListener('click', () => {
    activeProductView = 'catalog';
    renderActiveView();
  });
  viewToggleRow.querySelector('#btn-prod-matrix').addEventListener('click', () => {
    activeProductView = 'matrix';
    renderActiveView();
  });
  viewToggleRow.querySelector('#btn-prod-supplier-lists').addEventListener('click', () => {
    activeProductView = 'supplier-lists';
    renderActiveView();
  });

  // 2. Render active product view
  if (activeProductView === 'catalog') {
    const splitHTML = document.createElement('div');
    splitHTML.className = 'split-grid';
    
    // Render Products list
    const prodCard = document.createElement('div');
    prodCard.className = 'split-col-card';
    prodCard.innerHTML = `<h2>Product catalog</h2>`;
    
    const prodList = document.createElement('div');
    prodList.className = 'settings-list';
    
    products.forEach(p => {
      const item = document.createElement('div');
      item.className = 'task-card';
      item.style.marginBottom = '16px';
      item.style.padding = '18px';
      item.style.backgroundColor = '#fff';
      
      // Backwards-compatible supplierQuotes mapping
      const quotes = p.supplierQuotes || {};
      if (p.bestSupplier && Object.keys(quotes).length === 0) {
        quotes[p.bestSupplier] = {
          price: p.supplierPrice,
          availability: p.availability || 'In Stock',
          date: p.lastUpdate || new Date().toISOString()
        };
      }

      // Determine the lowest price to suggest "Best Price"
      let lowestPrice = Infinity;
      let lowestSupplier = '';
      Object.entries(quotes).forEach(([supp, quote]) => {
        if (quote.price && quote.price > 0 && quote.price < lowestPrice) {
          lowestPrice = quote.price;
          lowestSupplier = supp;
        }
      });

      let quotesRowsHTML = '';
      if (Object.keys(quotes).length === 0) {
        quotesRowsHTML = `<div style="font-size:12px; color:var(--grey-text); font-style:italic;">No quotes registered. Ingest a supplier pricelist to update.</div>`;
      } else {
        quotesRowsHTML = Object.entries(quotes).map(([supp, quote]) => {
          const isBest = supp === lowestSupplier;
          const isActive = supp === p.bestSupplier;
          
          return `
            <div style="display:flex; justify-content:space-between; align-items:center; padding:8px 10px; background-color:${isActive ? 'rgba(143,214,191,0.12)' : 'rgba(0,0,0,0.01)'}; border:1px solid ${isActive ? 'var(--green)' : 'var(--line)'}; border-radius:8px; font-size:13px; margin-top:4px;">
              <div style="display:flex; flex-direction:column; gap:2px;">
                <span style="font-weight:700; color:var(--green-ink);">${supp} ${isBest ? '<span class="task-card-badge badge-green" style="font-size:9px; padding:2px 6px; margin-left:4px; text-transform:none;">Best Price</span>' : ''}</span>
                <span style="font-size:11px; color:var(--grey-text);">Quoted: <strong>${formatRupiah(quote.price)} / ${quote.unit || 'kg'}</strong> (${quote.availability})</span>
              </div>
              <div>
                ${isActive ? `
                  <span class="task-card-badge badge-green" style="font-size:11px; padding:3px 6px;">Active</span>
                ` : `
                  <button class="btn btn-secondary btn-sm btn-set-active-supplier" data-prod-id="${p.id}" data-supplier-name="${supp}" data-price="${quote.price}" data-avail="${quote.availability}" data-unit="${quote.unit || 'kg'}" style="padding:4px 8px; font-size:11px; font-weight:700;">Set Active</button>
                `}
              </div>
            </div>
          `;
        }).join('');
      }

      item.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
          <h3 style="font-family:var(--font-title); font-size:16px; font-weight:800; color:var(--green);">${p.name} <span style="font-size:11px; font-weight:600; color:var(--grey-text);">(${p.category})</span></h3>
          <span class="task-card-badge ${p.availability === 'In Stock' ? 'badge-green' : (p.availability === 'Limited' ? 'badge-orange' : 'badge-red')}">${p.availability}</span>
        </div>
        
        <div style="font-size:13px; margin-bottom:12px;">
          Selling Price: <strong style="color:var(--green-ink);">${formatRupiah(p.sellingPrice)} / ${p.en?.unit || p.unit || 'kg'}</strong>
        </div>
        <div style="margin-bottom: 12px;">
          <button class="btn btn-secondary btn-sm btn-edit-product" data-prod-id="${p.id}" style="width:100%; font-weight:700;">Edit Product & Translations</button>
        </div>
        
        <div style="border-top:1px dashed var(--line); padding-top:10px;">
          <div style="font-size:11px; font-weight:800; color:var(--olive); text-transform:uppercase; margin-bottom:8px; letter-spacing:0.04em;">Supplier Quotes Comparison</div>
          <div style="display:flex; flex-direction:column; gap:6px;">
            ${quotesRowsHTML}
          </div>
        </div>
      `;
      prodList.appendChild(item);
    });
    prodCard.appendChild(prodList);

    // Set Active Supplier click handler
    prodList.querySelectorAll('.btn-set-active-supplier').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        const prodId = e.currentTarget.dataset.prodId;
        const supplierName = e.currentTarget.dataset.supplierName;
        const price = parseInt(e.currentTarget.dataset.price, 10);
        const avail = e.currentTarget.dataset.avail;
        const unit = e.currentTarget.dataset.unit;
        
        const prodList = await db.getProducts();
        const product = prodList.find(p => p.id === prodId);
        if (product) {
          product.bestSupplier = supplierName;
          product.supplierPrice = price;
          product.availability = avail;
          if (unit) product.unit = unit;
          product.lastUpdate = new Date().toISOString();
          await db.saveProduct(product);
          renderActiveView();
        }
      });
    });

    // Render Suppliers & Purchase Requests Column
    const suppCard = document.createElement('div');
    suppCard.className = 'split-col-card';
    suppCard.innerHTML = `<h2>Suppliers & Purchase Requests</h2>`;

    // A. Daily Supplier Procurement Consolidation Panel
    const procurementDiv = document.createElement('div');
    procurementDiv.style.backgroundColor = 'rgba(23, 61, 43, 0.03)';
    procurementDiv.style.border = '1px solid var(--line)';
    procurementDiv.style.borderRadius = '16px';
    procurementDiv.style.padding = '18px';
    procurementDiv.style.marginBottom = '25px';
    procurementDiv.style.boxShadow = 'var(--shadow)';
    
    // Default date to tomorrow's date
    const tomorrowStr = new Date(Date.now() + 86400000).toISOString().split('T')[0];
    
    procurementDiv.innerHTML = `
      <h3 style="font-size:14px; font-weight:800; color:var(--green); text-transform:uppercase; margin-top:0; margin-bottom:8px; letter-spacing:0.04em; display:flex; align-items:center; gap:6px;">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" style="width:16px;height:16px;stroke-width:2.5;"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
        Supplier Procurement
      </h3>
      <p style="font-size:12px; color:var(--grey-text); margin-bottom:12px; line-height:1.4;">Consolidate items from scheduled client orders and auto-generate supplier Purchase Orders.</p>
      
      <div style="display:flex; gap:8px; align-items:end; margin-bottom:12px;">
        <div style="flex:1;">
          <label class="form-label" style="font-size:11px; margin-bottom:4px; font-weight:700;">Delivery Date</label>
          <input type="date" id="procure-date" class="form-control" value="${tomorrowStr}" style="padding:8px 12px; font-size:13px; height:36px;">
        </div>
        <button class="btn btn-primary btn-sm" id="btn-consolidate-demand" style="padding:0 12px; font-size:12px; font-weight:700; height:36px; border:none; cursor:pointer; white-space:nowrap; border-radius:10px;">
          Consolidate Demand
        </button>
      </div>
      
      <div id="consolidation-results" style="display:none; border-top:1px dashed var(--line); padding-top:12px; margin-top:12px;"></div>
    `;
    suppCard.appendChild(procurementDiv);

    // B. Supplier Contacts List
    const suppHeader = document.createElement('h3');
    suppHeader.style.fontFamily = 'var(--font-title)';
    suppHeader.style.fontSize = '15px';
    suppHeader.style.marginBottom = '12px';
    suppHeader.style.color = 'var(--green)';
    suppHeader.textContent = 'Registered Suppliers';
    suppCard.appendChild(suppHeader);

    const suppList = document.createElement('div');
    suppList.className = 'settings-list';
    
    suppliers.forEach(s => {
      const item = document.createElement('div');
      item.className = 'settings-item';
      item.style.display = 'flex';
      item.style.justifyContent = 'space-between';
      item.style.alignItems = 'center';
      item.innerHTML = `
        <div class="settings-item-info">
          <span class="settings-item-title" style="font-weight:700; color:var(--green);">${s.name}</span>
          <span class="settings-item-meta">WhatsApp: ${s.whatsapp} | ${s.location}</span>
          <span class="settings-item-meta" style="font-style:italic;">Main: ${s.mainProducts}</span>
        </div>
        <div style="margin-left: 10px;">
          <button class="btn btn-secondary btn-sm btn-view-supplier-price" data-supplier-name="${s.name}" style="padding: 6px 12px; font-size: 11px; font-weight:700; display: inline-flex; align-items:center; gap:4px; white-space:nowrap; border:none; cursor:pointer;">
            📂 Price List
          </button>
        </div>
      `;
      suppList.appendChild(item);
    });
    suppCard.appendChild(suppList);
    
    // C. Render Purchase Requests inside Supplier Card
    const prSection = document.createElement('div');
    prSection.style.marginTop = '30px';
    prSection.innerHTML = `<h3 style="font-family:var(--font-title); font-size:16px; margin-bottom:15px; color:var(--green);">Active Purchase Requests (POs)</h3>`;
    
    if (requests.length === 0) {
      prSection.innerHTML += `<p style="font-size:13px; color:var(--grey-text);">No active purchase requests.</p>`;
    } else {
      requests.forEach(pr => {
        const card = document.createElement('div');
        card.style.border = '1px solid var(--line)';
        card.style.borderRadius = '12px';
        card.style.padding = '15px';
        card.style.marginBottom = '12px';
        card.style.backgroundColor = '#fff';
        
        const prItems = pr.products.map(item => `
          <span class="product-row-item" style="margin-bottom:4px; margin-right:4px;">${item.quantity} ${item.unit || 'kg'} x ${item.name}</span>
        `).join('');

        let refHTML = '';
        if (pr.orderRef) {
          refHTML = `<div style="font-size:12px; color:var(--green-ink); margin-bottom:8px; font-weight: 700;">Ref Order: <a href="#orders" class="pr-order-link" data-order-ref="${pr.orderRef}" style="text-decoration:underline; color:var(--olive); cursor:pointer;">${pr.orderRef}</a></div>`;
        }

        card.innerHTML = `
          <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-weight:700; font-size:13px;">
            <span>PO to: ${pr.supplierName}</span>
            <span class="task-card-badge ${pr.paymentStatus === 'Received' ? 'badge-green' : 'badge-orange'}" style="font-size:10px; padding:2px 6px;">${pr.paymentStatus}</span>
          </div>
          <div style="font-size:12px; color:var(--grey-text); margin-bottom:8px;">ETA: <strong>${pr.eta}</strong></div>
          ${refHTML}
          <div style="font-size:13px; margin-bottom:12px; display:flex; flex-wrap:wrap; gap:4px;">${prItems}</div>
          <div style="display:flex; gap:4px; flex-wrap:wrap; border-top:1px solid var(--line); padding-top:10px;">
            <button class="btn btn-secondary btn-sm btn-pr-ordered" data-pr-id="${pr.id}" style="padding:6px 10px; font-size:11px; font-weight:700;">Mark Ordered</button>
            <button class="btn btn-secondary btn-sm btn-pr-paid" data-pr-id="${pr.id}" style="padding:6px 10px; font-size:11px; font-weight:700;">Mark Paid</button>
            <button class="btn btn-primary btn-sm btn-pr-received" data-pr-id="${pr.id}" style="padding:6px 10px; font-size:11px; font-weight:700;">Received</button>
            <button class="btn btn-secondary btn-sm btn-pdf-po" data-pr-id="${pr.id}" style="padding:6px 10px; font-size:11px; font-weight:700; color:var(--green);">📄 PDF PO</button>
            <button class="btn btn-secondary btn-sm btn-wa-po" data-pr-id="${pr.id}" style="padding:6px 10px; font-size:11px; font-weight:700; color:#2e7d32;">💬 Send WA</button>
          </div>
        `;
        prSection.appendChild(card);
      });
    }
    suppCard.appendChild(prSection);

    splitHTML.appendChild(prodCard);
    splitHTML.appendChild(suppCard);
    container.appendChild(splitHTML);

    // Dynamic Procurement Panel Event Handlers
    procurementDiv.querySelector('#btn-consolidate-demand').addEventListener('click', async () => {
      const dateVal = procurementDiv.querySelector('#procure-date').value;
      if (!dateVal) {
        alert('Please choose a date first.');
        return;
      }
      
      const orders = await db.getOrders();
      const catalog = await db.getProducts();
      
      // Filter active customer orders scheduled for this date (excluding Completed)
      const scheduledOrders = orders.filter(o => o.deliveryDate === dateVal && o.stage !== 'Completed');
      const resultsDiv = procurementDiv.querySelector('#consolidation-results');
      
      if (scheduledOrders.length === 0) {
        resultsDiv.innerHTML = `<p style="font-size:12px; color:var(--grey-text); font-style:italic; margin:0;">No active customer orders scheduled for ${dateVal}.</p>`;
        resultsDiv.style.display = 'block';
        return;
      }
      
      // Consolidate demand quantities
      const demand = {}; // productName -> quantity
      scheduledOrders.forEach(o => {
        o.products.forEach(p => {
          const nameNorm = p.name;
          demand[nameNorm] = (demand[nameNorm] || 0) + p.quantity;
        });
      });
      
      // Map demand to best suppliers
      const supplierBaskets = {}; // supplierName -> [ { name, quantity, unit } ]
      let tableRows = '';
      
      for (const [prodName, qty] of Object.entries(demand)) {
        const catItem = catalog.find(c => c.name.toLowerCase() === prodName.toLowerCase());
        const supplierName = catItem ? (catItem.bestSupplier || 'Local Supplier') : 'Local Supplier';
        const unit = catItem ? (catItem.unit || 'kg') : 'kg';
        
        supplierBaskets[supplierName] = supplierBaskets[supplierName] || [];
        supplierBaskets[supplierName].push({ name: prodName, quantity: qty, unit });
        
        tableRows += `
          <tr style="border-bottom:1px solid rgba(23,61,43,0.06); font-size:12px;">
            <td style="padding:6px 4px; font-weight:700; color:var(--green-ink);">${prodName}</td>
            <td style="padding:6px 4px; text-align:center; font-weight:700;">${qty} ${unit}</td>
            <td style="padding:6px 4px; color:var(--grey-text); font-size:11px;">${supplierName}</td>
          </tr>
        `;
      }
      
      resultsDiv.innerHTML = `
        <h4 style="font-size:12px; font-weight:800; color:var(--green); margin-bottom:8px; margin-top:0;">Aggregated Order Demand:</h4>
        <table style="width:100%; border-collapse:collapse; margin-bottom:12px;">
          <thead>
            <tr style="border-bottom:1.5px solid var(--line); font-size:10px; text-align:left; color:var(--grey-text); text-transform:uppercase;">
              <th style="padding:4px;">Product</th>
              <th style="padding:4px; text-align:center;">Demand</th>
              <th style="padding:4px;">Best Supplier</th>
            </tr>
          </thead>
          <tbody>
            ${tableRows}
          </tbody>
        </table>
        
        <button class="btn btn-secondary btn-full btn-sm" id="btn-create-po-requests" style="font-weight:700; padding:8px 12px; border:none; cursor:pointer; width:100%;">
          🚀 Generate & Save Purchase Orders
        </button>
      `;
      resultsDiv.style.display = 'block';
      
      // Bind click handler to create POs
      resultsDiv.querySelector('#btn-create-po-requests').addEventListener('click', async () => {
        let createdCount = 0;
        for (const [suppName, suppItems] of Object.entries(supplierBaskets)) {
          // Calculate estimated total price using catalog cost pricing
          let totalPrice = 0;
          const poProducts = suppItems.map(item => {
            const catItem = catalog.find(c => c.name.toLowerCase() === item.name.toLowerCase());
            const cost = catItem ? (catItem.supplierPrice || 0) : 0;
            totalPrice += (cost * item.quantity);
            return {
              name: item.name,
              quantity: item.quantity,
              unit: item.unit,
              expectedPrice: cost
            };
          });
          
          const newPR = {
            supplierName: suppName,
            products: poProducts,
            totalPrice: totalPrice,
            eta: dateVal,
            paymentStatus: 'Waiting Quote',
            qualityStatus: 'OK',
            attachments: [],
            date: new Date().toISOString()
          };
          
          await db.savePurchaseRequest(newPR);
          createdCount++;
        }
        
        alert(`Successfully generated and saved ${createdCount} Supplier Purchase Order(s) for delivery date ${dateVal}.`);
        renderActiveView();
      });
    });

    // PR handlers
    suppList.querySelectorAll('.btn-view-supplier-price').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const suppName = e.currentTarget.dataset.supplierName;
        activeProductView = 'supplier-lists';
        renderActiveView();
        
        // Scroll to that supplier card
        setTimeout(() => {
          const cards = document.querySelectorAll('.task-card');
          for (const card of cards) {
            const h3 = card.querySelector('h3');
            if (h3 && h3.textContent.trim().toLowerCase() === suppName.toLowerCase()) {
              card.scrollIntoView({ behavior: 'smooth', block: 'center' });
              card.style.border = '2px solid var(--green)';
              card.style.boxShadow = '0 0 15px rgba(23,61,43,0.2)';
              break;
            }
          }
        }, 150);
      });
    });

    container.querySelectorAll('.btn-pr-ordered').forEach(btn => {
      btn.addEventListener('click', async (e) => updatePRStatus(e.target.dataset.prId, 'Ordered'));
    });
    container.querySelectorAll('.btn-pr-paid').forEach(btn => {
      btn.addEventListener('click', async (e) => updatePRStatus(e.target.dataset.prId, 'Paid'));
    });
    container.querySelectorAll('.btn-pdf-po').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const prId = e.currentTarget.dataset.prId;
        const request = requests.find(r => r.id === prId);
        if (request) pdfGenerator.generatePurchaseOrderPDF(request);
      });
    });
    container.querySelectorAll('.btn-wa-po').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const prId = e.currentTarget.dataset.prId;
        const request = requests.find(r => r.id === prId);
        if (request) {
          const itemsText = request.products.map(item => `- ${item.quantity} ${item.unit || 'kg'} of ${item.name}`).join('\n');
          const msg = `Hello ${request.supplierName},\n\nWe would like to place a purchase order for delivery on ${request.eta}:\n\n${itemsText}\n\nPlease confirm availability and delivery. Thank you!\nBali Fruits Team`;
          const supp = suppliers.find(s => s.name.toLowerCase() === request.supplierName.toLowerCase());
          const phone = supp ? supp.whatsapp.replace(/[\s-+]/g, '') : '6281234567890';
          window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
        }
      });
    });
    container.querySelectorAll('.btn-pr-received').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        const prId = e.target.dataset.prId;
        const request = requests.find(r => r.id === prId);
        if (request) {
          request.paymentStatus = 'Received';
          
          // Hook: Update inventory when supplier products are received!
          const stock = await db.getFreshStock();
          for (const item of request.products) {
            const freshItem = stock.find(fs => fs.name.toLowerCase() === item.name.toLowerCase());
            if (freshItem) {
              freshItem.quantity += item.quantity;
              freshItem.freshness = 'Good';
              await db.saveFreshStock(freshItem);
            }
          }
          
          await db.savePurchaseRequest(request);
          renderActiveView();
        }
      });
    });

    container.querySelectorAll('.pr-order-link').forEach(link => {
      link.addEventListener('click', async (e) => {
        e.preventDefault();
        const ref = e.target.dataset.orderRef;
        const orders = await db.getOrders();
        const order = orders.find(o => o.orderNumber === ref || o.id === ref);
        if (order) {
          highlightOrderId = order.id;
          window.location.hash = '#orders';
        } else {
          alert(`Order reference ${ref} not found.`);
        }
      });
    });
  } 
  else if (activeProductView === 'matrix') {
    // Renders side-by-side comparison matrix of all products against all suppliers
    const matrixCard = document.createElement('div');
    matrixCard.className = 'task-card';
    matrixCard.style.padding = '24px';
    matrixCard.style.backgroundColor = 'var(--cream-strong)';
    
    // Find all unique suppliers that have any quotes, or default list
    const quoteSuppliers = new Set();
    products.forEach(p => {
      if (p.supplierQuotes) {
        Object.keys(p.supplierQuotes).forEach(s => quoteSuppliers.add(s));
      }
      if (p.bestSupplier) quoteSuppliers.add(p.bestSupplier);
    });
    if (quoteSuppliers.size === 0) {
      suppliers.forEach(s => quoteSuppliers.add(s.name));
    }
    const supplierList = Array.from(quoteSuppliers);

    let tableHeadersHTML = `
      <tr>
        <th style="padding: 12px; text-align: left; background-color: var(--green); color: var(--cream-strong); font-weight: 700; font-size: 13px;">Product Name</th>
        <th style="padding: 12px; text-align: left; background-color: var(--green); color: var(--cream-strong); font-weight: 700; font-size: 13px;">Category</th>
        <th style="padding: 12px; text-align: right; background-color: var(--green); color: var(--cream-strong); font-weight: 700; font-size: 13px;">Selling Price</th>
    `;
    
    supplierList.forEach(suppName => {
      tableHeadersHTML += `
        <th style="padding: 12px; text-align: center; background-color: var(--green); color: var(--cream-strong); font-weight: 700; font-size: 13px;">${suppName}</th>
      `;
    });
    tableHeadersHTML += '</tr>';

    let tableRowsHTML = '';
    products.forEach(p => {
      const quotes = p.supplierQuotes || {};
      if (p.bestSupplier && Object.keys(quotes).length === 0) {
        quotes[p.bestSupplier] = {
          price: p.supplierPrice,
          availability: p.availability || 'In Stock',
          date: p.lastUpdate || new Date().toISOString()
        };
      }

      // Determine lowest price among quotes
      let lowestPrice = Infinity;
      let lowestSupplier = '';
      Object.entries(quotes).forEach(([supp, quote]) => {
        if (quote.price && quote.price > 0 && quote.price < lowestPrice) {
          lowestPrice = quote.price;
          lowestSupplier = supp;
        }
      });

      let rowHTML = `
        <tr style="border-bottom: 1px solid var(--line);">
          <td style="padding: 14px 12px; font-weight: 700; color: var(--green); font-size: 14px;">${p.name}</td>
          <td style="padding: 14px 12px; color: var(--grey-text); font-size: 13px;">${p.category}</td>
          <td style="padding: 14px 12px; text-align: right; font-weight: 800; color: var(--green-ink); font-size: 14px;">${formatRupiah(p.sellingPrice)} / ${p.unit || 'kg'}</td>
      `;

      supplierList.forEach(suppName => {
        const quote = quotes[suppName];
        if (quote && quote.price > 0) {
          const isCheapest = suppName === lowestSupplier;
          const isActive = suppName === p.bestSupplier;
          
          let cellStyle = 'padding: 12px; text-align: center; font-size: 13px; transition: var(--transition);';
          if (isActive) {
            cellStyle += ' background-color: rgba(143, 214, 191, 0.08); border: 2px solid var(--green);';
          } else if (isCheapest) {
            cellStyle += ' background-color: rgba(138, 155, 79, 0.05);';
          }

          rowHTML += `
            <td style="${cellStyle}">
              <div style="font-weight: 700; color: var(--green-ink);">${formatRupiah(quote.price)} / ${quote.unit || 'kg'}</div>
              <div style="font-size: 10px; color: var(--grey-text); margin: 2px 0;">${quote.availability}</div>
              <div style="display: flex; justify-content: center; gap: 4px; margin-top: 4px; align-items: center;">
                ${isCheapest ? `<span class="task-card-badge badge-green" style="font-size: 8px; padding: 2px 4px; text-transform:none;">Cheapest</span>` : ''}
                ${isActive ? `
                  <span class="task-card-badge badge-green" style="font-size: 8px; padding: 2px 4px; border: 1px solid var(--green); text-transform:none;">Active</span>
                ` : `
                  <button class="btn btn-secondary btn-sm btn-set-active-supplier" data-prod-id="${p.id}" data-supplier-name="${suppName}" data-price="${quote.price}" data-avail="${quote.availability}" data-unit="${quote.unit || 'kg'}" style="padding: 2px 6px; font-size: 9px; font-weight: 700; border-radius: 4px;">Activate</button>
                `}
              </div>
            </td>
          `;
        } else {
          rowHTML += `
            <td style="padding: 12px; text-align: center; color: var(--grey-text); font-style: italic; font-size: 13px;">-</td>
          `;
        }
      });

      rowHTML += '</tr>';
      tableRowsHTML += rowHTML;
    });

    matrixCard.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <h2 style="font-family: var(--font-title); font-size: 20px; font-weight: 800; color: var(--green); margin: 0;">Supplier Quotes Comparison Matrix</h2>
        <span style="font-size: 13px; font-weight: 600; color: var(--grey-text);">Outlined cell represents currently Active supplier. Green labels highlight cheapest cost quote.</span>
      </div>
      <div style="overflow-x: auto; border-radius: 12px; border: 1px solid var(--line); box-shadow: var(--shadow);">
        <table style="width: 100%; border-collapse: collapse; background-color: #fff;">
          <thead>
            ${tableHeadersHTML}
          </thead>
          <tbody>
            ${tableRowsHTML}
          </tbody>
        </table>
      </div>
    `;

    container.appendChild(matrixCard);

    // Set Active Supplier click handler
    matrixCard.querySelectorAll('.btn-set-active-supplier').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        const prodId = e.target.dataset.prodId;
        const supplierName = e.target.dataset.supplierName;
        const price = parseInt(e.target.dataset.price, 10);
        const avail = e.target.dataset.avail;
        
        const prodList = await db.getProducts();
        const product = prodList.find(p => p.id === prodId);
        if (product) {
          product.bestSupplier = supplierName;
          product.supplierPrice = price;
          product.availability = avail;
          product.lastUpdate = new Date().toISOString();
          await db.saveProduct(product);
          renderActiveView();
        }
      });
    });
  } 
  else if (activeProductView === 'supplier-lists') {
    const supplierListCard = document.createElement('div');
    supplierListCard.className = 'cards-list';

    suppliers.forEach(s => {
      const suppCard = document.createElement('div');
      suppCard.className = 'task-card';
      suppCard.style.padding = '24px';
      suppCard.style.backgroundColor = 'var(--cream-strong)';
      suppCard.style.marginBottom = '20px';

      // Find all quotes from this supplier
      const supplierQuotes = [];
      products.forEach(p => {
        const quotes = p.supplierQuotes || {};
        if (p.bestSupplier && Object.keys(quotes).length === 0) {
          quotes[p.bestSupplier] = {
            price: p.supplierPrice,
            availability: p.availability || 'In Stock',
            unit: p.unit || 'kg',
            date: p.lastUpdate || new Date().toISOString()
          };
        }

        if (quotes[s.name]) {
          // Check if this supplier is cheapest for this product
          let isCheapest = true;
          Object.entries(quotes).forEach(([otherSupp, quote]) => {
            if (quote.price && quote.price > 0 && quote.price < quotes[s.name].price) {
              isCheapest = false;
            }
          });

          supplierQuotes.push({
            productId: p.id,
            productName: p.name,
            category: p.category,
            quotedPrice: quotes[s.name].price,
            availability: quotes[s.name].availability,
            unit: quotes[s.name].unit || 'kg',
            date: quotes[s.name].date,
            isActive: p.bestSupplier === s.name,
            isCheapest: isCheapest
          });
        }
      });

      let quotesTableHTML = '';
      if (supplierQuotes.length === 0) {
        quotesTableHTML = `<p style="font-size: 13px; color: var(--grey-text); font-style: italic; margin-top: 10px;">No quoted prices registered for this supplier yet. Use the copy/paste ingestion or add manually below.</p>`;
      } else {
        let rows = supplierQuotes.map(q => {
          return `
            <tr style="border-bottom: 1px solid var(--line);">
              <td style="padding: 10px; font-weight: 700; font-size: 13px; color: var(--green);">${q.productName} <span style="font-size: 10px; color: var(--grey-text); font-weight: 600;">(${q.category})</span></td>
              <td style="padding: 10px; text-align: right; font-weight: 700; font-size: 13px;">${formatRupiah(q.quotedPrice)} / ${q.unit}</td>
              <td style="padding: 10px; text-align: center; font-size: 12px;">
                <span class="task-card-badge ${q.availability === 'In Stock' ? 'badge-green' : (q.availability === 'Limited' ? 'badge-orange' : 'badge-red')}" style="padding: 2px 8px; font-size: 10px;">${q.availability}</span>
              </td>
              <td style="padding: 10px; text-align: center; font-size: 11px; color: var(--grey-text);">${new Date(q.date).toLocaleDateString('id-ID')}</td>
              <td style="padding: 10px; text-align: center;">
                <div style="display: flex; gap: 4px; justify-content: center; align-items: center;">
                  ${q.isCheapest ? `<span class="task-card-badge badge-green" style="font-size: 8px; padding: 2px 4px; text-transform:none;">Cheapest</span>` : ''}
                  ${q.isActive ? `
                    <span class="task-card-badge badge-green" style="font-size: 9px; padding: 3px 6px;">Active</span>
                  ` : `
                    <button class="btn btn-secondary btn-sm btn-set-active-supplier" data-prod-id="${q.productId}" data-supplier-name="${s.name}" data-price="${q.quotedPrice}" data-avail="${q.availability}" data-unit="${q.unit}" style="padding: 2px 6px; font-size: 9px; font-weight: 700; border-radius: 4px;">Set Active</button>
                  `}
                </div>
              </td>
            </tr>
          `;
        }).join('');

        quotesTableHTML = `
          <div style="overflow-x: auto; border: 1px solid var(--line); border-radius: 12px; margin-top: 15px; margin-bottom: 15px; box-shadow: var(--shadow);">
            <table style="width: 100%; border-collapse: collapse; background-color: #fff;">
              <thead>
                <tr style="background-color: var(--green); color: var(--cream-strong); font-size: 12px;">
                  <th style="padding: 10px; text-align: left; font-weight: 700;">Product</th>
                  <th style="padding: 10px; text-align: right; font-weight: 700;">Quoted Price</th>
                  <th style="padding: 10px; text-align: center; font-weight: 700;">Availability</th>
                  <th style="padding: 10px; text-align: center; font-weight: 700;">Quote Date</th>
                  <th style="padding: 10px; text-align: center; font-weight: 700;">Status/Action</th>
                </tr>
              </thead>
              <tbody>
                ${rows}
              </tbody>
            </table>
          </div>
        `;
      }

      // Add a dropdown of all products to let them add a quote manually
      const productOptions = products.map(p => `<option value="${p.id}">${p.name} (${p.category})</option>`).join('');

      suppCard.innerHTML = `
        <div class="task-card-header" style="border-bottom: 1px solid var(--line); padding-bottom: 12px; margin-bottom: 12px;">
          <div class="task-card-title">
            <h3 style="font-size: 18px; color: var(--green); margin: 0;">${s.name}</h3>
            <span class="task-card-badge badge-grey" style="font-size: 11px;">${s.location}</span>
          </div>
          <span style="font-weight: 700; font-size: 13px; color: var(--olive);">WhatsApp: ${s.whatsapp}</span>
        </div>
        
        <div style="font-size: 13px; color: var(--grey-text); margin-bottom: 12px; line-height: 1.4;">
          <strong>Main Offerings:</strong> ${s.mainProducts} <br>
          <strong>Reliability:</strong> ${s.reliabilityNote || 'N/A'} | <strong>Quality:</strong> ${s.qualityNote || 'N/A'}
        </div>

        <div style="margin-top: 15px;">
          <h4 style="font-size: 14px; font-weight: 800; color: var(--green); text-transform: uppercase; letter-spacing: 0.04em; margin: 0;">Price List / Registered Quotes</h4>
          ${quotesTableHTML}
        </div>

        <!-- Add Manual Quote Form -->
        <div style="background-color: rgba(23,61,43,0.02); border: 1px dashed var(--line); border-radius: 12px; padding: 15px; margin-top: 15px;">
          <h4 style="font-size: 13px; font-weight: 700; color: var(--green); margin-bottom: 10px; margin-top: 0;">➕ Add or Edit Price Quote Manually</h4>
          <form class="manual-quote-form" data-supplier-name="${s.name}" style="display: grid; grid-template-columns: 2fr 1fr 1fr 1fr auto; gap: 10px; align-items: end;">
            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 11px; margin-bottom: 4px;">Select Product</label>
              <select name="manual_prod_id" class="form-control" style="padding: 8px 12px; font-size: 13px;" required>
                <option value="">-- Choose Product --</option>
                ${productOptions}
              </select>
            </div>
            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 11px; margin-bottom: 4px;">Quoted Price (IDR)</label>
              <input type="number" name="manual_price" class="form-control" placeholder="Cost price" style="padding: 8px 12px; font-size: 13px;" required>
            </div>
            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 11px; margin-bottom: 4px;">Unit</label>
              <select name="manual_unit" class="form-control" style="padding: 8px 12px; font-size: 13px;">
                <option value="kg">kg (kilo)</option>
                <option value="pcs">pcs (unit)</option>
                <option value="100g">100g</option>
                <option value="ikat">ikat</option>
                <option value="box">box</option>
                <option value="pack">pack</option>
                <option value="bundle">bundle</option>
              </select>
            </div>
            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-size: 11px; margin-bottom: 4px;">Availability</label>
              <select name="manual_avail" class="form-control" style="padding: 8px 12px; font-size: 13px;">
                <option value="In Stock">In Stock</option>
                <option value="Limited">Limited</option>
                <option value="Out of Stock">Out of Stock</option>
              </select>
            </div>
            <button type="submit" class="btn btn-secondary" style="padding: 8px 16px; font-size: 13px; font-weight: 700; border: none; cursor: pointer;">Save Quote</button>
          </form>
        </div>
      `;
      supplierListCard.appendChild(suppCard);
    });

    container.appendChild(supplierListCard);

    // Bind listeners for "Set Active" inside the table
    supplierListCard.querySelectorAll('.btn-set-active-supplier').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        const prodId = e.currentTarget.dataset.prodId;
        const supplierName = e.currentTarget.dataset.supplierName;
        const price = parseInt(e.currentTarget.dataset.price, 10);
        const avail = e.currentTarget.dataset.avail;
        const unit = e.currentTarget.dataset.unit;
        
        const prodList = await db.getProducts();
        const product = prodList.find(p => p.id === prodId);
        if (product) {
          product.bestSupplier = supplierName;
          product.supplierPrice = price;
          product.availability = avail;
          if (unit) product.unit = unit;
          product.lastUpdate = new Date().toISOString();
          await db.saveProduct(product);
          renderActiveView();
        }
      });
    });

    // Bind listeners for Manual Quote Forms
    supplierListCard.querySelectorAll('.manual-quote-form').forEach(form => {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const supplierName = form.dataset.supplierName;
        const prodId = form.querySelector('[name="manual_prod_id"]').value;
        const price = parseInt(form.querySelector('[name="manual_price"]').value, 10);
        const avail = form.querySelector('[name="manual_avail"]').value;
        const unit = form.querySelector('[name="manual_unit"]').value || 'kg';

        if (!prodId || isNaN(price)) {
          alert('Please fill out all fields.');
          return;
        }

        const prodList = await db.getProducts();
        const product = prodList.find(p => p.id === prodId);
        if (product) {
          product.supplierQuotes = product.supplierQuotes || {};
          product.supplierQuotes[supplierName] = {
            price: price,
            availability: avail,
            unit: unit,
            date: new Date().toISOString()
          };

          // Auto-update as active if cheapest or if it's currently the active supplier
          if (product.bestSupplier === supplierName || !product.bestSupplier) {
            product.bestSupplier = supplierName;
            product.supplierPrice = price;
            product.availability = avail;
            product.unit = unit;
            product.lastUpdate = new Date().toISOString();
          }

          await db.saveProduct(product);
          alert(`Price quote for ${product.name} updated under ${supplierName}.`);
          renderActiveView();
        }
      });
    });
  }

  const updatePRStatus = async (prId, status) => {
    const request = requests.find(r => r.id === prId);
    if (request) {
      request.paymentStatus = status;
      await db.savePurchaseRequest(request);
      renderActiveView();
    }
  };
}

// ==================== MODULE 6: INVENTORY & MATERIALS ====================
async function renderInventory(container) {
  renderPipelineRibbon(container, 0, ['Checked', 'Reserved', 'Used', 'Low Stock', 'Reorder']);

  const fresh = await db.getFreshStock();
  const materials = await db.getMaterials();

  const splitHTML = document.createElement('div');
  splitHTML.className = 'split-grid';
  
  // Render Section 1: Fresh Stock
  const freshCard = document.createElement('div');
  freshCard.className = 'split-col-card';
  freshCard.innerHTML = `<h2>Fresh Produce Stock</h2>`;
  
  const freshList = document.createElement('div');
  freshList.className = 'settings-list';
  
  fresh.forEach(fs => {
    let freshBadge = 'badge-green';
    if (fs.freshness === 'Use First') freshBadge = 'badge-orange';
    if (fs.freshness === 'Low Quality' || fs.freshness === 'Reject') freshBadge = 'badge-red';

    const item = document.createElement('div');
    item.className = 'settings-item';
    item.style.flexDirection = 'column';
    item.style.alignItems = 'stretch';
    item.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
        <span style="font-weight:700; color:var(--green);">${fs.name}</span>
        <span class="task-card-badge ${freshBadge}">${fs.freshness}</span>
      </div>
      <div style="font-size:13px; color:var(--grey-text); display:flex; justify-content:space-between; margin-bottom:12px;">
        <span>Current Stock: <strong>${fs.quantity} ${fs.unit}</strong> (Reserved: ${fs.reservedQuantity || 0})</span>
        <span>Supplier: ${fs.supplierName || 'Unknown'}</span>
      </div>
      ${fs.problemNote ? `<p style="font-size:12px; color:#d9534f; margin-bottom:10px; font-style:italic;">Issue: ${fs.problemNote}</p>` : ''}
      <div style="display:flex; gap:8px;">
        <button class="btn btn-secondary btn-sm btn-update-fresh" data-fs-id="${fs.id}" style="padding:6px 12px; font-size:11px; flex:1;">Adjust Qty</button>
        <button class="btn btn-secondary btn-sm btn-freshness-state" data-fs-id="${fs.id}" style="padding:6px 12px; font-size:11px; flex:1;">Quality State</button>
      </div>
    `;
    freshList.appendChild(item);
  });
  freshCard.appendChild(freshList);

  // Render Section 2: Materials
  const matCard = document.createElement('div');
  matCard.className = 'split-col-card';
  matCard.innerHTML = `<h2>Packaging & Marketing Material Stock</h2>`;
  
  const matList = document.createElement('div');
  matList.className = 'settings-list';
  
  materials.forEach(mat => {
    let statusBadge = 'badge-green';
    if (mat.status === 'Low Stock') statusBadge = 'badge-orange';
    if (mat.status === 'Reorder Needed') statusBadge = 'badge-red';
    if (mat.status === 'Waiting Delivery') statusBadge = 'badge-grey';

    const item = document.createElement('div');
    item.className = 'settings-item';
    item.style.flexDirection = 'column';
    item.style.alignItems = 'stretch';
    item.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
        <span style="font-weight:700; color:var(--green);">${mat.name}</span>
        <span class="task-card-badge ${statusBadge}">${mat.status}</span>
      </div>
      <div style="font-size:13px; color:var(--grey-text); display:flex; justify-content:space-between; margin-bottom:12px;">
        <span>Current: <strong>${mat.quantity} units</strong> (Min Limit: ${mat.minQuantity})</span>
        <span>Reorder Date: ${mat.lastReorderDate || '-'}</span>
      </div>
      <div style="display:flex; gap:8px;">
        <button class="btn btn-secondary btn-sm btn-update-mat" data-mat-id="${mat.id}" style="padding:6px 12px; font-size:11px; flex:1;">Adjust Qty</button>
        <button class="btn btn-primary btn-sm btn-reorder-mat" data-mat-id="${mat.id}" style="padding:6px 12px; font-size:11px; flex:1;">Trigger Reorder</button>
      </div>
    `;
    matList.appendChild(item);
  });
  matCard.appendChild(matList);

  splitHTML.appendChild(freshCard);
  splitHTML.appendChild(matCard);
  container.appendChild(splitHTML);

  // Fresh Handlers
  container.querySelectorAll('.btn-update-fresh').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      const fsId = e.target.dataset.fsId;
      const item = fresh.find(f => f.id === fsId);
      if (item) {
        const val = prompt(`Enter new quantity for ${item.name} (in ${item.unit}):`, item.quantity);
        if (val !== null && !isNaN(val)) {
          item.quantity = parseFloat(val);
          await db.saveFreshStock(item);
          renderActiveView();
        }
      }
    });
  });

  container.querySelectorAll('.btn-freshness-state').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      const fsId = e.target.dataset.fsId;
      const item = fresh.find(f => f.id === fsId);
      if (item) {
        const state = prompt(`Enter quality status (Good, Use First, Low Quality, Reject) for ${item.name}:`, item.freshness);
        if (state) {
          item.freshness = state;
          if (state === 'Reject') {
            item.problemNote = prompt('Specify reject reason:') || 'Quality issue';
          } else {
            item.problemNote = '';
          }
          await db.saveFreshStock(item);
          renderActiveView();
        }
      }
    });
  });

  // Materials Handlers
  container.querySelectorAll('.btn-update-mat').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      const matId = e.target.dataset.matId;
      const item = materials.find(m => m.id === matId);
      if (item) {
        const val = prompt(`Enter new quantity for ${item.name}:`, item.quantity);
        if (val !== null && !isNaN(val)) {
          item.quantity = parseInt(val, 10);
          // Auto recalculate status
          if (item.quantity < item.minQuantity) {
            item.status = item.quantity === 0 ? 'Reorder Needed' : 'Low Stock';
          } else {
            item.status = 'Enough Stock';
          }
          await db.saveMaterial(item);
          renderActiveView();
        }
      }
    });
  });

  container.querySelectorAll('.btn-reorder-mat').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      const matId = e.target.dataset.matId;
      const item = materials.find(m => m.id === matId);
      if (item) {
        const reorderQty = prompt(`Enter reorder quantity for ${item.name}:`, 100);
        if (reorderQty && !isNaN(reorderQty)) {
          // Trigger purchase request automatically
          const requests = await db.getPurchaseRequests();
          const pr = {
            supplierName: item.supplierName || 'Sari Packaging',
            products: [{ name: item.name, quantity: parseInt(reorderQty, 10) }],
            totalPrice: 0,
            eta: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0], // 2 days
            paymentStatus: 'Waiting Quote',
            qualityStatus: 'OK',
            attachments: [],
            date: new Date().toISOString()
          };
          await db.savePurchaseRequest(pr);

          item.status = 'Waiting Delivery';
          item.lastReorderDate = new Date().toISOString().split('T')[0];
          await db.saveMaterial(item);
          
          alert(`Purchase Request created for ${pr.supplierName}. Material status updated to Waiting Delivery.`);
          renderActiveView();
        }
      }
    });
  });
}

// ==================== MODULE 7: SETTINGS ====================
async function renderSettings(container) {
  renderPipelineRibbon(container, 0, ['Configure', 'Test', 'Use', 'Review']);

  const supabaseConfig = getSupabaseConfig();
  const openAIKey = getOpenAIKey();
  const zones = await db.getDeliveryZones();

  const settingsHTML = document.createElement('div');
  settingsHTML.className = 'split-grid';

  // Config Card (Credentials + Keys)
  const configCard = document.createElement('div');
  configCard.className = 'split-col-card';
  configCard.innerHTML = `
    <h2>API & Database Integrations</h2>
    <form id="settings-db-form">
      <div class="form-group">
        <label for="set-supabase-url" class="form-label">Supabase URL</label>
        <input type="text" id="set-supabase-url" class="form-control" value="${supabaseConfig.url || ''}" placeholder="https://xxx.supabase.co">
      </div>
      <div class="form-group">
        <label for="set-supabase-key" class="form-label">Supabase Anon Key</label>
        <input type="password" id="set-supabase-key" class="form-control" value="${supabaseConfig.anonKey || ''}" placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...">
      </div>
      <div class="form-group">
        <label for="set-openai-key" class="form-label">OpenAI API Key (For Ingestion Parsing)</label>
        <input type="password" id="set-openai-key" class="form-control" value="${openAIKey || ''}" placeholder="sk-proj-xxx">
      </div>
      <button type="submit" class="btn btn-primary btn-full">Save Integrations</button>
    </form>
  `;
  settingsHTML.appendChild(configCard);

  // Delivery Zones Card
  const zonesCard = document.createElement('div');
  zonesCard.className = 'split-col-card';
  
  let zoneListHTML = '';
  zones.forEach(zone => {
    zoneListHTML += `
      <div class="settings-item" style="margin-bottom:10px;">
        <div class="settings-item-info">
          <span class="settings-item-title">${zone.name}</span>
          <span class="settings-item-meta">Fee: ${formatRupiah(zone.fee)}</span>
        </div>
        <div class="settings-item-action">
          <button class="btn-delete-zone" data-zone-id="${zone.id}">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" style="width:16px;height:16px;"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
          </button>
        </div>
      </div>
    `;
  });

  zonesCard.innerHTML = `
    <h2>Delivery Zones & Fees Editor</h2>
    <div style="max-height:220px; overflow-y:auto; margin-bottom:20px; padding-right:5px;" id="settings-zones-list">
      ${zoneListHTML || '<p style="font-size:13px; color:var(--grey-text);">No delivery zones configured.</p>'}
    </div>
    <form id="settings-add-zone-form" style="border-top:1px solid var(--line); padding-top:15px;">
      <h3 style="font-size:14px; margin-bottom:10px; color:var(--green);">Add New Zone</h3>
      <div class="form-group">
        <input type="text" id="add-zone-name" class="form-control" placeholder="Zone Name (e.g. Canggu)" required style="padding:10px 14px;">
      </div>
      <div class="form-group">
        <input type="number" id="add-zone-fee" class="form-control" placeholder="Fee in IDR (e.g. 15000)" required style="padding:10px 14px;">
      </div>
      <button type="submit" class="btn btn-secondary btn-full" style="padding:10px 14px;">Add Zone</button>
    </form>
  `;
  settingsHTML.appendChild(zonesCard);

  container.appendChild(settingsHTML);

  // Settings form handlers
  configCard.querySelector('#settings-db-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const url = document.getElementById('set-supabase-url').value;
    const key = document.getElementById('set-supabase-key').value;
    const okey = document.getElementById('set-openai-key').value;

    saveSupabaseConfig(url, key);
    saveOpenAIKey(okey);

    // Reinitialize DB
    await db.reinitialize();
    alert('CRM Settings saved successfully.');
    renderActiveView();
  });

  zonesCard.querySelector('#settings-add-zone-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('add-zone-name').value;
    const fee = parseInt(document.getElementById('add-zone-fee').value, 10);

    const newZone = {
      id: 'zone-' + Math.random().toString(36).substr(2, 9),
      name,
      fee
    };

    await db.saveDeliveryZone(newZone);
    renderActiveView();
  });

  zonesCard.querySelectorAll('.btn-delete-zone').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      const zoneId = e.currentTarget.dataset.zoneId;
      await db.deleteDeliveryZone(zoneId);
      renderActiveView();
    });
  });
}

// ==================== GLOBAL CONTROLLERS & INGESTION MODAL ====================
function setupGlobalListeners() {

  // --- Edit Product Logic ---
  const editProdModal = document.getElementById('modal-edit-product');
  const btnCloseEditProd = document.getElementById('btn-close-edit-product');
  const btnCancelEditProd = document.getElementById('btn-cancel-edit-product');
  const editProdForm = document.getElementById('edit-product-form');

  if (editProdModal && btnCloseEditProd && btnCancelEditProd && editProdForm) {
    const closeMod = () => { editProdModal.style.display = 'none'; };
    btnCloseEditProd.addEventListener('click', closeMod);
    btnCancelEditProd.addEventListener('click', closeMod);

    document.addEventListener('click', async (e) => {
      if (e.target.closest('.btn-edit-product')) {
        const prodId = e.target.closest('.btn-edit-product').dataset.prodId;
        const products = await db.getProducts();
        const p = products.find(x => x.id === prodId);
        if (p) {
          document.getElementById('ep-id').value = p.id;
          document.getElementById('ep-visual').value = p.visual || '';
          document.getElementById('ep-category').value = p.category || '';
          document.getElementById('ep-sellingPrice').value = p.sellingPrice || 0;
          document.getElementById('ep-quantity').value = p.quantity || 0;
          document.getElementById('ep-availability').value = p.availability || 'In Stock';

          const transContainer = document.getElementById('ep-translations-container');
          transContainer.innerHTML = '';
          const langs = ['en', 'ru', 'id', 'it', 'zh', 'uk', 'fr'];
          
          langs.forEach(lang => {
            const langData = p[lang] || { name: '', unit: '', tag: '', detail: '', description: '' };
            const langHtml = `
              <details style="background:#f9f9f9; padding:8px; border:1px solid var(--line); border-radius:6px;">
                <summary style="font-weight:700; cursor:pointer; color:var(--green); text-transform:uppercase;">${lang} Translation</summary>
                <div style="display:flex; flex-direction:column; gap:8px; margin-top:8px;">
                  <div style="display:flex; gap:8px;">
                    <div style="flex:1;"><label style="font-size:11px;">Name</label><input type="text" class="form-control ep-trans" data-lang="${lang}" data-field="name" value="${langData.name || ''}"></div>
                    <div style="flex:1;"><label style="font-size:11px;">Unit (e.g. 1 kg)</label><input type="text" class="form-control ep-trans" data-lang="${lang}" data-field="unit" value="${langData.unit || ''}"></div>
                  </div>
                  <div style="display:flex; gap:8px;">
                    <div style="flex:1;"><label style="font-size:11px;">Tag</label><input type="text" class="form-control ep-trans" data-lang="${lang}" data-field="tag" value="${langData.tag || ''}"></div>
                    <div style="flex:1;"><label style="font-size:11px;">Detail</label><input type="text" class="form-control ep-trans" data-lang="${lang}" data-field="detail" value="${langData.detail || ''}"></div>
                  </div>
                  <div><label style="font-size:11px;">Description</label><textarea class="form-control ep-trans" data-lang="${lang}" data-field="description">${langData.description || ''}</textarea></div>
                </div>
              </details>
            `;
            transContainer.insertAdjacentHTML('beforeend', langHtml);
          });
          
          editProdModal.style.display = 'flex';
        }
      }
    });

    editProdForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const prodId = document.getElementById('ep-id').value;
      const products = await db.getProducts();
      let p = products.find(x => x.id === prodId);
      if (!p) return;

      p.visual = document.getElementById('ep-visual').value;
      p.category = document.getElementById('ep-category').value;
      p.sellingPrice = parseInt(document.getElementById('ep-sellingPrice').value, 10);
      p.quantity = parseInt(document.getElementById('ep-quantity').value, 10);
      p.availability = document.getElementById('ep-availability').value;
      
      // We also update the base name based on 'en'
      
      document.querySelectorAll('.ep-trans').forEach(input => {
        const lang = input.dataset.lang;
        const field = input.dataset.field;
        if (!p[lang]) p[lang] = {};
        p[lang][field] = input.value;
      });
      
      p.name = p.en?.name || p.name;
      p.lastUpdate = new Date().toISOString();

      await db.saveProduct(p);
      editProdModal.style.display = 'none';
      if (currentModule === 'products') renderActiveView();
    });
  }

  // Login Form
  document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const user = document.getElementById('login-username').value;
    const pass = document.getElementById('login-password').value;

    const res = await auth.login(user, pass);
    if (res.success) {
      showApp();
      window.location.hash = '#dashboard';
    } else {
      const err = document.getElementById('login-error-msg');
      err.textContent = res.message;
      err.style.display = 'block';
    }
  });

  // Logout actions
  document.getElementById('sidebar-logout').addEventListener('click', () => {
    auth.logout();
    showLogin();
  });

  // Ingest modal buttons
  document.getElementById('btn-ingest-desktop').addEventListener('click', openIngestModal);
  document.getElementById('btn-ingest-mobile').addEventListener('click', openIngestModal);
  document.getElementById('btn-close-ingest').addEventListener('click', closeIngestModal);
  
  // Submit parse text
  document.getElementById('btn-submit-parse').addEventListener('click', processIngestion);
  
  // Back from review
  document.getElementById('btn-review-back').addEventListener('click', () => {
    document.getElementById('ingest-review-panel').style.display = 'none';
    document.getElementById('ingest-input-panel').style.display = 'block';
  });

  // Confirm Ingest Review Form
  document.getElementById('ingest-review-form').addEventListener('submit', confirmIngestSubmission);
}

function openIngestModal() {
  document.getElementById('raw-message-text').value = '';
  document.getElementById('ingest-review-panel').style.display = 'none';
  document.getElementById('ingest-input-panel').style.display = 'block';
  document.getElementById('modal-ingest').classList.add('active');
}

function closeIngestModal() {
  document.getElementById('modal-ingest').classList.remove('active');
}

// Handles parsing step in Ingestion modal
async function processIngestion() {
  const text = document.getElementById('raw-message-text').value;
  if (!text.trim()) {
    alert('Please paste some message text first.');
    return;
  }

  // Get Ingestion Type Selection
  const typeChoiceNode = document.querySelector('input[name="ingest-type-choice"]:checked');
  const forcedType = typeChoiceNode ? typeChoiceNode.value : 'auto';

  // Show Loading Spinner
  document.getElementById('ingest-input-panel').style.display = 'none';
  document.getElementById('ingest-loading-panel').style.display = 'block';

  // Call Parser
  const parsed = await parseIncomingMessage(text, forcedType);

  // Hide loading
  document.getElementById('ingest-loading-panel').style.display = 'none';
  
  // Show Review form
  document.getElementById('ingest-detected-type').textContent = `Detected Message Type: ${parsed.type}`;
  
  const formContainer = document.getElementById('review-fields-container');
  formContainer.innerHTML = ''; // Clear

  if (parsed.type === 'Supplier quotation') {
    populateSupplierReview(formContainer, parsed.data);
  } else if (parsed.type === 'Driver message') {
    populateDriverReview(formContainer, parsed.data);
  } else {
    populateOrderReview(formContainer, parsed.data);
  }

  document.getElementById('ingest-review-panel').style.display = 'block';
}

function populateDriverReview(container, data) {
  container.innerHTML = `
    <input type="hidden" id="ingest-type" value="Driver message">
    <div class="form-group">
      <label class="form-label">Driver Name</label>
      <input type="text" id="rev-driver-name" class="form-control" value="${data.senderName || ''}" required>
    </div>
    <div class="form-group">
      <label class="form-label">Driver WhatsApp</label>
      <input type="text" id="rev-driver-phone" class="form-control" value="${data.driverPhone || ''}" required>
    </div>
    <div class="form-group">
      <label class="form-label">Message Text</label>
      <textarea id="rev-driver-msg" class="form-control" required style="min-height:80px;">${data.messageText || ''}</textarea>
    </div>
    <div class="form-group">
      <label class="form-label">Order Reference (optional)</label>
      <input type="text" id="rev-driver-ref" class="form-control" value="${data.orderRef || ''}" placeholder="e.g. BF-1002">
    </div>
  `;
}

function populateOrderReview(container, data) {
  // Pre-fetch delivery zones
  db.getDeliveryZones().then(zones => {
    const selectOptions = zones.map(z => `
      <option value="${z.name}" ${z.name.toLowerCase() === (data.deliveryZone || '').toLowerCase() ? 'selected' : ''}>${z.name} (Fee: ${formatRupiah(z.fee)})</option>
    `).join('');

    const itemsRows = data.products.map((p, idx) => `
      <tr>
        <td><input type="text" class="form-control" name="prod_name_${idx}" value="${p.name}" required style="padding:6px 10px;"></td>
        <td><input type="number" class="form-control" name="prod_qty_${idx}" value="${p.quantity}" required style="padding:6px 10px; width:70px;"></td>
        <td><input type="text" class="form-control" name="prod_unit_${idx}" value="${p.unit}" required style="padding:6px 10px; width:60px;"></td>
      </tr>
    `).join('');

    container.innerHTML = `
      <input type="hidden" id="ingest-type" value="New order">
      <div class="review-grid">
        <div class="form-group">
          <label class="form-label">Client Name</label>
          <input type="text" id="rev-client-name" class="form-control" value="${data.clientName || ''}" required>
        </div>
        <div class="form-group">
          <label class="form-label">WhatsApp Contact</label>
          <input type="text" id="rev-whatsapp" class="form-control" value="${data.whatsapp || ''}" required>
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Delivery Address</label>
        <input type="text" id="rev-address" class="form-control" value="${data.deliveryAddress || ''}" required>
      </div>
      <div class="review-grid">
        <div class="form-group">
          <label class="form-label">Delivery Zone</label>
          <select id="rev-zone" class="form-control" required>
            <option value="">-- Select Zone --</option>
            ${selectOptions}
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Preferred Date</label>
          <input type="date" id="rev-date" class="form-control" value="${data.deliveryDate || new Date().toISOString().split('T')[0]}" required>
        </div>
      </div>
      <div class="review-grid">
        <div class="form-group">
          <label class="form-label">Time Window</label>
          <input type="text" id="rev-time" class="form-control" value="${data.timeWindow || ''}" placeholder="e.g. 09:00 - 12:00">
        </div>
        <div class="form-group">
          <label class="form-label">Payment Note</label>
          <input type="text" id="rev-payment" class="form-control" value="${data.paymentNote || 'Bank Transfer'}">
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Requested Items</label>
        <table class="review-products-table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Unit</th>
            </tr>
          </thead>
          <tbody id="rev-order-products-body">
            ${itemsRows}
          </tbody>
        </table>
        <button type="button" class="btn btn-secondary btn-sm" id="btn-add-item-row" style="margin-top:10px;">+ Add Item</button>
      </div>

      <div class="form-group">
        <label class="form-label">Special Notes</label>
        <textarea id="rev-notes" class="form-control" style="min-height:60px;">${data.specialNotes || ''}</textarea>
      </div>
    `;

    // Hook add item row button
    document.getElementById('btn-add-item-row').addEventListener('click', () => {
      const tbody = document.getElementById('rev-order-products-body');
      const idx = tbody.children.length;
      const row = document.createElement('tr');
      row.innerHTML = `
        <td><input type="text" class="form-control" name="prod_name_${idx}" value="Avocado Bali" required style="padding:6px 10px;"></td>
        <td><input type="number" class="form-control" name="prod_qty_${idx}" value="1" required style="padding:6px 10px; width:70px;"></td>
        <td><input type="text" class="form-control" name="prod_unit_${idx}" value="kg" required style="padding:6px 10px; width:60px;"></td>
      `;
      tbody.appendChild(row);
    });
  });
}

function populateSupplierReview(container, data) {
  const itemsRows = data.products.map((p, idx) => `
    <tr>
      <td><input type="text" class="form-control" name="supp_prod_name_${idx}" value="${p.name}" required style="padding:6px 10px;"></td>
      <td><input type="number" class="form-control" name="supp_prod_price_${idx}" value="${p.price || 0}" required style="padding:6px 10px;"></td>
      <td>
        <select class="form-control" name="supp_prod_unit_${idx}" style="padding:6px 10px;">
          <option value="kg" ${p.unit === 'kg' ? 'selected' : ''}>kg (kilo)</option>
          <option value="pcs" ${p.unit === 'pcs' || p.unit === 'unit' ? 'selected' : ''}>pcs (unit)</option>
          <option value="100g" ${p.unit === '100g' ? 'selected' : ''}>100g</option>
          <option value="ikat" ${p.unit === 'ikat' ? 'selected' : ''}>ikat</option>
          <option value="box" ${p.unit === 'box' ? 'selected' : ''}>box</option>
          <option value="pack" ${p.unit === 'pack' ? 'selected' : ''}>pack</option>
          <option value="bundle" ${p.unit === 'bundle' ? 'selected' : ''}>bundle</option>
        </select>
      </td>
      <td>
        <select class="form-control" name="supp_prod_avail_${idx}" style="padding:6px 10px;">
          <option value="In Stock" ${p.availability === 'In Stock' ? 'selected' : ''}>In Stock</option>
          <option value="Limited" ${p.availability === 'Limited' ? 'selected' : ''}>Limited</option>
          <option value="Out of Stock" ${p.availability === 'Out of Stock' ? 'selected' : ''}>Out of Stock</option>
        </select>
      </td>
    </tr>
  `).join('');

  container.innerHTML = `
    <input type="hidden" id="ingest-type" value="Supplier quotation">
    <div class="form-group">
      <label class="form-label">Supplier Name</label>
      <input type="text" id="rev-supplier-name" class="form-control" value="${data.supplierName || ''}" required>
    </div>

    <div class="form-group">
      <label class="form-label">Quoted Product Price List</label>
      <table class="review-products-table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quoted Price (IDR)</th>
            <th>Unit</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          ${itemsRows}
        </tbody>
      </table>
    </div>
  `;
}

// Submits the finalized/reviewed ingestion form data to DB
async function confirmIngestSubmission(e) {
  e.preventDefault();
  const type = document.getElementById('ingest-type').value;

  if (type === 'New order') {
    const name = document.getElementById('rev-client-name').value;
    const phone = document.getElementById('rev-whatsapp').value;
    const address = document.getElementById('rev-address').value;
    const zoneName = document.getElementById('rev-zone').value;
    const date = document.getElementById('rev-date').value;
    const time = document.getElementById('rev-time').value;
    const payment = document.getElementById('rev-payment').value;
    const notes = document.getElementById('rev-notes').value;

    // Compile items from review rows
    const tbody = document.getElementById('rev-order-products-body');
    const productsList = [];
    
    // Fetch product catalog to map pricing
    const catalog = await db.getProducts();

    for (let idx = 0; idx < tbody.children.length; idx++) {
      const nameInput = document.getElementsByName(`prod_name_${idx}`)[0];
      const qtyInput = document.getElementsByName(`prod_qty_${idx}`)[0];
      const unitInput = document.getElementsByName(`prod_unit_${idx}`)[0];
      
      if (nameInput && qtyInput) {
        const prodName = nameInput.value;
        const qty = parseFloat(qtyInput.value);
        const unit = unitInput.value;
        
        // Find catalog pricing
        const catItem = catalog.find(c => c.name.toLowerCase() === prodName.toLowerCase());
        const price = catItem ? catItem.sellingPrice : 35000; // fallback default price
        
        productsList.push({
          name: prodName,
          quantity: qty,
          unit,
          price
        });
      }
    }

    // Zone calculation
    const zones = await db.getDeliveryZones();
    const zone = zones.find(z => z.name.toLowerCase() === zoneName.toLowerCase());
    const fee = zone ? zone.fee : 20000;

    // Subtotal
    const subtotal = productsList.reduce((acc, p) => acc + (p.price * p.quantity), 0);
    const totalAmount = subtotal + fee;

    // Get order number sequence
    const orders = await db.getOrders();
    const orderNum = `BF-${1001 + orders.length}`;

    const newOrder = {
      orderNumber: orderNum,
      clientName: name,
      whatsapp: phone,
      deliveryZone: zoneName,
      deliveryAddress: address,
      deliveryDate: date,
      timeWindow: time,
      products: productsList,
      subtotal,
      deliveryFee: fee,
      discount: 0,
      totalAmount,
      paymentStatus: 'Pending',
      deliveryStatus: 'Scheduled',
      issue: 'None',
      stage: 'Confirmed', // starts at Confirmed once parsed & verified
      notes
    };

    // 1. Create client if doesn't exist
    const clients = await db.getClients();
    const existingClient = clients.find(c => c.whatsapp === phone);
    if (!existingClient) {
      const newClient = {
        name,
        whatsapp: phone,
        address,
        deliveryZone: zoneName,
        language: 'English',
        clientType: 'Lead',
        notes: '',
        lastOrderDate: date
      };
      await db.saveClient(newClient);
    } else {
      existingClient.lastOrderDate = date;
      await db.saveClient(existingClient);
    }

    // 2. Save Order
    const savedOrder = await db.saveOrder(newOrder);

    // 3. Mark matching message in Inbox as Done/Processed and save order links
    const inbox = await db.getInbox();
    let matchMsg = null;
    if (currentIngestingMsgId) {
      matchMsg = inbox.find(m => m.id === currentIngestingMsgId);
    }
    if (!matchMsg) {
      matchMsg = inbox.find(m => m.phoneOrEmail === phone && m.status !== 'Done');
    }
    if (matchMsg) {
      matchMsg.status = 'Done';
      matchMsg.orderId = savedOrder.id || '';
      matchMsg.orderNumber = savedOrder.orderNumber || '';
      await db.saveInbox(matchMsg);
    }

    alert(`Order ${orderNum} created successfully! Client record updated.`);

  } else if (type === 'Supplier quotation') {
    const supplierName = document.getElementById('rev-supplier-name').value.trim();
    
    // Check if supplier exists, if not create a new supplier record automatically
    const suppliers = await db.getSuppliers();
    const existingSupp = suppliers.find(s => s.name.toLowerCase() === supplierName.toLowerCase());
    if (!existingSupp) {
      const newSupplier = {
        name: supplierName,
        whatsapp: '+62 812 3456 7890', // Default placeholder
        location: 'Ubud',
        mainProducts: 'Fruits & Veggies',
        reliabilityNote: 'Created automatically via copy-paste Ingestion',
        qualityNote: 'Assessing quality',
        lastPriceUpdate: new Date().toISOString()
      };
      await db.saveSupplier(newSupplier);
    } else {
      existingSupp.lastPriceUpdate = new Date().toISOString();
      await db.saveSupplier(existingSupp);
    }

    const catalog = await db.getProducts();
    const table = document.querySelector('.review-products-table tbody');
    
    // Iterate rows
    for (let idx = 0; idx < table.children.length; idx++) {
      const nameInput = document.getElementsByName(`supp_prod_name_${idx}`)[0];
      const priceInput = document.getElementsByName(`supp_prod_price_${idx}`)[0];
      const unitInput = document.getElementsByName(`supp_prod_unit_${idx}`)[0];
      const availInput = document.getElementsByName(`supp_prod_avail_${idx}`)[0];

      if (nameInput && priceInput) {
        const prodName = nameInput.value;
        const price = parseInt(priceInput.value, 10);
        const unit = unitInput ? unitInput.value : 'kg';
        const avail = availInput.value;

        // Find product catalog item to update pricing
        const item = catalog.find(c => c.name.toLowerCase() === prodName.toLowerCase());
        if (item) {
          // Initialize supplier quotes structure
          item.supplierQuotes = item.supplierQuotes || {};
          item.supplierQuotes[supplierName] = {
            price: price,
            availability: avail,
            unit: unit,
            date: new Date().toISOString()
          };

          // Auto-select as active supplier if cheaper or only supplier
          item.bestSupplier = supplierName;
          item.supplierPrice = price;
          item.availability = avail;
          item.lastUpdate = new Date().toISOString();
          await db.saveProduct(item);
        } else {
          // Create new product dynamically
          const newProd = {
            name: prodName,
            category: 'Other',
            sellingPrice: Math.round(price * 1.30), // default 30% markup
            bestSupplier: supplierName,
            supplierPrice: price,
            availability: avail,
            qualityRating: 5,
            eta: 'Immediate',
            lastUpdate: new Date().toISOString(),
            unit: unit,
            supplierQuotes: {
              [supplierName]: {
                price: price,
                availability: avail,
                unit: unit,
                date: new Date().toISOString()
              }
            }
          };
          await db.saveProduct(newProd);
        }
      }
    }

    // Mark matching inbox msg done
    const inbox = await db.getInbox();
    let matchMsg = null;
    if (currentIngestingMsgId) {
      matchMsg = inbox.find(m => m.id === currentIngestingMsgId);
    }
    if (!matchMsg) {
      matchMsg = inbox.find(m => m.messageText.includes(supplierName) && m.status !== 'Done');
    }
    if (matchMsg) {
      matchMsg.status = 'Done';
      await db.saveInbox(matchMsg);
    }

    alert('Supplier price list processed. Product database updated.');
  } else if (type === 'Driver message') {
    const name = document.getElementById('rev-driver-name').value.trim();
    const phone = document.getElementById('rev-driver-phone').value.trim();
    const msgText = document.getElementById('rev-driver-msg').value.trim();
    const orderRef = document.getElementById('rev-driver-ref').value.trim().toUpperCase();

    // Create or update driver record if needed
    const drivers = await db.getDrivers();
    const existingDriver = drivers.find(d => d.whatsapp === phone || d.name.toLowerCase() === name.toLowerCase());
    if (!existingDriver) {
      const newDriver = {
        name,
        whatsapp: phone,
        status: 'Active',
        vehicle: 'Scooter'
      };
      await db.saveDriver(newDriver);
    }

    // Save driver message to inbox
    const newMsg = {
      senderName: name,
      phoneOrEmail: phone,
      messageText: msgText,
      source: 'WhatsApp',
      date: new Date().toISOString(),
      language: 'English',
      suggestedType: 'Driver message',
      suggestedAction: 'Resolve Driver Message',
      status: 'Done', // Mark done when saved/confirmed
      isDriver: true,
      orderRef: orderRef,
      parsedData: {
        senderName: name,
        driverPhone: phone,
        messageText: msgText,
        orderRef: orderRef
      }
    };

    const inbox = await db.getInbox();
    let matchMsg = null;
    if (currentIngestingMsgId) {
      matchMsg = inbox.find(m => m.id === currentIngestingMsgId);
    }
    if (matchMsg) {
      Object.assign(matchMsg, newMsg);
      matchMsg.id = currentIngestingMsgId;
      await db.saveInbox(matchMsg);
    } else {
      // Just save it as a new message
      newMsg.id = 'msg-' + Math.random().toString(36).substr(2, 9);
      await db.saveInbox(newMsg);
    }

    // If the message contains an order reference, log it in the order's delivery status / notes
    if (orderRef) {
      const orders = await db.getOrders();
      const order = orders.find(o => o.orderNumber === orderRef || o.id === orderRef);
      if (order) {
        order.notes = `Driver update: "${msgText}". ${order.notes || ''}`;
        if (msgText.toLowerCase().includes('deliver') || msgText.toLowerCase().includes('completed') || msgText.toLowerCase().includes('consegnato')) {
          order.deliveryStatus = 'Delivered';
          order.stage = 'Completed';
        }
        await db.saveOrder(order);
      }
    }

    alert('Driver message processed and logged.');
  }

  // Reset core state
  currentIngestingMsgId = null;

  closeIngestModal();
  renderActiveView();
}

// Run Core Init
window.addEventListener('DOMContentLoaded', init);
export { renderActiveView };
