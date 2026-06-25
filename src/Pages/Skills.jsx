import React, { useState } from "react";
import Navbar from "../Components/Navbar";

import { motion, AnimatePresence } from "framer-motion";
import Footer from "../Components/Footer";
import ClickSpark from "../React-Bits/ClickSpark"; //////  Temporary off
import TargetCursor from "../React-Bits/TargetCursor";
import skillsData from "../data/skillsData";

const skillVariants = {
  hidden: { opacity: 0, y: 50 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.03, duration: 0.3, ease: "easeOut" },
  }),
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

const SkillCard = ({ skill, index }) => (
  <motion.div
    className="cursor-target relative group p-6 md:w-52 rounded-xl text-white text-center font-semibold text-lg bg-white/5 border border-white/10 backdrop-blur-lg hover:scale-105 transition-all duration-300 shadow-xl overflow-hidden"
    custom={index}
    variants={skillVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
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
);

function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

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

          {/* Filter Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-5 py-2.5 rounded-full text-sm sm:text-base font-medium border transition-all duration-300 ${
                  activeCategory === cat.key
                    ? "bg-cyan-400 border-cyan-400 text-black shadow-[0_0_20px_rgba(0,255,255,0.5),0_0_40px_rgba(0,255,255,0.2)]"
                    : "bg-white/5 border-white/15 text-white/60 hover:bg-white/10 hover:border-white/25 hover:text-white/80"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 md:gap-6 gap-3 w-full max-w-6xl px-2">
            <AnimatePresence mode="wait">
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
