"use client";

import Image from "next/image";
import posthog from "posthog-js";
import { useState } from "react";

export const Email = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleClaimClick = async () => {
    if (status === "loading") return;

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isValidEmail) {
      alert("Please enter a valid email");
      return;
    }

    setStatus("loading");

    // Analytics (safe on client)
    posthog.capture("hero_email_signup_clicked", {
      location: "hero_section",
      email,
    });

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      setEmail("");
    } catch (error) {
      console.error("Failed to submit email", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
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

      {status === "success" && (
        <p className="text-sm text-green-600">Email saved successfully ✅</p>
      )}

      {status === "error" && (
        <p className="text-sm text-red-600">
          Failed to save email. Please try again.
        </p>
      )}

      {/* Optional avatars */}
      <div className="flex gap-2">
        <Image src="/pfp1.png" width={32} height={32} alt="User" />
        <Image src="/pfp2.png" width={32} height={32} alt="User" />
        <Image src="/pfp3.png" width={32} height={32} alt="User" />
      </div>
    </div>
  );
};
