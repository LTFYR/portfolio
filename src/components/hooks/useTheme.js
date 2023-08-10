import React, { useEffect, useRef, useState } from "react";

const useTheme = () => {
  const darkModeCustom = "(prefer-color-scheme:dark)";
  const initialRender = useRef(true);
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const media = window.matchMedia(darkModeCustom);
    const customPref = window.localStorage.getItem("tema");

    const temaController = () => {
      if (customPref) {
        let availble = customPref === "dark" ? "dark" : "light";
        setTheme(availble);

        if (availble === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } else {
        let availble = media.matches ? "dark" : "light";
        setTheme(availble);

        if (availble === "dark") {
          document.documentElement.classList.add("light");
        } else {
          document.documentElement.classList.remove("light");
        }
      }
    };

    temaController();

    media.addEventListener("change", temaController);

    return () => {
      media.removeEventListener("change", temaController);
    };
  }, []);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    } else {
      if (theme === "dark") {
        window.localStorage.setItem("tema", "dark");
        document.documentElement.classList.add("dark");
      } else {
        window.localStorage.setItem("tema", "light");
        document.documentElement.classList.remove("dark");
      }
    }
  }, [theme]);

  return [theme, setTheme];
};

export default useTheme;
