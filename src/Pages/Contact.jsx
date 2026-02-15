import React from "react";
import Navbar from "../Components/Navbar";

import { motion } from "framer-motion";
import ClickSpark from "../React-Bits/ClickSpark";   //////  Temporary off
import TargetCursor from "../React-Bits/TargetCursor";

function Contact() {
  return (
    <div className="bg-black">
      {/* For Background */}
      <div className="abstract-blobs z-0">
        <span className="blob blob1"></span>
        <span className="blob blob2"></span>
        <span className="blob blob3"></span>
        <canvas
          id="blobCanvas"
          className="absolute top-0 left-0 w-full h-full z-[-1]"
        ></canvas>
      </div>

      <Navbar />
      <TargetCursor/>
      {/* <ClickSpark/> */}

      <section className="md:mx-[50px] pt-36">

        
        <div className="text-center">
          <h1 className="text-white text-5xl sm:text-6xl md:text-7xl font-semibold overflow-hidden inline-block animate-fade-in-smooth">
            <span className="shine-subtle relative inline-block animate-text-reveal font-rubrik">
              Build With Me
            </span>
          </h1>

          <p className="text-white/60 text-base sm:text-lg mt-4 animate-fade-in-slow">
            Clean code. Modern UI. Timeless results.
          </p>
        </div>

        <div className="w-full py-32 px-6 sm:px-12 relative overflow-hidden">
          {/* Main Glass Panel */}
          <div className="relative z-10 w-full max-w-7xl mx-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[inset_0_0_50px_rgba(255,255,255,0.05)] overflow-hidden transition-all duration-1000">


            {/* Inner Aura */}
            <div className="absolute -inset-1.5 rounded-[2rem] border border-white/10 group-hover:border-white/25 transition-all duration-700 pointer-events-none" />
            {/* Shine Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent blur-2xl opacity-25 animate-pulse pointer-events-none z-0" />


            {/* Content */}
            <div className="relative z-10 text-center px-2 md:px-6 sm:px-20 py-10 md:py-20 md:space-y-14 space-y-6">

              
              {/* Title */}
              <h2 className="text-3xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white tracking-wider uppercase">
                ✨ Let's Create Magic
              </h2>

              {/* Subtext */}
              <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                Whether you have a project, collaboration, or simply want to
                vibe — I’m just one click away.
              </p>

              {/* Emails */}
              <div className="w-full max-w-4xl mx-auto">
                <h2 className="text-white text-3xl sm:text-4xl font-serif font-semibold mb-8 tracking-wide border-b border-white/20 pb-2"></h2>

                <div className="space-y-6 text-white/90 text-base sm:text-lg font-light">
                  <div className="group transition duration-300 hover:text-white">
                    <label className="block text-sm text-white/60 mb-1 tracking-wider">
                      Email (Primary)
                    </label>
                    <a
                      href="mailto:dinesh.khichar.work@gmail.com"
                      className="block text-lg tracking-wide font-medium group-hover:underline underline-offset-4 decoration-white/50 transition-all"
                    >
                      dinesh.khichar.work@gmail.com
                    </a>
                  </div>

                  <div className="group transition duration-300 hover:text-white">
                    <label className="block text-sm text-white/60 mb-1 tracking-wider">
                      Email (Secondary)
                    </label>
                    <a
                      href="mailto:dineshkhichar569@gmail.com"
                      className="block text-lg tracking-wide font-medium group-hover:underline underline-offset-4 decoration-white/50 transition-all"
                    >
                      dineshkhichar569@gmail.com
                    </a>
                  </div>

                  <div className="group transition duration-300 hover:text-white">
                    <label className="block text-sm text-white/60 mb-1 tracking-wider">
                      Phone
                    </label>
                    <a
                      href="tel:+919252690571"
                      className="block text-lg tracking-wide font-medium group-hover:underline underline-offset-4 decoration-white/50 transition-all"
                    >
                      +91 92526 90571
                    </a>
                  </div>
                </div>
              </div>


              {/* Contact Button */}
              <a
                href="mailto:dinesh.khichar.work@gmail.com?subject=Let's Connect&body=Hi Dinesh,"
                className="md:cursor-target inline-block mt-6 px-8 py-3 rounded-full bg-gradient-to-r from-white/10 via-white/5 to-white/10 text-white font-semibold tracking-wider border border-white/20 backdrop-blur-md transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-white/20 relative overflow-hidden"
              >
                <span className="relative z-10">📨 Reach Out</span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition duration-700 bg-white blur-xl" />
              </a>


              {/* Social Icons */}
              <div className="flex justify-center gap-8 flex-wrap pt-20">
                {[
                  {
                    href: "https://www.linkedin.com/in/dinesh-khichar-5265b4282/",
                    icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
                    color: "#0A66C2",
                  },
                  {
                    href: "https://x.com/IZEL_4582",
                    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968830.png",
                    color: "#1DA1F2",
                  },
                  {
                    href: "https://instagram.com/dinesh_458252",
                    icon: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
                    color: "#E1306C",
                  },
                  {
                    href: "https://github.com/dineshkhichar569",
                    icon: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
                    color: "#000000",
                  },
                  {
                    href: "https://leetcode.com/u/DineshSunny/",
                    icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
                    color: "#000000",
                  },
                  {
                    href: "https://www.geeksforgeeks.org/user/wollver962d/?_gl=1*aslot6*_up*MQ..*_gs*MQ..&gclid=CjwKCAjw4efDBhATEiwAaDBpblgSo40PW4ABXWC1GQenuqBjEfzZul5heedj-p0xZt_e6v2_9rfgwBoClJsQAvD_BwE&gbraid=0AAAAAC9yBkDcSo3LmM-RejRscFLXbafzf",
                    icon: "https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg",
                    color: "#000000",
                  },
                ].map(({ href, icon, color }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative md:w-20 w-14 md:h-20 h-14 sm:w-24 sm:h-24 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-xl overflow-hidden flex items-center justify-center transition-all duration-700 hover:scale-110"
                  >
                    {/* Outer Glow Aura */}
                    <div
                      className="absolute z-0 rounded-full w-full h-full blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500"
                      style={{
                        backgroundColor: color,
                        filter: `blur(16px)`,
                      }}
                    />

                    {/* Inner Gradient Ring */}
                    <div
                      className="absolute inset-0 rounded-full border-2 group-hover:border-white/30 border-transparent transition-all duration-700 animate-pulse"
                      style={{
                        boxShadow: `0 0 20px ${color}66, inset 0 0 8px ${color}33`,
                      }}
                    />

                    {/* Icon */}
                    <img
                      src={icon}
                      alt="icon"
                      loading="lazy"
                      className="w-8 md:w-10 h-8 md:h-10 sm:w-12 sm:h-12 z-10 drop-shadow-md group-hover:scale-110 transition-transform duration-500"
                    />
                  </a>
                ))}
              </div>



            </div>


          </div>


        </div>

        
      </section>
    </div>
  );
}

export default Contact;
