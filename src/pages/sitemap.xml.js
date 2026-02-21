import { sitemap, toAbsoluteUrl } from "@/lib/seo";

const generateSiteMap = (pages) => {
  const generatedAt = new Date().toISOString();

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(({ url, priority, changefreq }) => {
    return `<url>
  <loc>${toAbsoluteUrl(url)}</loc>
  <lastmod>${generatedAt}</lastmod>
  <changefreq>${changefreq || "monthly"}</changefreq>
  <priority>${priority}</priority>
</url>`;
  })
  .join("\n")}
</urlset>`;
};

function SiteMap() {
  return null;
}

export async function getServerSideProps({ res }) {
  const xml = generateSiteMap(sitemap);

  res.setHeader("Content-Type", "text/xml; charset=utf-8");
  res.write(xml);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
