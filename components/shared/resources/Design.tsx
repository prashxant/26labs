import { Typography } from "../Typography";
import { Phool } from "../Phool";

const TOP_CARDS = [
  {
    title: "The Design of Everyday Things",
    author: "By Don Norman",
    cta: "Download Now For Free",
    link: "https://mitpress.mit.edu/9780262525671/the-design-of-everyday-things/",
    description:
      "A classic book on human-centered design and how to create intuitive, usable products.",
    icons: ["/Image pack/Icon/Book.png"],
  },
  {
    title: "Grid Systems",
    author: "By Kimberly Elam",
    cta: "Download Now For Free",
    link: "https://yalebooks.yale.edu/book/9780300104654/grid-systems/",
    description:
      "Learn how alignment, layout, and spacing shape powerful visual communication.",
    icons: ["/Image pack/Icon/Book.png"],
  },
  {
    title: "How Designers Think",
    author: "By Bryan Lawson",
    cta: "Download Now For Free",
    link: "https://www.routledge.com/How-Designers-Think/Lawson/p/book/9781138842077",
    description:
      "An in-depth look at how designers think and solve complex creative problems.",
    icons: ["/Image pack/Icon/Book.png"],
  },
];

const TOP_CARDS2 = [
  {
    title: "Getting Real",
    author: "By Basecamp",
    cta: "View Official Source",
    link: "https://basecamp.com/gettingreal",
    description:
      "A practical guide to building web products the simple, fast, and human way.",
    icons: ["/Image pack/Icon/Book.png"],
  },
  {
    title: "Next.js Documentation",
    author: "Official Docs",
    cta: "View Official Docs",
    link: "https://nextjs.org/docs",
    description:
      "Official Next.js documentation to build fast, modern React applications.",
    icons: ["/Image pack/Icon/Book.png"],
  },
  {
    title: "Tailwind CSS Documentation",
    author: "Official Docs",
    cta: "View Official Docs",
    link: "https://tailwindcss.com/docs",
    description:
      "Official Tailwind CSS docs to rapidly build modern, responsive UIs.",
    icons: ["/Image pack/Icon/Book.png"],
  },
];

export const Design = () => {
  return (
    <section className="relative">
      <div
        className="
            absolute right-0 h-full w-[30vw]
            -rotate-10 sm:-rotate-15 md:-rotate-25   lg:-rotate-30 xl:-rotate-60 rounded-full
            bg-linear-to-r from-[#FF6C0C]/50 to-[#BCCDFF]
            p-10 blur-3xl -z-300
          "
      />

      <div className="relative max-w-4xl mx-auto flex flex-col px-4 sm:px-6 lg:px-8">
        <div className="flex max-w-4xl justify-center py-16">
          <Typography
            className=""
            variant="h3"
            popUp="Design Resources."
            line1=""
          />
        </div>

        <div className="grid grid-cols-1 border border-black md:grid-cols-3">
          {TOP_CARDS.map((card, i) => (
            <div
              key={card.title}
              className={`
              flex h-full flex-col justify-between p-6
              border-b border-black md:border-b-0
              ${i !== TOP_CARDS.length - 1 ? "md:border-r" : ""}
            `}
            >
              <div className="space-y-3">
                <img src={card.icons[0]} alt="" className="h-6 w-6 shrink-0" />

                <h3 className="text-sm font-medium md:line-clamp-1">
                  {card.title}
                </h3>

                <p className="min-h-4 text-xs text-gray-500">{card.author}</p>

                <p className="text-xs leading-relaxed text-gray-600">
                  {card.description}
                </p>
              </div>

              <a
                href={card.link}
                target="_blank"
                rel="noreferrer"
                className="mt-6 py-2 text-xs font-medium underline underline-offset-4"
              >
                ↓ {card.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Divider Component */}
        <Phool
          Line1="Develop for Society"
          Line2="Develop Better Humanity"
          src="Image pack/phool.svg"
        />

        {/* Tech Resources Section */}
        <div className="flex flex-col items-center pb-32">
          <Typography
            variant="h3"
            popUp="Tech Resources."
            line1=""
            className="py-16"
          />

          <div className="grid grid-cols-1 border border-black md:grid-cols-3">
            {TOP_CARDS2.map((card, i) => (
              <div
                key={card.title}
                className={`
                flex h-full flex-col justify-between p-6
                border-b border-black md:border-b-0
                ${i !== TOP_CARDS2.length - 1 ? "md:border-r" : ""}
              `}
              >
                <div className="space-y-3">
                  <img
                    src={card.icons[0]}
                    alt=""
                    className="h-6 w-6 shrink-0"
                  />

                  <h3 className="text-sm font-medium md:line-clamp-1">
                    {card.title}
                  </h3>

                  <p className="min-h-4 text-xs text-gray-500">{card.author}</p>

                  <p className="text-xs leading-relaxed text-gray-600">
                    {card.description}
                  </p>
                </div>

                <a
                  href={card.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 py-2 text-xs font-medium underline underline-offset-4"
                >
                  ↓ {card.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
