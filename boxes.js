const boxesLanguageSelect = document.querySelector("[data-language-select]");
const boxesHeroImage = document.querySelector("[data-boxes-hero-image]");
const boxesSupportedLanguages = ["en", "ru"];
const boxesFallbackLanguage = "en";
let currentBoxesLanguage = "en";

const boxesHeroImages = {
  en: {
    src: "assets/boxes/bf-boxes-hero.png",
    alt: "BALI FRUITS curated fresh boxes with tropical fruit, family produce and greens",
  },
  ru: {
    src: "assets/boxes/bf-boxes-hero-ru.png",
    alt: "BALI FRUITS свежие боксы с тропическими фруктами, семейным набором и зеленью",
  },
};

const boxesTranslations = {
  en: {
    title: "BALI FRUITS | Curated Fresh Boxes",
    metaDescription: "Curated fresh boxes for homes, villas and healthy weekly routines across Bali.",
    backToShop: "Back to shop",
    cartLabel: "Cart",
    boxOneTitle: "Tropical Fruit Box",
    boxOneCopy: "Mango, papaya, pineapple, bananas and seasonal specials.",
    boxOneBest: "Best for: breakfast, villas, guests, daily fruit table.",
    boxOneWeight: "Approx. 5 kg box",
    boxTwoTitle: "Family Produce Box",
    boxTwoCopy: "Fruit, vegetables and herbs for easy weekly cooking.",
    boxTwoBest: "Best for: families, expat homes, villa kitchens.",
    boxTwoWeight: "Approx. 7 kg box",
    boxThreeTitle: "Greens & Smoothie Box",
    boxThreeCopy: "Leafy greens, avocado, citrus and smoothie-friendly fruit.",
    boxThreeBest: "Best for: smoothies, wellness routines, clean breakfast.",
    boxThreeWeight: "Approx. 5.5 kg box",
    addToCart: "Add to cart",
    added: "Added",
    footerOne: "From Bali gardens to your table.",
    footerTwo: "Fresh delivery across Bali.",
  },
  ru: {
    title: "BALI FRUITS | Свежие боксы",
    metaDescription: "Кураторские свежие боксы для домов, вилл и здоровых недельных рутин на Бали.",
    backToShop: "Назад в магазин",
    cartLabel: "Корзина",
    boxOneTitle: "Тропический фруктовый бокс",
    boxOneCopy: "Манго, папайя, ананас, бананы и сезонные фрукты.",
    boxOneBest: "Лучше всего для: завтраков, вилл, гостей и ежедневного фруктового стола.",
    boxOneWeight: "Примерно 5 кг бокс",
    boxTwoTitle: "Семейный продуктовый бокс",
    boxTwoCopy: "Фрукты, овощи и травы для простой готовки на неделю.",
    boxTwoBest: "Лучше всего для: семей, домов экспатов и кухонь на виллах.",
    boxTwoWeight: "Примерно 7 кг бокс",
    boxThreeTitle: "Бокс зелени и смузи",
    boxThreeCopy: "Листовая зелень, авокадо, цитрусы и фрукты для смузи.",
    boxThreeBest: "Лучше всего для: смузи, wellness-рутин и чистых завтраков.",
    boxThreeWeight: "Примерно 5.5 кг бокс",
    addToCart: "В корзину",
    added: "Добавлено",
    footerOne: "Из садов Бали к вашему столу.",
    footerTwo: "Свежая доставка по Бали.",
  },
};

const boxCartContent = {
  en: {
    "box-tropical": {
      name: boxesTranslations.en.boxOneTitle,
      description: boxesTranslations.en.boxOneCopy,
      unit: boxesTranslations.en.boxOneWeight,
    },
    "box-family": {
      name: boxesTranslations.en.boxTwoTitle,
      description: boxesTranslations.en.boxTwoCopy,
      unit: boxesTranslations.en.boxTwoWeight,
    },
    "box-greens": {
      name: boxesTranslations.en.boxThreeTitle,
      description: boxesTranslations.en.boxThreeCopy,
      unit: boxesTranslations.en.boxThreeWeight,
    },
  },
  ru: {
    "box-tropical": {
      name: boxesTranslations.ru.boxOneTitle,
      description: boxesTranslations.ru.boxOneCopy,
      unit: boxesTranslations.ru.boxOneWeight,
    },
    "box-family": {
      name: boxesTranslations.ru.boxTwoTitle,
      description: boxesTranslations.ru.boxTwoCopy,
      unit: boxesTranslations.ru.boxTwoWeight,
    },
    "box-greens": {
      name: boxesTranslations.ru.boxThreeTitle,
      description: boxesTranslations.ru.boxThreeCopy,
      unit: boxesTranslations.ru.boxThreeWeight,
    },
  },
};

function normalizeBoxesLanguage(language) {
  if (!language || typeof language !== "string") {
    return boxesFallbackLanguage;
  }

  const primaryLanguage = language.toLowerCase().split("-")[0];
  return boxesSupportedLanguages.includes(primaryLanguage) ? primaryLanguage : boxesFallbackLanguage;
}

function getBoxesBrowserLanguage() {
  const browserLanguages = navigator.languages && navigator.languages.length
    ? navigator.languages
    : [navigator.language || navigator.userLanguage];

  return normalizeBoxesLanguage(browserLanguages[0]);
}

function getInitialBoxesLanguage() {
  const savedLanguage = localStorage.getItem("baliFruitsLanguage");
  return savedLanguage ? normalizeBoxesLanguage(savedLanguage) : getBoxesBrowserLanguage();
}

function updateBoxCartData(language) {
  document.querySelectorAll("[data-add-box]").forEach((button) => {
    const content = boxCartContent[language][button.dataset.cartId];
    button.dataset.cartName = content.name;
    button.dataset.cartDescription = content.description;
    button.dataset.cartUnit = content.unit;
  });
}

function setBoxesLanguage(language) {
  currentBoxesLanguage = normalizeBoxesLanguage(language);
  const dictionary = boxesTranslations[currentBoxesLanguage];
  const heroImage = boxesHeroImages[currentBoxesLanguage] || boxesHeroImages[boxesFallbackLanguage];

  localStorage.setItem("baliFruitsLanguage", currentBoxesLanguage);
  document.documentElement.lang = currentBoxesLanguage;
  document.title = dictionary.title;
  document.querySelector('meta[name="description"]').setAttribute("content", dictionary.metaDescription);
  boxesLanguageSelect.value = currentBoxesLanguage;
  boxesHeroImage.src = heroImage.src;
  boxesHeroImage.alt = heroImage.alt;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = dictionary[key];
  });

  updateBoxCartData(currentBoxesLanguage);
}

boxesLanguageSelect.addEventListener("change", (event) => {
  setBoxesLanguage(event.target.value);
});

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-add-box]");

  if (!button) {
    return;
  }

  BaliCart.addCartItemFromButton(button);
  button.textContent = boxesTranslations[currentBoxesLanguage].added;

  window.setTimeout(() => {
    button.textContent = boxesTranslations[currentBoxesLanguage].addToCart;
  }, 900);
});

setBoxesLanguage(getInitialBoxesLanguage());
