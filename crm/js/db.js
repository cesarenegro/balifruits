import { getSupabaseConfig, DEFAULT_DELIVERY_ZONES } from './config.js';

let supabaseInstance = null;

// Initial Mock Data (prepopulated if databases are empty)
const INITIAL_MOCK_DATA = {
  inbox: [
    {
      id: 'msg-1',
      senderName: 'Kadek',
      phoneOrEmail: '+62 813 5555 1234',
      messageText: 'Hello Bali Fruits! Can I order 3kg mangoes and 2kg avocados to Canggu? Address: Jl. Pantai Batu Bolong No. 45. Prefer delivery tomorrow morning please. Payment by bank transfer.',
      source: 'WhatsApp',
      date: new Date(Date.now() - 3600000).toISOString(),
      language: 'English/Indonesian',
      suggestedType: 'New order',
      suggestedAction: 'Create Order',
      status: 'Done',
      orderId: 'order-1001',
      orderNumber: 'BF-1001',
      parsedData: {
        clientName: 'Kadek',
        whatsapp: '+62 813 5555 1234',
        deliveryAddress: 'Jl. Pantai Batu Bolong No. 45',
        deliveryZone: 'Canggu',
        deliveryDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
        timeWindow: '09:00 - 12:00',
        products: [
    {
        id: {
            name: "Pisang Bali",
            unit: "1 kg",
            tag: "Lokal Bali",
            detail: "Sekitar 12-16 buah / kg",
            description: "Pisang lokal kecil yang wangi dan manis seperti madu."
        },
        name: "Bali Banana",
        category: "Tropical Fruits",
        sellingPrice: 24000,
        bestSupplier: "Local Bali Growers",
        supplierPrice: 16800,
        availability: "In Stock",
        qualityRating: 5,
        eta: "Immediate",
        lastUpdate: "2026-07-13T06:38:14.822Z",
        visual: "bali-banana",
        quantity: 100,
        en: {
            name: "Bali Banana",
            unit: "1 kg",
            tag: "Bali local",
            detail: "Approximately 12-16 pieces / kg",
            description: "Smaller local bananas with a fragrant, honey-sweet bite."
        },
        ru: {
            name: "Балийские бананы",
            unit: "1 кг",
            tag: "Местные Бали",
            detail: "Примерно 12-16 штук / кг",
            description: "Небольшие местные бананы с ароматным медово-сладким вкусом."
        },
        it: {
            name: "Banane di Bali",
            unit: "1 kg",
            tag: "Locale di Bali",
            detail: "Circa 12-16 pezzi / kg",
            description: "Piccole banane locali con un morso profumato e dolce come il miele."
        },
        zh: {
            name: "巴厘岛香蕉",
            unit: "1 公斤",
            tag: "巴厘岛当地",
            detail: "约 12-16 个 / 公斤",
            description: "较小的当地香蕉，带有芬芳的蜂蜜甜味。"
        },
        uk: {
            name: "Балійські банани",
            unit: "1 кг",
            tag: "Місцеві Балі",
            detail: "Приблизно 12-16 штук / кг",
            description: "Невеликі місцеві банани з ароматним медово-солодким смаком."
        }
    },
    {
        id: {
            name: "Pisang Cavendish",
            unit: "1 kg",
            tag: "Pengecualian",
            detail: "Sekitar 6-8 buah / kg",
            description: "Gaya Cavendish yang familiar, disertakan untuk keranjang harian."
        },
        name: "Banana Cavendish",
        category: "Tropical Fruits",
        sellingPrice: 28000,
        bestSupplier: "Local Bali Growers",
        supplierPrice: 19600,
        availability: "In Stock",
        qualityRating: 5,
        eta: "Immediate",
        lastUpdate: "2026-07-13T06:38:14.823Z",
        visual: "banana-cavendish",
        quantity: 100,
        en: {
            name: "Banana Cavendish",
            unit: "1 kg",
            tag: "Exception",
            detail: "Approximately 6-8 pieces / kg",
            description: "The familiar Cavendish style, included for everyday baskets."
        },
        ru: {
            name: "Бананы Кавендиш",
            unit: "1 кг",
            tag: "Исключение",
            detail: "Примерно 6-8 штук / кг",
            description: "Привычный сорт Cavendish, добавлен для повседневных заказов."
        },
        it: {
            name: "Banane Cavendish",
            unit: "1 kg",
            tag: "Eccezione",
            detail: "Circa 6-8 pezzi / kg",
            description: "Il familiare stile Cavendish, incluso per i cesti di tutti i giorni."
        },
        zh: {
            name: "卡文迪什香蕉",
            unit: "1 公斤",
            tag: "例外",
            detail: "约 6-8 个 / 公斤",
            description: "熟悉的卡文迪什品种，适合日常购买。"
        },
        uk: {
            name: "Банани Кавендіш",
            unit: "1 кг",
            tag: "Виняток",
            detail: "Приблизно 6-8 штук / кг",
            description: "Звичний сорт Cavendish, доданий для повсякденних кошиків."
        }
    },
    {
        id: {
            name: "Mangga Bali Kecil",
            unit: "1 kg",
            tag: "Musiman",
            detail: "Sekitar 5-7 buah / kg",
            description: "Mangga lokal padat, aromatik dan sedikit bergetah saat matang."
        },
        name: "Small Bali Mango",
        category: "Tropical Fruits",
        sellingPrice: 34000,
        bestSupplier: "Local Bali Growers",
        supplierPrice: 23800,
        availability: "In Stock",
        qualityRating: 5,
        eta: "Immediate",
        lastUpdate: "2026-07-13T06:38:14.823Z",
        visual: "mango-small",
        quantity: 100,
        en: {
            name: "Small Bali Mango",
            unit: "1 kg",
            tag: "Seasonal",
            detail: "Approximately 5-7 pieces / kg",
            description: "Compact local mangoes, aromatic and slightly resinous when ripe."
        },
        ru: {
            name: "Маленькое балийское манго",
            unit: "1 кг",
            tag: "Сезонное",
            detail: "Примерно 5-7 штук / кг",
            description: "Небольшие местные манго, ароматные и слегка смолистые в спелом виде."
        },
        it: {
            name: "Piccolo Mango di Bali",
            unit: "1 kg",
            tag: "Stagionale",
            detail: "Circa 5-7 pezzi / kg",
            description: "Piccoli manghi locali, aromatici e leggermente resinosi quando maturi."
        },
        zh: {
            name: "小巴厘岛芒果",
            unit: "1 公斤",
            tag: "季节性",
            detail: "约 5-7 个 / 公斤",
            description: "紧凑的当地芒果，成熟时芳香且略带树脂味。"
        },
        uk: {
            name: "Маленьке балійське манго",
            unit: "1 кг",
            tag: "Сезонне",
            detail: "Приблизно 5-7 штук / кг",
            description: "Невеликі місцеві манго, ароматні та трохи смолисті у стиглому вигляді."
        }
    },
    {
        id: {
            name: "Mangga Harum Manis Besar",
            unit: "1 kg",
            tag: "Pilihan Premium",
            detail: "Sekitar 2-3 buah / kg",
            description: "Mangga pasar Bali besar dengan daging tebal dan aroma yang kuat."
        },
        name: "Big Harum Manis Mango",
        category: "Tropical Fruits",
        sellingPrice: 42000,
        bestSupplier: "Local Bali Growers",
        supplierPrice: 29399,
        availability: "In Stock",
        qualityRating: 5,
        eta: "Immediate",
        lastUpdate: "2026-07-13T06:38:14.823Z",
        visual: "mango-big",
        quantity: 100,
        en: {
            name: "Big Harum Manis Mango",
            unit: "1 kg",
            tag: "Premium pick",
            detail: "Approximately 2-3 pieces / kg",
            description: "Large Bali-market mangoes with dense flesh and deep perfume."
        },
        ru: {
            name: "Большое манго Harum Manis",
            unit: "1 кг",
            tag: "Премиум выбор",
            detail: "Примерно 2-3 штуки / кг",
            description: "Крупные манго с рынков Бали, плотной мякотью и насыщенным ароматом."
        },
        it: {
            name: "Grande Mango Harum Manis",
            unit: "1 kg",
            tag: "Scelta premium",
            detail: "Circa 2-3 pezzi / kg",
            description: "Grandi manghi del mercato di Bali con polpa densa e profumo profondo."
        },
        zh: {
            name: "大 Harum Manis 芒果",
            unit: "1 公斤",
            tag: "优质精选",
            detail: "约 2-3 个 / 公斤",
            description: "大型巴厘岛市场芒果，果肉致密，香气浓郁。"
        },
        uk: {
            name: "Велике манго Harum Manis",
            unit: "1 кг",
            tag: "Преміум вибір",
            detail: "Приблизно 2-3 штуки / кг",
            description: "Великі манго з ринків Балі, із щільною м'якоттю та глибоким ароматом."
        }
    },
    {
        id: {
            name: "Pepaya Calina Kecil",
            unit: "Per buah",
            tag: "Segera matang",
            detail: "Harga rata-rata per buah",
            description: "Pepaya kecil dengan daging oranye, cocok untuk mangkuk sarapan."
        },
        name: "Small Calina Papaya",
        category: "Tropical Fruits",
        sellingPrice: 24000,
        bestSupplier: "Local Bali Growers",
        supplierPrice: 16800,
        availability: "In Stock",
        qualityRating: 5,
        eta: "Immediate",
        lastUpdate: "2026-07-13T06:38:14.823Z",
        visual: "papaya-small",
        quantity: 100,
        en: {
            name: "Small Calina Papaya",
            unit: "Each",
            tag: "Ripe soon",
            detail: "Average price per piece",
            description: "A smaller papaya with orange flesh, good for breakfast bowls."
        },
        ru: {
            name: "Маленькая папайя Calina",
            unit: "Штука",
            tag: "Скоро спелая",
            detail: "Средняя цена за штуку",
            description: "Небольшая папайя с оранжевой мякотью, хорошо подходит для завтраков."
        },
        it: {
            name: "Piccola Papaya Calina",
            unit: "Pezzo",
            tag: "Presto matura",
            detail: "Prezzo medio per pezzo",
            description: "Una piccola papaya con polpa arancione, ottima per la colazione."
        },
        zh: {
            name: "小 Calina 木瓜",
            unit: "每个",
            tag: "即将成熟",
            detail: "每个平均价格",
            description: "果肉呈橙色的小木瓜，适合早餐食用。"
        },
        uk: {
            name: "Маленька папая Calina",
            unit: "Штука",
            tag: "Скоро стигла",
            detail: "Середня ціна за штуку",
            description: "Невелика папая з помаранчевою м'якоттю, добре підходить для сніданків."
        }
    },
    {
        id: {
            name: "Pepaya Bali Besar",
            unit: "Per buah",
            tag: "Ukuran keluarga",
            detail: "Harga rata-rata per buah",
            description: "Pepaya lokal besar, lebih lembut dan manis daripada potongan supermarket."
        },
        name: "Big Bali Papaya",
        category: "Tropical Fruits",
        sellingPrice: 36000,
        bestSupplier: "Local Bali Growers",
        supplierPrice: 25200,
        availability: "In Stock",
        qualityRating: 5,
        eta: "Immediate",
        lastUpdate: "2026-07-13T06:38:14.823Z",
        visual: "papaya-big",
        quantity: 100,
        en: {
            name: "Big Bali Papaya",
            unit: "Each",
            tag: "Family size",
            detail: "Average price per piece",
            description: "Large local papaya, softer and sweeter than supermarket cuts."
        },
        ru: {
            name: "Большая балийская папайя",
            unit: "Штука",
            tag: "Семейный размер",
            detail: "Средняя цена за штуку",
            description: "Крупная местная папайя, мягче и слаще стандартной супермаркетной."
        },
        it: {
            name: "Grande Papaya di Bali",
            unit: "Pezzo",
            tag: "Formato famiglia",
            detail: "Prezzo medio per pezzo",
            description: "Grande papaya locale, più morbida e dolce dei tagli del supermercato."
        },
        zh: {
            name: "大巴厘岛木瓜",
            unit: "每个",
            tag: "家庭装",
            detail: "每个平均价格",
            description: "大型当地木瓜，比超市切片更软更甜。"
        },
        uk: {
            name: "Велика балійська папая",
            unit: "Штука",
            tag: "Сімейний розмір",
            detail: "Середня ціна за штуку",
            description: "Велика місцева папая, м'якша і солодша за стандартну з супермаркету."
        }
    },
    {
        id: {
            name: "Alpukat Hijau Bali",
            unit: "1 kg",
            tag: "Dataran tinggi Bali",
            detail: "Sekitar 3-5 buah / kg",
            description: "Alpukat lokal berkulit hijau dengan tekstur yang lebih ringan dan segar."
        },
        name: "Bali Green Avocado",
        category: "Tropical Fruits",
        sellingPrice: 45000,
        bestSupplier: "Local Bali Growers",
        supplierPrice: 31499,
        availability: "In Stock",
        qualityRating: 5,
        eta: "Immediate",
        lastUpdate: "2026-07-13T06:38:14.823Z",
        visual: "avocado-green",
        quantity: 100,
        en: {
            name: "Bali Green Avocado",
            unit: "1 kg",
            tag: "Bali highlands",
            detail: "Approximately 3-5 pieces / kg",
            description: "Green-skinned local avocado with a lighter, fresh texture."
        },
        ru: {
            name: "Зеленый балийский авокадо",
            unit: "1 кг",
            tag: "Горные районы Бали",
            detail: "Примерно 3-5 штук / кг",
            description: "Местный зеленокожий авокадо с более легкой и свежей текстурой."
        },
        it: {
            name: "Avocado Verde di Bali",
            unit: "1 kg",
            tag: "Altopiani di Bali",
            detail: "Circa 3-5 pezzi / kg",
            description: "Avocado locale dalla buccia verde con una consistenza più leggera e fresca."
        },
        zh: {
            name: "巴厘岛绿牛油果",
            unit: "1 公斤",
            tag: "巴厘岛高地",
            detail: "约 3-5 个 / 公斤",
            description: "绿皮当地牛油果，质地更轻盈清新。"
        },
        uk: {
            name: "Зелене балійське авокадо",
            unit: "1 кг",
            tag: "Гірські райони Балі",
            detail: "Приблизно 3-5 штук / кг",
            description: "Місцеве зеленошкіре авокадо з більш легкою та свіжою текстурою."
        }
    },
    {
        id: {
            name: "Alpukat Mentega",
            unit: "1 kg",
            tag: "Krim",
            detail: "Sekitar 2-4 buah / kg",
            description: "Alpukat mentega lokal, lebih kaya dan lembut saat matang sempurna."
        },
        name: "Avocado Mentega",
        category: "Tropical Fruits",
        sellingPrice: 55000,
        bestSupplier: "Local Bali Growers",
        supplierPrice: 38500,
        availability: "In Stock",
        qualityRating: 5,
        eta: "Immediate",
        lastUpdate: "2026-07-13T06:38:14.823Z",
        visual: "avocado-butter",
        quantity: 100,
        en: {
            name: "Avocado Mentega",
            unit: "1 kg",
            tag: "Creamy",
            detail: "Approximately 2-4 pieces / kg",
            description: "Buttery local avocado, richer and creamier when fully ripe."
        },
        ru: {
            name: "Авокадо Mentega",
            unit: "1 кг",
            tag: "Кремовый",
            detail: "Примерно 2-4 штуки / кг",
            description: "Маслянистый местный авокадо, особенно насыщенный в полной спелости."
        },
        it: {
            name: "Avocado Mentega",
            unit: "1 kg",
            tag: "Cremoso",
            detail: "Circa 2-4 pezzi / kg",
            description: "Avocado locale burroso, più ricco e cremoso a maturazione completa."
        },
        zh: {
            name: "Mentega 牛油果",
            unit: "1 公斤",
            tag: "奶油般",
            detail: "约 2-4 个 / 公斤",
            description: "黄油般的当地牛油果，完全成熟时更丰富和更像奶油。"
        },
        uk: {
            name: "Авокадо Mentega",
            unit: "1 кг",
            tag: "Кремовий",
            detail: "Приблизно 2-4 штуки / кг",
            description: "Маслянисте місцеве авокадо, особливо насичене та кремове в повній стиглості."
        }
    },
    {
        id: {
            name: "Apel Merah Kintamani",
            unit: "1 kg",
            tag: "Pilihan dataran tinggi",
            detail: "Sekitar 7-9 buah / kg",
            description: "Apel gaya dataran tinggi Bali, lebih kecil dan lebih renyah dari apel impor."
        },
        name: "Kintamani Red Apple",
        category: "Tropical Fruits",
        sellingPrice: 39000,
        bestSupplier: "Local Bali Growers",
        supplierPrice: 27300,
        availability: "In Stock",
        qualityRating: 5,
        eta: "Immediate",
        lastUpdate: "2026-07-13T06:38:14.823Z",
        visual: "apple-red",
        quantity: 100,
        en: {
            name: "Kintamani Red Apple",
            unit: "1 kg",
            tag: "Highland selected",
            detail: "Approximately 7-9 pieces / kg",
            description: "Bali highland-style apple, smaller and crisper than imports."
        },
        ru: {
            name: "Красное яблоко Кинтамани",
            unit: "1 кг",
            tag: "Горный отбор",
            detail: "Примерно 7-9 штук / кг",
            description: "Яблоко из горных районов Бали, меньше и хрустящее по сравнению с импортом."
        },
        it: {
            name: "Mela Rossa Kintamani",
            unit: "1 kg",
            tag: "Selezione degli altopiani",
            detail: "Circa 7-9 pezzi / kg",
            description: "Mela in stile altopiano di Bali, più piccola e croccante rispetto alle importazioni."
        },
        zh: {
            name: "金塔马尼红苹果",
            unit: "1 公斤",
            tag: "高地精选",
            detail: "约 7-9 个 / 公斤",
            description: "巴厘岛高地风格的苹果，比进口苹果更小更脆。"
        },
        uk: {
            name: "Червоне яблуко Кінтамані",
            unit: "1 кг",
            tag: "Гірський відбір",
            detail: "Приблизно 7-9 штук / кг",
            description: "Яблуко з гірських районів Балі, менше та більш хрустке порівняно з імпортом."
        }
    },
    {
        id: {
            name: "Apel Hijau Kintamani",
            unit: "1 kg",
            tag: "Pilihan dataran tinggi",
            detail: "Sekitar 7-9 buah / kg",
            description: "Apel hijau segar dengan keasaman cerah untuk jus dan salad."
        },
        name: "Kintamani Green Apple",
        category: "Tropical Fruits",
        sellingPrice: 38000,
        bestSupplier: "Local Bali Growers",
        supplierPrice: 26600,
        availability: "In Stock",
        qualityRating: 5,
        eta: "Immediate",
        lastUpdate: "2026-07-13T06:38:14.823Z",
        visual: "apple-green",
        quantity: 100,
        en: {
            name: "Kintamani Green Apple",
            unit: "1 kg",
            tag: "Highland selected",
            detail: "Approximately 7-9 pieces / kg",
            description: "Fresh green apple with bright acidity for juices and salads."
        },
        ru: {
            name: "Зеленое яблоко Кинтамани",
            unit: "1 кг",
            tag: "Горный отбор",
            detail: "Примерно 7-9 штук / кг",
            description: "Свежее зеленое яблоко с яркой кислинкой для соков и салатов."
        },
        it: {
            name: "Mela Verde Kintamani",
            unit: "1 kg",
            tag: "Selezione degli altopiani",
            detail: "Circa 7-9 pezzi / kg",
            description: "Mela verde fresca con una brillante acidità per succhi e insalate."
        },
        zh: {
            name: "金塔马尼青苹果",
            unit: "1 公斤",
            tag: "高地精选",
            detail: "约 7-9 个 / 公斤",
            description: "清新的青苹果，酸度适中，非常适合榨汁和沙拉。"
        },
        uk: {
            name: "Зелене яблуко Кінтамані",
            unit: "1 кг",
            tag: "Гірський відбір",
            detail: "Приблизно 7-9 штук / кг",
            description: "Свіже зелене яблуко з яскравою кислинкою для соків та салатів."
        }
    },
    {
        id: {
            name: "Jeruk Bali",
            unit: "1 kg",
            tag: "Jeruk lokal",
            detail: "Sekitar 5-7 buah / kg",
            description: "Jeruk lokal yang berair, seringkali kurang mengkilap tetapi penuh aroma."
        },
        name: "Bali Orange",
        category: "Tropical Fruits",
        sellingPrice: 32000,
        bestSupplier: "Local Bali Growers",
        supplierPrice: 22400,
        availability: "In Stock",
        qualityRating: 5,
        eta: "Immediate",
        lastUpdate: "2026-07-13T06:38:14.823Z",
        visual: "orange",
        quantity: 100,
        en: {
            name: "Bali Orange",
            unit: "1 kg",
            tag: "Local citrus",
            detail: "Approximately 5-7 pieces / kg",
            description: "Juicy local orange, often less polished but full of aroma."
        },
        ru: {
            name: "Балийский апельсин",
            unit: "1 кг",
            tag: "Местный цитрус",
            detail: "Примерно 5-7 штук / кг",
            description: "Сочный местный апельсин, менее глянцевый, но очень ароматный."
        },
        it: {
            name: "Arancia di Bali",
            unit: "1 kg",
            tag: "Agrumi locali",
            detail: "Circa 5-7 pezzi / kg",
            description: "Arancia locale succosa, spesso meno lucida ma piena di aroma."
        },
        zh: {
            name: "巴厘岛橙子",
            unit: "1 公斤",
            tag: "当地柑橘",
            detail: "约 5-7 个 / 公斤",
            description: "多汁的当地橙子，通常不太光滑但香气扑鼻。"
        },
        uk: {
            name: "Балійський апельсин",
            unit: "1 кг",
            tag: "Місцевий цитрус",
            detail: "Приблизно 5-7 штук / кг",
            description: "Соковитий місцевий апельсин, менш глянцевий, але дуже ароматний."
        }
    },
    {
        id: {
            name: "Jeruk Mandarin Kintamani",
            unit: "1 kg",
            tag: "Mudah dikupas",
            detail: "Sekitar 10-14 buah / kg",
            description: "Jeruk mandarin kulit longgar kecil dengan rasa dataran tinggi manis asam."
        },
        name: "Kintamani Mandarine",
        category: "Tropical Fruits",
        sellingPrice: 36000,
        bestSupplier: "Local Bali Growers",
        supplierPrice: 25200,
        availability: "In Stock",
        qualityRating: 5,
        eta: "Immediate",
        lastUpdate: "2026-07-13T06:38:14.823Z",
        visual: "mandarine",
        quantity: 100,
        en: {
            name: "Kintamani Mandarine",
            unit: "1 kg",
            tag: "Peel easy",
            detail: "Approximately 10-14 pieces / kg",
            description: "Small loose-skinned mandarines with sweet-tart highland flavor."
        },
        ru: {
            name: "Мандарин Кинтамани",
            unit: "1 кг",
            tag: "Легко чистится",
            detail: "Примерно 10-14 штук / кг",
            description: "Небольшие мандарины с тонкой кожурой и кисло-сладким горным вкусом."
        },
        it: {
            name: "Mandarino Kintamani",
            unit: "1 kg",
            tag: "Facile da sbucciare",
            detail: "Circa 10-14 pezzi / kg",
            description: "Piccoli mandarini dalla buccia morbida con sapore dolce-aspro degli altopiani."
        },
        zh: {
            name: "金塔马尼橘子",
            unit: "1 公斤",
            tag: "易剥皮",
            detail: "约 10-14 个 / 公斤",
            description: "表皮松弛的小橘子，带有酸甜的高地风味。"
        },
        uk: {
            name: "Мандарин Кінтамані",
            unit: "1 кг",
            tag: "Легко чиститься",
            detail: "Приблизно 10-14 штук / кг",
            description: "Невеликі мандарини з тонкою шкіркою та кисло-солодким гірським смаком."
        }
    },
    {
        id: {
            name: "Lemon Lokal",
            unit: "500 g",
            tag: "Bahan pokok dapur",
            detail: "Sekitar 8-12 buah / kg",
            description: "Lemon lokal untuk teh, dressing, dan layanan sarapan vila."
        },
        name: "Local Lemon",
        category: "Tropical Fruits",
        sellingPrice: 28000,
        bestSupplier: "Local Bali Growers",
        supplierPrice: 19600,
        availability: "In Stock",
        qualityRating: 5,
        eta: "Immediate",
        lastUpdate: "2026-07-13T06:38:14.823Z",
        visual: "lemon",
        quantity: 100,
        en: {
            name: "Local Lemon",
            unit: "500 g",
            tag: "Kitchen staple",
            detail: "Approximately 8-12 pieces / kg",
            description: "Local lemons for tea, dressings and villa breakfast service."
        },
        ru: {
            name: "Местный лимон",
            unit: "500 г",
            tag: "Для кухни",
            detail: "Примерно 8-12 штук / кг",
            description: "Местные лимоны для чая, заправок и завтраков на вилле."
        },
        it: {
            name: "Limone Locale",
            unit: "500 g",
            tag: "Essenziale in cucina",
            detail: "Circa 8-12 pezzi / kg",
            description: "Limoni locali per tè, condimenti e colazioni in villa."
        },
        zh: {
            name: "当地柠檬",
            unit: "500 克",
            tag: "厨房必备",
            detail: "约 8-12 个 / 公斤",
            description: "适合做茶、沙拉酱和别墅早餐的当地柠檬。"
        },
        uk: {
            name: "Місцевий лимон",
            unit: "500 г",
            tag: "Для кухні",
            detail: "Приблизно 8-12 штук / кг",
            description: "Місцеві лимони для чаю, заправок та сніданків на віллі."
        }
    },
    {
        id: {
            name: "Jeruk Nipis",
            unit: "500 g",
            tag: "Dapur Bali",
            detail: "Sekitar 20-28 buah / kg",
            description: "Jeruk nipis kecil yang tajam, lebih harum dari jeruk nipis supermarket standar."
        },
        name: "Jeruk Nipis Lime",
        category: "Tropical Fruits",
        sellingPrice: 18000,
        bestSupplier: "Local Bali Growers",
        supplierPrice: 12600,
        availability: "In Stock",
        qualityRating: 5,
        eta: "Immediate",
        lastUpdate: "2026-07-13T06:38:14.823Z",
        visual: "lime",
        quantity: 100,
        en: {
            name: "Jeruk Nipis Lime",
            unit: "500 g",
            tag: "Bali kitchen",
            detail: "Approximately 20-28 pieces / kg",
            description: "Small sharp limes, more fragrant than standard supermarket limes."
        },
        ru: {
            name: "Лайм Jeruk Nipis",
            unit: "500 г",
            tag: "Балийская кухня",
            detail: "Примерно 20-28 штук / кг",
            description: "Маленькие яркие лаймы, более ароматные, чем обычные супермаркетные."
        },
        it: {
            name: "Lime Jeruk Nipis",
            unit: "500 g",
            tag: "Cucina di Bali",
            detail: "Circa 20-28 pezzi / kg",
            description: "Piccoli lime aspri, più profumati dei normali lime del supermercato."
        },
        zh: {
            name: "青柠 Jeruk Nipis",
            unit: "500 克",
            tag: "巴厘岛厨房",
            detail: "约 20-28 个 / 公斤",
            description: "较小的尖锐青柠，比标准超市青柠更香。"
        },
        uk: {
            name: "Лайм Jeruk Nipis",
            unit: "500 г",
            tag: "Балійська кухня",
            detail: "Приблизно 20-28 штук / кг",
            description: "Маленькі яскраві лайми, більш ароматні, ніж звичайні супермаркетні."
        }
    },
    {
        id: {
            name: "Stroberi Bedugul",
            unit: "250 g",
            tag: "Beri dataran tinggi",
            detail: "Sekitar 18-24 beri / 250 g",
            description: "Stroberi dataran tinggi Bali, lembut dan paling baik dimakan cepat."
        },
        name: "Bedugul Strawberry",
        category: "Tropical Fruits",
        sellingPrice: 42000,
        bestSupplier: "Local Bali Growers",
        supplierPrice: 29399,
        availability: "In Stock",
        qualityRating: 5,
        eta: "Immediate",
        lastUpdate: "2026-07-13T06:38:14.823Z",
        visual: "strawberry",
        quantity: 100,
        en: {
            name: "Bedugul Strawberry",
            unit: "250 g",
            tag: "Highland berry",
            detail: "Approximately 18-24 berries / 250 g",
            description: "Bali highland strawberries, delicate and best eaten quickly."
        },
        ru: {
            name: "Клубника Бедугул",
            unit: "250 г",
            tag: "Горная ягода",
            detail: "Примерно 18-24 ягоды / 250 г",
            description: "Клубника из горных районов Бали, нежная и лучше всего свежей."
        },
        it: {
            name: "Fragole di Bedugul",
            unit: "250 g",
            tag: "Frutti di bosco degli altopiani",
            detail: "Circa 18-24 fragole / 250 g",
            description: "Fragole degli altopiani di Bali, delicate e da consumare rapidamente."
        },
        zh: {
            name: "百度库草莓",
            unit: "250 克",
            tag: "高地浆果",
            detail: "约 18-24 颗浆果 / 250 克",
            description: "巴厘岛高地草莓，娇嫩，最好尽快食用。"
        },
        uk: {
            name: "Полуниця Бедугул",
            unit: "250 г",
            tag: "Гірська ягода",
            detail: "Приблизно 18-24 ягоди / 250 г",
            description: "Полуниця з гірських районів Балі, ніжна, найкраще смакує свіжою."
        }
    },
    {
        id: {
            name: "Semangka Bali",
            unit: "Per buah",
            tag: "Menyegarkan",
            detail: "Harga rata-rata per buah",
            description: "Semangka lokal besar dengan daging renyah untuk hari-hari panas di Bali."
        },
        name: "Bali Watermelon",
        category: "Tropical Fruits",
        sellingPrice: 48000,
        bestSupplier: "Local Bali Growers",
        supplierPrice: 33600,
        availability: "In Stock",
        qualityRating: 5,
        eta: "Immediate",
        lastUpdate: "2026-07-13T06:38:14.823Z",
        visual: "watermelon",
        quantity: 100,
        en: {
            name: "Bali Watermelon",
            unit: "Each",
            tag: "Hydrating",
            detail: "Average price per piece",
            description: "Large local watermelon with crisp flesh for hot Bali days."
        },
        ru: {
            name: "Балийский арбуз",
            unit: "Штука",
            tag: "Освежающий",
            detail: "Средняя цена за штуку",
            description: "Крупный местный арбуз с хрустящей мякотью для жарких дней на Бали."
        },
        it: {
            name: "Anguria di Bali",
            unit: "Pezzo",
            tag: "Idratante",
            detail: "Prezzo medio per pezzo",
            description: "Grande anguria locale con polpa croccante per le calde giornate a Bali."
        },
        zh: {
            name: "巴厘岛西瓜",
            unit: "每个",
            tag: "补水",
            detail: "每个平均价格",
            description: "大型当地西瓜，果肉脆爽，适合炎热的巴厘岛天气。"
        },
        uk: {
            name: "Балійський кавун",
            unit: "Штука",
            tag: "Освіжаючий",
            detail: "Середня ціна за штуку",
            description: "Великий місцевий кавун з хрусткою м'якоттю для жарких днів на Балі."
        }
    },
    {
        id: {
            name: "Melon Hijau",
            unit: "Per buah",
            tag: "Manis segar",
            detail: "Harga rata-rata per buah",
            description: "Melon lokal hijau pucat, bersih dan menyegarkan saat didinginkan."
        },
        name: "Green Melon",
        category: "Tropical Fruits",
        sellingPrice: 39000,
        bestSupplier: "Local Bali Growers",
        supplierPrice: 27300,
        availability: "In Stock",
        qualityRating: 5,
        eta: "Immediate",
        lastUpdate: "2026-07-13T06:38:14.823Z",
        visual: "melon-green",
        quantity: 100,
        en: {
            name: "Green Melon",
            unit: "Each",
            tag: "Sweet fresh",
            detail: "Average price per piece",
            description: "Pale green local melon, clean and refreshing when chilled."
        },
        ru: {
            name: "Зеленая дыня",
            unit: "Штука",
            tag: "Сладкая свежесть",
            detail: "Средняя цена за штуку",
            description: "Светло-зеленая местная дыня, особенно освежающая в охлажденном виде."
        },
        it: {
            name: "Melone Verde",
            unit: "Pezzo",
            tag: "Dolce fresco",
            detail: "Prezzo medio per pezzo",
            description: "Melone locale verde pallido, pulito e rinfrescante se servito freddo."
        },
        zh: {
            name: "绿甜瓜",
            unit: "每个",
            tag: "香甜清新",
            detail: "每个平均价格",
            description: "淡绿色的当地甜瓜，冷藏后干净清爽。"
        },
        uk: {
            name: "Зелена диня",
            unit: "Штука",
            tag: "Солодка свіжість",
            detail: "Середня ціна за штуку",
            description: "Світло-зелена місцева диня, особливо освіжаюча в охолодженому вигляді."
        }
    },
    {
        id: {
            name: "Melon Oranye",
            unit: "Per buah",
            tag: "Manis lembut",
            detail: "Harga rata-rata per buah",
            description: "Melon berdaging oranye dengan rasa manis tropis yang lebih lembut."
        },
        name: "Orange Melon",
        category: "Tropical Fruits",
        sellingPrice: 42000,
        bestSupplier: "Local Bali Growers",
        supplierPrice: 29399,
        availability: "In Stock",
        qualityRating: 5,
        eta: "Immediate",
        lastUpdate: "2026-07-13T06:38:14.823Z",
        visual: "melon-orange",
        quantity: 100,
        en: {
            name: "Orange Melon",
            unit: "Each",
            tag: "Soft sweet",
            detail: "Average price per piece",
            description: "Orange-flesh melon with a softer tropical sweetness."
        },
        ru: {
            name: "Оранжевая дыня",
            unit: "Штука",
            tag: "Мягкая сладость",
            detail: "Средняя цена за штуку",
            description: "Дыня с оранжевой мякотью и мягкой тропической сладостью."
        },
        it: {
            name: "Melone Arancione",
            unit: "Pezzo",
            tag: "Morbido dolce",
            detail: "Prezzo medio per pezzo",
            description: "Melone a polpa arancione con una dolcezza tropicale più morbida."
        },
        zh: {
            name: "橙甜瓜",
            unit: "每个",
            tag: "柔软香甜",
            detail: "每个平均价格",
            description: "橙肉甜瓜，具有更柔软的热带甜味。"
        },
        uk: {
            name: "Помаранчева диня",
            unit: "Штука",
            tag: "М'яка солодкість",
            detail: "Середня ціна за штуку",
            description: "Диня з помаранчевою м'якоттю та м'якою тропічною солодкістю."
        }
    },
    {
        id: {
            name: "Nanas Bali",
            unit: "Per buah",
            tag: "Tropis",
            detail: "Harga rata-rata per buah",
            description: "Nanas lokal, keemasan dan harum dengan hasil akhir yang lebih tajam."
        },
        name: "Bali Ananas",
        category: "Tropical Fruits",
        sellingPrice: 27000,
        bestSupplier: "Local Bali Growers",
        supplierPrice: 18900,
        availability: "In Stock",
        qualityRating: 5,
        eta: "Immediate",
        lastUpdate: "2026-07-13T06:38:14.823Z",
        visual: "ananas",
        quantity: 100,
        en: {
            name: "Bali Ananas",
            unit: "Each",
            tag: "Tropical",
            detail: "Average price per piece",
            description: "Local pineapple, golden and fragrant with a sharper finish."
        },
        ru: {
            name: "Балийский ананас",
            unit: "Штука",
            tag: "Тропический",
            detail: "Средняя цена за штуку",
            description: "Местный ананас, золотистый и ароматный, с ярким послевкусием."
        },
        it: {
            name: "Ananas di Bali",
            unit: "Pezzo",
            tag: "Tropicale",
            detail: "Prezzo medio per pezzo",
            description: "Ananas locale, dorato e profumato con un finale più aspro."
        },
        zh: {
            name: "巴厘岛菠萝",
            unit: "每个",
            tag: "热带",
            detail: "每个平均价格",
            description: "当地菠萝，金黄色，香气扑鼻，余味更浓烈。"
        },
        uk: {
            name: "Балійський ананас",
            unit: "Штука",
            tag: "Тропічний",
            detail: "Середня ціна за штуку",
            description: "Місцевий ананас, золотистий і ароматний, з яскравим посмаком."
        }
    },
    {
        id: {
            name: "Kelapa Muda Segar",
            unit: "Per buah",
            tag: "Minum segar",
            detail: "Harga rata-rata per buah",
            description: "Kelapa muda untuk air segar dan daging lunak yang bisa disendok."
        },
        name: "Fresh Young Coconut",
        category: "Tropical Fruits",
        sellingPrice: 22000,
        bestSupplier: "Local Bali Growers",
        supplierPrice: 15399,
        availability: "In Stock",
        qualityRating: 5,
        eta: "Immediate",
        lastUpdate: "2026-07-13T06:38:14.823Z",
        visual: "fresh-coconut",
        quantity: 100,
        en: {
            name: "Fresh Young Coconut",
            unit: "Each",
            tag: "Drink fresh",
            detail: "Average price per piece",
            description: "Young coconut for fresh water and soft spoonable flesh."
        },
        ru: {
            name: "Свежий молодой кокос",
            unit: "Штука",
            tag: "Пить свежим",
            detail: "Средняя цена за штуку",
            description: "Молодой кокос со свежей водой и мягкой мякотью."
        },
        it: {
            name: "Cocco Giovane Fresco",
            unit: "Pezzo",
            tag: "Bevanda fresca",
            detail: "Prezzo medio per pezzo",
            description: "Cocco giovane con acqua fresca e morbida polpa da mangiare al cucchiaio."
        },
        zh: {
            name: "新鲜椰青",
            unit: "每个",
            tag: "现饮",
            detail: "每个平均价格",
            description: "含有新鲜椰汁和可用勺子挖食的软果肉的椰青。"
        },
        uk: {
            name: "Свіжий молодий кокос",
            unit: "Штука",
            tag: "Пити свіжим",
            detail: "Середня ціна за штуку",
            description: "Молодий кокос зі свіжою водою та м'якою м'якоттю."
        }
    },
    {
        id: {
            name: "Kelapa Tua",
            unit: "Per buah",
            tag: "Kelapa tua",
            detail: "Harga rata-rata per buah",
            description: "Kelapa tua kupas dengan daging putih keras dan santan di dalamnya."
        },
        name: "Kelapa Tua",
        category: "Tropical Fruits",
        sellingPrice: 30000,
        bestSupplier: "Local Bali Growers",
        supplierPrice: 21000,
        availability: "In Stock",
        qualityRating: 5,
        eta: "Immediate",
        lastUpdate: "2026-07-13T06:38:14.823Z",
        visual: "white-coconut",
        quantity: 100,
        en: {
            name: "Kelapa Tua",
            unit: "Each",
            tag: "Old coconut",
            detail: "Average price per piece",
            description: "Peeled mature coconut with firm white meat and coconut milk inside."
        },
        ru: {
            name: "Kelapa Tua",
            unit: "Штука",
            tag: "Старый кокос",
            detail: "Средняя цена за штуку",
            description: "Очищенный зрелый кокос с плотной белой мякотью и кокосовым молоком внутри."
        },
        it: {
            name: "Cocco Vecchio (Kelapa Tua)",
            unit: "Pezzo",
            tag: "Cocco vecchio",
            detail: "Prezzo medio per pezzo",
            description: "Cocco maturo sbucciato con polpa bianca soda e latte di cocco all'interno."
        },
        zh: {
            name: "老椰子",
            unit: "每个",
            tag: "老椰子",
            detail: "每个平均价格",
            description: "去皮的成熟椰子，里面有坚硬的白色果肉和椰奶。"
        },
        uk: {
            name: "Kelapa Tua",
            unit: "Штука",
            tag: "Старий кокос",
            detail: "Середня ціна за штуку",
            description: "Очищений зрілий кокос зі щільною білою м'якоттю та кокосовим молоком всередині."
        }
    },
    {
        id: {
            name: "Belimbing Bali",
            unit: "500 g",
            tag: "Spesial lokal",
            detail: "Sekitar 4-6 buah / kg",
            description: "Belimbing renyah dengan keasaman bunga dan bentuk irisan yang indah."
        },
        name: "Bali Starfruit",
        category: "Tropical Fruits",
        sellingPrice: 24000,
        bestSupplier: "Local Bali Growers",
        supplierPrice: 16800,
        availability: "In Stock",
        qualityRating: 5,
        eta: "Immediate",
        lastUpdate: "2026-07-13T06:38:14.823Z",
        visual: "starfruit",
        quantity: 100,
        en: {
            name: "Bali Starfruit",
            unit: "500 g",
            tag: "Local special",
            detail: "Approximately 4-6 pieces / kg",
            description: "Crisp starfruit with floral acidity and beautiful slice shape."
        },
        ru: {
            name: "Балийская карамбола",
            unit: "500 г",
            tag: "Местный специалитет",
            detail: "Примерно 4-6 штук / кг",
            description: "Хрустящая карамбола с цветочной кислинкой и красивой формой среза."
        },
        it: {
            name: "Carambola di Bali",
            unit: "500 g",
            tag: "Specialità locale",
            detail: "Circa 4-6 pezzi / kg",
            description: "Carambola croccante con acidità floreale e bellissima forma a fette."
        },
        zh: {
            name: "巴厘岛杨桃",
            unit: "500 克",
            tag: "当地特色",
            detail: "约 4-6 个 / 公斤",
            description: "清脆的杨桃，带有花香酸度和切片形状。"
        },
        uk: {
            name: "Балійська карамбола",
            unit: "500 г",
            tag: "Місцевий спеціалітет",
            detail: "Приблизно 4-6 штук / кг",
            description: "Хрустка карамбола з квітковою кислинкою та гарною формою зрізу."
        }
    },
    {
        id: {
            name: "Manggis",
            unit: "1 kg",
            tag: "Musiman",
            detail: "Sekitar 8-12 buah / kg",
            description: "Kulit ungu, segmen putih lembut dan hasil akhir manis-asam yang bersih."
        },
        name: "Mangosteen",
        category: "Tropical Fruits",
        sellingPrice: 58000,
        bestSupplier: "Local Bali Growers",
        supplierPrice: 40600,
        availability: "In Stock",
        qualityRating: 5,
        eta: "Immediate",
        lastUpdate: "2026-07-13T06:38:14.823Z",
        visual: "mangosteen",
        quantity: 100,
        en: {
            name: "Mangosteen",
            unit: "1 kg",
            tag: "Seasonal",
            detail: "Approximately 8-12 pieces / kg",
            description: "Purple rind, soft white segments and a clean sweet-sour finish."
        },
        ru: {
            name: "Мангостин",
            unit: "1 кг",
            tag: "Сезонный",
            detail: "Примерно 8-12 штук / кг",
            description: "Фиолетовая кожура, мягкие белые дольки и чистый кисло-сладкий вкус."
        },
        it: {
            name: "Mangostano",
            unit: "1 kg",
            tag: "Stagionale",
            detail: "Circa 8-12 pezzi / kg",
            description: "Buccia viola, morbidi spicchi bianchi e un fresco finale agrodolce."
        },
        zh: {
            name: "山竹",
            unit: "1 公斤",
            tag: "季节性",
            detail: "约 8-12 个 / 公斤",
            description: "紫色的果皮，柔软的白色果肉和干净的酸甜余味。"
        },
        uk: {
            name: "Мангостін",
            unit: "1 кг",
            tag: "Сезонний",
            detail: "Приблизно 8-12 штук / кг",
            description: "Фіолетова шкірка, м'які білі дольки та чистий кисло-солодкий смак."
        }
    },
    {
        id: {
            name: "Srikaya",
            unit: "1 kg",
            tag: "Langka lokal",
            detail: "Sekitar 3-5 buah / kg",
            description: "Srikaya dengan daging krim, parfum lembut, dan rasa manis alami."
        },
        name: "Anona Custard Apple",
        category: "Tropical Fruits",
        sellingPrice: 48000,
        bestSupplier: "Local Bali Growers",
        supplierPrice: 33600,
        availability: "In Stock",
        qualityRating: 5,
        eta: "Immediate",
        lastUpdate: "2026-07-13T06:38:14.823Z",
        visual: "anona",
        quantity: 100,
        en: {
            name: "Anona Custard Apple",
            unit: "1 kg",
            tag: "Local rare",
            detail: "Approximately 3-5 pieces / kg",
            description: "Anona with creamy flesh, soft perfume and natural sweetness."
        },
        ru: {
            name: "Анона, сахарное яблоко",
            unit: "1 кг",
            tag: "Редкий местный",
            detail: "Примерно 3-5 штук / кг",
            description: "Анона с кремовой мякотью, мягким ароматом и натуральной сладостью."
        },
        it: {
            name: "Anona",
            unit: "1 kg",
            tag: "Raro locale",
            detail: "Circa 3-5 pezzi / kg",
            description: "Anona dalla polpa cremosa, profumo delicato e dolcezza naturale."
        },
        zh: {
            name: "番荔枝 (释迦)",
            unit: "1 公斤",
            tag: "当地稀有",
            detail: "约 3-5 个 / 公斤",
            description: "番荔枝带有奶油状的果肉，淡淡的香味和天然的甜味。"
        },
        uk: {
            name: "Анона, цукрове яблуко",
            unit: "1 кг",
            tag: "Рідкісний місцевий",
            detail: "Приблизно 3-5 штук / кг",
            description: "Анона з кремовою м'якоттю, м'яким ароматом і натуральною солодкістю."
        }
    },
    {
        id: {
            name: "Buah Naga",
            unit: "1 kg",
            tag: "Ditanam di Bali",
            detail: "Sekitar 2-3 buah / kg",
            description: "Buah naga lokal cerah, menyegarkan dan baik untuk mangkuk smoothie."
        },
        name: "Dragon Fruit",
        category: "Tropical Fruits",
        sellingPrice: 36000,
        bestSupplier: "Local Bali Growers",
        supplierPrice: 25200,
        availability: "In Stock",
        qualityRating: 5,
        eta: "Immediate",
        lastUpdate: "2026-07-13T06:38:14.823Z",
        visual: "dragon-fruit",
        quantity: 100,
        en: {
            name: "Dragon Fruit",
            unit: "1 kg",
            tag: "Bali grown",
            detail: "Approximately 2-3 pieces / kg",
            description: "Bright local dragon fruit, refreshing and good for smoothie bowls."
        },
        ru: {
            name: "Драконий фрукт",
            unit: "1 кг",
            tag: "Выращено на Бали",
            detail: "Примерно 2-3 штуки / кг",
            description: "Яркий местный драконий фрукт, освежающий и удобный для смузи-боулов."
        },
        it: {
            name: "Frutto del Drago",
            unit: "1 kg",
            tag: "Coltivato a Bali",
            detail: "Circa 2-3 pezzi / kg",
            description: "Brillante frutto del drago locale, rinfrescante e ideale per le smoothie bowl."
        },
        zh: {
            name: "火龙果",
            unit: "1 公斤",
            tag: "巴厘岛种植",
            detail: "约 2-3 个 / 公斤",
            description: "明亮的当地火龙果，清爽，适合做冰沙碗。"
        },
        uk: {
            name: "Драконів фрукт",
            unit: "1 кг",
            tag: "Вирощено на Балі",
            detail: "Приблизно 2-3 штуки / кг",
            description: "Яскравий місцевий драконів фрукт, освіжаючий і зручний для смузі-боулів."
        }
    }
],
        paymentNote: 'Bank transfer',
        specialNotes: 'Tomorrow morning prefered'
      }
    },
    {
      id: 'msg-2',
      senderName: 'Pak Agung (Supplier)',
      phoneOrEmail: '+62 812 3456 7890',
      messageText: 'Availability update for tomorrow: Mango Harum Manis ready 50kg at 32k. Avocado Bali limited stock only 10kg at 40k. Papaya California good quality ready 100kg at 11k.',
      source: 'WhatsApp',
      date: new Date(Date.now() - 7200000).toISOString(),
      language: 'Indonesian',
      suggestedType: 'Supplier quotation',
      suggestedAction: 'Update Supplier Price',
      status: 'Received',
      parsedData: {
        supplierName: 'Pak Agung Fruits',
        products: [
          { name: 'Mango Harum Manis', price: 32000, availability: 'In Stock', eta: 'Tomorrow' },
          { name: 'Avocado Bali', price: 40000, availability: 'Limited', eta: 'Tomorrow' },
          { name: 'Papaya California', price: 11000, availability: 'In Stock', eta: 'Tomorrow' }
        ]
      }
    },
    {
      id: 'msg-3',
      senderName: 'Wayan Delivery (Driver)',
      phoneOrEmail: '+62 813 7777 6666',
      messageText: 'BF-1002 has been delivered. Customer paid cash Rp 160.000.',
      source: 'WhatsApp',
      date: new Date(Date.now() - 1800000).toISOString(),
      language: 'English',
      suggestedType: 'Driver message',
      suggestedAction: 'Resolve Driver Message',
      status: 'Received',
      isDriver: true,
      orderRef: 'BF-1002',
      parsedData: {
        senderName: 'Wayan Delivery',
        driverPhone: '+6281377776666',
        messageText: 'BF-1002 has been delivered. Customer paid cash Rp 160.000.',
        orderRef: 'BF-1002'
      }
    }
  ],
  orders: [
    {
      id: 'order-1001',
      orderNumber: 'BF-1001',
      clientName: 'John Doe',
      whatsapp: '+62 811 2222 3333',
      deliveryZone: 'Canggu',
      deliveryAddress: 'Villa Sun, Jl. Nelayan No. 10',
      deliveryDate: new Date().toISOString().split('T')[0],
      timeWindow: '09:00 - 12:00',
      products: [
        { name: 'Mango Harum Manis', quantity: 2, unit: 'kg', price: 45000 },
        { name: 'Avocado Bali', quantity: 1, unit: 'kg', price: 55000 }
      ],
      subtotal: 145000,
      deliveryFee: 15000,
      discount: 0,
      totalAmount: 160000,
      paymentStatus: 'Pending',
      deliveryStatus: 'Scheduled',
      issue: 'None',
      stage: 'Confirmed',
      notes: 'Customer requested eco-friendly packaging',
      lastUpdate: new Date().toISOString()
    },
    {
      id: 'order-1002',
      orderNumber: 'BF-1002',
      clientName: 'Alice Smith',
      whatsapp: '+62 819 8888 7777',
      deliveryZone: 'Seminyak',
      deliveryAddress: 'Jl. Kayu Aya No. 34, Loft 4',
      deliveryDate: new Date().toISOString().split('T')[0],
      timeWindow: '13:00 - 16:00',
      products: [
        { name: 'Papaya California', quantity: 3, unit: 'kg', price: 25000 },
        { name: 'Dragon Fruit Red', quantity: 2, unit: 'kg', price: 40000 }
      ],
      subtotal: 155000,
      deliveryFee: 20000,
      discount: 15000,
      totalAmount: 160000,
      paymentStatus: 'Paid',
      deliveryStatus: 'Assigned',
      issue: 'None',
      stage: 'Packaged',
      notes: 'Driver assigned: Gede (Go-Send)',
      lastUpdate: new Date().toISOString()
    },
    {
      id: 'order-1003',
      orderNumber: 'BF-1003',
      clientName: 'Bob Johnson',
      whatsapp: '+62 857 7777 9999',
      deliveryZone: 'Ubud',
      deliveryAddress: 'Green Valley Villa, Banjar Penestanan',
      deliveryDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
      timeWindow: '10:00 - 13:00',
      products: [
        { name: 'Avocado Bali', quantity: 2, unit: 'kg', price: 55000 },
        { name: 'Organic Spinach', quantity: 1, unit: 'bundle', price: 15000 }
      ],
      subtotal: 125000,
      deliveryFee: 40000,
      discount: 0,
      totalAmount: 165000,
      paymentStatus: 'Pending',
      deliveryStatus: 'Not Scheduled',
      issue: 'Supplier Delay',
      stage: 'Received',
      notes: 'Waiting for fresh avocado stock from Bedugul',
      lastUpdate: new Date().toISOString()
    }
  ],
  clients: [
    {
      id: 'client-1',
      name: 'John Doe',
      whatsapp: '+62 811 2222 3333',
      email: 'john@example.com',
      address: 'Villa Sun, Jl. Nelayan No. 10',
      deliveryZone: 'Canggu',
      language: 'English',
      clientType: 'Repeat Client',
      notes: 'Prefers ripe avocados. Orders weekly.',
      lastOrderDate: new Date().toISOString().split('T')[0]
    },
    {
      id: 'client-2',
      name: 'Alice Smith',
      whatsapp: '+62 819 8888 7777',
      email: 'alice@example.com',
      address: 'Jl. Kayu Aya No. 34, Loft 4',
      deliveryZone: 'Seminyak',
      language: 'English',
      clientType: 'VIP',
      notes: 'Needs premium grade fruits only.',
      lastOrderDate: new Date().toISOString().split('T')[0]
    },
    {
      id: 'client-3',
      name: 'Bob Johnson',
      whatsapp: '+62 857 7777 9999',
      email: 'bob@example.com',
      address: 'Green Valley Villa, Banjar Penestanan',
      deliveryZone: 'Ubud',
      language: 'English',
      clientType: 'Active Client',
      notes: '',
      lastOrderDate: new Date(Date.now() - 86400000).toISOString().split('T')[0]
    }
  ],
  products: [
    { id: 'p-1', name: 'Mango Harum Manis', category: 'Tropical Fruits', sellingPrice: 45000, bestSupplier: 'Pak Agung Fruits', supplierPrice: 32000, availability: 'In Stock', qualityRating: 5, eta: 'Immediate', lastUpdate: new Date().toISOString() },
    { id: 'p-2', name: 'Avocado Bali', category: 'Tropical Fruits', sellingPrice: 55000, bestSupplier: 'Bali Organic Farm', supplierPrice: 38000, availability: 'Limited', qualityRating: 4, eta: 'Tomorrow', lastUpdate: new Date().toISOString() },
    { id: 'p-3', name: 'Papaya California', category: 'Tropical Fruits', sellingPrice: 25000, bestSupplier: 'Pak Agung Fruits', supplierPrice: 11000, availability: 'In Stock', qualityRating: 5, eta: 'Immediate', lastUpdate: new Date().toISOString() },
    { id: 'p-4', name: 'Dragon Fruit Red', category: 'Tropical Fruits', sellingPrice: 40000, bestSupplier: 'Bali Organic Farm', supplierPrice: 24000, availability: 'In Stock', qualityRating: 4, eta: 'Immediate', lastUpdate: new Date().toISOString() },
    { id: 'p-5', name: 'Cavendish Banana', category: 'Tropical Fruits', sellingPrice: 30000, bestSupplier: 'Pak Agung Fruits', supplierPrice: 18000, availability: 'In Stock', qualityRating: 5, eta: 'Immediate', lastUpdate: new Date().toISOString() },
    { id: 'p-6', name: 'Organic Spinach', category: 'Greens', sellingPrice: 15000, bestSupplier: 'Bali Organic Farm', supplierPrice: 8000, availability: 'Out of Stock', qualityRating: 2, eta: '2 days', lastUpdate: new Date().toISOString() },
    { id: 'p-7', name: 'Delivery Box Medium', category: 'Boxes', sellingPrice: 0, bestSupplier: 'Sari Packaging', supplierPrice: 12000, availability: 'In Stock', qualityRating: 5, eta: 'Immediate', lastUpdate: new Date().toISOString() }
  ],
  suppliers: [
    { id: 's-1', name: 'Pak Agung Fruits', whatsapp: '+62 812 3456 7890', location: 'Ubud', mainProducts: 'Mangoes, Bananas, Papayas', reliabilityNote: 'Very reliable, drops off daily at 7 AM.', qualityNote: 'Consistently high quality fruit.', lastPriceUpdate: new Date().toISOString() },
    { id: 's-2', name: 'Bali Organic Farm', whatsapp: '+62 819 8765 4321', location: 'Bedugul', mainProducts: 'Avocados, Greens, Berries', reliabilityNote: 'Delivery twice a week (Tues/Fri).', qualityNote: 'Good organic practices, avocados require ripening.', lastPriceUpdate: new Date().toISOString() },
    { id: 's-3', name: 'Sari Packaging', whatsapp: '+62 878 9988 7766', location: 'Denpasar', mainProducts: 'Delivery Boxes, Stickers, Bags', reliabilityNote: 'Delivers bulk batches in 24 hours.', qualityNote: 'Sturdy cardboard boxes.', lastPriceUpdate: new Date().toISOString() }
  ],
  purchaseRequests: [
    {
      id: 'pr-1',
      supplierName: 'Bali Organic Farm',
      products: [
        { name: 'Avocado Bali', quantity: 20, expectedPrice: 38000, confirmedPrice: 38000 }
      ],
      totalPrice: 760000,
      eta: new Date(Date.now() + 86400000).toISOString().split('T')[0],
      paymentStatus: 'Ordered',
      qualityStatus: 'OK',
      attachments: [],
      date: new Date().toISOString()
    }
  ],
  freshStock: [
    { id: 'fs-1', name: 'Mango Harum Manis', category: 'Tropical Fruits', quantity: 45, unit: 'kg', freshness: 'Good', supplierName: 'Pak Agung Fruits', reservedQuantity: 2, problemNote: '' },
    { id: 'fs-2', name: 'Avocado Bali', category: 'Tropical Fruits', quantity: 5, unit: 'kg', freshness: 'Use First', supplierName: 'Bali Organic Farm', reservedQuantity: 3, problemNote: 'Low inventory' },
    { id: 'fs-3', name: 'Papaya California', category: 'Tropical Fruits', quantity: 20, unit: 'kg', freshness: 'Good', supplierName: 'Pak Agung Fruits', reservedQuantity: 3, problemNote: '' },
    { id: 'fs-4', name: 'Organic Spinach', category: 'Greens', quantity: 0, unit: 'bundle', freshness: 'Reject', supplierName: 'Bali Organic Farm', reservedQuantity: 0, problemNote: 'Wilting due to heat, disposed.' }
  ],
  materials: [
    { id: 'mat-1', name: 'Delivery Box Small', quantity: 60, minQuantity: 50, status: 'Enough Stock', supplierName: 'Sari Packaging', lastReorderDate: '2026-05-10' },
    { id: 'mat-2', name: 'Delivery Box Medium', quantity: 12, minQuantity: 50, status: 'Reorder Needed', supplierName: 'Sari Packaging', lastReorderDate: '2026-06-01' },
    { id: 'mat-3', name: 'Delivery Box Large', quantity: 30, minQuantity: 20, status: 'Enough Stock', supplierName: 'Sari Packaging', lastReorderDate: '2026-05-15' },
    { id: 'mat-4', name: 'Stickers Brand Leaf', quantity: 250, minQuantity: 100, status: 'Enough Stock', supplierName: 'Sari Packaging', lastReorderDate: '2026-05-01' },
    { id: 'mat-5', name: 'Thank-you Cards', quantity: 15, minQuantity: 50, status: 'Low Stock', supplierName: 'Sari Packaging', lastReorderDate: '2026-04-20' }
  ],
  drivers: [
    { id: 'driver-1', name: 'Gede Go-Send', whatsapp: '+6281299998888', status: 'Active', vehicle: 'Scooter' },
    { id: 'driver-2', name: 'Wayan Delivery', whatsapp: '+6281377776666', status: 'Active', vehicle: 'Car' },
    { id: 'driver-3', name: 'Made Fruits', whatsapp: '+6281955554444', status: 'Active', vehicle: 'Scooter' }
  ],
  deliveryZones: DEFAULT_DELIVERY_ZONES
};

// 1. Local Storage fallback adapter
class LocalDbAdapter {
  constructor() {
    this.initLocalData();
  }

  initLocalData() {
    if (!localStorage.getItem('BF_DB_INITIALIZED')) {
      for (const [key, value] of Object.entries(INITIAL_MOCK_DATA)) {
        localStorage.setItem(`BF_${key}`, JSON.stringify(value));
      }
      localStorage.setItem('BF_DB_INITIALIZED', 'true');
    } else {
      if (!localStorage.getItem('BF_drivers')) {
        localStorage.setItem('BF_drivers', JSON.stringify(INITIAL_MOCK_DATA.drivers));
      }
    }
  }

  async getCollection(name) {
    const raw = localStorage.getItem(`BF_${name}`);
    return raw ? JSON.parse(raw) : [];
  }

  async saveCollection(name, data) {
    localStorage.setItem(`BF_${name}`, JSON.stringify(data));
  }

  async getById(name, id) {
    const items = await this.getCollection(name);
    return items.find(item => item.id === id) || null;
  }

  async upsert(name, record) {
    const items = await this.getCollection(name);
    if (!record.id) {
      record.id = name + '-' + Math.random().toString(36).substr(2, 9);
    }
    const idx = items.findIndex(item => item.id === record.id);
    if (idx !== -1) {
      items[idx] = { ...items[idx], ...record };
    } else {
      items.push(record);
    }
    await this.saveCollection(name, items);
    return record;
  }

  async delete(name, id) {
    const items = await this.getCollection(name);
    const filtered = items.filter(item => item.id !== id);
    await this.saveCollection(name, filtered);
    return true;
  }
}

// 2. Node.js local express/JSON server adapter
class LocalServerAdapter {
  constructor(baseUrl = '') {
    this.baseUrl = baseUrl;
  }

  async getCollection(name) {
    const res = await fetch(`${this.baseUrl}/api/${name}`);
    if (!res.ok) throw new Error(`Local server returned ${res.status}`);
    return res.json();
  }

  async getById(name, id) {
    const items = await this.getCollection(name);
    return items.find(item => item.id === id) || null;
  }

  async upsert(name, record) {
    const res = await fetch(`${this.baseUrl}/api/${name}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(record)
    });
    if (!res.ok) throw new Error(`Local server returned ${res.status}`);
    return res.json();
  }

  async delete(name, id) {
    const res = await fetch(`${this.baseUrl}/api/${name}/${id}`, {
      method: 'DELETE'
    });
    if (!res.ok) throw new Error(`Local server returned ${res.status}`);
    return true;
  }
}

// 3. Supabase Cloud Adapter
class SupabaseAdapter {
  constructor(client) {
    this.client = client;
  }

  async getCollection(name) {
    const { data, error } = await this.client.from(name).select('*');
    if (error) throw error;
    return data;
  }

  async getById(name, id) {
    const { data, error } = await this.client.from(name).select('*').eq('id', id).single();
    if (error) return null;
    return data;
  }

  async upsert(name, record) {
    if (!record.id) {
      record.id = name + '-' + Math.random().toString(36).substr(2, 9);
    }
    const { data, error } = await this.client.from(name).upsert(record).select().single();
    if (error) throw error;
    return data;
  }

  async delete(name, id) {
    const { error } = await this.client.from(name).delete().eq('id', id);
    if (error) throw error;
    return true;
  }
}

// Global Database Manager
class DatabaseManager {
  constructor() {
    this.adapter = new LocalDbAdapter(); // default
    this.isSupabase = false;
    this.isLocalServer = false;
  }

  async initialize() {
    // A. Check for explicit Supabase cloud keys first
    const config = getSupabaseConfig();
    if (config.url && config.anonKey) {
      try {
        if (window.supabase) {
          supabaseInstance = window.supabase.createClient(config.url, config.anonKey);
          this.adapter = new SupabaseAdapter(supabaseInstance);
          this.isSupabase = true;
          this.isLocalServer = false;
          console.log('CRM Database successfully connected to Supabase.');
          return;
        }
      } catch (err) {
        console.error('Supabase client failed initialization:', err);
      }
    }

    // B. Check if our Node.js server API is reachable
    try {
      const checkRes = await fetch('/api/check');
      const checkData = await checkRes.json();
      if (checkData && checkData.status === 'running') {
        this.adapter = new LocalServerAdapter();
        this.isLocalServer = true;
        this.isSupabase = false;
        console.log('CRM Database successfully connected to Local express server API.');
        
        // Seed local JSON files on server if they are empty
        await this.seedLocalServerIfNeeded();
        return;
      }
    } catch (err) {
      console.log('Local Node.js backend server not detected. Using LocalStorage fallback.');
    }

    // C. Fall back to localStorage browser database
    this.adapter = new LocalDbAdapter();
    this.isLocalServer = false;
    this.isSupabase = false;
  }

  // Pre-populates empty backend JSON files with initial mock structure on first startup
  async seedLocalServerIfNeeded() {
    try {
      for (const [key, value] of Object.entries(INITIAL_MOCK_DATA)) {
        const list = await this.adapter.getCollection(key);
        if (list.length === 0) {
          console.log(`Local Server collection '${key}' is empty. Seeding initial structures...`);
          for (const item of value) {
            await this.adapter.upsert(key, item);
          }
        }
      }
    } catch (e) {
      console.warn('Seeding local server failed:', e);
    }
  }

  // Abstracted Database CRUD Methods
  async getInbox() { return this.adapter.getCollection('inbox'); }
  async saveInbox(record) { return this.adapter.upsert('inbox', record); }
  async deleteInbox(id) { return this.adapter.delete('inbox', id); }

  async getOrders() { return this.adapter.getCollection('orders'); }
  async saveOrder(record) { 
    record.lastUpdate = new Date().toISOString();
    return this.adapter.upsert('orders', record); 
  }
  async deleteOrder(id) { return this.adapter.delete('orders', id); }

  async getClients() { return this.adapter.getCollection('clients'); }
  async saveClient(record) { return this.adapter.upsert('clients', record); }

  async getProducts() { return this.adapter.getCollection('products'); }
  async saveProduct(record) { return this.adapter.upsert('products', record); }
  async deleteProduct(id) { return this.adapter.delete('products', id); }

  async getSuppliers() { return this.adapter.getCollection('suppliers'); }
  async saveSupplier(record) { return this.adapter.upsert('suppliers', record); }
  async deleteSupplier(id) { return this.adapter.delete('suppliers', id); }

  async getPurchaseRequests() { return this.adapter.getCollection('purchaseRequests'); }
  async savePurchaseRequest(record) { return this.adapter.upsert('purchaseRequests', record); }

  async getFreshStock() { return this.adapter.getCollection('freshStock'); }
  async saveFreshStock(record) { return this.adapter.upsert('freshStock', record); }

  async getMaterials() { return this.adapter.getCollection('materials'); }
  async saveMaterial(record) { return this.adapter.upsert('materials', record); }

  async getDeliveryZones() { return this.adapter.getCollection('deliveryZones'); }
  async saveDeliveryZone(record) { return this.adapter.upsert('deliveryZones', record); }
  async deleteDeliveryZone(id) { return this.adapter.delete('deliveryZones', id); }

  async getDrivers() { return this.adapter.getCollection('drivers'); }
  async saveDriver(record) { return this.adapter.upsert('drivers', record); }
  async deleteDriver(id) { return this.adapter.delete('drivers', id); }
  
  async reinitialize() {
    await this.initialize();
  }
}

export const db = new DatabaseManager();
