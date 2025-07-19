import React from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { PRODUCT_IMAGES } from "@/utils/sitemapGenerator";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PrimaryButton } from "@/components/ui/custom-buttons";
import { SimpleReliableImage } from "@/components/ui/ReliableImage";

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
