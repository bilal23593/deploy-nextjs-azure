import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import profileImage from "../../public/images/profile/developer-pic-3.png";
import Image from "next/image";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { TransitionEffect } from "@/components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springVlaue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springVlaue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springVlaue, value]);

  return <span ref={ref}></span>;
};

const YouTubePlayer = ({ videoId }) => {
  useEffect(() => {
    // Dynamically load the YouTube API script
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    script.async = true;
    document.body.appendChild(script);

    window.onYouTubeIframeAPIReady = () => {
      new window.YT.Player("yt-player", {
        videoId,
        playerVars: {
          autoplay: 1,
          controls: 1,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
        },
        events: {
          onReady: (event) => event.target.playVideo(),
        },
      });
    };

    return () => {
      // Cleanup when the component is unmounted
      if (script) script.remove();
    };
  }, [videoId]);

  return <div id="yt-player" style={{ width: "100%", height: "100%" }} />;
};

const about = () => {
  return (
    <>
      <Head>
        <title> Cube Cake Studiios | About Us</title>
        <meta
          name="description"
          content="2d annimationa and explainer video"
        ></meta>
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-4 flex flex-col items justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Biography
              </h2>
              <p className="my-4 font-medium">
                At Cube Cake Studios, we specialize in creating captivating 2D
                animations and engaging explainer videos that bring your ideas
                to life. Founded by a dedicated team of artists and
                storytellers, we focus on transforming complex concepts into
                visually striking narratives.
              </p>
              <p className="my-4 font-medium">
                Our collaborative approach ensures that each project aligns with
                your vision while effectively connecting with your audience.
                Committed to excellence and innovation, we deliver high-quality
                content that informs and inspires.
              </p>
              <p className="my-4 font-medium">
                Partner with Cube Cake Studios to create extraordinary visual
                experiences that leave a lasting impression!
              </p>
              <div
                className="col-span-8 flex flex-wrap justify-between xl:col-span-8 
              xl:flex-row xl:items-center md:order-3 "
              >
                {/* Container for each number-label pair */}
                <div className="flex flex-col items-start justify-center xl:items-center">
                  <span className=" inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                    <AnimatedNumbers value={50} />+
                  </span>
                  <h2
                    className="text-xl font-medium capitalize text-dark/75 xl:text-center
                  md:text-lg sm:text-base xs:text-sm"
                  >
                    Satisfied Clients
                  </h2>
                </div>

                <div className="flex flex-col items-start justify-center xl:items-center">
                  <span className=" inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl ">
                    <AnimatedNumbers value={40} />+
                  </span>
                  <h2
                    className="text-xl font-medium capitalize text-dark/75 xl:text-center
                  md:text-lg sm:text-base xs:text-sm"
                  >
                    Projects Completed
                  </h2>
                </div>

                <div className="flex flex-col items-start justify-center xl:items-center">
                  <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                    <AnimatedNumbers value={4} />+
                  </span>
                  <h2
                    className="text-lg font-medium capitalize text-dark/75 xl:text-center
                  md:text-lg sm:text-base xs:text-sm"
                  >
                    Years Of Experience
                  </h2>
                </div>
              </div>
            </div>
            <div
              className="col-span-4 relative max-h-max rounded-2xl border-2 border-solid border-dark bg-light p-8
            xl:col-span-4 md:order-1 md:col-span-8 "
            >
              <YouTubePlayer videoId="EOlp1K1KKKU" />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default about;
