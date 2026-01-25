import Link from "next/link";

export const MenuDropdown = ({ open }: { open: boolean }) => {
  return (
    <div
      className={`
        absolute left-0 mt-3 md:mt-4 lg:mt-5 w-56 md:w-64 lg:w-72
        rounded-xl md:rounded-2xl
        bg-linear-to-b from-[#9db2ff] to-mainBg
        p-5 md:p-6 lg:p-7
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
        <Link href="/resources" className="block hover:text-black ">
          Resource
        </Link>
        <Link
          href="/pricing"
          className="block hover:text-black transition duration-200 "
        >
          Pricing
        </Link>
        <Link
          href="/blog"
          className="block transition duration-200 hover:text-black  text-white"
        >
          Blog
        </Link>
        <Link
          href="https://calendly.com/26labs-live/30min"
          className="block transition-all duration-200 hover:text-black hover:translate-x-1 text-white"
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};
