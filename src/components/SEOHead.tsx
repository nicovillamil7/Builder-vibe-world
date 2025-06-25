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
  title = "Genesis Stone - Premium Flooring Solutions in South Florida",
  description = "Premier flooring supplier in South Florida. Specializing in porcelain tiles, natural stone, travertine, luxury vinyl, and custom mosaics.",
  keywords = "flooring Miami, porcelain tiles Florida, natural stone supplier, travertine pool decks, luxury vinyl plank, tile contractor",
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
