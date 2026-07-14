// PDF Generator using html2pdf.js via CDN

function formatRupiah(amount) {
  return 'Rp ' + amount.toLocaleString('id-ID');
}

export const pdfGenerator = {
  // Generate and download Order Confirmation PDF
  generateOrderPDF(order) {
    const filename = `Order_${order.orderNumber || order.id}.pdf`;
    
    // Create temporary element for PDF rendering
    const container = document.createElement('div');
    container.style.fontFamily = 'Inter, sans-serif';
    container.style.color = '#1f2a24';
    container.style.padding = '30px';
    container.style.backgroundColor = '#fff';
    container.style.width = '700px'; // standard width for crisp render

    const productRows = order.products.map(item => `
      <tr style="border-bottom: 1px solid rgba(23, 61, 43, 0.1);">
        <td style="padding: 12px 8px; font-weight: 600;">${item.name}</td>
        <td style="padding: 12px 8px; text-align: center;">${item.quantity}</td>
        <td style="padding: 12px 8px; text-align: center; text-transform: uppercase;">${item.unit}</td>
      </tr>
    `).join('');

    container.innerHTML = `
      <!-- Header -->
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 3px solid #173D2B; padding-bottom: 20px; margin-bottom: 30px;">
        <div>
          <h1 style="color: #173D2B; margin: 0; font-size: 28px; font-weight: 800; letter-spacing: 0.12em;">BALI FRUITS</h1>
          <p style="margin: 4px 0 0 0; color: #8a9b4f; font-weight: 700; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Fresh • Natural • Premium</p>
        </div>
        <div style="text-align: right;">
          <h2 style="margin: 0; color: #173D2B; font-size: 20px;">ORDER SUMMARY</h2>
          <p style="margin: 5px 0 0 0; font-size: 14px; font-weight: 600;">No: ${order.orderNumber || order.id}</p>
          <p style="margin: 2px 0 0 0; font-size: 12px; color: #666;">Date: ${new Date(order.lastUpdate || Date.now()).toLocaleDateString('id-ID')}</p>
        </div>
      </div>

      <!-- Info Columns -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 35px;">
        <div style="background-color: #F7F3E8; padding: 15px; border-radius: 8px; border-left: 4px solid #173D2B;">
          <h3 style="margin: 0 0 10px 0; color: #173D2B; font-size: 14px; text-transform: uppercase;">Customer Details</h3>
          <p style="margin: 0 0 6px 0; font-weight: 700;">${order.clientName}</p>
          <p style="margin: 0 0 6px 0; font-size: 13px;">WhatsApp: ${order.whatsapp || '-'}</p>
        </div>
        <div style="background-color: #F7F3E8; padding: 15px; border-radius: 8px; border-left: 4px solid #8a9b4f;">
          <h3 style="margin: 0 0 10px 0; color: #173D2B; font-size: 14px; text-transform: uppercase;">Delivery Details</h3>
          <p style="margin: 0 0 6px 0; font-weight: 700;">Zone: ${order.deliveryZone}</p>
          <p style="margin: 0 0 6px 0; font-size: 13px;">Address: ${order.deliveryAddress}</p>
          <p style="margin: 0 0 6px 0; font-size: 13px; font-weight: 600;">Schedule: ${order.deliveryDate} | ${order.timeWindow || 'Flexible'}</p>
        </div>
      </div>

      <!-- Products Table -->
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
        <thead>
          <tr style="background-color: #173D2B; color: #fff;">
            <th style="padding: 10px 8px; text-align: left; border-radius: 4px 0 0 4px;">Product</th>
            <th style="padding: 10px 8px; text-align: center; width: 100px;">Qty</th>
            <th style="padding: 10px 8px; text-align: center; width: 100px; border-radius: 0 4px 4px 0;">Unit</th>
          </tr>
        </thead>
        <tbody>
          ${productRows}
        </tbody>
      </table>

      <!-- Notes Block -->
      ${order.notes ? `
        <div style="margin-bottom: 40px; border: 1px dashed rgba(23, 61, 43, 0.3); padding: 15px; border-radius: 6px;">
          <h4 style="margin: 0 0 6px 0; color: #173D2B; font-size: 13px; text-transform: uppercase;">Operational Notes</h4>
          <p style="margin: 0; font-size: 13px; font-style: italic;">${order.notes}</p>
        </div>
      ` : ''}

      <!-- Footer Signoff -->
      <div style="border-top: 1px solid rgba(23, 61, 43, 0.1); padding-top: 20px; display: flex; justify-content: space-between; align-items: center; font-size: 11px; color: #666;">
        <p>Prepared internally by BALI FRUITS Team</p>
        <p>Contact: operations@balifruits.com</p>
      </div>
    `;

    document.body.appendChild(container);

    // Call html2pdf library
    const opt = {
      margin:       12,
      filename:     filename,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2.5, useCORS: true },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    if (window.html2pdf) {
      window.html2pdf().from(container).set(opt).save().then(() => {
        document.body.removeChild(container);
      });
    } else {
      console.warn('html2pdf library is missing. Falling back to print...');
      window.print();
      document.body.removeChild(container);
    }
  },

  // Generate and download Client Invoice PDF
  generateInvoicePDF(order) {
    const filename = `Invoice_${order.orderNumber || order.id}.pdf`;
    
    // Create temporary element for PDF rendering
    const container = document.createElement('div');
    container.style.fontFamily = 'Inter, sans-serif';
    container.style.color = '#1f2a24';
    container.style.padding = '30px';
    container.style.backgroundColor = '#fff';
    container.style.width = '700px';

    const productRows = order.products.map(item => `
      <tr style="border-bottom: 1px solid rgba(23, 61, 43, 0.1);">
        <td style="padding: 12px 8px; font-weight: 600;">${item.name} <span style="font-weight: normal; font-size: 12px; color: #666;">(${item.unit})</span></td>
        <td style="padding: 12px 8px; text-align: center;">${item.quantity}</td>
        <td style="padding: 12px 8px; text-align: right;">${formatRupiah(item.price)}</td>
        <td style="padding: 12px 8px; text-align: right; font-weight: 700;">${formatRupiah(item.price * item.quantity)}</td>
      </tr>
    `).join('');

    container.innerHTML = `
      <!-- Header -->
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 3px solid #173D2B; padding-bottom: 20px; margin-bottom: 30px;">
        <div>
          <h1 style="color: #173D2B; margin: 0; font-size: 28px; font-weight: 800; letter-spacing: 0.12em;">BALI FRUITS</h1>
          <p style="margin: 4px 0 0 0; color: #8a9b4f; font-weight: 700; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Fresh • Natural • Premium</p>
        </div>
        <div style="text-align: right;">
          <h2 style="margin: 0; color: #173D2B; font-size: 22px; letter-spacing: 0.05em;">INVOICE</h2>
          <p style="margin: 5px 0 0 0; font-size: 14px; font-weight: 600;">Invoice No: INV-${order.orderNumber ? order.orderNumber.replace('BF-', '') : order.id}</p>
          <p style="margin: 2px 0 0 0; font-size: 12px; color: #666;">Date: ${new Date().toLocaleDateString('id-ID')}</p>
          <p style="margin: 2px 0 0 0; font-size: 12px; color: #666;">Ref Order: ${order.orderNumber || order.id}</p>
        </div>
      </div>

      <!-- Info Columns -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 35px;">
        <div style="background-color: #F7F3E8; padding: 15px; border-radius: 8px; border-left: 4px solid #173D2B;">
          <h3 style="margin: 0 0 10px 0; color: #173D2B; font-size: 13px; text-transform: uppercase;">Invoice To</h3>
          <p style="margin: 0 0 6px 0; font-weight: 700; font-size: 14px;">${order.clientName}</p>
          <p style="margin: 0 0 6px 0; font-size: 13px;">WhatsApp: ${order.whatsapp || '-'}</p>
          <p style="margin: 0; font-size: 13px;">Address: ${order.deliveryAddress}</p>
        </div>
        <div style="background-color: #F7F3E8; padding: 15px; border-radius: 8px; border-left: 4px solid #F5A623;">
          <h3 style="margin: 0 0 10px 0; color: #173D2B; font-size: 13px; text-transform: uppercase;">Payment Details</h3>
          <p style="margin: 0 0 6px 0; font-size: 13px;"><strong>Status:</strong> <span style="color: ${order.paymentStatus === 'Paid' ? '#173D2B' : '#d9534f'}; font-weight: bold;">${order.paymentStatus.toUpperCase()}</span></p>
          <p style="margin: 0 0 6px 0; font-size: 13px;"><strong>Method:</strong> ${order.paymentNote || 'Bank Transfer'}</p>
          <p style="margin: 0; font-size: 13px;"><strong>Delivery Zone:</strong> ${order.deliveryZone}</p>
        </div>
      </div>

      <!-- Products Table -->
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
        <thead>
          <tr style="background-color: #173D2B; color: #fff;">
            <th style="padding: 10px 8px; text-align: left; border-radius: 4px 0 0 4px;">Product Description</th>
            <th style="padding: 10px 8px; text-align: center; width: 80px;">Qty</th>
            <th style="padding: 10px 8px; text-align: right; width: 120px;">Price</th>
            <th style="padding: 10px 8px; text-align: right; width: 140px; border-radius: 0 4px 4px 0;">Total</th>
          </tr>
        </thead>
        <tbody>
          ${productRows}
        </tbody>
      </table>

      <!-- Summary Layout -->
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 40px;">
        <div style="max-width: 320px; font-size: 12px; color: #666; line-height: 1.5;">
          <p style="margin: 0 0 6px 0; font-weight: 700; color: #173D2B;">Payment Info:</p>
          <p style="margin: 0;">Bank Transfer: Mandiri 145-00-1122334-5 (A/N BALI FRUITS PT)</p>
          <p style="margin: 4px 0 0 0;">Please send proof of payment via WhatsApp once completed.</p>
        </div>
        <table style="width: 280px; border-collapse: collapse;">
          <tr style="border-bottom: 1px solid rgba(23, 61, 43, 0.1);">
            <td style="padding: 8px 4px; font-size: 13px;">Subtotal:</td>
            <td style="padding: 8px 4px; text-align: right; font-size: 13px;">${formatRupiah(order.subtotal)}</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(23, 61, 43, 0.1);">
            <td style="padding: 8px 4px; font-size: 13px;">Delivery Fee:</td>
            <td style="padding: 8px 4px; text-align: right; font-size: 13px;">+ ${formatRupiah(order.deliveryFee)}</td>
          </tr>
          ${order.discount > 0 ? `
            <tr style="border-bottom: 1px solid rgba(23, 61, 43, 0.1); color: #d9534f;">
              <td style="padding: 8px 4px; font-size: 13px;">Discount:</td>
              <td style="padding: 8px 4px; text-align: right; font-size: 13px;">- ${formatRupiah(order.discount)}</td>
            </tr>
          ` : ''}
          <tr style="font-weight: bold; font-size: 16px; color: #173D2B;">
            <td style="padding: 12px 4px;">Grand Total:</td>
            <td style="padding: 12px 4px; text-align: right;">${formatRupiah(order.totalAmount)}</td>
          </tr>
        </table>
      </div>

      <!-- Thank You Message -->
      <div style="text-align: center; margin-bottom: 45px;">
        <h3 style="color: #173D2B; font-weight: 700; margin: 0 0 8px 0;">Terima Kasih!</h3>
        <p style="margin: 0; color: #666; font-size: 13px;">Thank you for ordering with BALI FRUITS. We hope you enjoy our fresh natural produce.</p>
      </div>

      <!-- Footer Signoff -->
      <div style="border-top: 1px solid rgba(23, 61, 43, 0.1); padding-top: 20px; display: flex; justify-content: space-between; align-items: center; font-size: 11px; color: #666;">
        <p>BALI FRUITS PT • Denpasar, Bali, Indonesia</p>
        <p>WhatsApp Support: +62 813 5555 1234</p>
      </div>
    `;

    document.body.appendChild(container);

    const opt = {
      margin:       12,
      filename:     filename,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2.5, useCORS: true },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    if (window.html2pdf) {
      window.html2pdf().from(container).set(opt).save().then(() => {
        document.body.removeChild(container);
      });
    } else {
      console.warn('html2pdf library is missing. Falling back to print...');
      window.print();
      document.body.removeChild(container);
    }
  },

  // Generate and download Purchase Order PDF for suppliers
  generatePurchaseOrderPDF(pr) {
    const filename = `PurchaseOrder_${pr.id}.pdf`;
    
    // Create temporary element for PDF rendering
    const container = document.createElement('div');
    container.style.fontFamily = 'Inter, sans-serif';
    container.style.color = '#1f2a24';
    container.style.padding = '30px';
    container.style.backgroundColor = '#fff';
    container.style.width = '700px';

    const productRows = pr.products.map(item => {
      const priceVal = item.expectedPrice || item.confirmedPrice || 0;
      const priceStr = priceVal > 0 ? formatRupiah(priceVal) : 'TBD';
      const totalStr = priceVal > 0 ? formatRupiah(priceVal * item.quantity) : 'TBD';
      
      return `
        <tr style="border-bottom: 1px solid rgba(23, 61, 43, 0.1);">
          <td style="padding: 12px 8px; font-weight: 600;">${item.name}</td>
          <td style="padding: 12px 8px; text-align: center;">${item.quantity}</td>
          <td style="padding: 12px 8px; text-align: right;">${priceStr}</td>
          <td style="padding: 12px 8px; text-align: right; font-weight: 700;">${totalStr}</td>
        </tr>
      `;
    }).join('');

    const totalVal = pr.totalPrice || pr.products.reduce((acc, item) => acc + ((item.expectedPrice || item.confirmedPrice || 0) * item.quantity), 0);
    const totalStr = totalVal > 0 ? formatRupiah(totalVal) : 'TBD';

    container.innerHTML = `
      <!-- Header -->
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 3px solid #173D2B; padding-bottom: 20px; margin-bottom: 30px;">
        <div>
          <h1 style="color: #173D2B; margin: 0; font-size: 28px; font-weight: 800; letter-spacing: 0.12em;">BALI FRUITS</h1>
          <p style="margin: 4px 0 0 0; color: #8a9b4f; font-weight: 700; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Fresh • Natural • Premium</p>
        </div>
        <div style="text-align: right;">
          <h2 style="margin: 0; color: #173D2B; font-size: 20px; letter-spacing: 0.05em;">PURCHASE ORDER</h2>
          <p style="margin: 5px 0 0 0; font-size: 14px; font-weight: 600;">PO Ref: PO-${pr.id.toUpperCase().replace('PR-', '')}</p>
          <p style="margin: 2px 0 0 0; font-size: 12px; color: #666;">Date: ${new Date(pr.date || Date.now()).toLocaleDateString('id-ID')}</p>
        </div>
      </div>

      <!-- Info Columns -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 35px;">
        <div style="background-color: #F7F3E8; padding: 15px; border-radius: 8px; border-left: 4px solid #173D2B;">
          <h3 style="margin: 0 0 10px 0; color: #173D2B; font-size: 13px; text-transform: uppercase;">To Supplier</h3>
          <p style="margin: 0 0 6px 0; font-weight: 700; font-size: 14px;">${pr.supplierName}</p>
          <p style="margin: 0; font-size: 13px; color: #555;">Please verify and deliver the list of items according to the requested schedule.</p>
        </div>
        <div style="background-color: #F7F3E8; padding: 15px; border-radius: 8px; border-left: 4px solid #8a9b4f;">
          <h3 style="margin: 0 0 10px 0; color: #173D2B; font-size: 13px; text-transform: uppercase;">Delivery & Scheduling</h3>
          <p style="margin: 0 0 6px 0; font-size: 13px;"><strong>Requested Delivery (ETA):</strong> <span style="font-weight: bold; color: #173D2B;">${pr.eta}</span></p>
          <p style="margin: 0 0 6px 0; font-size: 13px;"><strong>Status:</strong> ${pr.paymentStatus}</p>
          <p style="margin: 0; font-size: 13px;"><strong>Deliver to:</strong> BALI FRUITS Hub (Denpasar)</p>
        </div>
      </div>

      <!-- Products Table -->
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
        <thead>
          <tr style="background-color: #173D2B; color: #fff;">
            <th style="padding: 10px 8px; text-align: left; border-radius: 4px 0 0 4px;">Item Description</th>
            <th style="padding: 10px 8px; text-align: center; width: 100px;">Qty</th>
            <th style="padding: 10px 8px; text-align: right; width: 120px;">Est. Unit Cost</th>
            <th style="padding: 10px 8px; text-align: right; width: 140px; border-radius: 0 4px 4px 0;">Total</th>
          </tr>
        </thead>
        <tbody>
          ${productRows}
          <tr style="font-weight: bold; font-size: 15px; color: #173D2B; border-top: 2px solid #173D2B;">
            <td colspan="3" style="padding: 12px 8px; text-align: right;">Estimated Total Order:</td>
            <td style="padding: 12px 8px; text-align: right;">${totalStr}</td>
          </tr>
        </tbody>
      </table>

      <!-- Instructions Block -->
      <div style="margin-bottom: 40px; border: 1px dashed rgba(23, 61, 43, 0.3); padding: 15px; border-radius: 6px; font-size: 12px; color: #555; line-height: 1.5;">
        <h4 style="margin: 0 0 6px 0; color: #173D2B; font-size: 13px; text-transform: uppercase; font-weight: 700;">Purchase Order Conditions:</h4>
        <p style="margin: 0;">1. All fresh produce must be delivered clean, in sturdy boxes, and matching the ordered quality grade.</p>
        <p style="margin: 4px 0 0 0;">2. Please notify operations immediately if any product quantity is limited or unavailable for delivery.</p>
      </div>

      <!-- Footer Signoff -->
      <div style="border-top: 1px solid rgba(23, 61, 43, 0.1); padding-top: 20px; display: flex; justify-content: space-between; align-items: center; font-size: 11px; color: #666;">
        <p>BALI FRUITS PT • Operational Purchase Department</p>
        <p>operations@balifruits.com</p>
      </div>
    `;

    document.body.appendChild(container);

    const opt = {
      margin:       12,
      filename:     filename,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2.5, useCORS: true },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    if (window.html2pdf) {
      window.html2pdf().from(container).set(opt).save().then(() => {
        document.body.removeChild(container);
      });
    } else {
      console.warn('html2pdf library is missing. Falling back to print...');
      window.print();
      document.body.removeChild(container);
    }
  }
};
