
import { blogArticles } from './blogData';
import { getAllSiteUrls } from './urlUtils';

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
  images?: Array<{
    loc: string;
    title: string;
    caption: string;
  }>;
}

export const generateSitemapUrls = (): SitemapUrl[] => {
  const baseUrl = 'https://genesisstoneusa.com';
  const currentDate = new Date().toISOString().split('T')[0];
  
  const staticUrls: SitemapUrl[] = [
    {
      loc: `${baseUrl}/`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 1.0,
      images: [{
        loc: `${baseUrl}/placeholder.svg`,
        title: 'Genesis Stone - Premium Flooring Solutions',
        caption: 'Premier flooring supplier in South Florida'
      }]
    },
    {
      loc: `${baseUrl}/products`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      loc: `${baseUrl}/retail`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/wholesale`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/about`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      loc: `${baseUrl}/contact`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      loc: `${baseUrl}/blog`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8
    }
  ];

  // Add blog articles
  const blogUrls: SitemapUrl[] = blogArticles
    .filter(article => article.published)
    .map(article => ({
      loc: `${baseUrl}/blog/${article.slug}`,
      lastmod: article.lastModified,
      changefreq: 'monthly' as const,
      priority: 0.7,
      images: article.image ? [{
        loc: article.image,
        title: article.title,
        caption: article.excerpt.substring(0, 100) + '...'
      }] : undefined
    }));

  return [...staticUrls, ...blogUrls];
};

export const generateSitemapXML = (): string => {
  const urls = generateSitemapUrls();
  
  const xmlUrls = urls.map(url => {
    let urlXml = `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>`;

    if (url.images && url.images.length > 0) {
      url.images.forEach(image => {
        urlXml += `
    <image:image>
      <image:loc>${image.loc}</image:loc>
      <image:title>${image.title}</image:title>
      <image:caption>${image.caption}</image:caption>
    </image:image>`;
      });
    }

    urlXml += `
  </url>`;
    return urlXml;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${xmlUrls}
</urlset>`;
};

// Function to check for broken links (client-side)
export const checkInternalLinks = async (): Promise<string[]> => {
  const urls = getAllSiteUrls();
  const brokenLinks: string[] = [];

  for (const url of urls) {
    try {
      const response = await fetch(url, { method: 'HEAD' });
      if (!response.ok) {
        brokenLinks.push(url);
      }
    } catch (error) {
      brokenLinks.push(url);
    }
  }

  return brokenLinks;
};
