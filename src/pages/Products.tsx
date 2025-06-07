import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
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
          image: "/placeholder.svg",
          features: ["Slip Resistant", "Frost Proof", "Stain Resistant"],
        },
        {
          name: "Stone Look Series",
          size: "12x24, 6x24",
          finish: "Textured, Natural",
          price: "$5.50-8.50/sq ft",
          image: "/placeholder.svg",
          features: ["Natural Appearance", "Durable", "Low Maintenance"],
        },
        {
          name: "Wood Look Planks",
          size: "6x48, 9x48",
          finish: "Matte, Semi-Gloss",
          price: "$6.50-9.50/sq ft",
          image: "/placeholder.svg",
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
          image: "/placeholder.svg",
          features: ["Premium Quality", "Unique Veining", "Timeless Beauty"],
        },
        {
          name: "Travertine Collection",
          size: "16x16, 12x24",
          finish: "Tumbled, Filled",
          price: "$8.50-12.50/sq ft",
          image: "/placeholder.svg",
          features: ["Natural Texture", "Non-Slip Surface", "Heat Resistant"],
        },
        {
          name: "Granite Tiles",
          size: "12x12, 24x24",
          finish: "Polished, Flamed",
          price: "$15.50-22.50/sq ft",
          image: "/placeholder.svg",
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
          image: "/placeholder.svg",
          features: ["100% Waterproof", "Click Lock", "Comfortable Underfoot"],
        },
        {
          name: "SPC Core Collection",
          size: "7x48, 9x48",
          finish: "Textured, Matte",
          price: "$4.50-6.50/sq ft",
          image: "/placeholder.svg",
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
          image: "/placeholder.svg",
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
          image: "/placeholder.svg",
          features: ["Light Reflective", "Easy to Clean", "Color Fast"],
        },
        {
          name: "Stone Mosaics",
          size: "1x2, 2x4 mesh",
          finish: "Natural, Tumbled",
          price: "$12.50-20.50/sq ft",
          image: "/placeholder.svg",
          features: ["Natural Variation", "Durable", "Unique Patterns"],
        },
        {
          name: "Metal Accents",
          size: "1x4, 2x6 strips",
          finish: "Brushed, Polished",
          price: "$18.50-35.50/sq ft",
          image: "/placeholder.svg",
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
      <div className="bg-red-800 text-white py-16">
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
              <Button variant="outline" className="flex items-center space-x-2">
                <Filter className="h-4 w-4" />
                <span>Filter</span>
              </Button>
              <Button className="bg-red-800 hover:bg-red-900">
                Request Samples
              </Button>
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
                            className="absolute top-3 right-3 bg-red-800 hover:bg-red-900"
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
                          <div className="text-lg font-bold text-red-800">
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
                        <Button className="w-full bg-red-800 hover:bg-red-900">
                          Get Quote
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full border-red-800 text-red-800 hover:bg-red-50"
                        >
                          Request Sample
                        </Button>
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
                <CheckCircle className="h-8 w-8 text-red-800" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">
                All products come with manufacturer warranties and our quality
                assurance
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-red-800" />
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
                <CheckCircle className="h-8 w-8 text-red-800" />
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
      <div className="bg-red-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us for personalized product recommendations and pricing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-yellow-400 text-black hover:bg-yellow-500 px-8"
            >
              Get Custom Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-800 px-8"
            >
              Schedule Showroom Visit
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
