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
    image: "/placeholder.svg",
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
    image: "/placeholder.svg",
    features: ["Waterproof", "Comfortable", "Affordable", "Easy Install"],
    category: "Popular",
  },
  {
    id: 3,
    name: "Natural Stone",
    description: "Timeless elegance with unique patterns and textures",
    image: "/placeholder.svg",
    features: ["Unique Patterns", "Timeless", "Natural Beauty", "High Value"],
    category: "Luxury",
  },
  {
    id: 4,
    name: "Mosaics",
    description: "Intricate designs for accent walls and decorative features",
    image: "/placeholder.svg",
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
            Miami Floors Pro has these amazing products for you
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
      </div>
    </section>
  );
};

export default ProductGrid;
