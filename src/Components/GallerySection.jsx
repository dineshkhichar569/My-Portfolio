import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

import { useGallery } from "../hooks/useGallery";
import { thumb, full, download } from "../lib/ik";

const GallaryItem = ({ src, alt, index, onClick, hoverScale }) => {
  return (
    <motion.div
      onClick={onClick}
      className={`overflow-hidden rounded-xl shadow-lg ${hoverScale ? "cursor-pointer" : ""}`}
      {...(hoverScale
        ? {
            whileInView: { opacity: 1, y: 0 },
            whileHover: { scale: 1.05 },
            whileTap: { scale: 0.97 },
            initial: { opacity: 0, y: 30 },
            viewport: { once: true, margin: "-100px" },
            transition: {
              duration: 0.15,
              ease: "easeOut",
            },
          }
        : {})}
    >
      <img
        src={src}
        loading="lazy"
        decoding="async"
        width={index === -1 ? undefined : 400}
        height={index === -1 ? undefined : 500}
        className={`w-full ${
          index === -1 ? "object-contain max-h-[80vh]" : "object-cover"
        }`}
        alt={alt}
      />
    </motion.div>
  );
};

const GallerySection = () => {
  //////! //   so that getMotionProps() animations should not work in mobile
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setIsDesktop(mq.matches);
    console.log("Hover supported:", isDesktop);
  }, []);

  const { images, status } = useGallery();

  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleCount, setVisibleCount] = useState(15);

  if (status === "loading") {
    return (
      <div
        className={`p-3 gap-3 md:mx-[50px] mx-0 ${
          isDesktop
            ? "columns-2 sm:columns-3 md:columns-4 space-y-5"
            : "grid grid-cols-2 gap-4"
        }`}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="w-full aspect-[4/5] rounded-xl bg-white/5 animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (status === "error") {
    return (
      <p className="text-center text-white/40 py-16 font-rubrik">
        Couldn't load the gallery right now.
      </p>
    );
  }

  return (
    <>
      {/* All Images */}
      <div
        className={`p-3 gap-3 md:mx-[50px] mx-0 ${
          isDesktop
            ? "columns-2 sm:columns-3 md:columns-4 space-y-5"
            : "grid grid-cols-2 gap-4"
        }`}
      >
        {images.slice(0, visibleCount).map((img, index) => (
          <GallaryItem
            key={img.id}
            src={thumb(img.url)}
            alt={img.alt}
            index={index}
            onClick={() => setSelectedImage(img)}
            hoverScale={true}
          />
        ))}
      </div>
      {visibleCount < images.length && (
        <div className="flex justify-center py-10">
          <button
            onClick={() => setVisibleCount((c) => c + 15)}
            className="cursor-target px-7 py-3 rounded-xl border border-white/20 bg-white/5 text-white font-medium backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/30"
          >
            Load More
          </button>
        </div>
      )}

      {/* Image popup when it will clicked */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
          <div className="relative p-4">
            <GallaryItem
              src={full(selectedImage.url)}
              alt={selectedImage.alt}
              index={-1}
              className="max-w-[90vw] rounded-xl shadow-2xl"
              hoverScale={false}
            />

            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white bg-black/30 backdrop-blur-md border border-white/20 px-2 rounded-lg shadow-md text-2xl font-rubrik font-medium hover:bg-gray-800 cursor-pointer"
            >
              &times;
            </button>
            <a
              href={download(selectedImage.url)}
              download
              className="absolute bottom-8 right-8 p-1 bg-black/30 backdrop-blur-md border border-white/20 rounded-lg shadow-md hover:bg-gray-800 cursor-pointer"
            >
              <Download className="text-white w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default GallerySection;
