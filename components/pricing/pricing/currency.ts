export const BASE_CURRENCY = "USD";

export const FALLBACK_USD_RATES = {
  USD: 1,
  AED: 3.6725,
  AUD: 1.53,
  CAD: 1.37,
  EUR: 0.87,
  GBP: 0.75,
  INR: 94.41,
  JPY: 155.5,
  NZD: 1.66,
  SGD: 1.28,
} as const;

export type SupportedCurrency = keyof typeof FALLBACK_USD_RATES;

export const SUPPORTED_CURRENCIES = Object.keys(
  FALLBACK_USD_RATES
) as SupportedCurrency[];

const COUNTRY_TO_CURRENCY: Record<string, SupportedCurrency> = {
  AE: "AED",
  AT: "EUR",
  AU: "AUD",
  BE: "EUR",
  CA: "CAD",
  CY: "EUR",
  DE: "EUR",
  EE: "EUR",
  ES: "EUR",
  FI: "EUR",
  FR: "EUR",
  GB: "GBP",
  GR: "EUR",
  IE: "EUR",
  IN: "INR",
  IT: "EUR",
  JP: "JPY",
  LT: "EUR",
  LU: "EUR",
  LV: "EUR",
  MT: "EUR",
  NL: "EUR",
  NZ: "NZD",
  PT: "EUR",
  SG: "SGD",
  SI: "EUR",
  SK: "EUR",
  US: "USD",
};

const TIME_ZONE_TO_COUNTRY: Record<string, string> = {
  "Asia/Dubai": "AE",
  "Asia/Kolkata": "IN",
  "Asia/Calcutta": "IN",
  "Asia/Singapore": "SG",
  "Asia/Tokyo": "JP",
  "Australia/Sydney": "AU",
  "Australia/Melbourne": "AU",
  "Europe/London": "GB",
  "America/New_York": "US",
  "America/Chicago": "US",
  "America/Denver": "US",
  "America/Los_Angeles": "US",
  "America/Phoenix": "US",
  "America/Toronto": "CA",
  "America/Vancouver": "CA",
  "Pacific/Auckland": "NZ",
};

export type ExchangeRates = Partial<Record<SupportedCurrency, number>>;

export const getCurrencyForCountry = (
  countryCode: string | undefined
): SupportedCurrency => {
  if (!countryCode) return BASE_CURRENCY;

  return COUNTRY_TO_CURRENCY[countryCode.toUpperCase()] ?? BASE_CURRENCY;
};

export const getVisitorCurrency = (): SupportedCurrency => {
  if (typeof window === "undefined") return BASE_CURRENCY;

  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const timeZoneCurrency = getCurrencyForCountry(
    TIME_ZONE_TO_COUNTRY[timeZone]
  );

  if (timeZoneCurrency !== BASE_CURRENCY) return timeZoneCurrency;

  const languages = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];

  for (const language of languages) {
    try {
      const region = new Intl.Locale(language).region;
      const currency = getCurrencyForCountry(region);

      if (currency !== BASE_CURRENCY) return currency;
    } catch {
      const region = language.split("-")[1];
      const currency = getCurrencyForCountry(region);

      if (currency !== BASE_CURRENCY) return currency;
    }
  }

  return BASE_CURRENCY;
};

export const getVisitorLocale = () => {
  if (typeof window === "undefined") return "en-US";

  return navigator.languages?.[0] ?? navigator.language ?? "en-US";
};

export const formatConvertedUsdPrice = ({
  usdPrice,
  currency,
  locale,
  rates,
}: {
  usdPrice: number;
  currency: SupportedCurrency;
  locale: string;
  rates: ExchangeRates;
}) => {
  const rate = rates[currency] ?? FALLBACK_USD_RATES[currency];
  const convertedPrice = usdPrice * rate;

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    currencyDisplay: "narrowSymbol",
    maximumFractionDigits: 0,
  }).format(convertedPrice);
};
