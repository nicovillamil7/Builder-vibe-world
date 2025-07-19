import React from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { PRODUCT_IMAGES } from "@/utils/sitemapGenerator";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PrimaryButton } from "@/components/ui/custom-buttons";
import { SimpleReliableImage } from "@/components/ui/ReliableImage";

// Helper function to get image ID for category
const getImageIdForCategory = (category: string | undefined) => {
  const imageMap: Record<string, string> = {
    "natural-stone": "travertinePool",
    naturalStone: "travertinePool",
    porcelain: "modernPoolDeck",
    laminates: "vinylInstallation",
    mosaics: "blueMosaicSpa",
    "wall-panels": "wallPanels",
    wallPanels: "wallPanels",
    "metal-trims": "metalTrims",
    metalTrims: "metalTrims",
    grout: "grout",
    "mortar-mix": "mortarMix",
    mortarMix: "mortarMix",
  };
  return imageMap[category || ""] || "modernPoolDeck";
};

// Helper function to get product features by category
const getProductFeatures = (category: string | undefined) => {
  const featuresMap: Record<
    string,
    Array<{ title: string; description: string }>
  > = {
    "natural-stone": [
      {
        title: "Unique Beauty",
        description:
          "Each piece features distinct natural patterns, colors, and textures that cannot be replicated.",
      },
      {
        title: "Exceptional Durability",
        description:
          "Natural stone withstands heavy traffic and harsh weather conditions for decades.",
      },
      {
        title: "Timeless Value",
        description:
          "Increases property value and never goes out of style, making it a smart long-term investment.",
      },
    ],
    naturalStone: [
      {
        title: "Unique Beauty",
        description:
          "Each piece features distinct natural patterns, colors, and textures that cannot be replicated.",
      },
      {
        title: "Exceptional Durability",
        description:
          "Natural stone withstands heavy traffic and harsh weather conditions for decades.",
      },
      {
        title: "Timeless Value",
        description:
          "Increases property value and never goes out of style, making it a smart long-term investment.",
      },
    ],
    porcelain: [
      {
        title: "Superior Strength",
        description:
          "Fired at extremely high temperatures for maximum durability and impact resistance.",
      },
      {
        title: "Water Resistant",
        description:
          "Non-porous surface makes it ideal for bathrooms, kitchens, and outdoor applications.",
      },
      {
        title: "Low Maintenance",
        description:
          "Easy to clean and maintain with excellent stain and scratch resistance.",
      },
    ],
    laminates: [
      {
        title: "Cost Effective",
        description:
          "Get the look of hardwood or stone at a fraction of the cost without sacrificing quality.",
      },
      {
        title: "Easy Installation",
        description:
          "Click-lock system allows for quick DIY installation over existing floors.",
      },
      {
        title: "Scratch Resistant",
        description:
          "Advanced wear layer protects against daily wear, scratches, and fading.",
      },
    ],
    mosaics: [
      {
        title: "Artistic Design",
        description:
          "Create stunning visual effects with endless patterns, colors, and material combinations.",
      },
      {
        title: "Versatile Applications",
        description:
          "Perfect for accent walls, backsplashes, borders, and decorative features.",
      },
      {
        title: "Easy to Work With",
        description:
          "Pre-mounted on mesh backing for simplified installation and consistent spacing.",
      },
    ],
    "wall-panels": [
      {
        title: "Modern Aesthetics",
        description:
          "Transform any space with contemporary textures and dimensional designs.",
      },
      {
        title: "Quick Installation",
        description:
          "Lightweight panels install easily over existing walls without major renovation.",
      },
      {
        title: "Sound Absorption",
        description:
          "Improve acoustics while adding visual interest to residential and commercial spaces.",
      },
    ],
    wallPanels: [
      {
        title: "Modern Aesthetics",
        description:
          "Transform any space with contemporary textures and dimensional designs.",
      },
      {
        title: "Quick Installation",
        description:
          "Lightweight panels install easily over existing walls without major renovation.",
      },
      {
        title: "Sound Absorption",
        description:
          "Improve acoustics while adding visual interest to residential and commercial spaces.",
      },
    ],
    "metal-trims": [
      {
        title: "Professional Finish",
        description:
          "Create clean, polished edges and transitions between different flooring materials.",
      },
      {
        title: "Durable Protection",
        description:
          "Protect tile edges from chipping and wear in high-traffic areas.",
      },
      {
        title: "Variety of Styles",
        description:
          "Available in multiple finishes and profiles to match any design aesthetic.",
      },
    ],
    metalTrims: [
      {
        title: "Professional Finish",
        description:
          "Create clean, polished edges and transitions between different flooring materials.",
      },
      {
        title: "Durable Protection",
        description:
          "Protect tile edges from chipping and wear in high-traffic areas.",
      },
      {
        title: "Variety of Styles",
        description:
          "Available in multiple finishes and profiles to match any design aesthetic.",
      },
    ],
    grout: [
      {
        title: "Strong Adhesion",
        description:
          "Premium formulation ensures secure bonding and long-lasting joint integrity.",
      },
      {
        title: "Stain Resistance",
        description:
          "Advanced polymer technology resists stains, mold, and mildew growth.",
      },
      {
        title: "Color Consistency",
        description:
          "Consistent color throughout the curing process with minimal efflorescence.",
      },
    ],
    "mortar-mix": [
      {
        title: "Professional Grade",
        description:
          "Specially formulated for contractors and demanding commercial applications.",
      },
      {
        title: "Fast Setting",
        description:
          "Optimized curing time allows for efficient project completion.",
      },
      {
        title: "Superior Bond",
        description:
          "Creates strong, permanent bonds with various tile and stone materials.",
      },
    ],
    mortarMix: [
      {
        title: "Professional Grade",
        description:
          "Specially formulated for contractors and demanding commercial applications.",
      },
      {
        title: "Fast Setting",
        description:
          "Optimized curing time allows for efficient project completion.",
      },
      {
        title: "Superior Bond",
        description:
          "Creates strong, permanent bonds with various tile and stone materials.",
      },
    ],
  };

  return (
    featuresMap[category || ""] || [
      {
        title: "Quality Materials",
        description:
          "Premium materials sourced from trusted manufacturers worldwide.",
      },
      {
        title: "Expert Support",
        description:
          "Professional guidance from our experienced flooring specialists.",
      },
      {
        title: "Competitive Pricing",
        description:
          "Best value pricing for both retail and wholesale customers.",
      },
    ]
  );
};

// Helper function to get applications by category
const getApplications = (category: string | undefined) => {
  const applicationsMap: Record<string, string[]> = {
    "natural-stone": [
      "Kitchens",
      "Bathrooms",
      "Entryways",
      "Outdoor Patios",
      "Pool Areas",
      "Countertops",
      "Accent Walls",
    ],
    naturalStone: [
      "Kitchens",
      "Bathrooms",
      "Entryways",
      "Outdoor Patios",
      "Pool Areas",
      "Countertops",
      "Accent Walls",
    ],
    porcelain: [
      "Bathrooms",
      "Kitchens",
      "Living Areas",
      "Commercial Spaces",
      "Outdoor Applications",
      "High-Traffic Areas",
    ],
    laminates: [
      "Living Rooms",
      "Bedrooms",
      "Hallways",
      "Home Offices",
      "Apartments",
      "Budget Projects",
    ],
    mosaics: [
      "Backsplashes",
      "Shower Walls",
      "Pool Waterlines",
      "Accent Borders",
      "Feature Walls",
      "Art Installations",
    ],
    "wall-panels": [
      "Living Rooms",
      "Bedrooms",
      "Offices",
      "Restaurants",
      "Retail Spaces",
      "Accent Walls",
    ],
    wallPanels: [
      "Living Rooms",
      "Bedrooms",
      "Offices",
      "Restaurants",
      "Retail Spaces",
      "Accent Walls",
    ],
    "metal-trims": [
      "Tile Edges",
      "Stair Nosing",
      "Transitions",
      "Expansion Joints",
      "Decorative Borders",
    ],
    metalTrims: [
      "Tile Edges",
      "Stair Nosing",
      "Transitions",
      "Expansion Joints",
      "Decorative Borders",
    ],
    grout: [
      "Tile Installation",
      "Stone Setting",
      "Mosaic Work",
      "Repair Projects",
      "Commercial Applications",
    ],
    "mortar-mix": [
      "Tile Installation",
      "Stone Veneer",
      "Commercial Projects",
      "Wet Areas",
      "Heavy-Duty Applications",
    ],
    mortarMix: [
      "Tile Installation",
      "Stone Veneer",
      "Commercial Projects",
      "Wet Areas",
      "Heavy-Duty Applications",
    ],
  };

  return (
    applicationsMap[category || ""] || [
      "Residential Projects",
      "Commercial Applications",
      "Renovation Projects",
    ]
  );
};

const ProductCategory = () => {
  const { category } = useParams<{ category: string }>();

  // Try to find the category data, checking both kebab-case and camelCase keys
  let categoryData = null;
  if (category) {
    categoryData =
      PRODUCT_IMAGES[category] ||
      PRODUCT_IMAGES[category.replace(/-/g, "")] || // Remove hyphens
      PRODUCT_IMAGES[
        category
          .split("-")
          .map((word, i) =>
            i === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1),
          )
          .join("")
      ]; // Convert to camelCase
  }

  if (!categoryData) {
    return (
      <Layout>
        <div>Product category not found</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEOHead
        title={`${categoryData.title} | Genesis Stone`}
        description={categoryData.caption}
        canonicalUrl={`https://genesisstoneusa.com/products/${category}`}
        ogImage={categoryData.loc}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">
            {categoryData.title}
          </h1>
          <p className="text-lg mb-8 text-gray-600 max-w-3xl mx-auto">
            {categoryData.caption}
          </p>
        </div>

        {/* Hero Image Section */}
        <div className="mb-12">
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
            <SimpleReliableImage
              imageId={getImageIdForCategory(category)}
              alt={categoryData.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Product Information Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {getProductFeatures(category).map((feature, index) => (
            <Card key={index} className="border-gray-200">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {feature.title}
                  </h3>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Applications Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Perfect For
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {getApplications(category).map((application, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-sm py-2 px-4"
              >
                {application}
              </Badge>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Contact our experts for personalized recommendations and
              professional installation services for your{" "}
              {categoryData.title.toLowerCase()} project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PrimaryButton className="bg-red-600 hover:bg-red-700">
                <a href="/contact" className="text-white no-underline">
                  Get Free Quote
                </a>
              </PrimaryButton>
              <PrimaryButton
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-50"
              >
                <a href="/wholesale" className="no-underline">
                  View Wholesale Pricing
                </a>
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductCategory;
