export const siteMarkets = [
  {
    key: "global",
    label: "Global English",
    locale: "en",
    hrefLang: "en",
    ogLocale: "en_US",
    pathPrefix: "",
    areaServed: "Worldwide",
    published: true,
  },
  {
    key: "us",
    label: "United States",
    locale: "en-US",
    hrefLang: "en-US",
    ogLocale: "en_US",
    pathPrefix: "/us",
    areaServed: "United States",
    published: false,
  },
  {
    key: "uk",
    label: "United Kingdom",
    locale: "en-GB",
    hrefLang: "en-GB",
    ogLocale: "en_GB",
    pathPrefix: "/uk",
    areaServed: "United Kingdom",
    published: false,
  },
  {
    key: "ae",
    label: "United Arab Emirates",
    locale: "en-AE",
    hrefLang: "en-AE",
    ogLocale: "en_AE",
    pathPrefix: "/ae",
    areaServed: "United Arab Emirates",
    published: false,
  },
];

export const DEFAULT_MARKET_KEY = "global";

export const DEFAULT_MARKET =
  siteMarkets.find((market) => market.key === DEFAULT_MARKET_KEY) || siteMarkets[0];

export const publishedMarkets = siteMarkets.filter((market) => market.published);

export const getMarketByKey = (key = DEFAULT_MARKET_KEY) =>
  siteMarkets.find((market) => market.key === key) || DEFAULT_MARKET;
