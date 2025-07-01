
import { Helmet } from "react-helmet-async";

interface TechnicalSEOProps {
  pageType?: 'website' | 'product' | 'article' | 'organization';
  images?: Array<{
    url: string;
    alt: string;
    width?: number;
    height?: number;
  }>;
  productData?: {
    name: string;
    description: string;
    image: string;
    category: string;
    brand?: string;
    price?: string;
    availability?: string;
  };
}

const TechnicalSEO = ({ 
  pageType = 'website', 
  images = [],
  productData 
}: TechnicalSEOProps) => {
  const baseUrl = 'https://genesisstoneusa.com';
  
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Genesis Stone & More",
    "alternateName": "Genesis Stone",
    "url": baseUrl,
    "logo": `${baseUrl}/logo.svg`,
    "description": "Premium flooring supplier in South Florida specializing in porcelain tiles, natural stone, travertine, and luxury materials since 2008.",
    "foundingDate": "2008",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3399 NW 72nd Ave #109",
      "addressLocality": "Miami",
      "addressRegion": "FL",
      "postalCode": "33122",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.8067",
      "longitude": "-80.3151"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-305-477-4402",
      "contactType": "customer service",
      "email": "genesistonemore@gmail.com",
      "availableLanguage": ["English", "Spanish"]
    },
    "sameAs": [
      "https://www.facebook.com/genesisstonefl",
      "https://www.instagram.com/genesisstonefl"
    ],
    "areaServed": {
      "@type": "Place",
      "name": "South Florida",
      "containedInPlace": {
        "@type": "Place",
        "name": "Florida, United States"
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Flooring Products",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Porcelain Tiles",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Porcelain Tiles",
                "description": "Premium porcelain tiles for residential and commercial applications",
                "category": "Flooring",
                "brand": {
                  "@type": "Brand",
                  "name": "Genesis Stone"
                },
                "image": `${baseUrl}/images/porcelain-tile-collection.jpg`,
                "offers": {
                  "@type": "Offer",
                  "availability": "https://schema.org/InStock",
                  "priceCurrency": "USD",
                  "price": "0",
                  "priceSpecification": {
                    "@type": "PriceSpecification",
                    "valueAddedTaxIncluded": true,
                    "priceCurrency": "USD"
                  },
                  "seller": {
                    "@type": "Organization",
                    "name": "Genesis Stone & More"
                  },
                  "shippingDetails": {
                    "@type": "OfferShippingDetails",
                    "shippingRate": {
                      "@type": "MonetaryAmount",
                      "value": "0",
                      "currency": "USD"
                    },
                    "deliveryTime": {
                      "@type": "ShippingDeliveryTime",
                      "handlingTime": {
                        "@type": "QuantitativeValue",
                        "minValue": 0,
                        "maxValue": 1,
                        "unitCode": "DAY"
                      },
                      "transitTime": {
                        "@type": "QuantitativeValue",
                        "minValue": 1,
                        "maxValue": 2,
                        "unitCode": "DAY"
                      }
                    }
                  },
                  "hasMerchantReturnPolicy": {
                    "@type": "MerchantReturnPolicy",
                    "applicableCountry": "US",
                    "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
                    "merchantReturnDays": 30,
                    "returnMethod": "https://schema.org/ReturnByMail",
                    "returnFees": "https://schema.org/FreeReturn"
                  }
                }
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Natural Stone",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Natural Stone",
                "description": "Travertine, marble, limestone, granite, and slate flooring",
                "category": "Flooring",
                "brand": {
                  "@type": "Brand",
                  "name": "Genesis Stone"
                },
                "image": `${baseUrl}/images/natural-stone-collection.jpg`,
                "offers": {
                  "@type": "Offer",
                  "availability": "https://schema.org/InStock",
                  "priceCurrency": "USD",
                  "price": "0",
                  "priceSpecification": {
                    "@type": "PriceSpecification",
                    "valueAddedTaxIncluded": true,
                    "priceCurrency": "USD"
                  },
                  "seller": {
                    "@type": "Organization",
                    "name": "Genesis Stone & More"
                  },
                  "shippingDetails": {
                    "@type": "OfferShippingDetails",
                    "shippingRate": {
                      "@type": "MonetaryAmount",
                      "value": "0",
                      "currency": "USD"
                    },
                    "deliveryTime": {
                      "@type": "ShippingDeliveryTime",
                      "handlingTime": {
                        "@type": "QuantitativeValue",
                        "minValue": 0,
                        "maxValue": 1,
                        "unitCode": "DAY"
                      },
                      "transitTime": {
                        "@type": "QuantitativeValue",
                        "minValue": 1,
                        "maxValue": 2,
                        "unitCode": "DAY"
                      }
                    }
                  },
                  "hasMerchantReturnPolicy": {
                    "@type": "MerchantReturnPolicy",
                    "applicableCountry": "US",
                    "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
                    "merchantReturnDays": 30,
                    "returnMethod": "https://schema.org/ReturnByMail",
                    "returnFees": "https://schema.org/FreeReturn"
                  }
                }
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Luxury Vinyl Plank",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Luxury Vinyl Plank",
                "description": "High-quality luxury vinyl plank flooring with realistic wood grain textures",
                "category": "Flooring",
                "brand": {
                  "@type": "Brand",
                  "name": "Genesis Stone"
                },
                "image": `${baseUrl}/images/laminate-flooring-collection.jpg`,
                "offers": {
                  "@type": "Offer",
                  "availability": "https://schema.org/InStock",
                  "priceCurrency": "USD",
                  "price": "0",
                  "priceSpecification": {
                    "@type": "PriceSpecification",
                    "valueAddedTaxIncluded": true,
                    "priceCurrency": "USD"
                  },
                  "seller": {
                    "@type": "Organization",
                    "name": "Genesis Stone & More"
                  },
                  "shippingDetails": {
                    "@type": "OfferShippingDetails",
                    "shippingRate": {
                      "@type": "MonetaryAmount",
                      "value": "0",
                      "currency": "USD"
                    },
                    "deliveryTime": {
                      "@type": "ShippingDeliveryTime",
                      "handlingTime": {
                        "@type": "QuantitativeValue",
                        "minValue": 0,
                        "maxValue": 1,
                        "unitCode": "DAY"
                      },
                      "transitTime": {
                        "@type": "QuantitativeValue",
                        "minValue": 1,
                        "maxValue": 2,
                        "unitCode": "DAY"
                      }
                    }
                  },
                  "hasMerchantReturnPolicy": {
                    "@type": "MerchantReturnPolicy",
                    "applicableCountry": "US",
                    "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
                    "merchantReturnDays": 30,
                    "returnMethod": "https://schema.org/ReturnByMail",
                    "returnFees": "https://schema.org/FreeReturn"
                  }
                }
              }
            }
          ]
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Genesis Stone",
    "url": baseUrl,
    "description": "Premium flooring supplier in South Florida",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/products?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  const productSchema = productData ? {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": productData.name,
    "description": productData.description,
    "image": productData.image,
    "category": productData.category,
    "brand": {
      "@type": "Brand",
      "name": productData.brand || "Genesis Stone"
    },
    "offers": {
      "@type": "Offer",
      "availability": productData.availability || "https://schema.org/InStock",
      "priceCurrency": "USD",
      "price": productData.price || "0",
      "seller": {
        "@type": "Organization",
        "name": "Genesis Stone & More"
      },
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingRate": {
          "@type": "MonetaryAmount",
          "value": "0",
          "currency": "USD"
        },
        "deliveryTime": {
          "@type": "ShippingDeliveryTime",
          "handlingTime": {
            "@type": "QuantitativeValue",
            "minValue": 0,
            "maxValue": 1,
            "unitCode": "DAY"
          },
          "transitTime": {
            "@type": "QuantitativeValue",
            "minValue": 1,
            "maxValue": 2,
            "unitCode": "DAY"
          }
        }
      },
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "applicableCountry": "US",
        "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
        "merchantReturnDays": 30,
        "returnMethod": "https://schema.org/ReturnByMail",
        "returnFees": "https://schema.org/FreeReturn"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    }
  } : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Products",
        "item": `${baseUrl}/products`
      }
    ]
  };

  return (
    <Helmet>
      {/* Organization Schema */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      {/* Website Schema */}
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>

      {/* Product Schema - only if product data provided */}
      {productSchema && (
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
      )}

      {/* Breadcrumb Schema */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>

      {/* Local Business Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Genesis Stone & More",
          "image": `${baseUrl}/logo.svg`,
          "telephone": "+1-305-477-4402",
          "email": "genesistonemore@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "3399 NW 72nd Ave #109",
            "addressLocality": "Miami",
            "addressRegion": "FL",
            "postalCode": "33122",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "25.8067",
            "longitude": "-80.3151"
          },
          "url": baseUrl,
          "description": "Premium flooring supplier specializing in porcelain tiles, natural stone, and luxury materials.",
          "priceRange": "$$",
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "07:00",
              "closes": "16:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Saturday",
              "opens": "08:00",
              "closes": "16:00"
            }
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "127"
          }
        })}
      </script>
    </Helmet>
  );
};

export default TechnicalSEO;
