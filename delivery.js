const deliveryLanguageSelect = document.querySelector("[data-language-select]");
const deliveryMap = document.querySelector("[data-delivery-map]");
const deliverySupportedLanguages = ["en", "ru", "id", "it", "zh", "uk"];
const deliveryFallbackLanguage = "en";
const deliveryTranslations = {
  en: {
    title: "BALI FRUITS | Delivery Zones",
    metaDescription:
      "BALI FRUITS delivery zones across Canggu, Seminyak, Sanur, Ubud, Jimbaran, Uluwatu and nearby Bali areas.",
    navHarvest: "Harvest",
    navBoxes: "Boxes",
    navFaq: "FAQ",
    navCart: "Cart",
    heroEyebrow: "Delivery zones",
    heroTitle: "Fresh delivery across Bali by service zone.",
    heroCopy:
      "The map shows our current planning zones for daily produce delivery. Exact timing and delivery fee are confirmed after address details.",
    zoneOneLabel: "Zone 1",
    zoneTwoLabel: "Zone 2",
    zoneThreeLabel: "Zone 3",
    zoneFourLabel: "Zone 4",
    zoneFiveLabel: "Zone 5",
    zoneOneCopy: "Primary west-coast delivery area for homes, villas and cafes.",
    zoneTwoCopy: "Central south-west route with strong daily delivery coverage.",
    zoneThreeCopy: "South-east city and beach-side route for scheduled delivery.",
    zoneFourCopy: "Central Bali route for villas, retreat spaces and family homes.",
    zoneFiveCopy: "Southern peninsula route for larger basket and box deliveries.",
    mapEyebrow: "BALI FRUITS map",
    mapTitle: "Zone 1-5 coverage",
    mapBadge: "Service map",
    mapNote:
      "Stylized delivery map for frontend planning. Final route timing depends on exact address and daily delivery schedule.",
  },
  ru: {
    title: "BALI FRUITS | Зоны доставки",
    metaDescription:
      "Зоны доставки BALI FRUITS по Бали: Чангу, Семиньяк, Санур, Убуд, Джимбаран, Улувату и соседние районы.",
    navHarvest: "Урожай",
    navBoxes: "Наборы",
    navFaq: "FAQ",
    navCart: "Корзина",
    heroEyebrow: "Зоны доставки",
    heroTitle: "Свежая доставка по Бали по сервисным зонам.",
    heroCopy:
      "Карта показывает текущие зоны планирования для ежедневной доставки продуктов. Точное время и стоимость доставки подтверждаются после получения адреса.",
    zoneOneLabel: "Зона 1",
    zoneTwoLabel: "Зона 2",
    zoneThreeLabel: "Зона 3",
    zoneFourLabel: "Зона 4",
    zoneFiveLabel: "Зона 5",
    zoneOneCopy: "Основная зона западного побережья для домов, вилл и кафе.",
    zoneTwoCopy: "Центральный юго-западный маршрут с устойчивым ежедневным покрытием.",
    zoneThreeCopy: "Юго-восточный городской и прибрежный маршрут для доставки по расписанию.",
    zoneFourCopy: "Центральный маршрут Бали для вилл, ретритов и семейных домов.",
    zoneFiveCopy: "Южный полуостров для крупных корзин и доставок боксов.",
    mapEyebrow: "Карта BALI FRUITS",
    mapTitle: "Покрытие зон 1-5",
    mapBadge: "Карта сервиса",
    mapNote:
      "Стилизованная карта доставки для планирования на сайте. Финальное время маршрута зависит от точного адреса и ежедневного графика доставки.",
  },
  id: {
    title: "BALI FRUITS | Zona Pengiriman",
    metaDescription:
      "Zona pengiriman BALI FRUITS di Canggu, Seminyak, Sanur, Ubud, Jimbaran, Uluwatu, dan area Bali sekitarnya.",
    navHarvest: "Panen",
    navBoxes: "Kotak",
    navFaq: "FAQ",
    navCart: "Keranjang",
    heroEyebrow: "Zona pengiriman",
    heroTitle: "Pengiriman segar di seluruh Bali berdasarkan zona layanan.",
    heroCopy:
      "Peta ini menunjukkan zona perencanaan kami saat ini untuk pengiriman produk harian. Waktu pasti dan biaya pengiriman dikonfirmasi setelah detail alamat.",
    zoneOneLabel: "Zona 1",
    zoneTwoLabel: "Zona 2",
    zoneThreeLabel: "Zona 3",
    zoneFourLabel: "Zona 4",
    zoneFiveLabel: "Zona 5",
    zoneOneCopy: "Area pengiriman pantai barat utama untuk rumah, vila, dan kafe.",
    zoneTwoCopy: "Rute barat daya tengah dengan cakupan pengiriman harian yang kuat.",
    zoneThreeCopy: "Rute kota tenggara dan tepi pantai untuk pengiriman terjadwal.",
    zoneFourCopy: "Rute Bali tengah untuk vila, tempat retret, dan rumah keluarga.",
    zoneFiveCopy: "Rute semenanjung selatan untuk pengiriman keranjang dan kotak yang lebih besar.",
    mapEyebrow: "Peta BALI FRUITS",
    mapTitle: "Cakupan Zona 1-5",
    mapBadge: "Peta layanan",
    mapNote:
      "Peta pengiriman bergaya untuk perencanaan antarmuka. Waktu rute akhir tergantung pada alamat persis dan jadwal pengiriman harian.",
  },
  it: {
    title: "BALI FRUITS | Zone di Consegna",
    metaDescription:
      "Zone di consegna di BALI FRUITS tra Canggu, Seminyak, Sanur, Ubud, Jimbaran, Uluwatu e le aree vicine a Bali.",
    navHarvest: "Raccolto",
    navBoxes: "Box",
    navFaq: "FAQ",
    navCart: "Carrello",
    heroEyebrow: "Zone di consegna",
    heroTitle: "Consegna fresca in tutta Bali per zona di servizio.",
    heroCopy:
      "La mappa mostra le nostre attuali zone di pianificazione per la consegna giornaliera dei prodotti. L'orario esatto e il costo di consegna vengono confermati dopo i dettagli dell'indirizzo.",
    zoneOneLabel: "Zona 1",
    zoneTwoLabel: "Zona 2",
    zoneThreeLabel: "Zona 3",
    zoneFourLabel: "Zona 4",
    zoneFiveLabel: "Zona 5",
    zoneOneCopy: "Area di consegna principale della costa occidentale per case, ville e caffè.",
    zoneTwoCopy: "Percorso centrale sud-ovest con forte copertura di consegna giornaliera.",
    zoneThreeCopy: "Percorso della città sud-orientale e sul mare per consegne programmate.",
    zoneFourCopy: "Percorso centrale di Bali per ville, spazi di ritiro e case unifamiliari.",
    zoneFiveCopy: "Percorso della penisola meridionale per consegne di cesti e box più grandi.",
    mapEyebrow: "Mappa BALI FRUITS",
    mapTitle: "Copertura Zona 1-5",
    mapBadge: "Mappa dei servizi",
    mapNote:
      "Mappa di consegna stilizzata per la pianificazione sul sito. Le tempistiche finali del percorso dipendono dall'indirizzo esatto e dal programma di consegna giornaliero.",
  },
  zh: {
    title: "BALI FRUITS | 配送区域",
    metaDescription:
      "BALI FRUITS在长谷、水明漾、沙努尔、乌布、金巴兰、乌鲁瓦图及巴厘岛附近地区的配送区域。",
    navHarvest: "采摘",
    navBoxes: "套餐盒",
    navFaq: "常见问题",
    navCart: "购物车",
    heroEyebrow: "配送区域",
    heroTitle: "按服务区域在巴厘岛全岛进行生鲜配送。",
    heroCopy:
      "该地图显示了我们目前用于日常农产品配送的规划区域。确切的时间和配送费用在提供地址详细信息后确认。",
    zoneOneLabel: "区域 1",
    zoneTwoLabel: "区域 2",
    zoneThreeLabel: "区域 3",
    zoneFourLabel: "区域 4",
    zoneFiveLabel: "区域 5",
    zoneOneCopy: "主要西海岸配送区，服务于家庭、别墅和咖啡馆。",
    zoneTwoCopy: "中西南部路线，拥有强大的日常配送覆盖面。",
    zoneThreeCopy: "东南部城市和海滨路线，用于定时配送。",
    zoneFourCopy: "巴厘岛中部路线，服务于别墅、静修处和家庭住宅。",
    zoneFiveCopy: "南部半岛路线，用于较大的篮子和套餐盒配送。",
    mapEyebrow: "BALI FRUITS 地图",
    mapTitle: "区域 1-5 覆盖范围",
    mapBadge: "服务地图",
    mapNote:
      "用于前端规划的风格化配送地图。最终路线时间取决于确切地址和日常配送时间表。",
  },
  uk: {
    title: "BALI FRUITS | Зони доставки",
    metaDescription:
      "Зони доставки BALI FRUITS по Балі: Чангу, Семіньяк, Санур, Убуд, Джимбаран, Улувату та сусідні райони.",
    navHarvest: "Врожай",
    navBoxes: "Набори",
    navFaq: "FAQ",
    navCart: "Кошик",
    heroEyebrow: "Зони доставки",
    heroTitle: "Свіжа доставка по Балі за сервісними зонами.",
    heroCopy:
      "Карта показує поточні зони планування для щоденної доставки продуктів. Точний час та вартість доставки підтверджуються після отримання адреси.",
    zoneOneLabel: "Зона 1",
    zoneTwoLabel: "Зона 2",
    zoneThreeLabel: "Зона 3",
    zoneFourLabel: "Зона 4",
    zoneFiveLabel: "Зона 5",
    zoneOneCopy: "Основна зона західного узбережжя для будинків, вілл та кафе.",
    zoneTwoCopy: "Центральний південно-західний маршрут зі стійким щоденним покриттям.",
    zoneThreeCopy: "Південно-східний міський та прибережний маршрут для доставки за розкладом.",
    zoneFourCopy: "Центральний маршрут Балі для вілл, ретритів та сімейних будинків.",
    zoneFiveCopy: "Південний півострів для великих кошиків та доставок наборів.",
    mapEyebrow: "Карта BALI FRUITS",
    mapTitle: "Покриття зон 1-5",
    mapBadge: "Карта сервісу",
    mapNote:
      "Стилізована карта доставки для планування на сайті. Фінальний час маршруту залежить від точної адреси та щоденного графіка доставки.",
  },
  fr: {
    title: "BALI FRUITS | Zones de livraison",
    metaDescription:
      "Zones de livraison BALI FRUITS à Bali : Canggu, Seminyak, Sanur, Ubud, Jimbaran, Uluwatu et les quartiers environnants.",
    navHarvest: "Récolte",
    navBoxes: "Paniers",
    navFaq: "FAQ",
    navCart: "Panier",
    heroEyebrow: "Zones de livraison",
    heroTitle: "Livraison de produits frais à Bali par zone de service.",
    heroCopy:
      "La carte montre les zones de planification actuelles pour la livraison quotidienne de produits frais. L'heure de livraison exacte et les frais sont confirmés une fois l'adresse reçue.",
    zoneOneLabel: "Zone 1",
    zoneTwoLabel: "Zone 2",
    zoneThreeLabel: "Zone 3",
    zoneFourLabel: "Zone 4",
    zoneFiveLabel: "Zone 5",
    zoneOneCopy: "Zone de base de la côte ouest pour les maisons, les villas et les cafés.",
    zoneTwoCopy: "Itinéraire central du sud-ouest avec une couverture quotidienne solide.",
    zoneThreeCopy: "Itinéraire urbain et côtier du sud-est pour une livraison planifiée.",
    zoneFourCopy: "Itinéraire central de Bali pour les villas, les retraites et les maisons familiales.",
    zoneFiveCopy: "Péninsule sud pour les grands paniers et les livraisons de colis.",
    mapEyebrow: "Carte BALI FRUITS",
    mapTitle: "Couverture des zones 1-5",
    mapBadge: "Carte de service",
    mapNote:
      "Carte de livraison stylisée pour la planification du site Web. L'heure de route finale dépend de l'adresse exacte et du calendrier de livraison quotidien.",
  },
};

function normalizeDeliveryLanguage(language) {
  if (!language || typeof language !== "string") {
    return deliveryFallbackLanguage;
  }

  const primaryLanguage = language.toLowerCase().split("-")[0];
  return deliverySupportedLanguages.includes(primaryLanguage) ? primaryLanguage : deliveryFallbackLanguage;
}

function getDeliveryBrowserLanguage() {
  const browserLanguages = navigator.languages && navigator.languages.length
    ? navigator.languages
    : [navigator.language || navigator.userLanguage];

  return normalizeDeliveryLanguage(browserLanguages[0]);
}

function getInitialDeliveryLanguage() {
  const savedLanguage = localStorage.getItem("baliFruitsLanguage");
  return savedLanguage ? normalizeDeliveryLanguage(savedLanguage) : getDeliveryBrowserLanguage();
}

function setDeliveryLanguage(language) {
  const currentLanguage = normalizeDeliveryLanguage(language);
  const dictionary = deliveryTranslations[currentLanguage];

  localStorage.setItem("baliFruitsLanguage", currentLanguage);
  document.documentElement.lang = currentLanguage;
  document.title = dictionary.title;
  document.querySelector('meta[name="description"]').setAttribute("content", dictionary.metaDescription);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = dictionary[key];
  });

  deliveryLanguageSelect.value = currentLanguage;
  deliveryMap.src = currentLanguage === "ru" ? deliveryMap.dataset.mapRu : deliveryMap.dataset.mapEn;
  deliveryMap.alt = currentLanguage === "ru"
    ? "Карта зон доставки BALI FRUITS"
    : "BALI FRUITS delivery zones map";
}

deliveryLanguageSelect.addEventListener("change", (event) => {
  setDeliveryLanguage(event.target.value);
});

setDeliveryLanguage(getInitialDeliveryLanguage());
