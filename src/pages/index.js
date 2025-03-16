import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-3.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import { TransitionEffect } from "@/components/TransitionEffect";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cube Cake Studiios | Home</title>
        <meta name="description" content="Created By Cube Cake Team" />
      </Head>
      <Script
        strategy="afterInteractive" // Load the script after the page has loaded
        src="https://www.googletagmanager.com/gtag/js?id=G-P52C0MPPMM"
        id="google-analytics-script"
      />
      <Script
        id="google-analytics-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P52C0MPPMM');
          `,
        }}
      />
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="CubeCake"
                className="w-full h-auto ml-20 sm:ml-10 lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
              ></Image>
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                //text="Turning Vision Into Reality With Code And Design."
                //text="Bringing Your Ideas to Life Through Stunning 2D Animation and Explainer Videos"
                //text="Animating Ideas into Impactful Stories"
                text="Crafting Ideas into Visually Striking 2D Animations and Explanatory Masterpieces"
                //text="Elevating Concepts Through Sophisticated 2D Animation and Explainer Artistry"
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-5xl
                md:!text-5xl sm:!text-3xl
                "
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                At CUBE CAKE Studiios, we transform ideas into stunning 2D
                animations and compelling explainer videos. Our creative team
                combines artistry and strategy to deliver visually striking
                masterpieces that engage and inform. From promotional content to
                educational pieces, we bring your vision to life with precision
                and flair. Partner with us to communicate your message
                effectively and leave a lasting impression!
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="https://www.fiverr.com/s/akB06EK"
                  target="_blank"
                  className="flex items-center bg-dark text-light p-2.5 px-10 rounded-lg text-md font-semibold 
                    hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent hover:border-dark 
                  md:p-2 md-px-4 md:text-base min-w-80
                  "
                >
                  ORDER US ON FIVERR
                  <LinkArrow className={"w-2/12 ml-1"}></LinkArrow>
                </Link>
              </div>
              <div className="flex items-center self-start mt-2 lg:self-center"></div>
            </div>
          </div>
        </Layout>
        <HireMe></HireMe>
        {/* <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image src={lightBulb} alt="" className="w-full h-auto" />
        </div> */}
      </main>
    </>
  );
}
