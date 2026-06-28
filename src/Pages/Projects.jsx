import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import ClickSpark from "../React-Bits/ClickSpark"; //////  Temporary off
import TargetCursor from "../React-Bits/TargetCursor";
import projectData from "../data/projectData";
import ProjectModal from "../Components/ProjectModal";
import { Link } from "react-router-dom";

const ProjectCard = ({ project, onCardClick }) => (
  <motion.div
    onClick={() => onCardClick(project)}
    className={`
    ${project.cssPerBox}
    sticky
    h-auto md:h-[400px]
    md:w-[1000px] w-[94%5]
    bg-white/5
    backdrop-blur-[200px]
    border border-white/20
    rounded-3xl
    shadow-xl
    overflow-hidden
    md:p-6 p-4
    flex flex-col md:flex-row gap-4 md:gap-8
    transition-all
    duration-[400ms]
    ease-[cubic-bezier(0.25,0.1,0.25,1)]
    [transform-style:preserve-3d]
    [transform-origin:center]
    hover:scale-[1] hover:shadow-[0_30px_60px_rgba(0,0,0,0.4),_0_0_60px_rgba(255,255,255,0.1)]
    group cursor-pointer
  `}
  >
    {/* Image and Video */}
    <div className="relative w-full md:w-[480px] md:flex-shrink-0 h-[200px] sm:h-[240px] md:h-full rounded-xl overflow-hidden border border-white/10">
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
      />
      {/* {project.video && (
        <video
          src={project.video}
          loading="lazy"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          muted
          loop
          autoPlay
          playsInline
        />
      )} */}

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      {/* //! Status box on image */}
      {project.status &&
        (() => {
          const map = {
            Live: {
              ring: "border-teal-400/40",
              text: "text-teal-200",
              dot: "bg-teal-400 animate-ping",
              glow: "shadow-[0_0_16px_rgba(45,212,191,0.5)]",
            },
            "In Progress": {
              ring: "border-amber-400/40",
              text: "text-amber-200",
              dot: "bg-amber-400 animate-pulse",
              glow: "shadow-[0_0_16px_rgba(251,191,36,0.5)]",
            },
            Offline: {
              ring: "border-gray-400/30",
              text: "text-gray-300",
              dot: "bg-gray-400",
              glow: "shadow-[0_0_12px_rgba(156,163,175,0.3)]",
            },
          };
          const s = map[project.status] || map.Live;
          return (
            <span
              className={`absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full border bg-black/60 px-2.5 py-1 text-[11px] font-semibold backdrop-blur-md ${s.ring} ${s.text} ${s.glow}`}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
              {project.status}
            </span>
          );
        })()}

      {/*  //! View details hint popUP */}
      <span className="absolute bottom-3 right-3 rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-white opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
        View details →
      </span>
    </div>

    {/* Content */}
    <div className="flex flex-col justify-between flex-1 min-w-0 gap-3 md:gap-4">
      <div className="flex flex-col gap-2 md:gap-3">
        {/* Title and Description */}
        <div className="text-center md:text-left">
          <h3 className="text-xl md:text-3xl font-bold text-white">
            {project.title}
          </h3>
          <p className="text-gray-300 mt-1 md:mt-2 text-sm md:text-base line-clamp-4 md:line-clamp-none">
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap justify-center md:justify-start gap-1.5 mt-1">
          {project.techStack.map((tech, i) => (
            <span
              key={i}
              className="bg-black/30 text-white text-xs md:text-sm px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Code and Live Buttons */}
      <div className="flex flex-row justify-between items-center mt-2 md:mt-4 gap-4">
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-target group relative inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/20 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] transition-all duration-300 shadow-md hover:shadow-xl hover:from-[#2b2b2b] hover:to-[#3a3a3a] backdrop-blur-sm"
          >
            <span className="absolute inset-0 rounded-xl bg-purple-500/10 group-hover:bg-purple-500/20 opacity-0 group-hover:opacity-100 transition duration-300 z-0 blur-sm" />
            <FaGithub className="relative z-10 text-white text-lg transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110" />
            <span className="relative z-10 text-white text-sm font-medium transition-transform duration-300 group-hover:translate-x-1">
              Code
            </span>
          </a>
        )}

        {project.liveLink ? (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-target group relative inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/20 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] transition-all duration-300 shadow-md hover:shadow-xl hover:from-[#2b2b2b] hover:to-[#3a3a3a] backdrop-blur-sm"
          >
            <span className="absolute inset-0 rounded-xl bg-teal-400/10 group-hover:bg-teal-400/20 opacity-0 group-hover:opacity-100 transition duration-300 z-0 blur-sm" />
            <FaExternalLinkAlt className="relative z-10 text-white text-lg transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
            <span className="relative z-10 text-white text-sm font-medium transition-transform duration-300 group-hover:-translate-x-1">
              Live
            </span>
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-700 px-3.5 py-2 text-xs font-semibold text-zinc-300 cursor-not-allowed">
            Demo Offline
          </span>
        )}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  return (
    <div className="relative z-0 min-h-screen text-white bg-black">
      {/* Blobs background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-pink-500 opacity-20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-[20%] right-[-80px] w-[250px] h-[250px] bg-blue-400 opacity-20 rounded-full blur-2xl animate-spin-slow" />
        <div className="absolute bottom-[-80px] left-[20%] w-[200px] h-[200px] bg-purple-500 opacity-20 rounded-full blur-2xl animate-pulse" />
      </div>

      <Navbar />

      {/* <ClickSpark/> */}

      <TargetCursor />

      <motion.div
        className="relative flex justify-center items-center pt-32 mb-[80px]"
        initial={{ opacity: 0, scale: 0.8, y: -30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {/* Glowing Pulse Behind the heading */}
        <motion.div
          className="absolute w-48 h-16 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 blur-2xl opacity-30 animate-pulse"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.2, opacity: 0.4 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        />

        {/* Heading Text */}
        <h2 className="text-5xl font-extrabold text-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent relative z-10">
          🚀 Projects
          <span className="block w-24 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mx-auto mt-4 rounded-full animate-pulse"></span>
        </h2>
      </motion.div>

      <div className="relative flex flex-col gap-[100px] md:px-[100px] px-0 md:pt-[100px] md:pb-[60px] pb-0 [perspective:1000px] items-center">
        {projectData.slice(0, 4).map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onCardClick={setActiveProject}
          />
        ))}
      </div>

      {/* //! View All Projects button */}
      <div className="flex justify-center md:mt-0 mt-[60px] mb-[60px]">
        <Link
          to="/all-projects"
          className="cursor-target group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3 backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/[0.06]"
        >
          <span className="text-base font-medium text-white">
            View All Projects
          </span>
          <span className="rounded-full border border-white/15 px-2 py-0.5 text-xs text-gray-400">
            {projectData.length}
          </span>
          <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-r from-pink-500 to-purple-500 transition-transform duration-300 group-hover:translate-x-0.5">
            <FaArrowRight className="text-xs text-white" />
          </span>
        </Link>
      </div>

      {/* //! Project description PopUP */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />

      <Footer />
    </div>
  );
};

export default Projects;
