import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";
import {
  GoldButton,
  WhiteOutlineButton,
  PrimaryButton,
  OutlineButton,
} from "@/components/ui/custom-buttons";
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
        "5,000+ sq ft: 15% discount",
        "10,000+ sq ft: 20% discount",
        "25,000+ sq ft: 25% discount",
      ],
      color: "blue",
    },
    {
      icon: CreditCard,
      title: "Flexible Payment Terms",
      description:
        "Cash flow solutions designed for construction professionals",
      stats: "Net-30 Terms",
      details: [
        "Quick credit approval",
        "Extended terms available",
        "No hidden fees",
      ],
      color: "green",
    },
    {
      icon: Truck,
      title: "Logistics Excellence",
      description: "Delivery solutions that keep your projects on schedule",
      stats: "Same-day pickup",
      details: [
        "Miami warehouse pickup",
        "Statewide delivery",
        "Job site coordination",
      ],
      color: "orange",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Commercial-grade materials with comprehensive warranties",
      stats: "5-25 year warranties",
      details: [
        "Pre-inspected inventory",
        "Manufacturer backed",
        "Installation support",
      ],
      color: "purple",
    },
  ];

  const pricingCalculator = [
    {
      tier: "Starter",
      range: "1,000 - 4,999 sq ft",
      discount: "Standard Pricing",
      features: ["Trade pricing", "Standard delivery", "Email support"],
      popular: false,
      savings: "$0",
    },
    {
      tier: "Professional",
      range: "5,000 - 9,999 sq ft",
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
      range: "10,000+ sq ft",
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
      title: "Luxury Apartment Complex",
      contractor: "Rodriguez Construction Group",
      location: "Brickell, Miami",
      sqft: "45,000 sq ft",
      timeline: "Completed in 8 weeks",
      materials: "LVP flooring, Porcelain tiles",
      savings: "$18,000 saved",
      image: "/placeholder.svg",
    },
    {
      title: "Office Tower Renovation",
      contractor: "Elite Commercial Builders",
      location: "Downtown Miami",
      sqft: "28,000 sq ft",
      timeline: "Completed in 6 weeks",
      materials: "Commercial porcelain, Carpet tiles",
      savings: "$12,000 saved",
      image: "/placeholder.svg",
    },
    {
      title: "Retail Shopping Center",
      contractor: "Premier Development",
      location: "Aventura",
      sqft: "60,000 sq ft",
      timeline: "Completed in 12 weeks",
      materials: "Natural stone, High-traffic porcelain",
      savings: "$25,000 saved",
      image: "/placeholder.svg",
    },
  ];

  const contractorServices = [
    {
      icon: Zap,
      title: "Express Order Processing",
      description: "Orders processed within 2 hours during business days",
      availability: "Mon-Fri: 7 AM - 6 PM",
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
      text: "Miami Floors Pro has been our strategic partner for 5 years. Their volume pricing and reliable delivery have helped us win more competitive bids while maintaining quality.",
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
                  <div className="text-3xl font-bold text-[rgb(251,189,35)]">
                    25%
                  </div>
                  <div className="text-sm text-gray-300">Max Savings</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                  <div className="text-3xl font-bold text-[rgb(251,189,35)]">
                    Net-30
                  </div>
                  <div className="text-sm text-gray-300">Payment Terms</div>
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
              <img
                src="/placeholder.svg"
                alt="Construction Site"
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
              Every feature, every service, every process designed around the
              reality of construction deadlines and budgets
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
                              : "bg-purple-100"
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
                                : "text-purple-600"
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
                            {detail}
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
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
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

      {/* Contractor Testimonials - Credibility focus */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Proven Track Record
            </h2>
            <p className="text-xl text-gray-600">
              Licensed contractors who trust Miami Floors Pro for their success
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="relative bg-white hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-[rgb(251,189,35)] fill-current"
                        />
                      ))}
                    </div>
                    <Badge className="ml-4 bg-green-100 text-green-800">
                      {testimonial.savings}
                    </Badge>
                  </div>

                  <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>

                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-[rgb(138,0,0)] font-semibold">
                        {testimonial.role}
                      </p>
                      <p className="text-gray-600">{testimonial.company}</p>
                      <p className="text-sm text-gray-500">
                        {testimonial.license}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-gray-900">
                        {testimonial.projects}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Account Setup Process - Clear steps */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Get Started in 24 Hours</h2>
            <p className="text-xl text-gray-300">
              Simple application process designed for busy contractors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Submit Application",
                description:
                  "Contractor license, business info, and references",
                time: "5 minutes",
              },
              {
                step: "02",
                title: "Credit Review",
                description: "Quick review for Net-30 payment approval",
                time: "4 hours",
              },
              {
                step: "03",
                title: "Account Setup",
                description: "Account manager assignment and pricing setup",
                time: "Same day",
              },
              {
                step: "04",
                title: "Start Ordering",
                description: "Begin saving immediately on your next project",
                time: "24 hours",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[rgb(251,189,35)] to-amber-500 text-black rounded-xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                <p className="text-gray-300 mb-2 leading-relaxed">
                  {process.description}
                </p>
                <Badge className="bg-white/10 text-white">{process.time}</Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            Join 500+ successful contractors across Florida who use Miami Floors
            Pro to win more bids and deliver better projects.
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
