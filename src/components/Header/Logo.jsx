import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Motion = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <Motion
        href="/"
        className="w-16 h-16 sm:w-10 sm:h-10 rounded-full bgred text-white flex items-center justify-center text-2xl sm:text-sm font-bold"
        whileHover={{
          backgroundColor: [
            "rgba(253,29,29,1)",
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        AL
      </Motion>
    </div>
  );
};

export default Logo;
