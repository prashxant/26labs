import Link from "next/link";

export const MenuDropdown = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  return (
    <div
      className={`
        absolute -left-4 md:mt-4 lg:mt-10 w-56 md:w-64 lg:w-72
        rounded-xl md:rounded-1xl
        bg-linear-to-b from-[#9db2ff] to-mainBg
        p-4 md:p-6 lg:p-6
        shadow-xl
        transition-all duration-300 ease-out
        ${
          open
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        }
      `}
    >
      <nav className="space-y-3 md:space-y-4 text-white text-base md:text-lg lg:text-xl font-semibold">
        <Link
          href="/resources"
          onClick={onClose}
          className="block transition-all duration-200 hover:text-black hover:translate-x-1 text-white "
        >
          Resource
        </Link>
        <Link
          href="/pricing"
          onClick={onClose}
          className="block transition-all duration-200 hover:text-black hover:translate-x-1 text-white "
        >
          Pricing
        </Link>
        <Link
          href="/blog"
          onClick={onClose}
          className="block transition-all duration-200 hover:text-black hover:translate-x-1 text-white"
        >
          Blog
        </Link>

        <a
          target="_blank"
          href="/contact"
          onClick={onClose}
          className="block transition-all duration-200 hover:text-black hover:translate-x-1 text-white"
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
