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
  id: {
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
    add: "Додати",,
  fr: {
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

let products = [];

// ==================== DYNAMIC CATALOG FETCH ====================
async function fetchDynamicCatalog() {
  try {
    const supabaseUrl = localStorage.getItem('BF_SUPABASE_URL') || window.BF_SUPABASE_URL;
    const supabaseKey = localStorage.getItem('BF_SUPABASE_ANON_KEY') || window.BF_SUPABASE_ANON_KEY;
    let data = [];
    
    if (supabaseUrl && supabaseKey) {
      // Fetch from Supabase
      const res = await fetch(`${supabaseUrl}/rest/v1/products?select=*`, {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`
        }
      });
      data = await res.json();
    } else {
      // Fetch from local node server
      const res = await fetch('http://localhost:3050/api/products');
      if (res.ok) {
        data = await res.json();
      } else {
        console.warn('Local API failed, falling back to mock products if any');
      }
    }
    
    // Map CRM data to frontend format
    products = data.map(p => {
      // Reconstruct price string for frontend compatibility, or just let frontend use raw price
      return {
        id: p.id,
        visual: p.visual,
        price: "Rp " + (p.sellingPrice || 0).toLocaleString('id-ID'),
        availability: p.availability || 'In Stock',
        quantity: p.quantity || 0,
        en: p.en,
        ru: p.ru,
        id: p.id,
        it: p.it,
        zh: p.zh,
        uk: p.uk,
        fr: p.fr
      };
    });
  } catch (error) {
    console.error("Failed to fetch products from CRM:", error);
  }
}


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
