const boxesLanguageSelect = document.querySelector("[data-language-select]");
const boxesHeroImage = document.querySelector("[data-boxes-hero-image]");
const boxesSupportedLanguages = ["en", "ru", "id", "it", "zh", "uk"];
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
  id: {
    title: "BALI FRUITS | Kotak Segar Pilihan",
    metaDescription: "Kotak segar pilihan untuk rumah, vila, dan rutinitas sehat mingguan di seluruh Bali.",
    backToShop: "Kembali ke toko",
    cartLabel: "Keranjang",
    boxOneTitle: "Kotak Buah Tropis",
    boxOneCopy: "Mangga, pepaya, nanas, pisang, dan buah musiman.",
    boxOneBest: "Terbaik untuk: sarapan, vila, tamu, dan meja buah harian.",
    boxOneWeight: "Perkiraan kotak 5 kg",
    boxTwoTitle: "Kotak Produk Keluarga",
    boxTwoCopy: "Buah, sayuran, dan bumbu untuk memasak mingguan yang mudah.",
    boxTwoBest: "Terbaik untuk: keluarga, rumah ekspatriat, dapur vila.",
    boxTwoWeight: "Perkiraan kotak 7 kg",
    boxThreeTitle: "Kotak Sayuran & Smoothie",
    boxThreeCopy: "Sayuran berdaun hijau, alpukat, jeruk, dan buah yang cocok untuk smoothie.",
    boxThreeBest: "Terbaik untuk: smoothie, rutinitas kesehatan, sarapan bersih.",
    boxThreeWeight: "Perkiraan kotak 5.5 kg",
    addToCart: "Tambah ke keranjang",
    added: "Ditambahkan",
    footerOne: "Dari kebun Bali ke meja Anda.",
    footerTwo: "Pengiriman segar di seluruh Bali.",
  },
  it: {
    title: "BALI FRUITS | Box Freschi Selezionati",
    metaDescription: "Box freschi selezionati per case, ville e routine settimanali salutari in tutta Bali.",
    backToShop: "Torna al negozio",
    cartLabel: "Carrello",
    boxOneTitle: "Box Frutta Tropicale",
    boxOneCopy: "Mango, papaya, ananas, banane e frutta di stagione.",
    boxOneBest: "Ideale per: colazioni, ville, ospiti e la tavola di frutta quotidiana.",
    boxOneWeight: "Circa 5 kg per box",
    boxTwoTitle: "Box Prodotti per la Famiglia",
    boxTwoCopy: "Frutta, verdura ed erbe aromatiche per cucinare facilmente ogni settimana.",
    boxTwoBest: "Ideale per: famiglie, case di espatriati e cucine di ville.",
    boxTwoWeight: "Circa 7 kg per box",
    boxThreeTitle: "Box Verdure & Smoothie",
    boxThreeCopy: "Verdure a foglia verde, avocado, agrumi e frutta ideale per frullati.",
    boxThreeBest: "Ideale per: frullati, routine di benessere e colazioni sane.",
    boxThreeWeight: "Circa 5.5 kg per box",
    addToCart: "Aggiungi al carrello",
    added: "Aggiunto",
    footerOne: "Dai giardini di Bali alla tua tavola.",
    footerTwo: "Consegna fresca in tutta Bali.",
  },
  zh: {
    title: "BALI FRUITS | 精选生鲜套餐盒",
    metaDescription: "为巴厘岛的家庭、别墅和健康的每周生活习惯提供精选的生鲜套餐盒。",
    backToShop: "返回商店",
    cartLabel: "购物车",
    boxOneTitle: "热带水果盒",
    boxOneCopy: "芒果、木瓜、菠萝、香蕉和时令水果。",
    boxOneBest: "最适合：早餐、别墅、客人和日常水果供应。",
    boxOneWeight: "约 5 公斤/盒",
    boxTwoTitle: "家庭农产品盒",
    boxTwoCopy: "水果、蔬菜和香草，让每周的烹饪变得轻松。",
    boxTwoBest: "最适合：家庭、外籍人士家庭、别墅厨房。",
    boxTwoWeight: "约 7 公斤/盒",
    boxThreeTitle: "绿叶和冰沙盒",
    boxThreeCopy: "绿叶蔬菜、牛油果、柑橘和适合做冰沙的水果。",
    boxThreeBest: "最适合：冰沙、健康习惯、纯净的早餐。",
    boxThreeWeight: "约 5.5 公斤/盒",
    addToCart: "加入购物车",
    added: "已添加",
    footerOne: "从巴厘岛的果园到您的餐桌。",
    footerTwo: "巴厘岛全岛生鲜配送。",
  },
  uk: {
    title: "BALI FRUITS | Свіжі набори",
    metaDescription: "Кураторські свіжі набори для будинків, вілл та здорових щотижневих рутин на Балі.",
    backToShop: "Назад у магазин",
    cartLabel: "Кошик",
    boxOneTitle: "Тропічний фруктовий набір",
    boxOneCopy: "Манго, папая, ананас, банани та сезонні фрукти.",
    boxOneBest: "Найкраще для: сніданків, вілл, гостей та щоденного фруктового столу.",
    boxOneWeight: "Приблизно 5 кг набір",
    boxTwoTitle: "Сімейний набір продуктів",
    boxTwoCopy: "Фрукти, овочі та трави для простого готування на тиждень.",
    boxTwoBest: "Найкраще для: сімей, будинків експатів та кухонь на віллах.",
    boxTwoWeight: "Приблизно 7 кг набір",
    boxThreeTitle: "Набір зелені та смузі",
    boxThreeCopy: "Листова зелень, авокадо, цитруси та фрукти для смузі.",
    boxThreeBest: "Найкраще для: смузі, wellness-рутин та чистих сніданків.",
    boxThreeWeight: "Приблизно 5.5 кг набір",
    addToCart: "До кошика",
    added: "Додано",
    footerOne: "Із садів Балі до вашого столу.",
    footerTwo: "Свіжа доставка по Балі.",
  },
  fr: {
    title: "BALI FRUITS | Paniers Frais",
    metaDescription: "Des paniers frais sélectionnés pour les maisons, les villas et les routines hebdomadaires saines à Bali.",
    backToShop: "Retour à la boutique",
    cartLabel: "Panier",
    boxOneTitle: "Panier de Fruits Tropicaux",
    boxOneCopy: "Mangue, papaye, ananas, bananes et spécialités de saison.",
    boxOneBest: "Idéal pour : les petits-déjeuners, les villas, les invités et la table de fruits quotidienne.",
    boxOneWeight: "Panier d'environ 5 kg",
    boxTwoTitle: "Panier de Produits Familiaux",
    boxTwoCopy: "Fruits, légumes et herbes pour cuisiner facilement la semaine.",
    boxTwoBest: "Idéal pour : les familles, les foyers d'expatriés et les cuisines de villas.",
    boxTwoWeight: "Panier d'environ 7 kg",
    boxThreeTitle: "Panier Légumes & Smoothies",
    boxThreeCopy: "Légumes-feuilles, avocat, agrumes et fruits parfaits pour les smoothies.",
    boxThreeBest: "Idéal pour : les smoothies, les routines bien-être et les petits-déjeuners sains.",
    boxThreeWeight: "Panier d'environ 5.5 kg",
    addToCart: "Ajouter au panier",
    added: "Ajouté",
    footerOne: "Des jardins de Bali à votre table.",
    footerTwo: "Livraison de produits frais à Bali.",
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
  id: {
    "box-tropical": {
      name: boxesTranslations.id.boxOneTitle,
      description: boxesTranslations.id.boxOneCopy,
      unit: boxesTranslations.id.boxOneWeight,
    },
    "box-family": {
      name: boxesTranslations.id.boxTwoTitle,
      description: boxesTranslations.id.boxTwoCopy,
      unit: boxesTranslations.id.boxTwoWeight,
    },
    "box-greens": {
      name: boxesTranslations.id.boxThreeTitle,
      description: boxesTranslations.id.boxThreeCopy,
      unit: boxesTranslations.id.boxThreeWeight,
    },
  },
  it: {
    "box-tropical": {
      name: boxesTranslations.it.boxOneTitle,
      description: boxesTranslations.it.boxOneCopy,
      unit: boxesTranslations.it.boxOneWeight,
    },
    "box-family": {
      name: boxesTranslations.it.boxTwoTitle,
      description: boxesTranslations.it.boxTwoCopy,
      unit: boxesTranslations.it.boxTwoWeight,
    },
    "box-greens": {
      name: boxesTranslations.it.boxThreeTitle,
      description: boxesTranslations.it.boxThreeCopy,
      unit: boxesTranslations.it.boxThreeWeight,
    },
  },
  zh: {
    "box-tropical": {
      name: boxesTranslations.zh.boxOneTitle,
      description: boxesTranslations.zh.boxOneCopy,
      unit: boxesTranslations.zh.boxOneWeight,
    },
    "box-family": {
      name: boxesTranslations.zh.boxTwoTitle,
      description: boxesTranslations.zh.boxTwoCopy,
      unit: boxesTranslations.zh.boxTwoWeight,
    },
    "box-greens": {
      name: boxesTranslations.zh.boxThreeTitle,
      description: boxesTranslations.zh.boxThreeCopy,
      unit: boxesTranslations.zh.boxThreeWeight,
    },
  },
  uk: {
    "box-tropical": {
      name: boxesTranslations.uk.boxOneTitle,
      description: boxesTranslations.uk.boxOneCopy,
      unit: boxesTranslations.uk.boxOneWeight,
    },
    "box-family": {
      name: boxesTranslations.uk.boxTwoTitle,
      description: boxesTranslations.uk.boxTwoCopy,
      unit: boxesTranslations.uk.boxTwoWeight,
    },
    "box-greens": {
      name: boxesTranslations.uk.boxThreeTitle,
      description: boxesTranslations.uk.boxThreeCopy,
      unit: boxesTranslations.uk.boxThreeWeight,
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
