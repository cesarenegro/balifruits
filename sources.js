const sourcesLanguageSelect = document.querySelector("[data-language-select]");
const sourcesHeader = document.querySelector("[data-header]");
const sourcesSupportedLanguages = ["en", "ru"];
const sourcesFallbackLanguage = "en";
const sourcesCards = document.querySelector("[data-source-cards]");

const sourcesTranslations = {
  en: {
    title: "BALI FRUITS | Sources",
    metaDescription:
      "BALI FRUITS sourcing page with verified growing areas for fruit, vegetables, herbs and Balinese ingredients across Bali.",
    navHarvest: "Today's Harvest",
    navBoxes: "Boxes",
    navDelivery: "Delivery",
    navSources: "Sources",
    navFaq: "FAQ",
    zoneCanggu: "Canggu",
    heroEyebrow: "Source map",
    heroTitle: "Four verified growing areas behind the fresh produce on the shelf.",
    heroCopy:
      "We keep the sourcing story clear: what comes from the highlands, what comes from organic farms, and which Balinese ingredients are selected by region.",
    heroPillOne: "Verified organic",
    heroPillTwo: "Local Balinese supply",
    heroAsideLabel: "Back to shopping",
    heroAsideTitle: "See the full fresh catalog",
    heroAsideCopy: "Use this page as the sourcing reference for the e-shop product cards.",
    galleryEyebrow: "Source gallery",
    cardOneKicker: "Kintamani and Bedugul",
    cardOneTitle: "Highland fruit and vegetables",
    cardOneCopy:
      "Verified organic supply for fruits and vegetables from Bali's cool-climate highland agriculture.",
    cardOneBadge: "Verified Organic",
    cardTwoKicker: "Gianyar",
    cardTwoTitle: "Organic herbs, spices and Balinese ingredients",
    cardTwoCopy:
      "A focused sourcing area for organic herbs and spices, plus ingredients that carry the Balinese kitchen identity.",
    cardTwoBadge: "Organic herbs & spices",
    cardThreeKicker: "Plaga, Badung",
    cardThreeTitle: "Organic vegetables",
    cardThreeCopy:
      "A clean highland pocket for organic vegetables, chosen for steady quality and everyday kitchen use.",
    cardThreeBadge: "Organic vegetables",
    cardFourKicker: "Tabanan (Betungsel)",
    cardFourTitle: "Organic fruit cultivation",
    cardFourCopy:
      "An important fruit-growing area supplying organic fruit cultivation with seasonal Bali harvests.",
    cardFourBadge: "Organic fruit supply",
    mobileHome: "Home",
    mobileShop: "Shop",
    mobileBoxes: "Boxes",
    mobileZone: "Zone",
    mobileAccount: "Cart",
  },
  ru: {
    title: "BALI FRUITS | Источники",
    metaDescription:
      "Страница источников BALI FRUITS с проверенными районами выращивания фруктов, овощей, трав и балийских ингредиентов по всему Бали.",
    navHarvest: "Сегодняшний урожай",
    navBoxes: "Наборы",
    navDelivery: "Доставка",
    navSources: "Источники",
    navFaq: "FAQ",
    zoneCanggu: "Чангу",
    heroEyebrow: "Карта источников",
    heroTitle: "Четыре проверенных района выращивания, стоящих за свежими продуктами на полке.",
    heroCopy:
      "Мы делаем историю происхождения понятной: что приходит из горных районов, что с органических ферм и какие балийские ингредиенты выбираются по регионам.",
    heroPillOne: "Проверенная органика",
    heroPillTwo: "Локальные поставки с Бали",
    heroAsideLabel: "Назад к покупкам",
    heroAsideTitle: "Посмотреть полный каталог",
    heroAsideCopy: "Используйте эту страницу как справочник по источникам для карточек e-shop.",
    galleryEyebrow: "Галерея источников",
    cardOneKicker: "Кинтамани и Бедугул",
    cardOneTitle: "Горные фрукты и овощи",
    cardOneCopy:
      "Проверенные органические поставки фруктов и овощей из прохладных горных районов Бали.",
    cardOneBadge: "Проверенная органика",
    cardTwoKicker: "Гианьяр",
    cardTwoTitle: "Органические травы, специи и балийские ингредиенты",
    cardTwoCopy:
      "Сфокусированный район поставок органических трав и специй, а также ингредиентов, отражающих балийскую кухню.",
    cardTwoBadge: "Органические травы и специи",
    cardThreeKicker: "Плага, Бадунг",
    cardThreeTitle: "Органические овощи",
    cardThreeCopy:
      "Чистый горный район для органических овощей, выбранных за стабильное качество и ежедневное использование.",
    cardThreeBadge: "Органические овощи",
    cardFourKicker: "Табанан (Бетунгсел)",
    cardFourTitle: "Выращивание органических фруктов",
    cardFourCopy:
      "Важный район выращивания фруктов, поставляющий органические фрукты с сезонными урожаями Бали.",
    cardFourBadge: "Органические фрукты",
    mobileHome: "Главная",
    mobileShop: "Магазин",
    mobileBoxes: "Наборы",
    mobileZone: "Зона",
    mobileAccount: "Корзина",
  },
};

const sourcesCardsData = [
  {
    reverse: false,
    kickerKey: "cardOneKicker",
    titleKey: "cardOneTitle",
    copyKey: "cardOneCopy",
    badgeKey: "cardOneBadge",
    imageLabelKey: "cardOneKicker",
  },
  {
    reverse: true,
    kickerKey: "cardTwoKicker",
    titleKey: "cardTwoTitle",
    copyKey: "cardTwoCopy",
    badgeKey: "cardTwoBadge",
    imageLabelKey: "cardTwoKicker",
  },
  {
    reverse: false,
    kickerKey: "cardThreeKicker",
    titleKey: "cardThreeTitle",
    copyKey: "cardThreeCopy",
    badgeKey: "cardThreeBadge",
    imageLabelKey: "cardThreeKicker",
  },
  {
    reverse: true,
    kickerKey: "cardFourKicker",
    titleKey: "cardFourTitle",
    copyKey: "cardFourCopy",
    badgeKey: "cardFourBadge",
    imageLabelKey: "cardFourKicker",
  },
];

function normalizeSourcesLanguage(language) {
  if (!language || typeof language !== "string") {
    return sourcesFallbackLanguage;
  }

  const primaryLanguage = language.toLowerCase().split("-")[0];
  return sourcesSupportedLanguages.includes(primaryLanguage) ? primaryLanguage : sourcesFallbackLanguage;
}

function getSourcesBrowserLanguage() {
  const browserLanguages = navigator.languages && navigator.languages.length
    ? navigator.languages
    : [navigator.language || navigator.userLanguage];

  return normalizeSourcesLanguage(browserLanguages[0]);
}

function getInitialSourcesLanguage() {
  const savedLanguage = localStorage.getItem("baliFruitsLanguage");
  return savedLanguage ? normalizeSourcesLanguage(savedLanguage) : getSourcesBrowserLanguage();
}

function updateSourcesHeader() {
  if (!sourcesHeader) {
    return;
  }

  sourcesHeader.classList.toggle("is-scrolled", window.scrollY > 24);
}

function renderSourcesCards(dictionary) {
  if (!sourcesCards) {
    return;
  }

  sourcesCards.innerHTML = sourcesCardsData
    .map((card) => {
      const imageLabel = dictionary[card.imageLabelKey];

      return `
        <article class="source-card${card.reverse ? " source-card--reverse" : ""}">
          <div class="source-card-copy">
            <span class="source-kicker">${dictionary[card.kickerKey]}</span>
            <h2>${dictionary[card.titleKey]}</h2>
            <p>${dictionary[card.copyKey]}</p>
            <p class="source-badge">${dictionary[card.badgeKey]}</p>
          </div>
          <figure class="source-card-media" aria-label="${imageLabel}">
            <div class="source-image-placeholder">
              <span>${dictionary.imagePlaceholder}</span>
              <small>${dictionary.imageHint}</small>
            </div>
          </figure>
        </article>
      `;
    })
    .join("");
}

function translateStaticContent() {
  const dictionary = sourcesTranslations[currentSourcesLanguage];

  document.documentElement.lang = currentSourcesLanguage;
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

  renderSourcesCards(dictionary);
}

function setSourcesLanguage(language) {
  currentSourcesLanguage = normalizeSourcesLanguage(language);
  localStorage.setItem("baliFruitsLanguage", currentSourcesLanguage);

  if (sourcesLanguageSelect) {
    sourcesLanguageSelect.value = currentSourcesLanguage;
  }

  translateStaticContent();
}

let currentSourcesLanguage = getInitialSourcesLanguage();

window.addEventListener("scroll", updateSourcesHeader, { passive: true });

if (sourcesLanguageSelect) {
  sourcesLanguageSelect.addEventListener("change", (event) => {
    setSourcesLanguage(event.target.value);
  });
}

updateSourcesHeader();
setSourcesLanguage(currentSourcesLanguage);
if (window.BaliCart) {
  BaliCart.updateCartBadges();
}
