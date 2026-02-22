import { motion } from "framer-motion";
import { File, ShieldBan, ShieldBanIcon } from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function DataFolder() {
  const navigate = useNavigate();
  return (
    <div className="bg-black min-h-screen overflow-hidden p-3">
      {/* Background blobs */}
      <div className="abstract-blobs z-0">
        <span className="blob blob1"></span>
        <span className="blob blob2"></span>
        <span className="blob blob3"></span>
        <canvas
          id="blobCanvas"
          className="absolute top-0 left-0 w-full h-full z-[-1]"
        ></canvas>
      </div>

      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-8 left-8 z-50"
      >
        <Link to={-1}>
          <motion.div
            className="w-9 h-9 rounded-full flex items-center justify-center text-white text-base font-medium cursor-pointer backdrop-blur-md bg-white/10 border border-white/20 shadow-[0_0_8px_rgba(0,255,255,0.2)]"
            whileHover={{
              scale: 1.15,
              rotate: -8,
              boxShadow: "0 0 12px rgba(0,255,255,0.4)",
              backgroundColor: "rgba(0, 255, 255, 0.1)",
            }}
            whileTap={{
              scale: 0.95,
              rotate: 0,
              boxShadow: "0 0 16px rgba(0,255,255,0.5)",
            }}
            animate={{
              y: [0, -2, 0],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            ⟵
          </motion.div>
        </Link>
      </motion.div>

      {/* Main Contents */}
      <motion.section
        className="flex md:justify-normal items-center md:gap-20 gap-8 md:p-24 pt-32 justify-center"
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.18, delayChildren: 0.1 },
          },
        }}
      >
        {/* Private */}
        <motion.div
          className="flex flex-col justify-center items-center"
          variants={{
            hidden: { opacity: 0, y: 18, scale: 0.98 },
            show: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { type: "spring", stiffness: 120, damping: 14 },
            },
          }}
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 160, damping: 14 }}
        >
          <a
            href="/private"
            className="group relative flex flex-col items-center justify-center"
          >
            {/* for background glow */}
            <div className="absolute inset-0 blur-3xl opacity-0 group-hover:opacity-60 transition duration-500 bg-red-500/10 rounded-full" />

            {/* ICON CARD */}
            <motion.div
              className="relative p-6 rounded-2xl border border-red-500/20 bg-gradient-to-b from-red-500/5 to-transparent backdrop-blur-md"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 12 }}
              whileHover={{
                scale: 1.1,
                rotate: -2,
                boxShadow: "0 0 40px rgba(255,0,0,0.18)",
              }}
              whileTap={{ scale: 0.96 }}
            >
              <ShieldBan className="md:h-48 md:w-48 h-28 w-28 text-red-400 transition duration-300 group-hover:text-red-300 drop-shadow-[0_0_18px_rgba(255,0,0,0.25)]" />
            </motion.div>

            {/* TITLE */}
            <motion.span
              className="mt-4 flex gap-2 md:text-xl text-base font-bold text-center tracking-wide text-red-400 transition duration-300 group-hover:text-white"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              🔒 Private Files
            </motion.span>

            <motion.p
              className="text-red-300 md:text-xs text-[10px] text-center mt-1 tracking-[0.2em] uppercase transition duration-300 group-hover:text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              admin only • secure
            </motion.p>
          </a>
        </motion.div>

        {/* Public */}
        <motion.div
          className="flex flex-col justify-center items-center"
          variants={{
            hidden: { opacity: 0, y: 18, scale: 0.98 },
            show: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { type: "spring", stiffness: 120, damping: 14 },
            },
          }}
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 160, damping: 14 }}
        >
          <a
            href="/public"
            className="group relative flex flex-col items-center justify-center"
          >
            {/* form background glow */}
            <div className="absolute inset-0 rounded-full blur-3xl opacity-0 group-hover:opacity-70 transition duration-500 bg-cyan-400/10" />

            {/* ICON CARD */}
            <motion.div
              className="relative p-6 rounded-2xl border border-cyan-400/20 bg-gradient-to-b from-cyan-400/5 to-transparent backdrop-blur-md"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 12 }}
              whileHover={{
                scale: 1.1,
                rotate: 2,
                boxShadow: "0 0 40px rgba(0,255,255,0.18)",
              }}
              whileTap={{ scale: 0.96 }}
            >
              <File className="md:h-48 md:w-48 h-28 w-28 text-cyan-400 transition duration-300 group-hover:text-white drop-shadow-[0_0_18px_rgba(0,255,255,0.25)]" />
            </motion.div>

            {/* TITLE */}
            <motion.span
              className="mt-4 md:text-xl text-base font-bold text-center tracking-wide text-cyan-400 transition duration-300 group-hover:text-white"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              📂 Public Files
            </motion.span>
            <motion.p
              className="text-cyan-300 md:text-xs text-[10px] text-center mt-1 tracking-[0.2em] uppercase transition duration-300 group-hover:text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              open • accessible • shared
            </motion.p>
          </a>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default DataFolder;
