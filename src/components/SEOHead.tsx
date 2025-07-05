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
  canonicalUrl,
  ogImage = "https://genesisstoneusa.com/placeholder.svg",
  schema,
  noindex = false,
}: SEOHeadProps) => {

  // Generate breadcrumb schema based on current path
  const breadcrumbSchema = React.useMemo(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      const pathSegments = path.split('/').filter(Boolean);
      
      const breadcrumbItems = [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://genesisstoneusa.com/"
        }
      ];

      // Add breadcrumb items based on path
      if (pathSegments.length > 0) {
        pathSegments.forEach((segment, index) => {
          const position = index + 2;
          const url = `https://genesisstoneusa.com/${pathSegments.slice(0, index + 1).join('/')}`;
          
          let name = segment.charAt(0).toUpperCase() + segment.slice(1);
          
          // Better names for common pages
          const pageNames: Record<string, string> = {
            'products': 'Flooring Products',
            'retail': 'Retail Services', 
            'wholesale': 'Wholesale Pricing',
            'about': 'About Us',
            'contact': 'Contact Us',
            'blog': 'Flooring Blog',
            'service-areas': 'Service Areas'
          };
          
          if (pageNames[segment]) {
            name = pageNames[segment];
          }

          breadcrumbItems.push({
            "@type": "ListItem",
            "position": position,
            "name": name,
            "item": url
          });
        });
      }

      return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbItems
      };
    }
    return null;
  }, []);

  // Auto-generate canonical URL if not provided
  const finalCanonicalUrl = React.useMemo(() => {
    if (canonicalUrl) return canonicalUrl;

    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      const cleanPath = path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
      // Ensure canonical URL is always HTTPS and non-www
      const canonicalUrl = `https://genesisstoneusa.com${path === '/' ? '/' : path}`;
      return canonicalUrl;
    }

    return "https://genesisstoneusa.com/";
  }, [canonicalUrl]);

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

  const fullTitle = title;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={shouldNoIndex ? "noindex,nofollow" : "index,follow"} />

      {/* Canonical URL */}
      <link rel="canonical" href={finalCanonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={typeof window !== 'undefined' && window.articleData ? "article" : "website"} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={finalCanonicalUrl} />
      <meta property="og:site_name" content="Genesis Stone & More" />

      {/* Social Media Profiles */}
      <meta property="og:see_also" content="https://es-es.facebook.com/genesisstoneus/" />
      <meta property="og:see_also" content="https://www.instagram.com/genesistone/" />
      <meta property="og:see_also" content="https://www.tiktok.com/@genesis.stone.more" />
      <meta property="og:see_also" content="https://www.youtube.com/@genesisstoneandmore" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@genesisstoneusa" />

      {/* Article specific meta tags */}
      {typeof window !== 'undefined' && window.articleData && (
        <>
          <meta property="article:published_time" content={window.articleData.datePublished} />
          <meta property="article:modified_time" content={window.articleData.dateModified || window.articleData.datePublished} />
          <meta property="article:author" content="Genesis Stone & More" />
          {window.articleData.tags && window.articleData.tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Schema.org */}
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
      
      {/* Breadcrumb Schema */}
      {breadcrumbSchema && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
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