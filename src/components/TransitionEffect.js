import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export const TransitionEffect = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const storageKey = "ccs-route-transition-ready";

    try {
      const hasVisited = window.sessionStorage.getItem(storageKey);
      if (hasVisited) {
        setShouldAnimate(true);
      } else {
        window.sessionStorage.setItem(storageKey, "1");
      }
    } catch {
      setShouldAnimate(false);
    }
  }, []);

  if (!shouldAnimate || prefersReducedMotion) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-[70] bg-primary"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        transition={{ duration: 0.55, ease: "easeInOut" }}
      />

      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-[60] bg-light"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.14, duration: 0.55, ease: "easeInOut" }}
      />

      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-[50] bg-dark"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.24, duration: 0.65, ease: "easeInOut" }}
      />
    </>
  );
};
