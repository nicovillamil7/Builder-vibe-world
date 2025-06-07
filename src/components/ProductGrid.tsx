import { PrimaryButton, OutlineButton } from "@/components/ui/custom-buttons";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Porcelain Tiles",
    description: "Durable, water-resistant, and available in countless designs",
    image: "https://i.imgur.com/8K2YQnV.jpg", // Modern pool deck with porcelain
    features: [
      "Water Resistant",
      "Durable",
      "Easy Maintenance",
      "Endless Designs",
    ],
    category: "Premium",
  },
  {
    id: 2,
    name: "Laminate & Vinyl SPC",
    description: "Perfect blend of style, comfort, and affordability",
    image: "https://i.imgur.com/VyN8mFj.jpg", // Installation process image
    features: ["Waterproof", "Comfortable", "Affordable", "Easy Install"],
    category: "Popular",
  },
  {
    id: 3,
    name: "Natural Stone",
    description: "Timeless elegance with unique patterns and textures",
    image: "https://i.imgur.com/RLp4K9X.jpg", // Travertine pool area
    features: ["Unique Patterns", "Timeless", "Natural Beauty", "High Value"],
    category: "Luxury",
  },
  {
    id: 4,
    name: "Mosaics",
    description: "Intricate designs for accent walls and decorative features",
    image: "https://i.imgur.com/3N7ZqB8.jpg", // Blue mosaic spa
    features: ["Custom Designs", "Artistic", "Accent Features", "Handcrafted"],
    category: "Specialty",
  },
];

const ProductGrid = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Genesis Stone has these amazing products for you
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive collection of premium flooring materials,
            carefully curated for contractors, designers, and discerning
            homeowners across South Florida.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback to Unsplash images if imgur fails
                      const fallbacks = {
                        1: "https://images.unsplash.com/photo-1594739797188-97c1a5b64b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                        2: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                        3: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                        4: "https://images.unsplash.com/photo-1562113530-57ba2cea56c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                      };
                      e.target.src = fallbacks[product.id];
                    }}
                  />
                  <Badge
                    className="absolute top-3 right-3 bg-[rgb(138,0,0)] hover:bg-[rgb(153,27,27)]"
                    variant="default"
                  >
                    {product.category}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>

                {/* Features List */}
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <OutlineButton className="w-full">Get Sample</OutlineButton>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Application Showcase */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              See Our Products in Action
            </h3>
            <p className="text-gray-600">
              Real installations from our satisfied customers across South
              Florida
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://i.imgur.com/mY8KqL2.jpg"
                alt="Luxury interior with marble accent wall"
                className="w-full h-64 object-cover"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-semibold">Luxury Interior Design</h4>
                <p className="text-sm">Marble & Porcelain Combination</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://i.imgur.com/4N8kpQ7.jpg"
                alt="Modern white porcelain living space"
                className="w-full h-64 object-cover"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1594739797188-97c1a5b64b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-semibold">Contemporary Elegance</h4>
                <p className="text-sm">Polished Porcelain Tiles</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://i.imgur.com/8mP3QnR.jpg"
                alt="Professional installation process"
                className="w-full h-64 object-cover"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-semibold">Professional Installation</h4>
                <p className="text-sm">Expert Craftsmanship</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
