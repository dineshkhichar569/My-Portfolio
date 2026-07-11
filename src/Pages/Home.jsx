import React from "react";
import { Link } from "react-router-dom";
import PopUpPhoto from "./PopUpPhoto";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import DesktopSetup from "../Components/DesktopSetup";
import BackgroundImage from "../assets/background2.webp";
import ClickSpark from "../React-Bits/ClickSpark"; //////  Temporary off
import TargetCursor from "../React-Bits/TargetCursor";

function Home() {
  const trueBadges = [
    {
      label: "React",
      icon: (
        <svg viewBox="0 0 24 24" className="h-4 w-4 text-cyan-400" fill="none">
          <circle cx="12" cy="12" r="1.8" fill="currentColor" />
          <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse cx="12" cy="12" rx="9.5" ry="3.8" />
            <ellipse
              cx="12"
              cy="12"
              rx="9.5"
              ry="3.8"
              transform="rotate(60 12 12)"
            />
            <ellipse
              cx="12"
              cy="12"
              rx="9.5"
              ry="3.8"
              transform="rotate(120 12 12)"
            />
          </g>
        </svg>
      ),
    },
    {
      label: "Node.js",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4 text-green-500"
          fill="currentColor"
        >
          <path d="M12 1.85l9 5.2v9.9l-9 5.2-9-5.2V7.05l9-5.2zm0 2.3L5 8.2v7.6l7 4.05 7-4.05V8.2L12 4.15z" />
        </svg>
      ),
    },
    {
      label: "Express",
      icon: (
        <span className="text-[13px] font-semibold italic text-gray-300 leading-none">
          ex
        </span>
      ),
    },
    {
      label: "MongoDB",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4 text-green-500"
          fill="currentColor"
        >
          <path d="M12 2c2.5 4 5 6.5 5 11 0 4-2.2 6.5-4.3 7.2l-.4 1.6h-.6l-.4-1.6C9.2 19.5 7 17 7 13c0-4.5 2.5-7 5-11z" />
        </svg>
      ),
    },
    {
      label: "REST APIs",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4 text-sky-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17.5 19a4.5 4.5 0 00.5-8.97A6 6 0 006 9.5 4 4 0 006.5 19h11z" />
        </svg>
      ),
    },
    {
      label: "Auth & Security",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4 text-green-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <TargetCursor spinDuration={2} hideDefaultCursor={true} />

      <ClickSpark />
      <Navbar />

      <div className="relative z-0 w-full cursor-normal">
        <div className="h-screen flex flex-col gap-10 sticky -top-36">
          {/* for Home Background */}
          <img
            src={BackgroundImage}
            alt="Background"
            loading="lazy"
            className="absolute top-0 left-0 w-full h-[130%] object-cover -z-50"
          />

          <main className="flex justify-start h-full mt-32">
            <div className="left p-3 flex flex-col gap-10 items-start relative">
              <div className="flex flex-col gap-10 px-4 sm:px-10 md:pl-20 text-white">
                <h1 className="my-name text-4xl sm:text-5xl md:text-xl lg:text-7xl cursor-normal">
                  <span>H</span>
                  <span>E</span>
                  <span>L</span>
                  <span>L</span>
                  <span>O</span>
                  <span>!</span>
                </h1>

                <div className="relative z-0 text-white max-w-full md:max-w-4xl">
                  <h2 className="text-3xl font-rubrik sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-[#00ff88] via-white to-[#00cfff] text-transparent bg-clip-text drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)] animate-slide-up">
                    I'm Dinesh Khichar
                  </h2>
                  <p className="mt-4 sm:mt-6 font-rubrik text-sm sm:text-xl md:text-xl font-semibold text-gray-200 drop-shadow-md animate-fade-delay tracking-widest">
                    Full-Stack MERN Developer building clean and scalable web
                    apps.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-6 px-4 sm:px-8 md:px-10 md:pl-20 max-w-6xl w-full mx-auto">
                {/* Buttons */}
                <div className="flex flex-row gap-4 sm:gap-6">
                  {/* Hire Me Button */}
                  <div className="cursor-target rounded-xl">
                    <Link
                      to="/hire"
                      className="group relative inline-flex items-center justify-center w-auto px-3 sm:px-6 md:px-5 py-2 sm:py-3 font-semibold text-lime-300 text-base sm:text-base md:text-lg lg:text-xl uppercase tracking-[0.1em] sm:tracking-[0.2em] rounded-xl bg-black border border-lime-500/30 overflow-hidden shadow-[0_0_20px_rgba(132,204,22,0.15)] transition-all duration-700 hover:scale-[1.03] hover:text-black hover:bg-lime-300/10 backdrop-blur-md"
                    >
                      <span className="absolute inset-[-3px] z-0 rounded-xl bg-[conic-gradient(at_top_left,_#00ff99,_#00ffcc,_#00ff99)] blur-xl opacity-20 group-hover:opacity-70 animate-rotate-border"></span>
                      <span className="absolute top-0 left-[-150%] w-full h-full bg-gradient-to-r from-lime-300 via-lime-500/20 to-transparent opacity-10 skew-x-[-15deg] group-hover:animate-shimmer-glow z-10"></span>
                      <span className="relative z-20 flex items-center gap-1 sm:gap-3">
                        <span className="font-rubrik w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-lime-400 animate-ping shadow-[0_0_6px_rgba(132,204,22,0.7)]"></span>
                        Hire Me!
                        <svg
                          className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          loading="lazy"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </span>
                    </Link>
                  </div>

                  {/* Projects Button */}
                  <div>
                    <Link
                      to="/project"
                      className="cursor-target font-rubrik inline-flex items-center justify-center gap-1 sm:gap-2 rounded-xl border-[2px] border-white/15 bg-black/40 px-3 sm:px-6 md:px-5 py-2 sm:py-3 font-semibold text-white backdrop-blur transition hover:border-white/40 text-base sm:text-base md:text-lg"
                    >
                      View Projects
                      <svg
                        className="h-4 w-4 sm:h-5 sm:w-5 opacity-80"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 5v14M5 12h14"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* //! Trust badges */}
                <div className="flex flex-wrap lg:justify-start items-center gap-2 sm:gap-3 text-[11px] sm:text-xs text-gray-200">
                  {trueBadges.map((badge, i) => (
                    <span
                      key={badge.label}
                      style={{
                        animation: `floatY 3s ease-in-out infinite`,
                        animationDelay: `${i * -1}s`,
                      }}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-black/50 px-3 py-1 will-change-transform"
                    >
                      {badge.icon}
                      {badge.label}
                    </span>
                  ))}
                </div>

                {/* //! Quick stats */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-2 sm:pt-4">
                  <div className="rounded-xl border border-white/20 bg-black/0 px-3 sm:px-4 py-3 text-center backdrop-blur">
                    <div className="text-sm sm:text-base md:text-lg font-extrabold text-white">
                      End-to-End Delivery
                    </div>
                    <div className="text-[10px] sm:text-[11px] tracking-wider text-gray-400">
                      From Concept to Launch
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/20 bg-black/0 px-4 sm:px-5 py-3 sm:py-4 text-center backdrop-blur">
                    <div className="text-lg sm:text-xl md:text-2xl font-extrabold text-white">
                      5★
                    </div>
                    <div className="text-[10px] sm:text-xs tracking-wider text-gray-400">
                      Client Rating
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/20 bg-black/0 px-4 sm:px-5 py-3 sm:py-4 text-center backdrop-blur">
                    <div className="text-lg sm:text-xl md:text-2xl font-extrabold text-white">
                      100%
                    </div>
                    <div className="text-[10px] sm:text-xs tracking-wider text-gray-400">
                      On-time Delivery
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>

        <PopUpPhoto />

        <DesktopSetup />
        <Footer />
      </div>
    </>
  );
}

export default Home;
