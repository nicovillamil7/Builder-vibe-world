import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Car,
  Building,
  MessageSquare,
} from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      primary: "(305) 555-0123",
      secondary: "Mon-Fri: 7:00 AM - 6:00 PM",
      action: "Call Now",
      href: "tel:+13055550123",
    },
    {
      icon: Mail,
      title: "Email Us",
      primary: "info@miamifloorspro.com",
      secondary: "We respond within 2 hours",
      action: "Send Email",
      href: "mailto:info@miamifloorspro.com",
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
      address: "123 Design District Ave",
      city: "Miami, FL 33137",
      phone: "(305) 555-0123",
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
      hours: "Mon-Fri: 7:00 AM - 6:00 PM, Sat: 8:00 AM - 4:00 PM",
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
      {/* Hero Section */}
      <div className="bg-red-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Ready to start your flooring project? Our team of experts is here to
            help with product selection, pricing, and project planning. Contact
            us today!
          </p>
        </div>
      </div>

      {/* Contact Methods */}
      <section className="py-16 bg-gray-50">
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
                  <Button
                    className="bg-red-800 hover:bg-red-900"
                    onClick={() => window.open(method.href, "_blank")}
                  >
                    {method.action}
                  </Button>
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

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-lg h-96 lg:h-full flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Interactive Map</p>
                <p className="text-sm text-gray-500">
                  123 Design District Ave, Miami, FL 33137
                </p>
              </div>
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

      {/* FAQ Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Need Quick Answers?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Check out our frequently asked questions or speak with one of our
            experts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="border-red-800 text-red-800 hover:bg-red-50 px-8"
            >
              View FAQ
            </Button>
            <Button size="lg" className="bg-red-800 hover:bg-red-900 px-8">
              Speak with Expert
            </Button>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-8 bg-red-800 text-white">
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
              <Button
                size="lg"
                className="bg-yellow-400 text-black hover:bg-yellow-500"
              >
                Emergency Line: (305) 555-0911
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
