import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import ProgressIcon from "../ProgressIcon";

const Experiences = ({ pos, company, links, time, location, job }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:my-0 last:mb-0 w60 mx-auto flex flex-col items-center justify-between w80"
    >
      <ProgressIcon reff={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {pos}&nbsp;
          <a href={links} target={"_blank"} className="text-red-600 capitalize">
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-light xs:text-sm">
          {time} | {location}
        </span>
        <p className="font-medium w-full md:text-sm">{job}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64 sm:my-20">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl sm:text-4xl md:mt-32">
        Expereinces
      </h2>

      <div ref={ref} className="w75 mx-auto w90 md:w-full relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 h-full w4 bg-black origin-top w2 left30 left20"
        ></motion.div>

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Experiences
            pos="Frontend"
            company="Crocusoft"
            links="https://www.linkedin.com/in/lutfiyar-aliyev-b47b04268/"
            time="2023 Still"
            location="Baku"
            job="I'm currently working as intern for Crocusoft company"
          />
          <Experiences
            pos="Loading :)"
            company="Nothing"
            links="https://www.linkedin.com/in/lutfiyar-aliyev-b47b04268/"
            time="2023 Still"
            location="Somewhere"
            job="Curretly I'm looking for a job. I'm a junior web developer. I love my job and I believe myself. You can see my skills and my projects in my portfolio"
          />
          <Experiences
            pos="Loading :)"
            company="Nothing"
            links="https://www.linkedin.com/in/lutfiyar-aliyev-b47b04268/"
            time="2023 Still"
            location="Somewhere"
            job="Curretly I'm looking for a job. I'm a junior web developer. I love my job and I believe myself. You can see my skills and my projects in my portfolio"
          />
          <Experiences
            pos="Loading :)"
            company="Nothing"
            links="https://www.linkedin.com/in/lutfiyar-aliyev-b47b04268/"
            time="2023 Still"
            location="Somewhere"
            job="Curretly I'm looking for a job. I'm a junior web developer. I love my job and I believe myself. You can see my skills and my projects in my portfolio"
          />
          <Experiences
            pos="Loading :)"
            company="Nothing"
            links="https://www.linkedin.com/in/lutfiyar-aliyev-b47b04268/"
            time="2023 Still"
            location="Somewhere"
            job="Curretly I'm looking for a job. I'm a junior web developer. I love my job and I believe myself. You can see my skills and my projects in my portfolio"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
