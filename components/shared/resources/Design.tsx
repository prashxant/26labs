import { Typography } from "../Typography";
import { Card } from "../Toolkit/Cards";
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
    <section className="flex flex-col mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      
      <div className="py-16 flex justify-center">
        <Typography variant="h3" popUp="Design Resources." line1="" className={""} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 border border-black">
        {TOP_CARDS.map((card, i) => (
          <div
            key={card.title}
            className={`
              p-6 flex flex-col justify-between h-full
              border-b md:border-b-0 border-black
              ${i !== TOP_CARDS.length - 1 ? "md:border-r" : ""}`} >
            <div className="space-y-3">
              <img
                src={card.icons[0]}
                alt=""
                className="w-6 h-6 shrink-0" />

              <h3 className="text-sm font-medium md:line-clamp-1">
                {card.title}
              </h3>

              <p className="text-xs text-gray-500 min-h-4">
                {card.author}
              </p>

              <p className="text-xs text-gray-600 leading-relaxed">
                {card.description}
              </p>
            </div>

            <a
              href={card.link}
              target="_blank"
              rel="noreferrer"
              className="mt-6 text-xs font-medium underline underline-offset-4 py-2"  >
              ↓ {card.cta}
            </a>
          </div>
        ))}
      </div>

     
      <Phool
        Line1="Develop for Society"
        Line2="Develop Better Humanity"
        src="Image pack/phool.svg"     />

   
      <div className="pb-32 flex flex-col items-center">
        <Typography
          variant="h3"
          className="py-16"
          popUp="Tech Resources."
          line1=""      />

        <div className="grid grid-cols-1 md:grid-cols-3 border border-black">
          {TOP_CARDS2.map((card, i) => (
            <div
              key={card.title}
              className={`
                p-6 flex flex-col justify-between h-full
                border-b md:border-b-0 border-black
                ${i !== TOP_CARDS2.length - 1 ? "md:border-r" : ""} `}>
              <div className="space-y-3">
                <img
                  src={card.icons[0]}
                  alt=""
                  className="w-6 h-6 shrink-0"/>

                <h3 className="text-sm font-medium md:line-clamp-1">
                  {card.title}
                </h3>

                <p className="text-xs text-gray-500 min-h-4">
                  {card.author}
                </p>

                <p className="text-xs text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </div>

              <a
                href={card.link}
                target="_blank"
                rel="noreferrer"
                className="mt-6 text-xs font-medium underline underline-offset-4 py-2"
              >
                ↓ {card.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
