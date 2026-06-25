// CinematicDesk.jsx
import React from "react";
import setupImage from "../assets/Setup.webp";
import Tilt from "react-parallax-tilt";
import InfiniteMarquee from "./Marguee/InfiniteMarque";
// import ClickSpark from "../React-Bits/ClickSpark";   //////  Temporary off

export default function DesktopSetup() {
  return (
    <>
      <section className="relative w-full md:min-h-screen h-[600px] overflow-hidden text-white font-sans">
        {/* Fullscreen Background Image */}
        <img
          src={setupImage}
          alt="Desk Setup"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.25] blur-[2px] scale-105 z-0"
        />

        {/* animated background color */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-indigo-800/10 to-indigo-500/10 animate-pulse z-0" />

        {/* Left Fade */}
        <div className="absolute left-0 top-0 z-20 h-full w-[70px] md:w-[320px] pointer-events-none bg-gradient-to-r from-[#000000] to-transparent" />

        {/* Right Fade */}
        <div className="absolute right-0 top-0 z-20 h-full w-[70px] md:w-[320px] pointer-events-none bg-gradient-to-l from-[#000000] to-transparent" />

        {/* Reviews Section */}
        <div className="relative z-10 md:min-h-screen h-[600px] flex items-center md:mt- mt-0 md:mb-0 mb-0 justify-center">
          <InfiniteMarquee />
        </div>
      </section>
    </>
  );
}
