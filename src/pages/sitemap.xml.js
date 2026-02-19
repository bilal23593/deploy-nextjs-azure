import { sitemap } from '@/lib/seo';

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
           xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
           xmlns:mobile="http://www.mobile.googlebot.com/schemas/mobile/1.0">
     ${sitemap
       .map(({ url, priority }) => {
         return `
       <url>
           <loc>${`https://cubecakestudios.com${url}`}</loc>
           <priority>${priority}</priority>
           <changefreq>${
             priority > 0.7 ? 'weekly' : 'monthly'
           }</changefreq>
           <lastmod>${new Date().toISOString()}</lastmod>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an XML sitemap with only the pages from our array
  const sitemap = generateSiteMap();

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
