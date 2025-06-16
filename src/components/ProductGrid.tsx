import { useState, useRef } from "react";
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
    imageId: "modernPoolDeck",
    category: "Premium",
  },
  {
    id: 6,
    name: "Metal Trims",
    description:
      "Ensure a flawless finish with our durable metal trims. Designed to protect edges and transitions for enhanced appearance and longevity.",
    imageId: "vinylInstallation",
    category: "Popular",
  },
  {
    id: 7,
    name: "Grout",
    description:
      "Essential for perfect tile installation. Our grout solutions offer strong adhesion, color consistency, and resistance to stains and cracking.",
    imageId: "travertinePool",
    category: "Luxury",
  },
  {
    id: 8,
    name: "Mortar Mix",
    description:
      "High-performance mortar mixes deliver excellent bonding strength for various tile and stone applications with professional-grade reliability.",
    imageId: "blueMosaicSpa",
    category: "Specialty",
  },
];

const ProductGrid = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const itemWidth = 320; // Card width (288px) + gap (32px)
  const visibleItems = 3; // Number of items visible at once
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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Selection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our collection of flooring materials, carefully for
            contractors, designers, and homeowners across South Florida.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-[rgb(138,0,0)] hover:bg-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-[rgb(138,0,0)] hover:bg-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Products Carousel */}
          <div
            className="overflow-hidden px-12"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div
              className="flex gap-8 transition-transform duration-500 ease-out pb-6"
              style={{
                transform: `translateX(-${currentIndex * itemWidth}px)`,
              }}
            >
              {products.map((product) => (
                <Card
                  key={product.id}
                  className="flex-shrink-0 w-72 h-[480px] group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg flex flex-col"
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
                      className="w-full hover:bg-[rgb(138,0,0)] hover:text-white hover:border-[rgb(138,0,0)] transition-all duration-200"
                      style={{ borderRadius: "12px" }}
                    >
                      Get Sample
                    </OutlineButton>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-[rgb(138,0,0)] scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
