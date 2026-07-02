import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";


export function InfiniteSliderHoverSpeed() {
  return (
    <section className="flex flex-col mx-auto justify-center items-center">
      <h1 className="text-[48px] text-white">Few product shocase</h1>
      <InfiniteSlider className="mt-21.25 mb-7" speedOnHover={20} gap={24}>
        <img
          src="https://i.scdn.co/image/ab67616d00001e02ad24c5e36ddcd1957ad35677"
          alt="Dean blunt - Black Metal 2"
          className="aspect-square w-[120px] rounded-[4px]"
        />
        <img
          src="https://i.scdn.co/image/ab67616d00001e02af73f776b92d4614152fb141"
          alt="Jungle Jack - JUNGLE DES ILLUSIONS VOL 2"
          className="aspect-square w-[120px] rounded-[4px]"
        />
        <img
          src="https://i.scdn.co/image/ab67616d00001e02ecdb8f824367a53468100faf"
          alt="Yung Lean - Stardust"
          className="aspect-square w-[120px] rounded-[4px]"
        />
        <img
          src="https://i.scdn.co/image/ab67616d00001e021624590458126fc8b8c64c2f"
          alt="Lana Del Rey - Ultraviolence"
          className="aspect-square w-[120px] rounded-[4px]"
        />
        <img
          src="https://i.scdn.co/image/ab67616d00001e020dcf0f3680cff56fe5ff2288"
          alt="A$AP Rocky - Tailor Swif"
          className="aspect-square w-[120px] rounded-[4px]"
        />
        <img
          src="https://i.scdn.co/image/ab67616d00001e02bc1028b7e9cd2b17c770a520"
          alt="Midnight Miami (feat Konvy) - Nino Paid, Konvy"
          className="aspect-square w-[120px] rounded-[4px]"
        />
      </InfiniteSlider>
      <p className="text-white max-w-3xl text-center text-[20px]">
        UI/UX designers can submit their original component designs. Once
        approved, our technical team and AI engine transform them into clean,
        optimized, and scalable code before listing them for sale.
      </p>
    </section>
  );
}
