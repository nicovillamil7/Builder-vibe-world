import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Award,
  Users,
  MapPin,
  Clock,
  CheckCircle,
  Star,
  Target,
  Heart,
  Zap,
} from "lucide-react";

const About = () => {
  const stats = [
    { number: "15+", label: "Years in Business", icon: Clock },
    { number: "1,000+", label: "Projects Completed", icon: CheckCircle },
    { number: "500+", label: "Happy Contractors", icon: Users },
    { number: "50+", label: "Designer Partners", icon: Award },
  ];

  const values = [
    {
      icon: Target,
      title: "Quality First",
      description:
        "We source only the highest quality materials from trusted manufacturers, ensuring every project meets our exacting standards.",
    },
    {
      icon: Users,
      title: "Customer Partnership",
      description:
        "We don't just sell flooring - we partner with contractors and designers to ensure project success from start to finish.",
    },
    {
      icon: Zap,
      title: "Reliability",
      description:
        "On-time delivery, consistent quality, and responsive service. You can count on us to keep your projects on schedule.",
    },
    {
      icon: Heart,
      title: "Community Focus",
      description:
        "As a Miami-based company, we're committed to supporting the growth and success of South Florida's construction community.",
    },
  ];

  const team = [
    {
      name: "Maria Gonzalez",
      title: "Founder & CEO",
      description:
        "15+ years in flooring industry, former contractor who understands project needs firsthand.",
      image: "/placeholder.svg",
    },
    {
      name: "David Chen",
      title: "Operations Manager",
      description:
        "Logistics expert ensuring fast, reliable delivery across South Florida.",
      image: "/placeholder.svg",
    },
    {
      name: "Sofia Rodriguez",
      title: "Design Consultant",
      description:
        "Licensed interior designer helping clients select the perfect materials for their vision.",
      image: "/placeholder.svg",
    },
    {
      name: "Mike Thompson",
      title: "Contractor Relations",
      description:
        "Former project manager specializing in volume orders and trade accounts.",
      image: "/placeholder.svg",
    },
  ];

  const milestones = [
    {
      year: "2008",
      event: "Miami Floors Pro founded in small Miami warehouse",
    },
    {
      year: "2012",
      event: "Expanded to 20,000 sq ft showroom and warehouse facility",
    },
    {
      year: "2015",
      event: "Launched contractor trade program with volume discounts",
    },
    {
      year: "2018",
      event: "Added designer consultation services and luxury collections",
    },
    {
      year: "2020",
      event: "Introduced online ordering and virtual consultations",
    },
    {
      year: "2024",
      event: "Serving 500+ contractors and 50+ designers across Florida",
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
                Since 2008
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Florida's Trusted Flooring Partner
              </h1>
              <p className="text-xl text-white/90 mb-8">
                For over 15 years, Miami Floors Pro has been the premier
                destination for premium flooring materials, serving contractors,
                designers, and homeowners across South Florida with unmatched
                quality and service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-400 text-black hover:bg-yellow-500 px-8"
                >
                  Visit Our Showroom
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-red-800 px-8"
                >
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg"
                alt="Miami Floors Pro Showroom"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-black p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-red-800" />
                  <span className="font-semibold">20,000 sq ft Showroom</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center group hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-6 w-6 text-red-800" />
                  </div>
                  <div className="text-3xl font-bold text-red-800 mb-2">
                    {stat.number}
                  </div>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Miami Floors Pro was founded in 2008 by Maria Gonzalez, a former
                contractor who experienced firsthand the challenges of finding
                reliable flooring suppliers who understood the unique demands of
                South Florida construction projects.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Starting with a small warehouse and a commitment to quality,
                we've grown into the region's premier flooring destination. Our
                success is built on strong relationships with contractors and
                designers who depend on us for premium materials, competitive
                pricing, and reliable service.
              </p>
              <p className="text-lg text-gray-600">
                Today, we operate from a 20,000 square foot facility in Miami's
                Design District, serving hundreds of contractors and dozens of
                interior designers across Florida. Our commitment to quality and
                service remains unchanged.
              </p>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg"
                alt="Miami Floors Pro History"
                className="rounded-lg shadow-lg"
              />
              <Badge className="absolute top-4 left-4 bg-red-800">
                Family Owned
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do, from product
              selection to customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <value.icon className="h-6 w-6 text-red-800" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600">
              Key milestones in our company's growth and evolution
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-red-800"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div
                    className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}
                  >
                    <Card>
                      <CardContent className="p-4">
                        <div className="text-2xl font-bold text-red-800 mb-2">
                          {milestone.year}
                        </div>
                        <p className="text-gray-600">{milestone.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-4 h-4 bg-red-800 rounded-full relative z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600">
              The experienced professionals behind Miami Floors Pro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="text-center group hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-red-800 font-medium mb-3">
                    {member.title}
                  </p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Partnerships */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Certifications & Partnerships
            </h2>
            <p className="text-lg text-gray-600">
              Proud members and certified partners
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[
              "Better Business Bureau A+ Rating",
              "Florida State Certified Supplier",
              "National Tile Contractors Association",
              "Miami Chamber of Commerce",
            ].map((certification, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Award className="h-8 w-8 text-red-800" />
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {certification}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-red-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-white/90 mb-8">
            Experience the Miami Floors Pro difference for your next project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-yellow-400 text-black hover:bg-yellow-500 px-8"
            >
              Visit Our Showroom
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-800 px-8"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
