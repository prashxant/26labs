import path from "path";
import React from "react";


const Tick = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 122.88 122.88"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0" >
   
    <circle
      cx="61.44"
      cy="61.44"
      r="61.44"
      fill="#48BB78"  >
      <animateTransform
        attributeName="transform"
        type="scale"
        from="0"
        to="1"
        begin="0s"
        dur="0.35s"
        additive="sum"
        transform-origin="61.44 61.44"   />
    </circle>

   
    <path
      d="M37.48 55.47 L52.75 67.5 L85.4 34.7"
      fill="none"
      stroke="white"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="200"
      strokeDashoffset="200" >
      <animate
        attributeName="stroke-dashoffset"
        from="200"
        to="0"
        begin="0.25s"
        dur="0.5s"
        fill="freeze"
      />
    </path>
  </svg>
);














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

export const ComparisonTable = () => {
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
      category: "Support  & Timeline",
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
          starter: "7-10 days",
          standard: "10-15 days",
          premium: "12-20 days",
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

  const plans = [
    { key: "starter", name: "Starter", price: "$249" },
    { key: "standard", name: "Standard", price: "$399" },
    { key: "premium", name: "Premium", price: "$549" },
    { key: "enterprise", name: "Enterprise", price: "Quotation" },
  ];

  const renderCell = (value: string | boolean) => {
    if (value === true) {
      return (
        <div className="flex justify-center">
          <svg
            width="18"
            height="18"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="lg:w-5 lg:h-5"
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
        </div>
      );
    } else if (value === false) {
      return (
        <div className="flex justify-center">
          <span className="text-gray-300 text-lg lg:text-xl">—</span>
        </div>
      );
    } else {
      return (
        <div className="flex justify-center text-center px-1">
          <span className="text-[10px] lg:text-xs text-black leading-tight">
            {value}
          </span>
        </div>
      );
    }
  };

  return (
    <section className="mx-auto my-6 sm:my-8 lg:my-16 w-full max-w-7xl px-3 sm:px-4 md:px-6">
      <div className="text-center mb-6 sm:mb-8 lg:mb-12">
        <h2 className="font-bold text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 px-2">
          Our Product <span className="text-[#FF8535]">Plans.</span>
        </h2>
        <p className="text-black text-xs sm:text-sm font-medium max-w-2xl mx-auto px-4">
          Compare all features across our plans to find the perfect fit for your
          needs
        </p>
      </div>

      <div className="hidden lg:block bg-linear-to-b from-[#8CA9FF] to-[#FFF0E7] p-[1px] rounded-lg overflow-hidden">
        <div className="bg-white rounded-lg overflow-x-auto">
          <table className="w-full min-w-175">
            <thead>
              <tr className="bg-linear-to-b from-[#8CA9FF] to-[#FFF0E7]">
                <th className="p-3 lg:p-4 text-left font-bold text-xs lg:text-sm text-black w-1/5 min-w-35">
                  Features
                </th>
                {plans.map((plan) => (
                  <th key={plan.key} className="p-3 lg:p-4 text-center w-1/5">
                    <div className="text-sm lg:text-lg font-bold mb-1">
                      {plan.name}
                    </div>
                    <div className="text-[#3766F0] font-bold text-2xl lg:text-3xl leading-none">
                      {plan.price}
                    </div>
                    {plan.key !== "enterprise" && (
                      <div className="text-[10px] lg:text-xs text-black mt-1">/project</div>
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
                      className="px-3 lg:px-4 py-2 font-semibold text-xs lg:text-sm" >
                      {category.category}
                    </td>
                  </tr>

                 
                  {category.features.map((feature) => (
                    <tr key={feature.name} className="hover:bg-gray-50 transition-colors">
                      <td className="px-3 lg:px-4 py-2 lg:py-3 text-[11px] lg:text-xs font-medium border-b border-gray-100">
                        {feature.name}
                      </td>
                      <td className="px-3 lg:px-4 py-2 lg:py-3 border-b border-gray-100">
                        {renderCell(feature.starter)}
                      </td>
                      <td className="px-3 lg:px-4 py-2 lg:py-3 border-b border-gray-100">
                        {renderCell(feature.standard)}
                      </td>
                      <td className="px-3 lg:px-4 py-2 lg:py-3 border-b border-gray-100">
                        {renderCell(feature.premium)}
                      </td>
                      <td className="px-3 lg:px-4 py-2 lg:py-3 border-b border-gray-100">
                        {renderCell(feature.enterprise)}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      
      <div className="lg:hidden space-y-3 sm:space-y-4">
        {plans.map((plan) => (
          <div
            key={plan.key}
            className="bg-linear-to-b from-[#8CA9FF] to-[#FFF0E7] p-px rounded-md"       >
            <div className="bg-[#FFF0E7] rounded-md p-4 sm:p-5">
              <div className="text-center mb-3 sm:mb-4">
                <h3 className="text-lg sm:text-xl font-bold mb-1">{plan.name}</h3>
                <p className="text-[#3766F0] font-bold text-3xl sm:text-4xl">
                  {plan.price}
                  {plan.key !== "enterprise" && (
                    <span className="text-xs sm:text-sm text-black ml-1">/project</span>
                  )}
                </p>
              </div>

        
              <div className="space-y-2.5 sm:space-y-3">
                {featureCategories.map((category) => (
                  <div key={category.category}>
                    <h4 className="font-semibold text-xs sm:text-sm mb-1.5 sm:mb-2 text-black">
                      {category.category}
                    </h4>
                    <ul className="space-y-1 sm:space-y-1.5">
                      {category.features.map((feature) => {
                        const value = feature[plan.key as keyof Feature];
                        if (value === false) return null;

                        return (
                          <li
                            key={feature.name}
                            className="flex items-start gap-1.5 sm:gap-2"        >
                         <div className="mt-0.5 shrink-0">
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 16 16"
                                className="sm:w-4 sm:h-4"                       >
                                <circle cx="8" cy="8" r="8" fill="#48BB78" />
                                <path
                                  d="M5 8L7 10L11 6"
                                  stroke="white"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"                        />
                              </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                              <span className="text-[11px] sm:text-xs font-medium text-black">
                                {feature.name}
                              </span>
                              {typeof value === "string" && (
                                <span className="text-[10px] sm:text-xs text-gray-600 ml-1">
                                  - {value}
                                </span>
                              )}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="hidden md:block lg:hidden text-center text-xs text-gray-500 mt-4 italic">
        ← Scroll horizontally to see all features →
      </p>
    </section>
  );
};