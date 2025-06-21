export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  publishDate: string;
  lastModified: string;
  readTime: string;
  tags: string[];
  featured: boolean;
  published: boolean;
  seoKeywords: string[];
}

export const blogArticles: BlogArticle[] = [
  {
    id: "1",
    slug: "blog-post-1",
    title: "Blog Post Title",
    excerpt: "This is a placeholder blog post excerpt that will be replaced with your content.",
    content: `
      <p>This is placeholder content for the blog post. You can replace this with your actual blog content.</p>

      <h2>Heading Example</h2>
      <p>Add your content here...</p>
    `,
    image: "https://cdn.builder.io/api/v1/image/assets%2F9a2c4a6b7c8d4e5f6g7h8i9j0k1l2m3n%2F12345?format=webp&width=800",
    author: "Genesis Stone Team",
    date: "March 20, 2024",
    publishDate: "2024-03-20T10:00:00Z",
    lastModified: "2024-03-20T10:00:00Z",
    readTime: "5 min read",
    tags: ["Flooring", "Design", "Tips"],
    featured: true,
    published: true,
    seoKeywords: ["flooring", "design", "tips", "genesis stone"]
  }
];

// Utility functions for blog management
export const getFeaturedArticle = () => blogArticles.find(article => article.featured);

export const getPublishedArticles = () => blogArticles.filter(article => article.published);

export const getArticleBySlug = (slug: string) => blogArticles.find(article => article.slug === slug);

export const getRelatedArticles = (currentArticle: BlogArticle, limit: number = 3) => {
  return blogArticles
    .filter(article => 
      article.id !== currentArticle.id && 
      article.published &&
      article.tags.some(tag => currentArticle.tags.includes(tag))
    )
    .slice(0, limit);
};

export const getArticlesByTag = (tag: string) => {
  return blogArticles.filter(article => 
    article.published && article.tags.includes(tag)
  );
};

// SEO utility functions
export const generateBlogSchema = (article: BlogArticle) => {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.excerpt,
    "image": article.image,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Genesis Stone & More",
      "logo": {
        "@type": "ImageObject",
        "url": "https://genesisstoneusa.com/logo.png"
      }
    },
    "datePublished": article.publishDate,
    "dateModified": article.lastModified,
    "keywords": article.seoKeywords.join(", "),
    "articleSection": "Flooring",
    "wordCount": article.content.split(' ').length
  };
};