import { useState } from "react";
import { useScrollRevealContainer } from "@/hooks/useScrollReveal";
import weddingPhoto from "@/assets/wedding-photo.jpg";
import weddingPhoto2 from "@/assets/wedding-photo2.jpg";
import weddingPhoto3 from "@/assets/wedding-photo3.jpg";
import weddingPhoto4 from "@/assets/wedding-photo4.jpg";
import weddingPhoto5 from "@/assets/wedding-photo5.jpg";
import weddingphoto6 from "@/assets/wedding-photo6.jpg";
import weddingPhoto7 from "@/assets/wedding-photo7.jpg";
import weddingPhoto8 from "@/assets/wedding-photo8.jpg";
import weddingPhoto9 from "@/assets/wedding-photo9.jpg";
import weddingPhoto10 from "@/assets/wedding-photo10.jpg";
import weddingPhoto11 from "@/assets/wedding-photo11.jpg";
import weddingphoto12 from "@/assets/wedding-photo12.jpg";
import weddingPhoto13 from "@/assets/wedding-photo13.jpg";
import weddingPhoto14 from "@/assets/wedding-photo14.jpg";
import weddingPhoto15 from "@/assets/wedding-photo15.jpg";
import weddingPhoto16 from "@/assets/wedding-photo16.jpg";
import weddingPhoto17 from "@/assets/wedding-photo17.jpg";
import weddingphoto18 from "@/assets/wedding-photo18.jpg";
import weddingPhoto19 from "@/assets/wedding-photo19.jpg";
import weddingPhoto20 from "@/assets/wedding-photo20.jpg";
import weddingPhoto21 from "@/assets/wedding-photo21.jpg";
import weddingPhoto22 from "@/assets/wedding-photo22.jpg";
import weddingPhoto23 from "@/assets/wedding-photo23.jpg";
import weddingphoto24 from "@/assets/wedding-photo24.jpg";
import weddingPhoto25 from "@/assets/wedding-photo25.jpg";

import weddingPhoto27 from "@/assets/wedding-photo27.jpg";

const images = [
  { src: weddingPhoto, alt: "Abriham & Hana" },
  { src: weddingPhoto19, alt: "Abriham & Hana" },
  { src: weddingPhoto20, alt: "Abriham & Hana" },
  { src: weddingphoto18, alt: "Abriham & Hana" },
  { src: weddingPhoto5, alt: "Abriham & Hana" },
  { src: weddingphoto24, alt: "Abriham & Hana" },
  { src: weddingPhoto4, alt: "Abriham & Hana" },
  { src: weddingPhoto2, alt: "Abriham & Hana" },
  { src: weddingPhoto3, alt: "Abriham & Hana" },
  { src: weddingphoto6, alt: "Abriham & Hana" },
  { src: weddingPhoto7, alt: "Abriham & Hana" },
  { src: weddingPhoto8, alt: "Abriham & Hana" },
  { src: weddingPhoto9, alt: "Abriham & Hana" },
  { src: weddingPhoto10, alt: "Abriham & Hana" },
  { src: weddingPhoto11, alt: "Abriham & Hana" },
  { src: weddingphoto12, alt: "Abriham & Hana" },
  { src: weddingPhoto13, alt: "Abriham & Hana" },
  { src: weddingPhoto14, alt: "Abriham & Hana" },
  { src: weddingPhoto15, alt: "Abriham & Hana" },
  { src: weddingPhoto16, alt: "Abriham & Hana" },
  { src: weddingPhoto17, alt: "Abriham & Hana" },
  { src: weddingPhoto21, alt: "Abriham & Hana" },
  { src: weddingPhoto22, alt: "Abriham & Hana" },
  { src: weddingPhoto23, alt: "Abriham & Hana" },
  { src: weddingPhoto25, alt: "Abriham & Hana" },
  { src: weddingPhoto27, alt: "Abriham & Hana" },
];

const INITIAL_COUNT = 4;

const GallerySection = () => {
  const ref = useScrollRevealContainer();
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const displayedImages = showAll ? images : images.slice(0, INITIAL_COUNT);

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      {/* Gallery Grid */}
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
              className="relative overflow-hidden rounded-xl aspect-[3/4] gallery-item cursor-pointer"
              onClick={() => handleImageClick(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />

              <div className="gallery-overlay absolute inset-0 bg-foreground/10 hover:bg-foreground/20 transition-colors duration-300" />
            </div>
          );
        })}
      </div>

      {/* Toggle Button */}
      {images.length > INITIAL_COUNT && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="font-body text-sm tracking-wider text-primary hover:text-primary/80 transition-colors duration-300 uppercase font-medium"
          >
            {showAll ? "See Less" : "See More"}
          </button>
        </div>
      )}

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Full screen"
              className="max-w-full max-h-full object-contain"
            />

            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 transition-colors"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default GallerySection;
