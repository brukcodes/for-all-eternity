import { motion } from "framer-motion";
import weddingPhoto from "@/assets/wedding-photo.jpg";

const images = [
  { src: weddingPhoto, alt: "Abriham & Hana" },
  { src: weddingPhoto, alt: "Abriham & Hana" },
  { src: weddingPhoto, alt: "Abriham & Hana" },
  { src: weddingPhoto, alt: "Abriham & Hana" },
];

const GallerySection = () => {
  return (
    <div className="grid grid-cols-2 gap-3 md:gap-4">
      {images.map((img, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: i * 0.12 }}
          className="relative overflow-hidden rounded-xl aspect-[3/4] group cursor-pointer"
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/5 transition-colors duration-500" />
        </motion.div>
      ))}
    </div>
  );
};

export default GallerySection;
