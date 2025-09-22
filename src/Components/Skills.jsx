import React from "react";
import Navbar from "./Navbar";

import { motion } from "framer-motion";
import Footer from "./Footer";
import ClickSpark from "../React-Bits/ClickSpark";
import TargetCursor from "../React-Bits/TargetCursor";

const skillVariants = {
  hidden: { opacity: 0, y: 50 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: "easeOut" },
  }),
};

const SkillCard = ({ skill, index }) => (
  <motion.div
    className="cursor-target relative group p-6 rounded-xl text-white text-center font-semibold text-lg bg-white/5 border border-white/10 backdrop-blur-lg hover:scale-105 transition-all duration-300 shadow-xl overflow-hidden"
    custom={index}
    variants={skillVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
  >
    <img className="w-[100px] mx-auto" loading="lazy" src={skill.icon} alt="" />
    <p className="text-center mt-6">{skill.name}</p>
    <div className="absolute inset-0 z-[-1] bg-cyan-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500" />
  </motion.div>
);

const SkillsSection = ({ title, subtitle, skills, startIndex = 0 }) => (
  <section className="min-h-screen w-full px-4 sm:px-8 py-16 flex flex-col justify-center items-center text-white z-10">
    <motion.h2
      className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 text-center drop-shadow-xl text-cyan-300"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {title}
    </motion.h2>

    <motion.p
      className="text-white/70 text-center max-w-2xl text-base sm:text-lg mb-12 px-2"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      {subtitle}
    </motion.p>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full max-w-7xl px-2">
      {skills.map((skill, i) => (
        <SkillCard key={skill.name} skill={skill} index={startIndex + i} />
      ))}
    </div>
  </section>
);

function Skills() {
  return (
    <div className="">
      <Navbar />
      <TargetCursor/>
      <ClickSpark/>

      <div className="relative overflow-hidden text-white">
        {/* Fixed animated gradient background */}
        <div className="fixed inset-0 -z-20 bg-[length:400%_400%] bg-gradient-to-br from-[#0f0c29] via-[#0c0c0c] to-[#24243e] animate-[gradientShift_20s_ease_infinite]" />

        {/* Animated floating blobs */}
        <div className="fixed top-[-100px] left-[-100px] w-[300px] h-[300px] bg-pink-500/20 blur-3xl rounded-full animate-pulse -z-10" />
        <div className="fixed bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-cyan-400/20 blur-3xl rounded-full animate-pulse -z-10" />

        {/* Page 1: Frontend */}
        <SkillsSection
          title="🚀 Frontend Development"
          subtitle="Creating responsive UIs with modern frontend technologies."
          skills={[
            {
              name: "HTML",
              icon: "/icons/HTML.SVG",
            },
            {
              name: "CSS",
              icon: "/icons/CSS.SVG",
            },
            {
              name: "JavaScript",
              icon: "/icons/JS.SVG",
            },
            {
              name: "Tailwind CSS",
              icon: "/icons/TAILWIND.svg",
            },
            {
              name: "Bootstrap",
              icon: "/icons/Bootstrap.svg",
            },
            {
              name: "React.js",
              icon: "/icons/REACT.svg",
            },
          ]}
        />

        {/* Page 2: Backend + Tools */}
        <SkillsSection
          title="⚙️ Backend & Tools"
          subtitle="APIs, databases & dev tools to power full-stack apps."
          skills={[
            {
              name: "Node.js",
              icon: "/icons/NODE.svg",
            },
            {
              name: "Express.js",
              icon: "/icons/EXPRESS.svg",
            },
            {
              name: "MongoDB & Mongoose",
              icon: "/icons/Mongodb.svg",
            },
            {
              name: "Postman",
              icon: "/icons/Postman.svg",
            },
            {
              name: "MongoDB Compass",
              icon: "/icons/MongodbCompass.svg",
            },
            {
              name: "Git",
              icon: "/icons/Git.svg",
            },
            {
              name: "GitHub",
              icon: "/icons/Github.svg",
            },
          ]}
          startIndex={6}
        />

        {/* Page 3: DSA & Java */}
        <SkillsSection
          title="🧠 DSA & Problem Solving"
          subtitle="Core CS skills, algorithms and real-world coding logic."
          skills={[
            {
              name: "Java",
              icon: "/icons/Java.svg",
            },
            {
              name: "Data Structures & Algorithms",
              icon: "/icons/DSA.svg",
            },
            {
              name: "LeetCode",
              icon: "/icons/Leetcode.svg",
            },
            {
              name: "GeeksforGeeks",
              icon: "/icons/GFG.svg",
            },
          ]}
          startIndex={14}
        />
      </div>


      <Footer/>


    </div>
  );
}

export default Skills;
