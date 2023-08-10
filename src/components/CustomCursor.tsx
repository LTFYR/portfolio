import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const newref = useRef<HTMLDivElement>(null);
  const followerref = useRef<HTMLDivElement>(null);

  const moveCursor = (e: MouseEvent): void => {
    gsap.to(newref.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.2,
    });
    gsap.to(followerref.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.9,
    });
  };

  useEffect(() => {
    gsap.set(newref, {
      xPercent: 100,
      yPercent: 100,
    });
    gsap.set(followerref, {
      xPercent: 0,
      yPercent: 0,
    });
    window.addEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div>
      <div ref={newref} className="cursor"></div>
      <div ref={followerref} className="follower-cursor"></div>
    </div>
  );
};

export default CustomCursor;
