import React from "react";

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl h-[90vh] bg-[#0d0d0d] rounded-xl overflow-hidden shadow-lg border border-white/10">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-white text-xl hover:text-red-500 transition"
          onClick={onClose}
        >
          ✖
        </button>

        {/* Resume Viewer */}
        <iframe
          src="/Dinesh.pdf"
          title="My Resume"
          className="w-full h-full"
        ></iframe>

        {/* Download Button */}
        <a
          href="/resume.pdf"
          download
          className="absolute bottom-4 right-4 bg-white text-black font-semibold px-4 py-2 rounded-full shadow-md hover:bg-gray-200 transition"
        >
          Download
        </a>
      </div>
    </div>
  );
};

export default ResumeModal;
