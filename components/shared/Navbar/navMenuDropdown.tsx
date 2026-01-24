import Link from "next/link";

export const MenuDropdown = ({ open }: { open: boolean }) => {
  return (
    <div
      className={`
        absolute mt-3 sm:mt-4 md:mt-5 w-52 sm:w-60 md:w-65
        rounded-xl
        bg-linear-to-b from-[#9db2ff] to-mainBg
        p-4 sm:p-5 md:p-6
        shadow-xl
        transition-all duration-300 ease-out
        ${
          open
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        }
      `}
    >
      <nav className="space-y-3 sm:space-y-4 text-white text-base sm:text-lg font-semibold">
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
          href="/Contact"
          className=" transition duration-200 hover:text-black  text-white"
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};
