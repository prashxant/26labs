"use client";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { toast } from "sonner";
import { Plus } from "./Plus";

type Status = "idle" | "loading" | "success" | "error";

// Hoist regex outside component for better performance
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Lazy load PostHog to defer third-party code after hydration
const trackEvent = async (eventName: string, properties?: object) => {
  const { default: posthog } = await import("posthog-js");
  posthog.capture(eventName, properties || {});
};

const captureException = async (error: unknown) => {
  const { default: posthog } = await import("posthog-js");
  posthog.captureException(error);
};

export const Email = () => {
  const shouldReduceMotion = useReducedMotion();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const isValidEmail = (value: string) => EMAIL_REGEX.test(value);
  const handleClaimClick = async () => {
    if (!email) {
      toast.error("Email is required");
      return;
    }

    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email");
      return;
    }

    if (!supabase) {
      setStatus("error");
      toast.error("Service unavailable");
      return;
    }

    setStatus("loading");

    try {
      const { error: supabaseError } = await supabase
        .from("newsletter_subscribers")
        .insert({ email });

      if (supabaseError) {
        if (supabaseError.code === "23505") {
          setStatus("error");

          toast("You’re already subscribed 🙂", {
            description: "We already have this email",
            action: {
              label: "OK",
              onClick: () => {},
            },
          });

          return;
        }

        throw supabaseError;
      }

      setStatus("success");
      setEmail("");

      // Track successful newsletter subscription
      trackEvent("newsletter_subscribed", {
        source: "hero_section",
      });

      toast.success("Subscribed 🎉", {
        description: "You'll hear from us soon",
      });
    } catch (err) {
      console.error(err);
      setStatus("error");

      // Track failed newsletter subscription and capture exception
      trackEvent("newsletter_subscription_failed", {
        source: "hero_section",
        error_message: err instanceof Error ? err.message : "Unknown error",
      });
      captureException(err);

      toast.error("Something went wrong", {
        description: "Please try again later",
      });
    }
  };

  return (
    <div className="flex w-full py-5 sm:py-10 flex-col items-center gap-4 px-4 sm:px-0">
      <div className="flex sm:w-full w-[70vw] items-center font-family-roboto max-w-md flex-col sm:gap-12 gap-6 sm:flex-row">
        <motion.input
          initial={shouldReduceMotion ? undefined : { opacity: 0, x: -40 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6 }}
          viewport={{ once: true }}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleClaimClick();
            }
          }}
          value={email}
          placeholder="Enter your email…"
          aria-label="Email address"
          autoComplete="email"
          spellCheck={false}
          className="
           sm:h-10
          w-full flex-1
          rounded-md border-[#FFF0E7] bg-white px-4 sm:py-3 py-1
          text-base
          shadow-inset-soft
          placeholder:font-light
          focus-visible:outline-blue-500 focus-visible:outline-2
        "
        />

        <motion.button
          initial={shouldReduceMotion ? undefined : { opacity: 0, x: 40 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6 }}
          viewport={{ once: true }}
          type="button"
          onClick={handleClaimClick}
          disabled={status === "loading"}
          aria-busy={status === "loading"}
          className="
          w-[30vw] mx-auto flex items-center justify-center  sm:w-auto
          rounded-md bg-[#8CA9FF]
          shadow-[inset_0px_1px_6px_rgba(0,136,255,1)]
          sm:px-4 sm:py-2 sm:h-12 py-1
          text-mainBg
           text-[15px] sm:text-[30px]
          disabled:opacity-60
          focus-visible:outline-blue-600 focus-visible:outline-2
        "
        >
          {status === "loading" ? "Sending…" : "Claim It"}
        </motion.button>
      </div>
      <Plus />
      <p className="font-light text-slate-700">Already claimed</p>
    </div>
  );
};
