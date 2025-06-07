import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
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
        "Save up to 25% on orders 10,000+ sq ft, Net-30 terms, same-day pickup in Miami.",
      action: "Get Trade Pricing",
      category: "contractors",
    },
    {
      icon: Palette,
      title: "Premium Material Showroom",
      description:
        "Explore marble, mosaic & custom patterns. Professional design consultation available.",
      action: "Request Designer Samples",
      category: "designers",
    },
  ];

  const contractorBenefits = [
    {
      icon: Calculator,
      title: "Bulk Discounts & Net-30 Terms",
      description: "Save up to 25% on large orders with flexible payment terms",
    },
    {
      icon: Truck,
      title: "Fast Local Delivery & Pallet Shipping",
      description: "Same-day pickup in Miami, next-day delivery statewide",
    },
    {
      icon: Users,
      title: "Dedicated Account Manager",
      description: "Direct line to your personal flooring expert",
    },
  ];

  const designerBenefits = [
    {
      icon: Palette,
      title: "Curated Luxury Collections",
      description:
        "Exclusive access to premium marble, stone, and custom mosaics",
    },
    {
      icon: Award,
      title: "Moodboards & 3D Mockups",
      description:
        "Visualize your designs with professional rendering services",
    },
    {
      icon: Shield,
      title: "In-Showroom & Virtual Consults",
      description: "Expert design guidance wherever you are in Florida",
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: "Choose Your Path",
      description: "Contractor or Designer",
    },
    { number: 2, title: "Get Your Quote", description: "Or Samples" },
    { number: 3, title: "Approve & Schedule", description: "Delivery" },
    { number: 4, title: "Install & Enjoy", description: "Your New Floors" },
  ];

  const faqs = [
    {
      question: "What areas in Florida do you serve?",
      answer:
        "We serve all of South Florida, with same-day pickup available at our Miami showroom and next-day delivery throughout the state. We have special shipping rates for bulk orders.",
    },
    {
      question: "Do you provide warranties on your products and installation?",
      answer:
        "Yes, we offer comprehensive warranties on all our products. Most products come with manufacturer warranties ranging from 5-25 years, and we provide a 1-year installation warranty on all our work.",
    },
    {
      question: "What types of flooring materials do you carry?",
      answer:
        "We carry a comprehensive selection including porcelain tiles, natural stone, luxury vinyl plank, laminate, hardwood, and custom mosaics. All materials are sourced from top manufacturers and meet commercial-grade standards.",
    },
    {
      question: "Do you offer bulk pricing for contractors?",
      answer:
        "Absolutely! We offer volume discounts starting at 15% for orders over 5,000 sq ft, and up to 25% for orders over 10,000 sq ft. We also provide Net-30 payment terms for qualified contractors.",
    },
    {
      question: "Can I see materials before placing an order?",
      answer:
        "Yes, we have material samples available for viewing in our showroom. For designers and contractors, we offer expanded sample programs and can arrange for large format samples to be viewed in our Miami showroom location.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <Hero />

      {/* Feature Cards Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-8 text-center">
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

      {/* Products Section */}
      <ProductGrid />

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Genesis Stone?
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* For Contractors */}
            <div>
              <h3 className="text-2xl font-bold text-red-800 text-center mb-8">
                For Contractors
              </h3>
              <div className="space-y-6">
                {contractorBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="h-6 w-6 text-red-800" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* For Designers */}
            <div>
              <h3 className="text-2xl font-bold text-red-800 text-center mb-8">
                For Designers
              </h3>
              <div className="space-y-6">
                {designerBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="h-6 w-6 text-red-800" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-16 h-16 bg-[rgb(138,0,0)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Carlos Rodriguez",
                title: "General Contractor",
                text: "Genesis Stone has been our go-to supplier for 5 years. Their bulk pricing and fast delivery keep our projects on schedule and on budget.",
                rating: 5,
              },
              {
                name: "Sarah Chen",
                title: "Interior Designer",
                text: "The luxury collections here are unmatched. The design consultation service helped me create stunning spaces for my high-end clients.",
                rating: 5,
              },
              {
                name: "Mike Thompson",
                title: "Property Manager",
                text: "Professional service, quality products, and competitive pricing. They handle all our commercial flooring needs across multiple properties.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-[rgb(251,189,35)] fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
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
              <TabsTrigger value="designers">For Designers</TabsTrigger>
              <TabsTrigger value="general">General</TabsTrigger>
            </TabsList>

            <TabsContent value="general" className="mt-8">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
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

          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Still have questions? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PrimaryButton>Call Us: (305) 477-4402</PrimaryButton>
              <OutlineButton>Email Us</OutlineButton>
            </div>
          </div>
        </div>
      </section>

      {/* Application Showcase Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              See Our Work in Action
            </h2>
            <p className="text-lg text-gray-600">
              Real projects showcasing the quality and beauty of our flooring
              solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="https://i.imgur.com/8K2YQnV.jpg"
                alt="Modern pool deck with large format porcelain tiles"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1594739797188-97c1a5b64b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-bold text-lg">Pool Deck Paradise</h4>
                <p className="text-sm">Large Format Porcelain</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="https://i.imgur.com/mY8KqL2.jpg"
                alt="Luxury living room with marble accent wall"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-bold text-lg">Luxury Interior</h4>
                <p className="text-sm">Marble & Premium Tiles</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="https://i.imgur.com/RLp4K9X.jpg"
                alt="Natural stone travertine pool area with spa"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-bold text-lg">Natural Stone Elegance</h4>
                <p className="text-sm">Travertine Pool & Spa</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="https://i.imgur.com/4N8kpQ7.jpg"
                alt="Modern white interior with polished porcelain"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1594739797188-97c1a5b64b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-bold text-lg">Contemporary Clean</h4>
                <p className="text-sm">White Polished Porcelain</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="https://i.imgur.com/VyN8mFj.jpg"
                alt="Professional installation of luxury vinyl plank flooring"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-bold text-lg">Professional Installation</h4>
                <p className="text-sm">Luxury Vinyl Plank</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="https://i.imgur.com/3N7ZqB8.jpg"
                alt="Blue mosaic tile spa application"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1562113530-57ba2cea56c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-bold text-lg">Mosaic Artistry</h4>
                <p className="text-sm">Custom Spa Design</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <GoldButton size="lg" className="px-8">
              View Our Complete Portfolio
            </GoldButton>
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
              5-Year Warranty
            </Badge>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
