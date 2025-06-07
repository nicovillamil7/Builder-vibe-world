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

const Products = () => {
  const productCategories = [
    {
      id: "porcelain",
      name: "Porcelain Tiles",
      description:
        "Premium porcelain tiles for residential and commercial applications",
      products: [
        {
          name: "Urban Collection",
          size: "24x24, 12x24",
          finish: "Polished, Matte",
          price: "$4.50-6.50/sq ft",
          image:
            "https://images.unsplash.com/photo-1594739797188-97c1a5b64b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
          features: ["Slip Resistant", "Frost Proof", "Stain Resistant"],
        },
        {
          name: "Stone Look Series",
          size: "12x24, 6x24",
          finish: "Textured, Natural",
          price: "$5.50-8.50/sq ft",
          image:
            "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
          features: ["Natural Appearance", "Durable", "Low Maintenance"],
        },
        {
          name: "Wood Look Planks",
          size: "6x48, 9x48",
          finish: "Matte, Semi-Gloss",
          price: "$6.50-9.50/sq ft",
          image:
            "https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
          features: ["Realistic Wood Grain", "Waterproof", "Pet Friendly"],
        },
      ],
    },
    {
      id: "natural-stone",
      name: "Natural Stone",
      description:
        "Authentic natural stone materials including marble, travertine, and granite",
      products: [
        {
          name: "Carrara Marble",
          size: "12x12, 18x18",
          finish: "Polished, Honed",
          price: "$12.50-18.50/sq ft",
          image:
            "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
          features: ["Premium Quality", "Unique Veining", "Timeless Beauty"],
        },
        {
          name: "Travertine Collection",
          size: "16x16, 12x24",
          finish: "Tumbled, Filled",
          price: "$8.50-12.50/sq ft",
          image:
            "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
          features: ["Natural Texture", "Non-Slip Surface", "Heat Resistant"],
        },
        {
          name: "Granite Tiles",
          size: "12x12, 24x24",
          finish: "Polished, Flamed",
          price: "$15.50-22.50/sq ft",
          image:
            "https://images.unsplash.com/photo-1615651300008-40734b9b53b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
          features: ["Extremely Durable", "Scratch Resistant", "Heat Proof"],
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
          finish: "Embossed, Smooth",
          price: "$3.50-5.50/sq ft",
          image:
            "https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
          features: ["100% Waterproof", "Click Lock", "Comfortable Underfoot"],
        },
        {
          name: "SPC Core Collection",
          size: "7x48, 9x48",
          finish: "Textured, Matte",
          price: "$4.50-6.50/sq ft",
          image:
            "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
          features: [
            "Stone Polymer Core",
            "Dimensionally Stable",
            "Scratch Resistant",
          ],
        },
        {
          name: "Premium Laminate",
          size: "5x48, 8x48",
          finish: "AC4, AC5",
          price: "$2.50-4.50/sq ft",
          image:
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
          features: [
            "High Traffic Rated",
            "Easy Installation",
            "Fade Resistant",
          ],
        },
      ],
    },
    {
      id: "mosaics",
      name: "Mosaics",
      description: "Decorative mosaic tiles for accent walls and backsplashes",
      products: [
        {
          name: "Glass Mosaics",
          size: "1x1, 2x2 mesh",
          finish: "Glossy, Frosted",
          price: "$8.50-15.50/sq ft",
          image:
            "https://images.unsplash.com/photo-1562113530-57ba2cea56c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
          features: ["Light Reflective", "Easy to Clean", "Color Fast"],
        },
        {
          name: "Stone Mosaics",
          size: "1x2, 2x4 mesh",
          finish: "Natural, Tumbled",
          price: "$12.50-20.50/sq ft",
          image:
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
          features: ["Natural Variation", "Durable", "Unique Patterns"],
        },
        {
          name: "Metal Accents",
          size: "1x4, 2x6 strips",
          finish: "Brushed, Polished",
          price: "$18.50-35.50/sq ft",
          image:
            "https://images.unsplash.com/photo-1631545806609-59fb6f2e1b36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
          features: [
            "Modern Appeal",
            "Corrosion Resistant",
            "Easy Maintenance",
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

      {/* Search and Filter Section */}
      <div className="bg-gray-50 py-8">
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

      {/* Benefits Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Products?
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
