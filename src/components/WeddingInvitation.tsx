import { useState } from "react";
import { useScrollRevealContainer } from "@/hooks/useScrollReveal";
import weddingPhoto from "@/assets/wedding-photo.jpg";
import divider from "@/assets/divider.png";
import FloatingParticles from "./FloatingParticles";
import CountdownTimer from "./CountdownTimer";
import RSVPForm from "./RSVPForm";
import GallerySection from "./GallerySection";
import EnvelopeIntro from "./EnvelopeIntro";

const SectionDivider = ({ delay = "0" }: { delay?: string }) => (
  <div data-reveal="fade" data-delay={delay} className="flex items-center justify-center gap-4 my-14 md:my-20">
    <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/40" />
    <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
    <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/40" />
  </div>
);

const WeddingInvitation = () => {
  const [showInvitation, setShowInvitation] = useState(false);
  const invitationRef = useScrollRevealContainer();
  const countdownRef = useScrollRevealContainer();
  const detailsRef = useScrollRevealContainer();
  const galleryRef = useScrollRevealContainer();
  const rsvpRef = useScrollRevealContainer();
  const footerRef = useScrollRevealContainer();

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

      {/* ===== HERO (CSS animation only) ===== */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-foreground/40 z-10" />
          <img
            src={weddingPhoto}
            alt="Abriham and Hana"
            className="w-full h-full object-cover animate-slow-zoom"
          />
        </div>

        <div className="relative z-20 text-center px-6">
          <p className="hero-tag text-primary-foreground/80 text-sm tracking-[0.4em] font-body font-light mb-6 uppercase">
            A Celebration of Love
          </p>

          <h1 className="hero-name-1 font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-primary-foreground mb-3">
            ABRIHAM
          </h1>

          <span className="hero-ampersand font-display text-3xl md:text-4xl text-primary italic block my-3">
            &
          </span>

          <h1 className="hero-name-2 font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-primary-foreground mb-8">
            HANA
          </h1>

          <p className="hero-date text-primary-foreground/70 font-body font-light text-lg tracking-[0.2em]">
            APRIL 26, 2026
          </p>

          <div className="hero-scroll absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="text-primary-foreground/50 text-xs tracking-[0.3em] font-body uppercase">Scroll</span>
            <div className="w-px h-8 bg-primary-foreground/30 animate-scroll-hint" />
          </div>
        </div>
      </section>

      {/* ===== INVITATION MESSAGE ===== */}
      <section className="py-20 md:py-28 px-6" ref={invitationRef}>
        <div className="max-w-xl mx-auto text-center">
          <p data-reveal="fade-up" data-delay="0" className="text-primary text-sm tracking-[0.3em] font-body font-light mb-8 uppercase">
            ✨ You're Invited ✨
          </p>

          <img data-reveal="fade-up" data-delay="0.1" src={divider} alt="" className="w-36 mx-auto mb-10 opacity-50" />

          <p data-reveal="fade-up" data-delay="0.2" className="font-body font-light text-sm md:text-base leading-relaxed tracking-wide text-muted-foreground mb-8">
            With immense joy and heartfelt excitement,<br />
            we invite you to celebrate a beautiful union<br />
            and a new beginning for
          </p>

          <h2 data-reveal="fade-up" data-delay="0.3" className="font-display text-4xl md:text-5xl font-semibold shimmer-text mb-4">
            ABRIHAM & HANA
          </h2>

          <p data-reveal="fade-up" data-delay="0.4" className="font-display text-xl md:text-2xl italic text-muted-foreground mb-8 leading-relaxed">
            Two souls, one journey,<br />
            and a lifetime of love ahead.
          </p>

          <SectionDivider delay="0.5" />

          <p data-reveal="fade-up" data-delay="0.15" className="font-body font-light text-sm md:text-base leading-loose tracking-wide text-muted-foreground mb-8">
            Join us as we gather to witness, honor, and celebrate this special moment filled with happiness, laughter, and unforgettable memories.
          </p>

          <p data-reveal="fade-up" data-delay="0.25" className="font-body font-light text-sm md:text-base leading-loose tracking-wide text-muted-foreground mb-8">
            Together with their families,<br />
            Abriham and Hana warmly welcome you to share in their joy<br />
            and make this occasion truly extraordinary.
          </p>

          <p data-reveal="fade-up" data-delay="0.35" className="font-display text-lg md:text-xl italic text-muted-foreground leading-relaxed">
            Your presence will add meaning,<br />
            your smile will add warmth,<br />
            and your blessings will make the day complete.
          </p>
        </div>
      </section>

      {/* ===== COUNTDOWN ===== */}
      <section className="py-16 md:py-24 px-6 bg-card" ref={countdownRef}>
        <div className="max-w-2xl mx-auto text-center">
          <p data-reveal="fade-up" data-delay="0" className="text-primary text-sm tracking-[0.3em] font-body font-light mb-4 uppercase">
            Save the Date
          </p>
          <h2 data-reveal="fade-up" data-delay="0.1" className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-12">
            Counting Down to Forever
          </h2>
          <CountdownTimer targetDate="2026-04-26T14:00:00" />
        </div>
      </section>

      {/* ===== EVENT DETAILS ===== */}
      <section className="py-20 md:py-28 px-6" ref={detailsRef}>
        <div className="max-w-2xl mx-auto text-center">
          <p data-reveal="fade-up" data-delay="0" className="text-primary text-sm tracking-[0.3em] font-body font-light mb-4 uppercase">
            When & Where
          </p>
          <h2 data-reveal="fade-up" data-delay="0.1" className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-14">
            Event Details
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div data-reveal="fade-up" data-delay="0.2" className="bg-card rounded-xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-3xl mb-4">💒</div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">Ceremony</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                April 26, 2026<br />2:00 PM<br />
                <span className="text-primary font-medium">Venue Name</span><br />
                Address, City
              </p>
            </div>

            <div data-reveal="fade-up" data-delay="0.35" className="bg-card rounded-xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-3xl mb-4">🥂</div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">Reception</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                April 26, 2026<br />5:00 PM<br />
                <span className="text-primary font-medium">Reception Venue</span><br />
                Address, City
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="py-16 md:py-24 px-6 bg-card" ref={galleryRef}>
        <div className="max-w-4xl mx-auto text-center">
          <p data-reveal="fade-up" data-delay="0" className="text-primary text-sm tracking-[0.3em] font-body font-light mb-4 uppercase">
            Our Moments
          </p>
          <h2 data-reveal="fade-up" data-delay="0.1" className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-12">
            Gallery
          </h2>
          <GallerySection />
        </div>
      </section>

      {/* ===== RSVP ===== */}
      <section className="py-20 md:py-28 px-6" ref={rsvpRef}>
        <div className="max-w-md mx-auto text-center">
          <p data-reveal="fade-up" data-delay="0" className="text-primary text-sm tracking-[0.3em] font-body font-light mb-4 uppercase">
            We'd Love to Hear From You
          </p>
          <h2 data-reveal="fade-up" data-delay="0.1" className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-12">
            RSVP
          </h2>
          <RSVPForm />
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-16 px-6 bg-card border-t border-border" ref={footerRef}>
        <div className="max-w-lg mx-auto text-center">
          <p data-reveal="fade-up" data-delay="0" className="font-body text-sm tracking-widest text-primary mb-4 animate-float uppercase">
            We look forward to celebrating with you.
          </p>
          <div data-reveal="scale" data-delay="0.15" className="text-3xl mb-6">💍</div>
          <p data-reveal="fade-up" data-delay="0.25" className="font-display text-2xl font-semibold shimmer-text">
            Abriham & Hana
          </p>
          <p data-reveal="fade-up" data-delay="0.35" className="font-body text-xs text-muted-foreground mt-4 tracking-wider">
            April 26, 2026
          </p>
        </div>
      </footer>
      </div>
    </>
  );
};

export default WeddingInvitation;
