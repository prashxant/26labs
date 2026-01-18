import Link from "next/link";

export const MenuDropdown = ({ open }: { open: boolean }) => {
  return (
    <div
      className={`
        absolute left-0 mt-4 w-65
        rounded-xl
        bg-linear-to-b from-[#9db2ff] to-[#6b6b6b]
        p-6
        shadow-xl
        transition-all duration-300 ease-out
        ${
          open
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        }
      `}
    >
      <nav className="space-y-4 text-lg font-semibold">
        <Link
          href="/resources"
          className="block text-white underline underline-offset-4"
        >
          Resource
        </Link>
        <Link href="/pricing" className="block text-black">
          Pricing
        </Link>
        <Link href="/blog" className="block text-white">
          Blog
        </Link>
        <Link href="/Contact" className="block text-white">
          Contact
        </Link>
      </nav>
    </div>
  );
};
