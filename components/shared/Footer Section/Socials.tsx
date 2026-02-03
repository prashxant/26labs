"use client";

import Link from "next/link";
import InstagramIcon from "@/components/ui/instagram-icon";
import LinkedinIcon from "@/components/ui/linkedin-icon";
import TwitterXIcon from "@/components/ui/twitter-x-icon";
import YoutubeIcon from "@/components/ui/youtube-icon";
import { Descripton } from "@/components/shared/Typography";

const SOCIALS = [
  { Icon: LinkedinIcon, href: "https://www.linkedin.com/in/twenty-six-labs-0466743a6/", label: "LinkedIn" },
  { Icon: TwitterXIcon, href: "https://x.com/26labs_live", label: "Twitter X" },
  { Icon: YoutubeIcon, href: "/", label: "YouTube" },
  {
    Icon: InstagramIcon,
    href: "https://www.instagram.com/26labs.live/",
    label: "Instagram",
  },
];

export const Socials = () => {
  return (
    <div className="flex relative flex-col text-gray-500 w-full px-4 sm:px-6">
      <div className="px-1">
        hejnfk
      </div>

      <div className="flex justify-center items-center gap-x-2 md:gap-x-3">
        {SOCIALS.map(({ Icon, href, label }) => (
          <Link key={label} href={href} aria-label={label} className="group">
            <Icon className="size-6 md:size-8 text-blue2 transition-colors group-hover:text-blue-600/90" />
          </Link>
        ))}
      </div>
    </div>
  );
};
