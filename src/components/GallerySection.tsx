import { useScrollRevealContainer } from "@/hooks/useScrollReveal";
import weddingPhoto from "@/assets/wedding-photo.jpg";

const images = [
  { src: weddingPhoto, alt: "Abriham & Hana" },
  { src: weddingPhoto, alt: "Abriham & Hana" },
  { src: weddingPhoto, alt: "Abriham & Hana" },
  { src: weddingPhoto, alt: "Abriham & Hana" },
];

const GallerySection = () => {
  const ref = useScrollRevealContainer();

  return (
    <div ref={ref} className="grid grid-cols-2 gap-3 md:gap-4">
      {images.map((img, i) => (
        <div
          key={i}
          data-reveal="scale"
          data-delay={String(i * 0.12)}
          className="relative overflow-hidden rounded-xl aspect-[3/4] gallery-item cursor-pointer"
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover"
          />
          <div className="gallery-overlay absolute inset-0 bg-foreground/10" />
        </div>
      ))}
    </div>
  );
};

export default GallerySection;
