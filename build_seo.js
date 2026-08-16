const fs = require('fs');

const SITE_URL = 'https://balifruits.com';
const products = JSON.parse(fs.readFileSync('new_products.json', 'utf8'));
const shopHtml = fs.readFileSync('shop.html', 'utf8');

const headEndIdx = shopHtml.indexOf('</head>');
let baseHead = shopHtml.substring(0, headEndIdx);
const baseTail = shopHtml.substring(headEndIdx);

const mainStartRegex = /<main[^>]*>/;
const mainEndRegex = /<\/main>/;

const startMatch = baseTail.match(mainStartRegex);
const endMatch = baseTail.match(mainEndRegex);

if (!startMatch || !endMatch) {
  console.error("Could not find <main> tags in shop.html");
  process.exit(1);
}

const beforeMain = baseTail.substring(0, startMatch.index + startMatch[0].length);
const afterMain = baseTail.substring(endMatch.index);

function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

let sitemapUrls = [
  `${SITE_URL}/index.html`,
  `${SITE_URL}/shop.html`,
  `${SITE_URL}/boxes.html`,
  `${SITE_URL}/cart.html`,
  `${SITE_URL}/delivery.html`,
  `${SITE_URL}/faq.html`,
  `${SITE_URL}/fruits.html`,
  `${SITE_URL}/sources.html`,
  `${SITE_URL}/vegetables.html`
];

products.forEach(p => {
  if (!p.en || !p.en.name) return;
  
  const slug = slugify(p.en.name);
  const fileName = `product-${slug}.html`;
  const category = p.category || 'fruits';
  const imageUrl = `${SITE_URL}/assets/${category}/${p.visual}.jpg`;
  
  let head = baseHead.replace(/<title>.*<\/title>/, `<title>Buy ${p.en.name} - BALI FRUITS</title>`);
  head = head.replace(/<meta\s+name="description"\s+content="[^"]*"/, `<meta name="description" content="${p.en.description} - Delivered fresh across Bali"`);
  
  const ogTags = `
    <meta property="og:title" content="Buy ${p.en.name} - BALI FRUITS" />
    <meta property="og:description" content="${p.en.description} - Delivered fresh across Bali." />
    <meta property="og:image" content="${imageUrl}" />
    <meta property="og:type" content="product" />
    <meta property="og:url" content="${SITE_URL}/${fileName}" />
    <meta name="twitter:card" content="summary_large_image" />
  `;
  
  const jsonLd = `
    <script type="application/ld+json">
    {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "${p.en.name}",
      "image": [
        "${imageUrl}"
      ],
      "description": "${p.en.description}",
      "sku": "${p.visual}",
      "offers": {
        "@type": "Offer",
        "url": "${SITE_URL}/${fileName}",
        "priceCurrency": "IDR",
        "price": "${p.price.replace(/[^\d]/g, '')}",
        "itemCondition": "https://schema.org/NewCondition",
        "availability": "https://schema.org/InStock"
      }
    }
    </script>
  `;
  
  head += ogTags + jsonLd;
  
  const mainContent = `
    <div class="product-detail-page">
      <div class="product-detail-container">
        <div class="product-detail-image">
          <img src="assets/${category}/${p.visual}.jpg" alt="${p.en.name}" onerror="this.src='assets/vegetables/vegetables.png'" />
        </div>
        <div class="product-detail-info">
          <h1>${p.en.name}</h1>
          <p class="source-label">${p.en.tag}</p>
          <p class="product-detail-desc">${p.en.description}</p>
          <p class="product-detail-price">${p.price} <span style="font-size:14px; opacity:0.7; font-weight:normal;">/ ${p.en.unit}</span></p>
          <p style="margin-bottom:20px; font-size:14px; opacity:0.8;">${p.en.detail || ''}</p>
          <button
            class="add-button large-add"
            type="button"
            data-add-item
            data-cart-id="fruit-${p.visual}"
            data-cart-name="${p.en.name}"
            data-cart-description="${p.en.description}"
            data-cart-unit="${p.en.unit}"
            data-cart-price="${p.price.replace(/[^\d]/g, '')}"
            data-cart-image="assets/${category}/${p.visual}.jpg"
          >
            Add to Cart
          </button>
          <br>
          <a href="shop.html" class="back-link">← Back to Shop</a>
        </div>
      </div>
    </div>
  `;
  
  const finalHtml = head + beforeMain + mainContent + afterMain;
  fs.writeFileSync(fileName, finalHtml, 'utf8');
  
  sitemapUrls.push(`${SITE_URL}/${fileName}`);
});

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.map(url => `  <url>\n    <loc>${url}</loc>\n    <changefreq>daily</changefreq>\n  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync('sitemap.xml', sitemapContent, 'utf8');

const robotsTxt = `User-agent: *
Allow: /
Sitemap: ${SITE_URL}/sitemap.xml`;

fs.writeFileSync('robots.txt', robotsTxt, 'utf8');

console.log('Successfully generated ' + products.length + ' product pages.');
console.log('Successfully generated sitemap.xml and robots.txt.');
