import React, { useState, useEffect } from "react";

export default function Countdown() {
  const target = new Date("2025-12-31T00:00:00");

  const [time, setTime] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = target - now;

      if (diff <= 0) return;

      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor(diff / (1000 * 60 * 60) % 24),
        minutes: Math.floor(diff / (1000 * 60) % 60),
        seconds: Math.floor(diff / 1000 % 60)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown">
      <div><strong>{time.days}</strong><span>Days</span></div>
      <div><strong>{time.hours}</strong><span>Hours</span></div>
      <div><strong>{time.minutes}</strong><span>Min</span></div>
      <div><strong>{time.seconds}</strong><span>Sec</span></div>
    </div>
  );
}
