import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  schema?: object;
  articleData?: {
    publishedTime: string;
    modifiedTime: string;
    author: string;
    tags: string[];
  };
}

const SEOHead = ({
  title = "Genesis Stone - Miami Flooring Contractor & Tile Supplier | Porcelain, Natural Stone, LVP",
  description = "Premier flooring supplier Miami since 2008. Trade pricing for contractors on porcelain tiles, natural stone, travertine pool decks, luxury vinyl plank installation. Same-day pickup South Florida.",
  keywords = "flooring Miami, porcelain tiles Miami, natural stone supplier Miami, travertine pool decks South Florida, luxury vinyl plank installation, flooring contractor Miami, commercial flooring Miami, tile supplier Miami, flooring installation Miami",
  canonicalUrl = "https://genesisstoneusa.com/",
  ogImage = "https://genesisstoneusa.com/placeholder.svg",
  schema,
}: SEOHeadProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />

      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Schema.org */}
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
      
      {/* Article Schema for Blog Posts */}
      {articleData && (
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": title,
          "description": description,
          "image": ogImage,
          "author": {
            "@type": "Person",
            "name": articleData.author
          },
          "publisher": {
            "@type": "Organization", 
            "name": "Genesis Stone & More",
            "logo": "https://genesisstoneusa.com/logo.svg"
          },
          "datePublished": articleData.publishedTime,
          "dateModified": articleData.modifiedTime,
          "keywords": articleData.tags.join(", ")
        })}</script>
      )}
    </Helmet>
  );
};

export default SEOHead;
