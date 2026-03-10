"use client";

import Link from "next/link";
import InstagramIcon from "@/components/ui/instagram-icon";
import LinkedinIcon from "@/components/ui/linkedin-icon";
import TwitterXIcon from "@/components/ui/twitter-x-icon";
import YoutubeIcon from "@/components/ui/youtube-icon";
import clsx from "clsx";

// Lazy load PostHog to defer third-party code
const trackEvent = async (eventName: string, properties?: object) => {
  const { default: posthog } = await import("posthog-js");
  posthog.capture(eventName, properties || {});
};

const SOCIALS = [
  {
    Icon: LinkedinIcon,
    href: "https://www.linkedin.com/company/26labs/",
    label: "LinkedIn",
  },
  { Icon: TwitterXIcon, href: "https://x.com/26labs_live", label: "Twitter X" },
  //{ Icon: YoutubeIcon, href: "/", label: "YouTube" },
  {
    Icon: InstagramIcon,
    href: "https://www.instagram.com/26labs.live/",
    label: "Instagram",
  },
];

export const Socials = ({className , Parent}:{className?:string ,Parent:string}) => {
  return (
    <div className={clsx("flex relative flex-col text-gray-500 ",Parent)}>
      <div className="flex justify-center items-center gap-x-2 md:gap-x-6">
        {SOCIALS.map(({ Icon, href, label }) => (
          <Link
            key={label}
            href={href}
            aria-label={label}
            onClick={() => {
              trackEvent("social_link_clicked", {
                platform: label,
                destination: href,
              });
            }}
            className="group rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue2"
          >
            <Icon className={clsx(
                "size-6 md:size-8 transition-colors group-hover:text-blue-600/90",
                className
              )}/>
          </Link>
        ))}
      </div>
    </div>
  );
};
