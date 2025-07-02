import React from "react";
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
  noindex?: boolean;
}

const SEOHead = ({
  title = "Genesis Stone - Miami Flooring Contractor & Tile Supplier | Porcelain, Natural Stone, LVP",
  description = "Premier flooring supplier Miami since 2008. Trade pricing for contractors on porcelain tiles, natural stone, travertine pool decks, luxury vinyl plank installation. Same-day pickup South Florida.",
  keywords = "flooring Miami, porcelain tiles Miami, natural stone supplier Miami, travertine pool decks South Florida, luxury vinyl plank installation, flooring contractor Miami, commercial flooring Miami, tile supplier Miami, flooring installation Miami",
  canonicalUrl = "https://genesisstoneusa.com/",
  ogImage = "https://genesisstoneusa.com/placeholder.svg",
  schema,
  noindex = false,
}: SEOHeadProps) => {

  // Check if current URL should be noindexed
  const shouldNoIndex = React.useMemo(() => {
    if (noindex) return true;

    if (typeof window !== 'undefined') {
      const url = window.location.href;
      const searchParams = new URLSearchParams(window.location.search);

      // Check for funnel steps or tracking parameters
      if (url.includes('funnel_step') || 
          url.includes('tracking') ||
          searchParams.has('utm_source') ||
          searchParams.has('utm_medium') ||
          searchParams.has('utm_campaign') ||
          searchParams.has('ref') ||
          searchParams.has('source') ||
          url.includes('/404')) {
        return true;
      }
    }

    return false;
  }, [noindex]);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Robots Meta Tag */}
      <meta name="robots" content={shouldNoIndex ? "noindex, nofollow" : "index, follow"} />

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
      {typeof window !== 'undefined' && window.articleData && (
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": window.articleData.title,
              "description": window.articleData.description,
              "author": {
                "@type": "Organization",
                "name": "Genesis Stone & More"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Genesis Stone & More",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://genesisstoneusa.com/logo.svg"
                }
              },
              "datePublished": window.articleData.datePublished,
              "dateModified": window.articleData.dateModified || window.articleData.datePublished
            })}
          </script>
        )}
    </Helmet>
  );
};

export default SEOHead;