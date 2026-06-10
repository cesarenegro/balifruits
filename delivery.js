const deliveryLanguageSelect = document.querySelector("[data-language-select]");
const deliveryMap = document.querySelector("[data-delivery-map]");
const deliverySupportedLanguages = ["en", "ru"];
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
