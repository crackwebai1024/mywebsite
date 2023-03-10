import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export const Loader = (props: any) => {
  const { showLoader } = props;

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed z-20 flex items-center justify-center"
        >
          <div className="w-screen h-screen bg-white opacity-50" />
          <svg
            className="fixed w-20 h-20 text-indigo-300 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g className="fill-current">
              <path d="M12 22c5.52 0 10-4.48 10-10h-3c0 3.86-3.14 7-7 7v3Z" />
              <path d="M2 12C2 6.47 6.47 2 12 2v3c-3.87 0-7 3.13-7 7H2Z" />
            </g>
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
