import { useState, useEffect } from "react";
import floralBouquet from "@/assets/floral-bouquet.png";

interface EnvelopeIntroProps {
  onOpened: () => void;
}

const EnvelopeIntro = ({ onOpened }: EnvelopeIntroProps) => {
  const [phase, setPhase] = useState<
    "enter" | "idle" | "opening" | "reveal" | "done"
  >("enter");

  useEffect(() => {
    const t = setTimeout(() => setPhase("idle"), 100);
    return () => clearTimeout(t);
  }, []);

  const handleClick = () => {
    if (phase !== "idle") return;

    setPhase("opening");

    setTimeout(() => setPhase("reveal"), 1400);

    setTimeout(() => {
      setPhase("done");
      onOpened();
    }, 2600);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ivory transition-opacity duration-500 ${
        phase === "done" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Header */}
      <div
        className={`text-center mb-8 md:mb-10 transition-all duration-700 ${
          phase === "enter" ? "opacity-0 -translate-y-5" : ""
        } ${phase === "idle" ? "opacity-100 translate-y-0" : ""} ${
          phase === "opening" || phase === "reveal"
            ? "opacity-0 -translate-y-10"
            : ""
        }`}
        style={{ transitionDelay: phase === "idle" ? "0.5s" : "0s" }}
      >
        <p className="font-body text-xs md:text-sm tracking-[0.35em] text-charcoal/60 uppercase mb-3">
          We're Getting Married
        </p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-charcoal italic">
          Abraham <span className="text-gold">&</span> Hanna
        </h1>
      </div>

      {/* Envelope */}
      <div
        className={`relative cursor-pointer envelope-float ${
          phase === "enter" ? "opacity-0 scale-90" : ""
        } ${phase === "idle" ? "opacity-100 scale-100" : ""}`}
        style={{
          transition: "opacity 0.8s ease, transform 0.8s ease",
          transitionDelay: phase === "idle" ? "0.3s" : "0s",
          perspective: "1000px", // reduced distortion
        }}
        onClick={handleClick}
      >
        {/* Decorations */}
        <img
          src={floralBouquet}
          alt=""
          className="absolute -bottom-8 -left-10 w-28 md:w-36 z-30 pointer-events-none rotate-[15deg]"
        />
        <img
          src={floralBouquet}
          alt=""
          className="absolute -top-8 -right-10 w-28 md:w-36 z-30 pointer-events-none rotate-[195deg]"
        />

        {/* Shadow */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[85%] h-6 rounded-[50%] bg-charcoal/10 blur-lg" />

        {/* Envelope body */}
        <div
          className="relative w-[320px] h-[220px] sm:w-[380px] sm:h-[260px] md:w-[440px] md:h-[300px] bg-burgundy rounded-sm overflow-visible"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Flap */}
          <div
            className={`absolute top-0 left-0 w-full h-1/2 z-20 envelope-flap ${
              phase === "opening" || phase === "reveal" ? "flap-open" : ""
            }`}
          >
            <svg viewBox="0 0 440 150" className="w-full h-full">
              <polygon points="0,0 440,0 220,150" fill="hsl(345 45% 28%)" />
              <polygon
                points="10,2 430,2 220,140"
                fill="hsl(345 42% 32%)"
                opacity="0.5"
              />
            </svg>
          </div>

          {/* Pocket */}
          <div className="absolute bottom-0 left-0 w-full h-full z-10">
            <svg viewBox="0 0 440 300" className="w-full h-full">
              <polygon points="0,300 220,100 440,300" fill="hsl(345 45% 30%)" />
            </svg>
          </div>

          {/* Seal */}
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 transition-all duration-500 ${
              phase === "opening" || phase === "reveal"
                ? "scale-150 opacity-0"
                : ""
            }`}
          >
            <div className="w-16 h-20 md:w-20 md:h-24 rounded-[50%] border-2 border-ivory/30 flex items-center justify-center bg-black">
              <span className="font-display text-xl md:text-2xl text-ivory/60 bold cursive font-extrabold white">
                A H
              </span>
            </div>
          </div>

          {/* Card */}
          <div
            className={`absolute rounded-sm envelope-card ${
              phase === "opening" ? "card-slide-up" : ""
            } ${phase === "reveal" ? "card-fullscreen" : ""}`}
            style={{
              top: "5%",
              left: "5%",
              width: "90%",
              height: "90%",
              background:
                "linear-gradient(170deg, hsl(var(--ivory)) 0%, hsl(40 20% 94%) 100%)",
            }}
          >
            <div className="absolute inset-2 border border-gold/20 rounded-sm" />

            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-xs tracking-[0.3em] text-charcoal/40 uppercase"></p>
              <p className="text-xl font-semibold text-charcoal/80 mt-2 -tracking-[-0.4em]]">
                26 · 04 · 2026
              </p>
              <p className="text-xs tracking-[0.25em] text-charcoal/50 mt-2"></p>
            </div>
          </div>
        </div>
      </div>

      {/* Hint */}
      <p
        className={`mt-10 text-xs tracking-[0.3em] text-charcoal/40 uppercase transition-all duration-700 ${
          phase === "idle" ? "opacity-100 animate-pulse" : "opacity-0"
        }`}
      >
        Click to Open
      </p>
    </div>
  );
};

export default EnvelopeIntro;
