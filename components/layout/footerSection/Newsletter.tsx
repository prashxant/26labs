"use client";

import { useState } from "react";
import Image from "next/image";
import { toast } from "sonner";

import { NewSvg } from "@/components/icons/New";
import { supabase } from "@/lib/supabaseClient";

// Lazy load PostHog to defer third-party code
const trackEvent = async (eventName: string, properties?: object) => {
  const { default: posthog } = await import("posthog-js");
  posthog.capture(eventName, properties || {});
};

const captureException = async (error: unknown) => {
  const { default: posthog } = await import("posthog-js");
  posthog.captureException(error);
};

// Hoist regex outside component for better performance
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const Newsletter = () => {
  const [email, setEmail] = useState("");

  const isValidEmail = (value: string) => EMAIL_REGEX.test(value);

  const handleSubscribe = async () => {
    if (!email) {
      toast.error("Email is required");
      return;
    }

    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email");
      return;
    }

    if (!supabase) {
      toast.error("Service unavailable. Please try again later.");
      return;
    }

    try {
      const { error } = await supabase
        .from("newsletter_subscribers")
        .insert({ email });

      if (error) {
        if (error.code === "23505") {
          toast("You’re already subscribed 🙂");
          return;
        }
        throw error;
      }

      // Track successful newsletter subscription
      trackEvent("newsletter_subscribed", {
        source: "footer_section",
      });

      toast.success("Subscribed 🎉");
      setEmail("");
    } catch (err) {
      console.error(err);

      // Track failed newsletter subscription and capture exception
      trackEvent("newsletter_subscription_failed", {
        source: "footer_section",
        error_message: err instanceof Error ? err.message : "Unknown error",
      });
      captureException(err);

      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="border relative flex flex-col w-full p-5 sm:p-8 md:p-10 justify-center items-center gap-4 sm:gap-6 md:gap-8 border-black">
      <div className="absolute top-0 left-0 sm:left-2 md:left-0 -translate-y-1/4 -translate-x-1/12">
        <div className="absolute translate-x-8 py-1 sm:p-0   sm:translate-x-6 text-sm sm:text-base md:text-[18px] font-semibold text-white">
          New
        </div>
        <NewSvg />
      </div>

      <div className="tracking-wider font-bold text-xl sm:text-3xl md:text-4xl lg:text-[46px] text-center">
        <h1>
          We Give You More. A Monthly <br className="hidden sm:block" />
          <span className="text-orange-400">Newsletter</span> to Keep You
          Updated.
        </h1>
      </div>

      <div className="flex w-full p-2 max-w-xs sm:max-w-md">
        <label htmlFor="footer-newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="footer-newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          spellCheck={false}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSubscribe();
            }
          }}
          placeholder="Email address…"
          className="ring p-1.5 sm:p-2 w-full font-bold sm:text-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="button"
          onClick={handleSubscribe}
          aria-label="Subscribe"
          className="bg-orange2 justify-center ring items-center flex p-1.5 sm:p-2 shrink-0 cursor-pointer hover:bg-orange-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange2"
        >
          <Image
            alt="logo"
            width={48}
            height={48}
            src="/LogoOne.svg"
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
          />
        </button>
      </div>

      <p className="max-w-lg text-[14px] sm:text-base md:text-[18px] text-center font-semibold px-4">
        Be the first to receive ideas, trends, and strategies that help your
        <span> brand grow smarter and stand out.</span>
      </p>
    </div>
  );
};
