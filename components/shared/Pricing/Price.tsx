import { Check } from "lucide-react";

const plans = [
  {
    title: "Starter",
    description:
      "For small teams seeking digital presence and ready to deploy.",
    price: "$249",
    cta: "Get Started",
    features: [
      "High Quality Landing Page",
      "Fast and Classic Design",
      "24-hour support response time",
      "React / Next.js / Tailwind CSS code",
      "7 to 10 days turn around time",
    ],
    highlighted: false,
  },
  {
    title: "Standard",
    description:
      "For growing teams seeking advance resource level digital website for their clients.",
    price: "$399",
    cta: "Get Started",
    features: [
      "Everything in Starter pack",
      "Website analytics setup",
      "Micro design interaction",
      "Customize Theme Pallet",
      "24-hour support response time",
      "10 to 15 days turn around time",
    ],
    highlighted: true,
  },
  {
    title: "Premium",
    description:
      "For organizations with advance user for high growth teams and more.",
    price: "$549",
    cta: "Get Started",
    features: [
      "Everything in Standard pack",
      "Multiple Page Support",
      "Custom Design Components",
      "Search Engine Optimization",
      "Unlimited Revisions",
      "12 to 20 days turn around time",
    ],
    highlighted: false,
  },
  {
    title: "Enterprise",
    description:
      "Multiple admin layers full system build for a organization with support staff.",
    price: null,
    cta: "Let’s Talk",
    features: [
      "Everything in Premium pack",
      "Multi Level Admin System",
      "Enterprise level pages",
      "CRM",
      "Advance Support",
      "Unlimited Revisions",
      "Dedicated maintenance team",
    ],
    highlighted: false,
  },
];

export default function Price() {
  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`relative flex flex-col rounded-[32px] border-2 px-8 py-10 transition
                ${
                  plan.highlighted
                    ? "border-blue-500 shadow-[0_0_0_4px_rgba(59,130,246,0.15)]"
                    : "border-blue-100"
                }`}
            >
              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900">
                {plan.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {plan.description}
              </p>

              {/* Features */}
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100">
                      <Check className="h-3.5 w-3.5 text-green-600" />
                    </span>
                    <span
                      className={`text-sm ${
                        feature.includes("Everything")
                          ? "font-medium text-orange-500"
                          : "text-gray-700"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Price */}
              <div className="mt-10">
                {plan.price ? (
                  <p className="text-sm text-gray-600">
                    for{" "}
                    <span className="text-4xl font-semibold text-blue-600">
                      {plan.price}
                    </span>{" "}
                    <span className="text-gray-500">/project</span>
                  </p>
                ) : (
                  <p className="text-lg font-medium text-blue-600">
                    Get a Quotation
                  </p>
                )}
              </div>

              {/* CTA */}
              <button
                className={`mt-6 rounded-xl px-6 py-3 text-sm font-medium transition
                  ${
                    plan.highlighted
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                  }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
