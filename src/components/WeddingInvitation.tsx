import { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { useScrollRevealContainer } from "@/hooks/useScrollReveal";
import weddingPhoto from "@/assets/wedding-photo5.jpg";
import divider from "@/assets/divider.png";
import FloatingParticles from "./FloatingParticles";
import CountdownTimer from "./CountdownTimer";
import GallerySection from "./GallerySection";
import EnvelopeIntro from "./EnvelopeIntro";

const SectionDivider = ({ delay = "0" }: { delay?: string }) => (
  <div
    data-reveal="fade"
    data-delay={delay}
    className="flex items-center justify-center gap-4 my-14 md:my-20"
  >
    <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/40" />
    <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
    <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/40" />
  </div>
);

const WeddingInvitation = () => {
  const [showInvitation, setShowInvitation] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const invitationRef = useScrollRevealContainer();
  const countdownRef = useScrollRevealContainer();
  const detailsRef = useScrollRevealContainer();
  const galleryRef = useScrollRevealContainer();
  const rsvpRef = useScrollRevealContainer();
  const footerRef = useScrollRevealContainer();

  // Handle background music
  useEffect(() => {
    if (showInvitation && audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.log("Audio play failed:", error);
      });
    }
  }, [showInvitation]);

  // ===== Framer Motion Scroll System =====
  const { scrollY, scrollYProgress } = useScroll();

  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 0.6]);
  const imageY = useTransform(scrollY, [0, 800], [0, 150]);
  const blur = useTransform(scrollYProgress, [0, 0.4], [0, 8]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const blurFilter = useMotionTemplate`blur(${blur}px)`;

  return (
    <>
      {!showInvitation && (
        <EnvelopeIntro onOpened={() => setShowInvitation(true)} />
      )}

      <div
        className={`min-h-screen bg-background relative overflow-x-hidden transition-opacity duration-700 ${
          showInvitation ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <FloatingParticles />

        {/* ===== HERO (ENHANCED) ===== */}
        <section className="relative min-h-[120vh] flex items-start justify-center overflow-hidden">
          {/* Parallax Image */}
          <motion.img
            src={weddingPhoto}
            alt="Abriham and Hana"
            style={{
              y: imageY,
              filter: blurFilter,
            }}
            animate={
              showInvitation
                ? {
                    scale: 1.05,
                    filter:
                      "brightness(1.1) drop-shadow(0 0 30px rgba(255,255,255,0.4))",
                  }
                : {
                    scale: 1,
                    filter: "brightness(1) drop-shadow(0 0 0 rgba(0,0,0,0))",
                  }
            }
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Scroll-based overlay */}
          <motion.div
            style={{ opacity: overlayOpacity }}
            className="absolute inset-0 bg-black"
          />
          <motion.div
            style={{ opacity: textOpacity }}
            className="relative z-20 text-center px-6 pt-20"
          >
            <p className="text-primary-foreground/80 text-sm tracking-[0.4em] font-body font-light mb-6 uppercase">
              A Celebration of Love
            </p>

            <motion.h1
              animate={showInvitation ? { y: [0, -10, 0] } : { y: 0 }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="font-display text-4xl font-semibold shimmer-text"
            >
              ABRAHAM
            </motion.h1>

            <motion.h1
              animate={showInvitation ? { y: [0, -9, 0] } : { y: 0 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="font-display text-3xl md:text-4xl text-primary italic block my-3 shimmer-text"
            >
              &
            </motion.h1>

            <motion.h1
              animate={showInvitation ? { y: [0, -10, 0] } : { y: 0 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="font-display text-4xl font-semibold shimmer-text"
            >
              HANNA
            </motion.h1>
          </motion.div>
          {/* Bottom smooth fade */}
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-background z-10" />

          {/* Hero Content */}
        </section>

        {/* ===== INVITATION MESSAGE ===== */}
        <section className="py-20 md:py-28 px-6" ref={invitationRef}>
          <div className="max-w-xl mx-auto text-center">
            <p
              data-reveal="fade-up"
              data-delay="0"
              className="text-primary text-sm tracking-[0.3em] font-body font-light mb-8 uppercase"
            >
              ✨ You're Invited ✨
            </p>

            <img
              data-reveal="fade-up"
              data-delay="0.1"
              src={divider}
              alt=""
              className="w-36 mx-auto mb-10 opacity-50"
            />

            <p
              data-reveal="fade-up"
              data-delay="0.2"
              className="font-display text-xl md:text-2xl italic text-muted-foreground mb-8 leading-relaxed"
            >
              With immense joy and heartfelt excitement,
              <br />
              you are invited to celebrate a beautiful union
              <br />
              and a new beginning for
            </p>

            <h2
              data-reveal="fade-up"
              data-delay="0.3"
              className="font-display text-4xl md:text-5xl font-semibold shimmer-text mb-4"
            >
              ABRAHAM <h2>&</h2>HANNA
            </h2>

            <p
              data-reveal="fade-up"
              data-delay="0.4"
              className="font-display text-xl md:text-2xl italic text-muted-foreground mb-8 leading-relaxed"
            >
              Like a beautiful melody finding its perfect rhythm,
              <br />
              our lives have come together in a harmony we never knew was
              possible.
            </p>

            <SectionDivider delay="0.5" />
          </div>
        </section>

        {/* ===== COUNTDOWN ===== */}
        <section className="py-16 md:py-24 px-6 bg-card" ref={countdownRef}>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-12">
              Counting Down to Forever
            </h2>
            <CountdownTimer targetDate="2026-04-26T14:00:00" />
          </div>
        </section>

        {/* ===== GALLERY ===== */}
        <section className="py-16 md:py-24 px-6 bg-card" ref={galleryRef}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-12">
              Gallery
            </h2>
            <GallerySection />
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <footer
          className="py-16 px-6 bg-card border-t border-border"
          ref={footerRef}
        >
          <div className="max-w-lg mx-auto text-center">
            <p className="font-display text-2xl font-semibold shimmer-text">
              Abraham & Hanna
            </p>
            <p
              data-reveal="fade-up"
              data-delay="0.35"
              className="font-body text-xs text-muted-foreground mt-4 tracking-wider"
            >
              April 26, 2026
            </p>
            <p
              data-reveal="fade-up"
              data-delay="0.35"
              className="font-body text-xs text-muted-foreground mt-4 tracking-wider"
            >
              <b>📍 Ayertena, Bahir Dar</b>
            </p>
          </div>
        </footer>
      </div>

      {/* Background Music */}
      <audio
        ref={audioRef}
        src="/music.mp3"
        loop
        preload="auto"
        style={{ display: "none" }}
      />
    </>
  );
};

export default WeddingInvitation;
