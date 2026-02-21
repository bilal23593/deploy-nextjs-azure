import Head from "next/head";
import { getOpenGraphMeta, getSEOMeta, getTwitterMeta, SITE_NAME } from "@/lib/seo";

const toKeywordString = (keywords) => {
  if (!keywords) return "";
  if (Array.isArray(keywords)) return keywords.filter(Boolean).join(", ");
  return String(keywords);
};

const SEOHead = ({
  title,
  description,
  canonicalUrl,
  keywords,
  ogType,
  ogImage,
  noindex = false,
  nofollow = false,
  structuredData = [],
  articlePublishedTime,
  articleModifiedTime,
}) => {
  const robots = noindex
    ? `noindex, ${nofollow ? "nofollow" : "follow"}`
    : `index, ${nofollow ? "nofollow" : "follow"}, max-image-preview:large, max-snippet:-1, max-video-preview:-1`;

  const seoMeta = getSEOMeta({
    title,
    description,
    canonicalUrl,
    keywords,
    robots,
  });

  const openGraphMeta = getOpenGraphMeta({
    title,
    description,
    canonicalUrl,
    ogType,
    ogImage,
  });

  const twitterMeta = getTwitterMeta({
    title,
    description,
    canonicalUrl,
    ogImage,
  });

  const normalizedKeywords = toKeywordString(seoMeta.keywords);
  const schemas = (Array.isArray(structuredData) ? structuredData : [structuredData]).filter(Boolean);

  return (
    <Head>
      <title>{seoMeta.title}</title>
      <meta name="description" content={seoMeta.description} />
      <meta name="robots" content={seoMeta.robots} />
      <meta name="author" content={SITE_NAME} />
      <meta name="application-name" content={SITE_NAME} />

      {normalizedKeywords ? <meta name="keywords" content={normalizedKeywords} /> : null}

      <link rel="canonical" href={seoMeta.canonical} />
      {seoMeta.languageAlternates?.map((alt) => (
        <link key={`${alt.hrefLang}-${alt.href}`} rel="alternate" hrefLang={alt.hrefLang} href={alt.href} />
      ))}

      <meta property="og:type" content={openGraphMeta.type} />
      <meta property="og:url" content={openGraphMeta.url} />
      <meta property="og:title" content={openGraphMeta.title} />
      <meta property="og:description" content={openGraphMeta.description} />
      <meta property="og:site_name" content={openGraphMeta.siteName} />
      <meta property="og:locale" content={openGraphMeta.locale} />
      <meta property="og:image" content={openGraphMeta.images[0].url} />
      <meta property="og:image:width" content={String(openGraphMeta.images[0].width)} />
      <meta property="og:image:height" content={String(openGraphMeta.images[0].height)} />
      <meta property="og:image:alt" content={openGraphMeta.images[0].alt} />
      <meta property="og:image:type" content={openGraphMeta.images[0].type} />

      {articlePublishedTime ? (
        <meta property="article:published_time" content={articlePublishedTime} />
      ) : null}
      {articleModifiedTime ? (
        <meta property="article:modified_time" content={articleModifiedTime} />
      ) : null}

      <meta name="twitter:card" content={twitterMeta.cardType} />
      <meta name="twitter:site" content={twitterMeta.site} />
      <meta name="twitter:creator" content={twitterMeta.handle} />
      <meta name="twitter:title" content={twitterMeta.title} />
      <meta name="twitter:description" content={twitterMeta.description} />
      <meta name="twitter:image" content={twitterMeta.image} />
      <meta name="twitter:image:alt" content={openGraphMeta.images[0].alt} />

      {schemas.map((schema, index) => (
        <script
          key={`ld-json-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Head>
  );
};

export default SEOHead;
