import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ClickSpark from "../React-Bits/ClickSpark";
import TargetCursor from "../React-Bits/TargetCursor";

const projects = [
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
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built with React, Tailwind, and Framer Motion.",
    image: "/projects/projects_image/Portfolio.webp",
    video: "",
    techStack: ["React", "Tailwind CSS", "Framer Motion", "CSS", "Responsive"],
    liveLink: "https://dineshkhichar.dev",
    githubLink: "https://github.com/dineshkhichar/portfolio",
  },
];

const ProjectCard = ({ project, index }) => (
  <motion.div
    className="relative h-[550px] bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden shadow-xl p-6 flex flex-col gap-4 transition-transform group hover:scale-[1.02]"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2, duration: 0.5 }}
  >
    {/* Image and Video */}
    <div className="relative w-full h-80 sm:h-82 rounded-xl overflow-hidden border border-white/10">
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

    {/* Title and Description */}
    <div>
      <h3 className="text-2xl font-bold text-white mt-2">{project.title}</h3>
      <p className="text-gray-300 mt-2 text-sm">{project.description}</p>
    </div>

    {/* What Tech used */}
    <div className="flex flex-wrap gap-2 mt-2">
      {project.techStack.map((tech, i) => (
        <span
          key={i}
          className="bg-black/30 text-white text-xs px-2 py-1 rounded-full"
        >
          {tech}
        </span>
      ))}
    </div>

    {/* code AND live link */}
    <div className="flex justify-between items-center mt-4">
      <a
        href={project.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-target group relative inline-flex items-center gap-2 px-5 py-2 rounded-xl border border-white/20 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] transition-all duration-300 shadow-md hover:shadow-xl hover:from-[#2b2b2b] hover:to-[#3a3a3a] backdrop-blur-sm"
      >
        <span className="absolute inset-0 rounded-xl bg-purple-500/10 group-hover:bg-purple-500/20 opacity-0 group-hover:opacity-100 transition duration-300 z-0 blur-sm" />

        <FaGithub className="relative z-10 text-white text-lg transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110" />
        <span className="relative z-10 text-white text-sm font-medium transition-transform duration-300 group-hover:translate-x-1">
          Code
        </span>
      </a>

      <a
        href={project.liveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-target group relative inline-flex items-center gap-2 px-5 py-2 rounded-xl border border-white/20 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] transition-all duration-300 shadow-md hover:shadow-xl hover:from-[#2b2b2b] hover:to-[#3a3a3a] backdrop-blur-sm"
      >
        <span className="absolute inset-0 rounded-xl bg-teal-400/10 group-hover:bg-teal-400/20 opacity-0 group-hover:opacity-100 transition duration-300 z-0 blur-sm" />

        <FaExternalLinkAlt className="relative z-10 text-white text-lg transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
        <span className="relative z-10 text-white text-sm font-medium transition-transform duration-300 group-hover:-translate-x-1">
          Live
        </span>
      </a>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <div className="relative z-0 min-h-screen text-white overflow-hidden bg-black">


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
        className="relative flex justify-center items-center mt-[100px] mb-[80px]"
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

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2 md:mx-[100px] mx-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>


    <Footer/>



    </div>
  );
};

export default Projects;
