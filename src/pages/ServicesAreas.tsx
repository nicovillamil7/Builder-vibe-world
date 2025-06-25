
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Truck, Clock, CheckCircle } from "lucide-react";

const ServiceAreas = () => {
  const serviceAreas = [
    {
      city: "Miami",
      description: "Our main showroom and warehouse location serving Miami-Dade County",
      services: ["Same-day pickup", "Next-day delivery", "Trade showroom visits", "Material samples"],
      zipCodes: ["33101", "33125", "33134", "33145", "33156", "33186"]
    },
    {
      city: "Fort Lauderdale",
      description: "Serving Broward County with premium flooring solutions",
      services: ["Scheduled delivery", "Contractor support", "Project consultation", "Bulk pricing"],
      zipCodes: ["33301", "33312", "33324", "33351", "33394"]
    },
    {
      city: "West Palm Beach",
      description: "Palm Beach County flooring contractor and homeowner services",
      services: ["Weekly delivery routes", "Designer samples", "Installation referrals", "Technical support"],
      zipCodes: ["33401", "33407", "33414", "33461", "33484"]
    },
    {
      city: "Naples",
      description: "Southwest Florida luxury flooring and natural stone specialist",
      services: ["Luxury projects", "Custom mosaics", "High-end materials", "White-glove service"],
      zipCodes: ["34102", "34108", "34109", "34110", "34119"]
    }
  ];

  return (
    <Layout>
      <SEOHead
        title="South Florida Flooring Service Areas | Miami, Fort Lauderdale, West Palm Beach"
        description="Genesis Stone serves all of South Florida with premium flooring solutions. Same-day pickup in Miami, delivery to Fort Lauderdale, West Palm Beach, Naples and throughout Florida."
        keywords="flooring Miami service area, Fort Lauderdale tile supplier, West Palm Beach flooring contractor, Naples natural stone, South Florida flooring delivery, Miami flooring warehouse"
        canonicalUrl="https://genesisstoneusa.com/service-areas"
      />

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-[rgb(251,189,35)] text-black mb-6 px-4 py-2 text-sm font-semibold">
              Serving All of South Florida
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Florida Flooring Service Areas
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Premium flooring contractor services and trade pricing available throughout South Florida. 
              Same-day pickup in Miami, scheduled delivery to all major cities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {serviceAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-red-700" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{area.city}</h3>
                      <p className="text-gray-600">{area.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Available Services
                    </h4>
                    <ul className="space-y-2">
                      {area.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="text-gray-600 flex items-center">
                          <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Primary Zip Codes</h4>
                    <div className="flex flex-wrap gap-2">
                      {area.zipCodes.map((zip, zipIndex) => (
                        <Badge key={zipIndex} variant="secondary" className="text-xs">
                          {zip}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Delivery Schedule */}
          <Card className="mb-16">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  South Florida Delivery Schedule
                </h2>
                <p className="text-gray-600">
                  Reliable flooring delivery throughout Florida with flexible scheduling
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-green-700" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Same-Day Pickup</h3>
                  <p className="text-gray-600">Miami showroom pickup available Mon-Fri 7AM-4PM</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Truck className="h-8 w-8 text-blue-700" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Next-Day Delivery</h3>
                  <p className="text-gray-600">Miami-Dade, Broward, and Palm Beach Counties</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-purple-700" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Statewide Shipping</h3>
                  <p className="text-gray-600">Special rates for bulk contractor orders throughout Florida</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceAreas;
