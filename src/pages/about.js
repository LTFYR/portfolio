import Layout from "@/components/Home/Layout";
import { Text } from "@/components/Text";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profile from "../../public/images/profile/profilepicture.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/About/Skills";
import Experience from "@/components/About/Experience";
import Education from "@/components/About/Education";
import PageTransition from "@/components/PageTransition";
import MyAnimatedCursor from "@/components/MyAnimatedCursor";

const Numbers = ({ val }) => {
  const ref = useRef(null);

  const motionval = useMotionValue(0);
  const springval = useSpring(motionval, { duration: 3000 });
  const isviewed = useInView(ref);

  useEffect(() => {
    if (isviewed) {
      motionval.set(val);
    }
  }, [isviewed, val, motionval]);

  useEffect(() => {
    springval.on("change", (a) => {
      if (ref.current && a.toFixed(0) <= val) {
        ref.current.textContent = a.toFixed(0);
      }
    });
  }, [springval, val]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>LTFYR | About Page</title>
        <meta name="description" content="about page" />
      </Head>
      <PageTransition />

      <main className="flex w-full flex-col justify-center items-center dark:text-white">
        <Layout className="pt-8 xl:px-4">
          <Text
            text="Passion Makes the Goal!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="w-full grid grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:col-span-8 md:order-2">
              <h2 className="mb-4 text-lg uppercase font-bold text-white dark:text-white sm:w-full sm:text-center">
                About me
              </h2>
              <p className="font-medium">
                Hello, I am Lutfiyar, a web developer and UI/UX designer with a
                passion for creating beautiful, functional, and user-centered
                digital experiences. I am always looking for new and innovative
                ways to bring my clients visions to life.
              </p>
              <p className="my-4 font-medium">
                I believe that design is about more than just making things look
                pretty and it is about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>
              <p className="font-medium">
                Whether I am working on a website or other digital product, I
                bring my commitment to design excellence and user-centered
                thinking to every project I work on. I look forward to the
                opportunity to bring my skills and passion to your next project.
              </p>
            </div>
            <div className="col-span-3 xl:col-span-4 md:col-span-8 md:order-1 relative h-max flex justify-center items-center rounded-[1rem] border-2 border-solid border-slate-900 dark:bg-dark dark:border-light bg-white py-8">
              <div className="absolute top-1 -right-2 -z-10 w-[102%] h-[103%] rounded-2xl bg-slate-900 dark:bg-light" />
              <Image
                src={profile}
                priority
                sizes="(max-width : 768px) 100vw,(max-width:1200px) 50vw, 33vw"
                alt="portfolio picture"
                className="w-full h-auto"
              />
            </div>
            <div className="col-span-2 xl:col-span-8 xl:flex-row xl:items-center flex flex-col justify-between items-end md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <Numbers val={15} />+
                </span>
                <h2 className="text-xl dark:text-white font-medium capitalize text-white xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <Numbers val={15} />+
                </span>
                <h2 className="text-xl dark:text-white font-medium capitalize text-white xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <Numbers val={15} />+
                </span>
                <h2 className="text-xl dark:text-white font-medium capitalize text-white xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Projects completed
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
