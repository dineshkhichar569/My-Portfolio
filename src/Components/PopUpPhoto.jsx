import React, { useEffect, useRef, useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import image from "../assets/popUp.webp";

function PopUpPhoto() {
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= 0 && Math.abs(rect.top) <= rect.height - windowHeight) {
        const scrollProgress =
          Math.abs(rect.top) / ((rect.height - windowHeight) / 2);
        setProgress(Math.min(Math.max(scrollProgress, 0), 1));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const translateY = 100 - progress * 100;
  const scale = 0.5 + progress * 0.5;
  const opacity = progress;

  return (
    <div className="relative bg-black text-white rounded-t-[50px]">
      <section ref={sectionRef} className="relative h-[150vh]">
        {/* Sticky Container */}
        <div className="sticky top-0 h-screen w-full flex flex-wrap items-center justify-center overflow-hidden rounded-t-[50px]">
          {/* Background Particle Glow */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="w-full h-full bg-[radial-gradient(circle,#94a3b8_1px,transparent_1px)] [background-size:30px_30px] opacity-10 animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-black opacity-40" />
          </div>

          {/* Animated Pop-Up Image for Large Screens */}
          <Tilt
            tiltMaxAngleX={12}
            tiltMaxAngleY={12}
            perspective={1200}
            transitionSpeed={1500}
            scale={1.04}
            gyroscope={true}
            glareEnable={false}
            className="will-change-transform hidden md:flex"
          >
            <div
              className="items-center justify-center w-[550px] h-[550px] rounded-full bg-gradient-to-br from-cyan-400/10 to-indigo-500/10 border border-cyan-400/10 backdrop-blur-xl transition-all duration-500 shadow-[0_0_60px_rgba(34,211,238,0.15),0_20px_40px_rgba(0,0,0,0.2)] hover:shadow-[0_0_120px_rgba(34,211,238,0.3),0_30px_50px_rgba(0,0,0,0.3)]"
              style={{
                transform: `translateY(${translateY}px) scale(${scale})`,
                opacity,
              }}
            >
              <div className="relative group w-[90%] h-[90%] rounded-3xl overflow-hidden shadow-xl transition-all duration-700">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/5 to-transparent border border-cyan-400/10 rounded-3xl z-10 pointer-events-none" />
                <img
                  src={image}
                  loading="lazy"
                  alt="Pop-up Visual"
                  className="w-full h-[650px] object-cover rounded-3xl group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </Tilt>

          {/* Scroll-synced Pop-Up for Small Screens */}
          <div
            className="md:hidden flex items-center justify-center w-full h-[400px] mb-10 transition-all duration-700"
            style={{
              transform: `translateY(${translateY}px) scale(${scale})`,
              opacity,
            }}
          >
            <div className="relative w-[90%] h-full rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/10 to-transparent border border-cyan-400/10 rounded-2xl z-10 pointer-events-none" />
              <img
                src={image}
                alt="Pop-up"
                loading="lazy"
                className="w-full h-full object-cover rounded-2xl transition-transform duration-700 ease-out"
              />
            </div>
          </div>

          {/* Text & Resume */}
          <div className="z-20 text-center px-6 md:ml-12 md:mt-0 -mt-44 max-w-xl">
            <div className="relative">
              <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-white via-cyan-300 to-indigo-400 text-transparent bg-clip-text tracking-tighter drop-shadow-[0_5px_30px_rgba(255,255,255,0.25)] mb-6 animate-fadeInUp">
                WORK ETHIC BEATS FEAR
              </h2>

              <p className="text-xl md:text-2xl text-slate-300 tracking-wide italic mb-8 max-w-2xl animate-fadeInUp delay-150">
                Endure the Cost. Become the Standard.
              </p>

              <a
                href="/DOCs/DineshResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-900 font-extrabold shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:scale-110 hover:shadow-[0_0_40px_rgba(99,102,241,0.6)] transition-all duration-500 backdrop-blur-md group relative"
              >
                READ THE PATH I FORGED ⚔️
                <p className="absolute left-1/2 top-full mt-2 -translate-x-1/2 bg-white text-sm text-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-500">
                  Dinesh's Resume
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PopUpPhoto;
