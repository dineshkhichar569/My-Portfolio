import React, { useState } from "react";
import Navbar from "../Components/Navbar";

import { motion, AnimatePresence } from "framer-motion";
import Footer from "../Components/Footer";
import ClickSpark from "../React-Bits/ClickSpark"; //////  Temporary off
import TargetCursor from "../React-Bits/TargetCursor";

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

const allSkills = [
  // Languages
  { name: "JavaScript", icon: "/icons/JS.SVG", category: "languages" },
  { name: "Java", icon: "/icons/Java.svg", category: "languages" },

  // Frontend
  { name: "React.js", icon: "/icons/REACT.svg", category: "frontend" },
  // { name: "Next.js", icon: "/icons/Nextjs.svg", category: "frontend" },
  { name: "Tailwind CSS", icon: "/icons/TAILWIND.svg", category: "frontend" },
  { name: "HTML5", icon: "/icons/HTML.SVG", category: "frontend" },
  { name: "CSS", icon: "/icons/CSS.SVG", category: "frontend" },
  {
    name: "shadcn/ui",
    icon: "https://ui.shadcn.com/apple-touch-icon.png",
    category: "frontend",
  },

  // Backend
  { name: "Node.js", icon: "/icons/NODE.svg", category: "backend" },
  {
    name: "Socket.io",
    icon: "https://i1.wp.com/www.ux-republic.com/wp-content/uploads/2018/03/socket.png?fit=375%2C375&ssl=1",
    category: "backend",
  },
  {
    name: "Express.js",
    icon: "https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/359/thumb/expressjslogo.png",
    category: "backend",
  },

  // Database
  { name: "MongoDB", icon: "/icons/Mongodb.svg", category: "database" },

  // Libraries
  {
    name: "Framer Motion",
    icon: "https://files.raycast.com/elhff4hc1ibpvrb86slbr02iw0qq",
    category: "libraries",
  },
  {
    name: "Mongoose",
    icon: "https://img.icons8.com/?size=96&id=gKfcEStXI1Hm&format=png",
    category: "libraries",
  },
  { name: "Bootstrap", icon: "/icons/Bootstrap.svg", category: "libraries" },

  // DevOps
  {
    name: "Docker",
    icon: "https://www.svgrepo.com/show/331370/docker.svg",
    category: "devops",
  },
  { name: "Git", icon: "/icons/Git.svg", category: "devops" },
  { name: "GitHub", icon: "/icons/Github.svg", category: "devops" },
  {
    name: "Vercel",
    icon: "https://pnghdpro.com/wp-content/themes/pnghdpro/download/social-media-and-brands/vercel-logo-icon.png",
    category: "devops",
  },
  {
    name: "Netlify",
    icon: "https://www.datocms-assets.com/2885/1729218101-logo-netlify-encapsulated-fullcolor-lightmode.svg?auto=format&fit=max&w=1200",
    category: "devops",
  },
  {
    name: "Render",
    icon: "https://pbs.twimg.com/profile_images/1735434212990169088/WoNsBQOA_400x400.jpg",
    category: "devops",
  },
  {
    name: "Cloudflare",
    icon: "https://www.svgrepo.com/show/331337/cloudflare.svg",
    category: "devops",
  },

  // Authentication
  {
    name: "JWT",
    icon: "https://files.raycast.com/lb5bqcvsmjql18w4jjwswm00sjup",
    category: "authentication",
  },
  {
    name: "bcrypt",
    icon: "https://www.outsystems.com/Forge_CW/_image.aspx/Q8LvY--6WakOw9afDCuuGU30LWO2YUXQtIYwJY_Ac_c=/bcryptnet-2023-01-04%2000-00-00-2025-09-27%2011-28-01",
    category: "authentication",
  },

  // Tools
  {
    name: "Shopify",
    icon: "https://icon-icons.com/download-file?file=https%3A%2F%2Fimages.icon-icons.com%2F2429%2FPNG%2F512%2Fshopify_logo_icon_147240.png&id=147240&pack_or_individual=pack",
    category: "tools",
  },
  {
    name: "WordPress",
    icon: "https://cdn.pixabay.com/photo/2016/11/09/08/58/wordpress-1810632_1280.jpg",
    category: "tools",
  },
  {
    name: "Kaggle",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ6ZlP1cnY3b5jm7un8--sKL9lxMP6a0Ox0g&s",
    category: "tools",
  },
  { name: "Postman", icon: "/icons/Postman.svg", category: "tools" },
  {
    name: "MongoDB Compass",
    icon: "/icons/MongodbCompass.svg",
    category: "tools",
  },
  {
    name: "VS Code",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/3840px-Visual_Studio_Code_1.35_icon.svg.png",
    category: "tools",
  },
  { name: "LeetCode", icon: "/icons/Leetcode.svg", category: "tools" },
  { name: "GeeksforGeeks", icon: "/icons/GFG.svg", category: "tools" },
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
      className="w-[50px] mx-auto animate-bounce"
      style={{
        animationDelay: `${index * 0.5}s`,
      }}
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
      ? allSkills
      : allSkills.filter((skill) => skill.category === activeCategory);

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
