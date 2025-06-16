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
import { SimpleReliableImage } from "@/components/ui/ReliableImage";
import {
  Palette,
  Home,
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
  TrendingUp,
  Heart,
  Sparkles,
  Shield,
} from "lucide-react";

const Retail = () => {
  const homeUpgradeFeatures = [
    {
      icon: TrendingUp,
      title: "Home Value Enhancement",
      description:
        "If improving your property´s value is a defining priority for you, weÂ´ve got you covered. Talk to us about our flooring selections designed to specifically enhance property value above all else.",
      highlight: "Increase property value",
      bgColor: "bg-gradient-to-br from-[rgb(138,0,0)] to-[rgb(153,27,27)]",
    },
    {
      icon: Gem,
      title: "Premium Material Selection",
      description:
        "Collections of porcelain, natural stone, and luxury materials from top national and international manufacturers from Spain, Italy and Turkey.",
      highlight: "Designer-grade materials",
      bgColor: "bg-gradient-to-br from-[rgb(251,189,35)] to-[rgb(245,158,11)]",
    },
    {
      icon: Palette,
      title: "Interior Design Consultation",
      description:
        "As a homeowner who´s set on remodeling their living area, we know how important it is for you to give life to your personal vision. We provide all the expert guidance and support needed to support your selections.",
      highlight: "Expert design guidance",
      bgColor: "bg-gradient-to-br from-[rgb(138,0,0)] to-[rgb(153,27,27)]",
    },
    {
      icon: Shield,
      title: "Warranty & Support",
      description:
        "We aid in facilitating manufacturer warranties, returns & credit when deemed necessary. Subject to Terms & Conditions.",
      highlight: "Manufacturer warranty",
      bgColor: "bg-gradient-to-br from-[rgb(251,189,35)] to-[rgb(245,158,11)]",
    },
  ];

  const homeownerBenefits = [
    {
      title: "Interior Design Consultation",
      description:
        "Professional design guidance to select materials that complement your home's style and your lifestyle",
      savings: "Included",
    },
    {
      title: "Material Sample Service",
      description:
        "Take home material samples to see how they look in your actual lighting conditions",
      savings: "Professional service",
    },
    {
      title: "Project Planning Support",
      description:
        "Detailed project timeline, material calculations, and coordination with your preferred contractors",
      savings: "Comprehensive planning",
    },
    {
      title: "Warranty & Support",
      description:
        "Comprehensive material warranties and ongoing maintenance guidance for your investment",
      savings: "5-25 year warranties",
    },
  ];

  const homeProjects = [
    {
      title: "Modern Family Home",
      homeowner: "The Johnson Family",
      location: "Coral Gables",
      style: "Contemporary Elegance",
      imageId: "modernFamilyHome", // Already fixed above but making sure it's consistent
      materials: [
        "Large Format Porcelain",
        "Natural Wood-Look LVP",
        "Marble Accents",
      ],
      imageId: "modernFamilyHome",
      result: "Increased home value by $45,000",
    },
    {
      title: "Historic Home Renovation",
      homeowner: "The Rodriguez Family",
      location: "Coconut Grove",
      style: "Classic with Modern Touches",
      materials: ["Hardwood Restoration", "Decorative Tile", "Natural Stone"],
      imageId: "historicHomeRenovation",
      result: "Featured in Miami Home & Design",
    },
    {
      title: "Waterfront Condo Upgrade",
      homeowner: "The Chen Family",
      location: "Key Biscayne",
      style: "Coastal Contemporary",
      materials: ["Luxury Vinyl Plank", "Porcelain Tile", "Glass Mosaics"],
      imageId: "waterfrontCondoUpgrade",
      result: "Perfect for family living",
    },
  ];

  const homeownerTestimonials = [
    {
      name: "Sarah Johnson",
      location: "Coral Gables",
      projectType: "Whole Home Renovation",
      text: "Genesis Stone transformed our entire home. The design consultation helped us choose materials that work perfectly with our lifestyle and aesthetic. Our home feels like a luxury resort now.",
      rating: 5,
      timeframe: "3-week project",
    },
    {
      name: "Carlos Rodriguez",
      location: "Coconut Grove",
      projectType: "Kitchen & Living Room",
      text: "The team understood our vision for blending historic charm with modern functionality. The installation was flawless and the results exceeded our expectations. Worth every penny.",
      rating: 5,
      timeframe: "2-week project",
    },
  ];

  return (
    <Layout>
      {/* Hero Section - Home-focused design */}
      <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white overflow-hidden">
        {/* Elegant background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-[rgb(251,189,35)]/10 to-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-[rgb(138,0,0)]/10 to-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <Badge className="bg-[rgb(251,189,35)] text-black mb-8 px-6 py-3 text-lg font-bold">
              For Homeowners & Interior Designers
            </Badge>

            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="block">Transform Your Home</span>
              <span className="block bg-gradient-to-r from-[rgb(251,189,35)] to-amber-400 bg-clip-text text-transparent">
                Transform Your Space
              </span>
            </h1>

            <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Upgrade your home with premium flooring solutions. From design
              consultation to contractor connections, we help you create the
              home of your dreams.
            </p>

            <div className="flex flex-col lg:flex-row gap-8 justify-center items-center mb-16">
              <GoldButton size="lg" className="px-12 py-6 text-xl font-bold">
                Start Your Home Project
                <ArrowRight className="ml-3 h-6 w-6" />
              </GoldButton>
              <WhiteOutlineButton
                size="lg"
                className="px-12 py-6 text-xl font-bold"
                onClick={() => {
                  const phoneNumber = "13055104733";
                  const message =
                    "Hi! I'm interested in scheduling a design consultation for my home flooring project. Can you help me?";
                  const encodedMessage = encodeURIComponent(message);
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
                  window.open(whatsappUrl, "_blank");
                }}
              >
                Schedule Design Consultation
              </WhiteOutlineButton>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center space-x-3">
                <Star className="h-4 w-4 text-[rgb(251,189,35)] flex-shrink-0" />
                <span>500+ Home Projects</span>
              </div>
              <div className="flex items-center space-x-3">
                <TrendingUp className="h-4 w-4 text-[rgb(251,189,35)] flex-shrink-0" />
                <span>Increase Property Value</span>
              </div>
              <div className="flex items-center space-x-3">
                <Heart className="h-4 w-4 text-[rgb(251,189,35)] flex-shrink-0" />
                <span>Manufacturer Warranty</span>
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

      {/* Complete Home Flooring Service - Everything for Your Dream Home */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">
              Complete Home Flooring Service Home
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              From design consultation, to floor selection and budgeting, all
              the way to delivery and post-installation follow up questions you
              may have. We are here every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {homeUpgradeFeatures.map((feature, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-0"
              >
                <CardContent className="relative p-10">
                  <div className="flex items-start space-x-6">
                    <div
                      className={`w-20 h-20 rounded-2xl ${feature.bgColor} flex items-center justify-center flex-shrink-0 shadow-xl`}
                    >
                      <feature.icon className="h-10 w-10 text-white" />
                    </div>
                    <div className="flex-1">
                      <Badge className="bg-gray-100 text-gray-800 mb-4">
                        {feature.highlight}
                      </Badge>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[rgb(138,0,0)] transition-colors">
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

      {/* Home Project Showcase */}
      <section className="py-24 bg-[rgb(138,0,0)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-8">
              Beautiful Homes, Happy Families
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how Miami families have transformed their homes with our
              premium flooring solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {homeProjects.map((project, index) => (
              <Card
                key={index}
                className="group bg-white/10 backdrop-blur-sm border-white/20 overflow-hidden hover:bg-white/20 transition-all duration-500"
              >
                <div className="relative overflow-hidden">
                  <SimpleReliableImage
                    imageId={project.imageId}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-[rgb(251,189,35)] text-black font-semibold">
                      Featured
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-[rgb(251,189,35)] font-semibold">
                      {project.homeowner}
                    </p>
                    <p className="text-gray-300 text-sm">
                      {project.location} • {project.style}
                    </p>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm text-gray-300 mb-2">
                      Materials Used:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.materials.map((material, idx) => (
                        <span
                          key={idx}
                          className="bg-white/20 text-gray-200 px-3 py-1 rounded-full text-xs"
                        >
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-green-300 text-sm font-medium">
                      {project.result}
                    </span>
                    <ArrowRight className="h-5 w-5 text-gray-300 group-hover:text-[rgb(251,189,35)] transition-colors" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Homeowner Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What Are Families In South Florida Saying
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from homeowners who transformed their spaces
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {homeownerTestimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="relative p-8 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-gray-50 to-white"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 text-[rgb(251,189,35)] fill-current"
                        />
                      ))}
                    </div>
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
                        {testimonial.location}
                      </p>
                      <p className="text-gray-600">{testimonial.projectType}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary">{testimonial.timeframe}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Home Design Process */}
      <section className="py-24 bg-gradient-to-br from-[rgb(138,0,0)] to-[rgb(120,0,0)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Your Home Transformation Process
            </h2>
            <p className="text-xl text-white/90">
              Simple steps to create the home you've always wanted
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Design Consultation",
                description:
                  "Meet with our design experts to discuss your vision and lifestyle",
              },
              {
                step: "02",
                title: "Material Selection",
                description:
                  "Choose from premium materials with professional guidance",
              },
              {
                step: "03",
                title: "Professional Installation",
                description: "Expert installation by certified craftsmen",
              },
              {
                step: "04",
                title: "Enjoy Your New Home",
                description: "Relax and enjoy your beautiful new flooring",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-[rgb(251,189,35)] text-black rounded-xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                <p className="text-white/80 leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Retail;
