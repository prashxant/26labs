export const NotBackedByYC = () => {
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-neutral-300 px-6 py-2 text-lg text-neutral-200 bg-transparent">
      <span className="text-neutral-300">Not Backed by</span>

      <div className="flex items-center gap-2">
        <div className="flex h-6 w-6 items-center justify-center bg-[#FF6600] text-white font-bold text-sm">
          Y
        </div>

        <span className="text-[#FF6600] font-medium">Combinator</span>
      </div>
    </div>
  );
};
