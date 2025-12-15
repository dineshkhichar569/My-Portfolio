import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
// import ClickSpark from "../React-Bits/ClickSpark";    //////  Temporary off
import TargetCursor from "../React-Bits/TargetCursor";

const HireMe = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_w0uh19y",
        "template_drsm6xr",
        form.current,
        "ZS_4gZCNQUb7kD0Bk"
      )
      .then(
        () => {
          setSent(true);
          setLoading(false);
          form.current.reset();
          setTimeout(() => setSent(false), 4000);
        },
        (error) => {
          alert("Failed to send message. Try again later.");
          setLoading(false);
        }
      );
  };

  return (
    <div className="relative min-h-screen w-full px-6 py-20 bg-gradient-to-br from-[#0f0c29] via-[#000000] to-[#24243e] text-white overflow-hidden">

      {/* <ClickSpark/> */}
      <TargetCursor/>

      {/* Blurred Glass Layer */}
      <div className="absolute inset-0 backdrop-blur-md bg-black/5 z-0" />


      {/* Success Toast */}
      {sent && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-green-500 text-white px-6 py-3 rounded-full shadow-xl">
          ✅ Message sent successfully!
        </div>
      )}


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


      {/* Heading Hire Me */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center text-5xl font-extrabold text-white mb-14 tracking-wide"
      >
        Hire Me!
        <p className="text-lg font-extralight text-gray-300 mt-[10px]">I’m available for freelance, contract, or full-time roles.</p>
      </motion.h1>


      <form
        ref={form}
        onSubmit={sendEmail}
        className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full bg-transparent border-b border-white/30 focus:border-cyan-400 text-white placeholder-white/40 py-3 px-2 outline-none transition-all duration-300"
          />
        </motion.div>

        {/* Email */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full bg-transparent border-b border-white/30 focus:border-cyan-400 text-white placeholder-white/40 py-3 px-2 outline-none transition-all duration-300"
          />
        </motion.div>

        {/* Phone */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <input
            type="tel"
            name="phone"
            required
            placeholder="Phone Number"
            className="w-full bg-transparent border-b border-white/30 focus:border-cyan-400 text-white placeholder-white/40 py-3 px-2 outline-none transition-all duration-300"
          />
        </motion.div>

        {/* Work Type */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <input
            type="text"
            name="work"
            required
            placeholder="What work do you need?"
            className="w-full bg-transparent border-b border-white/30 focus:border-cyan-400 text-white placeholder-white/40 py-3 px-2 outline-none transition-all duration-300"
          />
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="md:col-span-2"
        >
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Your Message"
            className="w-full bg-transparent border-b border-white/30 focus:border-cyan-400 text-white placeholder-white/40 py-3 px-2 outline-none transition-all duration-300"
          />
        </motion.div>

        {/* Submit Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="md:col-span-2 flex justify-center"
        >
          <button
            type="submit"
            disabled={loading}
            className={`cursor-target px-10 py-3 text-white font-medium text-lg rounded-full transition-all duration-300 shadow-lg ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105 shadow-cyan-500/30"
            }`}
          >
            {loading ? "Sending..." : "Send Request"}
          </button>
        </motion.div>
      </form>


    </div>
  );
};

export default HireMe;
