
import React from "react";


const Tick = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0"
    aria-hidden="true" >
    <circle cx="10" cy="10" r="10" fill="#48BB78" />
    <path
      d="M6 10L9 13L14 7"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"   />
  </svg>
);


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

const plans: { key: PlanKey; name: string; price: string }[] = [
  { key: "starter", name: "Starter", price: "$249" },
  { key: "standard", name: "Standard", price: "$399" },
  { key: "premium", name: "Premium", price: "$549" },
  { key: "enterprise", name: "Enterprise", price: "Quotation" },
];


export const ComparisonTable = () => {
  const renderCell = (value: string | boolean) => {
    if (value === true) {
      return (
        <div className="flex justify-center">
          <Tick />
        </div>
      );
    }

    if (value === false) {
      return (
        <div className="flex justify-center text-gray-300 text-xl">—</div>
      );
    }

    return (
      <div className="flex justify-center text-center px-2">
        <span className="text-sm lg:text-base text-gray-800 leading-tight">
          {value}
        </span>
      </div>
    );
  };

  return (
    <div className="relative rounded-xl p-4">
      <div className="absolute inset-0 rounded-xl bg-linear-to-r from-orange-200/30 to-blue-200/30 blur-2xl" />

      <section className="relative z-10 mx-auto my-10 w-full max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="font-bold text-black text-3xl md:text-5xl mb-3">
            Our Product <span className="text-[#FF8535]">Plans</span>
          </h2>
          <p className="text-black text-base max-w-2xl mx-auto">
            Compare all features across our plans to find the perfect fit for
            your needs...
          </p>
        </div>

       
        <div className="hidden lg:block p-4 rounded-xl overflow-hidden">
          <div className="bg-linear-to-r from-[#FF6C0C]/80 to-[#BCCDFF]/90 p-1 rounded-xl">
            <div className="bg-white rounded-xl overflow-x-auto">
              <table className="w-full min-w-180">
                <thead>
                  <tr>
                    <th className="p-4 text-left font-bold text-base">
                      Features
                    </th>
                    {plans.map((plan) => (
                      <th
                        key={plan.key}
                        className="p-4 text-center font-bold">
                        <div className="text-xl">{plan.name}</div>
                        <div className="text-[#3766F0] text-4xl font-bold">
                          {plan.price}
                        </div>
                        {plan.key !== "enterprise" && (
                          <div className="text-sm text-black">/project</div>
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {featureCategories.map((category) => (
                    <React.Fragment key={category.category}>
                      <tr className="bg-[#FFF0E7]">
                        <td
                          colSpan={5}
                          className="px-4 py-2 font-semibold text-base">
                          {category.category}
                        </td>
                      </tr>

                      {category.features.map((feature) => (
                        <tr
                          key={feature.name}
                          className="hover:bg-gray-50 transition-colors"
                        >
                          <th className="px-4 py-3 text-sm font-medium border-b text-left">
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
        </div>

        
        <div className="lg:hidden space-y-5">
          {plans.map((plan) => (
            <div
              key={plan.key}
              className="bg-linear-to-b from-[#8CA9FF] to-[#FFF0E7] p-px rounded-lg"
            >
              <div className="bg-[#FFF0E7] rounded-lg p-5">
                <div className="text-center mb-5">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p className="text-[#3766F0] font-bold text-5xl">
                    {plan.price}
                    {plan.key !== "enterprise" && (
                      <span className="text-base text-black ml-1">
                        /project
                      </span>
                    )}
                  </p>
                </div>

                {featureCategories.map((category) => (
                  <div key={category.category} className="mb-4">
                    <h4 className="font-semibold text-base mb-2">
                      {category.category}
                    </h4>
                    <ul className="space-y-2">
                      {category.features.map((feature) => {
                        const value = feature[plan.key];
                        if (value === false) return null;

                        return (
                          <li
                            key={feature.name}
                            className="flex items-start gap-2" >
                            <Tick size={16} />
                            <span className="text-sm font-medium">
                              {feature.name}
                              {typeof value === "string" && (
                                <span className="text-gray-600 ml-1">
                                  – {value}
                                </span>
                              )}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
