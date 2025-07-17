// BagPopUp.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function BagPopUp() {
  const [showBoxes, setShowBoxes] = useState(false);

  const toggleBoxes = () => setShowBoxes(!showBoxes);

  return (
    <div className="relative p-10">
      <button
        onClick={toggleBoxes}
        className="w-14 h-14 bg-blue-600 text-white text-2xl rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition"
      >
        👜
      </button>

      <AnimatePresence>
        {showBoxes && (
          <motion.div
            className="absolute top-20 left-[100px] flex gap-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {["h", 2, 3, 4, 5].map((num) => (
              <motion.div
                key={num}
                className="w-[100px] h-[100px] bg-green-500 text-white flex items-center justify-center rounded-xl shadow-md"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.3, delay: num * 0.05 }}
              >
                {num}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default BagPopUp;
