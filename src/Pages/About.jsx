import { AnimatePresence, motion } from "framer-motion";
import Dit from "../assets/dit.webp";
import matrixSchool from "../assets/Matrix.webp";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ClickSpark from "../React-Bits/ClickSpark"; //////  Temporary off
import TargetCursor from "../React-Bits/TargetCursor";
import { useRef, useState } from "react";
import {
  Building2,
  Calendar,
  Download,
  ExternalLink,
  EyeIcon,
  FileText,
  X,
} from "lucide-react";
import GitHubStats from "../Components/GitHubStats";
import certificatesData from "../data/certificatesData.js";
import experiencesData from "../data/experiencesData.js";
import profilesData from "../data/profilesData.js";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const EducationCard = ({
  img,
  title,
  degree,
  duration,
  grade,
  tags = [],
  highlight,
  ongoing,
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUp}
    className="relative flex md:flex-row flex-col md:justify-normal md:items-start items-center gap-6 md:p-8 p-5 bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_0_40px_rgba(255,255,255,0.08)] transition-all duration-500 before:absolute before:left-0 before:top-0 before:h-full before:w-[3px] before:bg-gradient-to-b before:rounded-l-2xl"
  >
    <img
      src={img}
      alt={title}
      loading="lazy"
      className="md:w-[100px] w-[70px] md:h-[100px] h-[70px] 
      object-cover rounded-xl border border-white/10"
    />

    <div className="flex-1 space-y-3">
      <h3 className="md:text-3xl text-xl font-bold tracking-wide text-white">
        {title}
      </h3>

      <p className="md:text-lg text-sm text-gray-300">{degree}</p>

      <div className="flex items-center gap-3 flex-wrap">
        <span
          className="px-3 py-1 text-xs rounded-md 
        bg-white/5 border border-white/10 text-white/70"
        >
          {duration}
        </span>

        {ongoing && (
          <span className="text-xs text-emerald-400 font-semibold">
            ● Currently Pursuing
          </span>
        )}
      </div>

      {grade && <p className="text-gray-400 md:text-base text-sm">{grade}</p>}

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs rounded-full 
              bg-white/5 text-white/80 
              border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {highlight && (
        <p className="text-sm text-gray-400 mt-3 italic">{highlight}</p>
      )}
    </div>
  </motion.div>
);

function About() {
  const [selectedCertificate, setSelectedCertificate] = useState("");

  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const certificateRef = useRef(null);
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-hidden font-rubrik">
      <TargetCursor />
      <Navbar />
      {/* //! Background blobs */}
      <div className="abstract-blobs z-0">
        <span className="blob blob1"></span>
        <span className="blob blob2"></span>
        <span className="blob blob3"></span>
        <canvas
          id="blobCanvas"
          className="absolute top-0 left-0 w-full h-full z-[-1]"
        ></canvas>
      </div>

      {/* //! navigation buttons */}
      <div className="mt-28 flex items-center md:gap-3 gap-2 md:ml-16 ml-6 cursor-pointer w-fit h-10">
        {["Experience", "Education", "Certificates"].map((item, i) => (
          <button
            key={i}
            onClick={() => {
              if (i == 0) {
                scrollToSection(experienceRef);
              }

              if (i == 1) {
                scrollToSection(educationRef);
              }
              if (i == 2) {
                scrollToSection(certificateRef);
              }
            }}
            className="text-xs px-3 py-[2px] rounded-xl text-white/80 border border-white/15 bg-white/5 backdrop-blur-sm transition-all duration-200 hover:text-white hover:border-white/40 hover:bg-white/10 hover:shadow-[0_4px_12px_rgba(255,255,255,0.1)] active:scale-95"
          >
            {item}
          </button>
        ))}
      </div>

      {/* //! Hero Section */}
      <div className="relative z-10 flex flex-col items-center text-center px-3 md:px-28 py-20 space-y-6">
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

        {/* //! Coding Profiles */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-wrap gap-3 md:gap-6 justify-center items-center mt-12"
        >
          {profilesData.map((prof, index) => (
            <a
              key={index}
              href={prof.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-target flex items-center md:gap-3 gap-1 md:px-6 px-3 md:py-4 py-3 md:rounded-xl rounded-lg bg-white/5 backdrop-blur-lg border border-white/20 hover:scale-110 transition duration-500 group"
            >
              <img
                src={prof.icon}
                alt="LeetCode"
                loading="lazy"
                className="md:w-8 w-5 md:h-8 h-5 bg-white rounded-full p-1 md:group-hover:animate-spin"
              />
              <span
                className={`text-white md:text-lg text-sm md:font-medium ${prof.textColor} transition duration-500`}
              >
                {prof.name}
              </span>
              <p
                className={`absolute left-1/2 bottom-full mt-2 -translate-x-1/2 ${prof.bgColor} text-sm text-white px-2 py-1 rounded md:opacity-0 md:group-hover:opacity-100 hidden md:flex transition duration-500`}
              >
                Visit Profile
              </p>
            </a>
          ))}
        </motion.div>
      </div>

      <div className="px-3 md:px-28">
        <GitHubStats />
      </div>

      {/* //! Experience Section */}
      <div ref={experienceRef} className="relative z-10 px-3 md:px-28 mt-32">
        {/* //! Top horizontal line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12" />
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-6xl font-extrabold tracking-wide bg-gradient-to-r from-lime-400 via-cyan-400 to-blue-500 text-transparent bg-clip-text text-center mb-20"
        >
          Experience
        </motion.h2>

        <div className="relative border-l border-white/10 ml-2 md:ml-4 space-y-16">
          {experiencesData.map((exp, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative md:pl-10 pl-3"
            >
              {/* //! Timeline Dot */}
              <div className="absolute -left-[9px] top-2 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_20px_rgba(0,255,255,0.8)]" />

              <div className="bg-gradient-to-br from-[#0a0f1f] via-[#0c1224] to-[#0a0f1f] border border-white/10 rounded-2xl p-4 md:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_0_40px_rgba(0,255,200,0.25)] transition-all duration-500">
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-[#00ff88] via-white to-[#00cfff] bg-clip-text text-transparent">
                  {exp.role}
                </h3>

                <p className="flex items-center gap-2 text-gray-300 mt-1">
                  <Building2 size={18} />

                  {exp.company}
                </p>

                <p className="flex items-center gap-2 text-gray-500 text-sm mt-2">
                  <Calendar size={18} />
                  {exp.duration} • {exp.type}
                </p>

                <p className="text-gray-400 mt-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* //! Skills */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-[2px] text-xs rounded-full bg-white/5 text-[#00ffcc] border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-6">
                  {exp.profileLink && (
                    <a
                      href={exp.profileLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex items-center justify-between px-4 py-3 rounded-2xl bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-white/10 hover:border-[#14a800]/50 transition-all duration-300 overflow-hidden"
                    >
                      <div className="flex items-center gap-4 relative z-10">
                        <img
                          src="https://img.icons8.com/?size=100&id=2y_wcSzVjqiQ&format=png"
                          alt="GFG"
                          loading="lazy"
                          className="md:w-8 w-5 md:h-8 h-5 bg-white rounded-full p-1 md:group-hover:animate-spin"
                        />

                        <div>
                          <p className="text-sm text-white font-medium">
                            Verified Freelancer
                          </p>
                          <p className="text-xs text-white/60">
                            View Upwork Public Profile
                          </p>
                        </div>
                        <ExternalLink className="w-5 h-5 text-white/60 group-hover:text-[#14a800] group-hover:scale-125 rotate-12 group-hover:-rotate-12 relative z-10 transition-all duration-300" />
                      </div>
                    </a>
                  )}

                  {exp.offerLetter && (
                    <a
                      href={exp.offerLetter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-sm hover:bg-white/20 transition"
                    >
                      <FileText className="w-4 h-4" />
                      Offer Letter
                    </a>
                  )}

                  {exp.certificate && (
                    <a
                      href={exp.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-sm hover:bg-white/20 transition"
                    >
                      <Download className="w-4 h-4" />
                      Certificate
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* //! Education Section */}
      <div ref={educationRef}>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-6xl mb-[60px] mt-[150px] font-extrabold tracking-wide bg-gradient-to-r from-lime-400 via-cyan-400 to-blue-500 text-transparent bg-clip-text text-center"
        >
          {/* //! Top horizontal line */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12" />
          Education
        </motion.h2>
        <div className="relative z-10 px-3 md:p-10 md:px-28 pb-24">
          {/* //! School Card */}
          <EducationCard
            img={matrixSchool}
            title="Matrix High School, Sikar"
            degree="Class 12th – Mathematics"
            duration="2021 – 2022"
            grade="Grade: 85.80%"
            highlight="Built strong analytical foundation in Mathematics & Logical Reasoning"
          />

          {/* //! Vertical Bridge */}
          <div className="relative flex justify-center items-center w-full h-[150px] overflow-hidden">
            <div className="absolute w-52 h-52 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/10 blur-[80px] ripple-scale"></div>

            <div className="absolute w-6 h-6 rounded-full bg-cyan-400/60 shadow-[0_0_60px_20px_rgba(0,255,255,0.2)] core-pulse z-10"></div>

            <h2 className="relative z-20 text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-white text-fade">
              Next Chapter
            </h2>
          </div>

          {/* //! College Card */}
          <EducationCard
            img={Dit}
            title="DIT University, Dehradun"
            degree="Bachelor of Technology – Computer Science Engineering"
            duration="2023 – 2027"
            grade="CGPA: 8.05"
            tags={[
              "Full Stack",
              "JAVA",
              "DevOps",
              "MERN Stack",
              "DBMS",
              "Data Structure & Algorithm",
              "Cloud Computing",
              "Operating System",
              "Design and Analysis of Algorithms",
            ]}
            highlight="Actively building production-level MERN applications & AI-integrated systems"
            ongoing={true}
          />
        </div>
      </div>

      {/* //! Certifications Section */}
      <div
        ref={certificateRef}
        className="relative z-10 md:mt-48 px-1 md:px-28 pb-32"
      >
        {/* //! Top horizontal line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12" />
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-6xl font-extrabold tracking-wide bg-gradient-to-r from-lime-400 via-cyan-400 to-blue-500 text-transparent bg-clip-text text-center mb-10"
        >
          Certifications
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto max-w-7xl place-items-center py-10 px-3">
          {certificatesData.map((certificate, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="group relative flex flex-col justify-normal w-full h-full bg-gradient-to-br from-[#0a0f1f] via-[#0c1224] to-[#0a0f1f] border border-white/10 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_0_40px_rgba(0,255,200,0.25)] transition-all duration-300 overflow-hidden group backdrop-blur-xl cursor-pointer pb-6"
            >
              {/* //! on hover */}
              <p
                className="flex gap-1 items-center justify-center absolute top-2 bottom-full mt-2 left-4 z-10 bg-gradient-to-r from-[#00ff88]/20 to-[#00cfff]/20 backdrop-blur-md border border-[#00ffcc]/40 text-center text-xs font-medium text-[#00ffcc] px-2 py-[14px] rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                onClick={() => setSelectedCertificate(certificate.popupImage)}
              >
                <EyeIcon className="w-3.5 h-3.5" /> view
              </p>

              {/* //! Header Section */}
              <div className="relative h-[120px] bg-gradient-to-br from-[#00ff88]/10 via-[#00cfff]/5 to-transparent flex items-center justify-center rounded-t-3xl">
                {/* Star Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-br from-[#00ff88] to-[#00cfff] rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-black group-hover:animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 2l3 7h7l-5.5 4.5L18 22l-6-4-6 4 1.5-8.5L2 9h7z" />
                  </svg>
                </div>

                {/* //! IMAGE section*/}
                <div className="w-full h-32 flex items-center justify-center rounded-xl">
                  <img
                    src={certificate.image}
                    alt="certificate logo"
                    className="h-28 w-fit max-w-52 object-contain transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* //! Text Section */}
              <div className="p-3 md:p-6 flex flex-col justify-between gap-3 text-left">
                {/* //! Title */}
                <h3 className="text-xl font-semibold bg-gradient-to-r from-[#00ff88] via-white to-[#00cfff] bg-clip-text text-transparent group-hover:brightness-110 transition-all">
                  {certificate.title}
                </h3>

                {/* //! Organization + Date */}
                <div className="flex flex-col gap-1 text-sm text-gray-400">
                  <p className="font-medium text-gray-300">
                    {certificate.organization}
                  </p>
                  <p className="text-gray-500">{certificate.date}</p>
                </div>

                {/* //! Description */}
                <p className="text-gray-400 text-sm leading-relaxed mt-2">
                  {certificate.description}
                </p>

                {/* //! Skills */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {certificate.skills.map((skill, key) => (
                    <span
                      key={key}
                      className="px-3 py-[2px] text-xs font-medium rounded-full bg-white/5 text-[#00ffcc] border border-white/10 hover:bg-[#00ff88]/10 hover:border-[#00ff88]/30 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* //! Credential */}
                {certificate.credentialId && (
                  <p className="text-xs text-gray-500 mt-4">
                    Credential ID:
                    <span className="text-[#00cfff] font-medium">
                      {certificate.credentialId}
                    </span>
                  </p>
                )}
              </div>

              {/* //! Download Icon */}
              <div className="absolute bottom-4 right-4">
                <a
                  href={certificate.content}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-2 py-2 rounded-lg bg-white/5 border border-white/15 text-xs text-gray-300 transition-all duration-300 hover:bg-white/20 hover:border-white/30 hover:text-white"
                  onClick={() => setSelectedCertificate("")}
                >
                  <Download className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* //! Certificate Popup */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="relative w-fit h-[80vh] rounded-2xl shadow-2xl overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <button
                onClick={() => setSelectedCertificate("")}
                className="absolute top-4 right-4 text-white text-xl bg-black p-1 rounded-md hover:shadow-slate-900 shadow-lg transition-all duration-200 hover:scale-110"
              >
                <X />
              </button>

              <img
                src={selectedCertificate}
                title="Certificate Preview"
                className="w-full h-full rounded-2xl object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default About;
