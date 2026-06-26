import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaArrowRight,
  FaTimes,
  FaLink,
  FaBriefcase,
  FaUser,
} from "react-icons/fa";

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="
              relative z-10 w-full max-w-4xl
              max-h-[90vh] overflow-y-auto
              rounded-xl border border-white/15
              bg-gradient-to-br from-[#15131c]/95 to-[#0c0b10]/95
              backdrop-blur-2xl
              shadow-[0_30px_80px_rgba(0,0,0,0.6),0_0_60px_rgba(124,58,237,0.12)]
              [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.2)_transparent]
            "
          >
            {/* //! Close Button */}
            <button
              onClick={onClose}
              aria-label="Close"
              className="group fixed top-4 right-4 z-20 grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-black/40 text-white/80 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:text-white"
            >
              <FaTimes className="transition-transform duration-100 group-hover:rotate-90" />
            </button>

            {/* //! Hero media Section */}
            <div className="relative h-[220px] sm:h-[300px] md:h-[360px] w-full overflow-hidden rounded-t-xl">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
              {project.video && (
                <video
                  src={project.video}
                  className="absolute inset-0 h-full w-full object-cover"
                  muted
                  loop
                  autoPlay
                  playsInline
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0b10] via-[#0c0b10]/40 to-transparent" />

              <div className="absolute bottom-0 left-0 w-full p-5 sm:p-8">
                <h2 className="text-2xl sm:text-4xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  {project.title}
                </h2>
                {project.tagline && (
                  <p className="mt-1 text-sm sm:text-base text-gray-300">
                    {project.tagline}
                  </p>
                )}
              </div>
            </div>

            {/* Body */}
            <div className="p-3 sm:p-8 flex flex-col gap-8">
              {/* //! Meta + metrics */}
              <div className="flex flex-col gap-6">
                <div className="flex justify-between items-start gap-6">
                  {(project.role || project.timeline) && (
                    <div className="flex gap-3">
                      {project.role && (
                        <MetaCard label="Role" value={project.role} />
                      )}
                      {project.timeline && (
                        <MetaCard label="Timeline" value={project.timeline} />
                      )}
                    </div>
                  )}

                  {/* //! Status and category */}
                  <div className="flex flex-wrap items-center justify-end gap-2">
                    {project.status &&
                      (() => {
                        const map = {
                          Live: {
                            ring: "border-teal-400/40",
                            text: "text-teal-200",
                            dot: "bg-teal-400",
                            glow: "shadow-[0_0_16px_rgba(45,212,191,0.5)]",
                          },
                          "In Progress": {
                            ring: "border-amber-400/40",
                            text: "text-amber-200",
                            dot: "bg-amber-400",
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
                            className={`inline-flex items-center gap-1.5 rounded-full border bg-black/60 px-2.5 py-1 text-[11px] font-semibold backdrop-blur-md ${s.ring} ${s.text} ${s.glow}`}
                          >
                            <span
                              className={`h-1.5 w-1.5 rounded-full animate-pulse ${s.dot}`}
                            />
                            {project.status}
                          </span>
                        );
                      })()}
                    {project.year && (
                      <span className="rounded-full border border-white/15 bg-black/40 px-2.5 py-0.5 text-xs text-gray-300">
                        {project.year}
                      </span>
                    )}
                    {project.category && (
                      <span className="rounded-full border border-white/15 bg-black/40 px-2.5 py-0.5 text-xs text-gray-300">
                        {project.category}
                      </span>
                    )}
                    {project.client && (
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold text-white ${
                          project.client.type === "Client"
                            ? "bg-gradient-to-r from-purple-500 to-indigo-500"
                            : "bg-gradient-to-r from-sky-500 to-cyan-500"
                        }`}
                      >
                        {project.client.type === "Client" ? (
                          <FaBriefcase className="text-[10px]" />
                        ) : (
                          <FaUser className="text-[10px]" />
                        )}
                        {project.client.platform
                          ? `${project.client.type} · ${project.client.platform}`
                          : project.client.type}
                      </span>
                    )}
                  </div>
                </div>

                {project.metrics?.length > 0 && (
                  <div className="grid grid-cols-3 gap-3">
                    {project.metrics.map((m, i) => (
                      <div
                        key={i}
                        className="rounded-xl border border-white/10 bg-white/5 px-3 py-4 text-center"
                      >
                        <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">
                          {m.value}
                        </p>
                        <p className="mt-1 text-[11px] sm:text-xs text-gray-400 leading-tight">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* //! Problem and Solution */}
              {(project.problem || project.solution || project.description) && (
                <div className="grid md:grid-cols-2 gap-6">
                  <Section title="The Problem">
                    <p className="text-sm sm:text-base leading-relaxed text-gray-300">
                      {project.problem || project.description}
                    </p>
                  </Section>
                  {project.solution && (
                    <Section title="The Solution">
                      <p className="text-sm sm:text-base leading-relaxed text-gray-300">
                        {project.solution}
                      </p>
                    </Section>
                  )}
                </div>
              )}

              {/* Features */}
              {project.features?.length > 0 && (
                <Section title="Key Features">
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                    {project.features.map((f, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-sm text-gray-300"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </Section>
              )}

              {/* Technical highlights — now title + detail cards */}
              {project.highlights?.length > 0 && (
                <Section title="Technical Highlights">
                  <div className="grid sm:grid-cols-2 gap-3">
                    {project.highlights.map((h, i) => {
                      const obj = typeof h === "string" ? { title: h } : h;
                      return (
                        <div
                          key={i}
                          className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
                        >
                          <div className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-pink-400 to-purple-400" />
                            <h5 className="text-sm font-semibold text-white">
                              {obj.title}
                            </h5>
                          </div>
                          {obj.detail && (
                            <p className="mt-1.5 pl-3.5 text-xs leading-relaxed text-gray-400">
                              {obj.detail}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </Section>
              )}

              {/* Outcomes */}
              {project.outcomes?.length > 0 && (
                <Section title="Impact & Outcomes">
                  <ul className="flex flex-col gap-2.5">
                    {project.outcomes.map((o, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-sm text-gray-300"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400" />
                        {o}
                      </li>
                    ))}
                  </ul>
                </Section>
              )}

              {/* Learnings */}
              {project.learnings?.length > 0 && (
                <Section title="What I Learned">
                  <ul className="flex flex-col gap-2.5">
                    {project.learnings.map((l, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-sm text-gray-300"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-pink-400 to-indigo-400" />
                        {l}
                      </li>
                    ))}
                  </ul>
                </Section>
              )}

              {/* Tech stack — grouped if techGroups present, else flat */}
              <Section title="Tech Stack">
                {project.techGroups ? (
                  <div className="flex flex-col gap-3">
                    {Object.entries(project.techGroups).map(
                      ([group, items]) => (
                        <div
                          key={group}
                          className="flex flex-col sm:flex-row sm:items-center gap-2"
                        >
                          <span className="w-24 flex-shrink-0 text-xs uppercase tracking-wider text-gray-500">
                            {group}
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {items.map((tech, i) => (
                              <span
                                key={i}
                                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-200"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </Section>

              {/* Gallery */}
              {project.gallery?.length > 0 && (
                <Section title="Gallery">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {project.gallery.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt={`${project.title} screenshot ${i + 1}`}
                        loading="lazy"
                        className="aspect-video w-full rounded-xl border border-white/10 object-cover"
                      />
                    ))}
                  </div>
                </Section>
              )}

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3 border-t border-white/10 pt-6">
                {project.liveLink ? (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-target group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:gap-3"
                  >
                    Live Demo
                    <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-0.5" />
                  </a>
                ) : (
                  <span className="cursor-not-allowed inline-flex items-center gap-1.5 rounded-lg bg-zinc-700 px-3.5 py-2 text-xs font-semibold text-zinc-300">
                    Demo Offline
                  </span>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-target inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-white/10 hover:border-white/30"
                  >
                    <FaGithub className="text-base" />
                    View Code
                  </a>
                )}
                {project.links?.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-target inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-white/10 hover:border-white/30"
                  >
                    <FaLink className="text-xs" />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const MetaCard = ({ label, value }) => (
  <div className="rounded-xl border border-white/10 bg-white/5 px-2 py-2">
    <p className="text-[10px] uppercase tracking-widest text-gray-500">
      {label}
    </p>
    <p className="text-sm font-medium text-white">{value}</p>
  </div>
);

const Section = ({ title, children }) => (
  <div className="flex flex-col gap-3">
    <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
      {title}
    </h4>
    {children}
  </div>
);

export default ProjectModal;
