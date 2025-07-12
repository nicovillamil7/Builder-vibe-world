import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Gem, 
  Shield, 
  TrendingUp, 
  Snowflake, 
  Sun, 
  Star,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { GoldButton, WhiteOutlineButton } from "@/components/ui/custom-buttons";
import { SimpleReliableImage } from "@/components/ui/ReliableImage";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const NaturalStone = () => {
  const [openFAQ, setOpenFAQ] = React.useState<number | null>(null);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Natural Stone Flooring Miami",
    "description": "Premium natural stone flooring including travertine, marble, granite, slate, and limestone for Miami homes and businesses. Cool-touch surfaces perfect for pool decks and luxury interiors.",
    "brand": {
      "@type": "Brand",
      "name": "Genesis Stone"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "4.99",
      "highPrice": "15.99",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "4.99-15.99",
        "priceCurrency": "USD",
        "unitText": "per square foot"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150"
    },
    "areaServed": {
      "@type": "State",
      "name": "Florida"
    }
  };

  const benefits = [
    {
      icon: <Gem className="w-8 h-8 text-amber-600" />,
      title: "Timeless Beauty & Luxury",
      description: "Each piece features unique natural patterns that never go out of style"
    },
    {
      icon: <Shield className="w-8 h-8 text-amber-600" />,
      title: "Extreme Durability",
      description: "Withstands heavy traffic and harsh Miami weather for decades"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-amber-600" />,
      title: "Increases Property Value",
      description: "Premium natural stone adds significant resale value to your property"
    },
    {
      icon: <Snowflake className="w-8 h-8 text-amber-600" />,
      title: "Cool Touch Surface",
      description: "Perfect for Miami pool decks - stays cool even in direct sunlight"
    },
    {
      icon: <Sun className="w-8 h-8 text-amber-600" />,
      title: "Indoor & Outdoor Versatility",
      description: "Seamlessly transitions from interior floors to outdoor patios"
    }
  ];

  const stoneTypes = [
    {
      name: "Travertine",
      description: "Cool-touch limestone perfect for pool decks and patios",
      imageId: "poolDeck",
      features: ["Non-slip surface", "Heat resistant", "Natural texture"]
    },
    {
      name: "Marble",
      description: "Elegant and smooth with stunning natural veining",
      imageId: "naturalMarble", 
      features: ["Luxury finish", "Unique patterns", "High-end appeal"]
    },
    {
      name: "Granite",
      description: "Tough and stylish with exceptional durability",
      imageId: "naturalGranite",
      features: ["Scratch resistant", "Low maintenance", "Commercial grade"]
    },
    {
      name: "Slate",
      description: "Rustic and textured with rich natural colors",
      imageId: "naturalSlate",
      features: ["Anti-slip texture", "Weather resistant", "Natural beauty"]
    },
    {
      name: "Limestone",
      description: "Soft neutral tones with timeless natural charm",
      imageId: "naturalLimestone",
      features: ["Fossil inclusions", "Neutral palette", "Versatile design"]
    }
  ];

  const applications = [
    {
      title: "Living Rooms",
      description: "Create stunning focal points with natural stone flooring",
      imageId: "luxuryInterior"
    },
    {
      title: "Kitchens", 
      description: "Durable surfaces that handle daily cooking activities",
      imageId: "modernKitchen"
    },
    {
      title: "Pool Decks",
      description: "Cool-touch travertine that's safe and comfortable",
      imageId: "poolDeck"
    },
    {
      title: "Outdoor Patios",
      description: "Weather-resistant stone for year-round enjoyment",
      imageId: "outdoorPatio"
    },
    {
      title: "Commercial Spaces",
      description: "High-traffic flooring for offices and retail",
      imageId: "commercialFlooring"
    },
    {
      title: "Wall Cladding",
      description: "Dramatic accent walls with natural texture",
      imageId: "stoneWall"
    }
  ];

  const testimonials = [
    {
      name: "Maria Rodriguez",
      location: "Coral Gables, FL",
      rating: 5,
      text: "The travertine pool deck is amazing! Even in 90°F weather, we can walk barefoot comfortably."
    },
    {
      name: "James Thompson", 
      location: "Miami Beach, FL",
      rating: 5,
      text: "Genesis Stone transformed our kitchen with beautiful marble. The quality and service exceeded expectations."
    },
    {
      name: "Sofia Martinez",
      location: "Aventura, FL", 
      rating: 5,
      text: "Professional installation and stunning results. Our granite floors look incredible after 3 years."
    }
  ];

  const faqs = [
    {
      question: "Is natural stone waterproof?",
      answer: "Natural stone is naturally water-resistant, but we recommend sealing for optimal protection, especially in wet areas like bathrooms and pool decks."
    },
    {
      question: "How do I clean natural stone?",
      answer: "Use pH-neutral cleaners and avoid acidic products. Daily cleaning with a microfiber mop and periodic professional cleaning maintains the beauty."
    },
    {
      question: "Can natural stone be used outdoors in Miami?",
      answer: "Absolutely! Our natural stone is perfect for Miami's climate. Travertine and limestone stay cool in direct sunlight, making them ideal for pool decks."
    },
    {
      question: "Is natural stone slippery when wet?",
      answer: "We offer various finishes including honed and textured surfaces that provide excellent slip resistance, especially important around pools."
    },
    {
      question: "How long does natural stone last?",
      answer: "With proper installation and minimal maintenance, natural stone can last 50+ years, making it an excellent long-term investment."
    },
    {
      question: "What's the difference between marble and granite?",
      answer: "Marble offers elegant veining and softer tones, while granite provides superior durability and speckled patterns. Both are excellent choices for different applications."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Natural Stone Flooring Miami | Travertine, Marble, Granite | Genesis Stone</title>
        <meta 
          name="description" 
          content="Premium natural stone flooring in Miami. Travertine pool decks, marble floors, granite surfaces. Cool-touch, slip-resistant, luxury finishes. Free estimates." 
        />
        <meta name="keywords" content="natural stone flooring Miami, travertine pool deck, marble flooring, granite surfaces, limestone tiles, slate flooring, cool touch stone, Miami pool deck, luxury stone floors" />
        <link rel="canonical" href="https://genesisstoneusa.com/products/natural-stone" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 z-0">
          <SimpleReliableImage
            imageId="poolDeck"
            alt="Luxury travertine pool deck in Miami with cool-touch natural stone"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Timeless Elegance with 
              <span className="text-amber-400 block">Natural Stone Flooring</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Durable, luxurious, and perfect for any space — indoors or outdoors. 
              Cool-touch surfaces ideal for Miami's climate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <GoldButton size="lg" className="text-lg px-8 py-4">
                Get a Free Quote
              </GoldButton>
              <WhiteOutlineButton size="lg" className="text-lg px-8 py-4">
                Schedule Free Consultation
              </WhiteOutlineButton>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Natural Stone?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the unmatched benefits that make natural stone the preferred choice for Miami homeowners and businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stone Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Types of Natural Stone We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each stone type offers unique characteristics perfect for different applications and design preferences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stoneTypes.map((stone, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 overflow-hidden">
                  <SimpleReliableImage
                    imageId={stone.imageId}
                    alt={`${stone.name} natural stone flooring`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {stone.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {stone.description}
                  </p>
                  <ul className="space-y-2">
                    {stone.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <Star className="w-4 h-4 text-amber-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <GoldButton className="w-full">
                      Request Quote Information
                    </GoldButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Perfect Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From luxury interiors to outdoor entertainment areas, natural stone enhances every space.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all">
                <div className="h-64 overflow-hidden">
                  <SimpleReliableImage
                    imageId={app.imageId}
                    alt={`Natural stone ${app.title.toLowerCase()}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{app.title}</h3>
                    <p className="text-gray-200">{app.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Customer Testimonials
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See why Miami homeowners choose Genesis Stone for their natural stone projects.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about natural stone flooring.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Service Area */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Serving Miami & South Florida
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                As South Florida's premier natural stone supplier, we serve Miami-Dade, 
                Broward, and Palm Beach counties with professional installation and 
                premium materials.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-amber-600 mr-3" />
                  <span className="text-gray-700">Miami, Coral Gables, Aventura, Doral</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-amber-600 mr-3" />
                  <span className="text-gray-700">(305) 555-0123</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-amber-600 mr-3" />
                  <span className="text-gray-700">info@genesisstoneusa.com</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-amber-600 mx-auto mb-4" />
                <p className="text-gray-600">Interactive Map Coming Soon</p>
                <p className="text-sm text-gray-500 mt-2">
                  Serving all of South Florida
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Elevate Your Space with Natural Stone?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Transform your home or business with premium natural stone flooring. 
            Get your personalized quote today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <GoldButton size="lg" className="bg-white text-amber-700 hover:bg-gray-100 text-lg px-8 py-4">
                Book a Free Estimate
              </GoldButton>
            </Link>
            <WhiteOutlineButton size="lg" className="border-white text-white hover:bg-white hover:text-amber-700 text-lg px-8 py-4">
              Get a Personalized Quote
            </WhiteOutlineButton>
          </div>

          <div className="mt-8 flex justify-center">
            <div className="flex items-center text-amber-100">
              <MessageCircle className="w-5 h-5 mr-2" />
              <span>Or chat with us instantly on WhatsApp</span>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </>
  );
};

export default NaturalStone;