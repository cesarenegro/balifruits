const faqLanguageSelect = document.querySelector("[data-language-select]");
const faqAccordion = document.querySelector("[data-faq-accordion]");
const faqHeader = document.querySelector("[data-header]");
const faqSupportedLanguages = ["en", "ru"];
const faqFallbackLanguage = "en";

const faqTranslations = {
  en: {
    title: "BALI FRUITS | FAQ",
    metaDescription: "Frequently asked questions about BALI FRUITS delivery, sourcing, packaging, substitutions and ordering.",
    navHarvest: "Today's Harvest",
    navBoxes: "Boxes",
    navDelivery: "Delivery",
    navSources: "Sources",
    navFaq: "FAQ",
    zoneCanggu: "Canggu",
    faqEyebrow: "Frequently Asked Questions",
    faqHeroTitle: "Everything customers usually ask, in one place.",
    faqHeroCopy: "Delivery, sourcing, packaging, substitutions and ordering details for BALI FRUITS.",
    faqHeroCardLabel: "Full FAQ",
    faqHeroCardTitle: "30 answers, ready to browse.",
    faqHeroCardCopy: "Clear, direct answers for homes, villas, restaurants and regular weekly orders.",
    mobileHome: "Home",
    mobileShop: "Shop",
    mobileBoxes: "Boxes",
    mobileZone: "Zone",
    mobileAccount: "Cart",
    items: [
      {
        title: "1. What does BALI FRUITS deliver?",
        html: "<p>BALI FRUITS delivers fresh fruits, vegetables, herbs and curated produce selections from local Bali growers to homes, villas and businesses across Bali.</p>",
      },
      {
        title: "2. Do you deliver only fruits?",
        html: "<p>No. Even if the brand name is BALI FRUITS, the service also includes vegetables, leafy greens, herbs, smoothie-friendly produce and seasonal harvest boxes.</p>",
      },
      {
        title: "3. Where do you deliver in Bali?",
        html: "<p>Delivery is organized by service zones across Bali. Main areas may include Canggu, Berawa, Pererenan, Seminyak, Kuta, Sanur, Denpasar, Ubud, Jimbaran, Uluwatu, Nusa Dua and selected surrounding areas.</p>",
      },
      {
        title: "4. How are delivery zones calculated?",
        html: "<p>Delivery zones are based on the customer address, distance, daily route and delivery availability. The final zone is confirmed after we check the address details.</p>",
      },
      {
        title: "5. Is it next-day delivery?",
        html: "<p>Yes. BALI FRUITS offers next-day delivery as our standard service. We may also accept urgent deliveries, depending on product availability, delivery zone and daily route capacity.</p><p>For urgent delivery confirmation, please send us a message on WhatsApp.</p>",
      },
      {
        title: "6. Is delivery available every day?",
        html: "<p>Delivery availability depends on your zone and daily route planning. We confirm availability after receiving your address and order details.</p>",
      },
      {
        title: "7. Can I order for same-day or urgent delivery?",
        html: "<p>Yes, urgent deliveries may be available depending on produce availability, your delivery area and the daily delivery route.</p><p>Please contact us on WhatsApp for immediate confirmation before placing an urgent order.</p>",
      },
      {
        title: "8. What time will my order arrive?",
        html: "<p>Standard deliveries are scheduled between 9:00 a.m. and 12:00 p.m.</p><p>Delivery timing may vary slightly depending on your area, traffic and daily route planning.</p>",
      },
      {
        title: "9. How much is the delivery fee?",
        html: "<p>Delivery fees depend on the service zone:</p><ul><li>Zone 3: free delivery</li><li>Zone 1 and Zone 2: fixed delivery cost of IDR 35,000</li><li>Zone 4 and Zone 5: fixed delivery cost of IDR 50,000</li></ul><p>The final delivery zone is confirmed after checking the customer address.</p>",
      },
      {
        title: "10. Is there a minimum order?",
        html: "<p>A minimum order may apply depending on the delivery zone. The amount is shown before checkout or confirmed before the order is finalized.</p>",
      },
      {
        title: "11. Where do the fruits and vegetables come from?",
        html: "<p>All BALI FRUITS products are locally produced in Bali and sourced from local farmers using organic and bio cultivation methods.</p><p>We do not buy from bulk importers or extensive farming producers. Our focus is local sourcing, direct grower relationships, freshness and transparent origin.</p>",
      },
      {
        title: "12. Are all products organic?",
        html: "<p>Our products come from local growers using organic and bio cultivation methods. When a product has specific certification or grower information available, we indicate it clearly in the product details.</p>",
      },
      {
        title: "13. What does source-tracked mean?",
        html: "<p>Source-tracked means that we aim to show where selected produce comes from, including the growing area, supplier or farmer group when available. This gives customers better visibility than ordinary supermarket supply chains.</p>",
      },
      {
        title: "14. Are products washed before delivery?",
        html: "<p>Produce is checked and packed carefully. Some items may be lightly cleaned, but we recommend washing all fruits, vegetables and herbs before use.</p>",
      },
      {
        title: "15. How is the produce packed?",
        html: "<p>BALI FRUITS uses simple natural packaging such as kraft boxes, paper bags, bio envelopes and branded stickers where possible. Our packaging is designed to feel clean, natural and premium.</p>",
      },
      {
        title: "16. Can I choose individual products?",
        html: "<p>Yes. Customers can browse products, add fruits and vegetables to the cart, and place an order through the app or website.</p>",
      },
      {
        title: "17. Do you offer curated boxes?",
        html: "<p>Yes. BALI FRUITS offers curated selections such as:</p><ul><li>Tropical Fruit Box: mango, papaya, pineapple, bananas and seasonal specials.</li><li>Family Produce Box: fruit, vegetables and herbs for easy weekly cooking.</li><li>Greens &amp; Smoothie Box: leafy greens, avocado, citrus and smoothie-friendly fruit.</li></ul>",
      },
      {
        title: "18. What happens if one product is unavailable?",
        html: "<p>If an item is unavailable due to harvest or daily supply conditions, we will contact you with a suitable replacement or adjust the order.</p>",
      },
      {
        title: "19. Can I request substitutions?",
        html: "<p>Yes. Customers can add notes such as “no bananas”, “extra avocado”, “ripe mango only”, or “replace unavailable items with leafy greens”.</p>",
      },
      {
        title: "20. Can I choose ripe or unripe fruit?",
        html: "<p>Yes, where possible. Customers can request ripe, medium-ripe or less-ripe fruit in the order notes. Availability depends on daily harvest and supplier stock.</p>",
      },
      {
        title: "21. Can I order for a villa, hotel or Airbnb?",
        html: "<p>Yes. BALI FRUITS is suitable for private villas, expat homes, Airbnb stays, retreat villas and small hospitality kitchens.</p>",
      },
      {
        title: "22. Can I schedule recurring delivery?",
        html: "<p>Yes. Recurring weekly delivery can be arranged for selected customers, villas and households.</p>",
      },
      {
        title: "23. Can restaurants or cafés order?",
        html: "<p>Yes. Restaurants, cafés, retreat kitchens and private chefs can contact BALI FRUITS for regular supply requests.</p>",
      },
      {
        title: "24. How do I pay?",
        html: "<p>Available payment methods are shown at checkout or confirmed with your order.</p>",
      },
      {
        title: "25. What if I am not home during delivery?",
        html: "<p>Please provide clear delivery instructions, villa name, WhatsApp number, security or gate contact, or a safe drop-off point.</p>",
      },
      {
        title: "26. What if my produce arrives damaged?",
        html: "<p>Please contact us on the same day with a photo of the item. We will review the issue and offer a replacement, credit or refund when appropriate.</p>",
      },
      {
        title: "27. Can I cancel my order?",
        html: "<p>Orders can be cancelled before sourcing and packing begins. Once the produce has been purchased and prepared, cancellation may no longer be possible.</p>",
      },
      {
        title: "28. Why are some items seasonal?",
        html: "<p>BALI FRUITS depends on local harvest cycles. Seasonal changes affect availability, ripeness, price and quality.</p>",
      },
      {
        title: "29. Why are prices sometimes different from supermarkets?",
        html: "<p>BALI FRUITS focuses on local sourcing, freshness, quality checking, natural packaging and home delivery. Prices reflect produce quality, grower availability, route cost and service handling.</p>",
      },
      {
        title: "30. How do I contact BALI FRUITS?",
        html: "<p>You can contact BALI FRUITS through the website, app, WhatsApp or order confirmation channel.</p>",
      },
    ],
  },
  ru: {
    title: "BALI FRUITS | FAQ",
    metaDescription: "Часто задаваемые вопросы о доставке, источниках, упаковке, заменах и заказе в BALI FRUITS.",
    navHarvest: "Урожай",
    navBoxes: "Наборы",
    navDelivery: "Доставка",
    navSources: "Источники",
    navFaq: "FAQ",
    zoneCanggu: "Чангу",
    faqEyebrow: "Часто задаваемые вопросы",
    faqHeroTitle: "Все, что обычно спрашивают клиенты, в одном месте.",
    faqHeroCopy: "Доставка, источники, упаковка, замены и детали заказа BALI FRUITS.",
    faqHeroCardLabel: "Полный FAQ",
    faqHeroCardTitle: "30 ответов, готовых к просмотру.",
    faqHeroCardCopy: "Понятные и прямые ответы для домов, вилл, ресторанов и регулярных еженедельных заказов.",
    mobileHome: "Главная",
    mobileShop: "Магазин",
    mobileBoxes: "Наборы",
    mobileZone: "Зона",
    mobileAccount: "Корзина",
    items: [
      {
        title: "1. Что доставляет BALI FRUITS?",
        html: "<p>BALI FRUITS доставляет свежие фрукты, овощи, травы и отобранные продукты от местных производителей Бали в дома, виллы и бизнесы по всему острову.</p>",
      },
      {
        title: "2. Вы доставляете только фрукты?",
        html: "<p>Нет. Хотя бренд называется BALI FRUITS, сервис также включает овощи, листовую зелень, травы, продукты для смузи и сезонные коробки с урожаем.</p>",
      },
      {
        title: "3. Куда вы доставляете на Бали?",
        html: "<p>Доставка организована по сервисным зонам Бали. Основные районы могут включать Чангу, Бераву, Переренан, Семиньяк, Куту, Санур, Денпасар, Убуд, Джимбаран, Улувату, Нуса-Дуа и некоторые соседние районы.</p>",
      },
      {
        title: "4. Как рассчитываются зоны доставки?",
        html: "<p>Зоны доставки зависят от адреса клиента, расстояния, ежедневного маршрута и доступности доставки. Итоговая зона подтверждается после проверки адреса.</p>",
      },
      {
        title: "5. Это доставка на следующий день?",
        html: "<p>Да. BALI FRUITS предлагает доставку на следующий день как стандартный сервис. Также возможна срочная доставка в зависимости от доступности продуктов, зоны и пропускной способности маршрута.</p><p>Для срочного подтверждения напишите нам в WhatsApp.</p>",
      },
      {
        title: "6. Доставка доступна каждый день?",
        html: "<p>Доступность доставки зависит от вашей зоны и планирования маршрута. Мы подтверждаем возможность после получения адреса и деталей заказа.</p>",
      },
      {
        title: "7. Можно заказать на сегодня или срочно?",
        html: "<p>Да, срочная доставка может быть доступна в зависимости от наличия продукции, вашей зоны и ежедневного маршрута.</p><p>Пожалуйста, свяжитесь с нами в WhatsApp для немедленного подтверждения до оформления срочного заказа.</p>",
      },
      {
        title: "8. Во сколько придет заказ?",
        html: "<p>Стандартная доставка запланирована между 9:00 и 12:00.</p><p>Время может немного меняться в зависимости от района, трафика и планирования маршрута.</p>",
      },
      {
        title: "9. Сколько стоит доставка?",
        html: "<p>Стоимость доставки зависит от зоны сервиса:</p><ul><li>Зона 3: доставка бесплатно</li><li>Зона 1 и Зона 2: фиксированная стоимость доставки 35,000 IDR</li><li>Зона 4 и Зона 5: фиксированная стоимость доставки 50,000 IDR</li></ul><p>Итоговая зона доставки подтверждается после проверки адреса клиента.</p>",
      },
      {
        title: "10. Есть ли минимальный заказ?",
        html: "<p>Минимальный заказ может применяться в зависимости от зоны доставки. Сумма показывается перед оплатой или подтверждается до завершения заказа.</p>",
      },
      {
        title: "11. Откуда фрукты и овощи?",
        html: "<p>Все товары BALI FRUITS производятся на Бали и поступают от местных фермеров, использующих органические и биометоды выращивания.</p><p>Мы не покупаем у оптовых импортеров или крупных индустриальных хозяйств. Наш фокус - локальные поставки, прямые связи с производителями, свежесть и прозрачное происхождение.</p>",
      },
      {
        title: "12. Все продукты органические?",
        html: "<p>Наши продукты поступают от местных производителей, использующих органические и биометоды выращивания. Если для товара есть конкретная сертификация или информация о фермере, мы указываем это в описании.</p>",
      },
      {
        title: "13. Что значит source-tracked?",
        html: "<p>Source-tracked означает, что мы стараемся показывать, откуда именно приходит выбранная продукция, включая район выращивания, поставщика или группу фермеров, если это известно. Это дает клиентам больше прозрачности, чем обычные супермаркетные цепочки.</p>",
      },
      {
        title: "14. Продукты моют перед доставкой?",
        html: "<p>Продукты проверяются и аккуратно упаковываются. Некоторые позиции могут быть слегка очищены, но мы рекомендуем мыть все фрукты, овощи и травы перед использованием.</p>",
      },
      {
        title: "15. Как упаковывают продукты?",
        html: "<p>BALI FRUITS использует простую натуральную упаковку, такую как крафтовые коробки, бумажные пакеты, био-конверты и брендированные наклейки, где это возможно. Упаковка задумана чистой, натуральной и премиальной.</p>",
      },
      {
        title: "16. Можно выбрать отдельные продукты?",
        html: "<p>Да. Клиенты могут просматривать товары, добавлять фрукты и овощи в корзину и оформлять заказ через приложение или сайт.</p>",
      },
      {
        title: "17. Есть ли готовые наборы?",
        html: "<p>Да. BALI FRUITS предлагает готовые наборы, например:</p><ul><li>Tropical Fruit Box: манго, папайя, ананас, бананы и сезонные фрукты.</li><li>Family Produce Box: фрукты, овощи и травы для простой готовки на неделю.</li><li>Greens &amp; Smoothie Box: листовая зелень, авокадо, цитрусы и фрукты для смузи.</li></ul>",
      },
      {
        title: "18. Что если одного товара нет?",
        html: "<p>Если товара нет из-за урожая или дневных поставок, мы свяжемся с вами и предложим подходящую замену или скорректируем заказ.</p>",
      },
      {
        title: "19. Можно запросить замену?",
        html: "<p>Да. Клиенты могут оставлять заметки, например: «без бананов», «больше авокадо», «только спелое манго» или «заменить недоступные товары листовой зеленью».</p>",
      },
      {
        title: "20. Можно выбрать спелые или неспелые фрукты?",
        html: "<p>Да, если это возможно. В комментариях к заказу можно указать спелые, средне-спелые или менее спелые фрукты. Доступность зависит от дневного урожая и запасов поставщика.</p>",
      },
      {
        title: "21. Можно заказать для виллы, отеля или Airbnb?",
        html: "<p>Да. BALI FRUITS подходит для частных вилл, домов экспатов, проживания Airbnb, ретрит-вилл и небольших кухонь в сфере гостеприимства.</p>",
      },
      {
        title: "22. Можно настроить регулярную доставку?",
        html: "<p>Да. Регулярную еженедельную доставку можно организовать для отдельных клиентов, вилл и домов.</p>",
      },
      {
        title: "23. Могут ли заказывать рестораны или кафе?",
        html: "<p>Да. Рестораны, кафе, ретрит-кухни и частные шефы могут обращаться в BALI FRUITS за регулярными поставками.</p>",
      },
      {
        title: "24. Как я могу оплатить?",
        html: "<p>Доступные способы оплаты показываются на этапе оформления заказа или подтверждаются вместе с заказом.</p>",
      },
      {
        title: "25. Что если меня не будет дома?",
        html: "<p>Пожалуйста, укажите четкие инструкции по доставке, название виллы, номер WhatsApp, контакт охраны/ворот или безопасное место для передачи заказа.</p>",
      },
      {
        title: "26. Что если продукты приедут поврежденными?",
        html: "<p>Пожалуйста, свяжитесь с нами в тот же день и приложите фото товара. Мы рассмотрим ситуацию и предложим замену, кредит или возврат, если это уместно.</p>",
      },
      {
        title: "27. Можно отменить заказ?",
        html: "<p>Заказ можно отменить до начала закупки и упаковки. После покупки и подготовки продуктов отмена может быть уже невозможна.</p>",
      },
      {
        title: "28. Почему некоторые товары сезонные?",
        html: "<p>BALI FRUITS зависит от местных циклов урожая. Сезонные изменения влияют на доступность, спелость, цену и качество.</p>",
      },
      {
        title: "29. Почему цены иногда отличаются от супермаркетов?",
        html: "<p>BALI FRUITS делает упор на локальные поставки, свежесть, проверку качества, натуральную упаковку и доставку домой. Цена отражает качество продукта, доступность у фермеров, стоимость маршрута и сервисную обработку.</p>",
      },
      {
        title: "30. Как связаться с BALI FRUITS?",
        html: "<p>Вы можете связаться с BALI FRUITS через сайт, приложение, WhatsApp или канал подтверждения заказа.</p>",
      },
    ],
  },
};

let currentFaqLanguage = getInitialFaqLanguage();

function normalizeFaqLanguage(language) {
  if (!language || typeof language !== "string") {
    return faqFallbackLanguage;
  }

  const primaryLanguage = language.toLowerCase().split("-")[0];
  return faqSupportedLanguages.includes(primaryLanguage) ? primaryLanguage : faqFallbackLanguage;
}

function getFaqBrowserLanguage() {
  const browserLanguages = navigator.languages && navigator.languages.length
    ? navigator.languages
    : [navigator.language || navigator.userLanguage];

  return normalizeFaqLanguage(browserLanguages[0]);
}

function getInitialFaqLanguage() {
  const savedLanguage = localStorage.getItem("baliFruitsLanguage");
  return savedLanguage ? normalizeFaqLanguage(savedLanguage) : getFaqBrowserLanguage();
}

function updateFaqHeader() {
  if (!faqHeader) {
    return;
  }

  faqHeader.classList.toggle("is-scrolled", window.scrollY > 24);
}

function renderFaqItems(dictionary) {
  if (!faqAccordion) {
    return;
  }

  faqAccordion.innerHTML = dictionary.items
    .map((item, index) => `
      <details class="faq-item"${index === 0 ? " open" : ""}>
        <summary>${item.title}</summary>
        <div class="faq-answer">
          ${item.html}
        </div>
      </details>
    `)
    .join("");
}

function translateFaqContent() {
  const dictionary = faqTranslations[currentFaqLanguage];

  document.documentElement.lang = currentFaqLanguage;
  document.title = dictionary.title;

  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute("content", dictionary.metaDescription);
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  renderFaqItems(dictionary);
}

function setFaqLanguage(language) {
  currentFaqLanguage = normalizeFaqLanguage(language);
  localStorage.setItem("baliFruitsLanguage", currentFaqLanguage);

  if (faqLanguageSelect) {
    faqLanguageSelect.value = currentFaqLanguage;
  }

  translateFaqContent();
}

window.addEventListener("scroll", updateFaqHeader, { passive: true });

if (faqLanguageSelect) {
  faqLanguageSelect.addEventListener("change", (event) => {
    setFaqLanguage(event.target.value);
  });
}

updateFaqHeader();
setFaqLanguage(currentFaqLanguage);
if (window.BaliCart) {
  BaliCart.updateCartBadges();
}
