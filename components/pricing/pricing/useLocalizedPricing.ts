"use client";

import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import {
  BASE_CURRENCY,
  FALLBACK_USD_RATES,
  type ExchangeRates,
  formatConvertedUsdPrice,
  getVisitorCurrency,
  getVisitorLocale,
  type SupportedCurrency,
} from "./currency";

type RatesResponse = {
  rates?: ExchangeRates;
};

type LocalizedPricingState = {
  currency: SupportedCurrency;
  locale: string;
  rates: ExchangeRates;
};

const subscribeToLocaleChanges = () => () => {};

const getClientSnapshot = () =>
  `${getVisitorCurrency()}|${getVisitorLocale()}`;

const getServerSnapshot = () => `${BASE_CURRENCY}|en-US`;

let ratesRequest: Promise<ExchangeRates> | null = null;

const loadExchangeRates = () => {
  ratesRequest ??= fetch("/api/exchange-rates")
    .then((response) => {
      if (!response.ok) throw new Error("Unable to load exchange rates");
      return response.json() as Promise<RatesResponse>;
    })
    .then((data) => ({
      ...FALLBACK_USD_RATES,
      ...data.rates,
    }));

  return ratesRequest;
};

export const useLocalizedPricing = () => {
  const snapshot = useSyncExternalStore(
    subscribeToLocaleChanges,
    getClientSnapshot,
    getServerSnapshot
  );
  const [currency, locale] = snapshot.split("|") as [
    SupportedCurrency,
    string,
  ];
  const [rates, setRates] = useState<LocalizedPricingState["rates"]>(
    FALLBACK_USD_RATES
  );

  useEffect(() => {
    if (currency === BASE_CURRENCY) return;

    let isMounted = true;

    loadExchangeRates()
      .then((loadedRates) => {
        if (isMounted) setRates(loadedRates);
      })
      .catch(() => {});

    return () => {
      isMounted = false;
    };
  }, [currency]);

  const formatPrice = useCallback(
    (usdPrice: number | null, fallbackLabel = "Quotation") => {
      if (usdPrice === null) return fallbackLabel;

      return formatConvertedUsdPrice({
        usdPrice,
        currency,
        locale,
        rates,
      });
    },
    [currency, locale, rates]
  );

  return {
    currency,
    formatPrice,
  };
};
