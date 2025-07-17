import React, { useEffect, useRef, useState } from "react";
import image from "../assets/7.jpg";
import { Link } from "react-router-dom";

function PopUpPhoto() {
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Trigger only when Section 2 is in full view
      if (rect.top <= 0 && Math.abs(rect.top) <= rect.height - windowHeight) {
        const scrollProgress =
          Math.abs(rect.top) / (rect.height - windowHeight);
        setProgress(Math.min(Math.max(scrollProgress, 0), 1));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const screenWidth = window.innerWidth;
  const boxWidth = screenWidth / 3;
  const startX = screenWidth - boxWidth - 320;
  const endX = 80;
  const currentX = startX - (startX - endX) * progress;

  return (
    <div className="text-white relative rounded-t-[50px] bg-gradient-to-b from-[#000000] via-[#1f1f2c] to-[#000000]">
      {/* Section - Scroll-Controlled Animation */}
      <section ref={sectionRef} className="relative md:h-[200vh] h-[100vh]">
        {/* Sticky Container */}
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Right Box */}
          <div className="md:absolute md:top-1/2 md:right-20 md:-translate-y-1/2 md:w-[45%] md:h-[80%] shadow-xl rounded-[50px] md:rounded-r-[50px] md:rounded-l-none flex items-center justify-center z-10">
            <div className="relative isolate w-full h-full p-10 md:p-16 rounded-[50px] md:rounded-r-[50px] md:rounded-l-none overflow-hidden bg-[#121720] shadow-[inset_0_0_30px_#1e40af] border border-indigo-500/20">
              {/* Glowing Portal Ring */}
              <div className="absolute inset-0 flex items-center justify-center z-0">
                <div className="w-[500px] h-[500px] rounded-full border-4 border-cyan-400/10 animate-spin-slow blur-3xl opacity-20" />
                <div className="absolute w-[200px] h-[200px] bg-cyan-500/10 blur-2xl rounded-full animate-pulse" />
              </div>

              {/* Space Dust Particles */}
              <div className="absolute inset-0 z-0">
                <div className="w-full h-full bg-[radial-gradient(circle,#94a3b8_1px,transparent_1px)] [background-size:30px_30px] opacity-10 animate-pulse" />
              </div>

              {/* Foreground Content */}
              <div className="relative z-10 text-center text-white">
                
                {/* Static Image for small screens */}
                <div className="md:hidden mb-6">
                  <div className="w-full h-64 overflow-hidden rounded-3xl shadow-lg">
                    <img
                      src={image}
                      alt="Static Image"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>

                <h2 className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-br from-white via-slate-200 to-gray-400 text-transparent bg-clip-text tracking-tight mb-6">
                  WORK ETHIC BEATS FEAR
                </h2>
                <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  NOBODY CARES UNTIL YOU'RE RICH, PRETTY OR DEAD
                </p>

                <div className="mt-10 mx-auto">
                  <a
                    href="/DOCs/DineshResume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 text-[#0f172a] font-bold shadow-lg hover:scale-105 hover:shadow-indigo-500/50 transition-all duration-300"
                  >
                    Dinesh's RESUME 🚀
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Animated Image for large screens */}
          <div
            className="hidden md:block bg-black absolute top-1/2 w-[50%] h-[80%] object-cover rounded-l-[50px] z-0"
            style={{
              transform: `translateY(-50%)`,
              left: `${currentX}px`,
              opacity: progress,
              transition: "left 0.05s linear, opacity 0.05s linear",
            }}
          >
            <div className="group relative w-full h-full rounded-[50px] overflow-hidden shadow-[0_0_80px_rgba(0,112,243,0.3)] transition-all duration-700 hover:shadow-[0_0_100px_rgba(56,189,248,0.5)]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-blue-300/5 to-transparent backdrop-blur-xl border border-blue-400/20 rounded-3xl z-10"></div>

              <img
                src={image}
                alt="Your Image"
                className="relative z-20 object-cover w-full h-full rounded-xl transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PopUpPhoto;
