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
    name: "Porcelain",
    description:
      "High-performance and versatile, porcelain tiles offer exceptional durability, water resistance, and timeless design. Perfect for both indoor and outdoor spaces, they deliver a sophisticated look while standing up to heavy traffic and wear.",
    imageId: "modernPoolDeck",
    category: "Premium",
  },
  {
    id: 2,
    name: "Natural Stone",
    description:
      "Bring the beauty of nature into your space with our premium selection of natural stone. Each piece is unique in texture and pattern, offering unmatched elegance and durability for floors, walls, and architectural features.",
    imageId: "travertinePool",
    category: "Popular",
  },
  {
    id: 3,
    name: "Laminates",
    description:
      "A cost-effective and stylish flooring solution, our laminate options replicate the look of hardwood and stone while providing excellent resistance to scratches, stains, and moisture—ideal for both residential and commercial projects.",
    imageId: "vinylInstallation",
    category: "Luxury",
  },
  {
    id: 4,
    name: "Mosaics",
    description:
      "Add a touch of creativity and detail with our mosaic collections. Available in various materials, colors, and patterns, mosaics are perfect for backsplashes, feature walls, and decorative accents that elevate any design.",
    imageId: "blueMosaicSpa",
    category: "Specialty",
  },
  {
    id: 5,
    name: "Wall Panels",
    description:
      "Transform any room with our modern wall panels. Easy to install and maintain, they provide texture, depth, and character to both residential and commercial interiors, creating impactful and stylish vertical surfaces.",
    imageId: "modernPoolDeck",
    category: "Premium",
  },
  {
    id: 6,
    name: "Metal Trims",
    description:
      "Ensure a flawless finish with our durable metal trims. Designed to protect edges and transitions, they enhance both the appearance and longevity of tile and flooring installations.",
    imageId: "vinylInstallation",
    category: "Popular",
  },
  {
    id: 7,
    name: "Grout",
    description:
      "Essential for a perfect tile installation, our grout solutions offer strong adhesion, color consistency, and resistance to stains and cracking, ensuring long-lasting and beautiful results.",
    imageId: "travertinePool",
    category: "Luxury",
  },
  {
    id: 8,
    name: "Mortar Mix",
    description:
      "Our high-performance mortar mixes deliver excellent bonding strength for various tile and stone applications. Easy to work with, they provide the reliability and durability needed for professional-grade installations.",
    imageId: "blueMosaicSpa",
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
            Our Selection
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
