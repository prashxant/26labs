import Link from "next/link";
import InstagramIcon from "@/components/ui/instagram-icon";
import LinkedinIcon from "@/components/ui/linkedin-icon";
import TwitterXIcon from "@/components/ui/twitter-x-icon";
import YoutubeIcon from "@/components/ui/youtube-icon";
import { Descripton } from "@/components/shared/Typography";

const SOCIALS = [
  { Icon: LinkedinIcon, href: "/", label: "LinkedIn" },
  { Icon: TwitterXIcon, href: "/", label: "Twitter X" },
  { Icon: YoutubeIcon, href: "/", label: "YouTube" },
  { Icon: InstagramIcon, href: "/", label: "Instagram" },
];

export const Socials = () => {
  return (
    <div className="flex flex-col mt-10 pb-10 px-4">
      <Descripton
        className="max-w-2xl mt-8 mb-4 text-gray-500"
        description="Say goodbye to outdated enterprise software and welcome the smoother one.
We lead you from design to product innovation to shape your path from idea to success"
      />

      <div className="flex  justify-center items-center  gap-x-3">
        {SOCIALS.map(({ Icon, href, label }) => (
          <Link key={label} href={href} aria-label={label} className="group">
            <Icon className="size-8 text-blue2 transition-colors group-hover:text-blue-600/90" />
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-y-4  md:flex-row md:items-center md:justify-between text-sm text-neutral-500">
        <p>Copyright © 26 Labs. All rights reserved.</p>

        <div className="flex gap-x-4">
          <Link href="/" className="hover:text-black transition">
            Terms and conditions
          </Link>
          <Link href="/" className="hover:text-black transition">
            Privacy policy
          </Link>
        </div>
      </div>
    </div>
  );
};
