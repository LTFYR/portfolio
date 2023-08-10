import Layout from "@/components/Home/Layout";
import { GithubIcon } from "@/components/SocialIcons";
import { Text } from "@/components/Text";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import instagram from "../../public/images/projects/instagram.png";
import PageTransition from "@/components/PageTransition";
import MyAnimatedCursor from "@/components/MyAnimatedCursor";
import ecomercefilter from "../../public/images/projects/filterecomerce.png";
import airbnb from "../../public/images/projects/airbnb.png";
import fiver from "../../public/images/projects/fiver.png";
import udemy from "../../public/images/projects/udemy.png";
import rentacar from "../../public/images/projects/rentacar.png";

const showVideo = () => {
  return <video width={700} height={500} controls></video>;
};

const Technologies = ({ content, color, bgColor }) => {
  return (
    <button
      style={{
        color: color,
        backgroundColor: bgColor,
        padding: "6px ",
        borderRadius: "10px",
        fontWeight: "normal",
      }}
    >
      {content}
    </button>
  );
};

const BestProject = ({
  title,
  img,
  total,
  link,
  type,
  github,
  technlogies,
}) => {
  return (
    <article className="w-full p-12 flex lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 items-center justify-between rounded-3xl border border-solid border-gray-600 bg-dark/70 shadow-2xl dark:bg-dark dark:shadow-red-600 dark:shadow-shad dark:text-light dark:border-light">
      <Link
        href="#"
        className="w-1/2 lg:w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto border-2 border-solid border-gray-600 rounded-2xl"
        />
      </Link>
      <div className="w-1/2 h-full lg:w-full sm:w-full flex flex-col items-start justify-between pl-6  lg:pl-0 lg:pt-6">
        <span className="text-red-600 font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          className=" hover:text-white  hover:rounded-2xl"
          href={link}
          target="_blank"
        >
          <h2 className="my-2 text-light w-full text-3xl text-left font-bold sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="font-medium text-light my-2 dark:text-light sm:text-xs whitespace-pre-wrap">
          {total}
        </p>
        <div className="flex justify-between my-3 gap-4 flex-wrap">
          <Technologies color="white" content="Redux" bgColor="red" />
          <Technologies color="white" content="NodeJs" bgColor="aqua" />
          <Technologies color="white" content="ReactJs" bgColor="green" />
          <Technologies color="red" content="Router" bgColor="yellow" />
        </div>
        <div className="flex items-center sm:justify-between w-full my-4">
          <Link
            href="https://github.com/LTFYR/socialmedia/tree/main"
            target="_blank"
          >
            <GithubIcon className="text-4xl" />
          </Link>
          <button
            onClick={showVideo}
            className="ml-4 text-lg font-medium capitalize  p-2.5 px-6 rounded-lg text-white bg-[rgba(253,29,29,1)] border border-solid border-white sm:px-4 sm:text-base"
          >
            See Demo
          </button>
        </div>
      </div>
    </article>
  );
};

const Project = ({ img, title, link, github }) => {
  return (
    <article className="group relative overflow-auto w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-gray-600 bg-white p-6 cursor-pointer">
      <div className="hidden group-hover:block absolute inset-0 group-hover:bg-black/70 text-center">
        <h2>{title}</h2>
        <div className="flex items-center">
          <Link href={link}>See Project</Link>
          <Link href={link}>
            <GithubIcon className="text-4xl" />
          </Link>
        </div>
      </div>
      <Image
        src={img}
        className=" w-full h-auto border-2 border-solid border-gray-600 rounded-2xl"
      />
    </article>
  );
};

const Projects = ({ title, img, total, link, type, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-gray-600 bg-white p-6 relative dark:bg-dark dark:shadow-red-600 dark:shadow-shad text-black  dark:text-light dark:border-light">
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto border-2 border-solid border-gray-600 rounded-2xl"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between">
        <div className="flex justify-between items-center w-full">
          <span className="text-red-600 font-medium lg:text-sm">{type}</span>
          <Link className="" href={link} target="_blank">
            <h2 className="my-2 w-full text-2xl text-left font-bold lg:font-normal lg:text-sm">
              {title}
            </h2>
          </Link>
        </div>
        {/* <p className="font-medium text-black my-2 dark:text-white lg:text-sm">
          {total}
        </p> */}
        <div className="w-full flex items-center justify-between">
          <Link href={github} target="_blank">
            <GithubIcon className="text-4xl text-black bg-white rounded-full border-ni" />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 text-lg font-medium capitalize underline"
          >
            See Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>LTFYR | Projects</title>
        <meta name="description" content="projects page" />
      </Head>
      <PageTransition />
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16 sm:p-10 md:p-12">
          <Text
            text="Coding is life!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <article className="w-full p-12 flex lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 items-center justify-between rounded-3xl border border-solid border-gray-600 bg-dark/70 shadow-2xl dark:bg-dark dark:shadow-red-600 dark:shadow-shad dark:text-light dark:border-light">
                <Link
                  href="#"
                  className="w-1/2 lg:w-full cursor-pointer overflow-hidden rounded-lg"
                >
                  <Image
                    src={instagram}
                    alt="instagram clone"
                    className="w-full h-auto border-2 border-solid border-gray-600 rounded-2xl"
                  />
                </Link>
                <div className="w-1/2 h-full lg:w-full sm:w-full flex flex-col items-start justify-between pl-6  lg:pl-0 lg:pt-6">
                  <span className="text-red-600 font-medium text-xl xs:text-base">
                    Featured Project
                  </span>
                  <Link
                    className=" hover:text-white  hover:rounded-2xl"
                    href="https://github.com/LTFYR/socialmedia/tree/main"
                    target="_blank"
                  >
                    <h2 className="my-2 text-light w-full text-3xl text-left font-bold sm:text-sm">
                      Instagram clone (MERN)
                    </h2>
                  </Link>
                  <p className="font-medium text-light my-2 dark:text-light sm:text-xs whitespace-pre-wrap">
                    Instagram clone App made using ReactJs,NodeJS,Redux,React
                    Router. You can see most of things like
                    follow,search,like,dislike,unfollow,suggestded
                    users,posts,save post,explore section and etc on this app
                  </p>
                  <div className="flex justify-between my-3 gap-4 flex-wrap">
                    <Technologies color="white" content="Redux" bgColor="red" />
                    <Technologies
                      color="white"
                      content="NodeJs"
                      bgColor="aqua"
                    />
                    <Technologies
                      color="white"
                      content="ReactJs"
                      bgColor="blue"
                    />
                    <Technologies
                      color="white"
                      content="MongoDB"
                      bgColor="green"
                    />
                    <Technologies
                      color="red"
                      content="Router"
                      bgColor="yellow"
                    />
                  </div>
                  <div className="flex items-center sm:justify-between w-full my-4">
                    <Link
                      href="https://github.com/LTFYR/socialmedia/tree/main"
                      target="_blank"
                    >
                      <GithubIcon className="text-4xl" />
                    </Link>
                    <button
                      onClick={showVideo}
                      className="ml-4 text-lg font-medium capitalize  p-2.5 px-6 rounded-lg text-white bg-[rgba(253,29,29,1)] border border-solid border-white sm:px-4 sm:text-base"
                    >
                      See Demo
                    </button>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Projects
                title="E-Shop"
                link="/"
                img={ecomercefilter}
                github="/"
                type="New"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Projects
                title="Rent a Car (new filter functionality)"
                link="https://ltfyr-rentcars.vercel.app/"
                img={rentacar}
                github="https://github.com/LTFYR/rentacar"
                type="NextJs 13"
              />
            </div>
            <div className="col-span-12">
              {/* <BestProject
                title="Instagram clone (MERN)"
                link="/"
                img={instagram}
                github="/"
                type="Best Project"
                total="Instagram clone App made using ReactJs,NodeJS,Redux,React Router. You can see most of things like follow,search,like,dislike,unfollow,suggestded users,posts,save post,explore section and etc on this app"
              /> */}
              <article className="w-full p-12 flex lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 items-center justify-between rounded-3xl border border-solid border-gray-600 bg-dark/70 shadow-2xl dark:bg-dark dark:shadow-red-600 dark:shadow-shad dark:text-light dark:border-light">
                <Link
                  href="#"
                  className="w-1/2 lg:w-full cursor-pointer overflow-hidden rounded-lg"
                >
                  <Image
                    src={airbnb}
                    alt="airbnb clone"
                    className="w-full h-auto border-2 border-solid border-gray-600 rounded-2xl"
                  />
                </Link>
                <div className="w-1/2 h-full lg:w-full sm:w-full flex flex-col items-start justify-between pl-6  lg:pl-0 lg:pt-6">
                  <span className="text-red-600 font-medium text-xl xs:text-base">
                    Best Project
                  </span>
                  <Link
                    className=" hover:text-white  hover:rounded-2xl"
                    href="https://github.com/LTFYR/socialmedia/tree/main"
                    target="_blank"
                  >
                    <h2 className="my-2 text-light w-full text-3xl text-left font-bold sm:text-sm">
                      Airbnb Clone Fullstack
                    </h2>
                  </Link>
                  <p className="font-medium text-light my-2 dark:text-light sm:text-xs whitespace-pre-wrap">
                    Airbnb clone App made using NextJs,Prisma and most of latest
                    technlogoies. Users can reserv properties. User can add to
                    favorites properties. They can create new property. They can
                    delete, modify their properties. User can register with
                    github,google with NextAuth features. Also user can register
                    without NextAuth. Reserving properties is fully functional
                    and etc..
                  </p>
                  <div className="flex justify-between my-3 gap-4 sm:gap-0 flex-wrap">
                    <Technologies
                      color="white"
                      content="Fullstack"
                      bgColor="red"
                    />
                    <Technologies
                      color="white"
                      content="NextJs"
                      bgColor="aqua"
                    />
                    <Technologies
                      color="white"
                      content="TypeScript"
                      bgColor="blue"
                    />
                    <Technologies
                      color="white"
                      content="MongoDB"
                      bgColor="green"
                    />
                    <Technologies
                      color="white"
                      content="NextAuth"
                      bgColor="goldenrod"
                    />
                    <Technologies
                      color="red"
                      content="Prisma"
                      bgColor="yellow"
                    />
                  </div>
                  <div className="flex items-center sm:justify-between w-full my-4">
                    <Link
                      href="https://github.com/LTFYR/airbnbclone/tree/main"
                      target="_blank"
                    >
                      <GithubIcon className="text-4xl" />
                    </Link>
                    <Link
                      href="https://airbnbclone-ltfyr.vercel.app/"
                      target="_blank"
                      className="ml-4 text-lg font-medium capitalize  p-2.5 px-6 rounded-lg text-white bg-[rgba(253,29,29,1)] border border-solid border-white sm:px-4 sm:text-base"
                    >
                      See Project
                    </Link>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Projects
                title="Fiver clone (MERN)"
                link="/"
                img={fiver}
                github="https://github.com/LTFYR/fiverbackend"
                type="Fullstack"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Projects
                title="Udemy Clone"
                link="https://udemy-ltfyr.vercel.app/courses/xMHCZl"
                img={udemy}
                github="https://github.com/LTFYR/udemy"
                type="New"
              />
            </div>
            {/* <div className="col-span-4 sm:col-span-12">
              <Project img={instagram} title="EShop" link="/" github="/" />
            </div>
            <div className="col-span-4 sm:col-span-12">
              <Project img={instagram} title="EShop" link="/" github="/" />
            </div>
            <div className="col-span-4 sm:col-span-12">
              <Project img={instagram} title="EShop" link="/" github="/" />
            </div> */}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
