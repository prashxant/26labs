
import { Descripton } from "@/components/shared/Typography";

export const Newsletter = () => {
  return (
    <div className="max-w-4xl mx-auto my-10 md:my-16 lg:my-20 justify-start space-y-1 px-4">
      <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">
        We give you more. A monthly
      </h2>
      <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">
        <span className="text-orange2 tracking-widest">Newsletter</span> to keep
        you updated.
      </h2>
      a
      <Descripton
        className="text-start text-gray-500"
        description="Be the first to receive ideas, trends, and strategies that help your brand grow smarter and stand out."
      />
    </div>
  );
};
