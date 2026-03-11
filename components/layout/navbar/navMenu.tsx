import { useEffect, useRef, useState } from "react";
import { MenuDropdown } from "./navMenuDropdown";

export const Menu = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="menu-dropdown"
        className="flex items-center gap-2 md:gap-2.5 lg:gap-3 hover:opacity-80 transition-[opacity,transform] duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange2"
      >
        <div
          className={`
            flex items-center
            transition-transform duration-300
            ${open ? "rotate-90" : "rotate-0"}
          `}
        >
          <span className="bg-black h-5 md:h-6 lg:h-7 w-0.5 md:w-1 rounded-lg mx-0.5" />
          <span className="bg-black h-5 md:h-6 lg:h-7 w-1 md:w-1.5 rounded-lg mx-0.5" />
        </div>

        <span className="text-base md:text-lg lg:text-xl text-black font-semibold">
          Menu
        </span>
      </button>

      <MenuDropdown open={open} onClose={() => setOpen(false)} />
    </div>
  );
};
