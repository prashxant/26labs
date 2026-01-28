"use client";

import { useEffect, useState } from "react";

const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

export default function LocalTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        new Intl.DateTimeFormat("en-US", {
          timeZone,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }).format(now)
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-6xl flex  flex-col justify-center items-center text-orange1 gap-10">
      <p>
   <strong>{time}</strong>
      </p>
      <p> {timeZone}</p>
    </div>
  );
}
