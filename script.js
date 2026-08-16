const header = document.querySelector("[data-header]");
const cartCount = document.querySelector("[data-cart-count]");
const catalog = document.querySelector("[data-catalog]");
const languageSelect = document.querySelector("[data-language-select]");

const translations = {
  en: {
    navShop: "Shop",
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
    navShop: "Магазин",
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
  id: {
    navShop: "Toko",
    title: "BALI FRUITS | Pengiriman segar di Bali",
    metaDescription: "Buah segar, sayuran, bumbu, dan hasil bumi lokal yang dikirim di seluruh Bali.",
    navHarvest: "Panen Hari Ini",
    navBoxes: "Kotak",
    navDelivery: "Pengiriman",
    navSources: "Sumber",
    navFaq: "FAQ",
    zoneCanggu: "Canggu",
    heroEyebrow: "Pengiriman segar di seluruh Bali",
    heroTitle: "Dari kebun Bali ke meja Anda.",
    heroCopy: "Buah segar, sayuran, bumbu, dan hasil bumi lokal yang dipilih dari petani Bali dan pemasok lokal terpercaya.",
    heroPrimary: "Belanja panen hari ini",
    heroSecondary: "Cek area pengiriman",
    trustSuppliers: "Pemasok Bali terpilih",
    trustPacked: "Dikemas segar",
    trustZone: "Dikirim per zona",
    catFruits: "Buah-buahan",
    catVegetables: "Sayuran",
    catHerbs: "Bumbu",
    catBundles: "Paket",
    catSpecials: "Spesial Lokal",
    catalogEyebrow: "Katalog buah Bali",
    catalogTitle: "Buah Bali segar untuk meja harian Anda.",
    catalogCopy: "Pilih buah musiman, favorit lokal, dan kebutuhan vila yang dipilih dari pemasok Bali terpercaya.",
    boxesEyebrow: "Kotak mingguan",
    boxesTitle: "Keranjang pilihan untuk vila, rumah, dan rutinitas smoothie.",
    boxesCopy: "Mulai dengan kotak yang sudah ada, lalu tambahkan tambahan dari panen hari ini.",
    boxOneTitle: "Kotak Buah Tropis",
    boxOneCopy: "Mangga, pepaya, nanas, pisang, dan spesial musiman.",
    boxTwoTitle: "Kotak Produk Keluarga",
    boxTwoCopy: "Buah, sayuran, dan bumbu untuk memasak mingguan yang mudah.",
    boxThreeTitle: "Kotak Sayuran & Smoothie",
    boxThreeCopy: "Sayuran berdaun hijau, alpukat, jeruk, dan buah yang cocok untuk smoothie.",
    boxPageLink: "Lihat halaman kotak",
    sourceEyebrow: "Kejelasan sumber",
    sourceTitle: "Dipilih dari petani Bali dan pemasok lokal terpercaya.",
    sourceCopy: "Kartu produk menjaga bahasa sumber tetap jujur. Ketika pertanian yang tepat tidak dikonfirmasi, kami mengatakannya dengan jelas.",
    sourcePageLink: "Buka halaman sumber",
    deliveryEyebrow: "Zona pengiriman",
    deliveryTitle: "Canggu, Berawa, Pererenan, Seminyak, Sanur dan Ubud.",
    deliveryCopy: "Area lain dapat ditangani sesuai jadwal seiring perluasan jaringan pengiriman.",
    faqEyebrow: "Pemesanan sederhana",
    faqTitle: "Dibuat untuk belanja mingguan yang cepat.",
    faqOneTitle: "Penggantian",
    faqOneCopy: "Pilih pengganti serupa, hubungi sebelum mengganti, atau hapus item yang tidak tersedia.",
    faqTwoTitle: "Pengemasan",
    faqTwoCopy: "Kotak kraft, pengepakan hati-hati, dan meminimalkan plastik jika memungkinkan.",
    faqThreeTitle: "Dukungan",
    faqThreeCopy: "Pemesanan dan pembaruan pengiriman yang ramah WhatsApp untuk rumah tangga dan vila di Bali.",
    faqPageLink: "Baca semua FAQ",
    footerCopy: "Pengiriman segar di seluruh Bali.",
    mobileHome: "Beranda",
    mobileShop: "Belanja",
    mobileBoxes: "Kotak",
    mobileZone: "Zona",
    mobileAccount: "Keranjang",
    add: "Tambah",
  },
  it: {
    navShop: "Shop",
    title: "BALI FRUITS | Consegna fresca a Bali",
    metaDescription: "Frutta fresca, verdura, erbe aromatiche e prodotti locali consegnati in tutta Bali.",
    navHarvest: "Il raccolto di oggi",
    navBoxes: "Box",
    navDelivery: "Consegna",
    navSources: "Fonti",
    navFaq: "FAQ",
    zoneCanggu: "Canggu",
    heroEyebrow: "Consegna fresca in tutta Bali",
    heroTitle: "Dai giardini di Bali alla tua tavola.",
    heroCopy: "Frutta fresca, verdura, erbe e prodotti locali selezionati da coltivatori balinesi e fornitori locali di fiducia.",
    heroPrimary: "Acquista il raccolto di oggi",
    heroSecondary: "Controlla l'area di consegna",
    trustSuppliers: "Fornitori balinesi selezionati",
    trustPacked: "Confezionato fresco",
    trustZone: "Consegnato per zona",
    catFruits: "Frutta",
    catVegetables: "Verdura",
    catHerbs: "Erbe",
    catBundles: "Pacchetti",
    catSpecials: "Specialità locali",
    catalogEyebrow: "Catalogo frutta di Bali",
    catalogTitle: "Frutta fresca di Bali per la tua tavola quotidiana.",
    catalogCopy: "Scegli frutta di stagione, specialità locali ed elementi essenziali per villa, selezionati da fornitori balinesi di fiducia.",
    boxesEyebrow: "Box settimanali",
    boxesTitle: "Cesti selezionati per ville, case e per le tue routine con gli smoothie.",
    boxesCopy: "Inizia con un box pronto, poi aggiungi extra dal raccolto di oggi.",
    boxOneTitle: "Box Frutta Tropicale",
    boxOneCopy: "Mango, papaya, ananas, banane e specialità di stagione.",
    boxTwoTitle: "Box Prodotti per la Famiglia",
    boxTwoCopy: "Frutta, verdura ed erbe aromatiche per cucinare facilmente ogni settimana.",
    boxThreeTitle: "Box Verdure & Smoothie",
    boxThreeCopy: "Verdure a foglia verde, avocado, agrumi e frutta ideale per frullati.",
    boxPageLink: "Visualizza pagina del box",
    sourceEyebrow: "Chiarezza sulle fonti",
    sourceTitle: "Selezionato da coltivatori di Bali e fornitori locali di fiducia.",
    sourceCopy: "Le schede dei prodotti mantengono un linguaggio onesto sull'origine. Quando una fattoria esatta non è confermata, viene indicato chiaramente.",
    sourcePageLink: "Apri pagina fonti",
    deliveryEyebrow: "Zone di consegna",
    deliveryTitle: "Canggu, Berawa, Pererenan, Seminyak, Sanur e Ubud.",
    deliveryCopy: "Altre aree possono essere gestite su programmazione mentre la rete di consegna si espande.",
    faqEyebrow: "Ordinazione semplice",
    faqTitle: "Costruito per una spesa settimanale veloce.",
    faqOneTitle: "Sostituzioni",
    faqOneCopy: "Scegli un sostituto simile, contattami prima della sostituzione, o rimuovi gli articoli non disponibili.",
    faqTwoTitle: "Imballaggio",
    faqTwoCopy: "Scatole kraft, confezionamento accurato e plastica minima dove i prodotti lo consentono.",
    faqThreeTitle: "Supporto",
    faqThreeCopy: "Ordinazioni tramite WhatsApp e aggiornamenti sulla consegna per famiglie e ville a Bali.",
    faqPageLink: "Leggi tutte le FAQ",
    footerCopy: "Consegna fresca in tutta Bali.",
    mobileHome: "Home",
    mobileShop: "Negozio",
    mobileBoxes: "Box",
    mobileZone: "Zona",
    mobileAccount: "Carrello",
    add: "Aggiungi",
  },
  zh: {
    navShop: "商店",
    title: "BALI FRUITS | 巴厘岛生鲜配送",
    metaDescription: "新鲜水果、蔬菜、香草和当地农产品在巴厘岛全岛配送。",
    navHarvest: "今日采摘",
    navBoxes: "套餐盒",
    navDelivery: "配送",
    navSources: "来源",
    navFaq: "常见问题",
    zoneCanggu: "长谷",
    heroEyebrow: "巴厘岛生鲜配送",
    heroTitle: "从巴厘岛的果园到您的餐桌。",
    heroCopy: "从巴厘岛种植者和值得信赖的当地供应商精心挑选的新鲜水果、蔬菜、香草和当地农产品。",
    heroPrimary: "购买今日采摘",
    heroSecondary: "查看配送区域",
    trustSuppliers: "巴厘岛精选供应商",
    trustPacked: "新鲜包装",
    trustZone: "按区域配送",
    catFruits: "水果",
    catVegetables: "蔬菜",
    catHerbs: "香草",
    catBundles: "组合",
    catSpecials: "当地特色",
    catalogEyebrow: "巴厘岛水果目录",
    catalogTitle: "为您日常餐桌提供新鲜的巴厘岛水果。",
    catalogCopy: "选择应季水果、当地人的最爱，以及来自可靠供应商的别墅必备品。",
    boxesEyebrow: "每周套餐盒",
    boxesTitle: "为别墅、家庭和冰沙日常定制的篮子。",
    boxesCopy: "从固定的套餐盒开始，然后从今日采摘中添加更多选择。",
    boxOneTitle: "热带水果盒",
    boxOneCopy: "芒果、木瓜、菠萝、香蕉和季节性特色水果。",
    boxTwoTitle: "家庭农产品盒",
    boxTwoCopy: "水果、蔬菜和香草，让每周烹饪变得轻松。",
    boxThreeTitle: "绿叶和冰沙盒",
    boxThreeCopy: "绿叶蔬菜、牛油果、柑橘和适合做冰沙的水果。",
    boxPageLink: "查看套餐盒页面",
    sourceEyebrow: "明确来源",
    sourceTitle: "从巴厘岛种植者和可靠的当地供应商精心挑选。",
    sourceCopy: "产品卡片保持对来源的诚实描述。如果未确认确切的农场，前端会明确说明。",
    sourcePageLink: "打开来源页面",
    deliveryEyebrow: "配送区域",
    deliveryTitle: "长谷、贝拉瓦、佩雷雷南、水明漾、沙努尔和乌布。",
    deliveryCopy: "随着配送网络的扩大，其他地区可以安排定时配送。",
    faqEyebrow: "简单订购",
    faqTitle: "专为快速每周购物而建。",
    faqOneTitle: "替代品",
    faqOneCopy: "选择相似的替代品，替换前联系，或移除缺货的商品。",
    faqTwoTitle: "包装",
    faqTwoCopy: "牛皮纸盒、精心包装，在条件允许下尽量减少使用塑料。",
    faqThreeTitle: "客户支持",
    faqThreeCopy: "支持WhatsApp订购和配送更新，方便巴厘岛的家庭和别墅使用。",
    faqPageLink: "阅读所有常见问题",
    footerCopy: "巴厘岛生鲜配送。",
    mobileHome: "首页",
    mobileShop: "商店",
    mobileBoxes: "套餐盒",
    mobileZone: "区域",
    mobileAccount: "购物车",
    add: "添加",
  },
  uk: {
    navShop: "Магазин",
    title: "BALI FRUITS | Свіжа доставка по Балі",
    metaDescription: "Свіжі фрукти, овочі, трави та місцеві продукти з доставкою по всьому Балі.",
    navHarvest: "Сьогоднішній врожай",
    navBoxes: "Набори",
    navDelivery: "Доставка",
    navSources: "Джерела",
    navFaq: "FAQ",
    zoneCanggu: "Чангу",
    heroEyebrow: "Свіжа доставка по Балі",
    heroTitle: "Із садів Балі до вашого столу.",
    heroCopy: "Свіжі фрукти, овочі, трави та місцеві продукти, відібрані у балійських фермерів та надійних місцевих постачальників.",
    heroPrimary: "Обрати свіжий врожай",
    heroSecondary: "Перевірити зону доставки",
    trustSuppliers: "Відібрані постачальники Балі",
    trustPacked: "Запаковано свіжим",
    trustZone: "Доставка по зонах",
    catFruits: "Фрукти",
    catVegetables: "Овочі",
    catHerbs: "Трави",
    catBundles: "Набори",
    catSpecials: "Місцеві сезонні",
    catalogEyebrow: "Каталог фруктів Балі",
    catalogTitle: "Свіжі фрукти Балі для вашого щоденного столу.",
    catalogCopy: "Обирайте сезонні фрукти, місцеві фаворити та продукти для вілли від надійних постачальників Балі.",
    boxesEyebrow: "Щотижневі набори",
    boxesTitle: "Кураторські кошики для вілл, будинків та смузі-рутин.",
    boxesCopy: "Почніть із готового набору, потім додайте позиції із сьогоднішнього врожаю.",
    boxOneTitle: "Тропічний фруктовий набір",
    boxOneCopy: "Манго, папая, ананас, банани та сезонні фрукти.",
    boxTwoTitle: "Сімейний набір продуктів",
    boxTwoCopy: "Фрукти, овочі та трави для простого готування на тиждень.",
    boxThreeTitle: "Набір зелені та смузі",
    boxThreeCopy: "Листова зелень, авокадо, цитруси та фрукти для смузі.",
    boxPageLink: "Відкрити сторінку набору",
    sourceEyebrow: "Прозорість джерела",
    sourceTitle: "Відібрано у балійських виробників та надійних місцевих постачальників.",
    sourceCopy: "Картки продуктів використовують чесні формулювання щодо джерел. Якщо конкретна ферма не підтверджена, інтерфейс говорить про це прямо.",
    sourcePageLink: "Відкрити сторінку джерел",
    deliveryEyebrow: "Зони доставки",
    deliveryTitle: "Чангу, Берава, Переренан, Семіньяк, Санур та Убуд.",
    deliveryCopy: "Інші райони можна обслуговувати за розкладом по мірі розширення мережі доставки.",
    faqEyebrow: "Просте замовлення",
    faqTitle: "Створено для швидкої щотижневої покупки.",
    faqOneTitle: "Заміни",
    faqOneCopy: "Оберіть схожу заміну, зв'язатися перед заміною або прибрати недоступний товар.",
    faqTwoTitle: "Пакування",
    faqTwoCopy: "Крафтові коробки, акуратне пакування та мінімум пластику там, де це можливо.",
    faqThreeTitle: "Підтримка",
    faqThreeCopy: "Зручні оновлення замовлення та доставки через WhatsApp для будинків і вілл на Балі.",
    faqPageLink: "Читати всі FAQ",
    footerCopy: "Свіжа доставка по Балі.",
    mobileHome: "Головна",
    mobileShop: "Магазин",
    mobileBoxes: "Набори",
    mobileZone: "Зона",
    mobileAccount: "Кошик",
    add: "Додати"
  },
  fr: {
    navShop: "Boutique",
    title: "BALI FRUITS | Livraison de produits frais à Bali",
    metaDescription: "Fruits frais, légumes, herbes et produits locaux livrés partout à Bali.",
    navHarvest: "Récolte d'aujourd'hui",
    navBoxes: "Paniers",
    navDelivery: "Livraison",
    navSources: "Origines",
    navFaq: "FAQ",
    zoneCanggu: "Canggu",
    heroEyebrow: "Livraison de produits frais à Bali",
    heroTitle: "Des jardins de Bali à votre table.",
    heroCopy: "Fruits frais, légumes, herbes et produits locaux sélectionnés auprès de producteurs balinais et de fournisseurs locaux de confiance.",
    heroPrimary: "Acheter la récolte du jour",
    heroSecondary: "Vérifier la zone de livraison",
    trustSuppliers: "Fournisseurs balinais sélectionnés",
    trustPacked: "Emballé frais",
    trustZone: "Livré par zone",
    catFruits: "Fruits",
    catVegetables: "Légumes",
    catHerbs: "Herbes",
    catBundles: "Paniers",
    catSpecials: "Spécialités locales",
    catalogEyebrow: "Catalogue de fruits de Bali",
    catalogTitle: "Des fruits de Bali frais pour votre table au quotidien.",
    catalogCopy: "Choisissez des fruits de saison, des favoris locaux et des essentiels pour votre villa, sélectionnés auprès de fournisseurs balinais de confiance.",
    boxesEyebrow: "Paniers hebdomadaires",
    boxesTitle: "Paniers composés pour les villas, les maisons et les amateurs de smoothies.",
    boxesCopy: "Commencez par un panier défini, puis ajoutez des suppléments de la récolte d'aujourd'hui.",
    boxOneTitle: "Panier de Fruits Tropicaux",
    boxOneCopy: "Mangue, papaye, ananas, bananes et spécialités de saison.",
    boxTwoTitle: "Panier de Produits Familiaux",
    boxTwoCopy: "Fruits, légumes et herbes pour cuisiner facilement la semaine.",
    boxThreeTitle: "Panier Légumes & Smoothies",
    boxThreeCopy: "Légumes-feuilles, avocat, agrumes et fruits parfaits pour les smoothies.",
    boxPageLink: "Voir la page du panier",
    sourceEyebrow: "Clarté sur l'origine",
    sourceTitle: "Sélectionné auprès de producteurs de Bali et de fournisseurs locaux de confiance.",
    sourceCopy: "Les fiches produits gardent un langage transparent sur l'origine. Lorsqu'une ferme exacte n'est pas confirmée, le frontend le dit clairement.",
    sourcePageLink: "Ouvrir la page des origines",
    deliveryEyebrow: "Zones de livraison",
    deliveryTitle: "Canggu, Berawa, Pererenan, Seminyak, Sanur et Ubud.",
    deliveryCopy: "D'autres zones peuvent être desservies sur rendez-vous à mesure que le réseau de livraison s'étend.",
    faqEyebrow: "Commande simple",
    faqTitle: "Conçu pour des achats hebdomadaires rapides.",
    faqOneTitle: "Substitutions",
    faqOneCopy: "Choisissez un substitut similaire, contactez-moi avant substitution ou retirez les articles indisponibles.",
    faqTwoTitle: "Emballage",
    faqTwoCopy: "Boîtes kraft, emballage soigné et plastique minimal lorsque les produits le permettent.",
    faqThreeTitle: "Support",
    faqThreeCopy: "Commandes et mises à jour de livraison via WhatsApp, adaptées aux foyers et villas à Bali.",
    faqPageLink: "Lire toutes les FAQ",
    footerCopy: "Livraison de produits frais à Bali.",
    mobileHome: "Accueil",
    mobileShop: "Boutique",
    mobileBoxes: "Paniers",
    mobileZone: "Zone",
    mobileAccount: "Panier",
    add: "Ajouter",
  }
};

let products = [
  {
    "visual": "tomato",
    "category": "vegetables",
    "price": "Rp 19.000",
    "en": {
      "name": "Tomato",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Tomato"
    },
    "id": {
      "name": "Tomat",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Tomat"
    },
    "ru": {
      "name": "Tomato",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Tomato"
    },
    "it": {
      "name": "Tomato",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Tomato"
    },
    "zh": {
      "name": "Tomato",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Tomato"
    },
    "uk": {
      "name": "Tomato",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Tomato"
    },
    "fr": {
      "name": "Tomato",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Tomato"
    }
  },
  {
    "visual": "gren-tomato",
    "category": "vegetables",
    "price": "Rp 20.000",
    "en": {
      "name": "Gren Tomato",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Gren Tomato"
    },
    "id": {
      "name": "Tomat Ijo",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Tomat Ijo"
    },
    "ru": {
      "name": "Gren Tomato",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Gren Tomato"
    },
    "it": {
      "name": "Gren Tomato",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Gren Tomato"
    },
    "zh": {
      "name": "Gren Tomato",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Gren Tomato"
    },
    "uk": {
      "name": "Gren Tomato",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Gren Tomato"
    },
    "fr": {
      "name": "Gren Tomato",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Gren Tomato"
    }
  },
  {
    "visual": "tomato-cherry-red",
    "category": "vegetables",
    "price": "Rp 58.000",
    "en": {
      "name": "Tomato Cherry Red",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Tomato Cherry Red"
    },
    "id": {
      "name": "Tomato Cherry Red",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Tomato Cherry Red"
    },
    "ru": {
      "name": "Tomato Cherry Red",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Tomato Cherry Red"
    },
    "it": {
      "name": "Tomato Cherry Red",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Tomato Cherry Red"
    },
    "zh": {
      "name": "Tomato Cherry Red",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Tomato Cherry Red"
    },
    "uk": {
      "name": "Tomato Cherry Red",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Tomato Cherry Red"
    },
    "fr": {
      "name": "Tomato Cherry Red",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Tomato Cherry Red"
    }
  },
  {
    "visual": "tomato-cherry-yellow",
    "category": "vegetables",
    "price": "Rp 69.000",
    "en": {
      "name": "Tomato Cherry Yellow",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Tomato Cherry Yellow"
    },
    "id": {
      "name": "Tomato Cherry Yellow",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Tomato Cherry Yellow"
    },
    "ru": {
      "name": "Tomato Cherry Yellow",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Tomato Cherry Yellow"
    },
    "it": {
      "name": "Tomato Cherry Yellow",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Tomato Cherry Yellow"
    },
    "zh": {
      "name": "Tomato Cherry Yellow",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Tomato Cherry Yellow"
    },
    "uk": {
      "name": "Tomato Cherry Yellow",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Tomato Cherry Yellow"
    },
    "fr": {
      "name": "Tomato Cherry Yellow",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Tomato Cherry Yellow"
    }
  },
  {
    "visual": "local-cucumber",
    "category": "vegetables",
    "price": "Rp 19.000",
    "en": {
      "name": "Local Cucumber",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Local Cucumber"
    },
    "id": {
      "name": "Timun Kapsul",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Timun Kapsul"
    },
    "ru": {
      "name": "Local Cucumber",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Local Cucumber"
    },
    "it": {
      "name": "Local Cucumber",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Local Cucumber"
    },
    "zh": {
      "name": "Local Cucumber",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Local Cucumber"
    },
    "uk": {
      "name": "Local Cucumber",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Local Cucumber"
    },
    "fr": {
      "name": "Local Cucumber",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Local Cucumber"
    }
  },
  {
    "visual": "cauliflower",
    "category": "vegetables",
    "price": "Rp 35.000",
    "en": {
      "name": "Cauliflower",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Cauliflower"
    },
    "id": {
      "name": "Cauliflower",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Cauliflower"
    },
    "ru": {
      "name": "Cauliflower",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Cauliflower"
    },
    "it": {
      "name": "Cauliflower",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Cauliflower"
    },
    "zh": {
      "name": "Cauliflower",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Cauliflower"
    },
    "uk": {
      "name": "Cauliflower",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Cauliflower"
    },
    "fr": {
      "name": "Cauliflower",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Cauliflower"
    }
  },
  {
    "visual": "broccoli",
    "category": "vegetables",
    "price": "Rp 57.000",
    "en": {
      "name": "Broccoli",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Broccoli"
    },
    "id": {
      "name": "Broccoli",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Broccoli"
    },
    "ru": {
      "name": "Broccoli",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Broccoli"
    },
    "it": {
      "name": "Broccoli",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Broccoli"
    },
    "zh": {
      "name": "Broccoli",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Broccoli"
    },
    "uk": {
      "name": "Broccoli",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Broccoli"
    },
    "fr": {
      "name": "Broccoli",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Broccoli"
    }
  },
  {
    "visual": "cucumber-jepan",
    "category": "vegetables",
    "price": "Rp 28.000",
    "en": {
      "name": "Cucumber Jepan",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Cucumber Jepan"
    },
    "id": {
      "name": "Cucumber Jepan",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Cucumber Jepan"
    },
    "ru": {
      "name": "Cucumber Jepan",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Cucumber Jepan"
    },
    "it": {
      "name": "Cucumber Jepan",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Cucumber Jepan"
    },
    "zh": {
      "name": "Cucumber Jepan",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Cucumber Jepan"
    },
    "uk": {
      "name": "Cucumber Jepan",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Cucumber Jepan"
    },
    "fr": {
      "name": "Cucumber Jepan",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Cucumber Jepan"
    }
  },
  {
    "visual": "white-cabbage",
    "category": "vegetables",
    "price": "Rp 13.000",
    "en": {
      "name": "White Cabbage",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "White Cabbage"
    },
    "id": {
      "name": "Kol Putih",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Kol Putih"
    },
    "ru": {
      "name": "White Cabbage",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "White Cabbage"
    },
    "it": {
      "name": "White Cabbage",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "White Cabbage"
    },
    "zh": {
      "name": "White Cabbage",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "White Cabbage"
    },
    "uk": {
      "name": "White Cabbage",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "White Cabbage"
    },
    "fr": {
      "name": "White Cabbage",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "White Cabbage"
    }
  },
  {
    "visual": "chinese-cabbage",
    "category": "vegetables",
    "price": "Rp 18.000",
    "en": {
      "name": "Chinese Cabbage",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Chinese Cabbage"
    },
    "id": {
      "name": "Sawi Putih",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Sawi Putih"
    },
    "ru": {
      "name": "Chinese Cabbage",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Chinese Cabbage"
    },
    "it": {
      "name": "Chinese Cabbage",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Chinese Cabbage"
    },
    "zh": {
      "name": "Chinese Cabbage",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Chinese Cabbage"
    },
    "uk": {
      "name": "Chinese Cabbage",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Chinese Cabbage"
    },
    "fr": {
      "name": "Chinese Cabbage",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Chinese Cabbage"
    }
  },
  {
    "visual": "sweet-corn",
    "category": "vegetables",
    "price": "Rp 14.000",
    "en": {
      "name": "Sweet Corn",
      "unit": "BUNCH",
      "tag": "Fresh",
      "detail": "",
      "description": "Sweet Corn"
    },
    "id": {
      "name": "Jagung Manis",
      "unit": "BUNCH",
      "tag": "Segar",
      "detail": "",
      "description": "Jagung Manis"
    },
    "ru": {
      "name": "Sweet Corn",
      "unit": "BUNCH",
      "tag": "Fresh",
      "detail": "",
      "description": "Sweet Corn"
    },
    "it": {
      "name": "Sweet Corn",
      "unit": "BUNCH",
      "tag": "Fresh",
      "detail": "",
      "description": "Sweet Corn"
    },
    "zh": {
      "name": "Sweet Corn",
      "unit": "BUNCH",
      "tag": "Fresh",
      "detail": "",
      "description": "Sweet Corn"
    },
    "uk": {
      "name": "Sweet Corn",
      "unit": "BUNCH",
      "tag": "Fresh",
      "detail": "",
      "description": "Sweet Corn"
    },
    "fr": {
      "name": "Sweet Corn",
      "unit": "BUNCH",
      "tag": "Fresh",
      "detail": "",
      "description": "Sweet Corn"
    }
  },
  {
    "visual": "beetroot",
    "category": "vegetables",
    "price": "Rp 40.000",
    "en": {
      "name": "Beetroot",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Beetroot"
    },
    "id": {
      "name": "Beetroot",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Beetroot"
    },
    "ru": {
      "name": "Beetroot",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Beetroot"
    },
    "it": {
      "name": "Beetroot",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Beetroot"
    },
    "zh": {
      "name": "Beetroot",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Beetroot"
    },
    "uk": {
      "name": "Beetroot",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Beetroot"
    },
    "fr": {
      "name": "Beetroot",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Beetroot"
    }
  },
  {
    "visual": "carrot-local",
    "category": "vegetables",
    "price": "Rp 22.000",
    "en": {
      "name": "Carrot Local",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Carrot Local"
    },
    "id": {
      "name": "Carrot Local",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Carrot Local"
    },
    "ru": {
      "name": "Carrot Local",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Carrot Local"
    },
    "it": {
      "name": "Carrot Local",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Carrot Local"
    },
    "zh": {
      "name": "Carrot Local",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Carrot Local"
    },
    "uk": {
      "name": "Carrot Local",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Carrot Local"
    },
    "fr": {
      "name": "Carrot Local",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Carrot Local"
    }
  },
  {
    "visual": "carrot-import",
    "category": "vegetables",
    "price": "Rp 32.000",
    "en": {
      "name": "Carrot Import",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Carrot Import"
    },
    "id": {
      "name": "Wortel Import",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Wortel Import"
    },
    "ru": {
      "name": "Carrot Import",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Carrot Import"
    },
    "it": {
      "name": "Carrot Import",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Carrot Import"
    },
    "zh": {
      "name": "Carrot Import",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Carrot Import"
    },
    "uk": {
      "name": "Carrot Import",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Carrot Import"
    },
    "fr": {
      "name": "Carrot Import",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Carrot Import"
    }
  },
  {
    "visual": "baby-carrot",
    "category": "vegetables",
    "price": "Rp 34.000",
    "en": {
      "name": "Baby Carrot",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Baby Carrot"
    },
    "id": {
      "name": "Baby Carrot",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Baby Carrot"
    },
    "ru": {
      "name": "Baby Carrot",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Baby Carrot"
    },
    "it": {
      "name": "Baby Carrot",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Baby Carrot"
    },
    "zh": {
      "name": "Baby Carrot",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Baby Carrot"
    },
    "uk": {
      "name": "Baby Carrot",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Baby Carrot"
    },
    "fr": {
      "name": "Baby Carrot",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Baby Carrot"
    }
  },
  {
    "visual": "paprika-green",
    "category": "vegetables",
    "price": "Rp 59.000",
    "en": {
      "name": "Paprika Green",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Paprika Green"
    },
    "id": {
      "name": "Paprika Green",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Paprika Green"
    },
    "ru": {
      "name": "Paprika Green",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Paprika Green"
    },
    "it": {
      "name": "Paprika Green",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Paprika Green"
    },
    "zh": {
      "name": "Paprika Green",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Paprika Green"
    },
    "uk": {
      "name": "Paprika Green",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Paprika Green"
    },
    "fr": {
      "name": "Paprika Green",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Paprika Green"
    }
  },
  {
    "visual": "paprika-red",
    "category": "vegetables",
    "price": "Rp 69.000",
    "en": {
      "name": "Paprika Red",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Paprika Red"
    },
    "id": {
      "name": "Paprika Red",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Paprika Red"
    },
    "ru": {
      "name": "Paprika Red",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Paprika Red"
    },
    "it": {
      "name": "Paprika Red",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Paprika Red"
    },
    "zh": {
      "name": "Paprika Red",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Paprika Red"
    },
    "uk": {
      "name": "Paprika Red",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Paprika Red"
    },
    "fr": {
      "name": "Paprika Red",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Paprika Red"
    }
  },
  {
    "visual": "paprika-yellow",
    "category": "vegetables",
    "price": "Rp 75.000",
    "en": {
      "name": "Paprika Yellow",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Paprika Yellow"
    },
    "id": {
      "name": "Paprika Yellow",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Paprika Yellow"
    },
    "ru": {
      "name": "Paprika Yellow",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Paprika Yellow"
    },
    "it": {
      "name": "Paprika Yellow",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Paprika Yellow"
    },
    "zh": {
      "name": "Paprika Yellow",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Paprika Yellow"
    },
    "uk": {
      "name": "Paprika Yellow",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Paprika Yellow"
    },
    "fr": {
      "name": "Paprika Yellow",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Paprika Yellow"
    }
  },
  {
    "visual": "mix-paprika",
    "category": "vegetables",
    "price": "Rp 69.000",
    "en": {
      "name": "Mix Paprika",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Mix Paprika"
    },
    "id": {
      "name": "Mix Paprika",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Mix Paprika"
    },
    "ru": {
      "name": "Mix Paprika",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Mix Paprika"
    },
    "it": {
      "name": "Mix Paprika",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Mix Paprika"
    },
    "zh": {
      "name": "Mix Paprika",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Mix Paprika"
    },
    "uk": {
      "name": "Mix Paprika",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Mix Paprika"
    },
    "fr": {
      "name": "Mix Paprika",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Mix Paprika"
    }
  },
  {
    "visual": "purple-long-eggplant-terong-ungu",
    "category": "vegetables",
    "price": "Rp 20.000",
    "en": {
      "name": "Purple Long Eggplant Terong Ungu",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Purple Long Eggplant Terong Ungu"
    },
    "id": {
      "name": "Purple Long Eggplant Terong Ungu",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Purple Long Eggplant Terong Ungu"
    },
    "ru": {
      "name": "Purple Long Eggplant Terong Ungu",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Purple Long Eggplant Terong Ungu"
    },
    "it": {
      "name": "Purple Long Eggplant Terong Ungu",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Purple Long Eggplant Terong Ungu"
    },
    "zh": {
      "name": "Purple Long Eggplant Terong Ungu",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Purple Long Eggplant Terong Ungu"
    },
    "uk": {
      "name": "Purple Long Eggplant Terong Ungu",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Purple Long Eggplant Terong Ungu"
    },
    "fr": {
      "name": "Purple Long Eggplant Terong Ungu",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Purple Long Eggplant Terong Ungu"
    }
  },
  {
    "visual": "round-eggplant",
    "category": "vegetables",
    "price": "Rp 19.000",
    "en": {
      "name": "Round Eggplant",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Round Eggplant"
    },
    "id": {
      "name": "Terong Bulat",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Terong Bulat"
    },
    "ru": {
      "name": "Round Eggplant",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Round Eggplant"
    },
    "it": {
      "name": "Round Eggplant",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Round Eggplant"
    },
    "zh": {
      "name": "Round Eggplant",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Round Eggplant"
    },
    "uk": {
      "name": "Round Eggplant",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Round Eggplant"
    },
    "fr": {
      "name": "Round Eggplant",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Round Eggplant"
    }
  },
  {
    "visual": "green-long-eggplant",
    "category": "vegetables",
    "price": "Rp 19.000",
    "en": {
      "name": "Green Long Eggplant",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Green Long Eggplant"
    },
    "id": {
      "name": "Terong Hijau",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Terong Hijau"
    },
    "ru": {
      "name": "Green Long Eggplant",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Green Long Eggplant"
    },
    "it": {
      "name": "Green Long Eggplant",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Green Long Eggplant"
    },
    "zh": {
      "name": "Green Long Eggplant",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Green Long Eggplant"
    },
    "uk": {
      "name": "Green Long Eggplant",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Green Long Eggplant"
    },
    "fr": {
      "name": "Green Long Eggplant",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Green Long Eggplant"
    }
  },
  {
    "visual": "caisim",
    "category": "vegetables",
    "price": "Rp 19.000",
    "en": {
      "name": "Caisim",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Caisim"
    },
    "id": {
      "name": "Sayur Ijo",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Sayur Ijo"
    },
    "ru": {
      "name": "Caisim",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Caisim"
    },
    "it": {
      "name": "Caisim",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Caisim"
    },
    "zh": {
      "name": "Caisim",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Caisim"
    },
    "uk": {
      "name": "Caisim",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Caisim"
    },
    "fr": {
      "name": "Caisim",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Caisim"
    }
  },
  {
    "visual": "string-bean",
    "category": "vegetables",
    "price": "Rp 28.000",
    "en": {
      "name": "String Bean",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "String Bean"
    },
    "id": {
      "name": "Buncis",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Buncis"
    },
    "ru": {
      "name": "String Bean",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "String Bean"
    },
    "it": {
      "name": "String Bean",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "String Bean"
    },
    "zh": {
      "name": "String Bean",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "String Bean"
    },
    "uk": {
      "name": "String Bean",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "String Bean"
    },
    "fr": {
      "name": "String Bean",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "String Bean"
    }
  },
  {
    "visual": "baby-string-bean",
    "category": "vegetables",
    "price": "Rp 57.000",
    "en": {
      "name": "Baby String Bean",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Baby String Bean"
    },
    "id": {
      "name": "Baby Buncis",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Baby Buncis"
    },
    "ru": {
      "name": "Baby String Bean",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Baby String Bean"
    },
    "it": {
      "name": "Baby String Bean",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Baby String Bean"
    },
    "zh": {
      "name": "Baby String Bean",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Baby String Bean"
    },
    "uk": {
      "name": "Baby String Bean",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Baby String Bean"
    },
    "fr": {
      "name": "Baby String Bean",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Baby String Bean"
    }
  },
  {
    "visual": "sayur-gondo",
    "category": "vegetables",
    "price": "Rp 19.000",
    "en": {
      "name": "Sayur Gondo",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Sayur Gondo"
    },
    "id": {
      "name": "Sayur Gondo",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Sayur Gondo"
    },
    "ru": {
      "name": "Sayur Gondo",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Sayur Gondo"
    },
    "it": {
      "name": "Sayur Gondo",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Sayur Gondo"
    },
    "zh": {
      "name": "Sayur Gondo",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Sayur Gondo"
    },
    "uk": {
      "name": "Sayur Gondo",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Sayur Gondo"
    },
    "fr": {
      "name": "Sayur Gondo",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Sayur Gondo"
    }
  },
  {
    "visual": "pokcoy",
    "category": "vegetables",
    "price": "Rp 22.000",
    "en": {
      "name": "Pokcoy",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pokcoy"
    },
    "id": {
      "name": "Bok Choy",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Bok Choy"
    },
    "ru": {
      "name": "Pokcoy",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pokcoy"
    },
    "it": {
      "name": "Pokcoy",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pokcoy"
    },
    "zh": {
      "name": "Pokcoy",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pokcoy"
    },
    "uk": {
      "name": "Pokcoy",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pokcoy"
    },
    "fr": {
      "name": "Pokcoy",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pokcoy"
    }
  },
  {
    "visual": "red-cabbage",
    "category": "vegetables",
    "price": "Rp 57.000",
    "en": {
      "name": "Red Cabbage",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Red Cabbage"
    },
    "id": {
      "name": "Kol Ungu",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Kol Ungu"
    },
    "ru": {
      "name": "Red Cabbage",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Red Cabbage"
    },
    "it": {
      "name": "Red Cabbage",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Red Cabbage"
    },
    "zh": {
      "name": "Red Cabbage",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Red Cabbage"
    },
    "uk": {
      "name": "Red Cabbage",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Red Cabbage"
    },
    "fr": {
      "name": "Red Cabbage",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Red Cabbage"
    }
  },
  {
    "visual": "chayote",
    "category": "vegetables",
    "price": "Rp 13.000",
    "en": {
      "name": "Chayote",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Chayote"
    },
    "id": {
      "name": "Labu Siam",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Labu Siam"
    },
    "ru": {
      "name": "Chayote",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Chayote"
    },
    "it": {
      "name": "Chayote",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Chayote"
    },
    "zh": {
      "name": "Chayote",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Chayote"
    },
    "uk": {
      "name": "Chayote",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Chayote"
    },
    "fr": {
      "name": "Chayote",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Chayote"
    }
  },
  {
    "visual": "daikon",
    "category": "vegetables",
    "price": "Rp 19.000",
    "en": {
      "name": "Daikon",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Daikon"
    },
    "id": {
      "name": "Lobak Putih",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Lobak Putih"
    },
    "ru": {
      "name": "Daikon",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Daikon"
    },
    "it": {
      "name": "Daikon",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Daikon"
    },
    "zh": {
      "name": "Daikon",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Daikon"
    },
    "uk": {
      "name": "Daikon",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Daikon"
    },
    "fr": {
      "name": "Daikon",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Daikon"
    }
  },
  {
    "visual": "bean-sprouts",
    "category": "vegetables",
    "price": "Rp 19.000",
    "en": {
      "name": "Bean Sprouts",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Bean Sprouts"
    },
    "id": {
      "name": "Tauge",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Tauge"
    },
    "ru": {
      "name": "Bean Sprouts",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Bean Sprouts"
    },
    "it": {
      "name": "Bean Sprouts",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Bean Sprouts"
    },
    "zh": {
      "name": "Bean Sprouts",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Bean Sprouts"
    },
    "uk": {
      "name": "Bean Sprouts",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Bean Sprouts"
    },
    "fr": {
      "name": "Bean Sprouts",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Bean Sprouts"
    }
  },
  {
    "visual": "baby-corn",
    "category": "vegetables",
    "price": "Rp 69.000",
    "en": {
      "name": "Baby Corn",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Baby Corn"
    },
    "id": {
      "name": "Baby Corn",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Baby Corn"
    },
    "ru": {
      "name": "Baby Corn",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Baby Corn"
    },
    "it": {
      "name": "Baby Corn",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Baby Corn"
    },
    "zh": {
      "name": "Baby Corn",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Baby Corn"
    },
    "uk": {
      "name": "Baby Corn",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Baby Corn"
    },
    "fr": {
      "name": "Baby Corn",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Baby Corn"
    }
  },
  {
    "visual": "long-bean",
    "category": "vegetables",
    "price": "Rp 30.000",
    "en": {
      "name": "Long Bean",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Long Bean"
    },
    "id": {
      "name": "Kacang Panjang",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Kacang Panjang"
    },
    "ru": {
      "name": "Long Bean",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Long Bean"
    },
    "it": {
      "name": "Long Bean",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Long Bean"
    },
    "zh": {
      "name": "Long Bean",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Long Bean"
    },
    "uk": {
      "name": "Long Bean",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Long Bean"
    },
    "fr": {
      "name": "Long Bean",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Long Bean"
    }
  },
  {
    "visual": "ridge-ground",
    "category": "vegetables",
    "price": "Rp 19.000",
    "en": {
      "name": "Ridge Ground",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Ridge Ground"
    },
    "id": {
      "name": "Pare",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Pare"
    },
    "ru": {
      "name": "Ridge Ground",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Ridge Ground"
    },
    "it": {
      "name": "Ridge Ground",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Ridge Ground"
    },
    "zh": {
      "name": "Ridge Ground",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Ridge Ground"
    },
    "uk": {
      "name": "Ridge Ground",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Ridge Ground"
    },
    "fr": {
      "name": "Ridge Ground",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Ridge Ground"
    }
  },
  {
    "visual": "asparagus",
    "category": "vegetables",
    "price": "Rp 163.000",
    "en": {
      "name": "Asparagus",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Asparagus"
    },
    "id": {
      "name": "Asparagus",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Asparagus"
    },
    "ru": {
      "name": "Asparagus",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Asparagus"
    },
    "it": {
      "name": "Asparagus",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Asparagus"
    },
    "zh": {
      "name": "Asparagus",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Asparagus"
    },
    "uk": {
      "name": "Asparagus",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Asparagus"
    },
    "fr": {
      "name": "Asparagus",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Asparagus"
    }
  },
  {
    "visual": "bitter-melon",
    "category": "vegetables",
    "price": "Rp 19.000",
    "en": {
      "name": "Bitter Melon",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Bitter Melon"
    },
    "id": {
      "name": "Pare",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Pare"
    },
    "ru": {
      "name": "Bitter Melon",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Bitter Melon"
    },
    "it": {
      "name": "Bitter Melon",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Bitter Melon"
    },
    "zh": {
      "name": "Bitter Melon",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Bitter Melon"
    },
    "uk": {
      "name": "Bitter Melon",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Bitter Melon"
    },
    "fr": {
      "name": "Bitter Melon",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Bitter Melon"
    }
  },
  {
    "visual": "zucchini-green",
    "category": "vegetables",
    "price": "Rp 45.000",
    "en": {
      "name": "Zucchini Green",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Zucchini Green"
    },
    "id": {
      "name": "Zucchini Green",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Zucchini Green"
    },
    "ru": {
      "name": "Zucchini Green",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Zucchini Green"
    },
    "it": {
      "name": "Zucchini Green",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Zucchini Green"
    },
    "zh": {
      "name": "Zucchini Green",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Zucchini Green"
    },
    "uk": {
      "name": "Zucchini Green",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Zucchini Green"
    },
    "fr": {
      "name": "Zucchini Green",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Zucchini Green"
    }
  },
  {
    "visual": "zucchini-kuning",
    "category": "vegetables",
    "price": "Rp 50.000",
    "en": {
      "name": "Zucchini Kuning",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Zucchini Kuning"
    },
    "id": {
      "name": "Zucchini Kuning",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Zucchini Kuning"
    },
    "ru": {
      "name": "Zucchini Kuning",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Zucchini Kuning"
    },
    "it": {
      "name": "Zucchini Kuning",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Zucchini Kuning"
    },
    "zh": {
      "name": "Zucchini Kuning",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Zucchini Kuning"
    },
    "uk": {
      "name": "Zucchini Kuning",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Zucchini Kuning"
    },
    "fr": {
      "name": "Zucchini Kuning",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Zucchini Kuning"
    }
  },
  {
    "visual": "celery-stick-import",
    "category": "vegetables",
    "price": "Rp 82.000",
    "en": {
      "name": "Celery Stick Import",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Celery Stick Import"
    },
    "id": {
      "name": "Celery Stick Import",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Celery Stick Import"
    },
    "ru": {
      "name": "Celery Stick Import",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Celery Stick Import"
    },
    "it": {
      "name": "Celery Stick Import",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Celery Stick Import"
    },
    "zh": {
      "name": "Celery Stick Import",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Celery Stick Import"
    },
    "uk": {
      "name": "Celery Stick Import",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Celery Stick Import"
    },
    "fr": {
      "name": "Celery Stick Import",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Celery Stick Import"
    }
  },
  {
    "visual": "pumpkin",
    "category": "vegetables",
    "price": "Rp 12.000",
    "en": {
      "name": "Pumpkin",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pumpkin"
    },
    "id": {
      "name": "Labu Min 3kg",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Labu Min 3kg"
    },
    "ru": {
      "name": "Pumpkin",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pumpkin"
    },
    "it": {
      "name": "Pumpkin",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pumpkin"
    },
    "zh": {
      "name": "Pumpkin",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pumpkin"
    },
    "uk": {
      "name": "Pumpkin",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pumpkin"
    },
    "fr": {
      "name": "Pumpkin",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pumpkin"
    }
  },
  {
    "visual": "red-radish",
    "category": "vegetables",
    "price": "Rp 119.000",
    "en": {
      "name": "Red Radish",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Red Radish"
    },
    "id": {
      "name": "Red Radish",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Red Radish"
    },
    "ru": {
      "name": "Red Radish",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Red Radish"
    },
    "it": {
      "name": "Red Radish",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Red Radish"
    },
    "zh": {
      "name": "Red Radish",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Red Radish"
    },
    "uk": {
      "name": "Red Radish",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Red Radish"
    },
    "fr": {
      "name": "Red Radish",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Red Radish"
    }
  },
  {
    "visual": "jack-fruit-vegetable-unripe",
    "category": "vegetables",
    "price": "Rp 25.000",
    "en": {
      "name": "Jack Fruit Vegetable Unripe",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Jack Fruit Vegetable Unripe"
    },
    "id": {
      "name": "Jack Fruit Vegetable Unripe",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Jack Fruit Vegetable Unripe"
    },
    "ru": {
      "name": "Jack Fruit Vegetable Unripe",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Jack Fruit Vegetable Unripe"
    },
    "it": {
      "name": "Jack Fruit Vegetable Unripe",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Jack Fruit Vegetable Unripe"
    },
    "zh": {
      "name": "Jack Fruit Vegetable Unripe",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Jack Fruit Vegetable Unripe"
    },
    "uk": {
      "name": "Jack Fruit Vegetable Unripe",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Jack Fruit Vegetable Unripe"
    },
    "fr": {
      "name": "Jack Fruit Vegetable Unripe",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Jack Fruit Vegetable Unripe"
    }
  },
  {
    "visual": "green-papaya",
    "category": "vegetables",
    "price": "Rp 13.000",
    "en": {
      "name": "Green Papaya",
      "unit": "PIECES",
      "tag": "Fresh",
      "detail": "",
      "description": "Green Papaya"
    },
    "id": {
      "name": "Papaya Sayur",
      "unit": "PIECES",
      "tag": "Segar",
      "detail": "",
      "description": "Papaya Sayur"
    },
    "ru": {
      "name": "Green Papaya",
      "unit": "PIECES",
      "tag": "Fresh",
      "detail": "",
      "description": "Green Papaya"
    },
    "it": {
      "name": "Green Papaya",
      "unit": "PIECES",
      "tag": "Fresh",
      "detail": "",
      "description": "Green Papaya"
    },
    "zh": {
      "name": "Green Papaya",
      "unit": "PIECES",
      "tag": "Fresh",
      "detail": "",
      "description": "Green Papaya"
    },
    "uk": {
      "name": "Green Papaya",
      "unit": "PIECES",
      "tag": "Fresh",
      "detail": "",
      "description": "Green Papaya"
    },
    "fr": {
      "name": "Green Papaya",
      "unit": "PIECES",
      "tag": "Fresh",
      "detail": "",
      "description": "Green Papaya"
    }
  },
  {
    "visual": "baby-potato",
    "category": "vegetables",
    "price": "Rp 22.000",
    "en": {
      "name": "Baby Potato",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Baby Potato"
    },
    "id": {
      "name": "Baby Potato",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Baby Potato"
    },
    "ru": {
      "name": "Baby Potato",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Baby Potato"
    },
    "it": {
      "name": "Baby Potato",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Baby Potato"
    },
    "zh": {
      "name": "Baby Potato",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Baby Potato"
    },
    "uk": {
      "name": "Baby Potato",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Baby Potato"
    },
    "fr": {
      "name": "Baby Potato",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Baby Potato"
    }
  },
  {
    "visual": "potato-medium",
    "category": "vegetables",
    "price": "Rp 27.000",
    "en": {
      "name": "Potato Medium",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Potato Medium"
    },
    "id": {
      "name": "Potato Medium",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Potato Medium"
    },
    "ru": {
      "name": "Potato Medium",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Potato Medium"
    },
    "it": {
      "name": "Potato Medium",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Potato Medium"
    },
    "zh": {
      "name": "Potato Medium",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Potato Medium"
    },
    "uk": {
      "name": "Potato Medium",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Potato Medium"
    },
    "fr": {
      "name": "Potato Medium",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Potato Medium"
    }
  },
  {
    "visual": "potato-super",
    "category": "vegetables",
    "price": "Rp 29.000",
    "en": {
      "name": "Potato Super",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Potato Super"
    },
    "id": {
      "name": "Potato Super",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Potato Super"
    },
    "ru": {
      "name": "Potato Super",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Potato Super"
    },
    "it": {
      "name": "Potato Super",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Potato Super"
    },
    "zh": {
      "name": "Potato Super",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Potato Super"
    },
    "uk": {
      "name": "Potato Super",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Potato Super"
    },
    "fr": {
      "name": "Potato Super",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Potato Super"
    }
  },
  {
    "visual": "cassava-with-skin",
    "category": "vegetables",
    "price": "Rp 13.000",
    "en": {
      "name": "Cassava With Skin",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Cassava With Skin"
    },
    "id": {
      "name": "Cassava With Skin",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Cassava With Skin"
    },
    "ru": {
      "name": "Cassava With Skin",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Cassava With Skin"
    },
    "it": {
      "name": "Cassava With Skin",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Cassava With Skin"
    },
    "zh": {
      "name": "Cassava With Skin",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Cassava With Skin"
    },
    "uk": {
      "name": "Cassava With Skin",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Cassava With Skin"
    },
    "fr": {
      "name": "Cassava With Skin",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Cassava With Skin"
    }
  },
  {
    "visual": "cassava-peel",
    "category": "vegetables",
    "price": "Rp 15.000",
    "en": {
      "name": "Cassava Peel",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Cassava Peel"
    },
    "id": {
      "name": "Singkong Kupas",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Singkong Kupas"
    },
    "ru": {
      "name": "Cassava Peel",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Cassava Peel"
    },
    "it": {
      "name": "Cassava Peel",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Cassava Peel"
    },
    "zh": {
      "name": "Cassava Peel",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Cassava Peel"
    },
    "uk": {
      "name": "Cassava Peel",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Cassava Peel"
    },
    "fr": {
      "name": "Cassava Peel",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Cassava Peel"
    }
  },
  {
    "visual": "taro",
    "category": "vegetables",
    "price": "Rp 13.000",
    "en": {
      "name": "Taro",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Taro"
    },
    "id": {
      "name": "Keladi",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Keladi"
    },
    "ru": {
      "name": "Taro",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Taro"
    },
    "it": {
      "name": "Taro",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Taro"
    },
    "zh": {
      "name": "Taro",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Taro"
    },
    "uk": {
      "name": "Taro",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Taro"
    },
    "fr": {
      "name": "Taro",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Taro"
    }
  },
  {
    "visual": "sweet-honey-potato",
    "category": "vegetables",
    "price": "Rp 22.000",
    "en": {
      "name": "Sweet Honey Potato",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Sweet Honey Potato"
    },
    "id": {
      "name": "Ubi Madu",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Ubi Madu"
    },
    "ru": {
      "name": "Sweet Honey Potato",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Sweet Honey Potato"
    },
    "it": {
      "name": "Sweet Honey Potato",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Sweet Honey Potato"
    },
    "zh": {
      "name": "Sweet Honey Potato",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Sweet Honey Potato"
    },
    "uk": {
      "name": "Sweet Honey Potato",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Sweet Honey Potato"
    },
    "fr": {
      "name": "Sweet Honey Potato",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Sweet Honey Potato"
    }
  },
  {
    "visual": "purple-potato",
    "category": "vegetables",
    "price": "Rp 19.000",
    "en": {
      "name": "Purple Potato",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Purple Potato"
    },
    "id": {
      "name": "Sele Ungu",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Sele Ungu"
    },
    "ru": {
      "name": "Purple Potato",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Purple Potato"
    },
    "it": {
      "name": "Purple Potato",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Purple Potato"
    },
    "zh": {
      "name": "Purple Potato",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Purple Potato"
    },
    "uk": {
      "name": "Purple Potato",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Purple Potato"
    },
    "fr": {
      "name": "Purple Potato",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Purple Potato"
    }
  },
  {
    "visual": "orange-potato",
    "category": "vegetables",
    "price": "Rp 19.000",
    "en": {
      "name": "Orange Potato",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Orange Potato"
    },
    "id": {
      "name": "Orange Potato",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Orange Potato"
    },
    "ru": {
      "name": "Orange Potato",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Orange Potato"
    },
    "it": {
      "name": "Orange Potato",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Orange Potato"
    },
    "zh": {
      "name": "Orange Potato",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Orange Potato"
    },
    "uk": {
      "name": "Orange Potato",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Orange Potato"
    },
    "fr": {
      "name": "Orange Potato",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Orange Potato"
    }
  },
  {
    "visual": "ubi-malem",
    "category": "vegetables",
    "price": "Rp 13.000",
    "en": {
      "name": "Ubi Malem",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Ubi Malem"
    },
    "id": {
      "name": "Ubi Malem",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Ubi Malem"
    },
    "ru": {
      "name": "Ubi Malem",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Ubi Malem"
    },
    "it": {
      "name": "Ubi Malem",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Ubi Malem"
    },
    "zh": {
      "name": "Ubi Malem",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Ubi Malem"
    },
    "uk": {
      "name": "Ubi Malem",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Ubi Malem"
    },
    "fr": {
      "name": "Ubi Malem",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Ubi Malem"
    }
  },
  {
    "visual": "green-curly-lettuce",
    "category": "salads",
    "price": "Rp 34.000",
    "en": {
      "name": "Green Curly Lettuce",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Green Curly Lettuce"
    },
    "id": {
      "name": "Selada Kriting",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Selada Kriting"
    },
    "ru": {
      "name": "Green Curly Lettuce",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Green Curly Lettuce"
    },
    "it": {
      "name": "Green Curly Lettuce",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Green Curly Lettuce"
    },
    "zh": {
      "name": "Green Curly Lettuce",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Green Curly Lettuce"
    },
    "uk": {
      "name": "Green Curly Lettuce",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Green Curly Lettuce"
    },
    "fr": {
      "name": "Green Curly Lettuce",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Green Curly Lettuce"
    }
  },
  {
    "visual": "baby-romana",
    "category": "salads",
    "price": "Rp 35.000",
    "en": {
      "name": "Baby Romana",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Baby Romana"
    },
    "id": {
      "name": "Baby Romana",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Baby Romana"
    },
    "ru": {
      "name": "Baby Romana",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Baby Romana"
    },
    "it": {
      "name": "Baby Romana",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Baby Romana"
    },
    "zh": {
      "name": "Baby Romana",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Baby Romana"
    },
    "uk": {
      "name": "Baby Romana",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Baby Romana"
    },
    "fr": {
      "name": "Baby Romana",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Baby Romana"
    }
  },
  {
    "visual": "iceberg-lettuce",
    "category": "salads",
    "price": "Rp 32.000",
    "en": {
      "name": "Iceberg Lettuce",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Iceberg Lettuce"
    },
    "id": {
      "name": "Iceberg Lettuce",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Iceberg Lettuce"
    },
    "ru": {
      "name": "Iceberg Lettuce",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Iceberg Lettuce"
    },
    "it": {
      "name": "Iceberg Lettuce",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Iceberg Lettuce"
    },
    "zh": {
      "name": "Iceberg Lettuce",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Iceberg Lettuce"
    },
    "uk": {
      "name": "Iceberg Lettuce",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Iceberg Lettuce"
    },
    "fr": {
      "name": "Iceberg Lettuce",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Iceberg Lettuce"
    }
  },
  {
    "visual": "water-cress",
    "category": "salads",
    "price": "Rp 32.000",
    "en": {
      "name": "Water Cress",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Water Cress"
    },
    "id": {
      "name": "Selada Air",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Selada Air"
    },
    "ru": {
      "name": "Water Cress",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Water Cress"
    },
    "it": {
      "name": "Water Cress",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Water Cress"
    },
    "zh": {
      "name": "Water Cress",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Water Cress"
    },
    "uk": {
      "name": "Water Cress",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Water Cress"
    },
    "fr": {
      "name": "Water Cress",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Water Cress"
    }
  },
  {
    "visual": "local-spinach",
    "category": "salads",
    "price": "Rp 20.000",
    "en": {
      "name": "Local Spinach",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Local Spinach"
    },
    "id": {
      "name": "Bayam Akar",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Bayam Akar"
    },
    "ru": {
      "name": "Local Spinach",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Local Spinach"
    },
    "it": {
      "name": "Local Spinach",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Local Spinach"
    },
    "zh": {
      "name": "Local Spinach",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Local Spinach"
    },
    "uk": {
      "name": "Local Spinach",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Local Spinach"
    },
    "fr": {
      "name": "Local Spinach",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Local Spinach"
    }
  },
  {
    "visual": "bayam-potong",
    "category": "salads",
    "price": "Rp 19.000",
    "en": {
      "name": "Bayam Potong",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Bayam Potong"
    },
    "id": {
      "name": "Bayam Potong",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Bayam Potong"
    },
    "ru": {
      "name": "Bayam Potong",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Bayam Potong"
    },
    "it": {
      "name": "Bayam Potong",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Bayam Potong"
    },
    "zh": {
      "name": "Bayam Potong",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Bayam Potong"
    },
    "uk": {
      "name": "Bayam Potong",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Bayam Potong"
    },
    "fr": {
      "name": "Bayam Potong",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Bayam Potong"
    }
  },
  {
    "visual": "gonde",
    "category": "salads",
    "price": "Rp 25.000",
    "en": {
      "name": "Gonde",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Gonde"
    },
    "id": {
      "name": "Gonde",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Gonde"
    },
    "ru": {
      "name": "Gonde",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Gonde"
    },
    "it": {
      "name": "Gonde",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Gonde"
    },
    "zh": {
      "name": "Gonde",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Gonde"
    },
    "uk": {
      "name": "Gonde",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Gonde"
    },
    "fr": {
      "name": "Gonde",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Gonde"
    }
  },
  {
    "visual": "waterspinach",
    "category": "salads",
    "price": "Rp 19.000",
    "en": {
      "name": "Waterspinach",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Waterspinach"
    },
    "id": {
      "name": "Kangkung Akar",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Kangkung Akar"
    },
    "ru": {
      "name": "Waterspinach",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Waterspinach"
    },
    "it": {
      "name": "Waterspinach",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Waterspinach"
    },
    "zh": {
      "name": "Waterspinach",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Waterspinach"
    },
    "uk": {
      "name": "Waterspinach",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Waterspinach"
    },
    "fr": {
      "name": "Waterspinach",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Waterspinach"
    }
  },
  {
    "visual": "kangkung-lombok",
    "category": "salads",
    "price": "Rp 25.000",
    "en": {
      "name": "Kangkung Lombok",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Kangkung Lombok"
    },
    "id": {
      "name": "Kangkung Lombok",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Kangkung Lombok"
    },
    "ru": {
      "name": "Kangkung Lombok",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Kangkung Lombok"
    },
    "it": {
      "name": "Kangkung Lombok",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Kangkung Lombok"
    },
    "zh": {
      "name": "Kangkung Lombok",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Kangkung Lombok"
    },
    "uk": {
      "name": "Kangkung Lombok",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Kangkung Lombok"
    },
    "fr": {
      "name": "Kangkung Lombok",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Kangkung Lombok"
    }
  },
  {
    "visual": "ruccola",
    "category": "salads",
    "price": "Rp 47.000",
    "en": {
      "name": "Ruccola",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Ruccola"
    },
    "id": {
      "name": "Ruccola",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Ruccola"
    },
    "ru": {
      "name": "Ruccola",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Ruccola"
    },
    "it": {
      "name": "Ruccola",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Ruccola"
    },
    "zh": {
      "name": "Ruccola",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Ruccola"
    },
    "uk": {
      "name": "Ruccola",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Ruccola"
    },
    "fr": {
      "name": "Ruccola",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Ruccola"
    }
  },
  {
    "visual": "kale-nero",
    "category": "salads",
    "price": "Rp 60.000",
    "en": {
      "name": "Kale Nero",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Kale Nero"
    },
    "id": {
      "name": "Kale Nero",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Kale Nero"
    },
    "ru": {
      "name": "Kale Nero",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Kale Nero"
    },
    "it": {
      "name": "Kale Nero",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Kale Nero"
    },
    "zh": {
      "name": "Kale Nero",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Kale Nero"
    },
    "uk": {
      "name": "Kale Nero",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Kale Nero"
    },
    "fr": {
      "name": "Kale Nero",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Kale Nero"
    }
  },
  {
    "visual": "kale-kriting",
    "category": "salads",
    "price": "Rp 60.000",
    "en": {
      "name": "Kale Kriting",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Kale Kriting"
    },
    "id": {
      "name": "Kale Kriting",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Kale Kriting"
    },
    "ru": {
      "name": "Kale Kriting",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Kale Kriting"
    },
    "it": {
      "name": "Kale Kriting",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Kale Kriting"
    },
    "zh": {
      "name": "Kale Kriting",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Kale Kriting"
    },
    "uk": {
      "name": "Kale Kriting",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Kale Kriting"
    },
    "fr": {
      "name": "Kale Kriting",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Kale Kriting"
    }
  },
  {
    "visual": "wail",
    "category": "salads",
    "price": "Rp 94.000",
    "en": {
      "name": "Wail",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Wail"
    },
    "id": {
      "name": "Wail",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Wail"
    },
    "ru": {
      "name": "Wail",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Wail"
    },
    "it": {
      "name": "Wail",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Wail"
    },
    "zh": {
      "name": "Wail",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Wail"
    },
    "uk": {
      "name": "Wail",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Wail"
    },
    "fr": {
      "name": "Wail",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Wail"
    }
  },
  {
    "visual": "mix-lettuce",
    "category": "salads",
    "price": "Rp 55.000",
    "en": {
      "name": "Mix Lettuce",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Mix Lettuce"
    },
    "id": {
      "name": "Mix Lettuce",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Mix Lettuce"
    },
    "ru": {
      "name": "Mix Lettuce",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Mix Lettuce"
    },
    "it": {
      "name": "Mix Lettuce",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Mix Lettuce"
    },
    "zh": {
      "name": "Mix Lettuce",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Mix Lettuce"
    },
    "uk": {
      "name": "Mix Lettuce",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Mix Lettuce"
    },
    "fr": {
      "name": "Mix Lettuce",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Mix Lettuce"
    }
  },
  {
    "visual": "english-spinach",
    "category": "salads",
    "price": "Rp 44.000",
    "en": {
      "name": "English Spinach",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "English Spinach"
    },
    "id": {
      "name": "English Spinach",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "English Spinach"
    },
    "ru": {
      "name": "English Spinach",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "English Spinach"
    },
    "it": {
      "name": "English Spinach",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "English Spinach"
    },
    "zh": {
      "name": "English Spinach",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "English Spinach"
    },
    "uk": {
      "name": "English Spinach",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "English Spinach"
    },
    "fr": {
      "name": "English Spinach",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "English Spinach"
    }
  },
  {
    "visual": "kailan",
    "category": "salads",
    "price": "Rp 50.000",
    "en": {
      "name": "Kailan",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Kailan"
    },
    "id": {
      "name": "Kailan",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Kailan"
    },
    "ru": {
      "name": "Kailan",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Kailan"
    },
    "it": {
      "name": "Kailan",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Kailan"
    },
    "zh": {
      "name": "Kailan",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Kailan"
    },
    "uk": {
      "name": "Kailan",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Kailan"
    },
    "fr": {
      "name": "Kailan",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Kailan"
    }
  },
  {
    "visual": "frizee",
    "category": "salads",
    "price": "Rp 69.000",
    "en": {
      "name": "Frizee",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Frizee"
    },
    "id": {
      "name": "Frizee",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Frizee"
    },
    "ru": {
      "name": "Frizee",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Frizee"
    },
    "it": {
      "name": "Frizee",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Frizee"
    },
    "zh": {
      "name": "Frizee",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Frizee"
    },
    "uk": {
      "name": "Frizee",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Frizee"
    },
    "fr": {
      "name": "Frizee",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Frizee"
    }
  },
  {
    "visual": "fanel",
    "category": "salads",
    "price": "Rp 82.000",
    "en": {
      "name": "Fanel",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Fanel"
    },
    "id": {
      "name": "Fanel",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Fanel"
    },
    "ru": {
      "name": "Fanel",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Fanel"
    },
    "it": {
      "name": "Fanel",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Fanel"
    },
    "zh": {
      "name": "Fanel",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Fanel"
    },
    "uk": {
      "name": "Fanel",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Fanel"
    },
    "fr": {
      "name": "Fanel",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Fanel"
    }
  },
  {
    "visual": "mizuna",
    "category": "salads",
    "price": "Rp 69.000",
    "en": {
      "name": "Mizuna",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Mizuna"
    },
    "id": {
      "name": "Mizuna",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Mizuna"
    },
    "ru": {
      "name": "Mizuna",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Mizuna"
    },
    "it": {
      "name": "Mizuna",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Mizuna"
    },
    "zh": {
      "name": "Mizuna",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Mizuna"
    },
    "uk": {
      "name": "Mizuna",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Mizuna"
    },
    "fr": {
      "name": "Mizuna",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Mizuna"
    }
  },
  {
    "visual": "radiasio",
    "category": "salads",
    "price": "Rp 57.000",
    "en": {
      "name": "Radiasio",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Radiasio"
    },
    "id": {
      "name": "Radiasio",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Radiasio"
    },
    "ru": {
      "name": "Radiasio",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Radiasio"
    },
    "it": {
      "name": "Radiasio",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Radiasio"
    },
    "zh": {
      "name": "Radiasio",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Radiasio"
    },
    "uk": {
      "name": "Radiasio",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Radiasio"
    },
    "fr": {
      "name": "Radiasio",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Radiasio"
    }
  },
  {
    "visual": "lolorosso",
    "category": "salads",
    "price": "Rp 55.000",
    "en": {
      "name": "Lolorosso",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Lolorosso"
    },
    "id": {
      "name": "Lolorosso",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Lolorosso"
    },
    "ru": {
      "name": "Lolorosso",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Lolorosso"
    },
    "it": {
      "name": "Lolorosso",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Lolorosso"
    },
    "zh": {
      "name": "Lolorosso",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Lolorosso"
    },
    "uk": {
      "name": "Lolorosso",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Lolorosso"
    },
    "fr": {
      "name": "Lolorosso",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Lolorosso"
    }
  },
  {
    "visual": "orange-sunkist",
    "category": "fruits",
    "price": "Rp 50.000",
    "en": {
      "name": "Orange Sunkist",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Orange Sunkist"
    },
    "id": {
      "name": "Orange Sunkist",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Orange Sunkist"
    },
    "ru": {
      "name": "Orange Sunkist",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Orange Sunkist"
    },
    "it": {
      "name": "Orange Sunkist",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Orange Sunkist"
    },
    "zh": {
      "name": "Orange Sunkist",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Orange Sunkist"
    },
    "uk": {
      "name": "Orange Sunkist",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Orange Sunkist"
    },
    "fr": {
      "name": "Orange Sunkist",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Orange Sunkist"
    }
  },
  {
    "visual": "orange-mandarin",
    "category": "fruits",
    "price": "Rp 69.000",
    "en": {
      "name": "Orange Mandarin",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Orange Mandarin"
    },
    "id": {
      "name": "Orange Mandarin",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Orange Mandarin"
    },
    "ru": {
      "name": "Orange Mandarin",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Orange Mandarin"
    },
    "it": {
      "name": "Orange Mandarin",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Orange Mandarin"
    },
    "zh": {
      "name": "Orange Mandarin",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Orange Mandarin"
    },
    "uk": {
      "name": "Orange Mandarin",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Orange Mandarin"
    },
    "fr": {
      "name": "Orange Mandarin",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Orange Mandarin"
    }
  },
  {
    "visual": "local-orange",
    "category": "fruits",
    "price": "Rp 32.000",
    "en": {
      "name": "Local Orange",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Local Orange"
    },
    "id": {
      "name": "Lumajang",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Lumajang"
    },
    "ru": {
      "name": "Local Orange",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Local Orange"
    },
    "it": {
      "name": "Local Orange",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Local Orange"
    },
    "zh": {
      "name": "Local Orange",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Local Orange"
    },
    "uk": {
      "name": "Local Orange",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Local Orange"
    },
    "fr": {
      "name": "Local Orange",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Local Orange"
    }
  },
  {
    "visual": "tangerine-kintamani",
    "category": "fruits",
    "price": "Rp 29.000",
    "en": {
      "name": "Tangerine Kintamani",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Tangerine Kintamani"
    },
    "id": {
      "name": "Jeruk Kintamani",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Jeruk Kintamani"
    },
    "ru": {
      "name": "Tangerine Kintamani",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Tangerine Kintamani"
    },
    "it": {
      "name": "Tangerine Kintamani",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Tangerine Kintamani"
    },
    "zh": {
      "name": "Tangerine Kintamani",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Tangerine Kintamani"
    },
    "uk": {
      "name": "Tangerine Kintamani",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Tangerine Kintamani"
    },
    "fr": {
      "name": "Tangerine Kintamani",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Tangerine Kintamani"
    }
  },
  {
    "visual": "lime",
    "category": "fruits",
    "price": "Rp 28.000",
    "en": {
      "name": "Lime",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Lime"
    },
    "id": {
      "name": "Jeruk Nipis",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Jeruk Nipis"
    },
    "ru": {
      "name": "Lime",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Lime"
    },
    "it": {
      "name": "Lime",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Lime"
    },
    "zh": {
      "name": "Lime",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Lime"
    },
    "uk": {
      "name": "Lime",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Lime"
    },
    "fr": {
      "name": "Lime",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Lime"
    }
  },
  {
    "visual": "limau",
    "category": "fruits",
    "price": "Rp 63.000",
    "en": {
      "name": "Limau",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Limau"
    },
    "id": {
      "name": "Lemo Bali",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Lemo Bali"
    },
    "ru": {
      "name": "Limau",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Limau"
    },
    "it": {
      "name": "Limau",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Limau"
    },
    "zh": {
      "name": "Limau",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Limau"
    },
    "uk": {
      "name": "Limau",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Limau"
    },
    "fr": {
      "name": "Limau",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Limau"
    }
  },
  {
    "visual": "lemon-local-ijo",
    "category": "fruits",
    "price": "Rp 25.000",
    "en": {
      "name": "Lemon Local Ijo",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Lemon Local Ijo"
    },
    "id": {
      "name": "Lemon Local Ijo",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Lemon Local Ijo"
    },
    "ru": {
      "name": "Lemon Local Ijo",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Lemon Local Ijo"
    },
    "it": {
      "name": "Lemon Local Ijo",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Lemon Local Ijo"
    },
    "zh": {
      "name": "Lemon Local Ijo",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Lemon Local Ijo"
    },
    "uk": {
      "name": "Lemon Local Ijo",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Lemon Local Ijo"
    },
    "fr": {
      "name": "Lemon Local Ijo",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Lemon Local Ijo"
    }
  },
  {
    "visual": "lemon-local-yellow-kuning",
    "category": "fruits",
    "price": "Rp 38.000",
    "en": {
      "name": "Lemon Local Yellow ( Kuning )",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Lemon Local Yellow ( Kuning )"
    },
    "id": {
      "name": "Lemon Local Yellow ( Kuning )",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Lemon Local Yellow ( Kuning )"
    },
    "ru": {
      "name": "Lemon Local Yellow ( Kuning )",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Lemon Local Yellow ( Kuning )"
    },
    "it": {
      "name": "Lemon Local Yellow ( Kuning )",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Lemon Local Yellow ( Kuning )"
    },
    "zh": {
      "name": "Lemon Local Yellow ( Kuning )",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Lemon Local Yellow ( Kuning )"
    },
    "uk": {
      "name": "Lemon Local Yellow ( Kuning )",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Lemon Local Yellow ( Kuning )"
    },
    "fr": {
      "name": "Lemon Local Yellow ( Kuning )",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Lemon Local Yellow ( Kuning )"
    }
  },
  {
    "visual": "lemon-import",
    "category": "fruits",
    "price": "Rp 69.000",
    "en": {
      "name": "Lemon Import",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Lemon Import"
    },
    "id": {
      "name": "Lemon Import",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Lemon Import"
    },
    "ru": {
      "name": "Lemon Import",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Lemon Import"
    },
    "it": {
      "name": "Lemon Import",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Lemon Import"
    },
    "zh": {
      "name": "Lemon Import",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Lemon Import"
    },
    "uk": {
      "name": "Lemon Import",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Lemon Import"
    },
    "fr": {
      "name": "Lemon Import",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Lemon Import"
    }
  },
  {
    "visual": "kafir-lime",
    "category": "fruits",
    "price": "Rp 75.000",
    "en": {
      "name": "Kafir Lime",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Kafir Lime"
    },
    "id": {
      "name": "Daun Jeruk",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Daun Jeruk"
    },
    "ru": {
      "name": "Kafir Lime",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Kafir Lime"
    },
    "it": {
      "name": "Kafir Lime",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Kafir Lime"
    },
    "zh": {
      "name": "Kafir Lime",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Kafir Lime"
    },
    "uk": {
      "name": "Kafir Lime",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Kafir Lime"
    },
    "fr": {
      "name": "Kafir Lime",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Kafir Lime"
    }
  },
  {
    "visual": "pomelo",
    "category": "fruits",
    "price": "Rp 38.000",
    "en": {
      "name": "Pomelo",
      "unit": "PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Pomelo"
    },
    "id": {
      "name": "Jeruk Bali",
      "unit": "PCS",
      "tag": "Segar",
      "detail": "",
      "description": "Jeruk Bali"
    },
    "ru": {
      "name": "Pomelo",
      "unit": "PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Pomelo"
    },
    "it": {
      "name": "Pomelo",
      "unit": "PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Pomelo"
    },
    "zh": {
      "name": "Pomelo",
      "unit": "PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Pomelo"
    },
    "uk": {
      "name": "Pomelo",
      "unit": "PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Pomelo"
    },
    "fr": {
      "name": "Pomelo",
      "unit": "PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Pomelo"
    }
  },
  {
    "visual": "apel-fuji",
    "category": "fruits",
    "price": "Rp 60.000",
    "en": {
      "name": "Apel Fuji",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Apel Fuji"
    },
    "id": {
      "name": "Apel Fuji",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Apel Fuji"
    },
    "ru": {
      "name": "Apel Fuji",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Apel Fuji"
    },
    "it": {
      "name": "Apel Fuji",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Apel Fuji"
    },
    "zh": {
      "name": "Apel Fuji",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Apel Fuji"
    },
    "uk": {
      "name": "Apel Fuji",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Apel Fuji"
    },
    "fr": {
      "name": "Apel Fuji",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Apel Fuji"
    }
  },
  {
    "visual": "apel-fuji-premium",
    "category": "fruits",
    "price": "Rp 69.000",
    "en": {
      "name": "Apel Fuji Premium",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Apel Fuji Premium"
    },
    "id": {
      "name": "Apel Fuji Premium",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Apel Fuji Premium"
    },
    "ru": {
      "name": "Apel Fuji Premium",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Apel Fuji Premium"
    },
    "it": {
      "name": "Apel Fuji Premium",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Apel Fuji Premium"
    },
    "zh": {
      "name": "Apel Fuji Premium",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Apel Fuji Premium"
    },
    "uk": {
      "name": "Apel Fuji Premium",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Apel Fuji Premium"
    },
    "fr": {
      "name": "Apel Fuji Premium",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Apel Fuji Premium"
    }
  },
  {
    "visual": "dragon-fruit-red",
    "category": "fruits",
    "price": "Rp 35.000",
    "en": {
      "name": "Dragon Fruit Red",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Dragon Fruit Red"
    },
    "id": {
      "name": "Dragon Fruit Red",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Dragon Fruit Red"
    },
    "ru": {
      "name": "Dragon Fruit Red",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Dragon Fruit Red"
    },
    "it": {
      "name": "Dragon Fruit Red",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Dragon Fruit Red"
    },
    "zh": {
      "name": "Dragon Fruit Red",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Dragon Fruit Red"
    },
    "uk": {
      "name": "Dragon Fruit Red",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Dragon Fruit Red"
    },
    "fr": {
      "name": "Dragon Fruit Red",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Dragon Fruit Red"
    }
  },
  {
    "visual": "date",
    "category": "fruits",
    "price": "Rp 63.000",
    "en": {
      "name": "Date",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Date"
    },
    "id": {
      "name": "Kurma",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Kurma"
    },
    "ru": {
      "name": "Date",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Date"
    },
    "it": {
      "name": "Date",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Date"
    },
    "zh": {
      "name": "Date",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Date"
    },
    "uk": {
      "name": "Date",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Date"
    },
    "fr": {
      "name": "Date",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Date"
    }
  },
  {
    "visual": "avocado-biasa",
    "category": "fruits",
    "price": "Rp 48.000",
    "en": {
      "name": "Avocado Biasa",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Avocado Biasa"
    },
    "id": {
      "name": "Avocado Biasa",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Avocado Biasa"
    },
    "ru": {
      "name": "Avocado Biasa",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Avocado Biasa"
    },
    "it": {
      "name": "Avocado Biasa",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Avocado Biasa"
    },
    "zh": {
      "name": "Avocado Biasa",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Avocado Biasa"
    },
    "uk": {
      "name": "Avocado Biasa",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Avocado Biasa"
    },
    "fr": {
      "name": "Avocado Biasa",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Avocado Biasa"
    }
  },
  {
    "visual": "avocado-mentega",
    "category": "fruits",
    "price": "Rp 59.000",
    "en": {
      "name": "Avocado Mentega",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Avocado Mentega"
    },
    "id": {
      "name": "Avocado Mentega",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Avocado Mentega"
    },
    "ru": {
      "name": "Avocado Mentega",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Avocado Mentega"
    },
    "it": {
      "name": "Avocado Mentega",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Avocado Mentega"
    },
    "zh": {
      "name": "Avocado Mentega",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Avocado Mentega"
    },
    "uk": {
      "name": "Avocado Mentega",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Avocado Mentega"
    },
    "fr": {
      "name": "Avocado Mentega",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Avocado Mentega"
    }
  },
  {
    "visual": "tamarillo",
    "category": "fruits",
    "price": "Rp 33.000",
    "en": {
      "name": "Tamarillo",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Tamarillo"
    },
    "id": {
      "name": "Terong Belanda",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Terong Belanda"
    },
    "ru": {
      "name": "Tamarillo",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Tamarillo"
    },
    "it": {
      "name": "Tamarillo",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Tamarillo"
    },
    "zh": {
      "name": "Tamarillo",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Tamarillo"
    },
    "uk": {
      "name": "Tamarillo",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Tamarillo"
    },
    "fr": {
      "name": "Tamarillo",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Tamarillo"
    }
  },
  {
    "visual": "sour-passion-fruit",
    "category": "fruits",
    "price": "Rp 50.000",
    "en": {
      "name": "Sour Passion Fruit",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Sour Passion Fruit"
    },
    "id": {
      "name": "Sour Passion Fruit",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Sour Passion Fruit"
    },
    "ru": {
      "name": "Sour Passion Fruit",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Sour Passion Fruit"
    },
    "it": {
      "name": "Sour Passion Fruit",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Sour Passion Fruit"
    },
    "zh": {
      "name": "Sour Passion Fruit",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Sour Passion Fruit"
    },
    "uk": {
      "name": "Sour Passion Fruit",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Sour Passion Fruit"
    },
    "fr": {
      "name": "Sour Passion Fruit",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Sour Passion Fruit"
    }
  },
  {
    "visual": "sweet-passion-fruit",
    "category": "fruits",
    "price": "Rp 88.000",
    "en": {
      "name": "Sweet Passion Fruit",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Sweet Passion Fruit"
    },
    "id": {
      "name": "Sweet Passion Fruit",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Sweet Passion Fruit"
    },
    "ru": {
      "name": "Sweet Passion Fruit",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Sweet Passion Fruit"
    },
    "it": {
      "name": "Sweet Passion Fruit",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Sweet Passion Fruit"
    },
    "zh": {
      "name": "Sweet Passion Fruit",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Sweet Passion Fruit"
    },
    "uk": {
      "name": "Sweet Passion Fruit",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Sweet Passion Fruit"
    },
    "fr": {
      "name": "Sweet Passion Fruit",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Sweet Passion Fruit"
    }
  },
  {
    "visual": "strawberries",
    "category": "fruits",
    "price": "Rp 100.000",
    "en": {
      "name": "Strawberries",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Strawberries"
    },
    "id": {
      "name": "Strawberries",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Strawberries"
    },
    "ru": {
      "name": "Strawberries",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Strawberries"
    },
    "it": {
      "name": "Strawberries",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Strawberries"
    },
    "zh": {
      "name": "Strawberries",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Strawberries"
    },
    "uk": {
      "name": "Strawberries",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Strawberries"
    },
    "fr": {
      "name": "Strawberries",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Strawberries"
    }
  },
  {
    "visual": "mango-madu",
    "category": "fruits",
    "price": "Rp 34.000",
    "en": {
      "name": "Mango Madu",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Mango Madu"
    },
    "id": {
      "name": "Mango Madu",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Mango Madu"
    },
    "ru": {
      "name": "Mango Madu",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Mango Madu"
    },
    "it": {
      "name": "Mango Madu",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Mango Madu"
    },
    "zh": {
      "name": "Mango Madu",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Mango Madu"
    },
    "uk": {
      "name": "Mango Madu",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Mango Madu"
    },
    "fr": {
      "name": "Mango Madu",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Mango Madu"
    }
  },
  {
    "visual": "mangossteen",
    "category": "fruits",
    "price": "Rp 57.000",
    "en": {
      "name": "Mangossteen",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Mangossteen"
    },
    "id": {
      "name": "Manggis",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Manggis"
    },
    "ru": {
      "name": "Mangossteen",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Mangossteen"
    },
    "it": {
      "name": "Mangossteen",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Mangossteen"
    },
    "zh": {
      "name": "Mangossteen",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Mangossteen"
    },
    "uk": {
      "name": "Mangossteen",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Mangossteen"
    },
    "fr": {
      "name": "Mangossteen",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Mangossteen"
    }
  },
  {
    "visual": "red-watermelon",
    "category": "fruits",
    "price": "Rp 18.000",
    "en": {
      "name": "Red Watermelon",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Red Watermelon"
    },
    "id": {
      "name": "Red Watermelon",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Red Watermelon"
    },
    "ru": {
      "name": "Red Watermelon",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Red Watermelon"
    },
    "it": {
      "name": "Red Watermelon",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Red Watermelon"
    },
    "zh": {
      "name": "Red Watermelon",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Red Watermelon"
    },
    "uk": {
      "name": "Red Watermelon",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Red Watermelon"
    },
    "fr": {
      "name": "Red Watermelon",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Red Watermelon"
    }
  },
  {
    "visual": "yellow-watermelon",
    "category": "fruits",
    "price": "Rp 19.000",
    "en": {
      "name": "Yellow Watermelon",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Yellow Watermelon"
    },
    "id": {
      "name": "Yellow Watermelon",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Yellow Watermelon"
    },
    "ru": {
      "name": "Yellow Watermelon",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Yellow Watermelon"
    },
    "it": {
      "name": "Yellow Watermelon",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Yellow Watermelon"
    },
    "zh": {
      "name": "Yellow Watermelon",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Yellow Watermelon"
    },
    "uk": {
      "name": "Yellow Watermelon",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Yellow Watermelon"
    },
    "fr": {
      "name": "Yellow Watermelon",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Yellow Watermelon"
    }
  },
  {
    "visual": "honey-melon-orange",
    "category": "fruits",
    "price": "Rp 19.000",
    "en": {
      "name": "Honey Melon Orange",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Honey Melon Orange"
    },
    "id": {
      "name": "Honey Melon Orange",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Honey Melon Orange"
    },
    "ru": {
      "name": "Honey Melon Orange",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Honey Melon Orange"
    },
    "it": {
      "name": "Honey Melon Orange",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Honey Melon Orange"
    },
    "zh": {
      "name": "Honey Melon Orange",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Honey Melon Orange"
    },
    "uk": {
      "name": "Honey Melon Orange",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Honey Melon Orange"
    },
    "fr": {
      "name": "Honey Melon Orange",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Honey Melon Orange"
    }
  },
  {
    "visual": "pineapple-honey",
    "category": "fruits",
    "price": "Rp 15.000",
    "en": {
      "name": "Pineapple Honey",
      "unit": "PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Pineapple Honey"
    },
    "id": {
      "name": "Pineapple Honey",
      "unit": "PCS",
      "tag": "Segar",
      "detail": "",
      "description": "Pineapple Honey"
    },
    "ru": {
      "name": "Pineapple Honey",
      "unit": "PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Pineapple Honey"
    },
    "it": {
      "name": "Pineapple Honey",
      "unit": "PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Pineapple Honey"
    },
    "zh": {
      "name": "Pineapple Honey",
      "unit": "PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Pineapple Honey"
    },
    "uk": {
      "name": "Pineapple Honey",
      "unit": "PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Pineapple Honey"
    },
    "fr": {
      "name": "Pineapple Honey",
      "unit": "PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Pineapple Honey"
    }
  },
  {
    "visual": "pineapple-supreme-besar",
    "category": "fruits",
    "price": "Rp 48.000",
    "en": {
      "name": "Pineapple Supreme Besar",
      "unit": "PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Pineapple Supreme Besar"
    },
    "id": {
      "name": "Pineapple Supreme Besar",
      "unit": "PCS",
      "tag": "Segar",
      "detail": "",
      "description": "Pineapple Supreme Besar"
    },
    "ru": {
      "name": "Pineapple Supreme Besar",
      "unit": "PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Pineapple Supreme Besar"
    },
    "it": {
      "name": "Pineapple Supreme Besar",
      "unit": "PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Pineapple Supreme Besar"
    },
    "zh": {
      "name": "Pineapple Supreme Besar",
      "unit": "PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Pineapple Supreme Besar"
    },
    "uk": {
      "name": "Pineapple Supreme Besar",
      "unit": "PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Pineapple Supreme Besar"
    },
    "fr": {
      "name": "Pineapple Supreme Besar",
      "unit": "PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Pineapple Supreme Besar"
    }
  },
  {
    "visual": "peel-pineaple",
    "category": "fruits",
    "price": "Rp 19.000",
    "en": {
      "name": "Peel Pineaple",
      "unit": "PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Peel Pineaple"
    },
    "id": {
      "name": "Nanas Kupas",
      "unit": "PCS",
      "tag": "Segar",
      "detail": "",
      "description": "Nanas Kupas"
    },
    "ru": {
      "name": "Peel Pineaple",
      "unit": "PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Peel Pineaple"
    },
    "it": {
      "name": "Peel Pineaple",
      "unit": "PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Peel Pineaple"
    },
    "zh": {
      "name": "Peel Pineaple",
      "unit": "PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Peel Pineaple"
    },
    "uk": {
      "name": "Peel Pineaple",
      "unit": "PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Peel Pineaple"
    },
    "fr": {
      "name": "Peel Pineaple",
      "unit": "PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Peel Pineaple"
    }
  },
  {
    "visual": "pepaya-thailand",
    "category": "fruits",
    "price": "Rp 17.000",
    "en": {
      "name": "Pepaya Thailand",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pepaya Thailand"
    },
    "id": {
      "name": "Pepaya Thailand",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Pepaya Thailand"
    },
    "ru": {
      "name": "Pepaya Thailand",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pepaya Thailand"
    },
    "it": {
      "name": "Pepaya Thailand",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pepaya Thailand"
    },
    "zh": {
      "name": "Pepaya Thailand",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pepaya Thailand"
    },
    "uk": {
      "name": "Pepaya Thailand",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pepaya Thailand"
    },
    "fr": {
      "name": "Pepaya Thailand",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pepaya Thailand"
    }
  },
  {
    "visual": "pepaya-california",
    "category": "fruits",
    "price": "Rp 19.000",
    "en": {
      "name": "Pepaya California",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pepaya California"
    },
    "id": {
      "name": "Pepaya California",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Pepaya California"
    },
    "ru": {
      "name": "Pepaya California",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pepaya California"
    },
    "it": {
      "name": "Pepaya California",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pepaya California"
    },
    "zh": {
      "name": "Pepaya California",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pepaya California"
    },
    "uk": {
      "name": "Pepaya California",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pepaya California"
    },
    "fr": {
      "name": "Pepaya California",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pepaya California"
    }
  },
  {
    "visual": "red-apple-import",
    "category": "fruits",
    "price": "Rp 69.000",
    "en": {
      "name": "Red Apple Import",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Red Apple Import"
    },
    "id": {
      "name": "Red Apple Import",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Red Apple Import"
    },
    "ru": {
      "name": "Red Apple Import",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Red Apple Import"
    },
    "it": {
      "name": "Red Apple Import",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Red Apple Import"
    },
    "zh": {
      "name": "Red Apple Import",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Red Apple Import"
    },
    "uk": {
      "name": "Red Apple Import",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Red Apple Import"
    },
    "fr": {
      "name": "Red Apple Import",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Red Apple Import"
    }
  },
  {
    "visual": "local-black-grape",
    "category": "fruits",
    "price": "Rp 38.000",
    "en": {
      "name": "Local Black Grape",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Local Black Grape"
    },
    "id": {
      "name": "Anggur Item Local",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Anggur Item Local"
    },
    "ru": {
      "name": "Local Black Grape",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Local Black Grape"
    },
    "it": {
      "name": "Local Black Grape",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Local Black Grape"
    },
    "zh": {
      "name": "Local Black Grape",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Local Black Grape"
    },
    "uk": {
      "name": "Local Black Grape",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Local Black Grape"
    },
    "fr": {
      "name": "Local Black Grape",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Local Black Grape"
    }
  },
  {
    "visual": "red-grape-import",
    "category": "fruits",
    "price": "Rp 107.000",
    "en": {
      "name": "Red Grape Import",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Red Grape Import"
    },
    "id": {
      "name": "Red Grape Import",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Red Grape Import"
    },
    "ru": {
      "name": "Red Grape Import",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Red Grape Import"
    },
    "it": {
      "name": "Red Grape Import",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Red Grape Import"
    },
    "zh": {
      "name": "Red Grape Import",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Red Grape Import"
    },
    "uk": {
      "name": "Red Grape Import",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Red Grape Import"
    },
    "fr": {
      "name": "Red Grape Import",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Red Grape Import"
    }
  },
  {
    "visual": "green-grape-import",
    "category": "fruits",
    "price": "Rp 138.000",
    "en": {
      "name": "Green Grape Import",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Green Grape Import"
    },
    "id": {
      "name": "Green Grape Import",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Green Grape Import"
    },
    "ru": {
      "name": "Green Grape Import",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Green Grape Import"
    },
    "it": {
      "name": "Green Grape Import",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Green Grape Import"
    },
    "zh": {
      "name": "Green Grape Import",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Green Grape Import"
    },
    "uk": {
      "name": "Green Grape Import",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Green Grape Import"
    },
    "fr": {
      "name": "Green Grape Import",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Green Grape Import"
    }
  },
  {
    "visual": "red-guava",
    "category": "fruits",
    "price": "Rp 19.000",
    "en": {
      "name": "Red Guava",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Red Guava"
    },
    "id": {
      "name": "Jambu Merah",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Jambu Merah"
    },
    "ru": {
      "name": "Red Guava",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Red Guava"
    },
    "it": {
      "name": "Red Guava",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Red Guava"
    },
    "zh": {
      "name": "Red Guava",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Red Guava"
    },
    "uk": {
      "name": "Red Guava",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Red Guava"
    },
    "fr": {
      "name": "Red Guava",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Red Guava"
    }
  },
  {
    "visual": "salak-pondoh",
    "category": "fruits",
    "price": "Rp 32.000",
    "en": {
      "name": "Salak Pondoh",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Salak Pondoh"
    },
    "id": {
      "name": "Salak Pondoh",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Salak Pondoh"
    },
    "ru": {
      "name": "Salak Pondoh",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Salak Pondoh"
    },
    "it": {
      "name": "Salak Pondoh",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Salak Pondoh"
    },
    "zh": {
      "name": "Salak Pondoh",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Salak Pondoh"
    },
    "uk": {
      "name": "Salak Pondoh",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Salak Pondoh"
    },
    "fr": {
      "name": "Salak Pondoh",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Salak Pondoh"
    }
  },
  {
    "visual": "snake-fruit-bali",
    "category": "fruits",
    "price": "Rp 35.000",
    "en": {
      "name": "Snake Fruit Bali",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Snake Fruit Bali"
    },
    "id": {
      "name": "Salak Bali",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Salak Bali"
    },
    "ru": {
      "name": "Snake Fruit Bali",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Snake Fruit Bali"
    },
    "it": {
      "name": "Snake Fruit Bali",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Snake Fruit Bali"
    },
    "zh": {
      "name": "Snake Fruit Bali",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Snake Fruit Bali"
    },
    "uk": {
      "name": "Snake Fruit Bali",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Snake Fruit Bali"
    },
    "fr": {
      "name": "Snake Fruit Bali",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Snake Fruit Bali"
    }
  },
  {
    "visual": "salak-gula-pasir",
    "category": "fruits",
    "price": "Rp 53.000",
    "en": {
      "name": "Salak Gula Pasir",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Salak Gula Pasir"
    },
    "id": {
      "name": "Salak Gula Pasir",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Salak Gula Pasir"
    },
    "ru": {
      "name": "Salak Gula Pasir",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Salak Gula Pasir"
    },
    "it": {
      "name": "Salak Gula Pasir",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Salak Gula Pasir"
    },
    "zh": {
      "name": "Salak Gula Pasir",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Salak Gula Pasir"
    },
    "uk": {
      "name": "Salak Gula Pasir",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Salak Gula Pasir"
    },
    "fr": {
      "name": "Salak Gula Pasir",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Salak Gula Pasir"
    }
  },
  {
    "visual": "starfruit",
    "category": "fruits",
    "price": "Rp 27.000",
    "en": {
      "name": "Starfruit",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Starfruit"
    },
    "id": {
      "name": "Belimbing",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Belimbing"
    },
    "ru": {
      "name": "Starfruit",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Starfruit"
    },
    "it": {
      "name": "Starfruit",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Starfruit"
    },
    "zh": {
      "name": "Starfruit",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Starfruit"
    },
    "uk": {
      "name": "Starfruit",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Starfruit"
    },
    "fr": {
      "name": "Starfruit",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Starfruit"
    }
  },
  {
    "visual": "pear-century",
    "category": "fruits",
    "price": "Rp 44.000",
    "en": {
      "name": "Pear Century",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pear Century"
    },
    "id": {
      "name": "Pear Century",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Pear Century"
    },
    "ru": {
      "name": "Pear Century",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pear Century"
    },
    "it": {
      "name": "Pear Century",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pear Century"
    },
    "zh": {
      "name": "Pear Century",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pear Century"
    },
    "uk": {
      "name": "Pear Century",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pear Century"
    },
    "fr": {
      "name": "Pear Century",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pear Century"
    }
  },
  {
    "visual": "pear-yali",
    "category": "fruits",
    "price": "Rp 32.000",
    "en": {
      "name": "Pear Yali",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pear Yali"
    },
    "id": {
      "name": "Pear Yali",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Pear Yali"
    },
    "ru": {
      "name": "Pear Yali",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pear Yali"
    },
    "it": {
      "name": "Pear Yali",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pear Yali"
    },
    "zh": {
      "name": "Pear Yali",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pear Yali"
    },
    "uk": {
      "name": "Pear Yali",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pear Yali"
    },
    "fr": {
      "name": "Pear Yali",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pear Yali"
    }
  },
  {
    "visual": "apple-gs-china",
    "category": "fruits",
    "price": "Rp 57.000",
    "en": {
      "name": "Apple Gs China",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Apple Gs China"
    },
    "id": {
      "name": "Apple Gs China",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Apple Gs China"
    },
    "ru": {
      "name": "Apple Gs China",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Apple Gs China"
    },
    "it": {
      "name": "Apple Gs China",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Apple Gs China"
    },
    "zh": {
      "name": "Apple Gs China",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Apple Gs China"
    },
    "uk": {
      "name": "Apple Gs China",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Apple Gs China"
    },
    "fr": {
      "name": "Apple Gs China",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Apple Gs China"
    }
  },
  {
    "visual": "pear-ijo-import",
    "category": "fruits",
    "price": "Rp 57.000",
    "en": {
      "name": "Pear Ijo Import",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pear Ijo Import"
    },
    "id": {
      "name": "Pear Ijo Import",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Pear Ijo Import"
    },
    "ru": {
      "name": "Pear Ijo Import",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pear Ijo Import"
    },
    "it": {
      "name": "Pear Ijo Import",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pear Ijo Import"
    },
    "zh": {
      "name": "Pear Ijo Import",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pear Ijo Import"
    },
    "uk": {
      "name": "Pear Ijo Import",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pear Ijo Import"
    },
    "fr": {
      "name": "Pear Ijo Import",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pear Ijo Import"
    }
  },
  {
    "visual": "green-apple-local",
    "category": "fruits",
    "price": "Rp 38.000",
    "en": {
      "name": "Green Apple Local",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Green Apple Local"
    },
    "id": {
      "name": "Green Apple Local",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Green Apple Local"
    },
    "ru": {
      "name": "Green Apple Local",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Green Apple Local"
    },
    "it": {
      "name": "Green Apple Local",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Green Apple Local"
    },
    "zh": {
      "name": "Green Apple Local",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Green Apple Local"
    },
    "uk": {
      "name": "Green Apple Local",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Green Apple Local"
    },
    "fr": {
      "name": "Green Apple Local",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Green Apple Local"
    }
  },
  {
    "visual": "sweet-jackfruit-fruit",
    "category": "fruits",
    "price": "Rp 88.000",
    "en": {
      "name": "Sweet Jackfruit Fruit",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Sweet Jackfruit Fruit"
    },
    "id": {
      "name": "Sweet Jackfruit Fruit",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Sweet Jackfruit Fruit"
    },
    "ru": {
      "name": "Sweet Jackfruit Fruit",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Sweet Jackfruit Fruit"
    },
    "it": {
      "name": "Sweet Jackfruit Fruit",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Sweet Jackfruit Fruit"
    },
    "zh": {
      "name": "Sweet Jackfruit Fruit",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Sweet Jackfruit Fruit"
    },
    "uk": {
      "name": "Sweet Jackfruit Fruit",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Sweet Jackfruit Fruit"
    },
    "fr": {
      "name": "Sweet Jackfruit Fruit",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Sweet Jackfruit Fruit"
    }
  },
  {
    "visual": "frozen-strawberry",
    "category": "fruits",
    "price": "Rp 75.000",
    "en": {
      "name": "Frozen Strawberry",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Frozen Strawberry"
    },
    "id": {
      "name": "Frozen Strawberry",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Frozen Strawberry"
    },
    "ru": {
      "name": "Frozen Strawberry",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Frozen Strawberry"
    },
    "it": {
      "name": "Frozen Strawberry",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Frozen Strawberry"
    },
    "zh": {
      "name": "Frozen Strawberry",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Frozen Strawberry"
    },
    "uk": {
      "name": "Frozen Strawberry",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Frozen Strawberry"
    },
    "fr": {
      "name": "Frozen Strawberry",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Frozen Strawberry"
    }
  },
  {
    "visual": "frozen-mix-berry",
    "category": "fruits",
    "price": "Rp 157.000",
    "en": {
      "name": "Frozen Mix Berry",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Frozen Mix Berry"
    },
    "id": {
      "name": "Frozen Mix Berry",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Frozen Mix Berry"
    },
    "ru": {
      "name": "Frozen Mix Berry",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Frozen Mix Berry"
    },
    "it": {
      "name": "Frozen Mix Berry",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Frozen Mix Berry"
    },
    "zh": {
      "name": "Frozen Mix Berry",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Frozen Mix Berry"
    },
    "uk": {
      "name": "Frozen Mix Berry",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Frozen Mix Berry"
    },
    "fr": {
      "name": "Frozen Mix Berry",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Frozen Mix Berry"
    }
  },
  {
    "visual": "frozen-bluberry",
    "category": "fruits",
    "price": "Rp 168.000",
    "en": {
      "name": "Frozen Bluberry",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Frozen Bluberry"
    },
    "id": {
      "name": "Frozen Bluberry",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Frozen Bluberry"
    },
    "ru": {
      "name": "Frozen Bluberry",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Frozen Bluberry"
    },
    "it": {
      "name": "Frozen Bluberry",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Frozen Bluberry"
    },
    "zh": {
      "name": "Frozen Bluberry",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Frozen Bluberry"
    },
    "uk": {
      "name": "Frozen Bluberry",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Frozen Bluberry"
    },
    "fr": {
      "name": "Frozen Bluberry",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Frozen Bluberry"
    }
  },
  {
    "visual": "green-local-banana",
    "category": "fruits",
    "price": "Rp 23.000",
    "en": {
      "name": "Green Local Banana",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Green Local Banana"
    },
    "id": {
      "name": "Green Local Banana",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Green Local Banana"
    },
    "ru": {
      "name": "Green Local Banana",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Green Local Banana"
    },
    "it": {
      "name": "Green Local Banana",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Green Local Banana"
    },
    "zh": {
      "name": "Green Local Banana",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Green Local Banana"
    },
    "uk": {
      "name": "Green Local Banana",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Green Local Banana"
    },
    "fr": {
      "name": "Green Local Banana",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Green Local Banana"
    }
  },
  {
    "visual": "sweet-banana-small",
    "category": "fruits",
    "price": "Rp 22.000",
    "en": {
      "name": "Sweet Banana Small",
      "unit": "BUNCH",
      "tag": "Fresh",
      "detail": "",
      "description": "Sweet Banana Small"
    },
    "id": {
      "name": "Pisang Mas",
      "unit": "BUNCH",
      "tag": "Segar",
      "detail": "",
      "description": "Pisang Mas"
    },
    "ru": {
      "name": "Sweet Banana Small",
      "unit": "BUNCH",
      "tag": "Fresh",
      "detail": "",
      "description": "Sweet Banana Small"
    },
    "it": {
      "name": "Sweet Banana Small",
      "unit": "BUNCH",
      "tag": "Fresh",
      "detail": "",
      "description": "Sweet Banana Small"
    },
    "zh": {
      "name": "Sweet Banana Small",
      "unit": "BUNCH",
      "tag": "Fresh",
      "detail": "",
      "description": "Sweet Banana Small"
    },
    "uk": {
      "name": "Sweet Banana Small",
      "unit": "BUNCH",
      "tag": "Fresh",
      "detail": "",
      "description": "Sweet Banana Small"
    },
    "fr": {
      "name": "Sweet Banana Small",
      "unit": "BUNCH",
      "tag": "Fresh",
      "detail": "",
      "description": "Sweet Banana Small"
    }
  },
  {
    "visual": "banana-cavendish",
    "category": "fruits",
    "price": "Rp 33.000",
    "en": {
      "name": "Banana Cavendish",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Banana Cavendish"
    },
    "id": {
      "name": "Banana Cavendish",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Banana Cavendish"
    },
    "ru": {
      "name": "Banana Cavendish",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Banana Cavendish"
    },
    "it": {
      "name": "Banana Cavendish",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Banana Cavendish"
    },
    "zh": {
      "name": "Banana Cavendish",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Banana Cavendish"
    },
    "uk": {
      "name": "Banana Cavendish",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Banana Cavendish"
    },
    "fr": {
      "name": "Banana Cavendish",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Banana Cavendish"
    }
  },
  {
    "visual": "pisang-susu",
    "category": "fruits",
    "price": "Rp 23.000",
    "en": {
      "name": "Pisang Susu",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pisang Susu"
    },
    "id": {
      "name": "Pisang Susu",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Pisang Susu"
    },
    "ru": {
      "name": "Pisang Susu",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pisang Susu"
    },
    "it": {
      "name": "Pisang Susu",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pisang Susu"
    },
    "zh": {
      "name": "Pisang Susu",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pisang Susu"
    },
    "uk": {
      "name": "Pisang Susu",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pisang Susu"
    },
    "fr": {
      "name": "Pisang Susu",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pisang Susu"
    }
  },
  {
    "visual": "pisang-kepok",
    "category": "fruits",
    "price": "Rp 18.000",
    "en": {
      "name": "Pisang Kepok",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pisang Kepok"
    },
    "id": {
      "name": "Pisang Kepok",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Pisang Kepok"
    },
    "ru": {
      "name": "Pisang Kepok",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pisang Kepok"
    },
    "it": {
      "name": "Pisang Kepok",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pisang Kepok"
    },
    "zh": {
      "name": "Pisang Kepok",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pisang Kepok"
    },
    "uk": {
      "name": "Pisang Kepok",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pisang Kepok"
    },
    "fr": {
      "name": "Pisang Kepok",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pisang Kepok"
    }
  },
  {
    "visual": "pisang-raja",
    "category": "fruits",
    "price": "Rp 25.000",
    "en": {
      "name": "Pisang Raja",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pisang Raja"
    },
    "id": {
      "name": "Pisang Raja",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Pisang Raja"
    },
    "ru": {
      "name": "Pisang Raja",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pisang Raja"
    },
    "it": {
      "name": "Pisang Raja",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pisang Raja"
    },
    "zh": {
      "name": "Pisang Raja",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pisang Raja"
    },
    "uk": {
      "name": "Pisang Raja",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pisang Raja"
    },
    "fr": {
      "name": "Pisang Raja",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pisang Raja"
    }
  },
  {
    "visual": "pisang-tanduk",
    "category": "fruits",
    "price": "Rp 27.000",
    "en": {
      "name": "Pisang Tanduk",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pisang Tanduk"
    },
    "id": {
      "name": "Pisang Tanduk",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Pisang Tanduk"
    },
    "ru": {
      "name": "Pisang Tanduk",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pisang Tanduk"
    },
    "it": {
      "name": "Pisang Tanduk",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pisang Tanduk"
    },
    "zh": {
      "name": "Pisang Tanduk",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pisang Tanduk"
    },
    "uk": {
      "name": "Pisang Tanduk",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pisang Tanduk"
    },
    "fr": {
      "name": "Pisang Tanduk",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pisang Tanduk"
    }
  },
  {
    "visual": "ear-mushroom",
    "category": "vegetables",
    "price": "Rp 204.000",
    "en": {
      "name": "Ear Mushroom",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Ear Mushroom"
    },
    "id": {
      "name": "Jamur Kuping Kering",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Jamur Kuping Kering"
    },
    "ru": {
      "name": "Ear Mushroom",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Ear Mushroom"
    },
    "it": {
      "name": "Ear Mushroom",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Ear Mushroom"
    },
    "zh": {
      "name": "Ear Mushroom",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Ear Mushroom"
    },
    "uk": {
      "name": "Ear Mushroom",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Ear Mushroom"
    },
    "fr": {
      "name": "Ear Mushroom",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Ear Mushroom"
    }
  },
  {
    "visual": "buttom-mushroom",
    "category": "vegetables",
    "price": "Rp 58.000",
    "en": {
      "name": "Buttom Mushroom",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Buttom Mushroom"
    },
    "id": {
      "name": "Buttom Mushroom",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Buttom Mushroom"
    },
    "ru": {
      "name": "Buttom Mushroom",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Buttom Mushroom"
    },
    "it": {
      "name": "Buttom Mushroom",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Buttom Mushroom"
    },
    "zh": {
      "name": "Buttom Mushroom",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Buttom Mushroom"
    },
    "uk": {
      "name": "Buttom Mushroom",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Buttom Mushroom"
    },
    "fr": {
      "name": "Buttom Mushroom",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Buttom Mushroom"
    }
  },
  {
    "visual": "oyster-mushroom",
    "category": "vegetables",
    "price": "Rp 42.000",
    "en": {
      "name": "Oyster Mushroom",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Oyster Mushroom"
    },
    "id": {
      "name": "Oyster Mushroom",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Oyster Mushroom"
    },
    "ru": {
      "name": "Oyster Mushroom",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Oyster Mushroom"
    },
    "it": {
      "name": "Oyster Mushroom",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Oyster Mushroom"
    },
    "zh": {
      "name": "Oyster Mushroom",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Oyster Mushroom"
    },
    "uk": {
      "name": "Oyster Mushroom",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Oyster Mushroom"
    },
    "fr": {
      "name": "Oyster Mushroom",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Oyster Mushroom"
    }
  },
  {
    "visual": "enoki-mushroom",
    "category": "vegetables",
    "price": "Rp 9.000",
    "en": {
      "name": "Enoki Mushroom",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Enoki Mushroom"
    },
    "id": {
      "name": "Pack 110gram",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Pack 110gram"
    },
    "ru": {
      "name": "Enoki Mushroom",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Enoki Mushroom"
    },
    "it": {
      "name": "Enoki Mushroom",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Enoki Mushroom"
    },
    "zh": {
      "name": "Enoki Mushroom",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Enoki Mushroom"
    },
    "uk": {
      "name": "Enoki Mushroom",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Enoki Mushroom"
    },
    "fr": {
      "name": "Enoki Mushroom",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Enoki Mushroom"
    }
  },
  {
    "visual": "shimeji-white",
    "category": "vegetables",
    "price": "Rp 19.000",
    "en": {
      "name": "Shimeji White",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Shimeji White"
    },
    "id": {
      "name": "Pack",
      "unit": "1 PCS",
      "tag": "Segar",
      "detail": "",
      "description": "Pack"
    },
    "ru": {
      "name": "Shimeji White",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Shimeji White"
    },
    "it": {
      "name": "Shimeji White",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Shimeji White"
    },
    "zh": {
      "name": "Shimeji White",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Shimeji White"
    },
    "uk": {
      "name": "Shimeji White",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Shimeji White"
    },
    "fr": {
      "name": "Shimeji White",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Shimeji White"
    }
  },
  {
    "visual": "shimeji-brown",
    "category": "vegetables",
    "price": "Rp 19.000",
    "en": {
      "name": "Shimeji Brown",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Shimeji Brown"
    },
    "id": {
      "name": "Pack",
      "unit": "1 PCS",
      "tag": "Segar",
      "detail": "",
      "description": "Pack"
    },
    "ru": {
      "name": "Shimeji Brown",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Shimeji Brown"
    },
    "it": {
      "name": "Shimeji Brown",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Shimeji Brown"
    },
    "zh": {
      "name": "Shimeji Brown",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Shimeji Brown"
    },
    "uk": {
      "name": "Shimeji Brown",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Shimeji Brown"
    },
    "fr": {
      "name": "Shimeji Brown",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Shimeji Brown"
    }
  },
  {
    "visual": "portabello-mushroom",
    "category": "vegetables",
    "price": "Rp 163.000",
    "en": {
      "name": "Portabello Mushroom",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Portabello Mushroom"
    },
    "id": {
      "name": "Portabello Mushroom",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Portabello Mushroom"
    },
    "ru": {
      "name": "Portabello Mushroom",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Portabello Mushroom"
    },
    "it": {
      "name": "Portabello Mushroom",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Portabello Mushroom"
    },
    "zh": {
      "name": "Portabello Mushroom",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Portabello Mushroom"
    },
    "uk": {
      "name": "Portabello Mushroom",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Portabello Mushroom"
    },
    "fr": {
      "name": "Portabello Mushroom",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Portabello Mushroom"
    }
  },
  {
    "visual": "king-oyster",
    "category": "vegetables",
    "price": "Rp 28.000",
    "en": {
      "name": "King Oyster",
      "unit": "PACK",
      "tag": "Fresh",
      "detail": "",
      "description": "King Oyster"
    },
    "id": {
      "name": "King Oyster",
      "unit": "PACK",
      "tag": "Segar",
      "detail": "",
      "description": "King Oyster"
    },
    "ru": {
      "name": "King Oyster",
      "unit": "PACK",
      "tag": "Fresh",
      "detail": "",
      "description": "King Oyster"
    },
    "it": {
      "name": "King Oyster",
      "unit": "PACK",
      "tag": "Fresh",
      "detail": "",
      "description": "King Oyster"
    },
    "zh": {
      "name": "King Oyster",
      "unit": "PACK",
      "tag": "Fresh",
      "detail": "",
      "description": "King Oyster"
    },
    "uk": {
      "name": "King Oyster",
      "unit": "PACK",
      "tag": "Fresh",
      "detail": "",
      "description": "King Oyster"
    },
    "fr": {
      "name": "King Oyster",
      "unit": "PACK",
      "tag": "Fresh",
      "detail": "",
      "description": "King Oyster"
    }
  },
  {
    "visual": "shitake-mushroom",
    "category": "vegetables",
    "price": "Rp 160.000",
    "en": {
      "name": "Shitake Mushroom",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Shitake Mushroom"
    },
    "id": {
      "name": "Shitake Mushroom",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Shitake Mushroom"
    },
    "ru": {
      "name": "Shitake Mushroom",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Shitake Mushroom"
    },
    "it": {
      "name": "Shitake Mushroom",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Shitake Mushroom"
    },
    "zh": {
      "name": "Shitake Mushroom",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Shitake Mushroom"
    },
    "uk": {
      "name": "Shitake Mushroom",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Shitake Mushroom"
    },
    "fr": {
      "name": "Shitake Mushroom",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Shitake Mushroom"
    }
  },
  {
    "visual": "peel-coconut",
    "category": "fruits",
    "price": "Rp 18.000",
    "en": {
      "name": "Peel Coconut",
      "unit": "PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Peel Coconut"
    },
    "id": {
      "name": "Kelapa Kupas",
      "unit": "PCS",
      "tag": "Segar",
      "detail": "",
      "description": "Kelapa Kupas"
    },
    "ru": {
      "name": "Peel Coconut",
      "unit": "PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Peel Coconut"
    },
    "it": {
      "name": "Peel Coconut",
      "unit": "PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Peel Coconut"
    },
    "zh": {
      "name": "Peel Coconut",
      "unit": "PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Peel Coconut"
    },
    "uk": {
      "name": "Peel Coconut",
      "unit": "PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Peel Coconut"
    },
    "fr": {
      "name": "Peel Coconut",
      "unit": "PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Peel Coconut"
    }
  },
  {
    "visual": "fresh-grated-coconut",
    "category": "fruits",
    "price": "Rp 7.000",
    "en": {
      "name": "Fresh Grated Coconut",
      "unit": "PACK",
      "tag": "Fresh",
      "detail": "",
      "description": "Fresh Grated Coconut"
    },
    "id": {
      "name": "Fresh Grated Coconut",
      "unit": "PACK",
      "tag": "Segar",
      "detail": "",
      "description": "Fresh Grated Coconut"
    },
    "ru": {
      "name": "Fresh Grated Coconut",
      "unit": "PACK",
      "tag": "Fresh",
      "detail": "",
      "description": "Fresh Grated Coconut"
    },
    "it": {
      "name": "Fresh Grated Coconut",
      "unit": "PACK",
      "tag": "Fresh",
      "detail": "",
      "description": "Fresh Grated Coconut"
    },
    "zh": {
      "name": "Fresh Grated Coconut",
      "unit": "PACK",
      "tag": "Fresh",
      "detail": "",
      "description": "Fresh Grated Coconut"
    },
    "uk": {
      "name": "Fresh Grated Coconut",
      "unit": "PACK",
      "tag": "Fresh",
      "detail": "",
      "description": "Fresh Grated Coconut"
    },
    "fr": {
      "name": "Fresh Grated Coconut",
      "unit": "PACK",
      "tag": "Fresh",
      "detail": "",
      "description": "Fresh Grated Coconut"
    }
  },
  {
    "visual": "young-coconut",
    "category": "fruits",
    "price": "Rp 18.000",
    "en": {
      "name": "Young Coconut",
      "unit": "PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Young Coconut"
    },
    "id": {
      "name": "Young Coconut",
      "unit": "PCS",
      "tag": "Segar",
      "detail": "",
      "description": "Young Coconut"
    },
    "ru": {
      "name": "Young Coconut",
      "unit": "PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Young Coconut"
    },
    "it": {
      "name": "Young Coconut",
      "unit": "PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Young Coconut"
    },
    "zh": {
      "name": "Young Coconut",
      "unit": "PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Young Coconut"
    },
    "uk": {
      "name": "Young Coconut",
      "unit": "PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Young Coconut"
    },
    "fr": {
      "name": "Young Coconut",
      "unit": "PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Young Coconut"
    }
  },
  {
    "visual": "coconut-cream",
    "category": "fruits",
    "price": "Rp 98.000",
    "en": {
      "name": "Coconut Cream",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Coconut Cream"
    },
    "id": {
      "name": "Santan Kara 1l",
      "unit": "1 PCS",
      "tag": "Segar",
      "detail": "",
      "description": "Santan Kara 1l"
    },
    "ru": {
      "name": "Coconut Cream",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Coconut Cream"
    },
    "it": {
      "name": "Coconut Cream",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Coconut Cream"
    },
    "zh": {
      "name": "Coconut Cream",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Coconut Cream"
    },
    "uk": {
      "name": "Coconut Cream",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Coconut Cream"
    },
    "fr": {
      "name": "Coconut Cream",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Coconut Cream"
    }
  },
  {
    "visual": "coconut-powder",
    "category": "fruits",
    "price": "Rp 62.000",
    "en": {
      "name": "Coconut Powder",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Coconut Powder"
    },
    "id": {
      "name": "Coconut Powder",
      "unit": "1 PCS",
      "tag": "Segar",
      "detail": "",
      "description": "Coconut Powder"
    },
    "ru": {
      "name": "Coconut Powder",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Coconut Powder"
    },
    "it": {
      "name": "Coconut Powder",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Coconut Powder"
    },
    "zh": {
      "name": "Coconut Powder",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Coconut Powder"
    },
    "uk": {
      "name": "Coconut Powder",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Coconut Powder"
    },
    "fr": {
      "name": "Coconut Powder",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Coconut Powder"
    }
  },
  {
    "visual": "onion-bombay",
    "category": "vegetables",
    "price": "Rp 40.000",
    "en": {
      "name": "Onion Bombay",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Onion Bombay"
    },
    "id": {
      "name": "Onion Bombay",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Onion Bombay"
    },
    "ru": {
      "name": "Onion Bombay",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Onion Bombay"
    },
    "it": {
      "name": "Onion Bombay",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Onion Bombay"
    },
    "zh": {
      "name": "Onion Bombay",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Onion Bombay"
    },
    "uk": {
      "name": "Onion Bombay",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Onion Bombay"
    },
    "fr": {
      "name": "Onion Bombay",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Onion Bombay"
    }
  },
  {
    "visual": "red-onion",
    "category": "vegetables",
    "price": "Rp 82.000",
    "en": {
      "name": "Red Onion",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Red Onion"
    },
    "id": {
      "name": "Red Onion",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Red Onion"
    },
    "ru": {
      "name": "Red Onion",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Red Onion"
    },
    "it": {
      "name": "Red Onion",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Red Onion"
    },
    "zh": {
      "name": "Red Onion",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Red Onion"
    },
    "uk": {
      "name": "Red Onion",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Red Onion"
    },
    "fr": {
      "name": "Red Onion",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Red Onion"
    }
  },
  {
    "visual": "shallots-jumbo",
    "category": "vegetables",
    "price": "Rp 57.000",
    "en": {
      "name": "Shallots Jumbo",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Shallots Jumbo"
    },
    "id": {
      "name": "Bawang Merah",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Bawang Merah"
    },
    "ru": {
      "name": "Shallots Jumbo",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Shallots Jumbo"
    },
    "it": {
      "name": "Shallots Jumbo",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Shallots Jumbo"
    },
    "zh": {
      "name": "Shallots Jumbo",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Shallots Jumbo"
    },
    "uk": {
      "name": "Shallots Jumbo",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Shallots Jumbo"
    },
    "fr": {
      "name": "Shallots Jumbo",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Shallots Jumbo"
    }
  },
  {
    "visual": "clean-shallot",
    "category": "vegetables",
    "price": "Rp 63.000",
    "en": {
      "name": "Clean Shallot",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Clean Shallot"
    },
    "id": {
      "name": "Bawang Kupas",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Bawang Kupas"
    },
    "ru": {
      "name": "Clean Shallot",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Clean Shallot"
    },
    "it": {
      "name": "Clean Shallot",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Clean Shallot"
    },
    "zh": {
      "name": "Clean Shallot",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Clean Shallot"
    },
    "uk": {
      "name": "Clean Shallot",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Clean Shallot"
    },
    "fr": {
      "name": "Clean Shallot",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Clean Shallot"
    }
  },
  {
    "visual": "fried-shallot",
    "category": "vegetables",
    "price": "Rp 100.000",
    "en": {
      "name": "Fried Shallot",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Fried Shallot"
    },
    "id": {
      "name": "Bawang Goreng 500gr",
      "unit": "1 PCS",
      "tag": "Segar",
      "detail": "",
      "description": "Bawang Goreng 500gr"
    },
    "ru": {
      "name": "Fried Shallot",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Fried Shallot"
    },
    "it": {
      "name": "Fried Shallot",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Fried Shallot"
    },
    "zh": {
      "name": "Fried Shallot",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Fried Shallot"
    },
    "uk": {
      "name": "Fried Shallot",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Fried Shallot"
    },
    "fr": {
      "name": "Fried Shallot",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Fried Shallot"
    }
  },
  {
    "visual": "fried-shallot-250gr",
    "category": "vegetables",
    "price": "Rp 53.000",
    "en": {
      "name": "Fried Shallot (250gr)",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Fried Shallot (250gr)"
    },
    "id": {
      "name": "Bawang Goreng",
      "unit": "1 PCS",
      "tag": "Segar",
      "detail": "",
      "description": "Bawang Goreng"
    },
    "ru": {
      "name": "Fried Shallot (250gr)",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Fried Shallot (250gr)"
    },
    "it": {
      "name": "Fried Shallot (250gr)",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Fried Shallot (250gr)"
    },
    "zh": {
      "name": "Fried Shallot (250gr)",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Fried Shallot (250gr)"
    },
    "uk": {
      "name": "Fried Shallot (250gr)",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Fried Shallot (250gr)"
    },
    "fr": {
      "name": "Fried Shallot (250gr)",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Fried Shallot (250gr)"
    }
  },
  {
    "visual": "garlic",
    "category": "vegetables",
    "price": "Rp 57.000",
    "en": {
      "name": "Garlic",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Garlic"
    },
    "id": {
      "name": "Bawang Putih",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Bawang Putih"
    },
    "ru": {
      "name": "Garlic",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Garlic"
    },
    "it": {
      "name": "Garlic",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Garlic"
    },
    "zh": {
      "name": "Garlic",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Garlic"
    },
    "uk": {
      "name": "Garlic",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Garlic"
    },
    "fr": {
      "name": "Garlic",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Garlic"
    }
  },
  {
    "visual": "bawang-putih-kupas",
    "category": "vegetables",
    "price": "Rp 65.000",
    "en": {
      "name": "Bawang Putih Kupas",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Bawang Putih Kupas"
    },
    "id": {
      "name": "Clean Garlic",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Clean Garlic"
    },
    "ru": {
      "name": "Bawang Putih Kupas",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Bawang Putih Kupas"
    },
    "it": {
      "name": "Bawang Putih Kupas",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Bawang Putih Kupas"
    },
    "zh": {
      "name": "Bawang Putih Kupas",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Bawang Putih Kupas"
    },
    "uk": {
      "name": "Bawang Putih Kupas",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Bawang Putih Kupas"
    },
    "fr": {
      "name": "Bawang Putih Kupas",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Bawang Putih Kupas"
    }
  },
  {
    "visual": "bawang-putih-tunggal",
    "category": "vegetables",
    "price": "Rp 182.000",
    "en": {
      "name": "Bawang Putih Tunggal",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Bawang Putih Tunggal"
    },
    "id": {
      "name": "Bawang Putih Tunggal",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Bawang Putih Tunggal"
    },
    "ru": {
      "name": "Bawang Putih Tunggal",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Bawang Putih Tunggal"
    },
    "it": {
      "name": "Bawang Putih Tunggal",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Bawang Putih Tunggal"
    },
    "zh": {
      "name": "Bawang Putih Tunggal",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Bawang Putih Tunggal"
    },
    "uk": {
      "name": "Bawang Putih Tunggal",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Bawang Putih Tunggal"
    },
    "fr": {
      "name": "Bawang Putih Tunggal",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Bawang Putih Tunggal"
    }
  },
  {
    "visual": "spring-onion",
    "category": "vegetables",
    "price": "Rp 10.000",
    "en": {
      "name": "Spring Onion",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Spring Onion"
    },
    "id": {
      "name": "Spring Onion",
      "unit": "ONS",
      "tag": "Segar",
      "detail": "",
      "description": "Spring Onion"
    },
    "ru": {
      "name": "Spring Onion",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Spring Onion"
    },
    "it": {
      "name": "Spring Onion",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Spring Onion"
    },
    "zh": {
      "name": "Spring Onion",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Spring Onion"
    },
    "uk": {
      "name": "Spring Onion",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Spring Onion"
    },
    "fr": {
      "name": "Spring Onion",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Spring Onion"
    }
  },
  {
    "visual": "small-red-chili",
    "category": "vegetables",
    "price": "Rp 82.000",
    "en": {
      "name": "Small Red Chili",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Small Red Chili"
    },
    "id": {
      "name": "Cabe Merah",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Cabe Merah"
    },
    "ru": {
      "name": "Small Red Chili",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Small Red Chili"
    },
    "it": {
      "name": "Small Red Chili",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Small Red Chili"
    },
    "zh": {
      "name": "Small Red Chili",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Small Red Chili"
    },
    "uk": {
      "name": "Small Red Chili",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Small Red Chili"
    },
    "fr": {
      "name": "Small Red Chili",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Small Red Chili"
    }
  },
  {
    "visual": "long-red-chili",
    "category": "vegetables",
    "price": "Rp 57.000",
    "en": {
      "name": "Long Red Chili",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Long Red Chili"
    },
    "id": {
      "name": "Cabe Lombok",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Cabe Lombok"
    },
    "ru": {
      "name": "Long Red Chili",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Long Red Chili"
    },
    "it": {
      "name": "Long Red Chili",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Long Red Chili"
    },
    "zh": {
      "name": "Long Red Chili",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Long Red Chili"
    },
    "uk": {
      "name": "Long Red Chili",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Long Red Chili"
    },
    "fr": {
      "name": "Long Red Chili",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Long Red Chili"
    }
  },
  {
    "visual": "small-green-chili",
    "category": "vegetables",
    "price": "Rp 69.000",
    "en": {
      "name": "Small Green Chili",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Small Green Chili"
    },
    "id": {
      "name": "Cabe Ijo Kecil",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Cabe Ijo Kecil"
    },
    "ru": {
      "name": "Small Green Chili",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Small Green Chili"
    },
    "it": {
      "name": "Small Green Chili",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Small Green Chili"
    },
    "zh": {
      "name": "Small Green Chili",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Small Green Chili"
    },
    "uk": {
      "name": "Small Green Chili",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Small Green Chili"
    },
    "fr": {
      "name": "Small Green Chili",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Small Green Chili"
    }
  },
  {
    "visual": "long-green-chili",
    "category": "vegetables",
    "price": "Rp 57.000",
    "en": {
      "name": "Long Green Chili",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Long Green Chili"
    },
    "id": {
      "name": "Cabe Ijo Besar",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Cabe Ijo Besar"
    },
    "ru": {
      "name": "Long Green Chili",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Long Green Chili"
    },
    "it": {
      "name": "Long Green Chili",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Long Green Chili"
    },
    "zh": {
      "name": "Long Green Chili",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Long Green Chili"
    },
    "uk": {
      "name": "Long Green Chili",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Long Green Chili"
    },
    "fr": {
      "name": "Long Green Chili",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Long Green Chili"
    }
  },
  {
    "visual": "dried-chilli",
    "category": "vegetables",
    "price": "Rp 119.000",
    "en": {
      "name": "Dried Chilli",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Dried Chilli"
    },
    "id": {
      "name": "Cabai Kering Merah",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Cabai Kering Merah"
    },
    "ru": {
      "name": "Dried Chilli",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Dried Chilli"
    },
    "it": {
      "name": "Dried Chilli",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Dried Chilli"
    },
    "zh": {
      "name": "Dried Chilli",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Dried Chilli"
    },
    "uk": {
      "name": "Dried Chilli",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Dried Chilli"
    },
    "fr": {
      "name": "Dried Chilli",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Dried Chilli"
    }
  },
  {
    "visual": "leek-bali-clean",
    "category": "spices",
    "price": "Rp 44.000",
    "en": {
      "name": "Leek Bali Clean",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Leek Bali Clean"
    },
    "id": {
      "name": "Leek Bali Clean",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Leek Bali Clean"
    },
    "ru": {
      "name": "Leek Bali Clean",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Leek Bali Clean"
    },
    "it": {
      "name": "Leek Bali Clean",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Leek Bali Clean"
    },
    "zh": {
      "name": "Leek Bali Clean",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Leek Bali Clean"
    },
    "uk": {
      "name": "Leek Bali Clean",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Leek Bali Clean"
    },
    "fr": {
      "name": "Leek Bali Clean",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Leek Bali Clean"
    }
  },
  {
    "visual": "leek-jawa-clean",
    "category": "spices",
    "price": "Rp 44.000",
    "en": {
      "name": "Leek Jawa Clean",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Leek Jawa Clean"
    },
    "id": {
      "name": "Leek Jawa Clean",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Leek Jawa Clean"
    },
    "ru": {
      "name": "Leek Jawa Clean",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Leek Jawa Clean"
    },
    "it": {
      "name": "Leek Jawa Clean",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Leek Jawa Clean"
    },
    "zh": {
      "name": "Leek Jawa Clean",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Leek Jawa Clean"
    },
    "uk": {
      "name": "Leek Jawa Clean",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Leek Jawa Clean"
    },
    "fr": {
      "name": "Leek Jawa Clean",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Leek Jawa Clean"
    }
  },
  {
    "visual": "ginger",
    "category": "spices",
    "price": "Rp 43.000",
    "en": {
      "name": "Ginger",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Ginger"
    },
    "id": {
      "name": "Jahe Gajah",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Jahe Gajah"
    },
    "ru": {
      "name": "Ginger",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Ginger"
    },
    "it": {
      "name": "Ginger",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Ginger"
    },
    "zh": {
      "name": "Ginger",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Ginger"
    },
    "uk": {
      "name": "Ginger",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Ginger"
    },
    "fr": {
      "name": "Ginger",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Ginger"
    }
  },
  {
    "visual": "bunga-kecombrang",
    "category": "spices",
    "price": "Rp 44.000",
    "en": {
      "name": "Bunga Kecombrang",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Bunga Kecombrang"
    },
    "id": {
      "name": "Bunga Kecombrang",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Bunga Kecombrang"
    },
    "ru": {
      "name": "Bunga Kecombrang",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Bunga Kecombrang"
    },
    "it": {
      "name": "Bunga Kecombrang",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Bunga Kecombrang"
    },
    "zh": {
      "name": "Bunga Kecombrang",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Bunga Kecombrang"
    },
    "uk": {
      "name": "Bunga Kecombrang",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Bunga Kecombrang"
    },
    "fr": {
      "name": "Bunga Kecombrang",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Bunga Kecombrang"
    }
  },
  {
    "visual": "nutmeg",
    "category": "spices",
    "price": "Rp 28.000",
    "en": {
      "name": "Nutmeg",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Nutmeg"
    },
    "id": {
      "name": "Biji Pala",
      "unit": "ONS",
      "tag": "Segar",
      "detail": "",
      "description": "Biji Pala"
    },
    "ru": {
      "name": "Nutmeg",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Nutmeg"
    },
    "it": {
      "name": "Nutmeg",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Nutmeg"
    },
    "zh": {
      "name": "Nutmeg",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Nutmeg"
    },
    "uk": {
      "name": "Nutmeg",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Nutmeg"
    },
    "fr": {
      "name": "Nutmeg",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Nutmeg"
    }
  },
  {
    "visual": "tumeric",
    "category": "spices",
    "price": "Rp 20.000",
    "en": {
      "name": "Tumeric",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Tumeric"
    },
    "id": {
      "name": "Kunyit",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Kunyit"
    },
    "ru": {
      "name": "Tumeric",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Tumeric"
    },
    "it": {
      "name": "Tumeric",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Tumeric"
    },
    "zh": {
      "name": "Tumeric",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Tumeric"
    },
    "uk": {
      "name": "Tumeric",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Tumeric"
    },
    "fr": {
      "name": "Tumeric",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Tumeric"
    }
  },
  {
    "visual": "merica-hitam-whole",
    "category": "spices",
    "price": "Rp 225.000",
    "en": {
      "name": "Merica Hitam Whole",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Merica Hitam Whole"
    },
    "id": {
      "name": "Merica Hitam Whole",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Merica Hitam Whole"
    },
    "ru": {
      "name": "Merica Hitam Whole",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Merica Hitam Whole"
    },
    "it": {
      "name": "Merica Hitam Whole",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Merica Hitam Whole"
    },
    "zh": {
      "name": "Merica Hitam Whole",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Merica Hitam Whole"
    },
    "uk": {
      "name": "Merica Hitam Whole",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Merica Hitam Whole"
    },
    "fr": {
      "name": "Merica Hitam Whole",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Merica Hitam Whole"
    }
  },
  {
    "visual": "black-peper-powder",
    "category": "spices",
    "price": "Rp 213.000",
    "en": {
      "name": "Black Peper Powder",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Black Peper Powder"
    },
    "id": {
      "name": "Black Peper Powder",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Black Peper Powder"
    },
    "ru": {
      "name": "Black Peper Powder",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Black Peper Powder"
    },
    "it": {
      "name": "Black Peper Powder",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Black Peper Powder"
    },
    "zh": {
      "name": "Black Peper Powder",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Black Peper Powder"
    },
    "uk": {
      "name": "Black Peper Powder",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Black Peper Powder"
    },
    "fr": {
      "name": "Black Peper Powder",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Black Peper Powder"
    }
  },
  {
    "visual": "merica-putih-whole",
    "category": "spices",
    "price": "Rp 213.000",
    "en": {
      "name": "Merica Putih Whole.",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Merica Putih Whole."
    },
    "id": {
      "name": "Merica Putih Whole.",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Merica Putih Whole."
    },
    "ru": {
      "name": "Merica Putih Whole.",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Merica Putih Whole."
    },
    "it": {
      "name": "Merica Putih Whole.",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Merica Putih Whole."
    },
    "zh": {
      "name": "Merica Putih Whole.",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Merica Putih Whole."
    },
    "uk": {
      "name": "Merica Putih Whole.",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Merica Putih Whole."
    },
    "fr": {
      "name": "Merica Putih Whole.",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Merica Putih Whole."
    }
  },
  {
    "visual": "cinamon-powder",
    "category": "spices",
    "price": "Rp 313.000",
    "en": {
      "name": "Cinamon Powder",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Cinamon Powder"
    },
    "id": {
      "name": "Cinamon Powder",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Cinamon Powder"
    },
    "ru": {
      "name": "Cinamon Powder",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Cinamon Powder"
    },
    "it": {
      "name": "Cinamon Powder",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Cinamon Powder"
    },
    "zh": {
      "name": "Cinamon Powder",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Cinamon Powder"
    },
    "uk": {
      "name": "Cinamon Powder",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Cinamon Powder"
    },
    "fr": {
      "name": "Cinamon Powder",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Cinamon Powder"
    }
  },
  {
    "visual": "cinnamon-stick",
    "category": "spices",
    "price": "Rp 182.000",
    "en": {
      "name": "Cinnamon Stick",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Cinnamon Stick"
    },
    "id": {
      "name": "Cinnamon Stick",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Cinnamon Stick"
    },
    "ru": {
      "name": "Cinnamon Stick",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Cinnamon Stick"
    },
    "it": {
      "name": "Cinnamon Stick",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Cinnamon Stick"
    },
    "zh": {
      "name": "Cinnamon Stick",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Cinnamon Stick"
    },
    "uk": {
      "name": "Cinnamon Stick",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Cinnamon Stick"
    },
    "fr": {
      "name": "Cinnamon Stick",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Cinnamon Stick"
    }
  },
  {
    "visual": "jinten",
    "category": "spices",
    "price": "Rp 119.000",
    "en": {
      "name": "Jinten",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Jinten"
    },
    "id": {
      "name": "Jinten",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Jinten"
    },
    "ru": {
      "name": "Jinten",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Jinten"
    },
    "it": {
      "name": "Jinten",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Jinten"
    },
    "zh": {
      "name": "Jinten",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Jinten"
    },
    "uk": {
      "name": "Jinten",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Jinten"
    },
    "fr": {
      "name": "Jinten",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Jinten"
    }
  },
  {
    "visual": "kapulaga",
    "category": "spices",
    "price": "Rp 238.000",
    "en": {
      "name": "Kapulaga",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Kapulaga"
    },
    "id": {
      "name": "Kapulaga",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Kapulaga"
    },
    "ru": {
      "name": "Kapulaga",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Kapulaga"
    },
    "it": {
      "name": "Kapulaga",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Kapulaga"
    },
    "zh": {
      "name": "Kapulaga",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Kapulaga"
    },
    "uk": {
      "name": "Kapulaga",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Kapulaga"
    },
    "fr": {
      "name": "Kapulaga",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Kapulaga"
    }
  },
  {
    "visual": "galangal",
    "category": "spices",
    "price": "Rp 20.000",
    "en": {
      "name": "Galangal",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Galangal"
    },
    "id": {
      "name": "Lengkuas",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Lengkuas"
    },
    "ru": {
      "name": "Galangal",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Galangal"
    },
    "it": {
      "name": "Galangal",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Galangal"
    },
    "zh": {
      "name": "Galangal",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Galangal"
    },
    "uk": {
      "name": "Galangal",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Galangal"
    },
    "fr": {
      "name": "Galangal",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Galangal"
    }
  },
  {
    "visual": "pala",
    "category": "spices",
    "price": "Rp 263.000",
    "en": {
      "name": "Pala",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pala"
    },
    "id": {
      "name": "Pala",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Pala"
    },
    "ru": {
      "name": "Pala",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pala"
    },
    "it": {
      "name": "Pala",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pala"
    },
    "zh": {
      "name": "Pala",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pala"
    },
    "uk": {
      "name": "Pala",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pala"
    },
    "fr": {
      "name": "Pala",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pala"
    }
  },
  {
    "visual": "kencur",
    "category": "spices",
    "price": "Rp 69.000",
    "en": {
      "name": "Kencur",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Kencur"
    },
    "id": {
      "name": "Kencur",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Kencur"
    },
    "ru": {
      "name": "Kencur",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Kencur"
    },
    "it": {
      "name": "Kencur",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Kencur"
    },
    "zh": {
      "name": "Kencur",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Kencur"
    },
    "uk": {
      "name": "Kencur",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Kencur"
    },
    "fr": {
      "name": "Kencur",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Kencur"
    }
  },
  {
    "visual": "clove",
    "category": "spices",
    "price": "Rp 225.000",
    "en": {
      "name": "Clove",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Clove"
    },
    "id": {
      "name": "Cengkeh",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Cengkeh"
    },
    "ru": {
      "name": "Clove",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Clove"
    },
    "it": {
      "name": "Clove",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Clove"
    },
    "zh": {
      "name": "Clove",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Clove"
    },
    "uk": {
      "name": "Clove",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Clove"
    },
    "fr": {
      "name": "Clove",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Clove"
    }
  },
  {
    "visual": "candlenut",
    "category": "spices",
    "price": "Rp 60.000",
    "en": {
      "name": "Candlenut",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Candlenut"
    },
    "id": {
      "name": "Kemiri",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Kemiri"
    },
    "ru": {
      "name": "Candlenut",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Candlenut"
    },
    "it": {
      "name": "Candlenut",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Candlenut"
    },
    "zh": {
      "name": "Candlenut",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Candlenut"
    },
    "uk": {
      "name": "Candlenut",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Candlenut"
    },
    "fr": {
      "name": "Candlenut",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Candlenut"
    }
  },
  {
    "visual": "coriander-seed",
    "category": "spices",
    "price": "Rp 50.000",
    "en": {
      "name": "Coriander Seed",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Coriander Seed"
    },
    "id": {
      "name": "Biji Ketumbar",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Biji Ketumbar"
    },
    "ru": {
      "name": "Coriander Seed",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Coriander Seed"
    },
    "it": {
      "name": "Coriander Seed",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Coriander Seed"
    },
    "zh": {
      "name": "Coriander Seed",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Coriander Seed"
    },
    "uk": {
      "name": "Coriander Seed",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Coriander Seed"
    },
    "fr": {
      "name": "Coriander Seed",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Coriander Seed"
    }
  },
  {
    "visual": "lemon-grass",
    "category": "spices",
    "price": "Rp 22.000",
    "en": {
      "name": "Lemon Grass",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Lemon Grass"
    },
    "id": {
      "name": "Lemon Grass",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Lemon Grass"
    },
    "ru": {
      "name": "Lemon Grass",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Lemon Grass"
    },
    "it": {
      "name": "Lemon Grass",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Lemon Grass"
    },
    "zh": {
      "name": "Lemon Grass",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Lemon Grass"
    },
    "uk": {
      "name": "Lemon Grass",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Lemon Grass"
    },
    "fr": {
      "name": "Lemon Grass",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Lemon Grass"
    }
  },
  {
    "visual": "dill",
    "category": "spices",
    "price": "Rp 23.000",
    "en": {
      "name": "Dill",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Dill"
    },
    "id": {
      "name": "Dill",
      "unit": "ONS",
      "tag": "Segar",
      "detail": "",
      "description": "Dill"
    },
    "ru": {
      "name": "Dill",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Dill"
    },
    "it": {
      "name": "Dill",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Dill"
    },
    "zh": {
      "name": "Dill",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Dill"
    },
    "uk": {
      "name": "Dill",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Dill"
    },
    "fr": {
      "name": "Dill",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Dill"
    }
  },
  {
    "visual": "thyme",
    "category": "spices",
    "price": "Rp 23.000",
    "en": {
      "name": "Thyme",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Thyme"
    },
    "id": {
      "name": "Thyme",
      "unit": "ONS",
      "tag": "Segar",
      "detail": "",
      "description": "Thyme"
    },
    "ru": {
      "name": "Thyme",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Thyme"
    },
    "it": {
      "name": "Thyme",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Thyme"
    },
    "zh": {
      "name": "Thyme",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Thyme"
    },
    "uk": {
      "name": "Thyme",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Thyme"
    },
    "fr": {
      "name": "Thyme",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Thyme"
    }
  },
  {
    "visual": "mint-leaves",
    "category": "spices",
    "price": "Rp 9.000",
    "en": {
      "name": "Mint Leaves",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Mint Leaves"
    },
    "id": {
      "name": "Mint Leaves",
      "unit": "ONS",
      "tag": "Segar",
      "detail": "",
      "description": "Mint Leaves"
    },
    "ru": {
      "name": "Mint Leaves",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Mint Leaves"
    },
    "it": {
      "name": "Mint Leaves",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Mint Leaves"
    },
    "zh": {
      "name": "Mint Leaves",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Mint Leaves"
    },
    "uk": {
      "name": "Mint Leaves",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Mint Leaves"
    },
    "fr": {
      "name": "Mint Leaves",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Mint Leaves"
    }
  },
  {
    "visual": "basil-leaf",
    "category": "spices",
    "price": "Rp 15.000",
    "en": {
      "name": "Basil Leaf",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Basil Leaf"
    },
    "id": {
      "name": "Basil Leaf",
      "unit": "ONS",
      "tag": "Segar",
      "detail": "",
      "description": "Basil Leaf"
    },
    "ru": {
      "name": "Basil Leaf",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Basil Leaf"
    },
    "it": {
      "name": "Basil Leaf",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Basil Leaf"
    },
    "zh": {
      "name": "Basil Leaf",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Basil Leaf"
    },
    "uk": {
      "name": "Basil Leaf",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Basil Leaf"
    },
    "fr": {
      "name": "Basil Leaf",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Basil Leaf"
    }
  },
  {
    "visual": "coriander",
    "category": "spices",
    "price": "Rp 9.000",
    "en": {
      "name": "Coriander",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Coriander"
    },
    "id": {
      "name": "Coriander",
      "unit": "ONS",
      "tag": "Segar",
      "detail": "",
      "description": "Coriander"
    },
    "ru": {
      "name": "Coriander",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Coriander"
    },
    "it": {
      "name": "Coriander",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Coriander"
    },
    "zh": {
      "name": "Coriander",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Coriander"
    },
    "uk": {
      "name": "Coriander",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Coriander"
    },
    "fr": {
      "name": "Coriander",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Coriander"
    }
  },
  {
    "visual": "rosemary",
    "category": "spices",
    "price": "Rp 17.000",
    "en": {
      "name": "Rosemary",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Rosemary"
    },
    "id": {
      "name": "Rosemary",
      "unit": "ONS",
      "tag": "Segar",
      "detail": "",
      "description": "Rosemary"
    },
    "ru": {
      "name": "Rosemary",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Rosemary"
    },
    "it": {
      "name": "Rosemary",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Rosemary"
    },
    "zh": {
      "name": "Rosemary",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Rosemary"
    },
    "uk": {
      "name": "Rosemary",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Rosemary"
    },
    "fr": {
      "name": "Rosemary",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Rosemary"
    }
  },
  {
    "visual": "sage",
    "category": "spices",
    "price": "Rp 15.000",
    "en": {
      "name": "Sage",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Sage"
    },
    "id": {
      "name": "Sage",
      "unit": "ONS",
      "tag": "Segar",
      "detail": "",
      "description": "Sage"
    },
    "ru": {
      "name": "Sage",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Sage"
    },
    "it": {
      "name": "Sage",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Sage"
    },
    "zh": {
      "name": "Sage",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Sage"
    },
    "uk": {
      "name": "Sage",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Sage"
    },
    "fr": {
      "name": "Sage",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Sage"
    }
  },
  {
    "visual": "origano",
    "category": "spices",
    "price": "Rp 19.000",
    "en": {
      "name": "Origano",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Origano"
    },
    "id": {
      "name": "Origano",
      "unit": "ONS",
      "tag": "Segar",
      "detail": "",
      "description": "Origano"
    },
    "ru": {
      "name": "Origano",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Origano"
    },
    "it": {
      "name": "Origano",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Origano"
    },
    "zh": {
      "name": "Origano",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Origano"
    },
    "uk": {
      "name": "Origano",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Origano"
    },
    "fr": {
      "name": "Origano",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Origano"
    }
  },
  {
    "visual": "star-anise",
    "category": "spices",
    "price": "Rp 350.000",
    "en": {
      "name": "Star Anise",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Star Anise"
    },
    "id": {
      "name": "Star Anise",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Star Anise"
    },
    "ru": {
      "name": "Star Anise",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Star Anise"
    },
    "it": {
      "name": "Star Anise",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Star Anise"
    },
    "zh": {
      "name": "Star Anise",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Star Anise"
    },
    "uk": {
      "name": "Star Anise",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Star Anise"
    },
    "fr": {
      "name": "Star Anise",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Star Anise"
    }
  },
  {
    "visual": "taragon",
    "category": "spices",
    "price": "Rp 19.000",
    "en": {
      "name": "Taragon",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Taragon"
    },
    "id": {
      "name": "Taragon",
      "unit": "ONS",
      "tag": "Segar",
      "detail": "",
      "description": "Taragon"
    },
    "ru": {
      "name": "Taragon",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Taragon"
    },
    "it": {
      "name": "Taragon",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Taragon"
    },
    "zh": {
      "name": "Taragon",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Taragon"
    },
    "uk": {
      "name": "Taragon",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Taragon"
    },
    "fr": {
      "name": "Taragon",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Taragon"
    }
  },
  {
    "visual": "italian-parsley",
    "category": "spices",
    "price": "Rp 9.000",
    "en": {
      "name": "Italian Parsley",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Italian Parsley"
    },
    "id": {
      "name": "Italian Parsley",
      "unit": "ONS",
      "tag": "Segar",
      "detail": "",
      "description": "Italian Parsley"
    },
    "ru": {
      "name": "Italian Parsley",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Italian Parsley"
    },
    "it": {
      "name": "Italian Parsley",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Italian Parsley"
    },
    "zh": {
      "name": "Italian Parsley",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Italian Parsley"
    },
    "uk": {
      "name": "Italian Parsley",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Italian Parsley"
    },
    "fr": {
      "name": "Italian Parsley",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Italian Parsley"
    }
  },
  {
    "visual": "kucai",
    "category": "spices",
    "price": "Rp 9.000",
    "en": {
      "name": "Kucai",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Kucai"
    },
    "id": {
      "name": "Chives",
      "unit": "ONS",
      "tag": "Segar",
      "detail": "",
      "description": "Chives"
    },
    "ru": {
      "name": "Kucai",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Kucai"
    },
    "it": {
      "name": "Kucai",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Kucai"
    },
    "zh": {
      "name": "Kucai",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Kucai"
    },
    "uk": {
      "name": "Kucai",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Kucai"
    },
    "fr": {
      "name": "Kucai",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Kucai"
    }
  },
  {
    "visual": "local-parsley",
    "category": "spices",
    "price": "Rp 9.000",
    "en": {
      "name": "Local Parsley",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Local Parsley"
    },
    "id": {
      "name": "Local Parsley",
      "unit": "ONS",
      "tag": "Segar",
      "detail": "",
      "description": "Local Parsley"
    },
    "ru": {
      "name": "Local Parsley",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Local Parsley"
    },
    "it": {
      "name": "Local Parsley",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Local Parsley"
    },
    "zh": {
      "name": "Local Parsley",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Local Parsley"
    },
    "uk": {
      "name": "Local Parsley",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Local Parsley"
    },
    "fr": {
      "name": "Local Parsley",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Local Parsley"
    }
  },
  {
    "visual": "local-seledry",
    "category": "spices",
    "price": "Rp 9.000",
    "en": {
      "name": "Local Seledry",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Local Seledry"
    },
    "id": {
      "name": "Local Seledry",
      "unit": "ONS",
      "tag": "Segar",
      "detail": "",
      "description": "Local Seledry"
    },
    "ru": {
      "name": "Local Seledry",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Local Seledry"
    },
    "it": {
      "name": "Local Seledry",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Local Seledry"
    },
    "zh": {
      "name": "Local Seledry",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Local Seledry"
    },
    "uk": {
      "name": "Local Seledry",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Local Seledry"
    },
    "fr": {
      "name": "Local Seledry",
      "unit": "ONS",
      "tag": "Fresh",
      "detail": "",
      "description": "Local Seledry"
    }
  },
  {
    "visual": "bay-leaf",
    "category": "salads",
    "price": "Rp 4.000",
    "en": {
      "name": "Bay Leaf",
      "unit": "BUNCH",
      "tag": "Fresh",
      "detail": "",
      "description": "Bay Leaf"
    },
    "id": {
      "name": "Daun Salam",
      "unit": "BUNCH",
      "tag": "Segar",
      "detail": "",
      "description": "Daun Salam"
    },
    "ru": {
      "name": "Bay Leaf",
      "unit": "BUNCH",
      "tag": "Fresh",
      "detail": "",
      "description": "Bay Leaf"
    },
    "it": {
      "name": "Bay Leaf",
      "unit": "BUNCH",
      "tag": "Fresh",
      "detail": "",
      "description": "Bay Leaf"
    },
    "zh": {
      "name": "Bay Leaf",
      "unit": "BUNCH",
      "tag": "Fresh",
      "detail": "",
      "description": "Bay Leaf"
    },
    "uk": {
      "name": "Bay Leaf",
      "unit": "BUNCH",
      "tag": "Fresh",
      "detail": "",
      "description": "Bay Leaf"
    },
    "fr": {
      "name": "Bay Leaf",
      "unit": "BUNCH",
      "tag": "Fresh",
      "detail": "",
      "description": "Bay Leaf"
    }
  },
  {
    "visual": "daun-pandan",
    "category": "salads",
    "price": "Rp 50.000",
    "en": {
      "name": "Daun Pandan",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Daun Pandan"
    },
    "id": {
      "name": "Daun Pandan",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Daun Pandan"
    },
    "ru": {
      "name": "Daun Pandan",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Daun Pandan"
    },
    "it": {
      "name": "Daun Pandan",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Daun Pandan"
    },
    "zh": {
      "name": "Daun Pandan",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Daun Pandan"
    },
    "uk": {
      "name": "Daun Pandan",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Daun Pandan"
    },
    "fr": {
      "name": "Daun Pandan",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Daun Pandan"
    }
  },
  {
    "visual": "kaffir-leaf",
    "category": "salads",
    "price": "Rp 75.000",
    "en": {
      "name": "Kaffir Leaf",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Kaffir Leaf"
    },
    "id": {
      "name": "Daun Jeruk",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Daun Jeruk"
    },
    "ru": {
      "name": "Kaffir Leaf",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Kaffir Leaf"
    },
    "it": {
      "name": "Kaffir Leaf",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Kaffir Leaf"
    },
    "zh": {
      "name": "Kaffir Leaf",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Kaffir Leaf"
    },
    "uk": {
      "name": "Kaffir Leaf",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Kaffir Leaf"
    },
    "fr": {
      "name": "Kaffir Leaf",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Kaffir Leaf"
    }
  },
  {
    "visual": "daun-singkong",
    "category": "salads",
    "price": "Rp 50.000",
    "en": {
      "name": "Daun Singkong",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Daun Singkong"
    },
    "id": {
      "name": "Daun Singkong",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Daun Singkong"
    },
    "ru": {
      "name": "Daun Singkong",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Daun Singkong"
    },
    "it": {
      "name": "Daun Singkong",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Daun Singkong"
    },
    "zh": {
      "name": "Daun Singkong",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Daun Singkong"
    },
    "uk": {
      "name": "Daun Singkong",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Daun Singkong"
    },
    "fr": {
      "name": "Daun Singkong",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Daun Singkong"
    }
  },
  {
    "visual": "kemangi",
    "category": "salads",
    "price": "Rp 63.000",
    "en": {
      "name": "Kemangi",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Kemangi"
    },
    "id": {
      "name": "Kemangi",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Kemangi"
    },
    "ru": {
      "name": "Kemangi",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Kemangi"
    },
    "it": {
      "name": "Kemangi",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Kemangi"
    },
    "zh": {
      "name": "Kemangi",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Kemangi"
    },
    "uk": {
      "name": "Kemangi",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Kemangi"
    },
    "fr": {
      "name": "Kemangi",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Kemangi"
    }
  },
  {
    "visual": "banana-leaf",
    "category": "salads",
    "price": "Rp 7.000",
    "en": {
      "name": "Banana Leaf",
      "unit": "LIPAT",
      "tag": "Fresh",
      "detail": "",
      "description": "Banana Leaf"
    },
    "id": {
      "name": "Banana Leaf",
      "unit": "LIPAT",
      "tag": "Segar",
      "detail": "",
      "description": "Banana Leaf"
    },
    "ru": {
      "name": "Banana Leaf",
      "unit": "LIPAT",
      "tag": "Fresh",
      "detail": "",
      "description": "Banana Leaf"
    },
    "it": {
      "name": "Banana Leaf",
      "unit": "LIPAT",
      "tag": "Fresh",
      "detail": "",
      "description": "Banana Leaf"
    },
    "zh": {
      "name": "Banana Leaf",
      "unit": "LIPAT",
      "tag": "Fresh",
      "detail": "",
      "description": "Banana Leaf"
    },
    "uk": {
      "name": "Banana Leaf",
      "unit": "LIPAT",
      "tag": "Fresh",
      "detail": "",
      "description": "Banana Leaf"
    },
    "fr": {
      "name": "Banana Leaf",
      "unit": "LIPAT",
      "tag": "Fresh",
      "detail": "",
      "description": "Banana Leaf"
    }
  },
  {
    "visual": "edamame",
    "category": "nuts",
    "price": "Rp 44.000",
    "en": {
      "name": "Edamame",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Edamame"
    },
    "id": {
      "name": "Edamame",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Edamame"
    },
    "ru": {
      "name": "Edamame",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Edamame"
    },
    "it": {
      "name": "Edamame",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Edamame"
    },
    "zh": {
      "name": "Edamame",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Edamame"
    },
    "uk": {
      "name": "Edamame",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Edamame"
    },
    "fr": {
      "name": "Edamame",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Edamame"
    }
  },
  {
    "visual": "almond-bubuk",
    "category": "nuts",
    "price": "Rp 182.000",
    "en": {
      "name": "Almond Bubuk",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Almond Bubuk"
    },
    "id": {
      "name": "Almond Bubuk",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Almond Bubuk"
    },
    "ru": {
      "name": "Almond Bubuk",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Almond Bubuk"
    },
    "it": {
      "name": "Almond Bubuk",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Almond Bubuk"
    },
    "zh": {
      "name": "Almond Bubuk",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Almond Bubuk"
    },
    "uk": {
      "name": "Almond Bubuk",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Almond Bubuk"
    },
    "fr": {
      "name": "Almond Bubuk",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Almond Bubuk"
    }
  },
  {
    "visual": "almond-bubuk-500-gr",
    "category": "nuts",
    "price": "Rp 93.000",
    "en": {
      "name": "Almond Bubuk 500 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Almond Bubuk 500 Gr"
    },
    "id": {
      "name": "Almond Bubuk 500 Gr",
      "unit": "1 PCS",
      "tag": "Segar",
      "detail": "",
      "description": "Almond Bubuk 500 Gr"
    },
    "ru": {
      "name": "Almond Bubuk 500 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Almond Bubuk 500 Gr"
    },
    "it": {
      "name": "Almond Bubuk 500 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Almond Bubuk 500 Gr"
    },
    "zh": {
      "name": "Almond Bubuk 500 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Almond Bubuk 500 Gr"
    },
    "uk": {
      "name": "Almond Bubuk 500 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Almond Bubuk 500 Gr"
    },
    "fr": {
      "name": "Almond Bubuk 500 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Almond Bubuk 500 Gr"
    }
  },
  {
    "visual": "almond-bubuk-250-gr",
    "category": "nuts",
    "price": "Rp 49.000",
    "en": {
      "name": "Almond Bubuk 250 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Almond Bubuk 250 Gr"
    },
    "id": {
      "name": "Almond Bubuk 250 Gr",
      "unit": "1 PCS",
      "tag": "Segar",
      "detail": "",
      "description": "Almond Bubuk 250 Gr"
    },
    "ru": {
      "name": "Almond Bubuk 250 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Almond Bubuk 250 Gr"
    },
    "it": {
      "name": "Almond Bubuk 250 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Almond Bubuk 250 Gr"
    },
    "zh": {
      "name": "Almond Bubuk 250 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Almond Bubuk 250 Gr"
    },
    "uk": {
      "name": "Almond Bubuk 250 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Almond Bubuk 250 Gr"
    },
    "fr": {
      "name": "Almond Bubuk 250 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Almond Bubuk 250 Gr"
    }
  },
  {
    "visual": "almond-kulit-1-kg",
    "category": "nuts",
    "price": "Rp 173.000",
    "en": {
      "name": "Almond Kulit 1 Kg",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Almond Kulit 1 Kg"
    },
    "id": {
      "name": "Almond Kulit 1 Kg",
      "unit": "1 PCS",
      "tag": "Segar",
      "detail": "",
      "description": "Almond Kulit 1 Kg"
    },
    "ru": {
      "name": "Almond Kulit 1 Kg",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Almond Kulit 1 Kg"
    },
    "it": {
      "name": "Almond Kulit 1 Kg",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Almond Kulit 1 Kg"
    },
    "zh": {
      "name": "Almond Kulit 1 Kg",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Almond Kulit 1 Kg"
    },
    "uk": {
      "name": "Almond Kulit 1 Kg",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Almond Kulit 1 Kg"
    },
    "fr": {
      "name": "Almond Kulit 1 Kg",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Almond Kulit 1 Kg"
    }
  },
  {
    "visual": "peanut-kulit",
    "category": "nuts",
    "price": "Rp 38.000",
    "en": {
      "name": "Peanut Kulit",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Peanut Kulit"
    },
    "id": {
      "name": "Kacang Tanah Kulit",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Kacang Tanah Kulit"
    },
    "ru": {
      "name": "Peanut Kulit",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Peanut Kulit"
    },
    "it": {
      "name": "Peanut Kulit",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Peanut Kulit"
    },
    "zh": {
      "name": "Peanut Kulit",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Peanut Kulit"
    },
    "uk": {
      "name": "Peanut Kulit",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Peanut Kulit"
    },
    "fr": {
      "name": "Peanut Kulit",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Peanut Kulit"
    }
  },
  {
    "visual": "peanut",
    "category": "nuts",
    "price": "Rp 50.000",
    "en": {
      "name": "Peanut",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Peanut"
    },
    "id": {
      "name": "Kacang Tanah",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Kacang Tanah"
    },
    "ru": {
      "name": "Peanut",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Peanut"
    },
    "it": {
      "name": "Peanut",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Peanut"
    },
    "zh": {
      "name": "Peanut",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Peanut"
    },
    "uk": {
      "name": "Peanut",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Peanut"
    },
    "fr": {
      "name": "Peanut",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Peanut"
    }
  },
  {
    "visual": "peanut-clean",
    "category": "nuts",
    "price": "Rp 60.000",
    "en": {
      "name": "Peanut Clean",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Peanut Clean"
    },
    "id": {
      "name": "Kacang Tanah Kupas",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Kacang Tanah Kupas"
    },
    "ru": {
      "name": "Peanut Clean",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Peanut Clean"
    },
    "it": {
      "name": "Peanut Clean",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Peanut Clean"
    },
    "zh": {
      "name": "Peanut Clean",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Peanut Clean"
    },
    "uk": {
      "name": "Peanut Clean",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Peanut Clean"
    },
    "fr": {
      "name": "Peanut Clean",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Peanut Clean"
    }
  },
  {
    "visual": "mung-bean",
    "category": "nuts",
    "price": "Rp 44.000",
    "en": {
      "name": "Mung Bean",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Mung Bean"
    },
    "id": {
      "name": "Kacang Ijo",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Kacang Ijo"
    },
    "ru": {
      "name": "Mung Bean",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Mung Bean"
    },
    "it": {
      "name": "Mung Bean",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Mung Bean"
    },
    "zh": {
      "name": "Mung Bean",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Mung Bean"
    },
    "uk": {
      "name": "Mung Bean",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Mung Bean"
    },
    "fr": {
      "name": "Mung Bean",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Mung Bean"
    }
  },
  {
    "visual": "red-bean",
    "category": "nuts",
    "price": "Rp 57.000",
    "en": {
      "name": "Red Bean",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Red Bean"
    },
    "id": {
      "name": "Kacang Merah",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Kacang Merah"
    },
    "ru": {
      "name": "Red Bean",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Red Bean"
    },
    "it": {
      "name": "Red Bean",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Red Bean"
    },
    "zh": {
      "name": "Red Bean",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Red Bean"
    },
    "uk": {
      "name": "Red Bean",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Red Bean"
    },
    "fr": {
      "name": "Red Bean",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Red Bean"
    }
  },
  {
    "visual": "black-bean",
    "category": "nuts",
    "price": "Rp 135.000",
    "en": {
      "name": "Black Bean",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Black Bean"
    },
    "id": {
      "name": "Black Bean",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Black Bean"
    },
    "ru": {
      "name": "Black Bean",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Black Bean"
    },
    "it": {
      "name": "Black Bean",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Black Bean"
    },
    "zh": {
      "name": "Black Bean",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Black Bean"
    },
    "uk": {
      "name": "Black Bean",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Black Bean"
    },
    "fr": {
      "name": "Black Bean",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Black Bean"
    }
  },
  {
    "visual": "chik-peas",
    "category": "nuts",
    "price": "Rp 82.000",
    "en": {
      "name": "Chik Peas",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Chik Peas"
    },
    "id": {
      "name": "Chik Peas",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Chik Peas"
    },
    "ru": {
      "name": "Chik Peas",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Chik Peas"
    },
    "it": {
      "name": "Chik Peas",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Chik Peas"
    },
    "zh": {
      "name": "Chik Peas",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Chik Peas"
    },
    "uk": {
      "name": "Chik Peas",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Chik Peas"
    },
    "fr": {
      "name": "Chik Peas",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Chik Peas"
    }
  },
  {
    "visual": "chia-seed-1-kg",
    "category": "nuts",
    "price": "Rp 152.000",
    "en": {
      "name": "Chia Seed 1 Kg",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Chia Seed 1 Kg"
    },
    "id": {
      "name": "Chia Seed 1 Kg",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Chia Seed 1 Kg"
    },
    "ru": {
      "name": "Chia Seed 1 Kg",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Chia Seed 1 Kg"
    },
    "it": {
      "name": "Chia Seed 1 Kg",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Chia Seed 1 Kg"
    },
    "zh": {
      "name": "Chia Seed 1 Kg",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Chia Seed 1 Kg"
    },
    "uk": {
      "name": "Chia Seed 1 Kg",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Chia Seed 1 Kg"
    },
    "fr": {
      "name": "Chia Seed 1 Kg",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Chia Seed 1 Kg"
    }
  },
  {
    "visual": "sun-flower-seed-1-kg",
    "category": "nuts",
    "price": "Rp 94.000",
    "en": {
      "name": "Sun Flower Seed 1 Kg",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Sun Flower Seed 1 Kg"
    },
    "id": {
      "name": "Sun Flower Seed 1 Kg",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Sun Flower Seed 1 Kg"
    },
    "ru": {
      "name": "Sun Flower Seed 1 Kg",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Sun Flower Seed 1 Kg"
    },
    "it": {
      "name": "Sun Flower Seed 1 Kg",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Sun Flower Seed 1 Kg"
    },
    "zh": {
      "name": "Sun Flower Seed 1 Kg",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Sun Flower Seed 1 Kg"
    },
    "uk": {
      "name": "Sun Flower Seed 1 Kg",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Sun Flower Seed 1 Kg"
    },
    "fr": {
      "name": "Sun Flower Seed 1 Kg",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Sun Flower Seed 1 Kg"
    }
  },
  {
    "visual": "pumpkin-seed-1-kg",
    "category": "nuts",
    "price": "Rp 150.000",
    "en": {
      "name": "Pumpkin Seed 1 Kg",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pumpkin Seed 1 Kg"
    },
    "id": {
      "name": "Pumpkin Seed 1 Kg",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Pumpkin Seed 1 Kg"
    },
    "ru": {
      "name": "Pumpkin Seed 1 Kg",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pumpkin Seed 1 Kg"
    },
    "it": {
      "name": "Pumpkin Seed 1 Kg",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pumpkin Seed 1 Kg"
    },
    "zh": {
      "name": "Pumpkin Seed 1 Kg",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pumpkin Seed 1 Kg"
    },
    "uk": {
      "name": "Pumpkin Seed 1 Kg",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pumpkin Seed 1 Kg"
    },
    "fr": {
      "name": "Pumpkin Seed 1 Kg",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Pumpkin Seed 1 Kg"
    }
  },
  {
    "visual": "pumpkin-seed-500-gr",
    "category": "nuts",
    "price": "Rp 82.000",
    "en": {
      "name": "Pumpkin Seed 500 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Pumpkin Seed 500 Gr"
    },
    "id": {
      "name": "Pumpkin Seed 500 Gr",
      "unit": "1 PCS",
      "tag": "Segar",
      "detail": "",
      "description": "Pumpkin Seed 500 Gr"
    },
    "ru": {
      "name": "Pumpkin Seed 500 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Pumpkin Seed 500 Gr"
    },
    "it": {
      "name": "Pumpkin Seed 500 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Pumpkin Seed 500 Gr"
    },
    "zh": {
      "name": "Pumpkin Seed 500 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Pumpkin Seed 500 Gr"
    },
    "uk": {
      "name": "Pumpkin Seed 500 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Pumpkin Seed 500 Gr"
    },
    "fr": {
      "name": "Pumpkin Seed 500 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Pumpkin Seed 500 Gr"
    }
  },
  {
    "visual": "light-walnut-500-gr",
    "category": "nuts",
    "price": "Rp 102.000",
    "en": {
      "name": "Light Walnut 500 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Light Walnut 500 Gr"
    },
    "id": {
      "name": "Light Walnut 500 Gr",
      "unit": "1 PCS",
      "tag": "Segar",
      "detail": "",
      "description": "Light Walnut 500 Gr"
    },
    "ru": {
      "name": "Light Walnut 500 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Light Walnut 500 Gr"
    },
    "it": {
      "name": "Light Walnut 500 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Light Walnut 500 Gr"
    },
    "zh": {
      "name": "Light Walnut 500 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Light Walnut 500 Gr"
    },
    "uk": {
      "name": "Light Walnut 500 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Light Walnut 500 Gr"
    },
    "fr": {
      "name": "Light Walnut 500 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Light Walnut 500 Gr"
    }
  },
  {
    "visual": "kacang-mente-pecah-1-kg",
    "category": "nuts",
    "price": "Rp 169.000",
    "en": {
      "name": "Kacang Mente Pecah 1 Kg",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Kacang Mente Pecah 1 Kg"
    },
    "id": {
      "name": "Kacang Mente Pecah 1 Kg",
      "unit": "1 PCS",
      "tag": "Segar",
      "detail": "",
      "description": "Kacang Mente Pecah 1 Kg"
    },
    "ru": {
      "name": "Kacang Mente Pecah 1 Kg",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Kacang Mente Pecah 1 Kg"
    },
    "it": {
      "name": "Kacang Mente Pecah 1 Kg",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Kacang Mente Pecah 1 Kg"
    },
    "zh": {
      "name": "Kacang Mente Pecah 1 Kg",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Kacang Mente Pecah 1 Kg"
    },
    "uk": {
      "name": "Kacang Mente Pecah 1 Kg",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Kacang Mente Pecah 1 Kg"
    },
    "fr": {
      "name": "Kacang Mente Pecah 1 Kg",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Kacang Mente Pecah 1 Kg"
    }
  },
  {
    "visual": "peas",
    "category": "nuts",
    "price": "Rp 74.000",
    "en": {
      "name": "Peas",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Peas"
    },
    "id": {
      "name": "Kacang Polong Frozen",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Kacang Polong Frozen"
    },
    "ru": {
      "name": "Peas",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Peas"
    },
    "it": {
      "name": "Peas",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Peas"
    },
    "zh": {
      "name": "Peas",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Peas"
    },
    "uk": {
      "name": "Peas",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Peas"
    },
    "fr": {
      "name": "Peas",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Peas"
    }
  },
  {
    "visual": "pickle-gerkin",
    "category": "pantry",
    "price": "Rp 69.000",
    "en": {
      "name": "Pickle Gerkin",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Pickle Gerkin"
    },
    "id": {
      "name": "Pickle Gerkin",
      "unit": "1 PCS",
      "tag": "Segar",
      "detail": "",
      "description": "Pickle Gerkin"
    },
    "ru": {
      "name": "Pickle Gerkin",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Pickle Gerkin"
    },
    "it": {
      "name": "Pickle Gerkin",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Pickle Gerkin"
    },
    "zh": {
      "name": "Pickle Gerkin",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Pickle Gerkin"
    },
    "uk": {
      "name": "Pickle Gerkin",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Pickle Gerkin"
    },
    "fr": {
      "name": "Pickle Gerkin",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Pickle Gerkin"
    }
  },
  {
    "visual": "kalamata-olive",
    "category": "pantry",
    "price": "Rp 150.000",
    "en": {
      "name": "Kalamata Olive",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Kalamata Olive"
    },
    "id": {
      "name": "Kalamata Olive",
      "unit": "1 PCS",
      "tag": "Segar",
      "detail": "",
      "description": "Kalamata Olive"
    },
    "ru": {
      "name": "Kalamata Olive",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Kalamata Olive"
    },
    "it": {
      "name": "Kalamata Olive",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Kalamata Olive"
    },
    "zh": {
      "name": "Kalamata Olive",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Kalamata Olive"
    },
    "uk": {
      "name": "Kalamata Olive",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Kalamata Olive"
    },
    "fr": {
      "name": "Kalamata Olive",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Kalamata Olive"
    }
  },
  {
    "visual": "leci-can",
    "category": "pantry",
    "price": "Rp 38.000",
    "en": {
      "name": "Leci Can",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Leci Can"
    },
    "id": {
      "name": "Leci Can",
      "unit": "1 PCS",
      "tag": "Segar",
      "detail": "",
      "description": "Leci Can"
    },
    "ru": {
      "name": "Leci Can",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Leci Can"
    },
    "it": {
      "name": "Leci Can",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Leci Can"
    },
    "zh": {
      "name": "Leci Can",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Leci Can"
    },
    "uk": {
      "name": "Leci Can",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Leci Can"
    },
    "fr": {
      "name": "Leci Can",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Leci Can"
    }
  },
  {
    "visual": "green-peas-can",
    "category": "pantry",
    "price": "Rp 32.000",
    "en": {
      "name": "Green Peas Can",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Green Peas Can"
    },
    "id": {
      "name": "Green Peas Can",
      "unit": "1 PCS",
      "tag": "Segar",
      "detail": "",
      "description": "Green Peas Can"
    },
    "ru": {
      "name": "Green Peas Can",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Green Peas Can"
    },
    "it": {
      "name": "Green Peas Can",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Green Peas Can"
    },
    "zh": {
      "name": "Green Peas Can",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Green Peas Can"
    },
    "uk": {
      "name": "Green Peas Can",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Green Peas Can"
    },
    "fr": {
      "name": "Green Peas Can",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Green Peas Can"
    }
  },
  {
    "visual": "baked-bean-can",
    "category": "pantry",
    "price": "Rp 32.000",
    "en": {
      "name": "Baked Bean Can",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Baked Bean Can"
    },
    "id": {
      "name": "Baked Bean Can",
      "unit": "1 PCS",
      "tag": "Segar",
      "detail": "",
      "description": "Baked Bean Can"
    },
    "ru": {
      "name": "Baked Bean Can",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Baked Bean Can"
    },
    "it": {
      "name": "Baked Bean Can",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Baked Bean Can"
    },
    "zh": {
      "name": "Baked Bean Can",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Baked Bean Can"
    },
    "uk": {
      "name": "Baked Bean Can",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Baked Bean Can"
    },
    "fr": {
      "name": "Baked Bean Can",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Baked Bean Can"
    }
  },
  {
    "visual": "capers",
    "category": "pantry",
    "price": "Rp 100.000",
    "en": {
      "name": "Capers",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Capers"
    },
    "id": {
      "name": "Capers",
      "unit": "1 PCS",
      "tag": "Segar",
      "detail": "",
      "description": "Capers"
    },
    "ru": {
      "name": "Capers",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Capers"
    },
    "it": {
      "name": "Capers",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Capers"
    },
    "zh": {
      "name": "Capers",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Capers"
    },
    "uk": {
      "name": "Capers",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Capers"
    },
    "fr": {
      "name": "Capers",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Capers"
    }
  },
  {
    "visual": "peach",
    "category": "pantry",
    "price": "Rp 82.000",
    "en": {
      "name": "Peach",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Peach"
    },
    "id": {
      "name": "Peach",
      "unit": "1 PCS",
      "tag": "Segar",
      "detail": "",
      "description": "Peach"
    },
    "ru": {
      "name": "Peach",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Peach"
    },
    "it": {
      "name": "Peach",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Peach"
    },
    "zh": {
      "name": "Peach",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Peach"
    },
    "uk": {
      "name": "Peach",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Peach"
    },
    "fr": {
      "name": "Peach",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Peach"
    }
  },
  {
    "visual": "cherry-red-marachino",
    "category": "pantry",
    "price": "Rp 100.000",
    "en": {
      "name": "Cherry Red Marachino",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Cherry Red Marachino"
    },
    "id": {
      "name": "Cherry Red Marachino",
      "unit": "1 PCS",
      "tag": "Segar",
      "detail": "",
      "description": "Cherry Red Marachino"
    },
    "ru": {
      "name": "Cherry Red Marachino",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Cherry Red Marachino"
    },
    "it": {
      "name": "Cherry Red Marachino",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Cherry Red Marachino"
    },
    "zh": {
      "name": "Cherry Red Marachino",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Cherry Red Marachino"
    },
    "uk": {
      "name": "Cherry Red Marachino",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Cherry Red Marachino"
    },
    "fr": {
      "name": "Cherry Red Marachino",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Cherry Red Marachino"
    }
  },
  {
    "visual": "cocoa-powder-90-gr",
    "category": "spices",
    "price": "Rp 24.000",
    "en": {
      "name": "Cocoa Powder 90 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Cocoa Powder 90 Gr"
    },
    "id": {
      "name": "Cocoa Powder 90 Gr",
      "unit": "1 PCS",
      "tag": "Segar",
      "detail": "",
      "description": "Cocoa Powder 90 Gr"
    },
    "ru": {
      "name": "Cocoa Powder 90 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Cocoa Powder 90 Gr"
    },
    "it": {
      "name": "Cocoa Powder 90 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Cocoa Powder 90 Gr"
    },
    "zh": {
      "name": "Cocoa Powder 90 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Cocoa Powder 90 Gr"
    },
    "uk": {
      "name": "Cocoa Powder 90 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Cocoa Powder 90 Gr"
    },
    "fr": {
      "name": "Cocoa Powder 90 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Cocoa Powder 90 Gr"
    }
  },
  {
    "visual": "hot-chilli-powder-500gr",
    "category": "spices",
    "price": "Rp 122.000",
    "en": {
      "name": "Hot Chilli Powder 500gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Hot Chilli Powder 500gr"
    },
    "id": {
      "name": "Hot Chilli Powder 500gr",
      "unit": "1 PCS",
      "tag": "Segar",
      "detail": "",
      "description": "Hot Chilli Powder 500gr"
    },
    "ru": {
      "name": "Hot Chilli Powder 500gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Hot Chilli Powder 500gr"
    },
    "it": {
      "name": "Hot Chilli Powder 500gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Hot Chilli Powder 500gr"
    },
    "zh": {
      "name": "Hot Chilli Powder 500gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Hot Chilli Powder 500gr"
    },
    "uk": {
      "name": "Hot Chilli Powder 500gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Hot Chilli Powder 500gr"
    },
    "fr": {
      "name": "Hot Chilli Powder 500gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Hot Chilli Powder 500gr"
    }
  },
  {
    "visual": "smoke-paprika-powder-500gr",
    "category": "spices",
    "price": "Rp 163.000",
    "en": {
      "name": "Smoke Paprika Powder 500gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Smoke Paprika Powder 500gr"
    },
    "id": {
      "name": "Smoke Paprika Powder 500gr",
      "unit": "1 PCS",
      "tag": "Segar",
      "detail": "",
      "description": "Smoke Paprika Powder 500gr"
    },
    "ru": {
      "name": "Smoke Paprika Powder 500gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Smoke Paprika Powder 500gr"
    },
    "it": {
      "name": "Smoke Paprika Powder 500gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Smoke Paprika Powder 500gr"
    },
    "zh": {
      "name": "Smoke Paprika Powder 500gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Smoke Paprika Powder 500gr"
    },
    "uk": {
      "name": "Smoke Paprika Powder 500gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Smoke Paprika Powder 500gr"
    },
    "fr": {
      "name": "Smoke Paprika Powder 500gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Smoke Paprika Powder 500gr"
    }
  },
  {
    "visual": "cumin-powder-500-gr",
    "category": "spices",
    "price": "Rp 138.000",
    "en": {
      "name": "Cumin Powder 500 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Cumin Powder 500 Gr"
    },
    "id": {
      "name": "Cumin Powder 500 Gr",
      "unit": "1 PCS",
      "tag": "Segar",
      "detail": "",
      "description": "Cumin Powder 500 Gr"
    },
    "ru": {
      "name": "Cumin Powder 500 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Cumin Powder 500 Gr"
    },
    "it": {
      "name": "Cumin Powder 500 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Cumin Powder 500 Gr"
    },
    "zh": {
      "name": "Cumin Powder 500 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Cumin Powder 500 Gr"
    },
    "uk": {
      "name": "Cumin Powder 500 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Cumin Powder 500 Gr"
    },
    "fr": {
      "name": "Cumin Powder 500 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Cumin Powder 500 Gr"
    }
  },
  {
    "visual": "rosemary-powder-250-gr",
    "category": "spices",
    "price": "Rp 84.000",
    "en": {
      "name": "Rosemary Powder 250 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Rosemary Powder 250 Gr"
    },
    "id": {
      "name": "Rosemary Powder 250 Gr",
      "unit": "1 PCS",
      "tag": "Segar",
      "detail": "",
      "description": "Rosemary Powder 250 Gr"
    },
    "ru": {
      "name": "Rosemary Powder 250 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Rosemary Powder 250 Gr"
    },
    "it": {
      "name": "Rosemary Powder 250 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Rosemary Powder 250 Gr"
    },
    "zh": {
      "name": "Rosemary Powder 250 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Rosemary Powder 250 Gr"
    },
    "uk": {
      "name": "Rosemary Powder 250 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Rosemary Powder 250 Gr"
    },
    "fr": {
      "name": "Rosemary Powder 250 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Rosemary Powder 250 Gr"
    }
  },
  {
    "visual": "cinamon-powder-500-gr",
    "category": "spices",
    "price": "Rp 117.000",
    "en": {
      "name": "Cinamon Powder 500 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Cinamon Powder 500 Gr"
    },
    "id": {
      "name": "Cinamon Powder 500 Gr",
      "unit": "1 PCS",
      "tag": "Segar",
      "detail": "",
      "description": "Cinamon Powder 500 Gr"
    },
    "ru": {
      "name": "Cinamon Powder 500 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Cinamon Powder 500 Gr"
    },
    "it": {
      "name": "Cinamon Powder 500 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Cinamon Powder 500 Gr"
    },
    "zh": {
      "name": "Cinamon Powder 500 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Cinamon Powder 500 Gr"
    },
    "uk": {
      "name": "Cinamon Powder 500 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Cinamon Powder 500 Gr"
    },
    "fr": {
      "name": "Cinamon Powder 500 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Cinamon Powder 500 Gr"
    }
  },
  {
    "visual": "onion-powder-500-gr",
    "category": "spices",
    "price": "Rp 107.000",
    "en": {
      "name": "Onion Powder 500 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Onion Powder 500 Gr"
    },
    "id": {
      "name": "Onion Powder 500 Gr",
      "unit": "1 PCS",
      "tag": "Segar",
      "detail": "",
      "description": "Onion Powder 500 Gr"
    },
    "ru": {
      "name": "Onion Powder 500 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Onion Powder 500 Gr"
    },
    "it": {
      "name": "Onion Powder 500 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Onion Powder 500 Gr"
    },
    "zh": {
      "name": "Onion Powder 500 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Onion Powder 500 Gr"
    },
    "uk": {
      "name": "Onion Powder 500 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Onion Powder 500 Gr"
    },
    "fr": {
      "name": "Onion Powder 500 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Onion Powder 500 Gr"
    }
  },
  {
    "visual": "garlic-powder-500-gr",
    "category": "spices",
    "price": "Rp 94.000",
    "en": {
      "name": "Garlic Powder 500 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Garlic Powder 500 Gr"
    },
    "id": {
      "name": "Garlic Powder 500 Gr",
      "unit": "1 PCS",
      "tag": "Segar",
      "detail": "",
      "description": "Garlic Powder 500 Gr"
    },
    "ru": {
      "name": "Garlic Powder 500 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Garlic Powder 500 Gr"
    },
    "it": {
      "name": "Garlic Powder 500 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Garlic Powder 500 Gr"
    },
    "zh": {
      "name": "Garlic Powder 500 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Garlic Powder 500 Gr"
    },
    "uk": {
      "name": "Garlic Powder 500 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Garlic Powder 500 Gr"
    },
    "fr": {
      "name": "Garlic Powder 500 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Garlic Powder 500 Gr"
    }
  },
  {
    "visual": "pitted-olives-black-500gr",
    "category": "spices",
    "price": "Rp 69.000",
    "en": {
      "name": "Pitted Olives (black) 500gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Pitted Olives (black) 500gr"
    },
    "id": {
      "name": "Pitted Olives (black) 500gr",
      "unit": "1 PCS",
      "tag": "Segar",
      "detail": "",
      "description": "Pitted Olives (black) 500gr"
    },
    "ru": {
      "name": "Pitted Olives (black) 500gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Pitted Olives (black) 500gr"
    },
    "it": {
      "name": "Pitted Olives (black) 500gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Pitted Olives (black) 500gr"
    },
    "zh": {
      "name": "Pitted Olives (black) 500gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Pitted Olives (black) 500gr"
    },
    "uk": {
      "name": "Pitted Olives (black) 500gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Pitted Olives (black) 500gr"
    },
    "fr": {
      "name": "Pitted Olives (black) 500gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Pitted Olives (black) 500gr"
    }
  },
  {
    "visual": "pitted-olives-green-500gr",
    "category": "spices",
    "price": "Rp 69.000",
    "en": {
      "name": "Pitted Olives (green) 500gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Pitted Olives (green) 500gr"
    },
    "id": {
      "name": "Pitted Olives (green) 500gr",
      "unit": "1 PCS",
      "tag": "Segar",
      "detail": "",
      "description": "Pitted Olives (green) 500gr"
    },
    "ru": {
      "name": "Pitted Olives (green) 500gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Pitted Olives (green) 500gr"
    },
    "it": {
      "name": "Pitted Olives (green) 500gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Pitted Olives (green) 500gr"
    },
    "zh": {
      "name": "Pitted Olives (green) 500gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Pitted Olives (green) 500gr"
    },
    "uk": {
      "name": "Pitted Olives (green) 500gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Pitted Olives (green) 500gr"
    },
    "fr": {
      "name": "Pitted Olives (green) 500gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Pitted Olives (green) 500gr"
    }
  },
  {
    "visual": "french-mustard",
    "category": "spices",
    "price": "Rp 75.000",
    "en": {
      "name": "French Mustard",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "French Mustard"
    },
    "id": {
      "name": "Yellow Mustard",
      "unit": "1 PCS",
      "tag": "Segar",
      "detail": "",
      "description": "Yellow Mustard"
    },
    "ru": {
      "name": "French Mustard",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "French Mustard"
    },
    "it": {
      "name": "French Mustard",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "French Mustard"
    },
    "zh": {
      "name": "French Mustard",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "French Mustard"
    },
    "uk": {
      "name": "French Mustard",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "French Mustard"
    },
    "fr": {
      "name": "French Mustard",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "French Mustard"
    }
  },
  {
    "visual": "kwetiu",
    "category": "pantry",
    "price": "Rp 15.000",
    "en": {
      "name": "Kwetiu",
      "unit": "PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Kwetiu"
    },
    "id": {
      "name": "Kwetiu",
      "unit": "PCS",
      "tag": "Segar",
      "detail": "",
      "description": "Kwetiu"
    },
    "ru": {
      "name": "Kwetiu",
      "unit": "PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Kwetiu"
    },
    "it": {
      "name": "Kwetiu",
      "unit": "PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Kwetiu"
    },
    "zh": {
      "name": "Kwetiu",
      "unit": "PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Kwetiu"
    },
    "uk": {
      "name": "Kwetiu",
      "unit": "PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Kwetiu"
    },
    "fr": {
      "name": "Kwetiu",
      "unit": "PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Kwetiu"
    }
  },
  {
    "visual": "rice-vinegar-bottle",
    "category": "pantry",
    "price": "Rp 33.000",
    "en": {
      "name": "Rice Vinegar Bottle",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Rice Vinegar Bottle"
    },
    "id": {
      "name": "Rice Vinegar Bottle",
      "unit": "1 PCS",
      "tag": "Segar",
      "detail": "",
      "description": "Rice Vinegar Bottle"
    },
    "ru": {
      "name": "Rice Vinegar Bottle",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Rice Vinegar Bottle"
    },
    "it": {
      "name": "Rice Vinegar Bottle",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Rice Vinegar Bottle"
    },
    "zh": {
      "name": "Rice Vinegar Bottle",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Rice Vinegar Bottle"
    },
    "uk": {
      "name": "Rice Vinegar Bottle",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Rice Vinegar Bottle"
    },
    "fr": {
      "name": "Rice Vinegar Bottle",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Rice Vinegar Bottle"
    }
  },
  {
    "visual": "white-sugar",
    "category": "pantry",
    "price": "Rp 25.000",
    "en": {
      "name": "White Sugar",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "White Sugar"
    },
    "id": {
      "name": "White Sugar",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "White Sugar"
    },
    "ru": {
      "name": "White Sugar",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "White Sugar"
    },
    "it": {
      "name": "White Sugar",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "White Sugar"
    },
    "zh": {
      "name": "White Sugar",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "White Sugar"
    },
    "uk": {
      "name": "White Sugar",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "White Sugar"
    },
    "fr": {
      "name": "White Sugar",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "White Sugar"
    }
  },
  {
    "visual": "white-sugar-sachet-100-pcs",
    "category": "pantry",
    "price": "Rp 75.000",
    "en": {
      "name": "White Sugar Sachet 100 Pcs",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "White Sugar Sachet 100 Pcs"
    },
    "id": {
      "name": "White Sugar Sachet 100 Pcs",
      "unit": "1 PCS",
      "tag": "Segar",
      "detail": "",
      "description": "White Sugar Sachet 100 Pcs"
    },
    "ru": {
      "name": "White Sugar Sachet 100 Pcs",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "White Sugar Sachet 100 Pcs"
    },
    "it": {
      "name": "White Sugar Sachet 100 Pcs",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "White Sugar Sachet 100 Pcs"
    },
    "zh": {
      "name": "White Sugar Sachet 100 Pcs",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "White Sugar Sachet 100 Pcs"
    },
    "uk": {
      "name": "White Sugar Sachet 100 Pcs",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "White Sugar Sachet 100 Pcs"
    },
    "fr": {
      "name": "White Sugar Sachet 100 Pcs",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "White Sugar Sachet 100 Pcs"
    }
  },
  {
    "visual": "gula-batu-pack",
    "category": "pantry",
    "price": "Rp 19.000",
    "en": {
      "name": "Gula Batu Pack",
      "unit": "PACK",
      "tag": "Fresh",
      "detail": "",
      "description": "Gula Batu Pack"
    },
    "id": {
      "name": "Gula Batu Pack",
      "unit": "PACK",
      "tag": "Segar",
      "detail": "",
      "description": "Gula Batu Pack"
    },
    "ru": {
      "name": "Gula Batu Pack",
      "unit": "PACK",
      "tag": "Fresh",
      "detail": "",
      "description": "Gula Batu Pack"
    },
    "it": {
      "name": "Gula Batu Pack",
      "unit": "PACK",
      "tag": "Fresh",
      "detail": "",
      "description": "Gula Batu Pack"
    },
    "zh": {
      "name": "Gula Batu Pack",
      "unit": "PACK",
      "tag": "Fresh",
      "detail": "",
      "description": "Gula Batu Pack"
    },
    "uk": {
      "name": "Gula Batu Pack",
      "unit": "PACK",
      "tag": "Fresh",
      "detail": "",
      "description": "Gula Batu Pack"
    },
    "fr": {
      "name": "Gula Batu Pack",
      "unit": "PACK",
      "tag": "Fresh",
      "detail": "",
      "description": "Gula Batu Pack"
    }
  },
  {
    "visual": "brown-sugar",
    "category": "pantry",
    "price": "Rp 44.000",
    "en": {
      "name": "Brown Sugar",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Brown Sugar"
    },
    "id": {
      "name": "Brown Sugar",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Brown Sugar"
    },
    "ru": {
      "name": "Brown Sugar",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Brown Sugar"
    },
    "it": {
      "name": "Brown Sugar",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Brown Sugar"
    },
    "zh": {
      "name": "Brown Sugar",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Brown Sugar"
    },
    "uk": {
      "name": "Brown Sugar",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Brown Sugar"
    },
    "fr": {
      "name": "Brown Sugar",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Brown Sugar"
    }
  },
  {
    "visual": "brown-sugar-sachet-100-pcs",
    "category": "pantry",
    "price": "Rp 79.000",
    "en": {
      "name": "Brown Sugar Sachet 100 Pcs",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Brown Sugar Sachet 100 Pcs"
    },
    "id": {
      "name": "Brown Sugar Sachet 100 Pcs",
      "unit": "1 PCS",
      "tag": "Segar",
      "detail": "",
      "description": "Brown Sugar Sachet 100 Pcs"
    },
    "ru": {
      "name": "Brown Sugar Sachet 100 Pcs",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Brown Sugar Sachet 100 Pcs"
    },
    "it": {
      "name": "Brown Sugar Sachet 100 Pcs",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Brown Sugar Sachet 100 Pcs"
    },
    "zh": {
      "name": "Brown Sugar Sachet 100 Pcs",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Brown Sugar Sachet 100 Pcs"
    },
    "uk": {
      "name": "Brown Sugar Sachet 100 Pcs",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Brown Sugar Sachet 100 Pcs"
    },
    "fr": {
      "name": "Brown Sugar Sachet 100 Pcs",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Brown Sugar Sachet 100 Pcs"
    }
  },
  {
    "visual": "honey-blomsom",
    "category": "pantry",
    "price": "Rp 47.000",
    "en": {
      "name": "Honey Blomsom",
      "unit": "BTL",
      "tag": "Fresh",
      "detail": "",
      "description": "Honey Blomsom"
    },
    "id": {
      "name": "Madu",
      "unit": "BTL",
      "tag": "Segar",
      "detail": "",
      "description": "Madu"
    },
    "ru": {
      "name": "Honey Blomsom",
      "unit": "BTL",
      "tag": "Fresh",
      "detail": "",
      "description": "Honey Blomsom"
    },
    "it": {
      "name": "Honey Blomsom",
      "unit": "BTL",
      "tag": "Fresh",
      "detail": "",
      "description": "Honey Blomsom"
    },
    "zh": {
      "name": "Honey Blomsom",
      "unit": "BTL",
      "tag": "Fresh",
      "detail": "",
      "description": "Honey Blomsom"
    },
    "uk": {
      "name": "Honey Blomsom",
      "unit": "BTL",
      "tag": "Fresh",
      "detail": "",
      "description": "Honey Blomsom"
    },
    "fr": {
      "name": "Honey Blomsom",
      "unit": "BTL",
      "tag": "Fresh",
      "detail": "",
      "description": "Honey Blomsom"
    }
  },
  {
    "visual": "sesame-oil",
    "category": "pantry",
    "price": "Rp 57.000",
    "en": {
      "name": "Sesame Oil",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Sesame Oil"
    },
    "id": {
      "name": "Minyak Wijen",
      "unit": "1 PCS",
      "tag": "Segar",
      "detail": "",
      "description": "Minyak Wijen"
    },
    "ru": {
      "name": "Sesame Oil",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Sesame Oil"
    },
    "it": {
      "name": "Sesame Oil",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Sesame Oil"
    },
    "zh": {
      "name": "Sesame Oil",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Sesame Oil"
    },
    "uk": {
      "name": "Sesame Oil",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Sesame Oil"
    },
    "fr": {
      "name": "Sesame Oil",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Sesame Oil"
    }
  },
  {
    "visual": "homemade-coconut-oil-600-ml",
    "category": "pantry",
    "price": "Rp 35.000",
    "en": {
      "name": "Homemade Coconut Oil 600 Ml",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Homemade Coconut Oil 600 Ml"
    },
    "id": {
      "name": "Homemade Coconut Oil 600 Ml",
      "unit": "1 PCS",
      "tag": "Segar",
      "detail": "",
      "description": "Homemade Coconut Oil 600 Ml"
    },
    "ru": {
      "name": "Homemade Coconut Oil 600 Ml",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Homemade Coconut Oil 600 Ml"
    },
    "it": {
      "name": "Homemade Coconut Oil 600 Ml",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Homemade Coconut Oil 600 Ml"
    },
    "zh": {
      "name": "Homemade Coconut Oil 600 Ml",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Homemade Coconut Oil 600 Ml"
    },
    "uk": {
      "name": "Homemade Coconut Oil 600 Ml",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Homemade Coconut Oil 600 Ml"
    },
    "fr": {
      "name": "Homemade Coconut Oil 600 Ml",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Homemade Coconut Oil 600 Ml"
    }
  },
  {
    "visual": "kecap-ikan",
    "category": "pantry",
    "price": "Rp 48.000",
    "en": {
      "name": "Kecap Ikan",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Kecap Ikan"
    },
    "id": {
      "name": "Fish Sauce (650ml)",
      "unit": "1 PCS",
      "tag": "Segar",
      "detail": "",
      "description": "Fish Sauce (650ml)"
    },
    "ru": {
      "name": "Kecap Ikan",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Kecap Ikan"
    },
    "it": {
      "name": "Kecap Ikan",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Kecap Ikan"
    },
    "zh": {
      "name": "Kecap Ikan",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Kecap Ikan"
    },
    "uk": {
      "name": "Kecap Ikan",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Kecap Ikan"
    },
    "fr": {
      "name": "Kecap Ikan",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Kecap Ikan"
    }
  },
  {
    "visual": "kecap-asin",
    "category": "pantry",
    "price": "Rp 32.000",
    "en": {
      "name": "Kecap Asin",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Kecap Asin"
    },
    "id": {
      "name": "Kecap Asin",
      "unit": "1 PCS",
      "tag": "Segar",
      "detail": "",
      "description": "Kecap Asin"
    },
    "ru": {
      "name": "Kecap Asin",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Kecap Asin"
    },
    "it": {
      "name": "Kecap Asin",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Kecap Asin"
    },
    "zh": {
      "name": "Kecap Asin",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Kecap Asin"
    },
    "uk": {
      "name": "Kecap Asin",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Kecap Asin"
    },
    "fr": {
      "name": "Kecap Asin",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Kecap Asin"
    }
  },
  {
    "visual": "tomato-ketchup-bottle",
    "category": "pantry",
    "price": "Rp 27.000",
    "en": {
      "name": "Tomato Ketchup Bottle",
      "unit": "BTL",
      "tag": "Fresh",
      "detail": "",
      "description": "Tomato Ketchup Bottle"
    },
    "id": {
      "name": "Tomato Ketchup Bottle",
      "unit": "BTL",
      "tag": "Segar",
      "detail": "",
      "description": "Tomato Ketchup Bottle"
    },
    "ru": {
      "name": "Tomato Ketchup Bottle",
      "unit": "BTL",
      "tag": "Fresh",
      "detail": "",
      "description": "Tomato Ketchup Bottle"
    },
    "it": {
      "name": "Tomato Ketchup Bottle",
      "unit": "BTL",
      "tag": "Fresh",
      "detail": "",
      "description": "Tomato Ketchup Bottle"
    },
    "zh": {
      "name": "Tomato Ketchup Bottle",
      "unit": "BTL",
      "tag": "Fresh",
      "detail": "",
      "description": "Tomato Ketchup Bottle"
    },
    "uk": {
      "name": "Tomato Ketchup Bottle",
      "unit": "BTL",
      "tag": "Fresh",
      "detail": "",
      "description": "Tomato Ketchup Bottle"
    },
    "fr": {
      "name": "Tomato Ketchup Bottle",
      "unit": "BTL",
      "tag": "Fresh",
      "detail": "",
      "description": "Tomato Ketchup Bottle"
    }
  },
  {
    "visual": "tomato-ketchup-5l",
    "category": "pantry",
    "price": "Rp 144.000",
    "en": {
      "name": "Tomato Ketchup 5l",
      "unit": "JERIGEN",
      "tag": "Fresh",
      "detail": "",
      "description": "Tomato Ketchup 5l"
    },
    "id": {
      "name": "Tomato Ketchup 5l",
      "unit": "JERIGEN",
      "tag": "Segar",
      "detail": "",
      "description": "Tomato Ketchup 5l"
    },
    "ru": {
      "name": "Tomato Ketchup 5l",
      "unit": "JERIGEN",
      "tag": "Fresh",
      "detail": "",
      "description": "Tomato Ketchup 5l"
    },
    "it": {
      "name": "Tomato Ketchup 5l",
      "unit": "JERIGEN",
      "tag": "Fresh",
      "detail": "",
      "description": "Tomato Ketchup 5l"
    },
    "zh": {
      "name": "Tomato Ketchup 5l",
      "unit": "JERIGEN",
      "tag": "Fresh",
      "detail": "",
      "description": "Tomato Ketchup 5l"
    },
    "uk": {
      "name": "Tomato Ketchup 5l",
      "unit": "JERIGEN",
      "tag": "Fresh",
      "detail": "",
      "description": "Tomato Ketchup 5l"
    },
    "fr": {
      "name": "Tomato Ketchup 5l",
      "unit": "JERIGEN",
      "tag": "Fresh",
      "detail": "",
      "description": "Tomato Ketchup 5l"
    }
  },
  {
    "visual": "tomato-peel-2-5-kg",
    "category": "pantry",
    "price": "Rp 138.000",
    "en": {
      "name": "Tomato Peel 2,5 Kg",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Tomato Peel 2,5 Kg"
    },
    "id": {
      "name": "Tomato Peel 2,5 Kg",
      "unit": "1 PCS",
      "tag": "Segar",
      "detail": "",
      "description": "Tomato Peel 2,5 Kg"
    },
    "ru": {
      "name": "Tomato Peel 2,5 Kg",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Tomato Peel 2,5 Kg"
    },
    "it": {
      "name": "Tomato Peel 2,5 Kg",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Tomato Peel 2,5 Kg"
    },
    "zh": {
      "name": "Tomato Peel 2,5 Kg",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Tomato Peel 2,5 Kg"
    },
    "uk": {
      "name": "Tomato Peel 2,5 Kg",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Tomato Peel 2,5 Kg"
    },
    "fr": {
      "name": "Tomato Peel 2,5 Kg",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Tomato Peel 2,5 Kg"
    }
  },
  {
    "visual": "tomato-pasre-2-5-kg",
    "category": "pantry",
    "price": "Rp 275.000",
    "en": {
      "name": "Tomato Pasre 2,5 Kg",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Tomato Pasre 2,5 Kg"
    },
    "id": {
      "name": "Tomato Pasre 2,5 Kg",
      "unit": "1 PCS",
      "tag": "Segar",
      "detail": "",
      "description": "Tomato Pasre 2,5 Kg"
    },
    "ru": {
      "name": "Tomato Pasre 2,5 Kg",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Tomato Pasre 2,5 Kg"
    },
    "it": {
      "name": "Tomato Pasre 2,5 Kg",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Tomato Pasre 2,5 Kg"
    },
    "zh": {
      "name": "Tomato Pasre 2,5 Kg",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Tomato Pasre 2,5 Kg"
    },
    "uk": {
      "name": "Tomato Pasre 2,5 Kg",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Tomato Pasre 2,5 Kg"
    },
    "fr": {
      "name": "Tomato Pasre 2,5 Kg",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Tomato Pasre 2,5 Kg"
    }
  },
  {
    "visual": "fish-sauce-650ml",
    "category": "pantry",
    "price": "Rp 48.000",
    "en": {
      "name": "Fish Sauce (650ml)",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Fish Sauce (650ml)"
    },
    "id": {
      "name": "Fish Sauce (650ml)",
      "unit": "1 PCS",
      "tag": "Segar",
      "detail": "",
      "description": "Fish Sauce (650ml)"
    },
    "ru": {
      "name": "Fish Sauce (650ml)",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Fish Sauce (650ml)"
    },
    "it": {
      "name": "Fish Sauce (650ml)",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Fish Sauce (650ml)"
    },
    "zh": {
      "name": "Fish Sauce (650ml)",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Fish Sauce (650ml)"
    },
    "uk": {
      "name": "Fish Sauce (650ml)",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Fish Sauce (650ml)"
    },
    "fr": {
      "name": "Fish Sauce (650ml)",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Fish Sauce (650ml)"
    }
  },
  {
    "visual": "sauce-bangkok",
    "category": "pantry",
    "price": "Rp 29.000",
    "en": {
      "name": "Sauce Bangkok",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Sauce Bangkok"
    },
    "id": {
      "name": "Sauce Bangkok",
      "unit": "1 PCS",
      "tag": "Segar",
      "detail": "",
      "description": "Sauce Bangkok"
    },
    "ru": {
      "name": "Sauce Bangkok",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Sauce Bangkok"
    },
    "it": {
      "name": "Sauce Bangkok",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Sauce Bangkok"
    },
    "zh": {
      "name": "Sauce Bangkok",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Sauce Bangkok"
    },
    "uk": {
      "name": "Sauce Bangkok",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Sauce Bangkok"
    },
    "fr": {
      "name": "Sauce Bangkok",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Sauce Bangkok"
    }
  },
  {
    "visual": "sesame-tahini-sauce-1ltr",
    "category": "pantry",
    "price": "Rp 194.000",
    "en": {
      "name": "Sesame Tahini Sauce 1ltr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Sesame Tahini Sauce 1ltr"
    },
    "id": {
      "name": "Sesame Tahini Sauce 1ltr",
      "unit": "1 PCS",
      "tag": "Segar",
      "detail": "",
      "description": "Sesame Tahini Sauce 1ltr"
    },
    "ru": {
      "name": "Sesame Tahini Sauce 1ltr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Sesame Tahini Sauce 1ltr"
    },
    "it": {
      "name": "Sesame Tahini Sauce 1ltr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Sesame Tahini Sauce 1ltr"
    },
    "zh": {
      "name": "Sesame Tahini Sauce 1ltr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Sesame Tahini Sauce 1ltr"
    },
    "uk": {
      "name": "Sesame Tahini Sauce 1ltr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Sesame Tahini Sauce 1ltr"
    },
    "fr": {
      "name": "Sesame Tahini Sauce 1ltr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Sesame Tahini Sauce 1ltr"
    }
  },
  {
    "visual": "soy-sauce",
    "category": "pantry",
    "price": "Rp 49.000",
    "en": {
      "name": "Soy Sauce",
      "unit": "BTL",
      "tag": "Fresh",
      "detail": "",
      "description": "Soy Sauce"
    },
    "id": {
      "name": "Soy Sauce",
      "unit": "BTL",
      "tag": "Segar",
      "detail": "",
      "description": "Soy Sauce"
    },
    "ru": {
      "name": "Soy Sauce",
      "unit": "BTL",
      "tag": "Fresh",
      "detail": "",
      "description": "Soy Sauce"
    },
    "it": {
      "name": "Soy Sauce",
      "unit": "BTL",
      "tag": "Fresh",
      "detail": "",
      "description": "Soy Sauce"
    },
    "zh": {
      "name": "Soy Sauce",
      "unit": "BTL",
      "tag": "Fresh",
      "detail": "",
      "description": "Soy Sauce"
    },
    "uk": {
      "name": "Soy Sauce",
      "unit": "BTL",
      "tag": "Fresh",
      "detail": "",
      "description": "Soy Sauce"
    },
    "fr": {
      "name": "Soy Sauce",
      "unit": "BTL",
      "tag": "Fresh",
      "detail": "",
      "description": "Soy Sauce"
    }
  },
  {
    "visual": "quinoa-red",
    "category": "pantry",
    "price": "Rp 169.000",
    "en": {
      "name": "Quinoa Red",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Quinoa Red"
    },
    "id": {
      "name": "Quinoa Red",
      "unit": "1 PCS",
      "tag": "Segar",
      "detail": "",
      "description": "Quinoa Red"
    },
    "ru": {
      "name": "Quinoa Red",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Quinoa Red"
    },
    "it": {
      "name": "Quinoa Red",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Quinoa Red"
    },
    "zh": {
      "name": "Quinoa Red",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Quinoa Red"
    },
    "uk": {
      "name": "Quinoa Red",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Quinoa Red"
    },
    "fr": {
      "name": "Quinoa Red",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Quinoa Red"
    }
  },
  {
    "visual": "white-quinoa",
    "category": "pantry",
    "price": "Rp 169.000",
    "en": {
      "name": "White Quinoa",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "White Quinoa"
    },
    "id": {
      "name": "White Quinoa",
      "unit": "1 PCS",
      "tag": "Segar",
      "detail": "",
      "description": "White Quinoa"
    },
    "ru": {
      "name": "White Quinoa",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "White Quinoa"
    },
    "it": {
      "name": "White Quinoa",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "White Quinoa"
    },
    "zh": {
      "name": "White Quinoa",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "White Quinoa"
    },
    "uk": {
      "name": "White Quinoa",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "White Quinoa"
    },
    "fr": {
      "name": "White Quinoa",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "White Quinoa"
    }
  },
  {
    "visual": "tri-color-quinoa-1kg",
    "category": "pantry",
    "price": "Rp 169.000",
    "en": {
      "name": "Tri Color Quinoa 1kg",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Tri Color Quinoa 1kg"
    },
    "id": {
      "name": "Tri Color Quinoa 1kg",
      "unit": "1 PCS",
      "tag": "Segar",
      "detail": "",
      "description": "Tri Color Quinoa 1kg"
    },
    "ru": {
      "name": "Tri Color Quinoa 1kg",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Tri Color Quinoa 1kg"
    },
    "it": {
      "name": "Tri Color Quinoa 1kg",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Tri Color Quinoa 1kg"
    },
    "zh": {
      "name": "Tri Color Quinoa 1kg",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Tri Color Quinoa 1kg"
    },
    "uk": {
      "name": "Tri Color Quinoa 1kg",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Tri Color Quinoa 1kg"
    },
    "fr": {
      "name": "Tri Color Quinoa 1kg",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Tri Color Quinoa 1kg"
    }
  },
  {
    "visual": "kulit-spring-roll-besar",
    "category": "pantry",
    "price": "Rp 35.000",
    "en": {
      "name": "Kulit Spring Roll Besar",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Kulit Spring Roll Besar"
    },
    "id": {
      "name": "Kulit Spring Roll Besar",
      "unit": "1 PCS",
      "tag": "Segar",
      "detail": "",
      "description": "Kulit Spring Roll Besar"
    },
    "ru": {
      "name": "Kulit Spring Roll Besar",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Kulit Spring Roll Besar"
    },
    "it": {
      "name": "Kulit Spring Roll Besar",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Kulit Spring Roll Besar"
    },
    "zh": {
      "name": "Kulit Spring Roll Besar",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Kulit Spring Roll Besar"
    },
    "uk": {
      "name": "Kulit Spring Roll Besar",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Kulit Spring Roll Besar"
    },
    "fr": {
      "name": "Kulit Spring Roll Besar",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Kulit Spring Roll Besar"
    }
  },
  {
    "visual": "local-salt",
    "category": "pantry",
    "price": "Rp 17.000",
    "en": {
      "name": "Local Salt",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Local Salt"
    },
    "id": {
      "name": "Garam Local",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Garam Local"
    },
    "ru": {
      "name": "Local Salt",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Local Salt"
    },
    "it": {
      "name": "Local Salt",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Local Salt"
    },
    "zh": {
      "name": "Local Salt",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Local Salt"
    },
    "uk": {
      "name": "Local Salt",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Local Salt"
    },
    "fr": {
      "name": "Local Salt",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Local Salt"
    }
  },
  {
    "visual": "tamarine-500-gr",
    "category": "pantry",
    "price": "Rp 47.000",
    "en": {
      "name": "Tamarine 500 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Tamarine 500 Gr"
    },
    "id": {
      "name": "Tamarine 500 Gr",
      "unit": "1 PCS",
      "tag": "Segar",
      "detail": "",
      "description": "Tamarine 500 Gr"
    },
    "ru": {
      "name": "Tamarine 500 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Tamarine 500 Gr"
    },
    "it": {
      "name": "Tamarine 500 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Tamarine 500 Gr"
    },
    "zh": {
      "name": "Tamarine 500 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Tamarine 500 Gr"
    },
    "uk": {
      "name": "Tamarine 500 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Tamarine 500 Gr"
    },
    "fr": {
      "name": "Tamarine 500 Gr",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Tamarine 500 Gr"
    }
  },
  {
    "visual": "tamarine-1-kg",
    "category": "pantry",
    "price": "Rp 90.000",
    "en": {
      "name": "Tamarine 1 Kg",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Tamarine 1 Kg"
    },
    "id": {
      "name": "Tamarine 1 Kg",
      "unit": "1 PCS",
      "tag": "Segar",
      "detail": "",
      "description": "Tamarine 1 Kg"
    },
    "ru": {
      "name": "Tamarine 1 Kg",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Tamarine 1 Kg"
    },
    "it": {
      "name": "Tamarine 1 Kg",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Tamarine 1 Kg"
    },
    "zh": {
      "name": "Tamarine 1 Kg",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Tamarine 1 Kg"
    },
    "uk": {
      "name": "Tamarine 1 Kg",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Tamarine 1 Kg"
    },
    "fr": {
      "name": "Tamarine 1 Kg",
      "unit": "1 PCS",
      "tag": "Fresh",
      "detail": "",
      "description": "Tamarine 1 Kg"
    }
  },
  {
    "visual": "breadcrumb",
    "category": "pantry",
    "price": "Rp 47.000",
    "en": {
      "name": "Breadcrumb",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Breadcrumb"
    },
    "id": {
      "name": "Breadcrumb",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Breadcrumb"
    },
    "ru": {
      "name": "Breadcrumb",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Breadcrumb"
    },
    "it": {
      "name": "Breadcrumb",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Breadcrumb"
    },
    "zh": {
      "name": "Breadcrumb",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Breadcrumb"
    },
    "uk": {
      "name": "Breadcrumb",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Breadcrumb"
    },
    "fr": {
      "name": "Breadcrumb",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Breadcrumb"
    }
  },
  {
    "visual": "melon",
    "category": "pantry",
    "price": "Rp 23.000",
    "en": {
      "name": "Melon",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Melon"
    },
    "id": {
      "name": "Melon",
      "unit": "KG",
      "tag": "Segar",
      "detail": "",
      "description": "Melon"
    },
    "ru": {
      "name": "Melon",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Melon"
    },
    "it": {
      "name": "Melon",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Melon"
    },
    "zh": {
      "name": "Melon",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Melon"
    },
    "uk": {
      "name": "Melon",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Melon"
    },
    "fr": {
      "name": "Melon",
      "unit": "KG",
      "tag": "Fresh",
      "detail": "",
      "description": "Melon"
    }
  }
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

  const categoryFilter = catalog.dataset.catalog;
  let filteredProducts = products;
  if (categoryFilter && categoryFilter !== 'all') {
      const categories = categoryFilter.split(',').map(c => c.trim());
      filteredProducts = products.filter(p => categories.includes(p.category));
  }

  catalog.innerHTML = filteredProducts
    .map((product) => {
      const content = product[currentLanguage];

      return `
        <article class="product-card">
          <div class="fruit-visual">
            <img src="assets/${product.category || 'fruits'}/${product.visual}.jpg" alt="${content.name}" onerror="this.src='assets/vegetables/vegetables.png'" />
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
                data-cart-image="assets/${product.category || 'fruits'}/${product.visual}.jpg"
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

const catCards = document.querySelectorAll(".veg-cat-card");
catCards.forEach(card => {
  card.addEventListener("click", () => {
    catCards.forEach(c => c.classList.remove("active"));
    card.classList.add("active");
    if (catalog) {
      catalog.dataset.catalog = card.dataset.cat;
      renderCatalog();
    }
  });
});



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

document.addEventListener('DOMContentLoaded', () => {
  const scrollTopBtn = document.createElement('button');
  scrollTopBtn.className = 'scroll-to-top';
  scrollTopBtn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M12 4l-8 8h6v8h4v-8h6z"/></svg>';
  scrollTopBtn.setAttribute('aria-label', 'Torna su');
  document.body.appendChild(scrollTopBtn);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  scrollTopBtn.addEventListener('click', () => {
    const menu = document.querySelector('.veg-category-grid');
    if (menu && menu.offsetHeight > 0) {
      const y = menu.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
});
