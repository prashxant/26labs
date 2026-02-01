"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

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
      return;
    }

    if (!isValidEmail(email)) {
      setError("Please enter a valid email");
      return;
    }
  if (!supabase) {
    setError("Service unavailable. Please try again later.");
    setStatus("error");
    return;
  }
    setStatus("loading");

    try {
      // Supabase insert
      const { error: supabaseError } = await supabase
        .from("newsletter_subscribers")
        .insert({ email });

      if (supabaseError) {
        if (supabaseError.code === "23505") {
          setError("You are already subscribed 🙂");
          setStatus("error");
          return;
        }
        throw supabaseError;
      }

      setStatus("success");
      setEmail("");
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  return (
    <div className="flex flex-col gap-6 items-center w-full">
      <div className="flex gap-3 w-full max-w-md">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 rounded-md border px-4 py-2"
        />
        <button
          onClick={handleClaimClick}
          disabled={status === "loading"}
          className="rounded-md bg-blue-600 px-6 py-2 text-white disabled:opacity-60"
        >
          {status === "loading" ? "Sending…" : "Claim It"}
        </button>
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      {status === "success" && (
        <p className="text-sm text-green-600">You’re subscribed....woohooo</p>
      )}
    </div>
  );
};
