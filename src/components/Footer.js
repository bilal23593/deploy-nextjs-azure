import React from "react";
import Link from "next/link";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg sm:text-base">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span className="">
          {new Date().getFullYear()} &copy; All Rights Reserved.
        </span>
        <div className="flex items-center lg:py-2">
          Build With <span className="text-primary text-2xl px-1">&#9825;</span>{" "}
          by&nbsp;
          <Link href="/" className="underline underline-offset-2">
            Evology Hub
          </Link>
        </div>

        {/* <Link href="/" className="underline underline-offset-2">
          Say Hello
        </Link> */}
      </Layout>
    </footer>
  );
};

export default Footer;
