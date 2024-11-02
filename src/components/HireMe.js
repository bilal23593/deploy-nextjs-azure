import React from "react";
import Link from "next/link";
import Layout from "./Layout";
import { CircularText2 } from "./Icons";
import lightBulb from "../../public/images/profile/cube-cake-studiios.png";
import Image from "next/image";

const HireMe = () => {
  return (
    <div
      className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden
     md:right-2 md:left-auto md:top-0 md:bottom-auto md:absolute xs:hidden"
    >
      <div className="w-48 h-auto flex items-center justify-center relative md:w-24">
        <CircularText2 className={" fill-dark animate-spin-slow"} />

        <Link
          href="https://www.fiverr.com/sohab1122?up_rollout=true"
          target="_blank"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
          bg-light text-light shadow-md border border-solid border-dark w-25 h-25 rounded-full font-semibold
          hover:bg-dark hover:text-light md:w-12 m:h-12 md:text-[10px]"
        >
          <Image src={lightBulb} alt="" className="w-full h-auto" />
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
