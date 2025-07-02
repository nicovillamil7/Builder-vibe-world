import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  PrimaryButton,
  GoldButton,
  WhiteOutlineButton,
} from "@/components/ui/custom-buttons";
import {
  Users,
  Award,
  Clock,
  Shield,
  Star,
  CheckCircle,
  Palette,
  Home,
} from "lucide-react";
import SEOHead from "@/components/SEOHead";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import ContactForm from "@/components/ContactForm";
import GoogleReviews from "@/components/GoogleReviews";
import {
  OutlineButton,
} from "@/components/ui/custom-buttons";
import { SimpleReliableImage } from "@/components/ui/ReliableImage";
import {
  Eye,
  Zap,
  Crown,
  Gem,
  Camera,
  Layers,
  ArrowRight,
  TrendingUp,
  Heart,
  Sparkles,
} from "lucide-react";

const Retail = () => {
  const homeUpgradeFeatures = [
    {
      icon: TrendingUp,
      title: "Home Value Enhancement",
      description:
        "If improving your property´s value is a defining priority for you, we´ve got you covered. Talk to us about our flooring selections designed to specifically enhance property value above all else.",
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
      <SEOHead 
        title="Retail Flooring Miami - Genesis Stone Showroom"
        description="Visit our Miami flooring showroom for premium tiles, natural stone & expert consultation. Open Mon-Fri 7AM-4PM. Professional guidance for your home project."
        keywords="Miami flooring showroom, retail flooring, Genesis Stone retail, flooring consultation Miami, tile showroom South Florida"
        canonicalUrl="https://genesisstoneusa.com/retail"
      />
      <BreadcrumbNavigation />

      {/* Hero Section */}
      <section className="relative py-16 text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Miami Retail Flooring Showroom - Genesis Stone
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white/95">
            Premium Flooring Materials for South Florida Homeowners
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Explore our extensive collection of high-quality flooring options
            for every style and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GoldButton className="px-8 py-3 text-lg font-semibold">
              Request a Consultation
            </GoldButton>
            <WhiteOutlineButton className="px-8 py-3 text-lg font-semibold">
              View Our Products
            </WhiteOutlineButton>
          </div>
        </div>
      </section>

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

      {/* Google Reviews Section */}
      <GoogleReviews />

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Home?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let our experts help you find the perfect flooring solutions for
            your space
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[rgb(138,0,0)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[rgb(120,0,0)] transition-colors">
              Schedule Consultation
            </button>
            <button className="border-2 border-[rgb(138,0,0)] text-[rgb(138,0,0)] px-8 py-3 rounded-lg font-semibold hover:bg-[rgb(138,0,0)] hover:text-white transition-colors">
              Get Free Quote
            </button>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-right flex flex-col justify-center items-center mr-auto">
              <div className="w-20 h-20 bg-[rgb(251,189,35)] text-black rounded-xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                01
              </div>
              <h3 className="text-xl font-bold mb-3">Design Consultation</h3>
              <p className="text-white/80 leading-relaxed text-center">
                Meet with our design experts to discuss your vision and
                lifestyle
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[rgb(251,189,35)] text-black rounded-xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                02
              </div>
              <h3 className="text-xl font-bold mb-3">Material Selection</h3>
              <p className="text-white/80 leading-relaxed">
                Choose from premium materials with professional guidance
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[rgb(251,189,35)] text-black rounded-xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                <p>03</p>
              </div>
              <h3 className="text-xl font-bold mb-3">Enjoy Your New Home</h3>
              <p className="text-white/80 leading-relaxed">
                Relax and enjoy your beautiful new flooring
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Retail;