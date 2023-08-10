import { useRouter } from "next/router";

const { default: Link } = require("next/link");

export const MobileNavLinks = ({ href, title, className = "", toggle }) => {
  const url = useRouter();

  const closeHamb = () => {
    toggle();
    url.push(href);
  };
  return (
    <button
      href={href}
      className={`${className} relative group my-1`}
      onClick={closeHamb}
    >
      {title}

      <span
        className={`h1 inline-block bg-black absolute left-0 -bottom-0.5 group-hover:w-full ease duration-300 ${
          url.asPath === href ? "w-full bg-red-600" : "w-0 bg-red-600"
        } dark:bg-light `}
      >
        &nbsp;
      </span>
    </button>
  );
};

//transition-[width]
