const header = document.querySelector("[data-header]");
const cartCount = document.querySelector("[data-cart-count]");
const catalog = document.querySelector("[data-catalog]");
const languageSelect = document.querySelector("[data-language-select]");

const translations = {
  en: {
    title: "BALI FRUITS | Fresh delivery across Bali",
    metaDescription: "Fresh fruit, vegetables, herbs and local produce delivered across Bali.",
    navHarvest: "Today's Harvest",
    navBoxes: "Boxes",
    navDelivery: "Delivery",
    navSources: "Sources",
    navFaq: "FAQ",
    zoneCanggu: "Canggu",
    heroEyebrow: "Fresh delivery across Bali",
    heroTitle: "From Bali gardens to your table.",
    heroCopy: "Fresh fruit, vegetables, herbs and local produce selected from Bali growers and trusted local suppliers.",
    heroPrimary: "Shop today's harvest",
    heroSecondary: "Check delivery area",
    trustSuppliers: "Selected Bali suppliers",
    trustPacked: "Packed fresh",
    trustZone: "Delivered by zone",
    catFruits: "Fruits",
    catVegetables: "Vegetables",
    catHerbs: "Herbs",
    catBundles: "Bundles",
    catSpecials: "Local Specials",
    catalogEyebrow: "Bali fruit catalog",
    catalogTitle: "Fresh Bali fruit for your daily table.",
    catalogCopy: "Choose seasonal fruit, local favorites, and villa-ready essentials selected from trusted Bali suppliers.",
    boxesEyebrow: "Weekly boxes",
    boxesTitle: "Curated baskets for villas, homes and smoothie routines.",
    boxesCopy: "Start with a set box, then add extras from today's harvest.",
    boxOneTitle: "Tropical Fruit Box",
    boxOneCopy: "Mango, papaya, pineapple, bananas and seasonal specials.",
    boxTwoTitle: "Family Produce Box",
    boxTwoCopy: "Fruit, vegetables and herbs for easy weekly cooking.",
    boxThreeTitle: "Greens & Smoothie Box",
    boxThreeCopy: "Leafy greens, avocado, citrus and smoothie-friendly fruit.",
    boxPageLink: "View box page",
    sourceEyebrow: "Source clarity",
    sourceTitle: "Selected from Bali growers and trusted local suppliers.",
    sourceCopy: "Product cards keep the sourcing language honest. When an exact farm is not confirmed, the frontend says so clearly.",
    sourcePageLink: "Open sourcing page",
    deliveryEyebrow: "Delivery zones",
    deliveryTitle: "Canggu, Berawa, Pererenan, Seminyak, Sanur and Ubud.",
    deliveryCopy: "Other areas can be handled by schedule as the delivery network expands.",
    faqEyebrow: "Simple ordering",
    faqTitle: "Built for a fast weekly shop.",
    faqOneTitle: "Substitutions",
    faqOneCopy: "Choose similar substitute, contact before substitute, or remove unavailable items.",
    faqTwoTitle: "Packaging",
    faqTwoCopy: "Kraft boxes, careful packing and minimal plastic where produce allows.",
    faqThreeTitle: "Support",
    faqThreeCopy: "WhatsApp-friendly ordering and delivery updates for Bali households and villas.",
    faqPageLink: "Read all FAQs",
    footerCopy: "Fresh delivery across Bali.",
    mobileHome: "Home",
    mobileShop: "Shop",
    mobileBoxes: "Boxes",
    mobileZone: "Zone",
    mobileAccount: "Cart",
    add: "Add",
  },
  ru: {
    title: "BALI FRUITS | Свежая доставка по Бали",
    metaDescription: "Свежие фрукты, овощи, травы и местные продукты с доставкой по Бали.",
    navHarvest: "Сегодняшний урожай",
    navBoxes: "Наборы",
    navDelivery: "Доставка",
    navSources: "Источники",
    navFaq: "FAQ",
    zoneCanggu: "Чангу",
    heroEyebrow: "Свежая доставка по Бали",
    heroTitle: "Из садов Бали к вашему столу.",
    heroCopy: "Свежие фрукты, овощи, травы и местные продукты, отобранные у балийских производителей и надежных местных поставщиков.",
    heroPrimary: "Выбрать свежий урожай",
    heroSecondary: "Проверить район доставки",
    trustSuppliers: "Отобранные поставщики Бали",
    trustPacked: "Упаковано свежим",
    trustZone: "Доставка по зонам",
    catFruits: "Фрукты",
    catVegetables: "Овощи",
    catHerbs: "Травы",
    catBundles: "Наборы",
    catSpecials: "Местные сезонные",
    catalogEyebrow: "Каталог фруктов Бали",
    catalogTitle: "Свежие фрукты Бали для вашего стола.",
    catalogCopy: "Выбирайте сезонные фрукты, местные фавориты и продукты для виллы от надежных поставщиков Бали.",
    boxesEyebrow: "Еженедельные наборы",
    boxesTitle: "Кураторские корзины для вилл, домов и смузи-рутин.",
    boxesCopy: "Начните с готового набора, затем добавьте позиции из сегодняшнего урожая.",
    boxOneTitle: "Тропический фруктовый набор",
    boxOneCopy: "Манго, папайя, ананас, бананы и сезонные позиции.",
    boxTwoTitle: "Семейный набор продуктов",
    boxTwoCopy: "Фрукты, овощи и травы для простой готовки на неделю.",
    boxThreeTitle: "Набор зелени и смузи",
    boxThreeCopy: "Листовая зелень, авокадо, цитрусы и фрукты для смузи.",
    boxPageLink: "Открыть страницу набора",
    sourceEyebrow: "Прозрачность источника",
    sourceTitle: "Отобрано у балийских производителей и надежных местных поставщиков.",
    sourceCopy: "Карточки продуктов используют честные формулировки. Если конкретная ферма не подтверждена, интерфейс говорит об этом прямо.",
    sourcePageLink: "Открыть страницу источников",
    deliveryEyebrow: "Зоны доставки",
    deliveryTitle: "Чангу, Берава, Переренан, Семиньяк, Санур и Убуд.",
    deliveryCopy: "Другие районы можно обслуживать по расписанию по мере расширения доставки.",
    faqEyebrow: "Простой заказ",
    faqTitle: "Для быстрой еженедельной покупки.",
    faqOneTitle: "Замены",
    faqOneCopy: "Выберите похожую замену, связаться перед заменой или убрать недоступный товар.",
    faqTwoTitle: "Упаковка",
    faqTwoCopy: "Крафтовые коробки, аккуратная упаковка и минимум пластика там, где это возможно.",
    faqThreeTitle: "Поддержка",
    faqThreeCopy: "Удобные обновления заказа и доставки через WhatsApp для домов и вилл на Бали.",
    faqPageLink: "Открыть все FAQ",
    footerCopy: "Свежая доставка по Бали.",
    mobileHome: "Главная",
    mobileShop: "Магазин",
    mobileBoxes: "Наборы",
    mobileZone: "Зона",
    mobileAccount: "Корзина",
    add: "Добавить",
  },
};

const products = [
  {
    visual: "bali-banana",
    price: "Rp 24.000",
    en: {
      name: "Bali Banana",
      unit: "1 kg",
      tag: "Bali local",
      detail: "Approximately 12-16 pieces / kg",
      description: "Smaller local bananas with a fragrant, honey-sweet bite.",
    },
    ru: {
      name: "Балийские бананы",
      unit: "1 кг",
      tag: "Местные Бали",
      detail: "Примерно 12-16 штук / кг",
      description: "Небольшие местные бананы с ароматным медово-сладким вкусом.",
    },
  },
  {
    visual: "banana-cavendish",
    price: "Rp 28.000",
    en: {
      name: "Banana Cavendish",
      unit: "1 kg",
      tag: "Exception",
      detail: "Approximately 6-8 pieces / kg",
      description: "The familiar Cavendish style, included for everyday baskets.",
    },
    ru: {
      name: "Бананы Кавендиш",
      unit: "1 кг",
      tag: "Исключение",
      detail: "Примерно 6-8 штук / кг",
      description: "Привычный сорт Cavendish, добавлен для повседневных заказов.",
    },
  },
  {
    visual: "mango-small",
    price: "Rp 34.000",
    en: {
      name: "Small Bali Mango",
      unit: "1 kg",
      tag: "Seasonal",
      detail: "Approximately 5-7 pieces / kg",
      description: "Compact local mangoes, aromatic and slightly resinous when ripe.",
    },
    ru: {
      name: "Маленькое балийское манго",
      unit: "1 кг",
      tag: "Сезонное",
      detail: "Примерно 5-7 штук / кг",
      description: "Небольшие местные манго, ароматные и слегка смолистые в спелом виде.",
    },
  },
  {
    visual: "mango-big",
    price: "Rp 42.000",
    en: {
      name: "Big Harum Manis Mango",
      unit: "1 kg",
      tag: "Premium pick",
      detail: "Approximately 2-3 pieces / kg",
      description: "Large Bali-market mangoes with dense flesh and deep perfume.",
    },
    ru: {
      name: "Большое манго Harum Manis",
      unit: "1 кг",
      tag: "Премиум выбор",
      detail: "Примерно 2-3 штуки / кг",
      description: "Крупные манго с рынков Бали, плотной мякотью и насыщенным ароматом.",
    },
  },
  {
    visual: "papaya-small",
    price: "Rp 24.000",
    en: {
      name: "Small Calina Papaya",
      unit: "Each",
      tag: "Ripe soon",
      detail: "Average price per piece",
      description: "A smaller papaya with orange flesh, good for breakfast bowls.",
    },
    ru: {
      name: "Маленькая папайя Calina",
      unit: "Штука",
      tag: "Скоро спелая",
      detail: "Средняя цена за штуку",
      description: "Небольшая папайя с оранжевой мякотью, хорошо подходит для завтраков.",
    },
  },
  {
    visual: "papaya-big",
    price: "Rp 36.000",
    en: {
      name: "Big Bali Papaya",
      unit: "Each",
      tag: "Family size",
      detail: "Average price per piece",
      description: "Large local papaya, softer and sweeter than supermarket cuts.",
    },
    ru: {
      name: "Большая балийская папайя",
      unit: "Штука",
      tag: "Семейный размер",
      detail: "Средняя цена за штуку",
      description: "Крупная местная папайя, мягче и слаще стандартной супермаркетной.",
    },
  },
  {
    visual: "avocado-green",
    price: "Rp 45.000",
    en: {
      name: "Bali Green Avocado",
      unit: "1 kg",
      tag: "Bali highlands",
      detail: "Approximately 3-5 pieces / kg",
      description: "Green-skinned local avocado with a lighter, fresh texture.",
    },
    ru: {
      name: "Зеленый балийский авокадо",
      unit: "1 кг",
      tag: "Горные районы Бали",
      detail: "Примерно 3-5 штук / кг",
      description: "Местный зеленокожий авокадо с более легкой и свежей текстурой.",
    },
  },
  {
    visual: "avocado-butter",
    price: "Rp 55.000",
    en: {
      name: "Avocado Mentega",
      unit: "1 kg",
      tag: "Creamy",
      detail: "Approximately 2-4 pieces / kg",
      description: "Buttery local avocado, richer and creamier when fully ripe.",
    },
    ru: {
      name: "Авокадо Mentega",
      unit: "1 кг",
      tag: "Кремовый",
      detail: "Примерно 2-4 штуки / кг",
      description: "Маслянистый местный авокадо, особенно насыщенный в полной спелости.",
    },
  },
  {
    visual: "apple-red",
    price: "Rp 39.000",
    en: {
      name: "Kintamani Red Apple",
      unit: "1 kg",
      tag: "Highland selected",
      detail: "Approximately 7-9 pieces / kg",
      description: "Bali highland-style apple, smaller and crisper than imports.",
    },
    ru: {
      name: "Красное яблоко Кинтамани",
      unit: "1 кг",
      tag: "Горный отбор",
      detail: "Примерно 7-9 штук / кг",
      description: "Яблоко из горных районов Бали, меньше и хрустящее по сравнению с импортом.",
    },
  },
  {
    visual: "apple-green",
    price: "Rp 38.000",
    en: {
      name: "Kintamani Green Apple",
      unit: "1 kg",
      tag: "Highland selected",
      detail: "Approximately 7-9 pieces / kg",
      description: "Fresh green apple with bright acidity for juices and salads.",
    },
    ru: {
      name: "Зеленое яблоко Кинтамани",
      unit: "1 кг",
      tag: "Горный отбор",
      detail: "Примерно 7-9 штук / кг",
      description: "Свежее зеленое яблоко с яркой кислинкой для соков и салатов.",
    },
  },
  {
    visual: "orange",
    price: "Rp 32.000",
    en: {
      name: "Bali Orange",
      unit: "1 kg",
      tag: "Local citrus",
      detail: "Approximately 5-7 pieces / kg",
      description: "Juicy local orange, often less polished but full of aroma.",
    },
    ru: {
      name: "Балийский апельсин",
      unit: "1 кг",
      tag: "Местный цитрус",
      detail: "Примерно 5-7 штук / кг",
      description: "Сочный местный апельсин, менее глянцевый, но очень ароматный.",
    },
  },
  {
    visual: "mandarine",
    price: "Rp 36.000",
    en: {
      name: "Kintamani Mandarine",
      unit: "1 kg",
      tag: "Peel easy",
      detail: "Approximately 10-14 pieces / kg",
      description: "Small loose-skinned mandarines with sweet-tart highland flavor.",
    },
    ru: {
      name: "Мандарин Кинтамани",
      unit: "1 кг",
      tag: "Легко чистится",
      detail: "Примерно 10-14 штук / кг",
      description: "Небольшие мандарины с тонкой кожурой и кисло-сладким горным вкусом.",
    },
  },
  {
    visual: "lemon",
    price: "Rp 28.000",
    en: {
      name: "Local Lemon",
      unit: "500 g",
      tag: "Kitchen staple",
      detail: "Approximately 8-12 pieces / kg",
      description: "Local lemons for tea, dressings and villa breakfast service.",
    },
    ru: {
      name: "Местный лимон",
      unit: "500 г",
      tag: "Для кухни",
      detail: "Примерно 8-12 штук / кг",
      description: "Местные лимоны для чая, заправок и завтраков на вилле.",
    },
  },
  {
    visual: "lime",
    price: "Rp 18.000",
    en: {
      name: "Jeruk Nipis Lime",
      unit: "500 g",
      tag: "Bali kitchen",
      detail: "Approximately 20-28 pieces / kg",
      description: "Small sharp limes, more fragrant than standard supermarket limes.",
    },
    ru: {
      name: "Лайм Jeruk Nipis",
      unit: "500 г",
      tag: "Балийская кухня",
      detail: "Примерно 20-28 штук / кг",
      description: "Маленькие яркие лаймы, более ароматные, чем обычные супермаркетные.",
    },
  },
  {
    visual: "strawberry",
    price: "Rp 42.000",
    en: {
      name: "Bedugul Strawberry",
      unit: "250 g",
      tag: "Highland berry",
      detail: "Approximately 18-24 berries / 250 g",
      description: "Bali highland strawberries, delicate and best eaten quickly.",
    },
    ru: {
      name: "Клубника Бедугул",
      unit: "250 г",
      tag: "Горная ягода",
      detail: "Примерно 18-24 ягоды / 250 г",
      description: "Клубника из горных районов Бали, нежная и лучше всего свежей.",
    },
  },
  {
    visual: "watermelon",
    price: "Rp 48.000",
    en: {
      name: "Bali Watermelon",
      unit: "Each",
      tag: "Hydrating",
      detail: "Average price per piece",
      description: "Large local watermelon with crisp flesh for hot Bali days.",
    },
    ru: {
      name: "Балийский арбуз",
      unit: "Штука",
      tag: "Освежающий",
      detail: "Средняя цена за штуку",
      description: "Крупный местный арбуз с хрустящей мякотью для жарких дней на Бали.",
    },
  },
  {
    visual: "melon-green",
    price: "Rp 39.000",
    en: {
      name: "Green Melon",
      unit: "Each",
      tag: "Sweet fresh",
      detail: "Average price per piece",
      description: "Pale green local melon, clean and refreshing when chilled.",
    },
    ru: {
      name: "Зеленая дыня",
      unit: "Штука",
      tag: "Сладкая свежесть",
      detail: "Средняя цена за штуку",
      description: "Светло-зеленая местная дыня, особенно освежающая в охлажденном виде.",
    },
  },
  {
    visual: "melon-orange",
    price: "Rp 42.000",
    en: {
      name: "Orange Melon",
      unit: "Each",
      tag: "Soft sweet",
      detail: "Average price per piece",
      description: "Orange-flesh melon with a softer tropical sweetness.",
    },
    ru: {
      name: "Оранжевая дыня",
      unit: "Штука",
      tag: "Мягкая сладость",
      detail: "Средняя цена за штуку",
      description: "Дыня с оранжевой мякотью и мягкой тропической сладостью.",
    },
  },
  {
    visual: "ananas",
    price: "Rp 27.000",
    en: {
      name: "Bali Ananas",
      unit: "Each",
      tag: "Tropical",
      detail: "Average price per piece",
      description: "Local pineapple, golden and fragrant with a sharper finish.",
    },
    ru: {
      name: "Балийский ананас",
      unit: "Штука",
      tag: "Тропический",
      detail: "Средняя цена за штуку",
      description: "Местный ананас, золотистый и ароматный, с ярким послевкусием.",
    },
  },
  {
    visual: "fresh-coconut",
    price: "Rp 22.000",
    en: {
      name: "Fresh Young Coconut",
      unit: "Each",
      tag: "Drink fresh",
      detail: "Average price per piece",
      description: "Young coconut for fresh water and soft spoonable flesh.",
    },
    ru: {
      name: "Свежий молодой кокос",
      unit: "Штука",
      tag: "Пить свежим",
      detail: "Средняя цена за штуку",
      description: "Молодой кокос со свежей водой и мягкой мякотью.",
    },
  },
  {
    visual: "white-coconut",
    price: "Rp 30.000",
    en: {
      name: "Kelapa Tua",
      unit: "Each",
      tag: "Old coconut",
      detail: "Average price per piece",
      description: "Peeled mature coconut with firm white meat and coconut milk inside.",
    },
    ru: {
      name: "Kelapa Tua",
      unit: "Штука",
      tag: "Старый кокос",
      detail: "Средняя цена за штуку",
      description: "Очищенный зрелый кокос с плотной белой мякотью и кокосовым молоком внутри.",
    },
  },
  {
    visual: "starfruit",
    price: "Rp 24.000",
    en: {
      name: "Bali Starfruit",
      unit: "500 g",
      tag: "Local special",
      detail: "Approximately 4-6 pieces / kg",
      description: "Crisp starfruit with floral acidity and beautiful slice shape.",
    },
    ru: {
      name: "Балийская карамбола",
      unit: "500 г",
      tag: "Местный специалитет",
      detail: "Примерно 4-6 штук / кг",
      description: "Хрустящая карамбола с цветочной кислинкой и красивой формой среза.",
    },
  },
  {
    visual: "mangosteen",
    price: "Rp 58.000",
    en: {
      name: "Mangosteen",
      unit: "1 kg",
      tag: "Seasonal",
      detail: "Approximately 8-12 pieces / kg",
      description: "Purple rind, soft white segments and a clean sweet-sour finish.",
    },
    ru: {
      name: "Мангостин",
      unit: "1 кг",
      tag: "Сезонный",
      detail: "Примерно 8-12 штук / кг",
      description: "Фиолетовая кожура, мягкие белые дольки и чистый кисло-сладкий вкус.",
    },
  },
  {
    visual: "anona",
    price: "Rp 48.000",
    en: {
      name: "Anona Custard Apple",
      unit: "1 kg",
      tag: "Local rare",
      detail: "Approximately 3-5 pieces / kg",
      description: "Anona with creamy flesh, soft perfume and natural sweetness.",
    },
    ru: {
      name: "Анона, сахарное яблоко",
      unit: "1 кг",
      tag: "Редкий местный",
      detail: "Примерно 3-5 штук / кг",
      description: "Анона с кремовой мякотью, мягким ароматом и натуральной сладостью.",
    },
  },
  {
    visual: "dragon-fruit",
    price: "Rp 36.000",
    en: {
      name: "Dragon Fruit",
      unit: "1 kg",
      tag: "Bali grown",
      detail: "Approximately 2-3 pieces / kg",
      description: "Bright local dragon fruit, refreshing and good for smoothie bowls.",
    },
    ru: {
      name: "Драконий фрукт",
      unit: "1 кг",
      tag: "Выращено на Бали",
      detail: "Примерно 2-3 штуки / кг",
      description: "Яркий местный драконий фрукт, освежающий и удобный для смузи-боулов.",
    },
  },
];

const fallbackLanguage = "en";
const supportedLanguages = Object.keys(translations);
let currentLanguage = getInitialLanguage();

function normalizeLanguage(language) {
  if (!language || typeof language !== "string") {
    return fallbackLanguage;
  }

  const primaryLanguage = language.toLowerCase().split("-")[0];
  return supportedLanguages.includes(primaryLanguage) ? primaryLanguage : fallbackLanguage;
}

function getBrowserLanguage() {
  const browserLanguages = navigator.languages && navigator.languages.length
    ? navigator.languages
    : [navigator.language || navigator.userLanguage];

  return normalizeLanguage(browserLanguages[0]);
}

function getInitialLanguage() {
  const savedLanguage = localStorage.getItem("baliFruitsLanguage");

  if (savedLanguage) {
    return normalizeLanguage(savedLanguage);
  }

  return getBrowserLanguage();
}

function updateHeader() {
  if (!header) {
    return;
  }

  header.classList.toggle("is-scrolled", window.scrollY > 24);
}

function translateStaticContent() {
  const dictionary = translations[currentLanguage];

  document.documentElement.lang = currentLanguage;
  document.title = dictionary.title;
  const description = document.querySelector('meta[name="description"]');

  if (description) {
    description.setAttribute("content", dictionary.metaDescription);
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = dictionary[key];
  });
}

function renderCatalog() {
  if (!catalog) {
    return;
  }

  const dictionary = translations[currentLanguage];

  catalog.innerHTML = products
    .map((product) => {
      const content = product[currentLanguage];

      return `
        <article class="product-card">
          <div class="fruit-visual">
            <img src="assets/fruits/${product.visual}.jpg" alt="${content.name}" />
          </div>
          <div class="product-body">
            <span class="source-label">${content.tag}</span>
            <h3>${content.name}</h3>
            <p class="product-description">${content.description}</p>
            <p class="product-unit">${content.unit}</p>
            <p class="product-detail">${content.detail}</p>
            <div class="product-footer">
              <strong>${product.price}</strong>
              <button
                class="add-button"
                type="button"
                data-add-item
                data-cart-id="fruit-${product.visual}"
                data-cart-name="${content.name}"
                data-cart-description="${content.description}"
                data-cart-unit="${content.unit}"
                data-cart-image="assets/fruits/${product.visual}.jpg"
                data-cart-price="${BaliCart.parseRupiah(product.price)}"
                aria-label="${dictionary.add} ${content.name}"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>
              </button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function setLanguage(language) {
  currentLanguage = normalizeLanguage(language);
  localStorage.setItem("baliFruitsLanguage", currentLanguage);
  if (languageSelect) {
    languageSelect.value = currentLanguage;
  }
  translateStaticContent();
  renderCatalog();
}

window.addEventListener("scroll", updateHeader, { passive: true });

if (languageSelect) {
  languageSelect.addEventListener("change", (event) => {
    setLanguage(event.target.value);
  });
}

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-add-item]");

  if (!button) {
    return;
  }

  BaliCart.addCartItemFromButton(button);
  button.animate(
    [
      { transform: "scale(1)" },
      { transform: "scale(0.9)" },
      { transform: "scale(1)" },
    ],
    { duration: 180, easing: "ease-out" }
  );
});

updateHeader();
setLanguage(currentLanguage);
if (window.BaliCart) {
  BaliCart.updateCartBadges();
}
