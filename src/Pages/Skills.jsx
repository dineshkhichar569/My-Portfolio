import React, { useState, forwardRef, useRef, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Navbar from "../Components/Navbar";

import { motion, AnimatePresence } from "framer-motion";
import Footer from "../Components/Footer";
import ClickSpark from "../React-Bits/ClickSpark"; //////  Temporary off
import TargetCursor from "../React-Bits/TargetCursor";
import skillsData from "../data/skillsData";

const skillVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9, filter: "blur(6px)" },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      delay: Math.min(i, 12) * 0.03,
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
  exit: {
    opacity: 0,
    scale: 0.85,
    filter: "blur(8px)",
    transition: { duration: 0.22, ease: [0.4, 0, 1, 1] },
  },
};

const categories = [
  { key: "all", label: "All" },
  { key: "languages", label: "Languages" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "devops", label: "DevOps" },
  { key: "database", label: "Database" },
  { key: "authentication", label: "Authentication" },
  { key: "libraries", label: "Libraries" },
  { key: "tools", label: "Tools" },
];

const COUNTS = skillsData.reduce(
  (acc, s) => ({ ...acc, [s.category]: (acc[s.category] || 0) + 1 }),
  { all: skillsData.length },
);

const SkillCard = forwardRef(({ skill, index }, ref) => (
  <motion.div
    ref={ref}
    layout
    className="cursor-target relative group p-6 md:w-52 rounded-xl text-white text-center font-semibold text-lg bg-white/5 border border-white/10 backdrop-blur-lg hover:[scale:1.05] transition-[scale] duration-300 shadow-xl overflow-hidden"
    custom={index}
    variants={skillVariants}
    initial="hidden"
    whileInView="show"
    exit="exit"
    viewport={{ once: true }}
    transition={{ layout: { type: "spring", stiffness: 320, damping: 30 } }}
  >
    <img
      className="w-[50px] mx-auto group-hover:animate-spin"
      loading="lazy"
      src={skill.icon}
      alt=""
    />
    <p className="text-center mt-3">{skill.name}</p>
    <div className="absolute inset-0 z-[-1] bg-cyan-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500" />
  </motion.div>
));

SkillCard.displayName = "SkillCard";

function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");
  const sliderRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  const updateArrows = () => {
    const el = sliderRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    updateArrows();
    const ro = new ResizeObserver(updateArrows);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const slide = (dir) =>
    sliderRef.current?.scrollBy({
      left: dir * sliderRef.current.clientWidth * 0.6,
      behavior: "smooth",
    });

  const handleSelect = (key, btn) => {
    setActiveCategory(key);
    const el = sliderRef.current;
    el?.scrollTo({
      left: btn.offsetLeft - el.clientWidth / 2 + btn.offsetWidth / 2,
      behavior: "smooth",
    });
  };

  const fade = 56;
  const sliderMask = `linear-gradient(to right, ${
    canLeft ? `transparent 0, #000 ${fade}px` : "#000 0"
  }, ${canRight ? `#000 calc(100% - ${fade}px), transparent 100%` : "#000 100%"})`;

  const filteredSkills =
    activeCategory === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <div className="">
      <Navbar />
      <TargetCursor />

      {/* <ClickSpark/> */}

      <div className="relative overflow-hidden text-white pt-20">
        {/* Fixed animated gradient background */}
        <div className="fixed inset-0 -z-20 bg-[length:400%_400%] bg-gradient-to-br from-[#0f0c29] via-[#0c0c0c] to-[#24243e] animate-[gradientShift_20s_ease_infinite]" />

        {/* Animated floating blobs */}
        <div className="fixed top-[-100px] left-[-100px] w-[300px] h-[300px] bg-pink-500/20 blur-3xl rounded-full animate-pulse -z-10" />
        <div className="fixed bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-cyan-400/20 blur-3xl rounded-full animate-pulse -z-10" />

        {/* Single Skills Section */}
        <section className="min-h-screen w-full px-4 sm:px-8 py-16 flex flex-col justify-start items-center text-white z-10">
          <motion.h2
            className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 text-center drop-shadow-xl text-cyan-300"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            🚀 All Skills
          </motion.h2>

          <motion.p
            className="text-white/70 text-center max-w-2xl text-base sm:text-lg mb-8 px-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Technologies, tools & skills I work with.
          </motion.p>

          {/* Filter Slider */}
          <motion.div
            className="relative mb-12 w-full max-w-4xl overflow-hidden rounded-full border border-white/10 bg-white/[0.04] shadow-[0_8px_30px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <motion.div
              ref={sliderRef}
              layoutScroll
              onScroll={updateArrows}
              style={{ maskImage: sliderMask, WebkitMaskImage: sliderMask }}
              className="relative flex gap-1 overflow-x-auto p-1.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {categories.map((cat) => {
                const active = activeCategory === cat.key;
                return (
                  <motion.button
                    key={cat.key}
                    onClick={(e) => handleSelect(cat.key, e.currentTarget)}
                    whileTap={{ scale: 0.94 }}
                    aria-pressed={active}
                    className={`relative shrink-0 rounded-full px-4 py-2 text-sm font-medium outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-cyan-300/60 ${
                      active ? "text-black" : "text-white/60 hover:text-white"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="skill-pill"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 32,
                        }}
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-300 to-sky-400 shadow-[0_0_20px_rgba(34,211,238,0.5),0_0_40px_rgba(34,211,238,0.2)]"
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
                      {cat.label}
                      <span
                        className={`min-w-[1.25rem] rounded-full px-1.5 py-0.5 text-center text-[10px] font-semibold tabular-nums transition-colors duration-300 ${
                          active
                            ? "bg-black/15 text-black"
                            : "bg-white/5 text-white/40"
                        }`}
                      >
                        {COUNTS[cat.key] || 0}
                      </span>
                    </span>
                  </motion.button>
                );
              })}
            </motion.div>

            {/* Arrows */}
            <AnimatePresence>
              {canLeft && (
                <motion.div
                  key="left"
                  initial={{ opacity: 0, x: -10, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -10, scale: 0.8 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-y-0 left-1.5 z-20 flex items-center"
                >
                  <button
                    onClick={() => slide(-1)}
                    aria-label="Scroll filters left"
                    className="grid h-8 w-8 place-items-center rounded-full border border-white/15 bg-black/40 text-white shadow-[0_0_16px_rgba(34,211,238,0.25)] backdrop-blur-md transition-all duration-300 hover:border-cyan-300/50 hover:bg-cyan-400/20 active:scale-90"
                  >
                    <FiChevronLeft className="text-base" />
                  </button>
                </motion.div>
              )}
              {canRight && (
                <motion.div
                  key="right"
                  initial={{ opacity: 0, x: 10, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 10, scale: 0.8 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-y-0 right-1.5 z-20 flex items-center"
                >
                  <button
                    onClick={() => slide(1)}
                    aria-label="Scroll filters right"
                    className="grid h-8 w-8 place-items-center rounded-full border border-white/15 bg-black/40 text-white shadow-[0_0_16px_rgba(34,211,238,0.25)] backdrop-blur-md transition-all duration-300 hover:border-cyan-300/50 hover:bg-cyan-400/20 active:scale-90"
                  >
                    <FiChevronRight className="text-base" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>


          {/* Skills Grid */}
          <div className="relative grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 md:gap-6 gap-3 w-full max-w-6xl px-2">
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill, i) => (
                <SkillCard key={skill.name} skill={skill} index={i} />
              ))}
            </AnimatePresence>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default Skills;
