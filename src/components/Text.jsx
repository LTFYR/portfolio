import React from "react";
import { motion } from "framer-motion";

const textMotion = {
  initial: {
    opacity: 1,
  },
  animation: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.07,
    },
  },
};

const spanMotion = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animation: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export const Text = ({ text, className = "" }) => {
  return (
    <div className="w-full mx-auto flex items-center justify-center py-2 text-center">
      <motion.h1
        className={`inline-block w-full text-light font-bold capitalize text-6xl ${className}`}
        variants={textMotion}
        initial="initial"
        animate="animation"
      >
        {text.split(" ").map((a, b) => (
          <motion.span
            key={a + "-" + b}
            className="inline-block"
            variants={spanMotion}
          >
            {a}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};
