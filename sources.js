const sourcesLanguageSelect = document.querySelector("[data-language-select]");
const sourcesHeader = document.querySelector("[data-header]");
const sourcesSupportedLanguages = ["en", "ru", "id", "it", "zh", "uk"];
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
  id: {
    title: "BALI FRUITS | Sumber",
    metaDescription:
      "Halaman sumber BALI FRUITS dengan area tanam terverifikasi untuk buah, sayuran, bumbu, dan bahan-bahan khas Bali di seluruh Bali.",
    navHarvest: "Panen Hari Ini",
    navBoxes: "Kotak",
    navDelivery: "Pengiriman",
    navSources: "Sumber",
    navFaq: "FAQ",
    zoneCanggu: "Canggu",
    heroEyebrow: "Peta sumber",
    heroTitle: "Empat area tanam terverifikasi di balik produk segar di rak kami.",
    heroCopy:
      "Kami menjaga cerita sumber tetap jelas: apa yang berasal dari dataran tinggi, apa yang dari pertanian organik, dan bahan Bali mana yang dipilih berdasarkan wilayah.",
    heroPillOne: "Organik terverifikasi",
    heroPillTwo: "Pasokan lokal Bali",
    heroAsideLabel: "Kembali berbelanja",
    heroAsideTitle: "Lihat katalog segar lengkap",
    heroAsideCopy: "Gunakan halaman ini sebagai referensi sumber untuk kartu produk e-shop.",
    galleryEyebrow: "Galeri sumber",
    cardOneKicker: "Kintamani dan Bedugul",
    cardOneTitle: "Buah dan sayuran dataran tinggi",
    cardOneCopy:
      "Pasokan organik terverifikasi untuk buah dan sayuran dari pertanian dataran tinggi beriklim sejuk di Bali.",
    cardOneBadge: "Organik terverifikasi",
    cardTwoKicker: "Gianyar",
    cardTwoTitle: "Bumbu organik, rempah, dan bahan khas Bali",
    cardTwoCopy:
      "Area sumber terfokus untuk bumbu dan rempah organik, serta bahan yang membawa identitas dapur Bali.",
    cardTwoBadge: "Bumbu & rempah organik",
    cardThreeKicker: "Plaga, Badung",
    cardThreeTitle: "Sayuran organik",
    cardThreeCopy:
      "Kantung dataran tinggi bersih untuk sayuran organik, dipilih karena kualitas yang stabil dan penggunaan dapur harian.",
    cardThreeBadge: "Sayuran organik",
    cardFourKicker: "Tabanan (Betungsel)",
    cardFourTitle: "Budidaya buah organik",
    cardFourCopy:
      "Area penanaman buah penting yang memasok budidaya buah organik dengan panen musiman Bali.",
    cardFourBadge: "Pasokan buah organik",
    mobileHome: "Beranda",
    mobileShop: "Belanja",
    mobileBoxes: "Kotak",
    mobileZone: "Zona",
    mobileAccount: "Keranjang",
  },
  it: {
    title: "BALI FRUITS | Fonti",
    metaDescription:
      "Pagina delle fonti di BALI FRUITS con aree di coltivazione verificate per frutta, verdura, erbe e ingredienti balinesi in tutta Bali.",
    navHarvest: "Il raccolto di oggi",
    navBoxes: "Box",
    navDelivery: "Consegna",
    navSources: "Fonti",
    navFaq: "FAQ",
    zoneCanggu: "Canggu",
    heroEyebrow: "Mappa delle fonti",
    heroTitle: "Quattro aree di coltivazione verificate dietro i prodotti freschi sugli scaffali.",
    heroCopy:
      "Manteniamo chiara la storia della provenienza: cosa proviene dagli altopiani, cosa da fattorie organiche e quali ingredienti balinesi sono selezionati per regione.",
    heroPillOne: "Organico verificato",
    heroPillTwo: "Fornitura locale balinese",
    heroAsideLabel: "Torna allo shopping",
    heroAsideTitle: "Guarda l'intero catalogo fresco",
    heroAsideCopy: "Usa questa pagina come riferimento per l'origine nelle schede prodotto dell'e-shop.",
    galleryEyebrow: "Galleria delle fonti",
    cardOneKicker: "Kintamani e Bedugul",
    cardOneTitle: "Frutta e verdura degli altopiani",
    cardOneCopy:
      "Fornitura organica verificata per frutta e verdura proveniente dall'agricoltura degli altopiani a clima fresco di Bali.",
    cardOneBadge: "Organico verificato",
    cardTwoKicker: "Gianyar",
    cardTwoTitle: "Erbe organiche, spezie e ingredienti balinesi",
    cardTwoCopy:
      "Un'area di approvvigionamento mirata per erbe e spezie organiche, oltre agli ingredienti che portano l'identità della cucina balinese.",
    cardTwoBadge: "Erbe e spezie organiche",
    cardThreeKicker: "Plaga, Badung",
    cardThreeTitle: "Verdure organiche",
    cardThreeCopy:
      "Una zona pulita degli altopiani per verdure organiche, scelte per la qualità costante e l'uso quotidiano in cucina.",
    cardThreeBadge: "Verdure organiche",
    cardFourKicker: "Tabanan (Betungsel)",
    cardFourTitle: "Coltivazione di frutta organica",
    cardFourCopy:
      "Un'importante area di coltivazione della frutta che fornisce frutta organica con i raccolti stagionali di Bali.",
    cardFourBadge: "Fornitura di frutta organica",
    mobileHome: "Home",
    mobileShop: "Negozio",
    mobileBoxes: "Box",
    mobileZone: "Zona",
    mobileAccount: "Carrello",
  },
  zh: {
    title: "BALI FRUITS | 来源",
    metaDescription:
      "BALI FRUITS 来源页面，展示巴厘岛全岛经过验证的水果、蔬菜、香草和巴厘岛特色食材种植区。",
    navHarvest: "今日采摘",
    navBoxes: "套餐盒",
    navDelivery: "配送",
    navSources: "来源",
    navFaq: "常见问题",
    zoneCanggu: "长谷",
    heroEyebrow: "来源地图",
    heroTitle: "货架上新鲜农产品背后的四个经过验证的种植区。",
    heroCopy:
      "我们保持来源信息的清晰：哪些来自高地，哪些来自有机农场，以及按地区选择了哪些巴厘岛食材。",
    heroPillOne: "验证有机",
    heroPillTwo: "巴厘岛当地供应",
    heroAsideLabel: "返回购物",
    heroAsideTitle: "查看完整生鲜目录",
    heroAsideCopy: "将此页面用作网店产品卡片的来源参考。",
    galleryEyebrow: "来源图库",
    cardOneKicker: "金塔马尼和百度库",
    cardOneTitle: "高地水果和蔬菜",
    cardOneCopy:
      "来自巴厘岛凉爽气候高地农业的水果和蔬菜的验证有机供应。",
    cardOneBadge: "验证有机",
    cardTwoKicker: "吉安雅",
    cardTwoTitle: "有机香草、香料和巴厘岛食材",
    cardTwoCopy:
      "有机香草和香料的重点采购区，以及承载巴厘岛厨房特色的食材。",
    cardTwoBadge: "有机香草和香料",
    cardThreeKicker: "巴东 普拉加",
    cardThreeTitle: "有机蔬菜",
    cardThreeCopy:
      "有机蔬菜的清洁高地，因质量稳定和日常厨房使用而被选中。",
    cardThreeBadge: "有机蔬菜",
    cardFourKicker: "塔巴南 (Betungsel)",
    cardFourTitle: "有机水果种植",
    cardFourCopy:
      "重要的水果种植区，提供带有巴厘岛季节性收获的有机水果种植。",
    cardFourBadge: "有机水果供应",
    mobileHome: "首页",
    mobileShop: "商店",
    mobileBoxes: "套餐盒",
    mobileZone: "区域",
    mobileAccount: "购物车",
  },
  uk: {
    title: "BALI FRUITS | Джерела",
    metaDescription:
      "Сторінка джерел BALI FRUITS із перевіреними районами вирощування фруктів, овочів, трав та балійських інгредієнтів по всьому Балі.",
    navHarvest: "Сьогоднішній врожай",
    navBoxes: "Набори",
    navDelivery: "Доставка",
    navSources: "Джерела",
    navFaq: "FAQ",
    zoneCanggu: "Чангу",
    heroEyebrow: "Карта джерел",
    heroTitle: "Чотири перевірені райони вирощування, що стоять за свіжими продуктами на полиці.",
    heroCopy:
      "Ми робимо історію походження зрозумілою: що приходить з гірських районів, що з органічних ферм і які балійські інгредієнти вибираються за регіонами.",
    heroPillOne: "Перевірена органік",
    heroPillTwo: "Локальні поставки з Балі",
    heroAsideLabel: "Назад до покупок",
    heroAsideTitle: "Подивитися повний каталог",
    heroAsideCopy: "Використовуйте цю сторінку як довідник з джерел для карток e-shop.",
    galleryEyebrow: "Галерея джерел",
    cardOneKicker: "Кінтамані та Бедугул",
    cardOneTitle: "Гірські фрукти та овочі",
    cardOneCopy:
      "Перевірені органічні поставки фруктів та овочів з прохолодних гірських районів Балі.",
    cardOneBadge: "Перевірена органік",
    cardTwoKicker: "Гіаньяр",
    cardTwoTitle: "Органічні трави, спеції та балійські інгредієнти",
    cardTwoCopy:
      "Сфокусований район поставок органічних трав та спецій, а також інгредієнтів, що відображають балійську кухню.",
    cardTwoBadge: "Органічні трави та спеції",
    cardThreeKicker: "Плага, Бадунг",
    cardThreeTitle: "Органічні овочі",
    cardThreeCopy:
      "Чистий гірський район для органічних овочів, обраних за стабільну якість та щоденне використання.",
    cardThreeBadge: "Органічні овочі",
    cardFourKicker: "Табанан (Бетунгсел)",
    cardFourTitle: "Вирощування органічних фруктів",
    cardFourCopy:
      "Важливий район вирощування фруктів, що постачає органічні фрукти з сезонними врожаями Балі.",
    cardFourBadge: "Органічні фрукти",
    mobileHome: "Головна",
    mobileShop: "Магазин",
    mobileBoxes: "Набори",
    mobileZone: "Зона",
    mobileAccount: "Кошик",
  },
  fr: {
    title: "BALI FRUITS | Origines",
    metaDescription:
      "La page des origines de BALI FRUITS avec les zones de culture vérifiées pour les fruits, légumes, herbes et ingrédients balinais à travers Bali.",
    navHarvest: "Récolte",
    navBoxes: "Paniers",
    navDelivery: "Livraison",
    navSources: "Origines",
    navFaq: "FAQ",
    zoneCanggu: "Canggu",
    heroEyebrow: "Carte des origines",
    heroTitle: "Quatre zones de culture vérifiées derrière les produits frais sur nos étagères.",
    heroCopy:
      "Nous clarifions l'histoire de l'origine : ce qui vient des hauts plateaux, ce qui provient de fermes biologiques et quels ingrédients balinais sont sélectionnés par région.",
    heroPillOne: "Bio vérifié",
    heroPillTwo: "Approvisionnement local à Bali",
    heroAsideLabel: "Retour à la boutique",
    heroAsideTitle: "Voir le catalogue complet",
    heroAsideCopy: "Utilisez cette page comme guide d'origine pour les fiches produits de la boutique en ligne.",
    galleryEyebrow: "Galerie des origines",
    cardOneKicker: "Kintamani & Bedugul",
    cardOneTitle: "Fruits et légumes des hauts plateaux",
    cardOneCopy:
      "Approvisionnement vérifié en fruits et légumes biologiques provenant des régions montagneuses fraîches de Bali.",
    cardOneBadge: "Bio vérifié",
    cardTwoKicker: "Gianyar",
    cardTwoTitle: "Herbes biologiques, épices et ingrédients balinais",
    cardTwoCopy:
      "Zone d'approvisionnement ciblée pour les herbes et épices biologiques, ainsi que les ingrédients reflétant la cuisine balinaise.",
    cardTwoBadge: "Herbes et épices bio",
    cardThreeKicker: "Plaga, Badung",
    cardThreeTitle: "Légumes biologiques",
    cardThreeCopy:
      "Région montagneuse propre pour des légumes biologiques, sélectionnés pour une qualité stable et une utilisation quotidienne.",
    cardThreeBadge: "Légumes bio",
    cardFourKicker: "Tabanan (Betungsel)",
    cardFourTitle: "Culture fruitière biologique",
    cardFourCopy:
      "Une zone de culture fruitière vitale fournissant des fruits biologiques avec les récoltes saisonnières de Bali.",
    cardFourBadge: "Fruits bio",
    mobileHome: "Accueil",
    mobileShop: "Boutique",
    mobileBoxes: "Paniers",
    mobileZone: "Zone",
    mobileAccount: "Panier",
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
