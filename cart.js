const CART_STORAGE_KEY = "baliFruitsCart";

function parseRupiah(value) {
  return Number(String(value).replace(/[^\d]/g, ""));
}

function formatRupiah(value) {
  return `Rp ${Number(value || 0).toLocaleString("id-ID")}`;
}

function readCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function writeCart(items) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  updateCartBadges();
  window.dispatchEvent(new CustomEvent("bali-cart-updated", { detail: items }));
}

function getCartCount(items = readCart()) {
  return items.reduce((total, item) => total + item.quantity, 0);
}

function getCartSubtotal(items = readCart()) {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}

function updateCartBadges() {
  const count = getCartCount();

  document.querySelectorAll("[data-cart-count]").forEach((badge) => {
    badge.textContent = count;
  });
}

function addCartItem(item) {
  const cart = readCart();
  const existingItem = cart.find((cartItem) => cartItem.id === item.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: item.id,
      name: item.name,
      description: item.description || "",
      unit: item.unit || "",
      image: item.image || "",
      price: Number(item.price || 0),
      quantity: 1,
    });
  }

  writeCart(cart);
}

function updateCartItemQuantity(id, quantity) {
  const nextQuantity = Number(quantity);
  const cart = readCart();
  const existingItem = cart.find((item) => item.id === id);

  if (!existingItem) {
    return;
  }

  existingItem.quantity = nextQuantity;
  writeCart(cart.filter((item) => item.quantity > 0));
}

function removeCartItem(id) {
  writeCart(readCart().filter((item) => item.id !== id));
}

function clearCart() {
  writeCart([]);
}

function addCartItemFromButton(button) {
  addCartItem({
    id: button.dataset.cartId,
    name: button.dataset.cartName,
    description: button.dataset.cartDescription,
    unit: button.dataset.cartUnit,
    image: button.dataset.cartImage,
    price: button.dataset.cartPrice || parseRupiah(button.dataset.cartPriceText),
  });
}

window.BaliCart = {
  addCartItem,
  addCartItemFromButton,
  clearCart,
  formatRupiah,
  getCartCount,
  getCartSubtotal,
  parseRupiah,
  readCart,
  removeCartItem,
  updateCartBadges,
  updateCartItemQuantity,
};

document.addEventListener("DOMContentLoaded", updateCartBadges);
