import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const MyAnimatedCursor = () => {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
    ssr: false,
  });

  if (!showChild) {
    return <div>help</div>;
  }

  if (typeof window !== "undefined") {
    return (
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="193, 11, 111"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          "h1",

          ".link",
        ]}
      />
    );
  }
};

export default MyAnimatedCursor;
