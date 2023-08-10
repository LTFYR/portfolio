import React from "react";
import Layout from "../Home/Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-black dark:border-white sm:text-base text-lg font-medium">
      <Layout className="py-8 flex items-center lg:gap-2 justify-between dark:text-white lg:flex-col lg:py-6">
        <span className="lg:text-sm w-max">
          {new Date().getFullYear()} &copy; All rights reserved
        </span>
        <Link className="lg:text-sm w-max flex items-center" href="/">
          Made with{" "}
          <span className="text-red-700 text-2xl lg:text-sm px-1">&#9825;</span>{" "}
          by LTFYR
        </Link>
        <Link className="text-red-700" href="/">
          Buy me a coffee
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
