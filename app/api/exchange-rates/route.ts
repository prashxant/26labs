import {
  FALLBACK_USD_RATES,
  SUPPORTED_CURRENCIES,
  type SupportedCurrency,
} from "@/components/pricing/pricing/currency";

const EXCHANGE_RATE_URL = "https://open.er-api.com/v6/latest/USD";
const CACHE_SECONDS = 60 * 60;

type ExchangeRateApiResponse = {
  result?: string;
  time_last_update_utc?: string;
  rates?: Record<string, number>;
};

export const revalidate = 3600;

export async function GET() {
  try {
    const response = await fetch(EXCHANGE_RATE_URL, {
      headers: { Accept: "application/json" },
      next: { revalidate: CACHE_SECONDS },
    });

    if (!response.ok) {
      throw new Error(`Exchange rate request failed: ${response.status}`);
    }

    const data = (await response.json()) as ExchangeRateApiResponse;

    if (data.result !== "success" || !data.rates) {
      throw new Error("Exchange rate response was not successful");
    }

    const rates = SUPPORTED_CURRENCIES.reduce(
      (accumulator, currency) => {
        const rate = data.rates?.[currency];

        if (typeof rate === "number" && Number.isFinite(rate)) {
          accumulator[currency] = rate;
        }

        return accumulator;
      },
      {} as Partial<Record<SupportedCurrency, number>>
    );

    return Response.json(
      {
        base: "USD",
        updatedAt: data.time_last_update_utc,
        rates,
      },
      {
        headers: {
          "Cache-Control": `public, s-maxage=${CACHE_SECONDS}, stale-while-revalidate=86400`,
        },
      }
    );
  } catch {
    return Response.json(
      {
        base: "USD",
        fallback: true,
        rates: FALLBACK_USD_RATES,
      },
      {
        headers: {
          "Cache-Control": "public, max-age=300",
        },
      }
    );
  }
}
