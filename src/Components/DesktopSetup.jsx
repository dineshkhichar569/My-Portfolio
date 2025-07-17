// CinematicDesk.jsx
import React from "react";
import setupImage from "../assets/Setup.jpg";
import { motion } from "framer-motion";
import Tilt from 'react-parallax-tilt';

export default function DesktopSetup() {
  return (
    <section className="relative w-full h-screen overflow-hidden text-white font-sans">
      {/* Fullscreen Background Image */}
      <img
        src={setupImage}
        alt="Desk Setup"
        className="absolute inset-0 w-full h-full object-cover brightness-[0.25] blur-[2px] scale-105 z-0"
      />

      {/* Soft animated particle overlay (optional custom version can be used) */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-indigo-800/10 to-indigo-500/10 animate-pulse z-0" />

      {/* Glowing Aura */}
      <div className="absolute w-[700px] h-[700px] bg-indigo-500/20 rounded-full blur-[200px] -z-0 top-[30%] left-[60%] animate-pulse" />

      {/* Frosted Glass Card with Tilt and Animation */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <Tilt
          tiltMaxAngleX={8}
          tiltMaxAngleY={8}
          perspective={1000}
          transitionSpeed={1000}
          scale={1.02}
          glareEnable={true}
          glareMaxOpacity={0.15}
          glareColor="#ffffff"
          glarePosition="all"
          className="w-full max-w-xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="w-full backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 shadow-[0_0_60px_rgba(99,102,241,0.2)] hover:shadow-[0_0_100px_rgba(99,102,241,0.4)] transition-all"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-indigo-400">Where I Create</h2>
            <p className="text-white/80 text-lg mb-6 leading-relaxed">
              This is more than a desk. It's where I think, break things, fix them, and build something better.
              The glow, the silence, the code — this is my zone.
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/70 text-base">
              <li>Samsung Galaxy Book 2</li>
              <li>27" M5 Samsung Monitor</li>
              <li>RGB Mechanical Keyboard</li>
              <li>Samsung Tab S10 for Notes</li>
              <li>Ambient Clock & Minimal Light</li>
            </ul>
          </motion.div>
        </Tilt>
      </div>
    </section>
  );
}