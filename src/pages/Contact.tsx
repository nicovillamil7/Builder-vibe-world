import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import { GoldButton, WhiteOutlineButton } from "@/components/ui/custom-buttons";
import { Car, Building, MessageSquare, CheckCircle } from "lucide-react";
import {
  PrimaryButton,
  OutlineButton,
} from "@/components/ui/custom-buttons";
import { SimpleReliableImage } from "@/components/ui/ReliableImage";

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      primary: "(305) 477-4402",
      secondary: "Mon-Fri: 7:00 AM - 4:00 PM",
      action: "Call Now",
      href: "tel:+13054774402",
    },
    {
      icon: Mail,
      title: "Email Us",
      primary: "genesistonemore@gmail.com",
      secondary: "We respond within 2 hours",
      action: "Send Email",
      href: "mailto:genesistonemore@gmail.com",
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      primary: "Chat with our experts",
      secondary: "Available during business hours",
      action: "Start Chat",
      href: "#",
    },
  ];

  const locations = [
    {
      name: "Miami Showroom & Warehouse",
      address: "3399 NW 72nd Ave #109",
      city: "Miami, FL 33122",
      phone: "(305) 477-4402",
      hours: [
        "Monday - Friday: 7:00 AM - 6:00 PM",
        "Saturday: 8:00 AM - 4:00 PM",
        "Sunday: Closed",
      ],
      services: [
        "Showroom",
        "Will Call",
        "Contractor Pickup",
        "Design Consultation",
      ],
    },
  ];

  const specialServices = [
    {
      icon: Car,
      title: "Will Call & Pickup",
      description:
        "Same-day pickup available for contractors and urgent orders",
      hours: "Mon-Fri: 7:00 AM - 4:00 PM, Sat: 8:00 AM - 4:00 PM",
    },
    {
      icon: Building,
      title: "Job Site Delivery",
      description: "Coordinated delivery directly to your project site",
      hours: "Scheduled deliveries throughout South Florida",
    },
  ];

  return (
    <Layout>
      <SEOHead 
        title="Contact Genesis Stone Miami - Flooring Consultation"
        description="Contact Genesis Stone Miami for flooring consultation, showroom visits & project quotes. Call, email or visit our showroom Mon-Fri 7AM-4PM."
        keywords="contact Genesis Stone, Miami flooring consultation, showroom visit, flooring quotes, Genesis Stone phone number, flooring contractor Miami"
      />
      <BreadcrumbNavigation />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-[rgb(138,0,0)] to-[rgb(153,27,27)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contact Genesis Stone Miami - Get Expert Consultation
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white/95">
            Visit Our Showroom or Call for Professional Flooring Guidance
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Ready to start your flooring project? Our team of experts is here to
            help with product selection, pricing, and project planning. Contact
            us today!
          </p>
        </div>
      </section>

      {/* Showroom Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Visit Our Miami Showroom
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Experience our materials firsthand in our state-of-the-art
                showroom. See, touch, and compare hundreds of flooring options
                with expert guidance from our design consultants.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Interactive material displays
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Professional design consultation
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Contractor will-call pickup
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Same-day sample availability
                </li>
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <SimpleReliableImage
                imageId="showroomDisplay"
                alt="Genesis Stone showroom displaying various tile and stone samples"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-lg text-gray-600">
              Choose the method that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="text-center group hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <method.icon className="h-8 w-8 text-red-800" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {method.title}
                  </h3>
                  <p className="text-lg font-medium text-red-800 mb-2">
                    {method.primary}
                  </p>
                  <p className="text-gray-600 mb-6">{method.secondary}</p>
                  <PrimaryButton
                    onClick={() => window.open(method.href, "_blank")}
                  >
                    {method.action}
                  </PrimaryButton>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Send Us a Message
            </h2>
            <p className="text-lg text-gray-600">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Location Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Visit Our Showroom
            </h2>
            <p className="text-lg text-gray-600">
              See our materials in person and get expert advice from our team
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Location Details */}
            <div>
              {locations.map((location, index) => (
                <Card key={index} className="mb-6">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-red-800" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {location.name}
                        </h3>
                        <p className="text-gray-600 mb-1">{location.address}</p>
                        <p className="text-gray-600 mb-2">{location.city}</p>
                        <p className="text-red-800 font-medium">
                          {location.phone}
                        </p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Clock className="h-5 w-5 text-red-800 mr-2" />
                        Hours of Operation
                      </h4>
                      <ul className="space-y-1">
                        {location.hours.map((hour, hourIndex) => (
                          <li key={hourIndex} className="text-gray-600">
                            {hour}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Building className="h-5 w-5 text-red-800 mr-2" />
                        Available Services
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {location.services.map((service, serviceIndex) => (
                          <span
                            key={serviceIndex}
                            className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Interactive Google Maps */}
            <div className="rounded-lg overflow-hidden h-96 lg:h-full shadow-lg">
              <iframe
                src="https://maps.google.com/maps?cid=27303253618402823&output=embed"
                loading="lazy"
                width="100%"
                height="100%"
                referrerPolicy="no-referrer-when-downgrade"
                title="Genesis Stone Location - 3399 NW 72nd Ave #109, Miami, FL 33122"
                allowFullScreen
                style={{ border: 0 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Special Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Special Services
            </h2>
            <p className="text-lg text-gray-600">
              Additional services to support your project needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specialServices.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-6 w-6 text-red-800" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-3">
                        {service.description}
                      </p>
                      <p className="text-sm text-red-800 font-medium">
                        {service.hours}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-8 bg-[rgb(138,0,0)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Need Urgent Support?
              </h3>
              <p className="text-white/90">
                For time-sensitive orders or emergency deliveries, call our
                priority line
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <GoldButton size="lg">Emergency Line: (305) 477-4402</GoldButton>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;