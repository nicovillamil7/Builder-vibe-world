import Layout from "@/components/Layout";
import {
  GoldButton,
  WhiteOutlineButton,
  PrimaryButton,
  OutlineButton,
} from "@/components/ui/custom-buttons";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { CheckCircle, Search, Filter } from "lucide-react";
import { SimpleReliableImage } from "@/components/ui/ReliableImage";
import { getReliableImageUrl } from "@/utils/imageUtils";

const Products = () => {
  const productCategories = [
    {
      id: "porcelain",
      name: "Porcelain Tiles",
      description:
        "Premium porcelain tiles for residential and commercial applications",
      products: [
        {
          name: "Large Format Collection",
          size: "24x48, 32x32",
          finish: "Polished, Matte, Textured",
          price: "$5.50-8.50/sq ft",
          imageId: "modernPoolDeck",
          features: ["Pool Safe", "Frost Proof", "Slip Resistant"],
        },
        {
          name: "Marble Look Series",
          size: "12x24, 24x24",
          finish: "Polished, Honed",
          price: "$6.50-9.50/sq ft",
          imageId: "luxuryInterior",
          features: ["Natural Veining", "Luxury Appeal", "Low Maintenance"],
        },
        {
          name: "Contemporary White",
          size: "12x24, 18x36",
          finish: "High Gloss, Matte",
          price: "$4.50-7.50/sq ft",
          imageId: "contemporaryWhite",
          features: ["Bright Spaces", "Easy Clean", "Timeless Design"],
        },
      ],
    },
    {
      id: "natural-stone",
      name: "Natural Stone",
      description:
        "Authentic natural stone materials including travertine, limestone, and granite",
      products: [
        {
          name: "Travertine Pool Deck",
          size: "16x16, 16x24",
          finish: "Tumbled, Filled & Honed",
          price: "$8.50-12.50/sq ft",
          image: "https://i.imgur.com/RLp4K9X.jpg", // Travertine pool area
          features: ["Non-Slip Surface", "Heat Resistant", "Natural Beauty"],
        },
        {
          name: "Dark Slate Collection",
          size: "12x12, 24x24",
          finish: "Natural Cleft, Honed",
          price: "$10.50-15.50/sq ft",
          image: "https://i.imgur.com/7B9qN8W.jpg", // Dark stone living room
          features: ["Rich Color", "Durable", "Sophisticated Look"],
        },
        {
          name: "Limestone Elegance",
          size: "18x18, 12x24",
          finish: "Honed, Tumbled",
          price: "$12.50-18.50/sq ft",
          image: "https://i.imgur.com/9L6fQ4P.jpg", // Large format pool deck
          features: ["Consistent Color", "Pool Safe", "Premium Quality"],
        },
      ],
    },
    {
      id: "vinyl-laminate",
      name: "Vinyl & Laminate",
      description: "Modern LVP, SPC, and laminate flooring solutions",
      products: [
        {
          name: "Luxury Vinyl Plank",
          size: "7x48, 9x60",
          finish: "Embossed Wood Grain",
          price: "$3.50-5.50/sq ft",
          image: "https://i.imgur.com/VyN8mFj.jpg", // Installation process
          features: ["100% Waterproof", "Click Lock", "Easy Install"],
        },
        {
          name: "SPC Core Collection",
          size: "7x48, 9x48",
          finish: "Textured, Matte",
          price: "$4.50-6.50/sq ft",
          image: "https://i.imgur.com/8mP3QnR.jpg", // Professional installation
          features: ["Stone Polymer Core", "Scratch Resistant", "Pet Friendly"],
        },
        {
          name: "Wide Plank Laminate",
          size: "8x48, 10x48",
          finish: "AC5 Rated",
          price: "$2.50-4.50/sq ft",
          image: "https://i.imgur.com/6T9mL3Q.jpg", // Light dining area
          features: [
            "High Traffic Rated",
            "Fade Resistant",
            "Easy Maintenance",
          ],
        },
      ],
    },
    {
      id: "mosaics",
      name: "Mosaics",
      description:
        "Decorative mosaic tiles for pools, spas, and accent features",
      products: [
        {
          name: "Glass Pool Mosaics",
          size: "1x1, 2x2 mesh",
          finish: "Glossy, Iridescent",
          price: "$12.50-18.50/sq ft",
          image: "https://i.imgur.com/3N7ZqB8.jpg", // Blue mosaic spa
          features: ["Pool & Spa Safe", "Color Fast", "Light Reflective"],
        },
        {
          name: "Stone Blend Mosaics",
          size: "1x2, 2x4 mesh",
          finish: "Natural, Tumbled",
          price: "$15.50-22.50/sq ft",
          image:
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          features: ["Natural Variation", "Handcrafted", "Unique Patterns"],
        },
        {
          name: "Custom Design Mosaics",
          size: "Custom Patterns",
          finish: "Mixed Materials",
          price: "$25.50-45.50/sq ft",
          image:
            "https://images.unsplash.com/photo-1631545806609-59fb6f2e1b36?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          features: [
            "Bespoke Designs",
            "Artist Collaboration",
            "Premium Materials",
          ],
        },
      ],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-[rgb(138,0,0)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Premium Flooring Products
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Explore our comprehensive collection of high-quality flooring
            materials, carefully curated for contractors, designers, and
            homeowners across South Florida.
          </p>
        </div>
      </div>

      {/* Showroom Image Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Visit Our Miami Showroom
            </h2>
            <p className="text-lg text-gray-600">
              See and feel our products before you buy. Professional
              consultations available.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-lg shadow-xl">
            <img
              src="https://i.imgur.com/5R8qN9X.jpg"
              alt="Genesis Stone showroom with tile samples on display"
              className="w-full h-96 object-cover"
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-xl mx-auto px-6 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Experience Our Materials
                </h3>
                <p className="mb-6">
                  Touch, feel, and compare hundreds of samples in our
                  state-of-the-art showroom.
                </p>
                <GoldButton size="lg">Schedule Showroom Visit</GoldButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="Search products..." className="pl-10" />
            </div>
            <div className="flex items-center space-x-4">
              <OutlineButton className="flex items-center space-x-2">
                <Filter className="h-4 w-4" />
                <span>Filter</span>
              </OutlineButton>
              <PrimaryButton>Request Samples</PrimaryButton>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="porcelain" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              {productCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="text-sm"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {productCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {category.name}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    {category.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.products.map((product, index) => (
                    <Card
                      key={index}
                      className="group hover:shadow-lg transition-all duration-300"
                    >
                      <CardHeader className="p-0">
                        <div className="relative overflow-hidden rounded-t-lg">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                            onError={(e) => {
                              // Fallback images for each category
                              const fallbacks = {
                                porcelain:
                                  "https://images.unsplash.com/photo-1594739797188-97c1a5b64b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                                "natural-stone":
                                  "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                                "vinyl-laminate":
                                  "https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                                mosaics:
                                  "https://images.unsplash.com/photo-1562113530-57ba2cea56c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                              };
                              e.target.src =
                                fallbacks[category.id] ||
                                "https://images.unsplash.com/photo-1594739797188-97c1a5b64b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";
                            }}
                          />
                          <Badge
                            className="absolute top-3 right-3 bg-[rgb(138,0,0)] hover:bg-[rgb(153,27,27)]"
                            variant="default"
                          >
                            {category.name}
                          </Badge>
                        </div>
                      </CardHeader>

                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {product.name}
                        </h3>

                        <div className="space-y-2 mb-4 text-sm text-gray-600">
                          <div>
                            <strong>Size:</strong> {product.size}
                          </div>
                          <div>
                            <strong>Finish:</strong> {product.finish}
                          </div>
                          <div className="text-lg font-bold text-[rgb(138,0,0)]">
                            {product.price}
                          </div>
                        </div>

                        {/* Features List */}
                        <ul className="space-y-1 mb-4">
                          {product.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-center text-sm text-gray-600"
                            >
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </CardContent>

                      <CardFooter className="p-6 pt-0 space-y-2">
                        <PrimaryButton className="w-full">
                          Get Quote
                        </PrimaryButton>
                        <OutlineButton className="w-full">
                          Request Sample
                        </OutlineButton>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>

      {/* Installation Process Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Professional Installation Services
            </h2>
            <p className="text-lg text-gray-600">
              From selection to completion, we ensure your project succeeds
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Expert Craftsmanship
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Licensed & Insured Installers</strong>
                    <p className="text-gray-600">
                      All our installation partners are fully licensed and carry
                      comprehensive insurance.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Material & Labor Warranty</strong>
                    <p className="text-gray-600">
                      Complete peace of mind with warranties on both materials
                      and installation work.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Project Management</strong>
                    <p className="text-gray-600">
                      Dedicated project coordinator ensures timeline and quality
                      standards are met.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://i.imgur.com/VyN8mFj.jpg"
                alt="Professional flooring installation in progress"
                className="w-full h-80 object-cover"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Genesis Stone?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-[rgb(138,0,0)]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">
                All products come with manufacturer warranties and our quality
                assurance
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-[rgb(138,0,0)]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Competitive Pricing
              </h3>
              <p className="text-gray-600">
                Volume discounts available for contractors and bulk buyers
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-[rgb(138,0,0)]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
              <p className="text-gray-600">
                Professional guidance from selection to installation
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[rgb(138,0,0)] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us for personalized product recommendations and pricing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GoldButton size="lg" className="px-8">
              Get Custom Quote
            </GoldButton>
            <WhiteOutlineButton size="lg" className="px-8">
              Schedule Showroom Visit
            </WhiteOutlineButton>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
