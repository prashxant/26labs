import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    value: "marketPlace",
    trigger: "What is this marketplace about? ",
    content:
      "Our platform is a marketplace for high-quality UI components. Designers upload their UI component designs (like buttons, cards, modals, forms, etc.), and our developers and AI systems convert them into production-ready code that frontend and full-stack developers can purchase and use in their projects.",
  },
  {
    value: "platform",
    trigger: "Who can sell on the platform?",
    content:
      "UI/UX designers can submit their original component designs. Once approved, our technical team and AI engine transform them into clean, optimized, and scalable code before listing them for sale.",
  },
  {
    value: "supported",
    trigger: "What technologies are supported? ",
    content:
      "We provide components in multiple modern stacks, including HTML, CSS, JavaScript React Vue Tailwind CSS Next.js And other popular frontend frameworks",
  },
  {
    value: "generatedCode",
    trigger: "How does the AI-generated code work?",
    content:
      "Once a design is uploaded, our AI model analyzes layout, spacing, typography, and interaction patterns. Our developers then refine and optimize the generated code to ensure it meets production-level standards before publishing.",
  },
  {
    value: "production",
    trigger: "Is the code production-ready? ",
    content:
      "Yes. Every component goes through : AI-based code generation Developer review and optimization Performance and responsiveness testing projects.",
  },
  {
    value: "coustomize",
    trigger: "Can developers customize the components? ",
    content:
      "Absolutely. All components are fully customizable. Developers can modify styles, colors, layouts, animations, and behavior according to their project needs.",
  },
];

export function FaqAccordion() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-245.25 h-10"
      defaultValue={"marketPlace"}
    >
      {items.map((item) => (
        <AccordionItem className="" key={item.value} value={item.value}>
          <AccordionTrigger className="text-[24px] bg-[#F5F5F5]/12 my-3 font-normal">
            {item.trigger}
          </AccordionTrigger>
          <AccordionContent className="px-5 text-[13px] bg-[#F5F5F5]/16  w-227.5 h-19.5 my-3 f pb-5 pt-2.5 ">
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
