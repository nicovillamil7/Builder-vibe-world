import Layout from "@/components/Layout";
import {
  GoldButton,
  WhiteOutlineButton,
  PrimaryButton,
} from "@/components/ui/custom-buttons";
import { Card, CardContent } from "@/components/ui/card";
import { SimpleReliableImage } from "@/components/ui/ReliableImage";
import { getReliableImageUrl } from "@/utils/imageUtils";
import { Shield, Users, Calculator } from "lucide-react";

const Products = () => {
  const productCategories = [
    {
      id: "porcelain",
      name: "Porcelain",
      description:
        "High-performance and versatile, porcelain tiles offer exceptional durability, water resistance, and timeless design. Perfect for both indoor and outdoor spaces, they deliver a sophisticated look while standing up to heavy traffic and wear.",
      imageId: "porcelainLargeFormat",
    },
    {
      id: "natural-stone",
      name: "Natural Stone",
      description:
        "Bring the beauty of nature into your space with our premium selection of natural stone. Each piece is unique in texture and pattern, offering unmatched elegance and durability for floors, walls, and architectural features.",
      imageId: "naturalTravertine",
    },
    {
      id: "laminates",
      name: "Laminates",
      description:
        "A cost-effective and stylish flooring solution, our laminate options replicate the look of hardwood and stone while providing excellent resistance to scratches, stains, and moisture—ideal for both residential and commercial projects.",
      imageId: "laminateHardwood",
    },
    {
      id: "mosaics",
      name: "Mosaics",
      description:
        "Add a touch of creativity and detail with our mosaic collections. Available in various materials, colors, and patterns, mosaics are perfect for backsplashes, feature walls, and decorative accents that elevate any design.",
      imageId: "blueMosaicSpa",
    },
    {
      id: "wall-panels",
      name: "Wall Panels",
      description:
        "Transform any room with our modern wall panels. Easy to install and maintain, they provide texture, depth, and character to both residential and commercial interiors, creating impactful and stylish vertical surfaces.",
      imageId: "wallPanels",
    },
    {
      id: "metal-trims",
      name: "Metal Trims",
      description:
        "Ensure a flawless finish with our durable metal trims. Designed to protect edges and transitions, they enhance both the appearance and longevity of tile and flooring installations.",
      imageId: "metalTrims",
    },
    {
      id: "grout",
      name: "Grout",
      description:
        "Essential for a perfect tile installation, our grout solutions offer strong adhesion, color consistency, and resistance to stains and cracking, ensuring long-lasting and beautiful results.",
      imageId: "grout",
    },
    {
      id: "mortar-mix",
      name: "Mortar Mix",
      description:
        "Our high-performance mortar mixes deliver excellent bonding strength for various tile and stone applications. Easy to work with, they provide the reliability and durability needed for professional-grade installations.",
      imageId: "mortarMix",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-[rgb(138,0,0)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Floor Tiles Miami | Decorative Floors Collection
          </h1>
          <p className="text-xl sm:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto font-light">
            Explore Miami's largest selection of thin tile, natural stone floors, ceramics floor, laminate flooring, and decorative floors. Premium tile and flooring solutions for contractors, designers, and homeowners across South Florida.
          </p>
        </div>
      </div>

      {/* Product Categories Grid */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {productCategories.map((category, index) => (
              <Card
                key={category.id}
                className="group bg-white border-0 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative">
                  <SimpleReliableImage
                    imageId={category.imageId}
                    alt={`${category.name} - Premium flooring materials`}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {category.name}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  <PrimaryButton className="w-full group-hover:bg-[rgb(153,27,27)] transition-colors duration-300">
                    Explore {category.name}
                  </PrimaryButton>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Dealer Program Banner */}
      <div className="relative py-20 bg-gradient-to-r from-[rgb(138,0,0)] to-[rgb(153,27,27)]">
        <div className="absolute inset-0 bg-black/30"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url(${getReliableImageUrl("showroomDisplay")})`,
          }}
        ></div>

        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center text-white">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl sm:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Contact us for personalized product recommendations, competitive
            pricing, and expert installation guidance.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <GoldButton size="lg" className="px-8">
              Get Custom Quote
            </GoldButton>
            <WhiteOutlineButton size="lg" className="px-8">
              Learn More
            </WhiteOutlineButton>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Genesis Stone?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're committed to providing exceptional quality, service, and
              value for every project, big or small.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-[rgb(138,0,0)]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Premium Quality
              </h3>
              <p className="text-gray-600 leading-relaxed">
                All products come with manufacturer warranties and our
                comprehensive quality assurance guarantee.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-[rgb(138,0,0)]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Expert Support
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Professional guidance from material selection through final
                installation with our experienced team.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="h-8 w-8 text-[rgb(138,0,0)]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Competitive Pricing
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Volume discounts available for contractors and bulk buyers with
                transparent, competitive pricing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
