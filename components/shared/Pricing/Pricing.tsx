import { Check } from "lucide-react";

export default function Price() {
  return (
    <section className="w-full bg-white py-[96px]">
      <div className="mx-auto flex max-w-[1280px] justify-center gap-[28px] px-[24px]">
        {/* Starter */}
        <Card
          title="Starter"
          desc="For small teams seeking digital presence and ready to deploy."
          price="$249"
          features={[
            "High Quality Landing Page",
            "Fast and Classic Design",
            "24-hour support response time",
            "React / Next.js / Tailwind CSS code",
            "7 to 10 days turn around time",
          ]}
          button="Get Started"
        />

        {/* Standard (highlighted) */}
        <Card
          title="Standard"
          desc="For growing teams seeking advance resource level digital website for their clients."
          price="$399"
          features={[
            "Everything in Starter pack",
            "Website analytics setup",
            "Micro design interaction",
            "Customize Theme Pallet",
            "24-hour support response time",
            "10 to 15 days turn around time",
          ]}
          button="Get Started"
          highlighted
        />

        {/* Premium */}
        <Card
          title="Premium"
          desc="For organizations with advance user for high growth teams and more."
          price="$549"
          features={[
            "Everything in Standard pack",
            "Multiple Page Support",
            "Custom Design Components",
            "Search Engine Optimization",
            "Unlimited Revisions",
            "12 to 20 days turn around time",
          ]}
          button="Get Started"
        />

        {/* Enterprise */}
        <Card
          title="Enterprise"
          desc="Multiple admin layers full system build for a organization with support staff."
          features={[
            "Everything in Premium pack",
            "Multi Level Admin System",
            "Enterprise level pages",
            "CRM",
            "Advance Support",
            "Unlimited Revisions",
            "Dedicated maintenance team",
          ]}
          button="Let’s Talk"
          quotation
        />
      </div>
    </section>
  );
}

/* ---------------------------------- */

function Card({
  title,
  desc,
  price,
  features,
  button,
  highlighted,
  quotation,
}: {
  title: string;
  desc: string;
  price?: string;
  features: string[];
  button: string;
  highlighted?: boolean;
  quotation?: boolean;
}) {
  return (
    <div
      className={`relative w-[270px] rounded-[28px] bg-white px-[26px] py-[32px]
        ${highlighted ? "border-[2px] border-[#4F7DFF]" : "border-[2px] border-[#D9E2FF]"}
      `}
    >
      {/* outer highlight ring */}
      {highlighted && (
        <div className="pointer-events-none absolute inset-[-6px] rounded-[34px] border-[2px] border-[#4F7DFF]/30" />
      )}

      {/* Title */}
      <h3 className="text-[18px] font-semibold text-[#0F172A]">{title}</h3>

      {/* Description */}
      <p className="mt-[10px] text-[13px] leading-[18px] text-[#64748B]">
        {desc}
      </p>

      {/* Features */}
      <ul className="mt-[26px] space-y-[14px]">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-[10px]">
            <span className="mt-[2px] flex h-[16px] w-[16px] items-center justify-center rounded-full bg-[#DFF3D8]">
              <Check className="h-[10px] w-[10px] text-[#4CAF50]" />
            </span>
            <span
              className={`text-[13px] leading-[18px]
                ${f.startsWith("Everything") ? "text-[#F97316] font-medium" : "text-[#334155]"}
              `}
            >
              {f}
            </span>
          </li>
        ))}
      </ul>

      {/* Price */}
      <div className="mt-[30px]">
        {quotation ? (
          <p className="text-[18px] font-medium text-[#4F7DFF]">
            Get a Quotation
          </p>
        ) : (
          <p className="text-[14px] text-[#64748B]">
            for{" "}
            <span className="text-[36px] font-semibold text-[#4F7DFF] leading-none">
              {price}
            </span>{" "}
            <span className="text-[13px] text-[#94A3B8]">/project</span>
          </p>
        )}
      </div>

      {/* Button */}
      <button
        className={`mt-[22px] w-full rounded-[12px] border px-[16px] py-[10px] text-[14px] font-medium transition
          ${
            highlighted
              ? "border-[#4F7DFF] bg-[#4F7DFF] text-white hover:bg-[#3B6CF0]"
              : "border-[#BFD1FF] bg-[#EAF0FF] text-[#4F7DFF] hover:bg-[#DEE8FF]"
          }
        `}
      >
        {button}
      </button>
    </div>
  );
}
