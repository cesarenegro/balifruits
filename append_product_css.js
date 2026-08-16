const fs = require('fs');

const css = `
/* ==========================================================================
   PRODUCT DETAIL PAGE (SEO)
   ========================================================================== */
.product-detail-page {
  max-width: 1000px;
  margin: 120px auto 60px;
  padding: 0 clamp(18px, 4vw, 46px);
}

.product-detail-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  background: var(--cream-strong);
  border-radius: 24px;
  padding: 32px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
}

@media (min-width: 768px) {
  .product-detail-container {
    grid-template-columns: 1fr 1fr;
    align-items: center;
    padding: 48px;
  }
}

.product-detail-image {
  border-radius: 16px;
  overflow: hidden;
  background: var(--cream);
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-detail-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-detail-info h1 {
  font-size: clamp(28px, 4vw, 42px);
  margin: 0 0 12px;
  color: var(--green);
}

.product-detail-price {
  font-size: 24px;
  font-weight: 700;
  color: var(--green);
  margin-bottom: 24px;
}

.product-detail-desc {
  font-size: 16px;
  line-height: 1.6;
  color: var(--green-ink);
  margin-bottom: 32px;
  opacity: 0.9;
}

.add-button.large-add {
  padding: 14px 32px;
  font-size: 16px;
  width: auto;
  display: inline-flex;
  min-width: 200px;
}

.back-link {
  display: inline-block;
  margin-top: 32px;
  color: var(--olive);
  text-decoration: none;
  font-weight: 600;
  transition: color 150ms ease;
}

.back-link:hover {
  color: var(--green);
}
`;

fs.appendFileSync('styles.css', css);
console.log('Appended to styles.css');
