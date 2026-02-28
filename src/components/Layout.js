import React from "react";

const Layout = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 px-32 py-12 xl:px-24 xl:py-10 lg:px-16 lg:py-9 md:px-12 md:py-8 sm:px-8 sm:py-7 ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
