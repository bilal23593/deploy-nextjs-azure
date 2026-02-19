import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { getSocialLink } from "@/data/social";
const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease huration-300
      ${isActive ? "w-full" : "w-0"}
      `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      className={`${className} relative group text-dark dark:text-light my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease huration-300
      ${isActive ? "w-full" : "w-0"}
      `}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const fiverr = getSocialLink('Fiverr')?.url || 'https://www.fiverr.com/s/akB06EK';

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="w-full px-32 py-6 font-medium flex items-center justify-between relative
    z-10 lg:px-16 md:px-12 sm:px-"
    >
      <button
        className=" flex-col justify-center items-center hidden lg:flex mt-7"
        onClick={handleClick}
      >
        <span
          className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          } `}
        ></span>
        <span
          className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          } `}
        ></span>
        <span
          className={`bg-dark block transition-all duration-300 ease-out  h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          } `}
        ></span>
      </button>
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/services" title="Services" className="mx-4" />
          <CustomLink href="/portfolio" title="Portfolio" className="mx-4" />
          <CustomLink href="/contact" title="Contact" className="ml-4" />
        </nav>
        <a
          href={fiverr}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-6 inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white font-semibold rounded-full hover:shadow-lg transition"
        >
          Hire on Fiverr
        </a>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 0.9, opacity: 3 }}
          className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          bg-dark/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex items-center flex-col justify-center ">
            <CustomMobileLink href="/" title="Home" toggle={handleClick} />
            <CustomMobileLink
              href="/about"
              title="About"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/services"
              title="Services"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/portfolio"
              title="Portfolio"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/contact"
              title="Contact"
              toggle={handleClick}
            />
            <a
              href={fiverr}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClick}
              className="mt-4 px-6 py-3 bg-purple-600 text-white rounded-full font-semibold"
            >
              Hire on Fiverr
            </a>
          </nav>
        </motion.div>
      ) : null}

      {/* <div className="absolute sm:left-[33%] left-[49%] top-[25%] translate-x-[50%]">
        <Logo></Logo>
      </div> */}
    </header>
  );
};

export default NavBar;
