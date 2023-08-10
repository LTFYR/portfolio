import Layout from "@/components/Home/Layout";
import { Text } from "@/components/Text";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

import article from "../../public/images/profile/article.jpg";
import article2 from "../../public/images/profile/article2.png";
import article3 from "../../public/images/profile/article3.jpg";
import PageTransition from "@/components/PageTransition";
import MyAnimatedCursor from "@/components/MyAnimatedCursor";

const MyImage = motion(Image);

const ImgAnimate = ({ img, title, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const newRef = useRef(null);

  function handleMove(e) {
    newRef.current.style.display = "inline-block";
    x.set(e.pageX);
    y.set(-10);
  }

  function handleLeave(e) {
    newRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <h2>{title}</h2>
      <MyImage
        style={{ x: x, y: y }}
        ref={newRef}
        src={img}
        alt={title}
        className="w-96 h-auto hidden absolute rounded-lg z-40"
      />
    </Link>
  );
};

const AllNews = ({ time, img, link, title }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full flex items-center justify-between bg-white text-black p-4 py-6 my-4 rounded-xl border border-solid border-black border-r-4 border-b-4"
    >
      <ImgAnimate title={title} img={img} link={link} />
      <span className="text-right text-red-600 cursor-help">{time}</span>
    </motion.li>
  );
};

const News = ({ title, time, img, link, by }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [30, -30]);

  const item = {
    hidden: {
      opacity: 0,
      x: -50,
      y: -50,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };
  return (
    <motion.li
      // initial={{ opacity: 0, translateX: -50, translateY: -50 }}
      // animate={{ opacity: 1, translateX: 0, translateY: 0 }}
      // transition={{ duration: 0.3, delay: 2 * 0.5 }}
      // variants={variants}
      // initial="hidden"
      // animate="show"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragElastic={0.18}
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      whileTap={{ cursor: "grabbing" }}
      variants={item}
      className="flex flex-col gap-3 border border-solid border-white p-6 rounded-3xl bg-red-600 text-white cursor-grab"
    >
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden h-full rounded-lg"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto border-2 border-solid border-gray-600 rounded-2xl hover:scale-[1.1] hover:rotate-3 hover:border-solid hover:border-gray-600 hover:rounded-2xl hover:border-2"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="font-semibold hover:underline">{title}</h2>
      </Link>
      <div className="flex gap-3">
        <p className="text-sm text-white">{by}</p> /{" "}
        <span className="text-sm text-white">{time}</span>
      </div>
    </motion.li>
  );
};

const news = () => {
  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <>
      <Head>
        <title>LTFYR | News</title>
        <meta name="description" content="news page" />
      </Head>
      <PageTransition />

      <main className="w-full flex flex-col mb-16 items-center justify-center overflow-hidden">
        <Layout className="pt-16 sm:p-4 lg:p-8">
          <Text
            text="Science can make the different world"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <motion.ul
            style={{ perspective: 2000 }}
            variants={variants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-16"
          >
            <News
              title="Developers watch out for these burnout symptoms"
              img={article}
              by="Lutfiyar Aliyev"
              time=" 20 MARCH 2023"
              link="/"
            />
            <News
              title="How to be appreciated for your hard work as a developer"
              img={article2}
              by="Orkhan Samedov"
              time="13 MARCH 2022"
              link="/"
            />
            <News
              title="How designers and developers can make it better"
              img={article3}
              by="Efe Güngör"
              time=" 22 April 2023"
              link="/"
            />
          </motion.ul>
          <h2 className="w-full font-bold text-4xl my-16 mt-32 text-center dark:text-light">
            All News
          </h2>
          <ul className="w-full ">
            <AllNews
              title="What is state in ReactJS? What are the features of React?"
              time="March 23 2023"
              link="https://react.dev/learn"
              img={article2}
            />
            <AllNews
              title="What is the virtual DOM?And can web browsers read JSX directly?"
              time="March 23 2023"
              link="https://react.dev/learn"
              img={article2}
            />
            <AllNews
              title="Why use React instead of other frameworks, like Angular?"
              time="March 23 2023"
              link="https://react.dev/learn"
              img={article2}
            />
            <AllNews
              title="What is the difference between the ES6 and ES5 standards?"
              time="March 23 2023"
              link="https://react.dev/learn"
              img={article2}
            />
            <AllNews
              title=" How do you create a React app in ReactJS?"
              time="March 23 2023"
              link="https://react.dev/learn"
              img={article2}
            />
            <AllNews
              title="What is an event in React? How do you create an event in React?"
              time="March 23 2023"
              link="https://react.dev/learn"
              img={article2}
            />
            <AllNews
              title="Explaining of how lists work in React. Why is there a need for using keys in Lists?"
              time="March 23 2023"
              link="https://react.dev/learn"
              img={article2}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default news;
