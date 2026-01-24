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
  {
    Icon: InstagramIcon,
    href: "https://www.instagram.com/26labs.live/",
    label: "Instagram",
  },
];

export const Socials = () => {
  return (
    <div className="flex relative flex-col  text-gray-500  ">
      <Descripton
        className="max-w-2xl mt-4 md:mt-6 text-black font-medium lg:mt-8 mb-3 md:mb-4 "
        description="Say goodbye to outdated enterprise software and welcome the smoother one.
We lead you from design to product innovation to shape your path from idea to success"
      />

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
