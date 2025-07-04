import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";
import GoogleReviews from "@/components/GoogleReviews";
import {
  GoldButton,
  WhiteOutlineButton,
  PrimaryButton,
  OutlineButton,
} from "@/components/ui/custom-buttons";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SimpleReliableImage } from "@/components/ui/ReliableImage";
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
  Shield,
  Zap,
  Target,
  TrendingUp,
  Award,
  Handshake,
} from "lucide-react";

const Wholesale = () => {
  const contractorAdvantages = [
    {
      icon: Calculator,
      title: "Volume Pricing Structure",
      description:
        "Transparent pricing tiers that scale with your business growth",
      stats: "Save 15-25%",
      details: [
        "1,000+ sq ft: 5% discount",
        "3,000+ sq ft: 10% discount",
        "10,000+ sq ft: 25% discount",
      ],
      color: "blue",
    },
    {
      icon: CreditCard,
      title: "Personalized assessment",
      description:
        "Discover the perfect flooring with personalized guidance and samples tailored just for you.",
      stats: "For all clients!",
      details: [
        "Design consultation",
        "Get free samples",
        "Expert advice tailored to your needs",
      ],
      color: "green",
    },
    {
      icon: Truck,
      title: "Logistics Excellence",
      description: "Delivery solutions that keep your projects on schedule",
      stats: "Same-day pickup",
      details: [
        "Genesis Stone warehouse pickup",
        "Delivery available in South Florida; Central and Central East Florida for orders over 4000 sq ft.",
        "Job site coordination",
      ],
      color: "orange",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Commercial-grade materials with Manufacturer warranties",
      stats: "5-25 year warranties",
      details: [
        "Pre-inspected inventory",
        "Reliable Network of Expert and Licensed Suppliers",
        "We streamline all manufacturing warranties, exchanges, returns and credit. Terms and Conditions Apply.",
      ],
      color: "purple",
    },
  ];

  const pricingCalculator = [
    {
      tier: "Starter",
      range: "1,000 sq ft",
      discount: "Standard Pricing",
      features: ["Trade pricing", "Standard delivery", "Email support"],
      popular: false,
      savings: "$0",
    },
    {
      tier: "Professional",
      range: "1,000 - 3,000 sq ft",
      discount: "15% Volume Discount",
      features: [
        "15% off materials",
        "Priority delivery",
        "Phone support",
        "Net-30 terms",
      ],
      popular: true,
      savings: "$7,500",
    },
    {
      tier: "Enterprise",
      range: "3,000 - 10,000+ sq ft",
      discount: "Up to 25% Discount",
      features: [
        "Maximum discounts",
        "Account manager",
        "Custom payment terms",
        "Job site delivery",
      ],
      popular: false,
      savings: "$12,500+",
    },
  ];

  const contractorProjects = [
    {
      title: "Bathroom Renovation",
      contractor: "Miami Home Renovation",
      location: "Campestre, Coral Gables",
      sqft: "100 sq ft",
      timeline: "Completed in 3 days",
      materials: "Porcelain tiles, Natural stone",
      savings: "$500 saved",
      imageId: "bathroomRenovation",
    },
    {
      title: "Residential Home Renovation",
      contractor: "Palmetto Construction",
      location: "Campestre, Miami",
      sqft: "2,000 sq ft",
      timeline: "Completed in 2 weeks",
      materials: "LVP flooring, Designer tiles",
      savings: "$3,200 saved",
      imageId: "residentialHomeRenovation",
    },
    {
      title: "Retail Store Build-out",
      contractor: "Metro Commercial",
      location: "Aventura Mall Area",
      sqft: "10,000 sq ft",
      timeline: "Completed in 4 weeks",
      materials: "Commercial porcelain, Luxury vinyl",
      savings: "$8,500 saved",
      imageId: "retailStoreBuildout",
    },
  ];

  const contractorServices = [
    {
      icon: Zap,
      title: "Express Order Processing",
      description: "Orders processed within 2 hours during business days",
      availability: "Mon-Fri: 7 AM - 4 PM",
    },
    {
      icon: Target,
      title: "Job Site Coordination",
      description: "Scheduled deliveries timed with your project milestones",
      availability: "Statewide coverage",
    },
    {
      icon: Users,
      title: "Dedicated Account Management",
      description: "Personal account manager for orders over $50k annually",
      availability: "Direct phone line",
    },
    {
      icon: TrendingUp,
      title: "Business Growth Support",
      description: "Material planning and forecasting for larger projects",
      availability: "Quarterly reviews",
    },
  ];

  const testimonials = [
    {
      name: "Carlos Rodriguez",
      company: "Rodriguez Construction Group",
      role: "General Contractor",
      license: "CGC1234567",
      text: "Genesis Stone has been our strategic partner for 5 years. Their volume pricing and reliable delivery have helped us win more competitive bids while maintaining quality.",
      projects: "50+ completed projects",
      savings: "$150,000+ total savings",
    },
    {
      name: "Mike Thompson",
      company: "Elite Commercial Builders",
      role: "Project Manager",
      license: "CBC7654321",
      text: "The account management team understands construction deadlines. They've never let us down on delivery, and the quality consistency keeps our clients happy.",
      projects: "25+ commercial projects",
      savings: "$80,000+ total savings",
    },
  ];

  return (
    <Layout>
      {/* Hero Section - Industrial/Professional design */}
      <div className="relative bg-gradient-to-r from-slate-900 via-gray-900 to-slate-800 text-white overflow-hidden">
        {/* Floor Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2F794088d731be4280a896b77e76e82a50%2F965f0200ba374906b44fa49ee7bcaa93?format=webp')`,
          }}
        ></div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>

        {/* Industrial grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-[rgb(251,189,35)] text-black mb-6 px-4 py-2 font-bold">
                For Contractors & Builders
              </Badge>

              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                <span className="block">Build Smarter.</span>
                <span className="block text-[rgb(251,189,35)]">Save More.</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Get the commercial-grade materials you need with volume
                discounts, flexible payment terms, and delivery that never
                misses a deadline.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                  <div className="text-center bg-white/5 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-[rgb(251,189,35)] text-3xl font-bold">
                      Flexible
                    </div>
                    <div className="text-gray-300 text-sm">Payment Terms</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <GoldButton size="lg" className="px-8 py-4 text-lg font-bold">
                  Get Volume Pricing
                </GoldButton>
                <WhiteOutlineButton
                  size="lg"
                  className="px-8 py-4 text-lg font-bold"
                >
                  Apply for Account
                </WhiteOutlineButton>
              </div>
            </div>

            <div className="relative">
              <SimpleReliableImage
                imageId="contractorHeroImage"
                alt="Professional flooring installation at construction site"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-[rgb(251,189,35)] text-black p-6 rounded-lg shadow-xl">
                <div className="flex items-center space-x-3">
                  <Building className="h-8 w-8" />
                  <div>
                    <p className="font-bold text-xl">500+</p>
                    <p className="text-sm">Projects Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contractor Advantages - Data-driven approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Built for Contractor Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our extensive flooring range with tiered options and
              special bulk pricing for builders and contractors. Discover
              competitive rates on flooring, setting materials, and accessories
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {contractorAdvantages.map((advantage, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-[rgb(138,0,0)]"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div
                      className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        advantage.color === "blue"
                          ? "bg-blue-100"
                          : advantage.color === "green"
                            ? "bg-green-100"
                            : advantage.color === "orange"
                              ? "bg-orange-100"
                              : "bg-red-100"
                      }`}
                    >
                      <advantage.icon
                        className={`h-8 w-8 ${
                          advantage.color === "blue"
                            ? "text-blue-600"
                            : advantage.color === "green"
                              ? "text-green-600"
                              : advantage.color === "orange"
                                ? "text-orange-600"
                                : "text-[rgb(138,0,0)]"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-gray-900">
                          {advantage.title}
                        </h3>
                        <Badge className="bg-[rgb(138,0,0)] text-white font-bold">
                          {advantage.stats}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-4 text-lg">
                        {advantage.description}
                      </p>
                      <ul className="space-y-2">
                        {advantage.details.map((detail, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-sm text-gray-600"
                          >
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Calculator - Clear ROI focus */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Calculate Your Savings
            </h2>
            <p className="text-xl text-gray-600">
              Transparent pricing that scales with your business
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingCalculator.map((tier, index) => (
              <Card
                key={index}
                className={`relative ${tier.popular ? "ring-4 ring-[rgb(138,0,0)] shadow-2xl scale-105" : "hover:shadow-xl"} transition-all duration-300`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-[rgb(138,0,0)] text-white px-6 py-2 text-lg font-bold">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {tier.tier}
                  </h3>
                  <p className="text-gray-600 mb-4">{tier.range}</p>
                  <div className="text-4xl font-bold text-[rgb(138,0,0)] mb-2">
                    {tier.discount}
                  </div>
                  <p className="text-lg text-green-600 font-semibold mb-6">
                    Avg. savings: {tier.savings}
                  </p>

                  <ul className="space-y-3 mb-8">
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

                  <PrimaryButton
                    className={`w-full ${tier.popular ? "py-3 text-lg" : ""}`}
                  >
                    {tier.popular ? "Get Started Today" : "Calculate Savings"}
                  </PrimaryButton>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contractor Services - Operational efficiency */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Services That Keep You Moving
            </h2>
            <p className="text-xl text-gray-600">
              Operational support designed for construction efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contractorServices.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-7 w-7 text-[rgb(138,0,0)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-3 leading-relaxed">
                        {service.description}
                      </p>
                      <Badge
                        variant="secondary"
                        className="bg-gray-100 text-gray-700"
                      >
                        {service.availability}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Showcase - Results-focused */}
      <section className="py-20 bg-[rgb(138,0,0)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Real Projects, Real Savings
            </h2>
            <p className="text-xl text-gray-300">
              See how our contractor partners are building better and saving
              more
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {contractorProjects.map((project, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 overflow-hidden group hover:bg-white/20 transition-all duration-300"
              >
                <div className="relative">
                  <SimpleReliableImage
                    imageId={project.imageId}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 right-4 bg-[rgb(251,189,35)] text-black font-bold">
                    {project.savings}
                  </Badge>
                </div>
                <CardContent className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-[rgb(251,189,35)] font-semibold mb-1">
                    {project.contractor}
                  </p>
                  <p className="text-gray-300 text-sm mb-4">
                    {project.location}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <p className="text-gray-300">Square Footage</p>
                      <p className="font-semibold">{project.sqft}</p>
                    </div>
                    <div>
                      <p className="text-gray-300">Timeline</p>
                      <p className="font-semibold">{project.timeline}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-gray-300 text-sm mb-1">
                      Materials Used:
                    </p>
                    <p className="text-white text-sm">{project.materials}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <GoogleReviews />

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm
            title="Apply for Contractor Trade Account"
            subtitle="Start saving on your next project with volume pricing and flexible terms"
          />
        </div>
      </section>

      {/* Final CTA - Action-oriented */}
      <section className="py-20 bg-[rgb(138,0,0)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Ready to Build Your Competitive Advantage?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join 500+ successful contractors across Florida who use Genesis
            Stone Pro to win more bids and deliver better projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <GoldButton size="lg" className="px-12 py-6 text-lg font-bold">
              Apply for Trade Account
            </GoldButton>
            <WhiteOutlineButton
              size="lg"
              className="px-12 py-6 text-lg font-bold"
            >
              Calculate My Savings
            </WhiteOutlineButton>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Wholesale;
