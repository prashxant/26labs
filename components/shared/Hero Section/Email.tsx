"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { toast } from "sonner";
import { Plus } from "./Plus";
import posthog from "posthog-js";

type Status = "idle" | "loading" | "success" | "error";

export const Email = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const isValidEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  const handleClaimClick = async () => {
    setError("");

    if (!email) {
      setError("Email is required");
      toast.error("Email is required");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Please enter a valid email");
      toast.error("Please enter a valid email");
      return;
    }

    if (!supabase) {
      setError("Service unavailable. Please try again later.");
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
          setError("You are already subscribed 🙂");
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
      posthog.capture("newsletter_subscribed", {
        source: "hero_section",
      });

      toast.success("Subscribed 🎉", {
        description: "You'll hear from us soon",
      });
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
      setStatus("error");

      // Track failed newsletter subscription and capture exception
      posthog.capture("newsletter_subscription_failed", {
        source: "hero_section",
        error_message: err instanceof Error ? err.message : "Unknown error",
      });
      posthog.captureException(err);

      toast.error("Something went wrong", {
        description: "Please try again later",
      });
    }
  };

  return (
    <div className="flex w-full py-10 flex-col items-center gap-4 px-4 sm:px-0">
      <div className="flex w-full items-center font-family-roboto max-w-md flex-col gap-12 sm:flex-row">
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleClaimClick();
            }
          }}
          value={email}
          placeholder="Enter your email"
          className="
          h-10
          w-full flex-1
          rounded-md border-[#FFF0E7] bg-white px-4 py-3
          text-base
          shadow-inset-soft
          placeholder:font-light
        "
        />

        <button
          type="button"
          onClick={handleClaimClick}
          disabled={status === "loading"}
          className="
          w-[50vw] mx-auto flex items-center  sm:w-auto
          rounded-md bg-[#8CA9FF]
          shadow-[inset_0px_1px_6px_rgba(0,136,255,1)]
          px-4 py-2 h-12
          text-mainBg
          text-[30px]
          disabled:opacity-60
        "
        >
          {status === "loading" ? "Sending…" : "Claim It"}
        </button>
      </div>
      <Plus />
    </div>
  );
};
