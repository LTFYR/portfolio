import React from "react";
import { motion } from "framer-motion";

const PageTransition = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 right-full bottom-0 w-screen h-screen z-40 bg-red-600"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="fixed top-0 right-full bottom-0 w-screen h-screen z-30 bg-blue-600"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: "0.2", duration: 0.7, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="fixed top-0 right-full bottom-0 w-screen h-screen z-20 bg-indigo-600"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: "0.4", duration: 0.7, ease: "easeInOut" }}
      ></motion.div>
    </>
  );
};

export default PageTransition;
