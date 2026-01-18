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
        className="flex items-center gap-2"
      >
        <div
          className={`
            flex items-center
            transition-transform duration-300
            ${open ? "rotate-90" : "rotate-0"}
          `}
        >
          <span className="bg-black h-6 w-1 rounded-lg mx-0.5" />
          <span className="bg-black h-6 w-1.5 rounded-lg mx-0.5" />
        </div>

        <span className="text-lg font-bold">Menu</span>
      </button>

      <MenuDropdown open={open} />
    </div>
  );
};
