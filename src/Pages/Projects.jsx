import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import ClickSpark from "../React-Bits/ClickSpark";  //////  Temporary off
import TargetCursor from "../React-Bits/TargetCursor";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built with React, Tailwind, and Framer Motion.",
    image: "/projects/projects_image/Portfolio.webp",
    video: "",
    techStack: ["React", "Tailwind CSS", "Framer Motion", "CSS", "Responsive"],
    liveLink: "https://dineshportfolios.site",
    githubLink: "https://github.com/dineshkhichar569/My-Portfolio.git",
    cssPerBox: "top-[80px]",
  },
  {
    title: "Tarecom Website",
    description:
      "A modern e-commerce platform built using Shopify with custom HTML, CSS, and JavaScript enhancements to provide a smooth, responsive, and user-friendly shopping experience.",
    image: "/projects/projects_image/Tarecom.webp",
    video: "/projects/projects_videos/Tarecom.mp4",
    techStack: ["Shopify", "HTML", "CSS", "JavaScript", "Responsive Design"],
    liveLink: "https://tarecom.com/",
    cssPerBox: "top-[130px]",
    // githubLink: "https://github.com/dineshkhichar569/Tarecom",
  },
  {
    title: "Laundry App",
    description:
      "Designed for efficiency, reliability, and user convenience in every step of the laundry process.",
    image: "/projects/projects_image/Laundry.webp",
    video: "/projects/projects_videos/Laundry.mp4",
    techStack: ["HTML", "CSS", "JavaScript", "Responsive"],
    liveLink:
      "https://66880eda7957cd82484141cd--dainty-alpaca-6096e9.netlify.app/",
    githubLink: "https://github.com/dineshkhichar569/Laundry",
    cssPerBox: "top-[180px]",
  },
  {
    title: "MentorShip Website",
    description:
      "Built for growth, guidance, and simplicity at every step of your learning journey.",
    image: "/projects/projects_image/MentorShip.webp",
    video: "/projects/projects_videos/Mentor.mp4",
    techStack: ["HTML", "CSS", "Vanila JavaScript", "Responsive"],
    liveLink: "https://lively-mooncake-cd83f4.netlify.app/",
    githubLink: "https://github.com/dineshkhichar569/MentorShip",
    cssPerBox: "top-[230px]",
  },
  {
    title: "NFT Selling Website",
    description:
      "Designed for creators, crypto enthusiasts to explore, trade, and showcase NFTs with ease and security.",
    image: "/projects/projects_image/NFT.webp",
    video: "/projects/projects_videos/NFT.mp4",
    techStack: ["HTML", "CSS", "Vanila JavaScript", "Responsive"],
    liveLink: "https://nft-sellingmarket.netlify.app/",
    githubLink: "https://github.com/dineshkhichar569/NFT-SellingMarket",
    cssPerBox: "top-[400px]",
  },
];

const ProjectCard = ({ project, index }) => (
  <motion.div
    className={`
    ${project.cssPerBox}
    sticky
    h-auto md:h-[400px]
    w-[80%]
    bg-white/5
    backdrop-blur-[200px]
    border border-white/20
    rounded-3xl
    shadow-xl
    p-5 md:pl-10 md:pr-10 md:pb-10 md:pt-1
    flex flex-col md:flex-row gap-3 md:gap-6
    transition-all
    duration-[400ms]
    ease-[cubic-bezier(0.25,0.1,0.25,1)]
    [transform-style:preserve-3d]
    [transform-origin:center]
    hover:scale-[0.95] hover:[transform:rotateZ(2deg)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.4),_0_0_60px_rgba(255,255,255,0.1)]
    group
  `}
  >
    <div className="flex flex-col gap-6 md:gap-10 w-full">
      <div className="text-xl md:text-2xl font-bold text-white mt-2 text-center md:text-left">
        {project.title}
      </div>

      {/* Image and Video */}
      <div className="relative w-full md:w-[480px] h-[220px] sm:h-[260px] md:h-[300px] rounded-xl overflow-hidden border border-white/10">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        {project.video && (
          <video
            src={project.video}
            loading="lazy"
            className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            muted
            loop
            autoPlay
            playsInline
          />
        )}
      </div>
    </div>

    <div className="pt-0 md:pt-20 flex flex-col justify-between w-full">
      <div className="flex flex-col gap-3">
        {/* Title and Description */}
        <div className="text-center md:text-left">
          <h3 className="hidden md:block text-2xl md:text-3xl font-bold text-white mt-2">
            {project.title}
          </h3>
          <p className="text-gray-300 mt-2 text-sm md:text-lg">
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap justify-center md:justify-start gap-1 mt-2">
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
      <div className="flex flex-row justify-between items-center mt-6 gap-4">
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
      </div>
    </div>
  </motion.div>
);


const Projects = () => {
  return (
    <div className="relative z-0 min-h-screen text-white bg-black cursor-normal">
      {/* Blobs background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-pink-500 opacity-20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-[20%] right-[-80px] w-[250px] h-[250px] bg-blue-400 opacity-20 rounded-full blur-2xl animate-spin-slow" />
        <div className="absolute bottom-[-80px] left-[20%] w-[200px] h-[200px] bg-purple-500 opacity-20 rounded-full blur-2xl animate-pulse" />
      </div>

      <Navbar />

      <ClickSpark/>
      
      <TargetCursor/>

      <motion.div
        className="relative flex justify-center items-center pt-32 mb-[80px]"
        initial={{ opacity: 0, scale: 0.8, y: -30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {/* Glowing Pulse Behind */}
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

      <div className="relative flex flex-col gap-[100px] md:px-[100px] px-0 md:py-[100px] pb-0 [perspective:1000px] items-center">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
