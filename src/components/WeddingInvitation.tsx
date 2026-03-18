import { motion } from "framer-motion";
import weddingFrame from "@/assets/wedding-frame.png";
import divider from "@/assets/divider.png";
import FloatingParticles from "./FloatingParticles";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" as const },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

const WeddingInvitation = () => {
  return (
    <div className="min-h-screen bg-cream relative overflow-hidden">
      <FloatingParticles />
      
      {/* Background frame */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <img src={weddingFrame} alt="" className="max-h-screen object-contain" />
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 py-12 md:py-20 max-w-lg mx-auto min-h-screen justify-center">
        
        {/* Sparkle header */}
        <motion.p
          {...fadeUp(0)}
          className="text-gold text-lg tracking-[0.3em] font-body font-light mb-8"
        >
          ✨ You're Invited ✨
        </motion.p>

        {/* Divider */}
        <motion.img
          {...fadeUp(0.2)}
          src={divider}
          alt=""
          className="w-40 mb-8 opacity-60"
        />

        {/* Opening text */}
        <motion.p
          {...fadeUp(0.4)}
          className="text-center font-body font-light text-sm leading-relaxed tracking-wide text-foreground/80 mb-10"
        >
          With immense joy and heartfelt excitement,
          <br />
          we invite you to celebrate a beautiful union
          <br />
          and a new beginning for
        </motion.p>

        {/* Names - hero */}
        <motion.h1
          {...fadeUp(0.6)}
          className="font-display text-5xl md:text-6xl font-semibold tracking-wide shimmer-text mb-4 text-center"
        >
          ABRIHAM
        </motion.h1>

        <motion.span
          {...fadeUp(0.7)}
          className="font-display text-2xl text-gold italic mb-4 block"
        >
          &
        </motion.span>

        <motion.h1
          {...fadeUp(0.8)}
          className="font-display text-5xl md:text-6xl font-semibold tracking-wide shimmer-text mb-8 text-center"
        >
          HANA
        </motion.h1>

        {/* Divider */}
        <motion.div
          {...fadeUp(0.9)}
          className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-10"
        />

        {/* Two souls text */}
        <motion.p
          {...fadeUp(1.0)}
          className="text-center font-display text-xl md:text-2xl italic text-foreground/70 mb-10 leading-relaxed"
        >
          Two souls, one journey,
          <br />
          and a lifetime of love ahead.
        </motion.p>

        {/* Join us */}
        <motion.p
          {...fadeUp(1.1)}
          className="text-center font-body font-light text-sm leading-loose tracking-wide text-foreground/80 mb-10"
        >
          Join us as we gather to witness, honor, and celebrate this special moment filled with happiness, laughter, and unforgettable memories.
        </motion.p>

        {/* Divider */}
        <motion.img
          {...fadeUp(1.2)}
          src={divider}
          alt=""
          className="w-32 mb-10 opacity-40 rotate-180"
        />

        {/* Together with families */}
        <motion.p
          {...fadeUp(1.3)}
          className="text-center font-body font-light text-sm leading-loose tracking-wide text-foreground/80 mb-10"
        >
          Together with their families,
          <br />
          Abriham and Hana warmly welcome you to share in their joy
          <br />
          and make this occasion truly extraordinary.
        </motion.p>

        {/* Your presence */}
        <motion.p
          {...fadeUp(1.4)}
          className="text-center font-display text-lg md:text-xl italic text-foreground/70 mb-10 leading-relaxed"
        >
          Your presence will add meaning,
          <br />
          your smile will add warmth,
          <br />
          and your blessings will make the day complete.
        </motion.p>

        {/* Divider line */}
        <motion.div
          {...fadeUp(1.5)}
          className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-10"
        />

        {/* Final */}
        <motion.p
          {...fadeUp(1.6)}
          className="text-center font-body text-base tracking-widest text-gold mb-16 animate-float"
        >
          We look forward to celebrating with you.
        </motion.p>

        {/* Hearts */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.8, type: "spring" }}
          className="text-3xl text-gold"
        >
          💍
        </motion.div>

        <div className="h-16" />
      </div>
    </div>
  );
};

export default WeddingInvitation;
