import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

import Navbar from "./Navbar";

const images = [
  "/gallary/60.jpg",
  "/gallary/6.jpg",
  "/gallary/8.jpg",
  "/gallary/5.jpg",
  "/gallary/20.jpg",
  "/gallary/40.jpg",
  "/gallary/34.jpg",
  "/gallary/32.jpg",
  "/gallary/45.jpg",
  "/gallary/47.jpg",
  "/gallary/22.jpg",
  "/gallary/16.jpg",
  "/gallary/24.jpg",
  "/gallary/1.jpg",
  "/gallary/44.jpg",
  "/gallary/19.jpg",
  "/gallary/9.jpg",
  "/gallary/50.jpg",
  "/gallary/21.jpg",
  "/gallary/37.jpg",
  "/gallary/43.jpg",
  "/gallary/30.jpg",
  "/gallary/27.jpg",
  "/gallary/26.jpg",
  "/gallary/29.jpg",
  "/gallary/23.jpg",
  "/gallary/28.jpg",
  "/gallary/25.jpg",
  "/gallary/2.jpg",
  "/gallary/11.jpg",
  "/gallary/89.jpg",
  "/gallary/36.jpg",
  "/gallary/15.jpg",
  "/gallary/33.jpg",
  "/gallary/72.JPG",
  "/gallary/59.jpg",
  "/gallary/42.jpg",
  "/gallary/46.jpg",
  "/gallary/64.JPG",
  "/gallary/39.jpg",
  "/gallary/49.jpg",
  "/gallary/53.jpg",
  "/gallary/35.jpg",
  "/gallary/62.JPG",
  "/gallary/48.jpg",
  "/gallary/55.jpg",
  "/gallary/57.jpg",
  "/gallary/54.jpg",
  "/gallary/63.JPG",
  "/gallary/58.jpg",
  "/gallary/67.JPG",
  "/gallary/61.JPG",
  "/gallary/73.jpg",
  "/gallary/9578.jpg",
  "/gallary/345.jpg",
  "/gallary/70.JPG",
  "/gallary/67.JPG",
  "/gallary/68.JPG",
  "/gallary/69.JPG",
  "/gallary/90.jpg",
  "/gallary/8476.jpg",
  "/gallary/76.jpg",
  "/gallary/7889.jpg",
  "/gallary/8456.jpg",
  "/gallary/65.JPG",
  "/gallary/71.JPG",
  "/gallary/678.jpg",
  "/gallary/83.jpg",
  "/gallary/789.jpg",
  "/gallary/645.jpg",
  "/gallary/7653.jpg",
  "/gallary/57890.jpg",
  "/gallary/84765.jpg",
];

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const getMotionProps = (index) => {
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
          src="/gallary/profile.JPG"
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
      <div className="p-6 columns-2 sm:columns-3 md:columns-4 gap-5 space-y-5 md:mx-[50px] mx-0">
        {images.map((src, index) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { once: true });

          return (
            <motion.div
              onClick={() => setSelectedImage(src)}
              ref={ref}
              key={index}
              className="overflow-hidden rounded-xl shadow-lg cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView ? { opacity: 1, y: 0, ...getMotionProps(index) } : {}
              }
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
            >
              <img
                src={src}
                alt={`Image ${index}`}
                className="w-full h-full object-cover transition-transform duration-500"
              />
            </motion.div>
          );
        })}
      </div>

      {/* Image popup when it will clicked */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
          <div className="relative p-4">
            <img
              src={selectedImage}
              alt="Enlarged"
              className="max-w-[90vw] max-h-[80vh] rounded-xl shadow-2xl"
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
              <img src="/icons_image/Download.svg" alt="download" />
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
