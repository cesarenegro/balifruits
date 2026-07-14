const faqLanguageSelect = document.querySelector("[data-language-select]");
const faqAccordion = document.querySelector("[data-faq-accordion]");
const faqHeader = document.querySelector("[data-header]");
const faqSupportedLanguages = ["en", "ru", "id", "it", "zh", "uk"];
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
  id: {
    title: "BALI FRUITS | FAQ",
    metaDescription: "Pertanyaan yang sering diajukan tentang pengiriman, sumber, pengemasan, penggantian, dan pemesanan BALI FRUITS.",
    navHarvest: "Panen Hari Ini",
    navBoxes: "Kotak",
    navDelivery: "Pengiriman",
    navSources: "Sumber",
    navFaq: "FAQ",
    zoneCanggu: "Canggu",
    faqEyebrow: "Pertanyaan yang Sering Diajukan",
    faqHeroTitle: "Semua yang biasanya ditanyakan pelanggan, di satu tempat.",
    faqHeroCopy: "Detail pengiriman, sumber, pengemasan, penggantian, dan pemesanan untuk BALI FRUITS.",
    faqHeroCardLabel: "FAQ Lengkap",
    faqHeroCardTitle: "30 jawaban, siap untuk dibaca.",
    faqHeroCardCopy: "Jawaban yang jelas dan langsung untuk rumah, vila, restoran, dan pesanan mingguan rutin.",
    mobileHome: "Beranda",
    mobileShop: "Belanja",
    mobileBoxes: "Kotak",
    mobileZone: "Zona",
    mobileAccount: "Keranjang",
    items: [
      {
        title: "1. Apa yang dikirim BALI FRUITS?",
        html: "<p>BALI FRUITS mengirimkan buah-buahan segar, sayuran, bumbu, dan pilihan produk pilihan dari petani lokal Bali ke rumah, vila, dan bisnis di seluruh Bali.</p>",
      },
      {
        title: "2. Apakah Anda hanya mengirim buah?",
        html: "<p>Tidak. Meskipun nama mereknya BALI FRUITS, layanan ini juga mencakup sayuran, sayuran berdaun hijau, bumbu, produk ramah smoothie, dan kotak panen musiman.</p>",
      },
      {
        title: "3. Di mana Anda melakukan pengiriman di Bali?",
        html: "<p>Pengiriman diatur berdasarkan zona layanan di seluruh Bali. Area utama dapat mencakup Canggu, Berawa, Pererenan, Seminyak, Kuta, Sanur, Denpasar, Ubud, Jimbaran, Uluwatu, Nusa Dua, dan area sekitar yang dipilih.</p>",
      },
      {
        title: "4. Bagaimana zona pengiriman dihitung?",
        html: "<p>Zona pengiriman didasarkan pada alamat pelanggan, jarak, rute harian, dan ketersediaan pengiriman. Zona akhir dikonfirmasi setelah kami memeriksa detail alamat.</p>",
      },
      {
        title: "5. Apakah pengiriman hari berikutnya?",
        html: "<p>Ya. BALI FRUITS menawarkan pengiriman hari berikutnya sebagai layanan standar kami. Kami mungkin juga menerima pengiriman mendesak, tergantung pada ketersediaan produk, zona pengiriman, dan kapasitas rute harian.</p><p>Untuk konfirmasi pengiriman mendesak, silakan kirim pesan kepada kami di WhatsApp.</p>",
      },
      {
        title: "6. Apakah pengiriman tersedia setiap hari?",
        html: "<p>Ketersediaan pengiriman tergantung pada zona Anda dan perencanaan rute harian. Kami mengonfirmasi ketersediaan setelah menerima alamat dan detail pesanan Anda.</p>",
      },
      {
        title: "7. Dapatkah saya memesan untuk pengiriman di hari yang sama atau mendesak?",
        html: "<p>Ya, pengiriman mendesak mungkin tersedia tergantung ketersediaan hasil bumi, area pengiriman Anda, dan rute pengiriman harian.</p><p>Silakan hubungi kami di WhatsApp untuk konfirmasi segera sebelum melakukan pesanan mendesak.</p>",
      },
      {
        title: "8. Jam berapa pesanan saya akan tiba?",
        html: "<p>Pengiriman standar dijadwalkan antara pukul 09:00 dan 12:00.</p><p>Waktu pengiriman mungkin sedikit berbeda tergantung pada area Anda, lalu lintas, dan perencanaan rute harian.</p>",
      },
      {
        title: "9. Berapa biaya pengirimannya?",
        html: "<p>Biaya pengiriman didasarkan pada zona layanan:</p><ul><li>Zona 3: pengiriman gratis</li><li>Zona 1 dan Zona 2: biaya pengiriman tetap IDR 35.000</li><li>Zona 4 dan Zona 5: biaya pengiriman tetap IDR 50.000</li></ul><p>Zona pengiriman akhir dikonfirmasi berdasarkan alamat pengiriman.</p>",
      },
      {
        title: "10. Apakah ada minimum pesanan?",
        html: "<p>Minimum pesanan mungkin berlaku berdasarkan zona pengiriman. Informasi ini ditunjukkan saat checkout atau dikonfirmasi sebelum menyelesaikan pesanan.</p>",
      },
      {
        title: "11. Dari mana buah dan sayuran berasal?",
        html: "<p>Semua produk BALI FRUITS bersumber secara lokal dari Bali. Sebagian besar hasil bumi kami berasal dari pertanian yang lebih kecil, jaringan lokal, dan petani independen.</p><p>Kami menghindari bahan impor, dan lebih mengutamakan pertanian Bali.</p>",
      },
      {
        title: "12. Apakah semuanya organik?",
        html: "<p>Banyak petani lokal mempraktikkan metode organik atau biologis. Meskipun tidak semuanya bersertifikat organik, kami memilih opsi paling alami yang tersedia untuk buah, sayuran, dan bumbu.</p>",
      },
      {
        title: "13. Apa arti source-tracked?",
        html: "<p>Kami bertujuan untuk mengidentifikasi setidaknya area pertumbuhan, distributor, atau komunitas petani. Transparansi ini membantu pelanggan memahami dari mana makanan mereka berasal.</p>",
      },
      {
        title: "14. Apakah produk dicuci?",
        html: "<p>Produk diseka atau dibersihkan perlahan sebelum dikemas. Namun, kami sangat menyarankan Anda mencuci semua buah dan sayuran dengan benar sebelum dikonsumsi.</p>",
      },
      {
        title: "15. Apa saja pilihan kemasannya?",
        html: "<p>Kami menggunakan kantong kertas kraft, amplop kertas, keranjang kardus, dan stiker bermerek. Kami bertujuan meminimalkan plastik demi bahan yang alami dan dapat terurai secara hayati.</p>",
      },
      {
        title: "16. Bolehkah saya memilih barang tertentu?",
        html: "<p>Ya, Anda dapat memilih buah, sayur, dan herba satu per satu dari menu kami untuk membuat kotak Anda sendiri.</p>",
      },
      {
        title: "17. Apakah Anda menawarkan kotak atau set siap pakai?",
        html: "<p>Ya. Anda dapat memilih kotak buah campuran, bundel smoothie, kotak makan ramah keluarga, atau koleksi produk spesialis untuk pengiriman yang cepat dan mudah.</p>",
      },
      {
        title: "18. Apa yang terjadi jika barang tidak tersedia?",
        html: "<p>Hasil bumi Bali bersifat musiman. Jika suatu barang yang Anda pesan kehabisan stok, kami dapat menawarkan opsi pengganti, yang akan disepakati melalui WhatsApp sebelum pengiriman.</p>",
      },
      {
        title: "19. Bisakah saya meminta penggantian dalam bundel pra-dibuat?",
        html: "<p>Kami dapat mengakomodasi permintaan kecil, misalnya 'tukar nanas dengan pisang ekstra'. Silakan tinggalkan catatan di bagian komentar pesanan Anda, dan kami akan mengonfirmasinya jika memungkinkan.</p>",
      },
      {
        title: "20. Bisakah saya meminta tingkat kematangan tertentu?",
        html: "<p>Anda dapat menambahkan catatan (misalnya 'alpukat siap makan' atau 'pisang hijau'). Kami akan melakukan yang terbaik untuk memenuhi permintaan Anda berdasarkan apa yang telah dipanen.</p>",
      },
      {
        title: "21. Apakah Anda mengirim ke vila atau Airbnb?",
        html: "<p>Ya, kami rutin mengirim ke tamu vila dan pengunjung jangka pendek. Pastikan Anda memberikan nama vila, nomor referensi, dan nomor WhatsApp lokal yang benar.</p>",
      },
      {
        title: "22. Bisakah saya mengatur pesanan mingguan berulang?",
        html: "<p>Ya. Pesanan berulang biasa dilakukan di antara klien perumahan. Beri tahu kami preferensi Anda di WhatsApp, dan kami akan mengatur pengiriman mingguan otomatis.</p>",
      },
      {
        title: "23. Apakah Anda melayani restoran dan kafe?",
        html: "<p>Ya. Menu kami populer di kalangan kafe kecil, pusat retret, dan koki swasta. Untuk opsi harga B2B atau pengiriman rute yang konsisten, silakan kirimkan pesan kepada kami.</p>",
      },
      {
        title: "24. Apa saja metode pembayarannya?",
        html: "<p>Kami menerima transfer bank, GoPay, dan layanan transfer lainnya. Detail pembayaran akan diberikan di checkout atau dikirim melalui WhatsApp setelah pesanan dikonfirmasi.</p>",
      },
      {
        title: "25. Apakah saya perlu berada di rumah untuk pengiriman?",
        html: "<p>Jika Anda tidak berada di rumah, staf kami akan mencoba menyerahkan kepada pihak keamanan, penerima tamu vila, atau akan meninggalkan produk dengan aman jika instruksi telah diberikan dengan jelas. Harap diingat buah dan sayuran sensitif terhadap cuaca panas, jadi pengumpulan cepat sangat dianjurkan.</p>",
      },
      {
        title: "26. Bagaimana jika produknya rusak?",
        html: "<p>Kami memeriksa setiap barang sebelum dikemas. Jika pesanan Anda tiba dalam kondisi rusak, silakan kirim foto di hari yang sama, dan kami akan menawarkan penggantian, kredit, atau penyesuaian sesuai kelayakan.</p>",
      },
      {
        title: "27. Dapatkah saya membatalkan atau mengubah pesanan?",
        html: "<p>Modifikasi dapat dilakukan hingga barang Anda dikemas dan dijadwalkan untuk dikirim. Hubungi kami secepatnya jika Anda perlu mengubah alamat atau membatalkannya.</p>",
      },
      {
        title: "28. Bagaimana mengetahui buah yang sedang musim?",
        html: "<p>Toko kami sering diperbarui untuk mencerminkan musim. Mengikuti saluran media sosial kami atau obrolan WhatsApp kami akan memberi Anda informasi tentang buah apa yang sedang dipanen sekarang.</p>",
      },
      {
        title: "29. Berapa lama produk tersebut bisa bertahan?",
        html: "<p>Buah dan sayuran organik lebih cepat rusak di iklim Bali. Kami menyarankan untuk menyimpannya di lemari es jika Anda tidak akan mengonsumsinya dalam 24-48 jam. Produk tertentu (seperti kemangi) memerlukan perawatan khusus.</p>",
      },
      {
        title: "30. Bagaimana saya bisa menghubungi dukungan pelanggan?",
        html: "<p>Cara terbaik menghubungi kami adalah melalui WhatsApp. Anda akan melihat ikon obrolan kami di situs web, atau nomor kami yang tertera di layar konfirmasi checkout Anda.</p>",
      },
    ],
  },
  it: {
    title: "BALI FRUITS | FAQ",
    metaDescription: "Domande frequenti su consegna, approvvigionamento, imballaggio, sostituzioni e ordini con BALI FRUITS.",
    navHarvest: "Il Raccolto di Oggi",
    navBoxes: "Box",
    navDelivery: "Consegna",
    navSources: "Fonti",
    navFaq: "FAQ",
    zoneCanggu: "Canggu",
    faqEyebrow: "Domande Frequenti",
    faqHeroTitle: "Tutto ciò che i clienti chiedono di solito, in un unico posto.",
    faqHeroCopy: "Dettagli su consegna, approvvigionamento, imballaggio, sostituzioni e ordini per BALI FRUITS.",
    faqHeroCardLabel: "FAQ Complete",
    faqHeroCardTitle: "30 risposte, pronte da sfogliare.",
    faqHeroCardCopy: "Risposte chiare e dirette per case, ville, ristoranti e ordini settimanali regolari.",
    mobileHome: "Home",
    mobileShop: "Negozio",
    mobileBoxes: "Box",
    mobileZone: "Zona",
    mobileAccount: "Carrello",
    items: [
      {
        title: "1. Cosa consegna BALI FRUITS?",
        html: "<p>BALI FRUITS consegna frutta fresca, verdura, erbe aromatiche e selezioni di prodotti curati dai coltivatori locali di Bali a case, ville e aziende in tutta Bali.</p>",
      },
      {
        title: "2. Consegnate solo frutta?",
        html: "<p>No. Anche se il marchio è BALI FRUITS, il servizio include verdure, verdure a foglia verde, erbe, prodotti per frullati e box di raccolto stagionale.</p>",
      },
      {
        title: "3. Dove consegnate a Bali?",
        html: "<p>La consegna è organizzata in zone di servizio a Bali. Le aree principali possono includere Canggu, Berawa, Pererenan, Seminyak, Kuta, Sanur, Denpasar, Ubud, Jimbaran, Uluwatu, Nusa Dua e aree circostanti selezionate.</p>",
      },
      {
        title: "4. Come vengono calcolate le zone di consegna?",
        html: "<p>Le zone di consegna si basano sull'indirizzo del cliente, sulla distanza, sul percorso giornaliero e sulla disponibilità di consegna. La zona finale viene confermata dopo aver controllato i dettagli dell'indirizzo.</p>",
      },
      {
        title: "5. È disponibile la consegna il giorno successivo?",
        html: "<p>Sì. BALI FRUITS offre la consegna il giorno successivo come servizio standard. Possiamo anche accettare consegne urgenti, a seconda della disponibilità del prodotto, della zona di consegna e della capacità del percorso giornaliero.</p><p>Per conferme di consegne urgenti, inviaci un messaggio su WhatsApp.</p>",
      },
      {
        title: "6. La consegna è disponibile tutti i giorni?",
        html: "<p>La disponibilità della consegna dipende dalla tua zona e dalla pianificazione del percorso giornaliero. Confermiamo la disponibilità dopo aver ricevuto il tuo indirizzo e i dettagli dell'ordine.</p>",
      },
      {
        title: "7. Posso ordinare per una consegna in giornata o urgente?",
        html: "<p>Sì, le consegne urgenti potrebbero essere disponibili a seconda della disponibilità dei prodotti, della tua zona di consegna e del percorso giornaliero.</p><p>Contattaci su WhatsApp per una conferma immediata prima di effettuare un ordine urgente.</p>",
      },
      {
        title: "8. A che ora arriverà il mio ordine?",
        html: "<p>Le consegne standard sono programmate tra le 9:00 e le 12:00.</p><p>I tempi di consegna potrebbero variare leggermente a seconda della tua zona, del traffico e della pianificazione del percorso giornaliero.</p>",
      },
      {
        title: "9. Quanto costa la consegna?",
        html: "<p>I costi di consegna si basano sulla zona di servizio:</p><ul><li>Zona 3: consegna gratuita</li><li>Zona 1 e Zona 2: costo fisso di consegna di IDR 35.000</li><li>Zona 4 e Zona 5: costo fisso di consegna di IDR 50.000</li></ul><p>La zona di consegna finale viene confermata in base all'indirizzo di spedizione.</p>",
      },
      {
        title: "10. C'è un ordine minimo?",
        html: "<p>Potrebbe essere applicato un ordine minimo in base alla zona di consegna. Queste informazioni vengono visualizzate al momento del checkout o confermate prima di finalizzare l'ordine.</p>",
      },
      {
        title: "11. Da dove provengono la frutta e la verdura?",
        html: "<p>Tutti i prodotti di BALI FRUITS provengono localmente da Bali. La stragrande maggioranza proviene da piccole fattorie, reti locali e agricoltori indipendenti.</p><p>Evitiamo le importazioni, dando invece la priorità all'agricoltura balinese.</p>",
      },
      {
        title: "12. È tutto biologico?",
        html: "<p>Molti agricoltori locali praticano metodi biologici o biologici naturali. Anche se non tutto è certificato biologicamente, scegliamo l'opzione più naturale disponibile per frutta, verdura ed erbe.</p>",
      },
      {
        title: "13. Cosa significa source-tracked?",
        html: "<p>Cerchiamo di identificare almeno l'area di crescita, il distributore o la comunità contadina. Questa trasparenza aiuta i clienti a capire da dove proviene il loro cibo.</p>",
      },
      {
        title: "14. I prodotti vengono lavati?",
        html: "<p>I prodotti vengono leggermente puliti o puliti prima dell'imballaggio. Ti consigliamo comunque di lavare tutta la frutta e la verdura prima del consumo.</p>",
      },
      {
        title: "15. Quali sono le opzioni di imballaggio?",
        html: "<p>Usiamo sacchetti di carta kraft, buste di carta, cestini di cartone e adesivi del marchio. Miriamo a ridurre al minimo la plastica a favore di materiali naturali e biodegradabili.</p>",
      },
      {
        title: "16. Posso selezionare i singoli articoli?",
        html: "<p>Sì, puoi scegliere frutta, verdura e verdure singolarmente dal nostro menu per creare il tuo box.</p>",
      },
      {
        title: "17. Offrite box o set preconfezionati?",
        html: "<p>Sì. Puoi selezionare scatole di frutta mista, pacchetti di frullati, box per famiglie o collezioni di prodotti specializzati per consegne facili e veloci.</p>",
      },
      {
        title: "18. Cosa succede se un articolo non è disponibile?",
        html: "<p>I prodotti a Bali sono stagionali. Se un articolo che hai ordinato è esaurito, potremmo offrire un'opzione di sostituzione, che verrà concordata tramite WhatsApp prima della spedizione.</p>",
      },
      {
        title: "19. Posso richiedere sostituzioni nei box pre-assemblati?",
        html: "<p>Possiamo soddisfare piccole richieste, come 'scambia l'ananas con banane extra'. Lascia un messaggio nei commenti dell'ordine e lo confermeremo se possibile.</p>",
      },
      {
        title: "20. Posso richiedere la maturazione?",
        html: "<p>Puoi aggiungere note (ad es. 'avocado pronti da mangiare' o 'banane verdi'). Faremo del nostro meglio per soddisfare la richiesta in base a ciò che è stato raccolto.</p>",
      },
      {
        title: "21. Consegnate a ville o Airbnb?",
        html: "<p>Sì, consegniamo regolarmente agli ospiti di ville e Airbnb. Assicurati di fornire il nome della villa, i numeri di riferimento e un numero WhatsApp locale corretto.</p>",
      },
      {
        title: "22. Posso impostare un ordine settimanale ricorrente?",
        html: "<p>Sì. Gli ordini ricorrenti sono comuni tra i clienti residenziali. Facci sapere le tue preferenze su WhatsApp e organizzeremo la consegna settimanale automatica.</p>",
      },
      {
        title: "23. Fornite ristoranti e caffè?",
        html: "<p>Sì. Il nostro menu è popolare tra i piccoli caffè, i centri di ritiro e gli chef privati. Per opzioni di prezzo B2B o consegne costanti, inviaci un messaggio.</p>",
      },
      {
        title: "24. Quali sono i metodi di pagamento?",
        html: "<p>Accettiamo bonifici bancari, GoPay e altri servizi di trasferimento. I dettagli di pagamento saranno forniti al momento del checkout o inviati tramite WhatsApp una volta confermato l'ordine.</p>",
      },
      {
        title: "25. Devo essere a casa per la consegna?",
        html: "<p>Se non sei a casa, il nostro personale cercherà di consegnare alla sicurezza, alla reception della villa, o lascerà il prodotto in sicurezza se sono state fornite istruzioni chiare. Ricorda che frutta e verdura sono sensibili al caldo.</p>",
      },
      {
        title: "26. E se il prodotto è danneggiato?",
        html: "<p>Ispezioniamo ogni articolo prima che venga imballato. Se l'ordine arriva danneggiato, inviaci una foto lo stesso giorno e offriremo una sostituzione, un credito o un rimborso se applicabile.</p>",
      },
      {
        title: "27. Posso cancellare o modificare il mio ordine?",
        html: "<p>Le modifiche possono essere effettuate fino a quando i tuoi articoli non vengono imballati e programmati per la consegna. Contattaci il prima possibile per modifiche o cancellazioni.</p>",
      },
      {
        title: "28. Come so quale frutta è di stagione?",
        html: "<p>Il nostro negozio viene spesso aggiornato in base alla stagione. Seguire i nostri social media o il nostro WhatsApp ti fornirà le informazioni più recenti sui raccolti.</p>",
      },
      {
        title: "29. Quanto dureranno i prodotti?",
        html: "<p>I prodotti biologici deperiscono più velocemente nel clima di Bali. Consigliamo di conservarli in frigorifero se non si consumano entro 24-48 ore.</p>",
      },
      {
        title: "30. Come posso contattare il supporto clienti?",
        html: "<p>Il modo migliore è tramite WhatsApp. Vedrai la nostra icona chat sul sito web o il nostro numero nella schermata di conferma del pagamento.</p>",
      },
    ],
  },
  zh: {
    title: "BALI FRUITS | 常见问题",
    metaDescription: "关于 BALI FRUITS 的配送、货源、包装、替代和订购的常见问题。",
    navHarvest: "今日采摘",
    navBoxes: "套餐盒",
    navDelivery: "配送",
    navSources: "来源",
    navFaq: "常见问题",
    zoneCanggu: "长谷",
    faqEyebrow: "常见问题",
    faqHeroTitle: "客户经常询问的一切都在这里。",
    faqHeroCopy: "BALI FRUITS 的配送、来源、包装、替代品和订购详情。",
    faqHeroCardLabel: "完整常见问题解答",
    faqHeroCardTitle: "30 个回答，供您浏览。",
    faqHeroCardCopy: "针对家庭、别墅、餐厅和定期每周订单的清晰直接的解答。",
    mobileHome: "首页",
    mobileShop: "商店",
    mobileBoxes: "套餐盒",
    mobileZone: "区域",
    mobileAccount: "购物车",
    items: [
      {
        title: "1. BALI FRUITS 配送什么？",
        html: "<p>BALI FRUITS 将当地种植者精选的新鲜水果、蔬菜、香草和农产品送到巴厘岛的家庭、别墅和企业。</p>",
      },
      {
        title: "2. 你们只送水果吗？",
        html: "<p>不。即使品牌名为 BALI FRUITS，服务也涵盖蔬菜、绿叶蔬菜、香草、适合做冰沙的农产品以及应季收获盒。</p>",
      },
      {
        title: "3. 你们在巴厘岛哪些地方配送？",
        html: "<p>配送按巴厘岛的服务区域组织。主要区域可能包括长谷、贝拉瓦、佩雷雷南、水明漾、库塔、沙努尔、登巴萨、乌布、金巴兰、乌鲁瓦图、努沙杜瓦及选定的周边地区。</p>",
      },
      {
        title: "4. 配送区域是如何计算的？",
        html: "<p>配送区域取决于客户地址、距离、日常路线和配送可用性。在核对地址详情后将确认最终区域。</p>",
      },
      {
        title: "5. 是次日配送吗？",
        html: "<p>是的。BALI FRUITS 提供次日配送作为我们的标准服务。我们也可根据产品可用性、配送区域和日常路线负荷接受紧急配送。</p><p>有关紧急配送的确认，请在 WhatsApp 上给我们发送消息。</p>",
      },
      {
        title: "6. 每天都有配送吗？",
        html: "<p>配送可用性取决于您所在的区域和日常路线规划。我们会在收到您的地址和订单详情后确认可用性。</p>",
      },
      {
        title: "7. 我可以订购当日达或急件吗？",
        html: "<p>是的，紧急配送的可用性取决于农产品供应情况、您的配送区域和日常配送路线。</p><p>在下紧急订单前，请通过 WhatsApp 联系我们以获取即时确认。</p>",
      },
      {
        title: "8. 我的订单几点到达？",
        html: "<p>标准配送计划在上午 9:00 至中午 12:00 之间进行。</p><p>配送时间可能会因您所在的区域、交通和日常路线规划而略有不同。</p>",
      },
      {
        title: "9. 配送费是多少？",
        html: "<p>配送费用按服务区域计算：</p><ul><li>区域 3：免费配送</li><li>区域 1 和区域 2：固定配送费 35,000 印尼盾</li><li>区域 4 和区域 5：固定配送费 50,000 印尼盾</li></ul><p>最终配送区域将根据配送地址进行确认。</p>",
      },
      {
        title: "10. 有最低起送量吗？",
        html: "<p>最低起送量可能会根据配送区域而有所不同。此信息会在结账时显示，或在完成订单前进行确认。</p>",
      },
      {
        title: "11. 水果和蔬菜来自哪里？",
        html: "<p>BALI FRUITS 的所有农产品均源自巴厘岛当地。绝大多数来自小型农场、当地网络和独立农民。</p><p>我们避免使用进口材料，优先支持巴厘岛的农业。</p>",
      },
      {
        title: "12. 一切都是有机的吗？",
        html: "<p>许多当地农民采用有机或生物种植方法。虽然并非所有产品都有机认证，但我们为水果、蔬菜和香草选择了最自然的选择。</p>",
      },
      {
        title: "13. 来源追踪是什么意思？",
        html: "<p>我们旨在至少标明种植区、分销商或农业社区。这种透明度有助于客户了解食物的来源。</p>",
      },
      {
        title: "14. 农产品会清洗吗？",
        html: "<p>在包装之前，会轻轻擦拭或清洁产品。但是，我们强烈建议您在食用前彻底清洗所有水果和蔬菜。</p>",
      },
      {
        title: "15. 包装选项有哪些？",
        html: "<p>我们使用牛皮纸袋、纸信封、纸板篮和品牌贴纸。我们旨在减少塑料，转而使用天然和可生物降解的材料。</p>",
      },
      {
        title: "16. 我可以选择单个商品吗？",
        html: "<p>是的，您可以从我们的菜单中单独选择水果、蔬菜和蔬菜来制作您自己的盒子。</p>",
      },
      {
        title: "17. 你们提供预制的盒子或套餐吗？",
        html: "<p>是的。您可以选择混合水果盒、冰沙套餐、家庭餐盒或专供产品系列，以便快速轻松地进行配送。</p>",
      },
      {
        title: "18. 如果商品缺货怎么办？",
        html: "<p>巴厘岛的农产品具有季节性。如果您订购的商品缺货，我们可能会提供替代选项，并在发货前通过 WhatsApp 商定。</p>",
      },
      {
        title: "19. 我可以在预制套餐中要求更换吗？",
        html: "<p>我们可以满足一些小要求，例如“把菠萝换成香蕉”。请在订单备注中留言，如果可以的话我们会确认。</p>",
      },
      {
        title: "20. 我可以要求熟度吗？",
        html: "<p>您可以添加说明（例如“即食牛油果”或“绿香蕉”）。我们会尽力根据采摘情况满足您的要求。</p>",
      },
      {
        title: "21. 你们送货到别墅或 Airbnb 吗？",
        html: "<p>是的，我们经常为别墅和短期租客送货。请确保提供正确的别墅名称、参考号码和当地的 WhatsApp 号码。</p>",
      },
      {
        title: "22. 我可以设置定期的每周订单吗？",
        html: "<p>是的。定期订单在家庭客户中很常见。请通过 WhatsApp 告知您的偏好，我们会设置自动的每周配送。</p>",
      },
      {
        title: "23. 你们为餐厅和咖啡馆供货吗？",
        html: "<p>是的。我们的菜单很受小型咖啡馆、静修中心和私人厨师的欢迎。对于 B2B 定价选项或固定路线的配送，请给我们留言。</p>",
      },
      {
        title: "24. 你们接受哪些付款方式？",
        html: "<p>我们接受银行转账、GoPay 和其他转账服务。付款详情将在结账时提供或在订单确认后通过 WhatsApp 发送。</p>",
      },
      {
        title: "25. 配送时我需要在家吗？",
        html: "<p>如果您不在家，我们的工作人员将尝试交给安保人员、别墅接待处，或在说明明确的情况下安全地放置产品。请记住水果和蔬菜怕热，因此建议尽快取回。</p>",
      },
      {
        title: "26. 如果农产品损坏了怎么办？",
        html: "<p>我们在包装前检查每件商品。如果您的订单到达时已损坏，请在同一天发送照片，我们将在适当时提供更换、积分或退款。</p>",
      },
      {
        title: "27. 我可以取消或修改订单吗？",
        html: "<p>在您的商品被包装和安排配送之前可以进行修改。如果您需要更改地址或取消，请尽快联系我们。</p>",
      },
      {
        title: "28. 如何知道什么水果是应季的？",
        html: "<p>我们的商店经常会根据季节更新。关注我们的社交媒体或 WhatsApp 聊天会提供最新的采摘信息。</p>",
      },
      {
        title: "29. 产品能保存多久？",
        html: "<p>有机农产品在巴厘岛的气候下更容易腐败。如果您不在 24-48 小时内食用，建议放入冰箱冷藏。</p>",
      },
      {
        title: "30. 如何联系客服？",
        html: "<p>最好的联系方式是通过 WhatsApp。您会在网站上看到我们的聊天图标，或在结账确认屏幕上看到我们的号码。</p>",
      },
    ],
  },
  uk: {
    title: "BALI FRUITS | FAQ",
    metaDescription: "Поширені запитання про доставку, джерела, пакування, заміни та замовлення BALI FRUITS.",
    navHarvest: "Сьогоднішній врожай",
    navBoxes: "Набори",
    navDelivery: "Доставка",
    navSources: "Джерела",
    navFaq: "FAQ",
    zoneCanggu: "Чангу",
    faqEyebrow: "Поширені запитання",
    faqHeroTitle: "Все, що клієнти зазвичай запитують, в одному місці.",
    faqHeroCopy: "Деталі доставки, джерел, пакування, заміни та замовлення для BALI FRUITS.",
    faqHeroCardLabel: "Повний FAQ",
    faqHeroCardTitle: "30 відповідей, готових до перегляду.",
    faqHeroCardCopy: "Чіткі та прямі відповіді для будинків, вілл, ресторанів та регулярних щотижневих замовлень.",
    mobileHome: "Головна",
    mobileShop: "Магазин",
    mobileBoxes: "Набори",
    mobileZone: "Зона",
    mobileAccount: "Кошик",
    items: [
      {
        title: "1. Що доставляє BALI FRUITS?",
        html: "<p>BALI FRUITS доставляє свіжі фрукти, овочі, трави та відібрані продукти від місцевих виробників Балі в будинки, вілли та бізнеси по всьому острову.</p>",
      },
      {
        title: "2. Ви доставляєте лише фрукти?",
        html: "<p>Ні. Хоча бренд називається BALI FRUITS, сервіс також включає овочі, листову зелень, трави, продукти для смузі та сезонні коробки з урожаєм.</p>",
      },
      {
        title: "3. Куди ви доставляєте на Балі?",
        html: "<p>Доставка організована за сервісними зонами Балі. Основні райони можуть включати Чангу, Бераву, Переренан, Семіньяк, Куту, Санур, Денпасар, Убуд, Джимбаран, Улувату, Нуса-Дуа та деякі сусідні райони.</p>",
      },
      {
        title: "4. Як розраховуються зони доставки?",
        html: "<p>Зони доставки залежать від адреси клієнта, відстані, щоденного маршруту та доступності доставки. Кінцева зона підтверджується після перевірки адреси.</p>",
      },
      {
        title: "5. Це доставка на наступний день?",
        html: "<p>Так. BALI FRUITS пропонує доставку на наступний день як стандартний сервіс. Також можлива термінова доставка залежно від доступності продуктів, зони та пропускної здатності маршруту.</p><p>Для термінового підтвердження напишіть нам у WhatsApp.</p>",
      },
      {
        title: "6. Доставка доступна щодня?",
        html: "<p>Доступність доставки залежить від вашої зони та планування маршруту. Ми підтверджуємо можливість після отримання адреси та деталей замовлення.</p>",
      },
      {
        title: "7. Чи можна замовити на сьогодні або терміново?",
        html: "<p>Так, термінова доставка може бути доступна залежно від наявності продукції, вашої зони та щоденного маршруту.</p><p>Будь ласка, зв'яжіться з нами у WhatsApp для негайного підтвердження до оформлення термінового замовлення.</p>",
      },
      {
        title: "8. О котрій годині прибуде замовлення?",
        html: "<p>Стандартна доставка запланована між 9:00 та 12:00.</p><p>Час може трохи змінюватися залежно від району, трафіку та планування маршруту.</p>",
      },
      {
        title: "9. Скільки коштує доставка?",
        html: "<p>Вартість доставки залежить від зони сервісу:</p><ul><li>Зона 3: доставка безкоштовно</li><li>Зона 1 та Зона 2: фіксована вартість доставки 35,000 IDR</li><li>Зона 4 та Зона 5: фіксована вартість доставки 50,000 IDR</li></ul><p>Кінцева зона доставки підтверджується після перевірки адреси клієнта.</p>",
      },
      {
        title: "10. Чи є мінімальне замовлення?",
        html: "<p>Мінімальне замовлення може застосовуватися залежно від зони доставки. Сума відображається перед оплатою або підтверджується до завершення замовлення.</p>",
      },
      {
        title: "11. Звідки фрукти та овочі?",
        html: "<p>Усі товари BALI FRUITS виробляються на Балі та надходять від місцевих фермерів. Більшість надходить з невеликих ферм та від незалежних фермерів.</p><p>Ми уникаємо імпорту, натомість надаємо пріоритет балійському сільському господарству.</p>",
      },
      {
        title: "12. Чи всі продукти органічні?",
        html: "<p>Багато місцевих фермерів використовують органічні та біометоди вирощування. Хоча не все сертифіковано як органічне, ми обираємо найбільш натуральні варіанти.</p>",
      },
      {
        title: "13. Що означає source-tracked?",
        html: "<p>Ми намагаємося ідентифікувати принаймні зону вирощування або фермера. Це дає клієнтам більше прозорості щодо походження продуктів.</p>",
      },
      {
        title: "14. Чи продукти миють перед доставкою?",
        html: "<p>Продукти перевіряються та обережно очищаються перед пакуванням. Але ми радимо мити всі фрукти та овочі перед вживанням.</p>",
      },
      {
        title: "15. Яке пакування ви використовуєте?",
        html: "<p>BALI FRUITS використовує просте натуральне пакування, таке як крафтові коробки, паперові пакети та брендовані наклейки. Ми прагнемо мінімізувати пластик.</p>",
      },
      {
        title: "16. Чи можна вибрати окремі продукти?",
        html: "<p>Так. Клієнти можуть переглядати товари, додавати фрукти та овочі до кошика поштучно.</p>",
      },
      {
        title: "17. Чи є готові набори?",
        html: "<p>Так. BALI FRUITS пропонує готові набори для швидкого замовлення, наприклад, фруктові бокси або набори для сімей.</p>",
      },
      {
        title: "18. Що якщо одного товару немає?",
        html: "<p>Якщо товару немає через врожай, ми зв'яжемося з вами та запропонуємо відповідну заміну або відкоригуємо замовлення.</p>",
      },
      {
        title: "19. Чи можна попросити про заміну в готовому наборі?",
        html: "<p>Так, ви можете залишити нотатки до замовлення. Наприклад, 'без бананів' або 'замінити ананас'. Ми підтвердимо, якщо це можливо.</p>",
      },
      {
        title: "20. Чи можна вибрати стиглі або нестиглі фрукти?",
        html: "<p>Ви можете вказати це у коментарях. Ми зробимо все можливе залежно від поточного врожаю та наявності.</p>",
      },
      {
        title: "21. Чи можна замовити для вілли, готелю або Airbnb?",
        html: "<p>Так. BALI FRUITS підходить для приватних вілл, гостей Airbnb та невеликих готелів.</p>",
      },
      {
        title: "22. Чи можна налаштувати регулярну доставку?",
        html: "<p>Так. Регулярну щотижневу доставку можна організувати для постійних клієнтів. Напишіть нам у WhatsApp.</p>",
      },
      {
        title: "23. Чи можуть замовляти ресторани або кафе?",
        html: "<p>Так. Ресторани, кафе та приватні шефи можуть звертатися до BALI FRUITS за регулярними поставками.</p>",
      },
      {
        title: "24. Як я можу оплатити?",
        html: "<p>Ми приймаємо банківські перекази, GoPay та інші місцеві сервіси. Деталі будуть надані під час підтвердження замовлення.</p>",
      },
      {
        title: "25. Що якщо мене не буде вдома?",
        html: "<p>Будь ласка, залиште чіткі інструкції для охорони або рецепції вілли. Пам'ятайте, що продукти чутливі до спеки.</p>",
      },
      {
        title: "26. Що якщо продукти приїдуть пошкодженими?",
        html: "<p>Будь ласка, зв'яжіться з нами того ж дня та надішліть фото. Ми запропонуємо заміну або повернення коштів.</p>",
      },
      {
        title: "27. Чи можна скасувати замовлення?",
        html: "<p>Замовлення можна змінити або скасувати до початку закупівлі та пакування. Зв'яжіться з нами якомога швидше.</p>",
      },
      {
        title: "28. Чому деякі товари сезонні?",
        html: "<p>BALI FRUITS залежить від місцевих циклів урожаю. Це впливає на наявність та ціни.</p>",
      },
      {
        title: "29. Як довго зберігаються продукти?",
        html: "<p>Органічні продукти псуються швидше в кліматі Балі. Ми радимо зберігати їх у холодильнику.</p>",
      },
      {
        title: "30. Як зв'язатися з підтримкою?",
        html: "<p>Ви можете зв'язатися з BALI FRUITS через WhatsApp, використовуючи номер з сайту або екрану підтвердження.</p>",
      },
    ],
  },,
  fr: {
    title: "BALI FRUITS | FAQ",
    metaDescription: "Questions fréquentes sur la livraison, les origines, l'emballage, les substitutions et les commandes de BALI FRUITS.",
    navHarvest: "Récolte",
    navBoxes: "Paniers",
    navDelivery: "Livraison",
    navSources: "Origines",
    navFaq: "FAQ",
    zoneCanggu: "Canggu",
    faqEyebrow: "Questions fréquentes",
    faqHeroTitle: "Tout ce que les clients demandent habituellement, en un seul endroit.",
    faqHeroCopy: "Détails sur la livraison, l'approvisionnement, l'emballage, les substitutions et les commandes pour BALI FRUITS.",
    faqHeroCardLabel: "FAQ complète",
    faqHeroCardTitle: "30 réponses prêtes à être consultées.",
    faqHeroCardCopy: "Des réponses claires et directes pour les maisons, les villas, les restaurants et les commandes hebdomadaires régulières.",
    mobileHome: "Accueil",
    mobileShop: "Boutique",
    mobileBoxes: "Paniers",
    mobileZone: "Zone",
    mobileAccount: "Panier",
    items: [
      {
            "title": "1. Que livre BALI FRUITS ?",
            "html": "<p>BALI FRUITS livre des fruits frais, des légumes, des herbes et des sélections de produits des producteurs locaux de Bali aux maisons, villas et entreprises à travers Bali.</p>"
      },
      {
            "title": "2. Livrez-vous uniquement des fruits ?",
            "html": "<p>Non. Même si la marque est BALI FRUITS, le service inclut également des légumes, des herbes, des produits pour smoothies et des paniers de récolte saisonnière.</p>"
      },
      {
            "title": "3. Où livrez-vous à Bali ?",
            "html": "<p>La livraison est organisée par zones de service à travers Bali. Les principales zones peuvent inclure Canggu, Berawa, Pererenan, Seminyak, Kuta, Sanur, Ubud, Jimbaran, Uluwatu et certaines zones environnantes.</p>"
      },
      {
            "title": "4. Comment sont calculées les zones de livraison ?",
            "html": "<p>Les zones de livraison sont basées sur l'adresse du client, la distance, l'itinéraire quotidien et la disponibilité de livraison.</p>"
      },
      {
            "title": "5. Est-ce une livraison le lendemain ?",
            "html": "<p>Oui. BALI FRUITS propose la livraison le lendemain comme service standard.</p>"
      },
      {
            "title": "6. Is delivery available every day?",
            "html": "<p>Delivery availability depends on your zone and daily route planning. We confirm availability after receiving your address and order details.</p>"
      },
      {
            "title": "7. Can I order for same-day or urgent delivery?",
            "html": "<p>Yes, urgent deliveries may be available depending on produce availability, your delivery area and the daily delivery route.</p><p>Please contact us on WhatsApp for immediate confirmation before placing an urgent order.</p>"
      },
      {
            "title": "8. What time will my order arrive?",
            "html": "<p>Standard deliveries are scheduled between 9:00 a.m. and 12:00 p.m.</p><p>Delivery timing may vary slightly depending on your area, traffic and daily route planning.</p>"
      },
      {
            "title": "9. How much is the delivery fee?",
            "html": "<p>Delivery fees depend on the service zone:</p><ul><li>Zone 3: free delivery</li><li>Zone 1 and Zone 2: fixed delivery cost of IDR 35,000</li><li>Zone 4 and Zone 5: fixed delivery cost of IDR 50,000</li></ul><p>The final delivery zone is confirmed after checking the customer address.</p>"
      },
      {
            "title": "10. Is there a minimum order?",
            "html": "<p>A minimum order may apply depending on the delivery zone. The amount is shown before checkout or confirmed before the order is finalized.</p>"
      },
      {
            "title": "11. Where do the fruits and vegetables come from?",
            "html": "<p>All BALI FRUITS products are locally produced in Bali and sourced from local farmers using organic and bio cultivation methods.</p><p>We do not buy from bulk importers or extensive farming producers. Our focus is local sourcing, direct grower relationships, freshness and transparent origin.</p>"
      },
      {
            "title": "12. Are all products organic?",
            "html": "<p>Our products come from local growers using organic and bio cultivation methods. When a product has specific certification or grower information available, we indicate it clearly in the product details.</p>"
      },
      {
            "title": "13. What does source-tracked mean?",
            "html": "<p>Source-tracked means that we aim to show where selected produce comes from, including the growing area, supplier or farmer group when available. This gives customers better visibility than ordinary supermarket supply chains.</p>"
      },
      {
            "title": "14. Are products washed before delivery?",
            "html": "<p>Produce is checked and packed carefully. Some items may be lightly cleaned, but we recommend washing all fruits, vegetables and herbs before use.</p>"
      },
      {
            "title": "15. How is the produce packed?",
            "html": "<p>BALI FRUITS uses simple natural packaging such as kraft boxes, paper bags, bio envelopes and branded stickers where possible. Our packaging is designed to feel clean, natural and premium.</p>"
      },
      {
            "title": "16. Can I choose individual products?",
            "html": "<p>Yes. Customers can browse products, add fruits and vegetables to the cart, and place an order through the app or website.</p>"
      },
      {
            "title": "17. Do you offer curated boxes?",
            "html": "<p>Yes. BALI FRUITS offers curated selections such as:</p><ul><li>Tropical Fruit Box: mango, papaya, pineapple, bananas and seasonal specials.</li><li>Family Produce Box: fruit, vegetables and herbs for easy weekly cooking.</li><li>Greens &amp; Smoothie Box: leafy greens, avocado, citrus and smoothie-friendly fruit.</li></ul>"
      },
      {
            "title": "18. What happens if one product is unavailable?",
            "html": "<p>If an item is unavailable due to harvest or daily supply conditions, we will contact you with a suitable replacement or adjust the order.</p>"
      },
      {
            "title": "19. Can I request substitutions?",
            "html": "<p>Yes. Customers can add notes such as “no bananas”, “extra avocado”, “ripe mango only”, or “replace unavailable items with leafy greens”.</p>"
      },
      {
            "title": "20. Can I choose ripe or unripe fruit?",
            "html": "<p>Yes, where possible. Customers can request ripe, medium-ripe or less-ripe fruit in the order notes. Availability depends on daily harvest and supplier stock.</p>"
      },
      {
            "title": "21. Can I order for a villa, hotel or Airbnb?",
            "html": "<p>Yes. BALI FRUITS is suitable for private villas, expat homes, Airbnb stays, retreat villas and small hospitality kitchens.</p>"
      },
      {
            "title": "22. Can I schedule recurring delivery?",
            "html": "<p>Yes. Recurring weekly delivery can be arranged for selected customers, villas and households.</p>"
      },
      {
            "title": "23. Can restaurants or cafés order?",
            "html": "<p>Yes. Restaurants, cafés, retreat kitchens and private chefs can contact BALI FRUITS for regular supply requests.</p>"
      },
      {
            "title": "24. How do I pay?",
            "html": "<p>Available payment methods are shown at checkout or confirmed with your order.</p>"
      },
      {
            "title": "25. What if I am not home during delivery?",
            "html": "<p>Please provide clear delivery instructions, villa name, WhatsApp number, security or gate contact, or a safe drop-off point.</p>"
      },
      {
            "title": "26. What if my produce arrives damaged?",
            "html": "<p>Please contact us on the same day with a photo of the item. We will review the issue and offer a replacement, credit or refund when appropriate.</p>"
      },
      {
            "title": "27. Can I cancel my order?",
            "html": "<p>Orders can be cancelled before sourcing and packing begins. Once the produce has been purchased and prepared, cancellation may no longer be possible.</p>"
      },
      {
            "title": "28. Why are some items seasonal?",
            "html": "<p>BALI FRUITS depends on local harvest cycles. Seasonal changes affect availability, ripeness, price and quality.</p>"
      },
      {
            "title": "29. Why are prices sometimes different from supermarkets?",
            "html": "<p>BALI FRUITS focuses on local sourcing, freshness, quality checking, natural packaging and home delivery. Prices reflect produce quality, grower availability, route cost and service handling.</p>"
      },
      {
            "title": "30. How do I contact BALI FRUITS?",
            "html": "<p>You can contact BALI FRUITS through the website, app, WhatsApp or order confirmation channel.</p>"
      }
]
  }
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
