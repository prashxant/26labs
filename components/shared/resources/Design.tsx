import { Typography } from "../Typography";
import { Card } from "../Toolkit/Cards";
import { Phool } from "../Phool";

const TOP_CARDS = [
  {
    title: "The Design of Everyday Things — Don Norman",
    cta: "View Official Source",
    link: "https://mitpress.mit.edu/9780262525671/the-design-of-everyday-things/",
    description:
      "A classic book on human-centered design and how to create intuitive, usable products.",
    icons: ["/Image pack/Icon/Book.png"],
  },
  {
    title: "Grid Systems — Kimberly Elam",
    cta: "View Official Source",
    link: "https://yalebooks.yale.edu/book/9780300104654/grid-systems/",
    description:
      "Learn how alignment, layout, and spacing shape powerful visual communication.",
    icons: ["/Image pack/Icon/Book.png"],
  },
  {
    title: "How Designers Think — Bryan Lawson",
    cta: "View Official Source",
    link: "https://www.routledge.com/How-Designers-Think/Lawson/p/book/9781138842077",
    description:
      "An in-depth look at how designers think and solve complex creative problems.",
    icons: ["/Image pack/Icon/Book.png"],
  },
];

const TOP_CARDS2 = [
  {
    title: "Getting Real — Basecamp",
    cta: "View Official Source",
    link: "https://basecamp.com/gettingreal",
    description:
      "A practical guide to building web products the simple, fast, and human way.",
    icons: ["/Image pack/Icon/Book.png"],
  },
  {
    title: "Next.js Documentation",
    cta: "View Official Docs",
    link: "https://nextjs.org/docs",
    description:
      "Official Next.js documentation to build fast, modern React applications.",
    icons: ["/Image pack/Icon/Book.png"],
  },
  {
    title: "Tailwind CSS Documentation",
    cta: "View Official Docs",
    link: "https://tailwindcss.com/docs",
    description:
      "Official Tailwind CSS docs to rapidly build modern, responsive UIs.",
    icons: ["/Image pack/Icon/Book.png"],
  },
];

export const Design = () => {
  return (
    <section className="flex flex-col mx-auto max-w-7xl px-4">    
      <div className="py-16 flex justify-center">
        <Typography
          variant="h2"
          popUp="Design Resources" className={""} line1={""}/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 border border-black">
        {TOP_CARDS.map((card, i) => (
          <Card
            key={card.title}
            {...card}
            className={`
              ${i !== TOP_CARDS.length - 1 ? "md:border-r border-black" : ""}
              border-b border-black`}/>
        ))}
      </div>

      <Phool
        Line1="Develop for Society"
        Line2="Develop Better Humanity"
        src="Image pack/phool.svg"/>

    
      <div className="pb-32 flex flex-col justify-center items-center">
        <Typography
          variant="h2"
          className="py-16"
          popUp="Tech Resources" line1={""}/>

        <div className="grid grid-cols-1 md:grid-cols-3 border border-black">
          {TOP_CARDS2.map((card, i) => (
            <Card
              key={card.title}
              {...card}
              className={`
                ${i !== TOP_CARDS2.length - 1 ? "md:border-r border-black" : ""}
                border-b border-black`}/>
          ))}
        </div>
      </div>
    </section>
  );
};
