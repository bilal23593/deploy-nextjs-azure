import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion.create(Link);
const Layout = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-light px-32 py-12 xl:px-24 xl:py-10 lg:px-16 lg:py-9 md:px-12 md:py-8 sm:px-8 sm:py-7 ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
