"use client";

import posthog from "posthog-js";
import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export const Email = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const isValidEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleClaimClick = async () => {
    setError("");

    if (!email) return setError("Email is required");
    if (!isValidEmail(email)) return setError("Please enter a valid email");

    setStatus("loading");

    try {
      posthog.capture("hero_email_signup_clicked", {
        location: "hero_section",
      });

      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="flex flex-col gap-6 items-center w-full">
      <form className="flex gap-3 w-full max-w-md" netlify>
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
      </form>

      {error && <p className="text-sm text-red-600">{error}</p>}
      {status === "success" && (
        <p className="text-sm text-green-600">Email saved successfully ✅</p>
      )}
    </div>
  );
};
