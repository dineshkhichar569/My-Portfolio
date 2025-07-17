import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import matrixSchool from "../assets/Matrix.jpeg";
import Dit from "../assets/dit.jpeg";
import Footer from "./Footer";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const GlassCard = ({ img, title, subtitle, extra, score }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUp}
    className="flex items-start gap-6 p-6 bg-white/5 backdrop-blur-lg border border-white/20 rounded-2xl shadow-[0_0_60px_0_rgba(255,255,255,0.05)] hover:shadow-cyan-500/20 transition-shadow duration-500"
  >
    <img
      src={img}
      alt={title}
      className="md:w-[100px] w-[60px] md:h-[100px] h-[60px] object-cover rounded-xl"
    />
    <div className="space-y-2">
      <p className="md:text-3xl text-lg font-semibold">{title}</p>
      <p className="md:text-lg text-sm text-gray-300">{subtitle}</p>
      {extra && <p className="md:text-lg text-sm text-gray-400">{extra}</p>}
      <p className="text-gray-400 md:text-lg text-sm">{score}</p>
    </div>
  </motion.div>
);

function About() {
  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-hidden font-rubrik">
      <Navbar />

      {/* Background blobs */}
      <div className="abstract-blobs z-0">
        <span className="blob blob1"></span>
        <span className="blob blob2"></span>
        <span className="blob blob3"></span>
        <canvas
          id="blobCanvas"
          className="absolute top-0 left-0 w-full h-full z-[-1]"
        ></canvas>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center text-center px-1 md:px-28 py-24 space-y-6">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="md:text-[60px] text-[45px] font-extrabold leading-tight text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]"
        >
          I’m <span className="text-cyan-400">Dinesh Khichar</span>
        </motion.h1>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="md:text-xl text-lg text-gray-300 max-w-3xl"
        >
          MERN Stack & DevOps Engineer crafting immersive, emotional code
          experiences.
        </motion.p>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="md:text-lg text-sm text-gray-500 md:leading-8 max-w-3xl"
        >
          I build digital stories — not just apps — by fusing frontend soul with
          backend precision. Minimalism, performance, emotion. Every line of
          code matters.
        </motion.p>
      </div>

      {/* Experience Section */}
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-6xl mb-[60px] mt-[50px] font-extrabold tracking-wide bg-gradient-to-r from-lime-400 via-cyan-400 to-blue-500 text-transparent bg-clip-text text-center"
      >
        Experience
        <p className="text-xl text-gray-500 font-extralight mt-1">
          Comming Soon.....
        </p>
      </motion.h2>

      {/* Education Section */}
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-6xl mb-[60px] mt-[150px] font-extrabold tracking-wide bg-gradient-to-r from-lime-400 via-cyan-400 to-blue-500 text-transparent bg-clip-text text-center"
      >
        Education
      </motion.h2>
      <div className="relative z-10 px-10 md:px-28 pb-24">
        {/* School Card */}
        <GlassCard
          img={matrixSchool}
          title="Matrix High School, Sikar"
          subtitle="Class 12th – Maths (2021 - 2022)"
          extra="Grade: 85.80%"
        />

        {/* Vertical Bridge */}
        <div className="relative flex justify-center items-center w-full h-[150px] overflow-hidden">
          <div className="absolute w-52 h-52 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/10 blur-[80px] ripple-scale"></div>

          <div className="absolute w-6 h-6 rounded-full bg-cyan-400/60 shadow-[0_0_60px_20px_rgba(0,255,255,0.2)] core-pulse z-10"></div>

          <h2 className="relative z-20 text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-white text-fade">
            Next Chapter
          </h2>
        </div>

        {/* College Card */}
        <GlassCard
          img={Dit}
          title="DIT University, Dehradun"
          subtitle="Bachelor of Technology - B.Tech CSE (2023 - 2027)"
          extra="Specialization: FullStack & DevOps"
          score="CGPA: 8.05"
        />
      </div>

      {/* Certifications Section */}
      <div className="relative z-10 mt-48 px-10 md:px-28 pb-32">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-6xl font-extrabold tracking-wide bg-gradient-to-r from-lime-400 via-cyan-400 to-blue-500 text-transparent bg-clip-text text-center mb-12"
        >
          Licenses & Certifications
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Example certs — replace or map from array */}
          {/* <GlassCard
            img="https://static.vecteezy.com/system/resources/previews/029/345/981/non_2x/database-icon-data-analytics-icon-monitoring-big-data-analysis-containing-database-free-png.png"
            title="Database Management Essentials - Coursera"
            subtitle="Issued: Mar 2025"
            extra="Credential ID: 8R35GNGVE447"
          /> */}
          {/* <GlassCard
            img="https://icon.icepanel.io/Technology/png-shadow-512/Linux.png"
            title="Linux Fundamentals - Coursera"
            subtitle="Issued: Mar 2025"
            extra="Credential ID: 05EDPXOXDGH5"
          /> */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex items-start gap-6 p-8 bg-white/5 backdrop-blur-lg border border-white/20 rounded-2xl shadow-[0_0_60px_0_rgba(255,255,255,0.05)] hover:shadow-cyan-500/20 transition-shadow duration-500 relative"
          >
            <img
              src="https://static.vecteezy.com/system/resources/previews/029/345/981/non_2x/database-icon-data-analytics-icon-monitoring-big-data-analysis-containing-database-free-png.png"
              alt="img"
              className="md:w-[100px] w-[60px] md:h-[100px] h-[60px] object-cover rounded-xl"
            />
            <div className="space-y-2">
              <p className="md:text-3xl text-lg font-semibold">Database Management Essentials - Coursera</p>
              <p className="md:text-lg text-sm text-gray-300">Issued: Mar 2025</p>
              <p className="md:text-lg text-sm text-gray-400">Credential ID: 8R35GNGVE447</p>
            </div>
            <a className="absolute bottom-5 right-5" href="/DOCs/DBMS.pdf"><img className="w-8" src="/icons_image/Download.svg" alt="image" /></a>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex items-start gap-6 p-8 bg-white/5 backdrop-blur-lg border border-white/20 rounded-2xl shadow-[0_0_60px_0_rgba(255,255,255,0.05)] hover:shadow-cyan-500/20 transition-shadow duration-500 relative"
          >
            <img
              src="https://icon.icepanel.io/Technology/png-shadow-512/Linux.png"
              alt="img"
              className="md:w-[100px] w-[60px] md:h-[100px] h-[60px] object-cover rounded-xl"
            />
            <div className="space-y-2">
              <p className="md:text-3xl text-lg font-semibold">Linux Fundamentals - Coursera</p>
              <p className="md:text-lg text-sm text-gray-300">Issued: Mar 2025</p>
              <p className="md:text-lg text-sm text-gray-400">Credential ID: 05EDPXOXDGH5</p>
            </div>
            <a className="absolute bottom-5 right-5" href="/DOCs/LINUX.pdf"><img className="w-8" src="/icons_image/Download.svg" alt="image" /></a>
          </motion.div>

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
