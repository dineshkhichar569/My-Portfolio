import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import TargetCursor from "../React-Bits/TargetCursor";
import ProjectModal from "../Components/ProjectModal";
import projectData from "../data/projectData";

const GridCard = ({ project, index, onCardClick }) => (
  <motion.div
    onClick={() => onCardClick(project)}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{
      duration: 0.5,
      delay: (index % 3) * 0.08,
      ease: [0.25, 0.1, 0.25, 1],
    }}
    className="
      group relative flex flex-col cursor-pointer
      rounded-2xl border border-white/10
      bg-gradient-to-br from-white/[0.06] to-white/[0.02]
      backdrop-blur-xl
      overflow-hidden
      shadow-[0_8px_30px_rgba(0,0,0,0.3)]
      transition-all duration-500
      hover:border-white/25
      hover:-translate-y-1.5
      hover:shadow-[0_20px_50px_rgba(124,58,237,0.18)]
    "
  >
    {/* //! Media */}
    <div className="relative w-full aspect-[16/10] overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      {/* {project.video && (
        <video
          src={project.video}
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
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

    {/* //! Main Content */}
    <div className="flex flex-1 flex-col gap-3 p-5">
      <div>
        <h3 className="text-lg font-bold text-white tracking-tight">
          {project.title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-gray-400 line-clamp-2">
          {project.tagline || project.description}
        </p>
      </div>

      {/* //! Some Tech stacks */}
      <div className="flex flex-wrap gap-1.5">
        {project.techStack.slice(0, 4).map((tech, i) => (
          <span
            key={i}
            className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] font-medium text-gray-300"
          >
            {tech}
          </span>
        ))}
        {project.techStack.length > 4 && (
          <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] font-medium text-gray-500">
            +{project.techStack.length - 4}
          </span>
        )}
      </div>

      {/* //! live and code Buttons */}
      <div className="mt-auto flex items-center gap-2.5 pt-2">
        {project.liveLink ? (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="cursor-target group/btn inline-flex items-center gap-1.5 rounded-lg bg-white px-3.5 py-2 text-xs font-semibold text-black transition-all duration-300 hover:gap-2"
          >
            Live
            <FaArrowRight className="text-[10px] transition-transform duration-300 group-hover/btn:translate-x-0.5" />
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-700 px-3.5 py-2 text-xs font-semibold text-zinc-300 cursor-not-allowed">
            Demo Offline
          </span>
        )}
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            aria-label="View code"
            className="cursor-target grid h-8 w-8 place-items-center rounded-lg border border-white/15 bg-white/5 text-white transition-all duration-300 hover:bg-white/10 hover:border-white/30"
          >
            <FaGithub className="text-sm" />
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const ViewAllProjects = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="relative z-0 min-h-screen text-white bg-black">
      {/* //! Blobs background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-pink-500 opacity-20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-[20%] right-[-80px] w-[250px] h-[250px] bg-blue-400 opacity-20 rounded-full blur-2xl animate-spin-slow" />
        <div className="absolute bottom-[-80px] left-[20%] w-[200px] h-[200px] bg-purple-500 opacity-20 rounded-full blur-2xl animate-pulse" />
      </div>

      <Navbar />

      <TargetCursor />

      {/* //! Heading */}
      <motion.div
        className="relative flex justify-center items-center pt-32 mb-[60px]"
        initial={{ opacity: 0, scale: 0.8, y: -30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.div
          className="absolute w-48 h-16 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 blur-2xl opacity-30 animate-pulse"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.2, opacity: 0.4 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        />
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent relative z-10">
          🚀 All Projects
          <span className="block w-24 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mx-auto mt-4 rounded-full animate-pulse"></span>
        </h2>
      </motion.div>

      {/* //! project cards Grid */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-8 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectData.map((project, index) => (
            <GridCard
              key={index}
              project={project}
              index={index}
              onCardClick={setActiveProject}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />

      <Footer />
    </div>
  );
};

export default ViewAllProjects;
