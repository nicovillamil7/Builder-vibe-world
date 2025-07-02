import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  structuredData?: object;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Genesis Stone - Premium Flooring Solutions in South Florida",
  description = "Genesis Stone offers premium flooring solutions including porcelain tiles, natural stone, laminates, and professional installation services in South Florida.",
  keywords = "flooring, tiles, natural stone, porcelain, laminate, South Florida, Genesis Stone",
  ogImage = "/placeholder.svg",
  ogType = "website",
  canonicalUrl,
  structuredData
}) => {
  // Ensure title is under 60 characters for optimal SEO
  const optimizedTitle = title.length > 60 ? title.substring(0, 57) + '...' : title;
  const fullTitle = optimizedTitle.includes('Genesis Stone') ? optimizedTitle : `${optimizedTitle} | Genesis Stone`;

  // Ensure description is 150-160 characters for optimal SEO
  const optimizedDescription = description.length > 160 
    ? description.substring(0, 157) + '...' 
    : description.length < 120 
      ? description + ' Professional flooring solutions and expert installation services in South Florida.'
      : description;

  const currentUrl = canonicalUrl || window.location.href.split('?')[0].split('#')[0];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={optimizedDescription} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={optimizedDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content="Genesis Stone" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@genesisstoneusa" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={optimizedDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;