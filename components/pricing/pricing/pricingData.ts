export type PricingPlanKey =
  | "starter"
  | "standard"
  | "premium"
  | "enterprise";

export type PricingCard = {
  key: PricingPlanKey;
  title: string;
  priceUsd: number | null;
  priceLabel?: string;
  description: string;
  features: string[];
};

export const PRICING_CARDS = [
  {
    key: "starter",
    title: "Starter",
    priceUsd: 249,
    description:
      "For small teams seeking digital presence and ready to deploy.",
    features: [
      "High Quality Landing Page",
      "Fast and Classic Design",
      "24-hour support response time",
      "React / Next.js / Tailwind CSS code",
      "7 to 10 days turn around time",
    ],
  },
  {
    key: "standard",
    title: "Standard",
    priceUsd: 399,
    description:
      "For growing teams seeking advance resource level digital website for their clients.",
    features: [
      "Everything in Starter pack",
      "Website analytics setup",
      "Micro design intraction",
      "Customize Theme Pallet",
      "10 to 15 days turn around time",
    ],
  },
  {
    key: "premium",
    title: "Premium",
    priceUsd: 549,
    description:
      "For organizations with advance  user for high growth teams and more.",
    features: [
      "Everything in Standard pack",
      "Multiple Page Support",
      "Custom Design Components",
      "Search Engine Optimization",
      "Unlimited Revisions",
      "12 to 20 days turn around time",
    ],
  },
  {
    key: "enterprise",
    title: "Enterprise",
    priceUsd: null,
    priceLabel: "Quotation",
    description:
      "Multiple admin lavers full system build for a organization with support staff. ",
    features: [
      "Everything in Premium pack",
      "Multi Level Admin System",
      "Enterprise level pages",
      "Personalized CRM",
      "Adv. Support",
      "Unlimited Revisions",
      "Dedicated maintenance team",
    ],
  },
] satisfies PricingCard[];
