const fs = require("fs");
const path = require("path");

const SITE_URL = "https://genesisstoneusa.com";

// Product category images - Updated to include laminate-flooring
const PRODUCT_IMAGES = {
  "natural-stone": {
    loc: `${SITE_URL}/images/natural-stone-collection.jpg`,
    title: "Natural Stone Collection - Genesis Stone",
    caption:
      "Premium natural stone products including marble, granite, and travertine",
  },
  porcelain: {
    loc: `${SITE_URL}/images/porcelain-tile-collection.jpg`,
    title: "Porcelain Tile Collection - Genesis Stone",
    caption:
      "High-quality porcelain tiles for residential and commercial applications",
  },
  "laminate-flooring": {
    loc: `${SITE_URL}/images/laminate-flooring-collection.jpg`,
    title: "Luxury Laminate Flooring Collection - Genesis Stone",
    caption:
      "Premium laminate flooring with waterproof technology and realistic wood grain textures for South Florida homes and businesses",
  },
  decorative: {
    loc: `${SITE_URL}/images/decorative-collection.jpg`,
    title: "Decorative Elements Collection - Genesis Stone",
    caption: "Stunning decorative mosaics, wall panels, and finishing touches",
  },
};

// Blog post images
const BLOG_IMAGES = {
  "homeowners-guide-tile-stone-flooring-selection": {
    loc: "https://storage.googleapis.com/content-assistant-images-temp/a-thoughtfully-arranged-interior-178c161f-c77eeb82-6fb0-4623-bd56-50687117283d.webp",
    title:
      "A Homeowner's Guide: How to Select the Right Tile or Stone Flooring",
    caption:
      "Comprehensive guide to choosing the perfect tile and stone flooring for your home",
  },
  "benefits-of-laminate-flooring-for-enduring-elegance": {
    loc: "https://cdn.builder.io/api/v1/image/assets%2F794088d731be4280a896b77e76e82a50%2F7c5feacc40d1433497e02a4682df187d",
    title: "Benefits of Laminate Flooring for Enduring Elegance",
    caption:
      "Explore the comprehensive benefits of laminate flooring that combines elegance with practicality",
  },
};

const generateSitemapUrls = () => {
  const currentDate = new Date().toISOString().split("T")[0];

  return [
    // Homepage - Highest priority for mobile
    {
      loc: `${SITE_URL}/`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 1.0,
      images: Object.values(PRODUCT_IMAGES).slice(0, 2), // Limit images for mobile performance
    },

    // Main product categories page
    {
      loc: `${SITE_URL}/products`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.9,
      images: Object.values(PRODUCT_IMAGES),
    },

    // Individual product category pages - High priority for mobile SEO
    ...Object.keys(PRODUCT_IMAGES).map((category) => ({
      loc: `${SITE_URL}/products/${category}`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: 0.8,
      images: [PRODUCT_IMAGES[category]],
    })),

    // Service pages
    {
      loc: `${SITE_URL}/contact`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: 0.7,
    },
    {
      loc: `${SITE_URL}/about`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: 0.6,
    },

    // Blog
    {
      loc: `${SITE_URL}/blog`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.7,
    },

    // Blog posts
    ...Object.entries(BLOG_IMAGES).map(([slug, image]) => ({
      loc: `${SITE_URL}/blog/${slug}`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: 0.6,
      images: [image],
    })),
  ];
};

const escapeXml = (unsafe) => {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case "'":
        return "&apos;";
      case '"':
        return "&quot;";
      default:
        return c;
    }
  });
};

const generateImageXml = (images) => {
  if (!images || images.length === 0) return "";

  return images
    .map(
      (image) => `
    <image:image>
      <image:loc>${escapeXml(image.loc)}</image:loc>
      <image:title>${escapeXml(image.title)}</image:title>
      <image:caption>${escapeXml(image.caption)}</image:caption>
    </image:image>`,
    )
    .join("");
};

const generateSitemapXml = () => {
  const urls = generateSitemapUrls();

  const urlsXml = urls
    .map((url) => {
      const imageXml = url.images ? generateImageXml(url.images) : "";
      return `  <url>
    <loc>${escapeXml(url.loc)}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority.toFixed(1)}</priority>${imageXml}
  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlsXml}
</urlset>`;
};

// Generate and write sitemap
const sitemapXml = generateSitemapXml();
const sitemapPath = path.join(__dirname, "../public/sitemap.xml");

fs.writeFileSync(sitemapPath, sitemapXml);
console.log("✅ Sitemap generated successfully at:", sitemapPath);
console.log(
  "📱 Optimized for mobile SEO with prioritized content and reduced image load",
);
