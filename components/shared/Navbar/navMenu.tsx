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
        className="flex items-center gap-1.5 sm:gap-2 hover:opacity-80 transition-opacity"
      >
        <div
          className={`
            flex items-center
            transition-transform duration-300
            ${open ? "rotate-90" : "rotate-0"}
          `}
        >
          <span className="bg-black h-5 sm:h-6 w-0.5 sm:w-1 rounded-lg mx-0.5" />
          <span className="bg-black h-5 sm:h-6 w-1 sm:w-1.5 rounded-lg mx-0.5" />
        </div>

        <span className="text-base sm:text-lg text-black font-bold">Menu</span>
      </button>

      <MenuDropdown open={open} />
    </div>
  );
};
