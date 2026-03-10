
import React from "react";

/* ---------------------------------- */
/* Icons */
/* ---------------------------------- */

const Tick = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0"
    aria-hidden="true"
  >
    <circle cx="10" cy="10" r="10" fill="#48BB78" />
    <path
      d="M6 10L9 13L14 7"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ---------------------------------- */
/* Types */
/* ---------------------------------- */

type PlanKey = "starter" | "standard" | "premium" | "enterprise";

type Feature = {
  name: string;
  starter: string | boolean;
  standard: string | boolean;
  premium: string | boolean;
  enterprise: string | boolean;
};

type FeatureCategory = {
  category: string;
  features: Feature[];
};

/* ---------------------------------- */
/* Data */
/* ---------------------------------- */

const plans: { key: PlanKey; name: string; price: string }[] = [
  { key: "starter", name: "Starter", price: "$249" },
  { key: "standard", name: "Standard", price: "$399" },
  { key: "premium", name: "Premium", price: "$549" },
  { key: "enterprise", name: "Enterprise", price: "Quotation" },
];

const featureCategories: FeatureCategory[] = [
  {
    category: "Core Features",
    features: [
      {
        name: "Landing Page",
        starter: "High Quality",
        standard: true,
        premium: true,
        enterprise: true,
      },
      {
        name: "Design Style",
        starter: "Fast & Classic",
        standard: true,
        premium: true,
        enterprise: true,
      },
      {
        name: "Technology Stack",
        starter: "React / Next.js / Tailwind",
        standard: true,
        premium: true,
        enterprise: true,
      },
    ],
  },
  {
    category: "Support & Timeline",
    features: [
      {
        name: "Support Response Time",
        starter: "24 hours",
        standard: "24 hours",
        premium: true,
        enterprise: "Advanced Support",
      },
      {
        name: "Turnaround Time",
        starter: "7–10 days",
        standard: "10–15 days",
        premium: "12–20 days",
        enterprise: false,
      },
      {
        name: "Revisions",
        starter: false,
        standard: false,
        premium: "Unlimited",
        enterprise: "Unlimited",
      },
      {
        name: "Maintenance",
        starter: false,
        standard: false,
        premium: false,
        enterprise: "Dedicated Team",
      },
    ],
  },
  {
    category: "Advanced Features",
    features: [
      {
        name: "Website Analytics",
        starter: false,
        standard: true,
        premium: true,
        enterprise: true,
      },
      {
        name: "Micro Design Interaction",
        starter: false,
        standard: true,
        premium: true,
        enterprise: true,
      },
      {
        name: "Theme Customization",
        starter: false,
        standard: "Custom Palette",
        premium: true,
        enterprise: true,
      },
      {
        name: "Page Support",
        starter: false,
        standard: false,
        premium: "Multiple Pages",
        enterprise: "Enterprise Level",
      },
      {
        name: "Design Components",
        starter: false,
        standard: false,
        premium: "Custom Components",
        enterprise: true,
      },
      {
        name: "Search Engine Optimization",
        starter: false,
        standard: false,
        premium: true,
        enterprise: true,
      },
    ],
  },
  {
    category: "Enterprise Features",
    features: [
      {
        name: "Multi-Level Admin System",
        starter: false,
        standard: false,
        premium: false,
        enterprise: true,
      },
      {
        name: "Personalized CRM",
        starter: false,
        standard: false,
        premium: false,
        enterprise: true,
      },
    ],
  },
];

/* ---------------------------------- */
/* Helpers */
/* ---------------------------------- */

const TickCentered = () => (
  <div className="flex justify-center">
    <Tick />
  </div>
);

const Dash = () => (
  <div className="flex justify-center text-gray-300 text-xl">—</div>
);

const TextCell = ({ value }: { value: string }) => (
  <div className="flex justify-center px-2 text-center">
    <span className="text-sm lg:text-base text-gray-800 leading-tight">
      {value}
    </span>
  </div>
);

const renderCell = (value: string | boolean) => {
  if (value === true) return <TickCentered />;
  if (value === false) return <Dash />;
  return <TextCell value={value} />;
};

/* ---------------------------------- */
/* Component */
/* ---------------------------------- */

export const ComparisonTable = () => {
  return (
    <div className="relative">
      <section className="mx-auto max-w-7xl px-4 my-12">
        <div className="hidden lg:block relative rounded-xl overflow-hidden p-2">
          <div className="absolute inset-0 scale-170 -z-10 animate-spin-slow  ">
            <div className="h-full w-full   bg-linear-to-r from-[#FF6C0C]/50  via-amber-100 to-[#BCCDFF] " />
          </div>
          <div className="bg-white rounded-xl overflow-x-auto">
            <table className="w-full min-w-275">
              <thead>
                <tr>
                  <th className="p-4 text-left font-bold">Features</th>
                  {plans.map((plan) => (
                    <th key={plan.key} className="p-4 text-center font-bold">
                      <div className="text-xl">{plan.name}</div>
                      <div className="text-[#3766F0] text-4xl font-bold">
                        {plan.price}
                      </div>
                      {plan.key !== "enterprise" && (
                        <div className="text-sm">/project</div>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {featureCategories.map((category) => (
                  <React.Fragment key={category.category}>
                    <tr className="bg-[#FFF0E7]">
                      <td colSpan={5} className="px-4 py-2 font-semibold">
                        {category.category}
                      </td>
                    </tr>

                    {category.features.map((feature) => (
                      <tr key={feature.name} className="hover:bg-gray-50">
                        <th className="px-4 py-3 text-sm text-left border-b">
                          {feature.name}
                        </th>
                        {plans.map((plan) => (
                          <td key={plan.key} className="border-b">
                            {renderCell(feature[plan.key])}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};
