import Layout from "@/components/Layout";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { SimpleReliableImage } from "@/components/ui/ReliableImage";
import { getReliableImageUrl } from "@/utils/imageUtils";
import { Shield, Users, Calculator, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import SEOHead from "@/components/SEOHead";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import {
  PrimaryButton,
  GoldButton,
  WhiteOutlineButton,
} from "@/components/ui/custom-buttons";
import { Link } from "react-router-dom";

const Products = () => {
  const productCategories = [
    {
      id: "porcelain",
      name: "Porcelain",
      description:
        "High-performance and versatile, porcelain tiles offer exceptional durability, water resistance, and timeless design. Perfect for both indoor and outdoor spaces, they deliver a sophisticated look while standing up to heavy traffic and wear.",
      imageId: "porcelainLargeFormat",
      hasDetailedPage: false,
    },
    {
      id: "natural-stone",
      name: "Natural Stone",
      description:
        "Bring the beauty of nature into your space with our premium selection of natural stone. Each piece is unique in texture and pattern, offering unmatched elegance and durability for floors, walls, and architectural features.",
      imageId: "naturalTravertine",
      hasDetailedPage: true,
    },
    {
      id: "laminates",
      name: "Laminates",
      description:
        "A cost-effective and stylish flooring solution, our laminate options replicate the look of hardwood and stone while providing excellent resistance to scratches, stains, and moisture—ideal for both residential and commercial projects.",
      imageId: "laminateHardwood",
      hasDetailedPage: false,
    },
    {
      id: "decorative",
      name: "Decorative",
      description:
        "Transform any space with our decorative elements, including stunning wall panels, artistic mosaics, and metal trims. These finishing touches add personality and elevate your design to the next level.",
      imageId: "mosaicGlassFloor",
      hasDetailedPage: false,
    },
  ];

  const applicationGuide = [
    {
      icon: Shield,
      title: "Commercial Quality",
      description:
        "All our materials meet commercial-grade standards, ensuring durability and performance in high-traffic environments.",
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description:
        "Our team provides personalized recommendations based on your specific project requirements and design goals.",
    },
    {
      icon: Calculator,
      title: "Project Planning",
      description:
        "We help with material calculations, installation planning, and timeline coordination for successful project completion.",
    },
  ];

  const getProductImage = (imageId: string) => {
    try {
      return getReliableImageUrl(imageId);
    } catch (error) {
      console.warn(`Failed to get image for ${imageId}:`, error);
      return "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";
    }
  };

  return (
    <Layout>
      <SEOHead 
        title="Premium Flooring Products Miami | Genesis Stone Collections"
        description="Browse premium flooring collections: porcelain tiles, natural stone, laminate flooring, and decorative materials. Professional-grade products for Miami contractors and homeowners with same-day pickup available."
        keywords="porcelain tiles miami, natural stone floors, decorative flooring, laminate flooring, floor tiles, ceramic tiles, stone flooring, miami flooring products"
        canonicalUrl="https://genesisstoneusa.com/products"
      />
      <Helmet>
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@genesisstonefl" />
        <meta name="twitter:title" content="Premium Flooring Products Miami | Genesis Stone Collections" />
        <meta name="twitter:description" content="Browse premium flooring collections: porcelain tiles, natural stone, laminate flooring, and decorative materials for Miami contractors." />
        <meta name="twitter:image" content="https://genesisstoneusa.com/images/products-collection.jpg" />

        {/* Open Graph Meta */}
        <meta property="og:title" content="Premium Flooring Products Miami | Genesis Stone Collections" />
        <meta property="og:description" content="Browse premium flooring collections: porcelain tiles, natural stone, laminate flooring, and decorative materials." />
        <meta property="og:image" content="https://genesisstoneusa.com/images/products-collection.jpg" />
        <meta property="og:url" content="https://genesisstoneusa.com/products" />
        <meta property="og:type" content="website" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Premium Flooring Collections",
            description:
              "Comprehensive collection of premium flooring materials including porcelain tiles, natural stone, laminate, and decorative elements.",
            url: "https://genesisstoneusa.com/products",
            mainEntity: {
              "@type": "ItemList",
              name: "Flooring Product Categories",
              itemListElement: [
                {
                  "@type": "Product",
                  name: "Porcelain Tiles",
                  description:
                    "Premium porcelain tiles for residential and commercial applications",
                  category: "Flooring",
                  offers: {
                    "@type": "Offer",
                    availability: "https://schema.org/InStock",
                    priceCurrency: "USD",
                    priceValidUntil: "2025-12-31",
                    seller: {
                      "@type": "Organization",
                      name: "Genesis Stone & More",
                    },
                  },
                  aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "4.8",
                    reviewCount: "127",
                    bestRating: "5",
                    worstRating: "1",
                  },
                },
                {
                  "@type": "Product",
                  name: "Natural Stone",
                  description:
                    "Travertine, marble, limestone, granite, and slate flooring",
                  category: "Flooring",
                  offers: {
                    "@type": "Offer",
                    availability: "https://schema.org/InStock",
                    priceCurrency: "USD",
                    priceValidUntil: "2025-12-31",
                    seller: {
                      "@type": "Organization",
                      name: "Genesis Stone & More",
                    },
                  },
                  aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "4.8",
                    reviewCount: "127",
                    bestRating: "5",
                    worstRating: "1",
                  },
                },
                {
                  "@type": "Product",
                  name: "Luxury Vinyl Plank",
                  description:
                    "High-quality luxury vinyl plank flooring with realistic wood grain textures",
                  category: "Flooring",
                  offers: {
                    "@type": "Offer",
                    availability: "https://schema.org/InStock",
                    priceCurrency: "USD",
                    priceValidUntil: "2025-12-31",
                    seller: {
                      "@type": "Organization",
                      name: "Genesis Stone & More",
                    },
                  },
                  aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "4.8",
                    reviewCount: "127",
                    bestRating: "5",
                    worstRating: "1",
                  },
                },
              ],
            },
          })}
        </script>
      </Helmet>
      <BreadcrumbNavigation />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-[rgb(138,0,0)] to-[rgb(153,27,27)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Premium Flooring Products & Collections Miami
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Discover our extensive range of high-quality flooring materials,
            from elegant porcelain to natural stone, designed for both
            residential and commercial applications.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Premium Flooring Product Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Genesis Stone & More has been South Florida's premier flooring supplier since 2008, offering an extensive collection of premium flooring materials. From commercial-grade porcelain tiles to luxury natural stone, our products meet the highest industry standards for durability, beauty, and performance.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Whether you're a contractor seeking <a href="/wholesale" className="text-red-700 hover:text-red-800 font-medium underline">wholesale pricing</a> or a homeowner exploring <a href="/retail" className="text-red-700 hover:text-red-800 font-medium underline">retail options</a>, our Miami showroom features live displays with same-day pickup and professional installation services throughout South Florida.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {productCategories.map((category) => (
              <Card
                key={category.id}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white"
              >
                <div className="relative h-64 overflow-hidden">
                  <SimpleReliableImage
                    imageId={category.imageId}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className="absolute inset-0 bg-no-repeat bg-center bg-cover"
                    style={{
                      backgroundImage:
                        category.id === "porcelain"
                          ? "url(https://cdn.builder.io/api/v1/image/assets%2F794088d731be4280a896b77e76e82a50%2F18e90d9f99c3420095f59bd37800aeef)"
                          : category.id === "natural-stone"
                            ? "url(https://cdn.builder.io/api/v1/image/assets%2F794088d731be4280a896b77e76e82a50%2F2a92e90ea3be4a5ca96a5c2eb98a0677)"
                            : category.id === "laminates"
                              ? "url(https://cdn.builder.io/api/v1/image/assets%2F794088d731be4280a896b77e76e82a50%2F380930421bb24b70b044aa89b2501734)"
                              : category.id === "decorative"
                                ? "url(https://cdn.builder.io/api/v1/image/assets%2F794088d731be4280a896b77e76e82a50%2Ff2ed05f8d528431d854d22437c4645e4)"
                                : "linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0))",
                    }}
                  ></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                  </div>
                </div>
                <CardContent className="p-8">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {category.description}
                  </p>
                  <div className="text-sm text-gray-500 mb-6">
                    {category.id === "porcelain" && (
                      <p>Available in large format tiles, wood-look planks, and stone-look designs. Perfect for high-traffic commercial spaces and residential applications.</p>
                    )}
                    {category.id === "natural-stone" && (
                      <p>Including travertine, marble, granite, limestone, and slate. Ideal for pool decks, outdoor patios, and luxury interior applications.</p>
                    )}
                    {category.id === "laminates" && (
                      <p>Water-resistant luxury vinyl plank (LVP) and traditional laminate options with realistic wood grain textures and stone patterns.</p>
                    )}
                    {category.id === "decorative" && (
                      <p>Glass mosaics, metal trims, wall panels, and decorative borders to create stunning focal points and finishing touches.</p>
                    )}
                  </div>
                  {category.hasDetailedPage ? (
                    <Link to={`/products/${category.id}`}>
                      <PrimaryButton 
                        className="w-full min-h-[44px] group-hover:bg-[rgb(120,0,0)] transition-colors touch-manipulation"
                        aria-label={`View ${category.name} collection`}
                      >
                        View {category.name} Collection
                      </PrimaryButton>
                    </Link>
                  ) : (
                    <PrimaryButton 
                      className="w-full min-h-[44px] group-hover:bg-[rgb(120,0,0)] transition-colors touch-manipulation"
                      aria-label={`View ${category.name} collection`}
                    >
                      View {category.name} Collection
                    </PrimaryButton>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Complete Flooring Solutions for Every Project
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Beyond our extensive tile and flooring collection, Genesis Stone provides everything you need for successful installation projects. Our inventory includes professional-grade adhesives, grouts, underlayments, and finishing accessories from leading manufacturers.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <p className="text-gray-600"><strong>Installation Materials:</strong> MAPEI mortars, Laticrete adhesives, custom grout colors, and waterproofing membranes</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <p className="text-gray-600"><strong>Professional Tools:</strong> Tile cutters, spacers, leveling systems, and specialty installation equipment</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <p className="text-gray-600"><strong>Expert Support:</strong> Technical guidance, material calculations, and project planning assistance</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-red-50 to-red-100 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Product Categories</h3>
                <div className="space-y-3">
                  <a href="/wholesale" className="block text-red-600 hover:text-red-700 font-medium">→ Wholesale Pricing</a>
                  <a href="/retail" className="block text-red-600 hover:text-red-700 font-medium">→ Retail Showroom</a>
                  <a href="/blog" className="block text-red-600 hover:text-red-700 font-medium">→ Flooring Guides & Tips</a>
                  <a href="/service-areas" className="block text-red-600 hover:text-red-700 font-medium">→ Service Areas</a>
                  <a href="/contact" className="block text-red-600 hover:text-red-700 font-medium">→ Installation Services</a>
                  <a href="/about" className="block text-red-600 hover:text-red-700 font-medium">→ About Our Company</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Guide */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Products?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every product in our collection is selected for quality,
              durability, and aesthetic appeal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {applicationGuide.map((guide, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-[rgb(138,0,0)] to-[rgb(153,27,27)] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl transition-shadow">
                  <guide.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {guide.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {guide.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dealer Program Banner */}
      <div className="relative py-20 bg-gradient-to-r from-[rgb(138,0,0)] to-[rgb(153,27,27)]">
        <div className="absolute inset-0 bg-black/30"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
          }}
        ></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Get expert guidance and custom quotes for your flooring project. Our
            team is ready to help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GoldButton size="lg" className="px-8 py-4 text-lg">
              Get Custom Quote
            </GoldButton>
            <WhiteOutlineButton size="lg" className="px-8 py-4 text-lg">
              View Catalog
            </WhiteOutlineButton>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;