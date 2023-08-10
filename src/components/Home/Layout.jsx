import React from "react";

const Layout = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full h-full inline-block text-white p-32 z-0 dark:bg-dark ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
