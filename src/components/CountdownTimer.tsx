import { useEffect, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface CountdownTimerProps {
  targetDate: string;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const ref = useScrollReveal<HTMLDivElement>();

  useEffect(() => {
    const calc = () => {
      const diff = new Date(targetDate).getTime() - Date.now();
      if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    };
    setTimeLeft(calc());
    const id = setInterval(() => setTimeLeft(calc()), 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div ref={ref} data-reveal="fade-up" className="flex justify-center gap-4 md:gap-8">
      {units.map((u) => (
        <div key={u.label} className="flex flex-col items-center">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-background border border-border shadow-sm flex items-center justify-center mb-2">
            <span className="countdown-digit font-display text-2xl md:text-3xl font-semibold text-foreground">
              {String(u.value).padStart(2, "0")}
            </span>
          </div>
          <span className="font-body text-xs text-muted-foreground tracking-wider uppercase">
            {u.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
