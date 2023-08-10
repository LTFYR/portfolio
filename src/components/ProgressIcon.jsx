import { useScroll, motion } from "framer-motion";
import React from "react";

const ProgressIcon = ({ reff }) => {
  const { scrollYProgress } = useScroll({
    target: reff,
    offset: ["center end", "center center"],
  });

  return (
    <figure className="absolute left-0 stroke-black">
      <svg
        className="-rotate-90 mdw60 mdh60 xsw40 xsh40"
        width="75"
        height="75"
        viewBox="0 0 100 100"
      >
        <circle
          cx="75"
          cy="50"
          r="20"
          className="!stroke-red-600 !stroke-1 !fill-none"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="sw5 !fill-white"
          style={{ pathLength: scrollYProgress }}
        />
        <circle
          cx="75"
          cy="50"
          r="20"
          className="animate-pulse !stroke-1 !fill-red-600"
        />
      </svg>
    </figure>
  );
};

export default ProgressIcon;
