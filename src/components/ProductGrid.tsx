import { PrimaryButton, OutlineButton } from "@/components/ui/custom-buttons";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import { SimpleReliableImage } from "@/components/ui/ReliableImage";

const products = [
  {
    id: 1,
    name: "Porcelain Tiles",
    description: "Durable, water-resistant, and available in countless designs",
    imageId: "modernPoolDeck",
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
    imageId: "vinylInstallation",
    features: ["Waterproof", "Comfortable", "Affordable", "Easy Install"],
    category: "Popular",
  },
  {
    id: 3,
    name: "Natural Stone",
    description: "Timeless elegance with unique patterns and textures",
    imageId: "travertinePool",
    features: ["Unique Patterns", "Timeless", "Natural Beauty", "High Value"],
    category: "Luxury",
  },
  {
    id: 4,
    name: "Mosaics",
    description: "Intricate designs for accent walls and decorative features",
    imageId: "blueMosaicSpa",
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
                  <SimpleReliableImage
                    imageId={product.imageId}
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
              <SimpleReliableImage
                imageId="luxuryInterior"
                alt="Luxury interior with marble accent wall"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-semibold">Luxury Interior Design</h4>
                <p className="text-sm">Marble & Porcelain Combination</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <SimpleReliableImage
                imageId="contemporaryWhite"
                alt="Modern white porcelain living space"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-semibold">Contemporary Elegance</h4>
                <p className="text-sm">Polished Porcelain Tiles</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <SimpleReliableImage
                imageId="professionalInstallation"
                alt="Professional installation process"
                className="w-full h-64 object-cover"
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
