"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function Home() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const subscribe = async () => {
    setErrorMsg("");

    if (!email) {
      setErrorMsg("Email is required");
      return;
    }

    if (!isValidEmail(email)) {
      setErrorMsg("Please enter a valid email address");
      return;
    }

    setLoading(true);

    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert({ email });

    setLoading(false);

    if (error) {
      if (error.code === "23505") {
        setErrorMsg("You are already subscribed 🙂");
      } else {
        setErrorMsg("Something went wrong. Try again.");
      }
      return;
    }

    setEmail("");
    alert("Subscribed successfully 🎉");
  };

  return (
    <div className="p-10 h-screen flex flex-col justify-center max-w-md mx-auto">
      <input
        type="email"
        placeholder="Enter your email"
        className="border p-2 w-full rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {errorMsg && <p className="text-red-500 text-sm mt-2">{errorMsg}</p>}

      <button
        onClick={subscribe}
        disabled={loading}
        className="bg-black text-white p-2 w-full mt-4 rounded disabled:opacity-60"
      >
        {loading ? "Subscribing..." : "Subscribe"}
      </button>
    </div>
  );
}
