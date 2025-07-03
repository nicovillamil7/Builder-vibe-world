import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { SimpleReliableImage } from "@/components/ui/ReliableImage";
import { getReliableImageUrl } from "@/utils/imageUtils";
import { Shield, Users, Calculator } from "lucide-react";
import { Helmet } from "react-helmet-async";
import SEOHead from "@/components/SEOHead";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import {
  PrimaryButton,
  GoldButton,
  WhiteOutlineButton,
} from "@/components/ui/custom-buttons";

const Products = () => {
  const productCategories = [
    {
      id: "porcelain",
      title: "Porcelain Tiles",
      description: "High-quality porcelain tiles for residential and commercial applications",
      image: "porcelainTileCollection",
      features: ["Water resistant", "Durable", "Low maintenance"],
    },
    {
      id: "naturalStone",
      title: "Natural Stone",
      description: "Premium natural stone products including marble, granite, and travertine",
      image: "naturalStoneCollection",
      features: ["Unique patterns", "Long-lasting", "Elegant finish"],
    },
    {
      id: "laminates",
      title: "Laminate Flooring",
      description: "Premium laminate flooring options for residential and commercial projects",
      image: "laminateFlooringCollection",
      features: ["Easy installation", "Cost-effective", "Scratch resistant"],
    },
    {
      id: "mosaics",
      title: "Mosaic Tiles",
      description: "Stunning mosaic tiles for decorative and functional applications",
      image: "mosaicTileCollection",
      features: ["Artistic designs", "Versatile", "Accent pieces"],
    },
    {
      id: "wallPanels",
      title: "Wall Panels",
      description: "Modern wall panel systems for interior and exterior applications",
      image: "wallPanelCollection",
      features: ["Modern look", "Easy maintenance", "Versatile installation"],
    },
    {
      id: "grout",
      title: "Grout Solutions",
      description: "High-quality grout products for tile and stone installations",
      image: "groutCollection",
      features: ["Color matching", "Waterproof", "Professional grade"],
    },
    {
      id: "mortarMix",
      title: "Mortar Mix",
      description: "High-performance mortar mix solutions for tile and stone installation",
      image: "mortarMixCollection",
      features: ["Strong bond", "Quick setting", "Professional quality"],
    },
    {
      id: "metalTrims",
      title: "Metal Trims",
      description: "Professional metal trims and edge solutions for tile installations",
      image: "metalTrimCollection",
      features: ["Precision cut", "Corrosion resistant", "Professional finish"],
    },
  ];

  return (
    <Layout>
      <SEOHead 
        title="Premium Flooring Products - Genesis Stone Miami"
        description="Explore our extensive collection of porcelain tiles, natural stone, laminate flooring, and professional installation materials in Miami."
        keywords="flooring products Miami, porcelain tiles, natural stone, laminate flooring, mosaic tiles, Genesis Stone products"
        canonicalUrl="https://genesisstoneusa.com/products"
      />
      <BreadcrumbNavigation />

      {/* Structured Data for Products */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Genesis Stone Flooring Products",
            "description": "Premium flooring materials and installation supplies",
            "itemListElement": productCategories.map((product, index) => ({
              "@type": "Product",
              "position": index + 1,
              "name": product.title,
              "description": product.description,
              "image": `https://genesisstoneusa.com/images/${product.image}.jpg`,
              "brand": {
                "@type": "Brand",
                "name": "Genesis Stone"
              },
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "priceCurrency": "USD",
                "seller": {
                  "@type": "Organization",
                  "name": "Genesis Stone & More"
                }
              }
            }))
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-[rgb(138,0,0)] to-[rgb(153,27,27)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Premium Flooring Products
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover our extensive collection of high-quality flooring materials and installation supplies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GoldButton className="px-8 py-3 text-lg font-semibold">
              Request Catalog
            </GoldButton>
            <WhiteOutlineButton className="px-8 py-3 text-lg font-semibold">
              Contact Sales
            </WhiteOutlineButton>
          </div>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Product Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From premium tiles to professional installation materials, we have everything you need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category) => (
              <Card key={category.id} className="group hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <SimpleReliableImage
                    imageId={category.image}
                    alt={category.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[rgb(138,0,0)] transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {category.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {category.features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <PrimaryButton className="w-full">
                    Learn More
                  </PrimaryButton>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Products */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Genesis Stone Products
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[rgb(138,0,0)] text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Quality Guaranteed
              </h3>
              <p className="text-gray-600">
                All our products come with manufacturer warranties and our quality guarantee
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[rgb(138,0,0)] text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Expert Support
              </h3>
              <p className="text-gray-600">
                Our team provides professional guidance for material selection and installation
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[rgb(138,0,0)] text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Calculator className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Competitive Pricing
              </h3>
              <p className="text-gray-600">
                Direct relationships with manufacturers ensure the best prices for our customers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[rgb(138,0,0)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us for product samples, pricing, and expert consultation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GoldButton className="px-8 py-3 text-lg font-semibold">
              Request Samples
            </GoldButton>
            <WhiteOutlineButton className="px-8 py-3 text-lg font-semibold">
              Get Quote
            </WhiteOutlineButton>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;