import { useState } from "react";
import { useScrollRevealContainer } from "@/hooks/useScrollReveal";

import weddingPhoto1 from "@/assets/wedding-photo.jpg";
import weddingPhoto2 from "@/assets/wedding-photo2.jpg";
import weddingPhoto3 from "@/assets/wedding-photo3.jpg";
import weddingPhoto4 from "@/assets/wedding-photo4.jpg";
import weddingPhoto5 from "@/assets/wedding-photo5.jpg";
import weddingPhoto6 from "@/assets/wedding-photo6.jpg";
import weddingPhoto7 from "@/assets/wedding-photo7.jpg";
import weddingPhoto9 from "@/assets/wedding-photo9.jpg";
import weddingPhoto11 from "@/assets/wedding-photo11.jpg";
import weddingPhoto12 from "@/assets/wedding-photo12.jpg";
import weddingPhoto13 from "@/assets/wedding-photo13.jpg";
import weddingPhoto14 from "@/assets/wedding-photo14.jpg";
import weddingPhoto17 from "@/assets/wedding-photo17.jpg";
import weddingPhoto18 from "@/assets/wedding-photo18.jpg";
import weddingPhoto19 from "@/assets/wedding-photo19.jpg";
import weddingPhoto20 from "@/assets/wedding-photo20.jpg";
import weddingPhoto21 from "@/assets/wedding-photo21.jpg";
import weddingPhoto22 from "@/assets/wedding-photo22.jpg";
import weddingPhoto23 from "@/assets/wedding-photo23.jpg";
import weddingPhoto24 from "@/assets/wedding-photo24.jpg";
import weddingPhoto25 from "@/assets/wedding-photo25.jpg";
import weddingPhoto26 from "@/assets/wedding-photo26.jpg";
import weddingPhoto28 from "@/assets/wedding-photo28.jpg";
import weddingPhoto29 from "@/assets/wedding-photo29.jpg";
import weddingPhoto30 from "@/assets/wedding-photo30.jpg";
import weddingPhoto31 from "@/assets/wedding-photo31.jpg";
import weddingPhoto32 from "@/assets/wedding-photo32.jpg";

const images = [
  weddingPhoto1,
  weddingPhoto4,
  weddingPhoto6,
  weddingPhoto19,
  weddingPhoto31,
  weddingPhoto30,
  weddingPhoto20,

  weddingPhoto26,
  weddingPhoto18,
  weddingPhoto5,
  weddingPhoto28,

  weddingPhoto24,
  weddingPhoto2,
  weddingPhoto3,
  weddingPhoto7,
  weddingPhoto9,
  weddingPhoto11,
  weddingPhoto12,
  weddingPhoto13,
  weddingPhoto14,
  weddingPhoto17,
  weddingPhoto21,
  weddingPhoto22,
  weddingPhoto24,
  weddingPhoto29,

  weddingPhoto32,
].map((src) => ({
  src,
  alt: "Abriham & Hana",
}));

const INITIAL_COUNT = 4;

const GallerySection = () => {
  const ref = useScrollRevealContainer();
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const displayedImages = showAll ? images : images.slice(0, INITIAL_COUNT);

  return (
    <>
      <div ref={ref} className="grid grid-cols-2 gap-3 md:gap-4">
        {displayedImages.map((img, i) => {
          const isInitial = i < INITIAL_COUNT;

          return (
            <div
              key={i}
              {...(isInitial && {
                "data-reveal": "scale",
                "data-delay": String(i * 0.12),
              })}
              className="relative overflow-hidden rounded-xl aspect-[3/4] cursor-pointer"
              onClick={() => setSelectedImage(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          );
        })}
      </div>

      {images.length > INITIAL_COUNT && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="text-sm text-primary uppercase"
          >
            {showAll ? "See Less" : "See More"}
          </button>
        </div>
      )}

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </>
  );
};

export default GallerySection;
