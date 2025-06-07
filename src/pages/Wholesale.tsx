import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calculator,
  Truck,
  Users,
  Clock,
  CheckCircle,
  Star,
  Building,
  CreditCard,
  Package,
} from "lucide-react";

const Wholesale = () => {
  const contractorBenefits = [
    {
      icon: Calculator,
      title: "Volume Discounts",
      description:
        "Save 15-25% on orders over 5,000 sq ft. The larger your order, the more you save.",
      highlight: "Up to 25% savings",
    },
    {
      icon: CreditCard,
      title: "Net-30 Payment Terms",
      description:
        "Flexible payment terms for qualified contractors with approved credit applications.",
      highlight: "Net-30 Terms",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description:
        "Same-day pickup in Miami, next-day delivery throughout Florida, pallet shipping available.",
      highlight: "Same-day pickup",
    },
    {
      icon: Users,
      title: "Dedicated Account Manager",
      description:
        "Direct line to your personal flooring expert for quotes, orders, and project support.",
      highlight: "Personal support",
    },
    {
      icon: Package,
      title: "Job Site Delivery",
      description:
        "Coordinate delivery directly to your job sites with our logistics team.",
      highlight: "Job site delivery",
    },
    {
      icon: Building,
      title: "Commercial Grade Materials",
      description:
        "High-traffic rated materials perfect for commercial and multi-family projects.",
      highlight: "Commercial grade",
    },
  ];

  const pricingTiers = [
    {
      tier: "Standard",
      volume: "1,000-4,999 sq ft",
      discount: "Standard Pricing",
      features: ["Trade pricing", "Standard delivery", "Basic support"],
    },
    {
      tier: "Volume",
      volume: "5,000-9,999 sq ft",
      discount: "15% Off",
      features: [
        "15% volume discount",
        "Priority delivery",
        "Account manager",
        "Net-30 terms",
      ],
      popular: true,
    },
    {
      tier: "Bulk",
      volume: "10,000+ sq ft",
      discount: "Up to 25% Off",
      features: [
        "Up to 25% discount",
        "Free job site delivery",
        "Dedicated support",
        "Custom payment terms",
      ],
    },
  ];

  const projects = [
    {
      title: "Luxury Apartment Complex",
      location: "Brickell, Miami",
      contractor: "Rodriguez Construction",
      sqft: "45,000 sq ft",
      materials: "LVP, Porcelain Tiles",
      image: "/placeholder.svg",
    },
    {
      title: "Office Building Renovation",
      location: "Downtown Miami",
      contractor: "Elite Commercial",
      sqft: "28,000 sq ft",
      materials: "Commercial Porcelain",
      image: "/placeholder.svg",
    },
    {
      title: "Retail Shopping Center",
      location: "Aventura",
      contractor: "Premier Builders",
      sqft: "60,000 sq ft",
      materials: "Natural Stone, Porcelain",
      image: "/placeholder.svg",
    },
  ];

  const testimonials = [
    {
      name: "Carlos Rodriguez",
      title: "General Contractor, Rodriguez Construction",
      text: "Miami Floors Pro has been our go-to supplier for 5 years. Their bulk pricing keeps our projects profitable, and their delivery team never lets us down.",
      rating: 5,
      projects: "50+ projects completed",
    },
    {
      name: "Mike Thompson",
      title: "Project Manager, Elite Commercial",
      text: "The account management team understands our timeline pressures. They coordinate deliveries perfectly and the quality is always consistent.",
      rating: 5,
      projects: "25+ commercial projects",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-red-800 to-red-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-yellow-400 text-black mb-4">
                For Contractors & Builders
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Bulk Flooring Solutions for Florida Contractors
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Get the materials you need with volume discounts, flexible
                payment terms, and reliable delivery across South Florida. Built
                for contractors who demand quality, value, and service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-400 text-black hover:bg-yellow-500 px-8"
                >
                  Get Trade Pricing
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-red-800 px-8"
                >
                  Apply for Account
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg"
                alt="Construction Site"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-black p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Building className="h-5 w-5 text-red-800" />
                  <span className="font-semibold">500+ Projects Completed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Volume Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Volume Pricing That Works for Your Business
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The more you order, the more you save. Our tiered pricing
              structure is designed to maximize your profit margins on every
              project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                className={`relative ${tier.popular ? "ring-2 ring-red-800" : ""}`}
              >
                {tier.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-800">
                    Most Popular
                  </Badge>
                )}
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {tier.tier}
                  </h3>
                  <p className="text-gray-600 mb-4">{tier.volume}</p>
                  <div className="text-3xl font-bold text-red-800 mb-6">
                    {tier.discount}
                  </div>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm"
                      >
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${tier.popular ? "bg-red-800 hover:bg-red-900" : "bg-gray-800 hover:bg-gray-900"}`}
                  >
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Contractors Choose Miami Floors Pro
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We understand the unique needs of construction professionals and
              provide the services and support that keep your projects on time
              and on budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contractorBenefits.map((benefit, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="h-6 w-6 text-red-800" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {benefit.title}
                        </h3>
                        <Badge variant="secondary" className="text-xs">
                          {benefit.highlight}
                        </Badge>
                      </div>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Contractor Projects
            </h2>
            <p className="text-lg text-gray-600">
              See how our contractor partners have used our materials in major
              South Florida projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden group hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 right-3 bg-red-800">
                    {project.sqft}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-1">
                    {project.location}
                  </p>
                  <p className="text-red-800 font-medium text-sm mb-3">
                    {project.contractor}
                  </p>
                  <p className="text-gray-600 text-sm">
                    <strong>Materials:</strong> {project.materials}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Account Application Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Simple Account Setup Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Apply Online",
                description:
                  "Submit your contractor license and business information",
              },
              {
                step: "02",
                title: "Credit Review",
                description: "Quick credit check for Net-30 payment terms",
              },
              {
                step: "03",
                title: "Account Approval",
                description:
                  "Get approved within 24 hours for immediate ordering",
              },
              {
                step: "04",
                title: "Start Saving",
                description:
                  "Begin ordering with volume discounts and trade pricing",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-800 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {process.title}
                </h3>
                <p className="text-gray-600 text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Contractors Say About Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 text-lg">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-900">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {testimonial.title}
                      </p>
                    </div>
                    <Badge variant="secondary">{testimonial.projects}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm
            title="Get Your Trade Account Started"
            subtitle="Apply for volume pricing and flexible payment terms for your next project"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Saving on Your Next Project?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join hundreds of Florida contractors who trust Miami Floors Pro for
            their bulk flooring needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-yellow-400 text-black hover:bg-yellow-500 px-8"
            >
              Apply for Trade Account
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-800 px-8"
            >
              Get Volume Quote
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Wholesale;
