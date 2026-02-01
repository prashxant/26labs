"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { toast } from "sonner";

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

    toast.success("Subscribed 🎉", {
      description: "You’ll hear from us soon",
    });
  } catch (err) {
    console.error(err);
    setError("Something went wrong. Please try again.");
    setStatus("error");

    toast.error("Something went wrong", {
      description: "Please try again later",
    });
  }
};


  return (
  <div className="flex w-full flex-col items-center gap-4 px-4 sm:px-0">
    <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="
          w-full flex-1
          rounded-md border px-4 py-3
          text-base
        "
      />

      <button
        onClick={handleClaimClick}
        disabled={status === 'loading'}
        className="
          w-[50vw] mx-auto  sm:w-auto
          rounded-md bg-blue-600
          px-6 py-3
          text-white
          disabled:opacity-60
        "
      >
        {status === 'loading' ? 'Sending…' : 'Claim It'}
      </button>
    </div>

  </div>
);}
