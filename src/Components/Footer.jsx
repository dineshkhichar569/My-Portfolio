import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import ClickSpark from "../React-Bits/ClickSpark";

const Footer = () => {
  return (
    <footer className="relative w-full min-h-[40vh] px-6 md:px-10 py-12 bg-gradient-to-tr from-[#0f0c29] via-[#000000] to-[#24243e] backdrop-blur-xl text-white border-t border-white/10 overflow-hidden z-50 mt-[100px]">
      {/* 🫧 Floating Glow Blobs */}
      <div className="absolute w-[300px] h-[300px] bg-[#00ffff] opacity-10 blur-[120px] rounded-full left-[-100px] top-[20%] animate-pulse-slow" />
      <div className="absolute w-[300px] h-[300px] bg-[#ff00cc] opacity-10 blur-[160px] rounded-full right-[-120px] bottom-[10%] animate-pulse-slow" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:18px_18px] opacity-[0.03]" />

      {/* 🌐 Footer Grid Layout */}
      <div className="relative z-20 flex flex-wrap justify-center gap-10 items-center text-center md:text-left max-w-7xl mx-auto">
        {/* 👤 Left: Name + Tagline */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-2"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Dinesh Khichar
          </h2>
          <p className="text-sm md:text-base text-gray-400">
            Crafting emotions with code.
          </p>
        </motion.div>

        {/* 🌟 Center: Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg md:text-xl md:w-[600px] w-96 mx-auto text-gray-300 italic px-2 md:px-0"
        >
          “Design isn't just what it looks like and feels like. Design is how it
          works.”
        </motion.div>

        {/* 🔗 Right: Social Icons */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center md:justify-end gap-6 text-2xl md:text-3xl"
        >
          <a
            href="https://github.com/dineshkhichar569"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00fff7] transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/dinesh-khichar-5265b4282/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0072ff] transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/IZEL_4582"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0072ff] transition duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com/dinesh_458252"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0072ff] transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://leetcode.com/u/DineshSunny/"
            className="hover:text-[#ff007f] transition duration-300"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
              className="w-8 h-8"
              alt="img"
              loading="lazy"
            />
          </a>
          <a
            href="https://www.geeksforgeeks.org/user/wollver962d/?_gl=1*aslot6*_up*MQ..*_gs*MQ..&gclid=CjwKCAjw4efDBhATEiwAaDBpblgSo40PW4ABXWC1GQenuqBjEfzZul5heedj-p0xZt_e6v2_9rfgwBoClJsQAvD_BwE&gbraid=0AAAAAC9yBkDcSo3LmM-RejRscFLXbafzf"
            className="hover:text-[#ff007f] transition duration-300"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg"
              className="w-8 h-8"
              alt="img"
              loading="lazy"
            />
          </a>
        </motion.div>
      </div>

      {/* 🧊 Bottom Line */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-10 text-center text-xs md:text-sm text-gray-500 px-4"
      >
        © {new Date().getFullYear()} Dinesh Khichar · Powered by React &
        Tailwind · All Rights Reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
