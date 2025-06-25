
import { Helmet } from "react-helmet-async";

interface TechnicalSEOProps {
  pageType?: 'website' | 'article' | 'product' | 'service';
  lastModified?: string;
  images?: Array<{
    url: string;
    alt: string;
    width?: number;
    height?: number;
  }>;
}

const TechnicalSEO: React.FC<TechnicalSEOProps> = ({
  pageType = 'website',
  lastModified,
  images = []
}) => {
  return (
    <Helmet>
      {/* Additional meta tags for better SEO */}
      <meta name="geo.region" content="US-FL" />
      <meta name="geo.placename" content="Miami, Florida" />
      <meta name="geo.position" content="25.7617;-80.1918" />
      <meta name="ICBM" content="25.7617, -80.1918" />
      
      {/* Language and locale */}
      <meta httpEquiv="content-language" content="en-US" />
      <html lang="en-US" />
      
      {/* Additional Open Graph */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Genesis Stone" />
      <meta property="article:publisher" content="https://www.facebook.com/genesisstonefl" />
      
      {/* Schema.org enhancements */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Genesis Stone & More",
          "url": "https://genesisstoneusa.com/",
          "telephone": "(305) 477-4402",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Miami, FL",
            "addressLocality": "Miami",
            "addressRegion": "FL",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 25.7617,
            "longitude": -80.1918
          },
          "openingHours": "Mo-Fr 07:00-16:00",
          "priceRange": "$$",
          "paymentAccepted": "Cash, Check, Credit Card",
          "currenciesAccepted": "USD",
          "areaServed": [
            "Miami-Dade County",
            "Broward County", 
            "Palm Beach County",
            "South Florida"
          ],
          "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": 25.7617,
              "longitude": -80.1918
            },
            "geoRadius": "100000"
          }
        })}
      </script>

      {/* Performance hints */}
      <link rel="dns-prefetch" href="//images.unsplash.com" />
      <link rel="dns-prefetch" href="//cdn.builder.io" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {lastModified && <meta name="last-modified" content={lastModified} />}
      
      {/* Image metadata */}
      {images.map((image, index) => (
        <link key={index} rel="preload" href={image.url} as="image" />
      ))}
    </Helmet>
  );
};

export default TechnicalSEO;
