// CinematicDesk.jsx
import React from "react";
import setupImage from "../assets/Setup.webp";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
// import ClickSpark from "../React-Bits/ClickSpark";   //////  Temporary off

const feedback = [
  {
    name: "Abhishek Ghelani, BETA Lab",
    platform: "upwork",
    source: "Freelance",
    rating: "★★★★★",
    feedback:
      "I had a great experience working with this Shopify developer. He has strong technical knowledge, is always available when needed, explains things clearly, and has a very cooperative and positive nature. Highly recommended!",
  },
  {
    name: "Fashion Model",
    platform: "upwork",
    source: "Freelance",
    rating: "★★★★★",
    feedback:
      "Working with Dinesh through Upwork was an excellent experience. He built a modern, high-end portfolio website that highlights my modeling projects in a clean and professional way. His attention to detail and responsiveness made the entire process seamless.",
  },
  {
    name: "Local Business Client",
    source: "Offline Contract",
    rating: "★★★★★",
    feedback:
      "Reliable, technically strong, and delivered before deadline. Very smooth experience.",
  },
];

export default function DesktopSetup() {
  return (
    <>
      <section className="relative w-full min-h-screen overflow-hidden text-white font-sans">
        {/* Fullscreen Background Image */}
        <img
          src={setupImage}
          alt="Desk Setup"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.25] blur-[2px] scale-105 z-0"
        />

        {/* animated background color */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-indigo-800/10 to-indigo-500/10 animate-pulse z-0" />

        {/* Reviews Section */}
        <div className="relative z-10 min-h-screen flex items-center md:mt-6 mt-14 md:mb-6 mb-14 justify-center md:px-12 px-6">
          <div className="flex flex-wrap justify-center md:gap-10 gap-6 w-full">
            {feedback.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="relative group p-[1px] rounded-3xl bg-gradient-to-br from-cyan-500/40 via-transparent to-indigo-500/40 transition-all duration-500"
              >
                {/* Glass Inner Card */}
                <div className="h-full max-w-sm rounded-3xl bg-black/60 backdrop-blur-2xl border border-white/10 p-6 transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-[0_30px_80px_rgba(0,255,255,0.25)]">
                  <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center gap-2">
                      <span className="text-xs uppercase tracking-[0.3em] text-white/40">
                        {item.source}
                      </span>
                      {item.platform && (
                        <span className="px-2 py-[2px] text-[10px] rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-400/20">
                          {item.platform}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400 text-lg">
                        {item.rating}
                      </span>
                    </div>
                  </div>

                  <p className="text-base text-center leading-relaxed text-white/90">
                    “{item.feedback}”
                  </p>

                  <div className="mt-10">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6"></div>

                    <p className="text-base font-semibold tracking-wide bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                      — {item.name}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
