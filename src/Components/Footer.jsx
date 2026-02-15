import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="cursor-default relative w-full min-h-[40vh] px-6 md:px-10 py-12 bg-gradient-to-tr from-[#0f0c29] via-[#000000] to-[#24243e] backdrop-blur-xl text-white border-t border-white/10 overflow-hidden z-50 md:pt-24 pt-16">
      {/*  for glowing background */}
      <div className="absolute w-[300px] h-[300px] bg-[#00ffff] opacity-10 blur-[120px] rounded-full left-[-100px] top-[20%] animate-pulse-slow" />
      <div className="absolute w-[300px] h-[300px] bg-[#ff00cc] opacity-10 blur-[160px] rounded-full right-[-120px] bottom-[10%] animate-pulse-slow" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:18px_18px] opacity-[0.03]" />

      {/* for footbar contents */}
      <div className="relative z-20 max-w-7xl mx-auto">
        <div className="flex flex-wrap md:gap-0 gap-10 justify-between">
          {/* for logo and socila media icons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-5 md:w-[30%] w-full"
          >
            <h2 className="text-3xl font-bold tracking-wide">
              <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
                Dinesh Khichar
              </span>
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed">
              Building immersive, high-performance digital experiences with
              modern web technologies.
            </p>

            {/* social media icons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="flex flex-wrap gap-6 text-2xl md:text-3xl"
            >
              <a
                href="https://github.com/dineshkhichar569"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#00fff7] hover:scale-125 transition duration-200"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/dinesh-khichar-5265b4282/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0072ff] hover:scale-125 transition duration-200"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://x.com/IZEL_4582"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0072ff] hover:scale-125 transition duration-200"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com/dinesh_458252"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ff00dd] hover:scale-125 transition duration-200"
              >
                <FaInstagram />
              </a>
              <a
                href="https://leetcode.com/u/DineshSunny/"
                className="hover:text-[#ff007f] hover:scale-125 transition duration-200"
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
                className="hover:text-[#ff007f] hover:scale-125 transition duration-200"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg"
                  className="w-8 h-8"
                  alt="img"
                  loading="lazy"
                />
              </a>
            </motion.div>
          </motion.div>

          {/* for Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-5 w-fit"
          >
            <h3 className="text-lg font-semibold tracking-wide text-white/90">
              Navigation
            </h3>

            <div className="flex flex-col gap-3 text-gray-400 text-sm">
              {["Home", "About", "Gallary", "Skills", "Project", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`${item.toLowerCase() == "home" ? "/" : `/${item.toLowerCase()}`}`}
                    className="group relative w-fit hover:text-white transition flex gap-1 items-center"
                  >
                    {item}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-200"/>
                    <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-gradient-to-r from-cyan-400 to-pink-500 transition-all duration-200 group-hover:w-full" />
                  </a>
                ),
              )}
            </div>
          </motion.div>

          {/* for Contact */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-5 md:w-fit"
          >
            <h3 className="text-lg font-semibold text-white/90">Contact</h3>

            <div className="space-y-3 text-gray-400 text-sm">
              <p>📍 India</p>
              <p className="group relative flex gap-2 items-center transition-all duration-200 hover:text-white">
                ✉
                <a
                  href="mailto:dinesh.khichar.work@gmail.com"
                >
                  dinesh.khichar.work@gmail.com
                </a>
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-gradient-to-r from-cyan-400 to-pink-500 transition-all duration-200 group-hover:w-full" />
              </p>
              <p>💼 Open for Freelance & Full-Time</p>
            </div>
          </motion.div>

          {/* for Hire Me button section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col justify-between md:w-[30%] w-full"
          >
            <div>
              <h3 className="text-lg font-semibold text-white/90 mb-4">
                Let’s Build Something Powerful
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                Have a project in mind? Let’s collaborate and turn your ideas
                into a premium digital product.
              </p>
            </div>

            <a
              href="/hire"
              className="mt-6 inline-flex items-center justify-center px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-pink-500 text-black font-semibold tracking-wide hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(0,255,255,0.3)]"
            >
              Hire Me
            </a>
          </motion.div>
        </div>
      </div>

      {/*  for rights section */}
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
