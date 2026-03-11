import Link from "next/link";
import React from "react";

export const PrivacyandPolicy = () => {
  return (
    <div className="flex w-full justify-between items-end text-[14px] sm:text-lg text-slate-500">
      <p>© 2026 26labs. All rights reserved.</p>
      <p>
        <Link
          href="/privacy-policy"
          className="hover:text-slate-700 transition-colors"
        >
          Privacy Policy
        </Link>
         . {" "}
        <Link
          href="/terms-and-conditions"
          className="hover:text-slate-700 transition-colors"
        >
          Terms &amp; Conditions
        </Link>
      </p>
    </div>
  );
};
