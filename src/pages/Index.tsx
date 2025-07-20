import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import GoogleReviews from "@/components/GoogleReviews";
import TechnicalSEO from "@/components/TechnicalSEO";
import SEOHead from "@/components/SEOHead";
import {
  GoldButton,
  WhiteOutlineButton,
  PrimaryButton,
  OutlineButton,
} from "@/components/ui/custom-buttons";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calculator,
  Palette,
  Truck,
  Users,
  Award,
  Shield,
  Clock,
  CheckCircle,
  Star,
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Calculator,
      title: "Volume & Trade Pricing",
      description:
        "Volume discounts starting at 2,000 sq ft, extra discounts at 5,000 sq ft. Flexible Payment Plan. Same Day Pickup",
      action: "Get Trade Pricing",
      category: "contractors",
    },
    {
      icon: Palette,
      title: "Endless Styles. One Showroom",
      description:
        "Explore a wide range of materials and selections that vary in size, design, quality, real world application etc.",
      action: "Request an Appointment",
      category: "homeowners",
    },
  ];

  const contractorBenefits = [
    {
      icon: Calculator,
      title: "Trade Pricing for Porcelain Tiles Miami",
      description:
        "Save up to 25% on bulk orders with flexible Net-30 payment terms for qualified flooring contractors",
    },
    {
      icon: Truck,
      title: "Commercial Flooring Delivery Miami",
      description:
        "Same-day pickup and next-day delivery throughout South Florida for tile contractors",
    },
    {
      icon: Users,
      title: "Expert Support",
      description:
        "15+ years serving Miami contractors with material take-offs, technical specs, and project support",
    },
  ];

  const homeownerBenefits = [
    {
      icon: Palette,
      title: "Luxury Vinyl Plank & Natural Stone Selection",
      description:
        "Curated collection of premium flooring Miami homeowners love - from waterproof luxury vinyl to elegant travertine",
    },
    {
      icon: Award,
      title: "Custom Pool Deck Design Miami",
      description:
        "Specialized in travertine pool decks and outdoor natural stone - see materials in your actual South Florida lighting",
    },
    {
      icon: Shield,
      title: "Residential Flooring Installation Guidance",
      description:
        "Expert consultation on flooring installation Miami projects with manufacturer warranties and design support",
    },
  ];

  const contractorFaqs = [
    {
      question:
        "What volume discounts do you offer for Miami flooring contractors?",
      answer:
        "We offer tiered volume pricing for porcelain tiles Miami contractors: 15% off orders 5,000+ sq ft, 20% off orders 8,000+ sq ft, and 25% off orders 10,000+ sq ft. Plus Net-30 payment terms for qualified commercial flooring contractors with trade accounts.",
    },
    {
      question: "Do you offer flooring delivery to job sites in Miami?",
      answer:
        "Yes! We provide direct job site delivery for flooring installation Miami projects throughout South Florida. Same-day pickup available at our Miami flooring warehouse, and scheduled delivery of porcelain tiles, natural stone, and luxury vinyl plank to meet your project timeline.",
    },
    {
      question: "What's your lead time for large commercial orders?",
      answer:
        "Most standard materials are in stock for immediate pickup. Special orders typically take 1-2 weeks. We maintain large inventory levels specifically to support contractor schedules and urgent project needs.",
    },
    {
      question: "Do you provide material take-offs and estimates?",
      answer:
        "Absolutely! Our team can review blueprints and provide detailed material take-offs, pricing, and recommendations. We also offer technical support for product specifications and material selection guidance.",
    },
    {
      question: "What payment terms do you offer contractors?",
      answer:
        "We offer Net-30 terms for established contractors with approved credit. We also accept cash, check, and card payments. Volume orders may qualify for extended payment terms based on project size.",
    },
    {
      question: "Can you support multi-phase projects?",
      answer:
        "Yes, we excel at multi-phase project support with staged deliveries, inventory management, and consistent material matching across project phases. We maintain detailed project records for seamless continuity.",
    },
  ];

  const designerFaqs = [
    {
      question: "Do you have a trade program for interior designers?",
      answer:
        "Yes! Our trade program offers designer discounts, dedicated account management, and access to our full sample library. We also provide design support and technical specifications for project planning.",
    },
    {
      question: "Can I get large format samples for client presentations?",
      answer:
        'Absolutely! We offer 12"x12" samples and even full-size tile samples for homeowners to see in their actual space. Our sample library includes the latest trends in porcelain, natural stone, and custom mosaics.',
    },
    {
      question: "Do you offer custom design consultation?",
      answer:
        "Yes, our design team can work with you on custom layouts, pattern design, and material combinations. We provide 3D renderings and detailed specifications to help present concepts to your clients.",
    },
    {
      question: "What's your process for custom mosaic and pattern work?",
      answer:
        "We specialize in custom mosaics and patterns. Provide us with your design concept, and we'll create samples, provide technical drawings, and handle fabrication. Lead time is typically 3-4 weeks for custom work.",
    },
    {
      question: "Do you offer continuing education or design seminars?",
      answer:
        "Yes! We host quarterly design seminars covering new trends, material applications, and product innovations. We also offer AIA continuing education credits for architects and designers.",
    },
    {
      question:
        "Can you support luxury residential projects with unique requirements?",
      answer:
        "Definitely! We specialize in high-end residential projects with custom requirements. From book-matched slabs to intricate mosaic designs, we have the expertise and resources for luxury applications.",
    },
  ];

  const generalFaqs = [
    {
      question: "What areas in Florida do you serve?",
      answer:
        "We serve all of South Florida, with same-day pickup available at our Miami showroom and next-day delivery throughout the state. We have special shipping rates for bulk orders.",
    },
    {
      question: "What warranties are available on your products?",
      answer:
        "All our products come with manufacturer warranties that vary by material type and brand. Most manufacturer warranties range from 5-25 years, providing you with quality assurance directly from the manufacturer.",
    },
    {
      question: "What types of natural stone do you offer?",
      answer:
        "We specialize in premium natural stone including travertine, marble, limestone, granite, and slate. Our natural stone selection features both domestic and imported varieties, perfect for pool decks, patios, interior floors, and accent walls. Each stone is carefully selected for durability and beauty.",
    },
    {
      question: "What types of flooring materials do you carry?",
      answer:
        "We carry a comprehensive selection including porcelain tiles, natural stone, luxury vinyl plank, laminate, hardwood, and custom mosaics. All materials are sourced from top manufacturers and meet commercial-grade standards.",
    },
    {
      question: "Can I visit your showroom to see materials?",
      answer:
        "Yes! Our Miami showroom is open Mon-Fri 7AM-4PM. We have full displays of all our materials, and our team can provide expert guidance on material selection for your specific project needs.",
    },
    {
      question: "Do you offer financing options?",
      answer:
        "We accept various payment methods including cash, check, and card payments. For contractors, we offer Net-30 payment terms with approved credit. We focus on providing competitive pricing and flexible payment terms rather than financing services.",
    },
  ];

  return (
    <Layout>
      <SEOHead
        title="Genesis Stone - Miami Flooring Contractor & Tile Supplier | Trade Pricing Available"
        description="Premier Miami flooring supplier since 2008. Trade pricing for contractors on porcelain tiles, natural stone, travertine pool decks, luxury vinyl plank. Same-day pickup South Florida."
        keywords="flooring Miami, porcelain tiles Miami, natural stone supplier Miami, travertine pool decks South Florida, luxury vinyl plank installation, flooring contractor Miami, tile supplier Miami"
        canonicalUrl="https://genesisstoneusa.com/"
      />
      <TechnicalSEO
        pageType="website"
        images={[
          {
            url: "https://genesisstoneusa.com/placeholder.svg",
            alt: "Genesis Stone Miami flooring showroom",
            width: 1200,
            height: 630,
          },
        ]}
      />

      {/* Hero Section */}
      <Hero />

      {/* Products Section */}
      <ProductGrid />

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Genesis Stone for Your Miami Flooring Project?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Premier{" "}
              <a
                href="/products"
                className="text-red-700 hover:text-red-800 font-medium underline"
                title="Miami flooring products and tile supplier"
              >
                flooring supplier Miami
              </a>{" "}
              serving contractors and homeowners across South Florida since
              2008. Specializing in porcelain tiles, natural stone, and luxury
              vinyl plank installation.
            </p>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Whether you're a contractor seeking{" "}
              <a
                href="/wholesale"
                className="text-red-600 hover:text-red-700 underline font-medium"
              >
                wholesale pricing
              </a>{" "}
              or a homeowner looking for premium materials, Genesis Stone & More
              has been South Florida's trusted flooring partner since 2008. Our
              extensive inventory includes large format porcelain tiles, natural
              stone floors, luxury vinyl planks, and decorative elements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* For Contractors */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[rgb(138,0,0)] to-[rgb(120,0,0)] rounded-2xl mb-4">
                  <Calculator className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  For Miami Flooring Contractors
                </h3>
                <p className="text-gray-600">
                  Trade pricing on{" "}
                  <a
                    href="/wholesale"
                    className="text-red-700 hover:text-red-800 font-medium underline"
                  >
                    commercial flooring Miami
                  </a>{" "}
                  projects
                </p>
              </div>

              <div className="space-y-8">
                {contractorBenefits.map((benefit, index) => (
                  <div key={index} className="group">
                    <div className="flex items-start space-x-5">
                      <div className="w-14 h-14 bg-gradient-to-r from-red-50 to-red-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:from-[rgb(138,0,0)] group-hover:to-[rgb(120,0,0)] transition-all duration-300">
                        <benefit.icon className="h-7 w-7 text-red-700 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div className="flex-1 min-h-[80px] flex flex-col">
                        <h4 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                          {benefit.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed flex-1">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* For Homeowners */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[rgb(138,0,0)] to-[rgb(120,0,0)] rounded-2xl mb-4">
                  <Palette className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  For Homeowners
                </h3>
                <p className="text-gray-600">Premium residential options</p>
              </div>

              <div className="space-y-8">
                {homeownerBenefits.map((benefit, index) => (
                  <div key={index} className="group">
                    <div className="flex items-start space-x-5">
                      <div className="w-14 h-14 bg-gradient-to-r from-red-50 to-red-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:from-[rgb(138,0,0)] group-hover:to-[rgb(120,0,0)] transition-all duration-300">
                        <benefit.icon className="h-7 w-7 text-red-700 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div className="flex-1 min-h-[80px] flex flex-col">
                        <h4 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                          {benefit.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed flex-1">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <GoogleReviews />

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="text-center p-8 hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="h-8 w-8 text-red-800" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <PrimaryButton>{feature.action}</PrimaryButton>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Got Questions? We've Got Answers
            </h2>
            <p className="text-lg text-gray-600">
              Find answers to the most common questions about our products,
              services, and installation process.
            </p>
          </div>

          <Tabs defaultValue="general" className="mb-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="contractors">For Contractors</TabsTrigger>
              <TabsTrigger value="designers">For Homeowners</TabsTrigger>
              <TabsTrigger value="general">General</TabsTrigger>
            </TabsList>

            <TabsContent value="contractors" className="mt-8">
              <Accordion type="single" collapsible className="w-full">
                {contractorFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`contractor-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>

            <TabsContent value="designers" className="mt-8">
              <Accordion type="single" collapsible className="w-full">
                {designerFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`designer-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>

            <TabsContent value="general" className="mt-8">
              <Accordion type="single" collapsible className="w-full">
                {generalFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`general-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Application Showcase Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              See Our Work in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real projects showcasing the quality and beauty of our flooring
              solutions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Natural Stone Pool Deck - Strategic Link */}
            <a
              href="/products"
              className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 aspect-[4/3] cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1594739797188-97c1a5b64b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Modern pool deck with large format porcelain tiles"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div
                className="absolute inset-0 bg-no-repeat bg-center bg-cover"
                style={{
                  backgroundImage:
                    "url(https://cdn.builder.io/api/v1/image/assets%2F794088d731be4280a896b77e76e82a50%2F37ad3adaf8fd4909968a7295164d4eb7)",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="font-bold text-xl mb-2">
                  Natural Stone Floors Miami
                </h4>
                <p className="text-sm opacity-90">
                  Pool Decks & Outdoor Spaces
                </p>
              </div>
            </a>

            {/* Porcelain Tiles Link */}
            <a
              href="/products/porcelain"
              className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 aspect-[4/3] cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1615971677499-5467cbab01c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Luxury living room with marble accent wall"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div
                className="absolute inset-0 bg-no-repeat bg-center bg-cover"
                style={{
                  backgroundImage:
                    "url(https://cdn.builder.io/api/v1/image/assets%2F794088d731be4280a896b77e76e82a50%2Fe53984331f4746c9824532d42afd5c1f)",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="font-bold text-xl mb-2">
                  Porcelain Tiles Miami
                </h4>
                <p className="text-sm opacity-90">
                  Large Format & Premium Options
                </p>
              </div>
            </a>

            {/* Natural Stone Travertine Link */}
            <a
              href="/products"
              className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 aspect-[4/3] cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Natural stone travertine pool area with spa"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div
                className="absolute inset-0 bg-no-repeat bg-center bg-cover"
                style={{
                  backgroundImage:
                    "url(https://cdn.builder.io/api/v1/image/assets%2F794088d731be4280a896b77e76e82a50%2F415bcd7e0a704d01a11986e13ecabc3a)",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="font-bold text-xl mb-2">
                  Travertine Flooring Miami
                </h4>
                <p className="text-sm opacity-90">Pool Decks & Luxury Homes</p>
              </div>
            </a>

            {/* Porcelain Interior Link */}
            <a
              href="/products/porcelain"
              className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 aspect-[4/3] cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1562113530-57ba2cea56c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Modern white interior with polished porcelain"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div
                className="absolute inset-0 bg-no-repeat bg-center bg-cover"
                style={{
                  backgroundImage:
                    "url(https://cdn.builder.io/api/v1/image/assets%2F794088d731be4280a896b77e76e82a50%2F5ca1a82e481b45e8b81cba03d3e6ad83?format=webp)",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="font-bold text-xl mb-2">
                  Large Format Porcelain Tiles
                </h4>
                <p className="text-sm opacity-90">Contemporary Clean Design</p>
              </div>
            </a>

            {/* Luxury Vinyl Plank Link */}
            <a
              href="/products/laminates"
              className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 aspect-[4/3] cursor-pointer"
            >
              <img
                src="https://cdn.builder.io/api/v1/assets/794088d731be4280a896b77e76e82a50/assets_task_01jxxjgw3ne4za9mheafx9wrc5_1750117973_img_1-531f33?format=webp&width=800"
                alt="Professional installation of luxury vinyl plank flooring"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="font-bold text-xl mb-2">
                  Luxury Vinyl Plank Miami
                </h4>
                <p className="text-sm opacity-90">Professional Installation</p>
              </div>
            </a>

            {/* Mosaic Tiles Link */}
            <a
              href="/products/mosaics"
              className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 aspect-[4/3] cursor-pointer"
            >
              <img
                src="https://cdn.builder.io/api/v1/assets/794088d731be4280a896b77e76e82a50/assets_task_01jxxjhp2ee2fbej2h3a8ybwn6_1750118078_img_1-73caf1?format=webp&width=800"
                alt="Luxury mosaic artistry in spa design"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="font-bold text-xl mb-2">Mosaic Tiles Miami</h4>
                <p className="text-sm opacity-90">Custom Spa & Pool Design</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-[rgb(138,0,0)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to Get Started?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <GoldButton size="lg" className="px-8 py-3">
              Get Trade Pricing
            </GoldButton>
            <WhiteOutlineButton size="lg" className="px-8 py-3">
              Request Designer Samples
            </WhiteOutlineButton>
          </div>
          <div className="flex items-center justify-center space-x-4 text-white/90">
            <Badge variant="secondary" className="bg-white/20 text-white">
              Since 2008
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white">
              1,000+ Florida Projects
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white">
              Manufacturer Warranty
            </Badge>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
