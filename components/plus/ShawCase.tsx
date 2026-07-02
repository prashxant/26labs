"use client";

import {
  Box,
  SquareStack,
  Play,
  PanelTop,
  GalleryHorizontal,
  Waves,
} from "lucide-react";

export default function ProductShowcase() {
  return (
    <section className="relative py-16 text-center text-white overflow-hidden">
      <div className="relative max-w-4xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-[64px] font-light tracking-tight ">
          Few product shocase
        </h2>

        <p className="text-white text-2xl mb-10">
          Connect anything with Endpoints, Traffic Policy, and Secure Tunnels.
        </p>

        {/* Icons Row */}
        <div className="flex justify-center gap-6 mb-10 text-orange-500">
          <Box className="size-7" />
          <Waves className="size-7" />
          <PanelTop className="size-7" />
          <Play className="size-7" />
          <SquareStack className="size-7" />
          <GalleryHorizontal className="size-7" />
        </div>

        {/* Description */}
        <div className="max-w-2xl mx-auto text-white/80 text-sm leading-relaxed space-y-4">
          <p>
            Lorem ipsum dolor sit amet consectetur. Ullamcorper volutpat feugiat
            massa quam sagittis in. Mi turpis penatibus lectus risus mi proin.
            Velit nunc eget arcu morbi sit sit tellus. Nulla pharetra molestie
            facilisis e molestie tincidunt. Libero non ultricies lorem ac.
          </p>

          <p>
            Adipiscing nam id non quisque scelerisque. Volutpat sed posuere
            gravida quis nunc amet. Integer ut vulputate purus id amet. Id
            viverra vulputate urna augue hendrerit sem. Volutpat tristique
            luctus nec velit rhoncus arcu euismod.
          </p>
        </div>

    </div>

    </section>
  );
}
