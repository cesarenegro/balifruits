const cartItemsNode = document.querySelector("[data-cart-items]");
const emptyCartNode = document.querySelector("[data-empty-cart]");
const summaryNode = document.querySelector("[data-cart-summary]");
const subtotalNode = document.querySelector("[data-cart-subtotal]");
const totalNode = document.querySelector("[data-cart-total]");
const whatsappButton = document.querySelector("[data-whatsapp-order]");
const clearButton = document.querySelector("[data-clear-cart]");

function createWhatsAppMessage(items) {
  const lines = [
    "Hello BALI FRUITS, I would like to order:",
    "",
    ...items.map(
      (item) =>
        `${item.quantity} x ${item.name} (${item.unit}) - ${BaliCart.formatRupiah(
          item.price * item.quantity,
        )}`,
    ),
    "",
    `Subtotal: ${BaliCart.formatRupiah(BaliCart.getCartSubtotal(items))}`,
    "Delivery area:",
    "Preferred delivery time:",
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

  subtotalNode.textContent = BaliCart.formatRupiah(subtotal);
  totalNode.textContent = BaliCart.formatRupiah(subtotal);

  if (isEmpty) {
    cartItemsNode.innerHTML = "";
    whatsappButton.href = "#";
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
          <strong>${BaliCart.formatRupiah(item.price)}</strong>
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

  whatsappButton.href = `https://wa.me/?text=${encodeURIComponent(createWhatsAppMessage(items))}`;
}

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
