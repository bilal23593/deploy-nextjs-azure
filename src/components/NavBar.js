import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { getSocialLink } from "@/data/social";

const navLinks = [
  { href: "/", title: "Home" },
  { href: "/about", title: "About" },
  { href: "/services", title: "Services" },
  { href: "/portfolio", title: "Portfolio" },
  { href: "/contact", title: "Contact" },
];

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link
      href={href}
      className={`${className} relative text-dark dark:text-light font-semibold hover:text-primary dark:hover:text-primaryDark transition-colors`}
    >
      {title}
      <span
        className={`absolute left-0 -bottom-1 inline-block h-[2px] bg-dark dark:bg-light transition-[width] duration-300 ${
          isActive ? "w-full" : "w-0"
        }`}
      />
    </Link>
  );
};

const CustomMobileLink = ({ href, title, closeMenu }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  const handleClick = () => {
    closeMenu();
    if (router.pathname !== href) {
      router.push(href);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`w-full rounded-xl px-4 py-3 text-left text-base font-semibold transition ${
        isActive
          ? "bg-white/15 text-white"
          : "text-white/90 hover:bg-white/10 hover:text-white"
      }`}
    >
      {title}
    </button>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const fiverr = getSocialLink("Fiverr")?.url || "https://www.fiverr.com/s/akB06EK";

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleRouteStart = () => setIsOpen(false);
    router.events.on("routeChangeStart", handleRouteStart);
    return () => {
      router.events.off("routeChangeStart", handleRouteStart);
    };
  }, [router.events]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200/70 dark:border-gray-800/70 bg-light/90 dark:bg-dark/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between px-6 lg:px-5 md:px-4">
        <Link
          href="/"
          className="text-lg sm:text-base font-black tracking-[0.08em] text-dark dark:text-light"
        >
          CUBE CAKE STUDIIOS
        </Link>

        <div className="flex items-center gap-8 lg:hidden">
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <CustomLink key={link.href} href={link.href} title={link.title} />
            ))}
          </nav>

          <a
            href={fiverr}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-purple-600 px-4 py-2 text-sm font-semibold text-white transition hover:scale-[1.03] hover:shadow-lg"
          >
            Hire on Fiverr
          </a>
        </div>

        <button
          type="button"
          className="hidden lg:flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close mobile menu" : "Open mobile menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-nav-panel"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 block h-0.5 w-5 rounded bg-dark dark:bg-light transition-transform duration-300 ${
                isOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] block h-0.5 w-5 rounded bg-dark dark:bg-light transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] block h-0.5 w-5 rounded bg-dark dark:bg-light transition-transform duration-300 ${
                isOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <>
            <motion.button
              type="button"
              aria-label="Close mobile menu overlay"
              className="fixed inset-0 z-[80] bg-black/45 backdrop-blur-[1px] lg:block hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenu}
            />

            <motion.div
              id="mobile-nav-panel"
              initial={{ opacity: 0, y: -20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="fixed top-20 left-4 right-4 z-[81] hidden lg:block rounded-2xl border border-white/15 bg-dark text-light shadow-2xl"
            >
              <div className="px-4 py-4">
                <nav className="flex flex-col gap-1.5">
                  {navLinks.map((link) => (
                    <CustomMobileLink
                      key={link.href}
                      href={link.href}
                      title={link.title}
                      closeMenu={closeMenu}
                    />
                  ))}
                </nav>

                <a
                  href={fiverr}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-purple-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-purple-500"
                >
                  Hire on Fiverr
                </a>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;
