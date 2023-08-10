import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { MyNavLinks } from "./MyNavLinks";
import {
  TwitterIcon,
  PinterestIcon,
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  SunIcon,
  MoonIcon,
} from "../SocialIcons";
import { motion } from "framer-motion";
import useTheme from "../hooks/useTheme";
import { MobileNavLinks } from "./MobileNavLinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [theme, setTheme] = useTheme();

  const handleNavbar = () => {
    setOpen(!open);
  };

  function setFixed() {
    const scrollTop = window.scrollY;
    if (scrollTop >= 300) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  }

  console.log(sticky, setFixed);

  useEffect(() => {
    window.addEventListener("scroll", setFixed);
  }, []);

  return (
    <header
      id="nav"
      className={`w-full px-32 py-8 font-medium flex relative items-center justify-between border border-l-0 border-r-0 border-solid border-b-gray-400 shadow dark:border-t-0 dark:border-l-0 dark:border-r-0 text-white lg:px-16 md:px-12 sm:px-8 ${
        sticky
          ? "!fixed bg-black/70 z-10 top-0 left-0 transition 2s ease-in-out "
          : ""
      }`}
    >
      <button
        className="flex-col justify-center items-center hidden lg:flex relative"
        onClick={handleNavbar}
      >
        <span
          className={`bg-light dark:bg-light transition-all duration-500 ease-out block h-0.5 w-6 rounded-sm  ${
            open ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-light dark:bg-light transition-all duration-500 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${
            open ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-light dark:bg-light transition-all duration-500 ease-out block h-0.5 w-6 rounded-sm ${
            open ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <MyNavLinks href="/" className="mr-4" title="Home" />
          <MyNavLinks href="/about" className="mx-4" title="About" />
          <MyNavLinks href="/portfolios" className="mx-4" title="Portfolios" />
          <MyNavLinks href="/news" className="ml-4" title="Articles" />
          <MyNavLinks href="/contact" className="ml-4" title="Contact" />
        </nav>
        <nav className="flex justify-center items-center flex-wrap">
          <motion.a
            href="https://github.com/LTFYR"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.8 }}
            target={"_blank"}
            className="w-6 mr-3"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://twitter.com"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.8 }}
            target={"_blank"}
            className="w-6 mx-3"
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="https://pinterest.com"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.8 }}
            target={"_blank"}
            className="w-6 mx-3"
          >
            <PinterestIcon />
          </motion.a>
          <motion.a
            href="https://dribble.com"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.8 }}
            target={"_blank"}
            className="w-6 mx-3"
          >
            <DribbbleIcon />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.8 }}
            target={"_blank"}
            className="w-6 ml-3"
          >
            <LinkedInIcon />
          </motion.a>

          {/* <button
            className={`flex items-center justify-center rounded-full ml-3 p-1 ${
              theme === "light" ? "bg-dark text-white" : "bg-white text-dark"
            }`}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "dark" ? (
              <SunIcon className={"fill-black"} />
            ) : (
              <MoonIcon className={"fill-black"} />
            )}
          </button> */}
        </nav>
      </div>

      {open ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1, transition: "300ms" }}
          className="mw90 mh80 flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-red-600/70 rounded-2xl backdrop-blur-md py-36 dark:bg-white/70 dark:text-black"
        >
          <nav className="flex items-center flex-col justify-center">
            <MobileNavLinks
              href="/"
              className=""
              title="Home"
              toggle={handleNavbar}
            />
            <MobileNavLinks
              href="/about"
              className=""
              title="About"
              toggle={handleNavbar}
            />
            <MobileNavLinks
              href="/portfolios"
              className=""
              title="Portfolios"
              toggle={handleNavbar}
            />
            <MobileNavLinks
              href="/news"
              className=""
              title="Articles"
              toggle={handleNavbar}
            />
            <MobileNavLinks
              href="/contact"
              className="mb-4"
              title="Contact"
              toggle={handleNavbar}
            />
          </nav>
          <nav className="flex justify-center items-center flex-wrap">
            <motion.a
              href="https://github.com/LTFYR"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.8 }}
              target={"_blank"}
              className="w-6 mr-3"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://twitter.com"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.8 }}
              target={"_blank"}
              className="w-6 mx-3"
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              href="https://pinterest.com"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.8 }}
              target={"_blank"}
              className="w-6 mx-3"
            >
              <PinterestIcon />
            </motion.a>
            <motion.a
              href="https://dribble.com"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.8 }}
              target={"_blank"}
              className="w-6 mx-3"
            >
              <DribbbleIcon />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.8 }}
              target={"_blank"}
              className="w-6 ml-3"
            >
              <LinkedInIcon />
            </motion.a>

            {/* <button
              className={`flex items-center justify-center rounded-full ml-3 p-1 ${
                theme === "light" ? "bg-dark text-white" : "bg-white text-dark"
              }`}
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "dark" ? (
                <SunIcon className={"fill-black"} />
              ) : (
                <MoonIcon className={"fill-black"} />
              )}
            </button> */}
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left50 smleft85  top-2 sm:top-3 tx50">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
