import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Navbar from "./Navbar";

import image from "../assets/profile2.JPG"

const images = [
  "/gallary/11.webp",
  "/gallary/6.webp",
  "/gallary/28.webp",
  "/gallary/5.webp",
  "/gallary/20.webp",
  "/gallary/40.webp",
  "/gallary/34.webp",
  "/gallary/32.webp",
  "/gallary/45.webp",
  "/gallary/47.webp",
  "/gallary/22.webp",
  "/gallary/16.webp",
  "/gallary/24.webp",
  "/gallary/1.webp",
  "/gallary/44.webp",
  "/gallary/19.webp",
  "/gallary/9.webp",
  "/gallary/50.webp",
  "/gallary/21.webp",
  "/gallary/37.webp",
  "/gallary/43.webp",
  "/gallary/8.webp",
  "/gallary/30.webp",
  "/gallary/27.webp",
  "/gallary/26.webp",
  "/gallary/25.webp",
  "/gallary/2.webp",
  "/gallary/89.webp",
  "/gallary/36.webp",
  "/gallary/15.webp",
  "/gallary/33.webp",
  "/gallary/72.webp",
  "/gallary/59.webp",
  "/gallary/42.webp",
  "/gallary/46.webp",
  "/gallary/64.webp",
  "/gallary/39.webp",
  "/gallary/49.webp",
  "/gallary/53.webp",
  "/gallary/35.webp",
  "/gallary/62.webp",
  "/gallary/48.webp",
  "/gallary/60.webp",
  "/gallary/55.webp",
  "/gallary/57.webp",
  "/gallary/54.webp",
  "/gallary/29.webp",
  "/gallary/63.webp",
  "/gallary/58.webp",
  "/gallary/67.webp",
  "/gallary/61.webp",
  "/gallary/73.webp",
  "/gallary/9578.webp",
  "/gallary/345.webp",
  "/gallary/67.webp",
  "/gallary/68.webp",
  "/gallary/69.webp",
  "/gallary/90.webp",
  "/gallary/8476.webp",
  "/gallary/76.webp",
  "/gallary/7889.webp",
  "/gallary/8456.webp",
  "/gallary/65.webp",
  "/gallary/71.webp",
  "/gallary/678.webp",
  "/gallary/83.webp",
  "/gallary/789.webp",
  "/gallary/645.webp",
  "/gallary/7653.webp",
  "/gallary/57890.webp",
  "/gallary/23.webp",
  "/gallary/84765.webp",
];

const GallaryItem = ({
  src,
  alt,
  index,
  onClick,
  onHover,
  forAnimation,
  isDesktop,
  fetchpriority,
}) => {

  return (
    <motion.div
      onClick={onClick}
      className="overflow-hidden rounded-xl shadow-lg cursor-pointer"
      onMouseEnter={() => isDesktop && onHover(index)}
      onMouseLeave={() => isDesktop && onHover(null)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0, ...forAnimation(index) }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 20,
      }}
    >
      <img
        src={src}
        loading="lazy"
        decoding="async"
        fetchpriority={fetchpriority}
        className={`w-full ${
          index === -1 ? "object-contain max-h-[80vh]" : "object-cover"
        }`}
        alt={alt}
      />
    </motion.div>
  );
};

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  ////////   so that getMotionProps() animations should not work in mobile
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setIsDesktop(mq.matches);
    console.log("Hover supported:", isDesktop);
  }, []);

  const getMotionProps = (index) => {
    if (!isDesktop) return {};
    if (hoveredIndex === null) return {};

    if (index === hoveredIndex) {
      return {
        scale: 1.15,
        rotate: 1,
        zIndex: 10,
      };
    } else if (index === hoveredIndex - 1 || index === hoveredIndex + 1) {
      return {
        scale: 1.05,
        y: -5,
        zIndex: 5,
      };
    } else {
      return {
        scale: 1,
        opacity: 0.8,
      };
    }
  };

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="bg-black">
      {/* For Background */}
      <div className="abstract-blobs z-0">
        <span className="blob blob1"></span>
        <span className="blob blob2"></span>
        <span className="blob blob3"></span>
        <canvas
          id="blobCanvas"
          className="absolute top-0 left-0 w-full h-full z-[-1]"
        ></canvas>
      </div>

      <Navbar />

      {/* Profile display */}
      <div className="mx-4 md:mx-[50px] mt-[40px] mb-[40px] flex flex-col md:flex-row gap-6 md:gap-[50px] items-center rounded-3xl p-4 md:p-6 border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[inset_0_0_50px_rgba(255,255,255,0.05)] overflow-hidden group transition-all duration-1000">
        <img
          className="w-32 h-32 md:w-[200px] md:h-[200px] rounded-full object-cover border-4 border-black"
          loading="lazy"
          src={image}
          alt="img"
        />
        <div className="text-center md:text-left">
          <p className="text-white text-xl md:text-4xl font-rubrik font-semibold tracking-wide md:tracking-wider">
            Every image is a moment I personally captured through my lens.
          </p>
          <p className="text-white text-lg md:text-xl mt-3 font-signature text-end md:text-right">
            Dinesh Khichar...
          </p>
        </div>
      </div>

      {/* All Images */}
      <div
        className={`p-6 gap-5 md:mx-[50px] mx-0 ${
          isDesktop
            ? "columns-2 sm:columns-3 md:columns-4 space-y-5"
            : "grid grid-cols-2 gap-4"
        }`}
      >
        {images.map((src, index) => (
          <GallaryItem
            key={index}
            src={src}
            index={index}
            fetchPriority={index < 6 ? "high" : "low"}
            onClick={() => setSelectedImage(src)}
            onHover={setHoveredIndex}
            forAnimation={getMotionProps}
            isDesktop={isDesktop}
          />
        ))}
      </div>

      {/* Image popup when it will clicked */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
          <div className="relative p-4">
            <GallaryItem
              src={selectedImage}
              alt="Enlarged"
              index={-1}
              onClick={() => {}}
              onHover={() => {}}
              forAnimation={() => ({})}
              className="max-w-[90vw] rounded-xl shadow-2xl"
            />

            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white bg-black/30 backdrop-blur-md border border-white/20 px-2 rounded-lg shadow-md text-4xl font-rubrik font-medium hover:bg-gray-800"
            >
              &times;
            </button>
            <a
              href={selectedImage}
              download
              className="absolute bottom-8 right-8 bg-black/30 backdrop-blur-md border border-white/20 rounded-lg shadow-md hover:bg-gray-800"
            >
              <img
                src="/icons/Download.svg"
                className="w-8 h-8"
                loading="lazy"
                alt="download"
              />
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
