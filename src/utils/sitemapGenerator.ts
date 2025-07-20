interface SitemapImage {
  loc: string;
  title: string;
  caption: string;
}

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority: number;
  images?: SitemapImage[];
}

const SITE_URL = "https://genesisstoneusa.com";

// Product category images - Updated to match repository structure with both camelCase and kebab-case keys
const PRODUCT_IMAGES: Record<string, SitemapImage> = {
  // Original camelCase keys for internal use
  grout: {
    loc: `${SITE_URL}/images/grout-collection.jpg`,
    title: "Professional Grout Solutions - Genesis Stone",
    caption: "High-quality grout products for tile and stone installations",
  },
  laminates: {
    loc: `${SITE_URL}/images/laminate-flooring-collection.jpg`,
    title: "Luxury Laminate Flooring Collection - Genesis Stone",
    caption:
      "Premium laminate flooring options for residential and commercial projects",
  },
  "laminate-flooring": {
    loc: `${SITE_URL}/images/laminate-flooring-collection.jpg`,
    title: "Luxury Laminate Flooring Collection - Genesis Stone",
    caption:
      "Premium laminate flooring with waterproof technology and realistic wood grain textures for South Florida homes and businesses",
  },
  metalTrims: {
    loc: `${SITE_URL}/images/metal-trim-collection.jpg`,
    title: "Metal Trim and Edge Solutions - Genesis Stone",
    caption:
      "Professional metal trims and edge solutions for tile installations",
  },
  mortarMix: {
    loc: `${SITE_URL}/images/mortar-mix-collection.jpg`,
    title: "Professional Mortar Mix Products - Genesis Stone",
    caption:
      "High-performance mortar mix solutions for tile and stone installation",
  },
  mosaics: {
    loc: `${SITE_URL}/images/mosaic-tile-collection.jpg`,
    title: "Mosaic Tile Collection - Genesis Stone",
    caption: "Stunning mosaic tiles for decorative and functional applications",
  },
  naturalStone: {
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
  wallPanels: {
    loc: `${SITE_URL}/images/wall-panel-collection.jpg`,
    title: "Wall Panel Solutions - Genesis Stone",
    caption: "Modern wall panel systems for interior and exterior applications",
  },

  // Add kebab-case aliases for URL routing compatibility
  "natural-stone": {
    loc: `${SITE_URL}/images/natural-stone-collection.jpg`,
    title: "Natural Stone Collection - Genesis Stone",
    caption:
      "Premium natural stone products including marble, granite, and travertine",
  },
  "metal-trims": {
    loc: `${SITE_URL}/images/metal-trim-collection.jpg`,
    title: "Metal Trim and Edge Solutions - Genesis Stone",
    caption:
      "Professional metal trims and edge solutions for tile installations",
  },
  "mortar-mix": {
    loc: `${SITE_URL}/images/mortar-mix-collection.jpg`,
    title: "Professional Mortar Mix Products - Genesis Stone",
    caption:
      "High-performance mortar mix solutions for tile and stone installation",
  },
  "wall-panels": {
    loc: `${SITE_URL}/images/wall-panel-collection.jpg`,
    title: "Wall Panel Solutions - Genesis Stone",
    caption: "Modern wall panel systems for interior and exterior applications",
  },
};

// Blog post images - Updated to match actual blog posts in repository
const BLOG_IMAGES: Record<string, SitemapImage> = {
  "homeowners-guide-tile-stone-flooring-selection": {
    loc: "https://storage.googleapis.com/content-assistant-images-temp/a-thoughtfully-arranged-interior-178c161f-c77eeb82-6fb0-4623-bd56-50687117283d.webp",
    title:
      "A Homeowner's Guide: How to Select the Right Tile or Stone Flooring",
    caption:
      "Comprehensive guide to choosing the perfect tile and stone flooring for your home",
  },
  "mastering-simple-tile-installation-techniques": {
    loc: "https://storage.googleapis.com/content-assistant-images-temp/of-a-a-focused-view-of-a47800a4-bf92-4988-af91-56ccb0748be8.webp",
    title: "How to Master Simple Tile Installation Techniques",
    caption:
      "Expert guide to mastering tile installation techniques for beginners and professionals",
  },
  "benefits-of-laminate-flooring-for-enduring-elegance": {
    loc: "https://cdn.builder.io/api/v1/image/assets%2F794088d731be4280a896b77e76e82a50%2F7c5feacc40d1433497e02a4682df187d",
    title: "Benefits of Laminate Flooring for Enduring Elegance",
    caption:
      "Explore the comprehensive benefits of laminate flooring that combines elegance with practicality",
  },
  "laminate-flooring-durability-that-lasts-for-years": {
    loc: "https://storage.googleapis.com/content-assistant-images-temp/of-a-a-modern-elegantly-des-4205da73-fe9c-43e7-86ba-78c28597d186.webp",
    title: "Laminate Flooring Durability That Lasts for Years",
    caption:
      "Discover why laminate flooring is the perfect choice for durability and longevity",
  },
  "why-choose-laminate-flooring-long-lasting-beauty": {
    loc: "https://storage.googleapis.com/content-assistant-images-temp/of-a-a-sleek-modern-interior-02ebd834-0602-4c80-a426-0da36c8167e1.webp",
    title: "Why Choose Laminate Flooring for Long-Lasting Beauty",
    caption:
      "Discover why laminate flooring combines durability, cost-effectiveness, and visual appeal for homes and commercial spaces",
  },
  "natural-stone-vs-ceramic-tile-cost-considerations": {
    loc: "https://storage.googleapis.com/content-assistant-images-temp/a-stylish-and-modern-kitc-b56e915e-3a4d7270-8e90-4734-b34f-cd41549e316c.webp",
    title: "Natural Stone vs Ceramic Tile Cost Considerations",
    caption:
      "Comprehensive guide to understanding cost differences between natural stone and ceramic tile for home renovations",
  },
  "modern-tile-styles-luxurious-living": {
    loc: "https://storage.googleapis.com/content-assistant-images-temp/a-a-contemporary-living-room--97ea685d-62a4-42cc-a11e-44cb2e75971e.webp",
    title: "Transform Your Space With Modern Tile Styles for Luxurious Living",
    caption:
      "Discover the latest trends in modern tile designs that elevate luxury living rooms with sophisticated finishes and expert installation techniques",
  },
  "transform-your-space-with-modern-tile-styles-for-luxurious-living": {
    loc: "https://storage.googleapis.com/content-assistant-images-temp/a-a-contemporary-living-room--97ea685d-62a4-42cc-a11e-44cb2e75971e.webp",
    title: "Transform Your Space With Modern Tile Styles for Luxurious Living",
    caption: "Discover modern tile styles that create luxurious living spaces with sophisticated design elements and premium finishes",
  },
};

const generateSitemapUrls = (): SitemapUrl[] => {
  const currentDate = new Date().toISOString().split("T")[0];

  return [
    // Homepage
    {
      loc: `${SITE_URL}/`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 1.0,
      images: [
        {
          loc: `${SITE_URL}/placeholder.svg`,
          title: "Genesis Stone - Premium Flooring Solutions",
          caption: "Premier flooring supplier in South Florida",
        },
      ],
    },

    // Main product categories page
    {
      loc: `${SITE_URL}/products`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.9,
      images: Object.values(PRODUCT_IMAGES),
    },

    // Individual product category pages
    ...Object.keys(PRODUCT_IMAGES).map((category) => ({
      loc: `${SITE_URL}/products/${category}`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: 0.8,
      images: [PRODUCT_IMAGES[category]],
    })),

    // Service pages
    {
      loc: `${SITE_URL}/retail`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: 0.8,
      images: [
        {
          loc: `${SITE_URL}/images/retail-showroom.jpg`,
          title: "Genesis Stone Retail Showroom",
          caption: "Visit our showroom for personalized flooring consultation",
        },
      ],
    },

    {
      loc: `${SITE_URL}/wholesale`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: 0.8,
      images: [
        {
          loc: `${SITE_URL}/images/wholesale-warehouse.jpg`,
          title: "Genesis Stone Wholesale Operations",
          caption: "Trade pricing and volume discounts for contractors",
        },
      ],
    },

    // Company pages
    {
      loc: `${SITE_URL}/about`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: 0.7,
      images: [
        {
          loc: `${SITE_URL}/images/genesis-stone-team.jpg`,
          title: "Genesis Stone Team",
          caption: "Meet the experienced professionals behind Genesis Stone",
        },
      ],
    },

    {
      loc: `${SITE_URL}/contact`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: 0.7,
      images: [
        {
          loc: `${SITE_URL}/images/contact-location.jpg`,
          title: "Genesis Stone Contact Information",
          caption: "Visit our showroom or contact us for flooring consultation",
        },
      ],
    },

    {
      loc: `${SITE_URL}/service-areas`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: 0.6,
      images: [
        {
          loc: `${SITE_URL}/images/south-florida-service-map.jpg`,
          title: "Genesis Stone Service Areas",
          caption: "Serving South Florida with premium flooring solutions",
        },
      ],
    },

    // Blog
    {
      loc: `${SITE_URL}/blog`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.8,
      images: [
        {
          loc: `${SITE_URL}/images/flooring-blog.jpg`,
          title: "Genesis Stone Flooring Blog",
          caption:
            "Expert advice and tips for flooring installation and maintenance",
        },
      ],
    },

    // Blog posts
    ...Object.entries(BLOG_IMAGES).map(([slug, image]) => ({
      loc: `${SITE_URL}/blog/${slug}`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: 0.7,
      images: [image],
    })),
  ];
};

const escapeXml = (unsafe: string): string => {
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

const generateImageXml = (images: SitemapImage[]): string => {
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

const generateSitemapXml = (): string => {
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
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${urlsXml}
</urlset>`;
};

export { generateSitemapXml, generateSitemapUrls, PRODUCT_IMAGES, BLOG_IMAGES };