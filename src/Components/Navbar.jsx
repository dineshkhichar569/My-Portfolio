import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import logo from "../assets/logo1.webp";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About Me.", path: "/about" },
  { label: "Gallary", path: "/gallary" },
  { label: "Skills", path: "/skills" },
  { label: "My Projects", path: "/project" },
  { label: "Contact", path: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main
      className={`fixed z-40 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
      ${scrolled ? "top-3 left-3 right-3" : "top-0 left-0 right-0"}`}
    >
      <div
        className={`w-full px-4 sm:px-6 py-3 ${
          scrolled
            ? "rounded-3xl bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-3xl border border-white/10  shadow-[0_20px_80px_rgba(0,0,0,0.6)]"
            : "rounded-none bg-transparent"
        } `}
      >
        <nav className="text-white flex justify-between items-center">
          <Link
            to="/"
            className="text-3xl sm:text-4xl font-semibold font-rubrik flex md:gap-4 gap-3 items-center"
          >
            <img src={logo} alt="D" className="md:w-12 w-9 md:h-12 h-9" />
            <span>Dinesh K.</span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex list-none gap-10 md:gap-1 items-center">
            {navItems.map((item, i) => (
              <motion.li
                key={item.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                className="relative group flex items-center"
              >
                <Link
                  to={item.path}
                  className="text-lg font-medium inline-block px-2 py-1 relative overflow-hidden"
                >
                  <motion.span
                    whileHover={{
                      color: "#00faff",
                      textShadow: "0px 0px 12px #00faff",
                    }}
                    transition={{ duration: 0.3 }}
                    className="relative z-20"
                  >
                    {item.label}
                  </motion.span>

                  {/* Liquid underline */}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-500 group-hover:w-full transition-all duration-300 ease-in-out blur-sm rounded-full" />
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-200 group-hover:w-full transition-all duration-300 ease-in-out delay-100" />
                </Link>
              </motion.li>
            ))}
            <Link
              to="/data-folder"
              className="ml-10 group relative inline-flex items-center justify-center gap-2 rounded-2xl px-3 py-2 font-semibold tracking-wide text-white bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/30 hover:bg-white/8 focus:outline-none focus:ring-2 focus:ring-emerald-400/40 focus:ring-offset-0"
            >
              {/* subtle neon glow on hover */}
              <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 bg-[radial-gradient(80%_120%_at_50%_0%,rgba(16,185,129,0.35)_0%,rgba(16,185,129,0)_55%)] transition-opacity duration-300 group-hover:opacity-100" />

              {/* icon */}
              <span className="relative grid place-items-center h-6 w-6 text-xs rounded-lg bg-emerald-500/10 border border-emerald-400/20 text-emerald-300 transition-colors duration-300 group-hover:bg-emerald-500/15 group-hover:border-emerald-400/35">
                📁
              </span>

              {/* text */}
              <span className="relative text-sm">
                Data Folder
                <span className="ml-2 text-emerald-300/80 transition group-hover:text-emerald-300">
                  →
                </span>
              </span>
            </Link>
          </ul>

          {/* Hamburger */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <div className="relative w-6 h-5">
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute left-0 w-6 h-0.5 origin-center bg-white"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="absolute top-2 left-0 w-6 h-0.5 bg-white"
              />
              <motion.span
                animate={
                  menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 w-6 h-0.5 bg-white"
              />
            </div>
          </button>
        </nav>
      </div>
      {/* Mobile Drawer (Slides from Top) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="drawer"
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
            className="fixed z-50 top-[90px] right-4 left-4 rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-3xl border border-white/10 shadow-[0_25px_100px_rgba(0,0,0,0.8)] p-6 flex flex-wrap items-center justify-center gap-6 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-r before:from-cyan-500/10 before:via-purple-500/10 before:to-pink-500/10 before:opacity-40 before:blur-2xl before:-z-10"
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="relative group"
              >
                <Link
                  to={item.path}
                  className="relative px-6 py-2 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white text-lg font-semibold shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-all duration-300 ease-out hover:scale-110 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 hover:border-cyan-400/40 hover:shadow-[0_15px_50px_rgba(0,255,255,0.3)] active:scale-95"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <Link
              to="/data-folder"
              className="group relative inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2 font-semibold tracking-wide text-white bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/30 hover:bg-white/8 focus:outline-none focus:ring-2 focus:ring-emerald-400/40 focus:ring-offset-0"
            >
              {/* subtle neon glow on hover */}
              <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 bg-[radial-gradient(80%_120%_at_50%_0%,rgba(16,185,129,0.35)_0%,rgba(16,185,129,0)_55%)] transition-opacity duration-300 group-hover:opacity-100" />

              {/* icon */}
              <span className="relative grid place-items-center h-8 w-8 text-xs rounded-lg bg-emerald-500/10 border border-emerald-400/20 text-emerald-300 transition-colors duration-300 group-hover:bg-emerald-500/15 group-hover:border-emerald-400/35">
                📁
              </span>

              {/* text */}
              <span className="relative text-base">
                Data Folder
                <span className="ml-2 text-emerald-300/80 transition group-hover:text-emerald-300">
                  →
                </span>
              </span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default Navbar;
