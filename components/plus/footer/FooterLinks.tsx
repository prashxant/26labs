import Link from "next/link";

const FOOTER_LINKS = [
  {
    title: "Components",
    links: [
      "Magic Card",
      "Border Beam",
      "Confetti",
      "Hyper Text",
      "Shiny Button",
    ],
  },
  {
    title: "Templates",
    links: ["Magic Card", "Border Beam", "Confetti", "Hyper Text"],
  },
  {
    title: "Pricing",
    links: [
      "Magic Card",
      "Border Beam",
      "Confetti",
      "Hyper Text",
      "Hyper Text",
      "Shiny Button",
    ],
  },
  {
    title: "Contact",
    links: ["Magic Card", "Border Beam", "Confetti"],
  },
  {
    title: "Social",
    links: [
      "Confetti",
      "Hyper Text",
      "Hyper Text",
      "Shiny Button",
      "Border Beam",
      "Confetti",
      "Hyper Text",
    ],
  },
];

export const FooterLinks = () => {
  return (
    <div className="grid grid-cols-5 pt-7 gap-21  text-white">
      {FOOTER_LINKS.map((section) => (
        <div key={section.title} className="flex flex-col gap-4">
          <h3 className="text-[16px] font-medium">{section.title}</h3>

          <ul className="flex flex-col gap-3 text-gray-300 text-[16px] font-light ">
            {section.links.map((link, i) => (
              <li key={i}>
                <Link
                  href="/"
                  className="hover:text-[#FF6C0C] transition-colors"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
