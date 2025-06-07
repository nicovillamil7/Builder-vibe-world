import Layout from "@/components/Layout";
import {
  GoldButton,
  WhiteOutlineButton,
  PrimaryButton,
  OutlineButton,
} from "@/components/ui/custom-buttons";
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
  Building2,
  Handshake,
  Shield,
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
      color: "red",
    },
    {
      icon: Users,
      title: "Customer Partnership",
      description:
        "We don't just sell flooring - we partner with contractors and designers to ensure project success from start to finish.",
      color: "blue",
    },
    {
      icon: Zap,
      title: "Reliability",
      description:
        "On-time delivery, consistent quality, and responsive service. You can count on us to keep your projects on schedule.",
      color: "green",
    },
    {
      icon: Heart,
      title: "Community Focus",
      description:
        "As a Miami-based company, we're committed to supporting the growth and success of South Florida's construction community.",
      color: "purple",
    },
  ];

  const team = [
    {
      name: "Maria Gonzalez",
      title: "Founder & CEO",
      description:
        "15+ years in flooring industry, former contractor who understands project needs firsthand.",
      image: "/placeholder.svg",
      quote:
        "Quality flooring shouldn't be a luxury - it should be accessible to every professional.",
    },
    {
      name: "David Chen",
      title: "Operations Manager",
      description:
        "Logistics expert ensuring fast, reliable delivery across South Florida.",
      image: "/placeholder.svg",
      quote:
        "Every delivery matters. We treat your timeline as seriously as our own.",
    },
    {
      name: "Sofia Rodriguez",
      title: "Design Consultant",
      description:
        "Licensed interior designer helping clients select the perfect materials for their vision.",
      image: "/placeholder.svg",
      quote:
        "Great design starts with understanding both vision and practical needs.",
    },
    {
      name: "Mike Thompson",
      title: "Contractor Relations",
      description:
        "Former project manager specializing in volume orders and trade accounts.",
      image: "/placeholder.svg",
      quote: "I've been on job sites. I know what contractors need to succeed.",
    },
  ];

  const milestones = [
    {
      year: "2008",
      event: "Maria Gonzalez founded Genesis Stone after years as a contractor",
      details:
        "Started with a 2,000 sq ft warehouse and a mission to serve fellow contractors",
    },
    {
      year: "2012",
      event: "Expanded to 20,000 sq ft showroom and warehouse facility",
      details:
        "Growth driven by word-of-mouth recommendations from satisfied customers",
    },
    {
      year: "2015",
      event: "Launched contractor trade program with volume discounts",
      details: "Introduced Net-30 terms and dedicated account management",
    },
    {
      year: "2018",
      event: "Added designer consultation services and luxury collections",
      details:
        "Partnered with high-end manufacturers to serve interior design market",
    },
    {
      year: "2020",
      event: "Adapted with virtual consultations and enhanced delivery",
      details: "Maintained service excellence during challenging times",
    },
    {
      year: "2024",
      event: "Serving 500+ contractors and 50+ designers across Florida",
      details: "Recognized as South Florida's premier flooring destination",
    },
  ];

  return (
    <Layout>
      {/* Hero Section - Story-focused */}
      <div className="relative bg-gradient-to-br from-[rgb(138,0,0)] via-[rgb(120,0,0)] to-[rgb(100,0,0)] text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className={
              'absolute inset-0 bg-[url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')]'
            }
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <Badge className="bg-[rgb(251,189,35)] text-black mb-6 px-4 py-2 text-sm font-semibold">
              Our Story Since 2008
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Built by Contractors,
              <br />
              <span className="text-[rgb(251,189,35)]">for Professionals</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed">
              Genesis Stone was born from real experience on real job sites. We
              understand what it takes to deliver quality projects on time and
              on budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <GoldButton size="lg" className="px-10 py-4 text-lg">
                Visit Our Showroom
              </GoldButton>
              <WhiteOutlineButton size="lg" className="px-10 py-4 text-lg">
                Meet Our Team
              </WhiteOutlineButton>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <stat.icon className="h-8 w-8 text-[rgb(251,189,35)]" />
                </div>
                <div className="text-4xl font-bold text-[rgb(251,189,35)] mb-2">
                  {stat.number}
                </div>
                <p className="text-white/80 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Founder Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="/placeholder.svg"
                alt="Maria Gonzalez - Founder"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-[rgb(138,0,0)] text-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Building2 className="h-8 w-8 text-[rgb(251,189,35)]" />
                  <div>
                    <p className="font-bold text-lg">20,000 sq ft</p>
                    <p className="text-sm opacity-90">Showroom & Warehouse</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Badge className="bg-red-100 text-[rgb(138,0,0)] mb-6">
                Founder's Story
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                From the Job Site to the Showroom
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  "I spent years as a contractor, dealing with suppliers who
                  didn't understand the pressure of deadlines, the importance of
                  quality, or the reality of thin margins."
                </p>
                <p>
                  "After missing too many project deadlines because of
                  unreliable suppliers, I decided to create the company I wished
                  existed. Genesis Stone was born from the frustration of not
                  having a true partner in the flooring business."
                </p>
                <p>
                  "Today, we're proud to be that partner for hundreds of
                  contractors and designers across Florida. We know what you
                  need because we've been where you are."
                </p>
              </div>
              <div className="mt-8 p-6 bg-amber-50 rounded-xl border-l-4 border-[rgb(251,189,35)]">
                <p className="text-gray-800 font-medium italic">
                  "Every day, we ask ourselves: Would this make my old
                  contracting business better? If the answer is yes, we do it."
                </p>
                <p className="text-sm text-gray-600 mt-3">
                  — Maria Gonzalez, Founder & CEO
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Visual storytelling */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Values That Drive Everything We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These aren't just words on a wall. They're the principles that
              guide every decision, every interaction, and every shipment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                        value.color === "red"
                          ? "bg-red-100"
                          : value.color === "blue"
                            ? "bg-blue-100"
                            : value.color === "yellow"
                              ? "bg-amber-100"
                              : "bg-red-100"
                      }`}
                    >
                      <value.icon
                        className={`h-8 w-8 ${
                          value.color === "red"
                            ? "text-[rgb(138,0,0)]"
                            : value.color === "blue"
                              ? "text-blue-600"
                              : value.color === "yellow"
                                ? "text-[rgb(251,189,35)]"
                                : "text-[rgb(138,0,0)]"
                        }`}
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[rgb(138,0,0)] transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline - Journey visualization */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Growth Journey
            </h2>
            <p className="text-xl text-gray-600">
              From humble beginnings to South Florida's premier flooring
              destination
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[rgb(138,0,0)] to-[rgb(251,189,35)] h-full rounded-full"></div>

            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div
                    className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12"}`}
                  >
                    <Card className="group hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-8">
                        <div className="text-3xl font-bold text-[rgb(138,0,0)] mb-3">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          {milestone.event}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {milestone.details}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline dot */}
                  <div className="w-6 h-6 bg-[rgb(138,0,0)] rounded-full relative z-10 border-4 border-white shadow-lg"></div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Personal approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The People Behind Your Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals who make Genesis Stone your
              most reliable partner
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {team.map((member, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-start space-x-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-[rgb(138,0,0)] font-semibold mb-3">
                        {member.title}
                      </p>
                      <p className="text-gray-600 mb-4">{member.description}</p>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-gray-50 rounded-xl border-l-4 border-[rgb(138,0,0)]">
                    <p className="text-gray-800 italic">"{member.quote}"</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust indicators */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Trusted & Certified
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[
              { name: "BBB A+ Rating", icon: Award },
              { name: "FL State Certified", icon: Shield },
              { name: "NTCA Member", icon: Handshake },
              { name: "Chamber Member", icon: Building2 },
            ].map((cert, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl transition-shadow">
                  <cert.icon className="h-8 w-8 text-[rgb(138,0,0)]" />
                </div>
                <p className="font-semibold text-gray-900">{cert.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[rgb(138,0,0)] to-[rgb(120,0,0)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join hundreds of satisfied contractors and designers who trust
            Genesis Stone Floors Pro for their most important projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <GoldButton size="lg" className="px-10 py-4 text-lg">
              Visit Our 20,000 sq ft Showroom
            </GoldButton>
            <WhiteOutlineButton size="lg" className="px-10 py-4 text-lg">
              Schedule a Consultation
            </WhiteOutlineButton>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
