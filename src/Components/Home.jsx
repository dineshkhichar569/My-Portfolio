import React from "react";
import { Link } from "react-router-dom";
import PopUpPhoto from "./PopUpPhoto";
import Navbar from "./Navbar";
import Footer from "./Footer";
import DesktopSetup from "./DesktopSetup";

function Home() {
  return (
    <div className="relative z-0 w-full">
      <div className="BACKIMAGE flex flex-col gap-20 h-full sticky -top-0">

        <Navbar />

        <main className="flex justify-start h-full">
          <div className="left w-full p-3 flex flex-col items-start gap-[100px] md:gap-[150px] lg:gap-[200px] relative">
            <div className="flex flex-col gap-0 px-4 sm:px-10 md:pl-20 w-full text-white">
              <h1 className="my-name text-4xl sm:text-5xl md:text-xl lg:text-7xl">
                <span>H</span>
                <span>E</span>
                <span>L</span>
                <span>L</span>
                <span>O</span>
                <span>!</span>
              </h1>

              <div className="relative z-0 text-white max-w-full md:max-w-4xl">
                <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-[#00ff88] via-white to-[#00cfff] text-transparent bg-clip-text drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)] animate-slide-up">
                  I'm a MERN Stack Developer!
                </h2>
                <p className="mt-4 sm:mt-6 text-xl sm:text-2xl md:text-3xl font-semibold text-gray-200 drop-shadow-md animate-fade-delay tracking-widest">
                  Your idea, my code. Let's build it together.
                </p>
              </div>
            </div>


            {/* Hire Me Button */}
            <div className="rounded-xl absolute bottom-[150px] sm:bottom-[40px] md:bottom-[60px] lg:bottom-[70px] left-6 sm:left-[100px] md:left-[150px] lg:left-[200px]">
              <Link
                to="/hire"
                className="group relative inline-flex items-center justify-center px-6 sm:px-10 md:px-12 py-3 sm:py-4 font-semibold text-lime-300 text-sm sm:text-base md:text-lg lg:text-xl uppercase tracking-[0.15em] sm:tracking-[0.25em] rounded-xl bg-black border border-lime-500/30 overflow-hidden shadow-[0_0_30px_rgba(132,204,22,0.15)] transition-all duration-700 hover:scale-[1.03] hover:text-black hover:bg-lime-300/10 backdrop-blur-md"
              >
                <span className="absolute inset-[-3px] z-0 rounded-xl bg-[conic-gradient(at_top_left,_#00ff99,_#00ffcc,_#00ff99)] blur-xl opacity-20 group-hover:opacity-70 animate-rotate-border"></span>
                <span className="absolute top-0 left-[-150%] w-full h-full bg-gradient-to-r from-lime-300 via-lime-500/20 to-transparent opacity-10 skew-x-[-15deg] group-hover:animate-shimmer-glow z-10"></span>
                <span className="relative z-20 flex items-center gap-2 sm:gap-3">
                  <span className="w-2 h-2 rounded-full bg-lime-400 animate-ping shadow-[0_0_8px_rgba(132,204,22,0.7)]"></span>
                  Hire Me!
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>

          </div>
        </main>
      </div>

      <PopUpPhoto />

      <div className="text-white relative h-screen">
        <DesktopSetup/>

        <div className="w-full absolute -bottom-[300px]">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
