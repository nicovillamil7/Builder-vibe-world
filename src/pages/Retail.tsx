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
  Palette,
  Sparkles,
  Eye,
  Zap,
  Crown,
  Gem,
  Camera,
  Layers,
  Star,
  Users,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const Retail = () => {
  const luxuryFeatures = [
    {
      icon: Crown,
      title: "Exclusive Luxury Collections",
      description:
        "Curated premium materials from Italy, Spain, and artisan workshops worldwide",
      highlight: "First access to new collections",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Eye,
      title: "3D Design Visualization",
      description:
        "See your vision come to life with photorealistic renderings and virtual walkthroughs",
      highlight: "Professional 3D mockups included",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Sparkles,
      title: "White-Glove Sample Service",
      description:
        "Large format samples delivered to your studio with detailed specification sheets",
      highlight: "Up to 10 samples free",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: Gem,
      title: "Custom Pattern Creation",
      description:
        "Work with our artisans to create unique mosaic patterns and bespoke installations",
      highlight: "Exclusive custom designs",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  const designerBenefits = [
    {
      title: "Trade Professional Pricing",
      description:
        "Exclusive pricing structure for certified interior designers and architects",
      savings: "Save 20-35%",
    },
    {
      title: "Rapid Sample Program",
      description:
        "Express sample delivery within 24-48 hours for time-sensitive projects",
      savings: "Next-day delivery",
    },
    {
      title: "Design Consultation Credits",
      description:
        "Complimentary one-on-one consultations with our material specialists",
      savings: "$200 value",
    },
    {
      title: "Project Documentation",
      description:
        "Complete technical specifications and installation guides for every material",
      savings: "Professional docs",
    },
  ];

  const portfolioProjects = [
    {
      title: "Oceanfront Penthouse",
      designer: "Elena Vasquez Design",
      location: "Key Biscayne",
      style: "Contemporary Luxury",
      materials: ["Calacatta Marble", "Bronze Mosaics", "Venetian Terrazzo"],
      image: "/placeholder.svg",
      award: "Design Excellence Award 2024",
    },
    {
      title: "Art Deco Revival",
      designer: "Heritage Interiors",
      location: "South Beach",
      style: "Modern Classic",
      materials: ["Geometric Mosaics", "Brass Inlays", "Marble Marquetry"],
      image: "/placeholder.svg",
      award: "Featured in Architectural Digest",
    },
    {
      title: "Minimalist Sanctuary",
      designer: "Zen Living Studio",
      location: "Coral Gables",
      style: "Scandinavian Modern",
      materials: [
        "Large Format Porcelain",
        "Natural Stone",
        "Wood-look Ceramics",
      ],
      image: "/placeholder.svg",
      award: "Miami Design Week Showcase",
    },
  ];

  const designerTestimonials = [
    {
      name: "Elena Vasquez",
      firm: "Vasquez Design Studio",
      credentials: "ASID, LEED AP",
      text: "Miami Floors Pro understands luxury design at the highest level. Their material curation and technical support have been instrumental in delivering award-winning projects.",
      projects: "25+ luxury residences",
      specialty: "High-end residential",
    },
    {
      name: "Marcus Chen",
      firm: "Chen Architecture & Design",
      credentials: "AIA, NCARB",
      text: "The custom pattern capabilities and artisan network have allowed us to create truly unique installations that define spaces and elevate our architectural vision.",
      projects: "15+ commercial projects",
      specialty: "Boutique hospitality",
    },
  ];

  return (
    <Layout>
      {/* Hero Section - Luxury focused */}
      <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black mb-8 px-6 py-3 text-lg font-bold">
              For Interior Designers & Architects
            </Badge>

            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="block">Luxury Materials</span>
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Extraordinary Designs
              </span>
            </h1>

            <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Elevate your design practice with our curated collection of
              premium materials, expert consultation services, and artisan-level
              custom solutions.
            </p>

            <div className="flex flex-col lg:flex-row gap-8 justify-center items-center mb-16">
              <GoldButton size="lg" className="px-12 py-6 text-xl font-bold">
                Explore Luxury Collections
                <ArrowRight className="ml-3 h-6 w-6" />
              </GoldButton>
              <WhiteOutlineButton
                size="lg"
                className="px-12 py-6 text-xl font-bold"
              >
                Schedule Design Consultation
              </WhiteOutlineButton>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-400" />
                <span>500+ Designer Projects</span>
              </div>
              <div className="flex items-center space-x-2">
                <Crown className="h-5 w-5 text-yellow-400" />
                <span>Exclusive Material Access</span>
              </div>
              <div className="flex items-center space-x-2">
                <Gem className="h-5 w-5 text-yellow-400" />
                <span>Custom Artisan Work</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-24 text-white"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,120 C200,40 400,80 600,60 C800,40 1000,80 1200,60 L1200,120 Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      {/* Luxury Features - Visual showcase */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">
              The Designer Advantage
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Everything you need to create spaces that inspire, delivered with
              the precision your reputation demands
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {luxuryFeatures.map((feature, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-0"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}
                ></div>
                <CardContent className="relative p-10">
                  <div className="flex items-start space-x-6">
                    <div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center flex-shrink-0 shadow-xl`}
                    >
                      <feature.icon className="h-10 w-10 text-white" />
                    </div>
                    <div className="flex-1">
                      <Badge className="bg-gray-100 text-gray-800 mb-4">
                        {feature.highlight}
                      </Badge>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 group-hover:bg-clip-text transition-all">
                        {feature.title}
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Designer Benefits - Premium pricing showcase */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Professional Trade Benefits
            </h2>
            <p className="text-xl text-gray-600">
              Exclusive advantages designed for design professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {designerBenefits.map((benefit, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 bg-white border-0"
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {benefit.title}
                    </h3>
                    <Badge className="bg-green-100 text-green-800 font-semibold">
                      {benefit.savings}
                    </Badge>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                  <div className="mt-6 flex items-center text-red-800 font-medium group-hover:text-red-900">
                    <CheckCircle2 className="h-5 w-5 mr-2" />
                    <span>Available for certified professionals</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Showcase - Project gallery */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-8">
              Award-Winning Designer Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our materials and collaboration have elevated South
              Florida's most prestigious design projects
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {portfolioProjects.map((project, index) => (
              <Card
                key={index}
                className="group bg-gray-800 border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-yellow-500 text-black font-semibold">
                      Featured
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-yellow-400 font-semibold">
                      {project.designer}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {project.location} • {project.style}
                    </p>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm text-gray-400 mb-2">
                      Featured Materials:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.materials.map((material, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs"
                        >
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-green-400 text-sm font-medium">
                      {project.award}
                    </span>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-yellow-400 transition-colors" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Designer Testimonials - Personal stories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Voices from the Design Community
            </h2>
            <p className="text-xl text-gray-600">
              Hear from the designers who trust us with their most important
              projects
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {designerTestimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="relative p-8 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-gray-50 to-white"
              >
                <div className="absolute top-6 right-6">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </div>

                <CardContent className="p-0">
                  <div className="mb-6">
                    <blockquote className="text-lg text-gray-700 leading-relaxed italic">
                      "{testimonial.text}"
                    </blockquote>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-800 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-red-800 font-semibold">
                        {testimonial.firm}
                      </p>
                      <p className="text-sm text-gray-600 mb-2">
                        {testimonial.credentials}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>{testimonial.projects}</span>
                        <span>•</span>
                        <span>{testimonial.specialty}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Designer Resources Hub */}
      <section className="py-24 bg-gradient-to-br from-red-800 to-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Designer Resource Center
            </h2>
            <p className="text-xl text-white/90">
              Professional tools and resources to support your design practice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Trade Certification Program",
                description:
                  "Fast-track approval for professional pricing and benefits",
                action: "Apply Today",
              },
              {
                icon: Camera,
                title: "High-Resolution Material Library",
                description:
                  "Download professional images and technical specifications",
                action: "Browse Library",
              },
              {
                icon: Layers,
                title: "Project Documentation Hub",
                description:
                  "Installation guides, warranties, and maintenance specs",
                action: "Access Documents",
              },
            ].map((resource, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <resource.icon className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{resource.title}</h3>
                  <p className="text-white/80 mb-6 leading-relaxed">
                    {resource.description}
                  </p>
                  <WhiteOutlineButton className="w-full">
                    {resource.action}
                  </WhiteOutlineButton>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Start Your Designer Partnership
            </h2>
            <p className="text-xl text-gray-600">
              Let's collaborate to bring your vision to life with exceptional
              materials and support
            </p>
          </div>
          <ContactForm
            title="Apply for Designer Trade Account"
            subtitle="Join our community of South Florida's leading design professionals"
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Ready to Elevate Your Design Practice?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join the community of South Florida's most successful designers who
            trust Miami Floors Pro for their luxury projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <GoldButton size="lg" className="px-12 py-6 text-lg font-bold">
              Schedule Private Showroom Tour
            </GoldButton>
            <WhiteOutlineButton
              size="lg"
              className="px-12 py-6 text-lg font-bold"
            >
              Apply for Trade Account
            </WhiteOutlineButton>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Retail;
