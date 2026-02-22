import { motion } from "framer-motion";
import { ShieldBanIcon } from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function DataFolder() {
  const navigate = useNavigate();
  return (
    <div className="bg-black min-h-screen overflow-hidden">
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
        className="flex md:justify-normal items-center md:gap-20 gap-10 md:p-24 pt-32 justify-center"
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
          <motion.img
            className="md:h-48 md:w-48 h-28 w-28 cursor-pointer drop-shadow-[0_0_18px_rgba(0,255,255,0.18)]"
            onClick={() => navigate("/private")}
            src="/privateFolder.webp"
            alt=""
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 140, damping: 14 }}
            whileHover={{
              scale: 1.08,
              rotate: -2,
              filter: "drop-shadow(0 0 22px rgba(0,255,255,0.38))",
            }}
            whileTap={{ scale: 0.98 }}
          />
          <motion.span
            className="flex gap-2 text-red-400 md:text-xl text-base font-bold text-center mt-3 tracking-wide"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.18 }}
            whileHover={{
              textShadow: "0 0 18px rgba(255,255,255,0.25)",
            }}
          >
            <ShieldBanIcon/>
            Private Files
          </motion.span>

          <motion.p
            className="text-red-300 md:text-xs text-[9px] text-center mt-1 tracking-widest uppercase"
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.08em" }}
            transition={{ duration: 0.6, delay: 0.28 }}
            whileHover={{
              color: "#ffffff",
              textShadow: "0 0 12px rgba(255,255,255,0.35)",
            }}
          >
            secure • locked • access
          </motion.p>
        </motion.div>

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
          <motion.img
            className="md:h-48 md:w-48 h-28 w-28 cursor-pointer drop-shadow-[0_0_18px_rgba(255,255,255,0.10)]"
            src="/publicFolder.webp"
            alt=""
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 140,
              damping: 14,
              delay: 0.05,
            }}
            whileHover={{
              scale: 1.08,
              rotate: 2,
              filter: "drop-shadow(0 0 22px rgba(255,255,255,0.22))",
            }}
            whileTap={{ scale: 0.98 }}
          />
          <motion.span
            className="text-white md:text-xl text-base font-bold text-center mt-3 tracking-wide"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.18 }}
            whileHover={{
              textShadow: "0 0 18px rgba(255,255,255,0.25)",
            }}
          >
            Public Files
          </motion.span>

          <motion.p
            className="text-white/50 md:text-xs text-[9px] text-center mt-1 tracking-widest uppercase"
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.08em" }}
            transition={{ duration: 0.6, delay: 0.28 }}
            whileHover={{
              color: "#ffffff",
              textShadow: "0 0 12px rgba(255,255,255,0.35)",
            }}
          >
            open • explore • view
          </motion.p>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default DataFolder;
