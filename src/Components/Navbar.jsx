import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About Me.", path: "/about" },
  { label: "Gallary", path: "/gallary" },
  { label: "Skills", path: "/skills" },
  { label: "My Projects", path: "/project" },
  { label: "Contact", path: "/contact" },
];

const linkVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.05, duration: 0.3 },
  }),
};

const drawerVariants = {
  hidden: { x: "100%" },
  visible: { x: 0, transition: { duration: 0.4, ease: "easeInOut" } },
  exit: { x: "100%", transition: { duration: 0.3, ease: "easeInOut" } },
};

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full px-4 sm:px-6 py-4 relative z-50">
      <nav className="text-white flex justify-between items-center">
        <Link to="/" className="text-3xl sm:text-4xl font-semibold font-rubrik">
          Dinesh K.
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex list-none gap-10 md:gap-1 items-center">
          {navItems.map((item, i) => (
            <motion.li
              key={item.label}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={linkVariants}
              className="relative group"
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
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                  className="relative z-20"
                >
                  {item.label}
                </motion.span>

                {/* Liquid underline effect */}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-500 group-hover:w-full transition-all duration-300 ease-in-out blur-sm rounded-full" />
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-200 group-hover:w-full transition-all duration-300 ease-in-out delay-100" />
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>
      </nav>

      {/* Right-side popup menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="drawer"
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 w-[270px] h-screen bg-white/5 backdrop-blur-xl border-l border-white/10 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)] flex flex-col px-6 py-8 gap-6 z-40 overflow-hidden"
          >
            {/* Close Button */}
            <button
              className="text-white text-2xl self-end mb-4"
              onClick={() => setMenuOpen(false)}
            >
              &times;
            </button>

            {navItems.map((item, i) => (
              <motion.div
                key={item.label}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={linkVariants}
              >
                <Link
                  to={item.path}
                  className="text-xl font-semibold text-white hover:text-cyan-400"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
