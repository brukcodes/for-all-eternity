import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import weddingPhoto from "@/assets/wedding-photo.jpg";
import divider from "@/assets/divider.png";
import FloatingParticles from "./FloatingParticles";
import CountdownTimer from "./CountdownTimer";
import RSVPForm from "./RSVPForm";
import GallerySection from "./GallerySection";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

const letterReveal = (delay: number) => ({
  initial: { opacity: 0, letterSpacing: "0.6em" },
  whileInView: { opacity: 1, letterSpacing: "0.25em" },
  viewport: { once: true },
  transition: { duration: 1.4, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

const SectionDivider = ({ delay = 0 }: { delay?: number }) => (
  <motion.div
    {...fadeUp(delay)}
    className="flex items-center justify-center gap-4 my-16 md:my-20"
  >
    <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/40" />
    <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
    <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/40" />
  </motion.div>
);

const WeddingInvitation = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <FloatingParticles />

      {/* ===== HERO SECTION ===== */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background image with parallax zoom */}
        <motion.div
          style={{ scale: heroScale }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-foreground/40 z-10" />
          <img
            src={weddingPhoto}
            alt="Abriham and Hana"
            className="w-full h-full object-cover animate-slow-zoom"
          />
        </motion.div>

        {/* Hero content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-20 text-center px-6"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-primary-foreground/80 text-sm tracking-[0.4em] font-body font-light mb-6 uppercase"
          >
            A Celebration of Love
          </motion.p>

          <motion.h1
            {...letterReveal(0.6)}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-primary-foreground mb-3 tracking-[0.25em]"
          >
            ABRIHAM
          </motion.h1>

          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.0, type: "spring" }}
            className="font-display text-3xl md:text-4xl text-primary italic block my-3"
          >
            &
          </motion.span>

          <motion.h1
            {...letterReveal(1.2)}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-primary-foreground mb-8 tracking-[0.25em]"
          >
            HANA
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="text-primary-foreground/70 font-body font-light text-lg tracking-[0.2em]"
          >
            APRIL 26, 2026
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-primary-foreground/50 text-xs tracking-[0.3em] font-body uppercase">Scroll</span>
            <motion.div
              className="w-px h-8 bg-primary-foreground/30 animate-scroll-hint"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ===== INVITATION MESSAGE ===== */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-xl mx-auto text-center">
          <motion.p
            {...fadeUp(0)}
            className="text-primary text-sm tracking-[0.3em] font-body font-light mb-8 uppercase"
          >
            ✨ You're Invited ✨
          </motion.p>

          <motion.img
            {...fadeUp(0.15)}
            src={divider}
            alt=""
            className="w-36 mx-auto mb-10 opacity-50"
          />

          <motion.p
            {...fadeUp(0.3)}
            className="font-body font-light text-sm md:text-base leading-relaxed tracking-wide text-muted-foreground mb-8"
          >
            With immense joy and heartfelt excitement,
            <br />
            we invite you to celebrate a beautiful union
            <br />
            and a new beginning for
          </motion.p>

          <motion.h2
            {...fadeUp(0.45)}
            className="font-display text-4xl md:text-5xl font-semibold shimmer-text mb-4"
          >
            ABRIHAM & HANA
          </motion.h2>

          <motion.p
            {...fadeUp(0.6)}
            className="font-display text-xl md:text-2xl italic text-muted-foreground mb-8 leading-relaxed"
          >
            Two souls, one journey,
            <br />
            and a lifetime of love ahead.
          </motion.p>

          <SectionDivider delay={0.7} />

          <motion.p
            {...fadeUp(0.2)}
            className="font-body font-light text-sm md:text-base leading-loose tracking-wide text-muted-foreground mb-8"
          >
            Join us as we gather to witness, honor, and celebrate this special moment filled with happiness, laughter, and unforgettable memories.
          </motion.p>

          <motion.p
            {...fadeUp(0.3)}
            className="font-body font-light text-sm md:text-base leading-loose tracking-wide text-muted-foreground mb-8"
          >
            Together with their families,
            <br />
            Abriham and Hana warmly welcome you to share in their joy
            <br />
            and make this occasion truly extraordinary.
          </motion.p>

          <motion.p
            {...fadeUp(0.4)}
            className="font-display text-lg md:text-xl italic text-muted-foreground leading-relaxed"
          >
            Your presence will add meaning,
            <br />
            your smile will add warmth,
            <br />
            and your blessings will make the day complete.
          </motion.p>
        </div>
      </section>

      {/* ===== COUNTDOWN ===== */}
      <section className="py-16 md:py-24 px-6 bg-card">
        <div className="max-w-2xl mx-auto text-center">
          <motion.p
            {...fadeUp(0)}
            className="text-primary text-sm tracking-[0.3em] font-body font-light mb-4 uppercase"
          >
            Save the Date
          </motion.p>
          <motion.h2
            {...fadeUp(0.1)}
            className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-12"
          >
            Counting Down to Forever
          </motion.h2>
          <CountdownTimer targetDate="2026-04-26T14:00:00" />
        </div>
      </section>

      {/* ===== EVENT DETAILS ===== */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.p
            {...fadeUp(0)}
            className="text-primary text-sm tracking-[0.3em] font-body font-light mb-4 uppercase"
          >
            When & Where
          </motion.p>
          <motion.h2
            {...fadeUp(0.1)}
            className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-14"
          >
            Event Details
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              {...fadeUp(0.2)}
              className="bg-card rounded-xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-3xl mb-4">💒</div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">Ceremony</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                April 26, 2026
                <br />
                2:00 PM
                <br />
                <span className="text-primary font-medium">Venue Name</span>
                <br />
                Address, City
              </p>
            </motion.div>

            <motion.div
              {...fadeUp(0.35)}
              className="bg-card rounded-xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-3xl mb-4">🥂</div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">Reception</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                April 26, 2026
                <br />
                5:00 PM
                <br />
                <span className="text-primary font-medium">Reception Venue</span>
                <br />
                Address, City
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="py-16 md:py-24 px-6 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            {...fadeUp(0)}
            className="text-primary text-sm tracking-[0.3em] font-body font-light mb-4 uppercase"
          >
            Our Moments
          </motion.p>
          <motion.h2
            {...fadeUp(0.1)}
            className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-12"
          >
            Gallery
          </motion.h2>
          <GallerySection />
        </div>
      </section>

      {/* ===== RSVP ===== */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-md mx-auto text-center">
          <motion.p
            {...fadeUp(0)}
            className="text-primary text-sm tracking-[0.3em] font-body font-light mb-4 uppercase"
          >
            We'd Love to Hear From You
          </motion.p>
          <motion.h2
            {...fadeUp(0.1)}
            className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-12"
          >
            RSVP
          </motion.h2>
          <RSVPForm />
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-16 px-6 bg-card border-t border-border">
        <div className="max-w-lg mx-auto text-center">
          <motion.p
            {...fadeUp(0)}
            className="font-body text-sm tracking-widest text-primary mb-4 animate-float uppercase"
          >
            We look forward to celebrating with you.
          </motion.p>
          <motion.div
            {...fadeUp(0.15)}
            className="text-3xl mb-6"
          >
            💍
          </motion.div>
          <motion.p
            {...fadeUp(0.25)}
            className="font-display text-2xl font-semibold shimmer-text"
          >
            Abriham & Hana
          </motion.p>
          <motion.p
            {...fadeUp(0.35)}
            className="font-body text-xs text-muted-foreground mt-4 tracking-wider"
          >
            April 26, 2026
          </motion.p>
        </div>
      </footer>
    </div>
  );
};

export default WeddingInvitation;
