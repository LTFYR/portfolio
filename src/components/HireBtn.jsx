import React from "react";
import { CircularText } from "./SocialIcons";
import Link from "next/link";

const HireBtn = () => {
  return (
    <div className="flex items-center justify-center overflow-hidden fixed left-4 bottom-4 md:right-40 md:left-auto md:-top-2 md:bottom-auto md:absolute">
      <div className="w-48 h-auto flex items-center justify-center relative md:w-24">
        <CircularText className="fill-white spin-custom" />
        <Link
          href="mailto:lutfiyar888lutfiyar@gmail.com"
          className="w-20 h-20 rounded-full flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bgred text-white shadow-md border border-none hover:bg-black hover:text-white hover:font-semibold md:w-12 md:h-12 txt10"
        >
          Hire me
        </Link>
      </div>
    </div>
  );
};

export default HireBtn;
