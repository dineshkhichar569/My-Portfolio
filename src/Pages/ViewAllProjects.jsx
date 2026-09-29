import React, { useState, forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaArrowRight, FaAndroid, FaApple } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import TargetCursor from "../React-Bits/TargetCursor";
import ProjectModal from "../Components/ProjectModal";
import projectData from "../data/projectData";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "fullstack", label: "Full-Stack" },
  { key: "shopify", label: "Shopify" },
  { key: "mobile", label: "Mobile App" },
  { key: "frontend", label: "Frontend" },
];

const COUNTS = projectData.reduce(
  (acc, p) => ({ ...acc, [p.type]: (acc[p.type] || 0) + 1 }),
  { all: projectData.length }
);

const GridCard = forwardRef(({ project, index, onCardClick }, ref) => (
  <motion.div
    ref={ref}
    layout
    onClick={() => onCardClick(project)}
    initial={{ opacity: 0, y: 40, scale: 0.94, filter: "blur(8px)" }}
    whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
    exit={{
      opacity: 0,
      scale: 0.88,
      filter: "blur(10px)",
      transition: { duration: 0.28, ease: [0.4, 0, 1, 1] },
    }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{
      duration: 0.55,
      delay: (index % 3) * 0.08,
      ease: [0.22, 1, 0.36, 1],
      layout: { type: "spring", stiffness: 300, damping: 30 },
    }}
    className="
      group relative flex flex-col cursor-pointer
      rounded-2xl border border-white/10
      bg-gradient-to-br from-white/[0.06] to-white/[0.02]
      backdrop-blur-xl
      overflow-hidden
      shadow-[0_8px_30px_rgba(0,0,0,0.3)]
      transition-[translate,border-color,box-shadow] duration-500
      hover:border-white/25
      hover:[translate:0_-6px]
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
        {project.app ? (
          <a
            href={project.app}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-target group relative inline-flex items-center gap-2 px-4 py-1.5 rounded-xl border border-white/20 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] transition-all duration-300 shadow-md hover:shadow-xl hover:from-[#2b2b2b] hover:to-[#3a3a3a] backdrop-blur-sm"
          >
            <span className="absolute inset-0 rounded-xl bg-emerald-400/10 group-hover:bg-emerald-400/20 opacity-0 group-hover:opacity-100 transition duration-300 z-0 blur-sm" />

            <FaAndroid className="relative z-10 text-emerald-400 text-lg transition-transform duration-300 group-hover:scale-110" />

            <span className="relative z-10 text-white text-sm font-medium">
              Android App
            </span>
          </a>
        ) : (
          ""
        )}
        {project.ios ? (
          // <a
          //   href={project.ios}
          //   target="_blank"
          //   rel="noopener noreferrer"
          //   className="cursor-target group relative inline-flex items-center gap-2 px-4 py-1.5 rounded-xl border border-white/20 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] transition-all duration-300 shadow-md hover:shadow-xl hover:from-[#2b2b2b] hover:to-[#3a3a3a] backdrop-blur-sm"
          // >
          //   <span className="absolute inset-0 rounded-xl bg-emerald-400/10 group-hover:bg-emerald-400/20 opacity-0 group-hover:opacity-100 transition duration-300 z-0 blur-sm" />

          //   <FaAndroid className="relative z-10 text-emerald-400 text-lg transition-transform duration-300 group-hover:scale-110" />

          //   <span className="relative z-10 text-white text-sm font-medium">
          //     IOS App
          //   </span>
          // </a>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl border border-white/10 bg-zinc-800 text-zinc-500 cursor-not-allowed opacity-60 select-none">
            <FaApple className="text-lg text-white" />
            <span className="text-sm font-medium">IOS...</span>
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  </motion.div>
));

GridCard.displayName = "GridCard";

const ViewAllProjects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [filter, setFilter] = useState("all");

  const filterProjectData =
    filter === "all"
      ? projectData
      : projectData.filter((item) => item.type === filter);

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
        {/* //! Filter bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 flex justify-center"
        >
          <div className="relative flex max-w-full items-center gap-1 overflow-x-auto rounded-full border border-white/10 bg-white/[0.04] p-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl [scrollbar-width:none] sm:overflow-visible [&::-webkit-scrollbar]:hidden">
            {FILTERS.map(({ key, label }) => {
              const active = filter === key;
              return (
                <motion.button
                  key={key}
                  onClick={() => setFilter(key)}
                  whileTap={{ scale: 0.94 }}
                  aria-pressed={active}
                  className={`cursor-target relative shrink-0 rounded-full px-4 py-2 text-sm font-medium outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-purple-400/60 ${
                    active ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="filter-pill"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-[0_0_24px_rgba(168,85,247,0.5)]"
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {label}
                    <span
                      className={`min-w-[1.25rem] rounded-full px-1.5 py-0.5 text-center text-[10px] font-semibold tabular-nums transition-colors duration-300 ${
                        active ? "bg-black/25 text-white" : "bg-white/5 text-gray-500"
                      }`}
                    >
                      {COUNTS[key] || 0}
                    </span>
                  </span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* //! Animated grid */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filterProjectData.map((project, index) => (
              <GridCard
                key={project.title}
                project={project}
                index={index}
                onCardClick={setActiveProject}
              />
            ))}
          </AnimatePresence>
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
