import { useState, useRef, useEffect } from "react";
import { PrimaryButton, OutlineButton } from "@/components/ui/custom-buttons";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SimpleReliableImage } from "@/components/ui/ReliableImage";
import { Helmet } from "react-helmet-async";

const products = [
  {
    id: 1,
    name: "Porcelain",
    description:
      "High-performance and versatile, porcelain tiles offer exceptional durability, water resistance, and timeless design. Perfect for both indoor and outdoor spaces.",
    imageId: "modernPoolDeck",
    category: "Premium",
  },
  {
    id: 2,
    name: "Natural Stone",
    description:
      "Bring the beauty of nature into your space with our premium selection of natural stone. Each piece is unique in texture and pattern.",
    imageId: "travertinePool",
    category: "Popular",
  },
  {
    id: 3,
    name: "Laminates",
    description:
      "A cost-effective and stylish flooring solution that replicates the look of hardwood and stone while providing excellent resistance to scratches.",
    imageId: "vinylInstallation",
    category: "Luxury",
  },
  {
    id: 4,
    name: "Mosaics",
    description:
      "Add creativity and detail with our mosaic collections. Available in various materials, colors, and patterns for backsplashes and decorative accents.",
    imageId: "blueMosaicSpa",
    category: "Specialty",
  },
  {
    id: 5,
    name: "Wall Panels",
    description:
      "Transform any room with our modern wall panels. Easy to install and maintain, they provide texture, depth, and character to interiors.",
    imageId: "wallPanels",
    category: "Premium",
  },
  {
    id: 6,
    name: "Metal Trims",
    description:
      "Ensure a flawless finish with our durable metal trims. Designed to protect edges and transitions for enhanced appearance and longevity.",
    imageId: "metalTrims",
    category: "Premium",
  },
  {
    id: 7,
    name: "Grout",
    description:
      "Essential for perfect tile installation. Our grout solutions offer strong adhesion, color consistency, and resistance to stains and cracking.",
    imageId: "grout",
    category: "Premium",
  },
  {
    id: 8,
    name: "Mortar Mix",
    description:
      "High-performance mortar mixes deliver excellent bonding strength for various tile and stone applications with professional-grade reliability.",
    imageId: "mortarMix",
    category: "Specialty",
  },
];

const ProductGrid = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1024);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setCurrentIndex(0);
    };

    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const productStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        description: product.description,
        category: product.category,
        brand: {
          "@type": "Brand",
          name: "Genesis Stone",
        },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "USD",
          priceValidUntil: "2025-12-31",
          seller: {
            "@type": "Organization",
            name: "Genesis Stone",
          },
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5",
          bestRating: "5",
          worstRating: "1",
          ratingCount: "150",
        },
      },
    })),
  };

  const getItemWidth = () => {
    return windowWidth < 768 ? 280 : 320;
  };

  const getVisibleItems = () => {
    return windowWidth < 768 ? 1 : 3;
  };

  const itemWidth = getItemWidth();
  const visibleItems = getVisibleItems();
  const maxIndex = Math.max(0, products.length - visibleItems);

  const scrollToIndex = (index: number) => {
    const clampedIndex = Math.max(0, Math.min(index, maxIndex));
    setCurrentIndex(clampedIndex);
  };

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(productStructuredData)}
        </script>
      </Helmet>
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Our Selection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our collection of flooring materials, carefully selected
              for contractors, designers, and homeowners across South Florida.
            </p>
          </div>

          <div className="relative">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              aria-label="Previous products"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-14 h-14 md:w-12 md:h-12 bg-white/95 backdrop-blur-sm rounded-full shadow-lg border border-gray-300 flex items-center justify-center text-gray-700 hover:text-[rgb(138,0,0)] hover:bg-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
            >
              <ChevronLeft className="h-7 w-7 md:h-6 md:w-6" />
            </button>

            <button
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              aria-label="Next products"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-14 h-14 md:w-12 md:h-12 bg-white/95 backdrop-blur-sm rounded-full shadow-lg border border-gray-300 flex items-center justify-center text-gray-700 hover:text-[rgb(138,0,0)] hover:bg-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
            >
              <ChevronRight className="h-7 w-7 md:h-6 md:w-6" />
            </button>

            <div
              className="overflow-hidden px-6 md:px-12"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <div
                className="flex gap-4 md:gap-8 transition-transform duration-500 ease-out pb-6"
                style={{
                  transform: `translateX(-${currentIndex * (windowWidth < 768 ? 280 : itemWidth)}px)`,
                }}
              >
                {products.map((product, index) => (
                  <Card
                    key={product.id}
                    className="flex-shrink-0 w-64 md:w-72 h-[480px] group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg flex flex-col"
                    style={{ borderRadius: "20px" }}
                  >
                    <CardHeader className="p-0 flex-shrink-0">
                      <div
                        className="relative overflow-hidden"
                        style={{ borderRadius: "20px 20px 0 0" }}
                      >
                        <SimpleReliableImage
                          imageId={product.imageId}
                          alt={product.name}
                          className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        <Badge
                          className="absolute top-4 right-4 bg-[rgb(138,0,0)]/90 hover:bg-[rgb(138,0,0)] text-white border-0 backdrop-blur-sm px-3 py-1 text-xs font-semibold"
                          style={{ borderRadius: "12px" }}
                        >
                          {product.category}
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent className="p-6 flex-1 flex flex-col">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[rgb(138,0,0)] transition-colors duration-200">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed flex-1">
                        {product.description}
                      </p>
                    </CardContent>

                    <CardFooter className="px-6 pb-6 pt-0 flex-shrink-0">
                      <OutlineButton
                        className="w-full min-h-[44px] hover:bg-[rgb(138,0,0)] hover:text-white hover:border-[rgb(138,0,0)] transition-all duration-200 touch-manipulation"
                        style={{ borderRadius: "12px" }}
                        aria-label={`Get sample for ${product.name}`}
                        onClick={() => {
                          // Track sample request
                          if (typeof (window as any).gtag === "function") {
                            (window as any).gtag("event", "conversion", {
                              event_category: "engagement",
                              event_label: `sample_request_${product.name.toLowerCase().replace(/[^a-z0-9]/g, "_")}`,
                              value: 1,
                            });
                          }

                          // Open WhatsApp with personalized message
                          const phoneNumber = "17863810964";
                          const message = `Hi! I'd like to request a sample of ${product.name} for my project. Can you help me with sample options and pricing information?`;
                          const encodedMessage = encodeURIComponent(message);
                          const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
                          window.open(whatsappUrl, "_blank");
                        }}
                      >
                        Get Sample
                      </OutlineButton>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-3">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`w-4 h-4 md:w-3 md:h-3 rounded-full transition-all duration-200 touch-manipulation ${
                    index === currentIndex
                      ? "bg-[rgb(138,0,0)] scale-125"
                      : "bg-gray-400 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductGrid;
