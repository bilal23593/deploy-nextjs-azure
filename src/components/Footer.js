import React from "react";
import { quickLinks, legalLinks, socialLinks, companyInfo } from "@/data/social";
import SocialChannelMark from "@/components/SocialChannelMark";
import TrackedExternalLink from "@/components/TrackedExternalLink";
import TrackedInternalLink from "@/components/TrackedInternalLink";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-300 dark:border-gray-800 bg-light/95 dark:bg-dark/95 backdrop-blur-sm">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr_1fr] gap-6 md:gap-8">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-dark dark:text-light mb-1.5">
              {companyInfo.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-sm">
              {companyInfo.tagline}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2.5">
              {socialLinks.map((link) => (
                <TrackedExternalLink
                  key={link.name}
                  channel={link.name}
                  location="footer_social"
                  surface="footer_social"
                  title={link.name}
                  className="inline-flex items-center gap-2 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark px-3 py-2 text-sm text-dark dark:text-light hover:border-primary hover:shadow-sm transition"
                >
                  <SocialChannelMark channel={link.name} size="sm" />
                  <span className="font-semibold leading-none">{link.name}</span>
                </TrackedExternalLink>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-dark dark:text-light mb-2.5">
              Navigation
            </h4>
            <div className="flex flex-wrap gap-x-4 gap-y-1.5">
              {quickLinks.map((link) => (
                <TrackedInternalLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  location="footer_navigation"
                  ctaType="footer_navigation"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  {link.label}
                </TrackedInternalLink>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-dark dark:text-light mb-2.5">
              Lead Routes
            </h4>
            <div className="space-y-2">
              <TrackedInternalLink
                href="/start-here"
                label="Start Here"
                location="footer_lead_routes"
                ctaType="routing_hub"
                className="block text-sm font-semibold text-dark dark:text-light hover:text-primary transition-colors"
              >
                Start Here
              </TrackedInternalLink>
              <TrackedExternalLink
                channel="WhatsApp"
                location="footer_lead_routes"
                surface="footer_routes"
                className="block text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
              >
                Chat on WhatsApp
              </TrackedExternalLink>
              <TrackedExternalLink
                channel="Fiverr"
                location="footer_lead_routes"
                surface="footer_routes"
                className="block text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
              >
                Hire on Fiverr
              </TrackedExternalLink>
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
              <TrackedInternalLink
                key={link.href}
                href={link.href}
                label={link.label}
                location="footer_legal"
                ctaType="legal_navigation"
                className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
              >
                {link.label}
              </TrackedInternalLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
