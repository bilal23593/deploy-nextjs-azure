import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  CircularText,
  GithubIcon,
  LinkArrow,
  LinkedInIcon,
  SkypeIcon,
  TelegramIcon,
  TwitterIcon,
} from "./Icons";
import { motion } from "framer-motion";
const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease huration-300
      ${router.asPath === href ? "w-full" : "w-0"}
      `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group text-dark dark:text-light my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease huration-300
      ${router.asPath === href ? "w-full" : "w-0"}
      `}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="w-full px-32 py-8 font-medium flex items-center justify-between relative
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
        </nav>
        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href={"https://join.skype.com/invite/qaHJVhuEI5wU"}
            target="_blank"
            whileHover={{ y: -6, x: -6 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <SkypeIcon />
          </motion.a>
          <motion.a
            href={"/"}
            target="_blank"
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href={"https://t.me/bilal23593"}
            target="_blank"
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mt-8"
          >
            <TelegramIcon />
          </motion.a>
        </nav>
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
          </nav>
          <nav className="flex items-center justify-center flex-wrap mt-2">
            <motion.a
              href={"https://join.skype.com/invite/qaHJVhuEI5wU"}
              target="_blank"
              whileHover={{ y: -6, x: -6 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3"
            >
              <SkypeIcon />
            </motion.a>
            <motion.a
              href={"/"}
              target="_blank"
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3"
            >
              <LinkedInIcon />
            </motion.a>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute sm:left-[33%] left-[49%] top-[25%] translate-x-[50%]">
        <Logo></Logo>
      </div>
    </header>
  );
};

export default NavBar;
