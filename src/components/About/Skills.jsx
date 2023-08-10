import { motion } from "framer-motion";
import React from "react";

const MySkills = ({ n, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full bg-black text-white font-semibold absolute cursor-pointer py-3 px-6 shadow-black hover:bg-red-600 dark:bg-white dark:text-dark dark:border-dark
      lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-white xs:font-bold
      "
      whileHover={{ scale: 1.06 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
    >
      {n}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl w-full text-center mt-64 capitalize pb-12 md:text-6xl sm:text-4xl md:mt-32">
        My skills
      </h2>
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full bg-circle dark:bg-circleDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
      lg:bg-circleLightLg lg:dark:bg-circleDarkLg
      md:bg-circleLightMd md:dark:bg-circleDarkMd
      sm:bg-circleLightSm sm:dark:bg-circleDarkSm
      "
      >
        <motion.div
          className="flex items-center justify-center rounded-full bg-black text-white font-semibold cursor-pointer p-8 shadow-black hover:bg-orange-400 hover:font-extrabold dark:bg-white dark:text-dark dark:border-dark xs:bg-transparent lg:py-6 md:p-4 xs:text-xs xs:p-2 xs:dark:bg-black xs:text-white xs:dark:text-white xs:font-bold"
          whileHover={{ scale: 1.06 }}
        >
          Web
        </motion.div>

        <MySkills n="CSS" x="-5vw" y="-10vw" />
        <MySkills n="SASS" x="-26vw" y="2vw" />
        <MySkills n="HTML" x="-15vw" y="-19vw" />
        <MySkills n="JavaScript" x="-2vw" y="-17vw" />
        <MySkills n="C#" x="-13vw" y="0vw" />
        <MySkills n="Fullstack" x="23vw" y="-16vw" />
        <MySkills n="Asp.Net Core MVC" x="-4vw" y="22vw" />
        <MySkills n="Asp.Net Core API" x="4vw" y="-22vw" />
        <MySkills n="ReactJS" x="-28vw" y="13vw" />
        <MySkills n="NextJS" x="22vw" y="17vw" />
        <MySkills n="NodeJS" x="-10vw" y="12vw" />
        <MySkills n="Bootstrap" x="7vw" y="17vw" />
        <MySkills n="MongoDB" x="32vw" y="4vw" />
        <MySkills n="MsSql" x="22vw" y="-10vw" />
        <MySkills n="Web Design" x="20vw" y="0vw" />
        <MySkills n="Firebase" x="12vw" y="-10vw" />
        <MySkills n="Tailwindcss" x="-22vw" y="-10vw" />
      </div>
    </>
  );
};

export default Skills;
