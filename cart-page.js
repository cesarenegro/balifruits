const cartItemsNode = document.querySelector("[data-cart-items]");
const emptyCartNode = document.querySelector("[data-empty-cart]");
const summaryNode = document.querySelector("[data-cart-summary]");
const subtotalNode = document.querySelector("[data-cart-subtotal]");
const totalNode = document.querySelector("[data-cart-total]");
const clearButton = document.querySelector("[data-clear-cart]");

// Preset Delivery Zones & Fees matching crm config
const DELIVERY_ZONES = {
  'Canggu': 15000,
  'Seminyak': 20000,
  'Kuta': 25000,
  'Sanur': 30500,
  'Ubud': 40000,
  'Uluwatu': 45000
};

// Default Stripe HK link if not set in CRM
const DEFAULT_STRIPE_LINK = 'https://buy.stripe.com/mock_balifruits_hk';

function formatRupiah(amount) {
  return 'Rp ' + amount.toLocaleString('id-ID');
}

function createStructuredWhatsAppMessage(order) {
  const itemsLines = order.products.map(
    (item) => `• ${item.quantity}x ${item.name} (${item.unit}) - ${formatRupiah(item.price * item.quantity)}`
  );

  const lines = [
    "*NEW ORDER FROM BALI FRUITS WEBSITE*",
    "====================================",
    `*Customer:* ${order.clientName}`,
    `*WhatsApp Phone:* ${order.whatsapp}`,
    `*Delivery Area:* ${order.deliveryZone}`,
    `*Address:* ${order.deliveryAddress}`,
    `*Delivery Date:* ${order.deliveryDate}`,
    `*Preferred Time Slot:* ${order.timeWindow}`,
    "====================================",
    "*Items Ordered:*",
    ...itemsLines,
    "====================================",
    `*Subtotal:* ${formatRupiah(order.subtotal)}`,
    `*Delivery Fee:* ${formatRupiah(order.deliveryFee)}`,
    `*Grand Total:* ${formatRupiah(order.totalAmount)}`,
    `*Payment Method:* ${order.paymentStatus === 'Paid' ? order.paymentNote + ' (Redirect Opened)' : order.paymentNote}`,
    "====================================",
    "Thank you! Please confirm my order."
  ];

  return lines.join("\n");
}

function renderCart() {
  const items = BaliCart.readCart();
  const isEmpty = items.length === 0;
  const subtotal = BaliCart.getCartSubtotal(items);

  emptyCartNode.hidden = !isEmpty;
  cartItemsNode.hidden = isEmpty;
  summaryNode.hidden = isEmpty;

  subtotalNode.textContent = formatRupiah(subtotal);
  updateGrandTotal();

  if (isEmpty) {
    cartItemsNode.innerHTML = "";
    return;
  }

  cartItemsNode.innerHTML = items
    .map(
      (item) => `
        <article class="cart-item">
          <img src="${item.image}" alt="${item.name}" />
          <div class="cart-item-copy">
            <h2>${item.name}</h2>
            <p>${item.description}</p>
            <span>${item.unit}</span>
          </div>
          <strong>${formatRupiah(item.price)}</strong>
          <div class="quantity-control" aria-label="Quantity for ${item.name}">
            <button type="button" data-cart-decrease="${item.id}" aria-label="Decrease ${item.name}">-</button>
            <span>${item.quantity}</span>
            <button type="button" data-cart-increase="${item.id}" aria-label="Increase ${item.name}">+</button>
          </div>
          <button class="remove-button" type="button" data-cart-remove="${item.id}">Remove</button>
        </article>
      `,
    )
    .join("");
}

function updateGrandTotal() {
  const items = BaliCart.readCart();
  const subtotal = BaliCart.getCartSubtotal(items);
  const zoneSelect = document.getElementById('cust-zone');
  const deliveryFeeNode = document.getElementById('summary-delivery-fee');
  
  let deliveryFee = 0;
  if (zoneSelect && zoneSelect.value) {
    deliveryFee = DELIVERY_ZONES[zoneSelect.value] || 0;
    deliveryFeeNode.textContent = formatRupiah(deliveryFee);
  } else {
    deliveryFeeNode.textContent = 'Select Zone';
  }

  const grandTotal = subtotal + deliveryFee;
  totalNode.textContent = formatRupiah(grandTotal);
}

// UI Event Listeners for Checkout Form
document.addEventListener('DOMContentLoaded', () => {
  const zoneSelect = document.getElementById('cust-zone');
  const paymentSelect = document.getElementById('cust-payment');
  const bankPanel = document.getElementById('bank-info-panel');
  const stripePanel = document.getElementById('stripe-info-panel');
  const checkoutForm = document.getElementById('checkout-form');

  // Dynamic Date picker constraints: default to tomorrow, min today
  const dateInput = document.getElementById('cust-date');
  if (dateInput) {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    
    dateInput.min = today.toISOString().split('T')[0];
    dateInput.value = tomorrow.toISOString().split('T')[0];
  }

  // Zone select update
  if (zoneSelect) {
    zoneSelect.addEventListener('change', updateGrandTotal);
  }

  // Payment select toggle instructions
  if (paymentSelect) {
    paymentSelect.addEventListener('change', () => {
      if (paymentSelect.value === 'Bank Transfer') {
        bankPanel.style.display = 'block';
        stripePanel.style.display = 'none';
      } else {
        bankPanel.style.display = 'none';
        stripePanel.style.display = 'block';
      }
    });
  }

  // Checkout submit order
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const items = BaliCart.readCart();
      if (items.length === 0) {
        alert('Your shopping cart is empty.');
        return;
      }

      const name = document.getElementById('cust-name').value;
      const phone = document.getElementById('cust-phone').value;
      const zone = document.getElementById('cust-zone').value;
      const address = document.getElementById('cust-address').value;
      const date = document.getElementById('cust-date').value;
      const time = document.getElementById('cust-time').value;
      const payment = document.getElementById('cust-payment').value;

      const subtotal = BaliCart.getCartSubtotal(items);
      const deliveryFee = DELIVERY_ZONES[zone] || 0;
      const totalAmount = subtotal + deliveryFee;

      // Map cart items to order products structure
      const productsList = items.map(item => ({
        name: item.name,
        quantity: item.quantity,
        unit: item.unit,
        price: item.price
      }));

      // Generate temp id
      const orderId = 'order-' + Math.random().toString(36).substr(2, 9);
      
      const orderData = {
        id: orderId,
        orderNumber: 'BF-WEB-' + Math.floor(Math.random() * 9000 + 1000),
        clientName: name,
        whatsapp: phone,
        deliveryZone: zone,
        deliveryAddress: address,
        deliveryDate: date,
        timeWindow: time,
        products: productsList,
        subtotal,
        deliveryFee,
        discount: 0,
        totalAmount,
        paymentStatus: 'Pending',
        deliveryStatus: 'Scheduled',
        issue: 'None',
        stage: 'Received',
        notes: `Placed via website checkout. Selected Payment: ${payment}.`
      };

      // 1. Post to local CRM backend API (if running on http://localhost:3050)
      try {
        console.log('Sending order metadata to local CRM server...');
        const response = await fetch('http://localhost:3050/api/orders', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(orderData)
        });
        if (response.ok) {
          console.log('Order registered successfully on local database server.');
          
          // Also create an inbox parsed record so it appears on the Admin inbox page
          await fetch('http://localhost:3050/api/inbox', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              senderName: name,
              phoneOrEmail: phone,
              messageText: `Order Placed via Website Checkout Form for total ${formatRupiah(totalAmount)}`,
              source: 'Web Checkout',
              date: new Date().toISOString(),
              language: 'English',
              suggestedType: 'New order',
              suggestedAction: 'Link to Existing Order',
              status: 'Parsed',
              parsedData: orderData
            })
          });
        }
      } catch (err) {
        console.warn('Local CRM server offline. Saving order state locally.');
        // fallback to saving order locally inside browser local storage
        try {
          const localOrders = JSON.parse(localStorage.getItem('BF_orders') || '[]');
          localOrders.push(orderData);
          localStorage.setItem('BF_orders', JSON.stringify(localOrders));
        } catch (e) {
          console.error('Failed to write local fallback state:', e);
        }
      }

      // 2. Stripe redirect if chosen
      if (payment === 'Stripe') {
        const stripeLink = localStorage.getItem('BF_STRIPE_LINK') || DEFAULT_STRIPE_LINK;
        window.open(stripeLink, '_blank');
      }

      // 3. WhatsApp Message Redirect
      const waMessage = createStructuredWhatsAppMessage(orderData);
      const waUrl = `https://wa.me/6281355551234?text=${encodeURIComponent(waMessage)}`; // BALI FRUITS business phone
      
      // Clear Cart & redirect
      BaliCart.clearCart();
      window.location.href = waUrl;
    });
  }
});

// Cart interactions hooks
document.addEventListener("click", (event) => {
  const increaseButton = event.target.closest("[data-cart-increase]");
  const decreaseButton = event.target.closest("[data-cart-decrease]");
  const removeButton = event.target.closest("[data-cart-remove]");

  if (increaseButton) {
    const item = BaliCart.readCart().find((cartItem) => cartItem.id === increaseButton.dataset.cartIncrease);
    BaliCart.updateCartItemQuantity(item.id, item.quantity + 1);
  }

  if (decreaseButton) {
    const item = BaliCart.readCart().find((cartItem) => cartItem.id === decreaseButton.dataset.cartDecrease);
    BaliCart.updateCartItemQuantity(item.id, item.quantity - 1);
  }

  if (removeButton) {
    BaliCart.removeCartItem(removeButton.dataset.cartRemove);
  }
});

clearButton.addEventListener("click", BaliCart.clearCart);
window.addEventListener("bali-cart-updated", renderCart);

renderCart();
