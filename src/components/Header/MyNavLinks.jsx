import { useRouter } from "next/router";

const { default: Link } = require("next/link");

export const MyNavLinks = ({ href, title, className = "" }) => {
  const url = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`h1 inline-block bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          url.asPath === href ? "w-full bg-red-600" : "w-0 bg-red-600"
        } dark:bg-light `}
      >
        &nbsp;
      </span>
    </Link>
  );
};
