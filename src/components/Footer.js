import React from "react";
import Link from "next/link";
import { quickLinks, legalLinks, socialLinks, companyInfo } from "@/data/social";
import {
  GithubIcon,
  TwitterIcon,
  LinkedInIcon,
  DribbbleIcon,
  SkypeIcon,
  TelegramIcon,
} from "./Icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const getSocialIcon = (name) => {
    const iconMap = {
      GitHub: GithubIcon,
      Twitter: TwitterIcon,
      LinkedIn: LinkedInIcon,
      Dribbble: DribbbleIcon,
      Skype: SkypeIcon,
      Telegram: TelegramIcon,
    };
    return iconMap[name] || null;
  };

  return (
    <footer className="w-full border-t border-gray-300 dark:border-gray-800 bg-light/95 dark:bg-dark/95 backdrop-blur-sm">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr] gap-6 md:gap-8">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-dark dark:text-light mb-1.5">
              {companyInfo.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-sm">
              {companyInfo.tagline}
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-2.5">
              {socialLinks.slice(0, 6).map((link) => {
                const IconComponent = getSocialIcon(link.name);
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.name}
                    className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-primary hover:text-white text-dark dark:text-gray-300 flex items-center justify-center transition-colors"
                  >
                    {IconComponent ? (
                      <IconComponent className="w-3.5 h-3.5" />
                    ) : (
                      <span className="text-[11px] font-bold">
                        {link.name.charAt(0).toUpperCase()}
                      </span>
                    )}
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-dark dark:text-light mb-2.5">
              Navigation
            </h4>
            <div className="flex flex-wrap gap-x-4 gap-y-1.5">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-dark dark:text-light mb-2.5">
              Contact
            </h4>
            <div className="space-y-1.5">
              <a
                href={`mailto:${companyInfo.email}`}
                className="block text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors break-all"
              >
                {companyInfo.email}
              </a>
              <a
                href={`tel:${companyInfo.phone}`}
                className="block text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
              >
                {companyInfo.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-gray-300 dark:border-gray-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <span suppressHydrationWarning>{currentYear}</span> &copy; {companyInfo.name}
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
