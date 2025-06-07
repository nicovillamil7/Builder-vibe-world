import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Palette,
  Award,
  Shield,
  Clock,
  CheckCircle,
  Star,
  Users,
  Camera,
  Layers,
} from "lucide-react";

const Retail = () => {
  const designerBenefits = [
    {
      icon: Palette,
      title: "Curated Luxury Collections",
      description:
        "Exclusive access to premium marble, natural stone, and custom mosaics sourced from top manufacturers worldwide.",
    },
    {
      icon: Award,
      title: "Design Consultation Services",
      description:
        "One-on-one consultations with our design experts to help you select the perfect materials for your projects.",
    },
    {
      icon: Camera,
      title: "3D Mockups & Visualizations",
      description:
        "Professional rendering services to help you and your clients visualize the final result before installation.",
    },
    {
      icon: Shield,
      title: "Trade Designer Pricing",
      description:
        "Special pricing for certified interior designers and architects with quick approval process.",
    },
    {
      icon: Clock,
      title: "Priority Sample Service",
      description:
        "Fast-track sample delivery and expanded sample programs for large format tiles and natural stones.",
    },
    {
      icon: Layers,
      title: "Custom Pattern Creation",
      description:
        "Work with our team to create unique mosaic patterns and custom layouts for signature projects.",
    },
  ];

  const showcaseProjects = [
    {
      title: "Luxury Penthouse",
      location: "Brickell, Miami",
      designer: "Sarah Chen Design",
      materials: "Carrara Marble, Custom Glass Mosaics",
      image: "/placeholder.svg",
    },
    {
      title: "Boutique Hotel Lobby",
      location: "South Beach",
      designer: "Modern Interiors Co.",
      materials: "Large Format Porcelain, Natural Stone",
      image: "/placeholder.svg",
    },
    {
      title: "Contemporary Residence",
      location: "Coral Gables",
      designer: "Elite Design Studio",
      materials: "Wood-Look Porcelain, Metal Accents",
      image: "/placeholder.svg",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      title: "Principal Designer, Chen Design Studio",
      text: "Miami Floors Pro understands the unique needs of interior designers. Their luxury collections and design support services have elevated every project we've worked on together.",
      rating: 5,
      project: "15 completed projects",
    },
    {
      name: "Michael Rodriguez",
      title: "Licensed Architect",
      text: "The quality of materials and attention to detail is exceptional. Their team provides the technical support and custom solutions that make complex commercial projects successful.",
      rating: 5,
      project: "8 commercial projects",
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
                For Interior Designers & Architects
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Luxury Materials for Distinctive Designs
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Elevate your projects with our curated collection of premium
                flooring materials, expert design consultation, and professional
                support services tailored for South Florida's leading interior
                designers and architects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-400 text-black hover:bg-yellow-500 px-8"
                >
                  Request Designer Samples
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-red-800 px-8"
                >
                  Schedule Consultation
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg"
                alt="Luxury Interior Design"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-black p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">500+ Designer Projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Designers Choose Miami Floors Pro
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We understand the unique challenges of interior design projects
              and provide the materials, services, and support you need to
              create exceptional spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designerBenefits.map((benefit, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-red-800" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Designer Partnership Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Initial Consultation",
                description: "Discuss your project vision and requirements",
              },
              {
                step: "02",
                title: "Material Selection",
                description: "Curated recommendations based on your design",
              },
              {
                step: "03",
                title: "Samples & Mockups",
                description: "Large format samples and 3D visualizations",
              },
              {
                step: "04",
                title: "Project Support",
                description: "Ongoing support through installation completion",
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

      {/* Showcase Projects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Designer Projects
            </h2>
            <p className="text-lg text-gray-600">
              See how our materials have been used to create stunning interior
              spaces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {showcaseProjects.map((project, index) => (
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
                    Featured
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
                    {project.designer}
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

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Designers Say About Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative">
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
                    <Badge variant="secondary">{testimonial.project}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Designer Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Designer Resources
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-red-800 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Trade Account</h3>
                <p className="text-gray-600 mb-4">
                  Apply for trade pricing and Net-30 payment terms
                </p>
                <Button
                  variant="outline"
                  className="border-red-800 text-red-800 hover:bg-red-50"
                >
                  Apply Now
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Camera className="h-12 w-12 text-red-800 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Project Gallery</h3>
                <p className="text-gray-600 mb-4">
                  Browse our collection of completed designer projects
                </p>
                <Button
                  variant="outline"
                  className="border-red-800 text-red-800 hover:bg-red-50"
                >
                  View Gallery
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Layers className="h-12 w-12 text-red-800 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Material Library</h3>
                <p className="text-gray-600 mb-4">
                  Download high-resolution material images and specs
                </p>
                <Button
                  variant="outline"
                  className="border-red-800 text-red-800 hover:bg-red-50"
                >
                  Download
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm
            title="Start Your Designer Partnership"
            subtitle="Tell us about your project and let's create something beautiful together"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Elevate Your Next Project?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join hundreds of South Florida designers who trust Miami Floors Pro
            for their premium flooring needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-yellow-400 text-black hover:bg-yellow-500 px-8"
            >
              Request Designer Samples
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-800 px-8"
            >
              Schedule Showroom Visit
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Retail;
