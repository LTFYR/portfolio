import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import ProgressIcon from "../ProgressIcon";

const Courses = ({ type, time, location, detail }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="w60 my-8 first:my-0 last:mb-0 mx-auto flex flex-col items-center justify-between md80"
    >
      <ProgressIcon reff={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="capitalize font-medium text-light xs:text-sm">
          {time} | {location}
        </span>
        <p className="font-medium w-full md:text-sm">{detail}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64 sm:my-20">
      <h2 className="font-bold text-8xl mb-32 w-full text-center  md:text-6xl sm:text-4xl md:mt-32">
        Education
      </h2>

      <div ref={ref} className="w75 mx-auto l90 md:w-full relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 h-full w4 w2 left30 left20 bg-black origin-top"
        ></motion.div>

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Courses
            type="Bachelor Of Science In Computer Science"
            company="Code Academy"
            time="2021-2022"
            location="Code Academy"
            detail="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering,C# language and its frameworks"
          />
          <Courses
            type="Certificates in programming courses"
            company="John Smilga"
            time="2021-2023"
            location="John Smilga"
            detail="Many things, many lessons. JavaScript, ReactJS, NodeJS,Redux, Redux ToolKit. Project based learning. "
          />
          <Courses
            type="Online Coursework"
            company="Coursera and Udemy"
            time="2021-2023"
            location="Coursera and Udemy"
            detail="Completed coursework in many topics as ReactJS, NodeJS, NextJS, MongoDB,Asp.Net Core, Algorithms and etc."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
