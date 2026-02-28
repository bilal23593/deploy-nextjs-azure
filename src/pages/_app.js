import "@/styles/globals.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import dynamic from "next/dynamic";
import { MotionConfig } from "framer-motion";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";
import { getOrganizationSchema, getWebsiteSchema } from "@/lib/seo";

const CookieConsent = dynamic(() => import("@/components/CookieConsent"), { ssr: false });
const LeadTunnelPopup = dynamic(() => import("@/components/LeadTunnelPopup"), { ssr: false });

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const gaId = process.env.NEXT_PUBLIC_GA_ID || "G-1XP9S3Z1VB";
  const organizationSchema = getOrganizationSchema();
  const websiteSchema = getWebsiteSchema();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#B63E96" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </Head>
      <MotionConfig reducedMotion="user">
        <main
          className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}
        >
          {/* Google Analytics */}
          {gaId ? (
            <>
              <Script
                strategy="lazyOnload"
                src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              />
              <Script
                id="google-analytics"
                strategy="lazyOnload"
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    window.gtag = gtag;
                    gtag('js', new Date());
                    gtag('config', '${gaId}', { anonymize_ip: true });
                  `,
                }}
              />
            </>
          ) : null}

          <LeadTunnelPopup routeKey={router.asPath} />
          <NavBar />
          <Component {...pageProps} />
          <Footer />
          <CookieConsent />
        </main>
      </MotionConfig>
    </>
  );
}
