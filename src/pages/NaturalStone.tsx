
import React from 'react';
import Layout from '@/components/Layout';
import SEOHead from '@/components/SEOHead';
import { GoldButton, PrimaryButton, WhiteOutlineButton } from '@/components/ui/custom-buttons';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Shield, 
  Star, 
  TrendingUp, 
  Gem, 
  Home,
  MapPin,
  Phone,
  Mail,
  ChevronDown,
  ChevronUp,
  Clock,
  Award,
  Users
} from 'lucide-react';
import { getReliableImageUrl } from '@/utils/imageUtils';
import ContactForm from '@/components/ContactForm';
import { useState } from 'react';

const NaturalStone = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const benefits = [
    {
      icon: Gem,
      title: "Timeless Beauty & Luxury",
      description: "Each piece features unique natural patterns that add elegance to any space, indoors or outdoors"
    },
    {
      icon: Shield,
      title: "Extreme Durability",
      description: "Withstands heavy traffic, harsh Miami weather, and daily wear for decades of lasting beauty"
    },
    {
      icon: TrendingUp,
      title: "Increases Property Value",
      description: "Premium natural stone significantly boosts your home's resale value and market appeal"
    },
    {
      icon: Star,
      title: "Unique Natural Patterns",
      description: "No two pieces are identical - your space will feature truly one-of-a-kind natural artistry"
    },
    {
      icon: Home,
      title: "Indoor & Outdoor Versatility",
      description: "Perfect for any application from elegant interiors to stunning pool decks and patios"
    }
  ];

  const stoneTypes = [
    {
      name: "Travertine",
      description: "Cool-to-touch natural stone perfect for Miami's climate",
      features: ["Pool deck favorite", "Natural slip resistance", "Heat-resistant surface", "Tumbled or polished finish"],
      imageId: "naturalTravertine",
      applications: ["Pool Decks", "Patios", "Bathrooms", "Outdoor Walkways"],
      price: "Starting at $4.99/sq ft",
      bestseller: true
    },
    {
      name: "Marble",
      description: "Luxurious elegance with stunning natural veining",
      features: ["Classic luxury appeal", "Heat resistant", "Perfect for countertops", "Unique veining patterns"],
      imageId: "naturalMarble",
      applications: ["Kitchens", "Bathrooms", "Foyers", "Fireplaces"],
      price: "Starting at $7.99/sq ft"
    },
    {
      name: "Granite",
      description: "Ultimate durability with exceptional style",
      features: ["Extremely durable", "Scratch resistant", "Low maintenance", "Wide color selection"],
      imageId: "naturalGranite",
      applications: ["Countertops", "Floors", "Outdoor Kitchens", "Commercial Spaces"],
      price: "Starting at $6.99/sq ft"
    },
    {
      name: "Slate",
      description: "Rustic charm with natural slip-resistant texture",
      features: ["Natural texture", "Weather resistant", "Non-slip surface", "Rich earthy colors"],
      imageId: "naturalSlate",
      applications: ["Outdoor Patios", "Roofing", "Wall Cladding", "Walkways"],
      price: "Starting at $5.99/sq ft"
    },
    {
      name: "Limestone",
      description: "Soft neutral tones with timeless natural charm",
      features: ["Soft neutral palette", "Easy to work with", "Natural fossil inclusions", "Timeless appeal"],
      imageId: "naturalLimestone",
      applications: ["Flooring", "Wall Facades", "Landscaping", "Interior Accents"],
      price: "Starting at $5.49/sq ft"
    }
  ];

  const applications = [
    {
      name: "Luxury Living Rooms",
      description: "Create stunning focal points with premium natural stone flooring that elevates your entire space",
      imageId: "luxuryInterior",
      benefit: "Adds $15K+ home value"
    },
    {
      name: "Gourmet Kitchens",
      description: "Durable countertops and backsplashes that withstand daily use while maintaining beauty",
      imageId: "modernKitchen",
      benefit: "Heat & stain resistant"
    },
    {
      name: "Resort-Style Patios",
      description: "Weather-resistant outdoor entertaining spaces that stay beautiful year-round",
      imageId: "outdoorPatio",
      benefit: "UV & weather resistant"
    },
    {
      name: "Pool Decks & Spas",
      description: "Cool-to-touch, slip-resistant surfaces perfect for South Florida pool areas",
      imageId: "poolDeck",
      benefit: "Cool underfoot in heat"
    },
    {
      name: "Commercial Spaces",
      description: "Professional appearances that withstand heavy traffic in retail and office environments",
      imageId: "commercialFlooring",
      benefit: "High-traffic durability"
    },
    {
      name: "Accent Wall Features",
      description: "Dramatic interior and exterior wall cladding that creates stunning architectural features",
      imageId: "stoneWall",
      benefit: "Architectural elegance"
    }
  ];

  const testimonials = [
    {
      name: "Maria Rodriguez",
      location: "Coral Gables, FL",
      text: "Genesis Stone's travertine pool deck transformed our backyard into a resort paradise. It stays refreshingly cool even in 95°F Miami heat!",
      rating: 5,
      project: "Travertine Pool Deck",
      image: "poolDeck"
    },
    {
      name: "James Wilson",
      location: "Aventura, FL", 
      text: "Outstanding Carrara marble for our kitchen renovation. The quality and craftsmanship exceeded our expectations. True professionals!",
      rating: 5,
      project: "Marble Kitchen Countertops",
      image: "modernKitchen"
    },
    {
      name: "Carlos Mendez",
      location: "Doral, FL",
      text: "As a contractor, I trust Genesis Stone for all commercial projects. Their granite selection, pricing, and service are unmatched in South Florida.",
      rating: 5,
      project: "Commercial Granite Flooring",
      image: "commercialFlooring"
    }
  ];

  const faqs = [
    {
      question: "Is natural stone suitable for Miami's humid climate?",
      answer: "Absolutely! Natural stone is ideal for South Florida's climate. Stones like travertine, granite, and slate are naturally resistant to humidity, UV rays, and temperature fluctuations. Proper sealing ensures long-lasting performance in Miami's tropical conditions."
    },
    {
      question: "How do I maintain natural stone in Florida?",
      answer: "Maintenance is simple: sweep regularly, mop with pH-neutral cleaners, and avoid acidic products. We recommend professional sealing every 1-2 years depending on stone type and usage. Our team provides detailed care instructions with every installation."
    },
    {
      question: "Which stone is best for pool decks in Miami?",
      answer: "Travertine is the top choice for Miami pool decks. It stays cool underfoot even in direct sunlight, has natural slip-resistance when textured, and complements Florida's architecture beautifully. We offer tumbled, brushed, and filled finishes for optimal pool safety."
    },
    {
      question: "Is natural stone slippery when wet?",
      answer: "It depends on the finish. Polished stones can be slippery, but textured finishes like tumbled travertine, brushed granite, or honed slate provide excellent grip when wet. We recommend appropriate finishes based on your specific application and safety needs."
    },
    {
      question: "How long does natural stone last in South Florida?",
      answer: "With proper installation and maintenance, natural stone can last 50-100+ years. Many historic buildings in Miami still feature original stone installations from decades ago. It's a lifetime investment that actually appreciates in value."
    },
    {
      question: "Do you offer installation services?",
      answer: "Yes! We work with certified installers throughout Miami-Dade, Broward, and Palm Beach counties. Our network includes licensed professionals specializing in natural stone installation with warranties on both materials and workmanship."
    }
  ];

  const handleWhatsAppQuote = (stoneType?: string) => {
    const phoneNumber = "13055104733";
    const message = stoneType 
      ? `Hi! I'm interested in ${stoneType} for my Miami project. Can you provide pricing and a free consultation?`
      : "Hi! I'm interested in natural stone for my project. Can you provide me with a free quote and consultation?";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Track conversion
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'conversion', {
        event_category: 'engagement',
        event_label: stoneType ? `${stoneType.toLowerCase()}_quote_request` : 'natural_stone_quote_request',
        value: 1
      });
    }
    
    window.open(whatsappUrl, "_blank");
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Natural Stone Flooring Miami",
    "description": "Premium natural stone flooring including travertine, marble, granite, slate, and limestone for Miami homes and businesses.",
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

  return (
    <Layout>
      <SEOHead
        title="Natural Stone Flooring Miami | Travertine Pool Decks, Marble & Granite | Genesis Stone"
        description="Premium natural stone flooring in Miami. Travertine pool decks, marble countertops, granite flooring, slate & limestone. 17+ years experience serving South Florida contractors & homeowners."
        canonicalUrl="https://genesisstoneusa.com/products/natural-stone"
        ogImage={getReliableImageUrl("naturalTravertine")}
        keywords="natural stone Miami, travertine pool deck Miami, marble countertops Miami, granite flooring South Florida, limestone flooring, slate tiles, natural stone supplier Miami, pool deck travertine, natural stone installation Miami"
        schema={structuredData}
      />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${getReliableImageUrl("poolDeck")}')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center text-white">
            <div className="mb-6">
              <span className="inline-block px-6 py-2 bg-[rgb(138,0,0)] text-white text-sm font-semibold rounded-full mb-4">
                #1 Natural Stone Supplier in Miami
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Premium Natural Stone
              <span className="block text-yellow-400 mt-2">Flooring Solutions</span>
            </h1>
            
            <p className="text-xl sm:text-2xl mb-8 leading-relaxed max-w-4xl mx-auto font-light">
              Transform your Miami home with luxury travertine pool decks, elegant marble countertops, 
              and durable granite flooring. Cool-to-touch surfaces perfect for South Florida's climate.
            </p>

            <div className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-1">17+</div>
                <div className="text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-1">5000+</div>
                <div className="text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-1">24hr</div>
                <div className="text-sm">Response Time</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={() => handleWhatsAppQuote()}
                className="bg-[rgb(138,0,0)] hover:bg-[rgb(120,0,0)] text-white px-12 py-6 rounded-lg font-semibold text-xl transition-all duration-300 transform hover:scale-105 min-w-[280px] shadow-2xl"
              >
                Get Free Quote Today
              </button>
              <a href="#stone-types">
                <WhiteOutlineButton className="px-12 py-6 text-xl min-w-[280px] hover:bg-white hover:text-gray-900">
                  Explore Stone Collection
                </WhiteOutlineButton>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Natural Stone Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-red-100 text-red-800 text-sm font-semibold rounded-full mb-4">
              Why Choose Genesis Stone?
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Unmatched Natural Stone Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover why Miami homeowners and contractors choose natural stone for lasting beauty and value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 hover:-translate-y-2">
                <CardContent className="p-10 text-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-50 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-gradient-to-br group-hover:from-[rgb(138,0,0)] group-hover:to-red-700 transition-all duration-500">
                    <benefit.icon className="h-10 w-10 text-red-700 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Natural Stone */}
      <section id="stone-types" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 text-sm font-semibold rounded-full mb-4">
              Premium Stone Collection
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Natural Stone Types We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each stone type offers unique characteristics perfect for Miami's climate and lifestyle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {stoneTypes.map((stone, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0">
                <div className="relative h-80 overflow-hidden">
                  {stone.bestseller && (
                    <div className="absolute top-4 left-4 z-10 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                      Miami's #1 Choice
                    </div>
                  )}
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                    style={{
                      backgroundImage: `url('${getReliableImageUrl(stone.imageId)}')`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-2xl font-bold text-yellow-400">{stone.price}</div>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{stone.name}</h3>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{stone.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Award className="h-4 w-4 mr-2 text-red-600" />
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {stone.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <div className="w-2 h-2 bg-gradient-to-r from-red-600 to-yellow-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Home className="h-4 w-4 mr-2 text-red-600" />
                      Perfect For:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {stone.applications.map((app, idx) => (
                        <span key={idx} className="px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full font-medium">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button 
                    onClick={() => handleWhatsAppQuote(stone.name)}
                    className="w-full bg-gradient-to-r from-[rgb(138,0,0)] to-red-700 hover:from-[rgb(120,0,0)] hover:to-red-600 text-white py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Get {stone.name} Quote
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Perfect Applications */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full mb-4">
              Versatile Applications
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transform Every Space
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how natural stone elevates residential and commercial spaces throughout Miami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {applications.map((app, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0">
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                    style={{
                      backgroundImage: `url('${getReliableImageUrl(app.imageId)}')`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {app.benefit}
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold mb-2">{app.name}</h3>
                  </div>
                </div>
                <CardContent className="p-8">
                  <p className="text-gray-600 leading-relaxed mb-6">{app.description}</p>
                  <button 
                    onClick={() => handleWhatsAppQuote()}
                    className="text-red-600 hover:text-red-800 font-semibold flex items-center group-hover:gap-2 transition-all duration-300"
                  >
                    Learn More
                    <ChevronDown className="h-4 w-4 ml-1 group-hover:ml-2 transition-all duration-300" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-800 text-sm font-semibold rounded-full mb-4">
              Customer Success Stories
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Miami Homeowners Say
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from satisfied customers across South Florida
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0">
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-8 text-lg leading-relaxed italic">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="border-t pt-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-cover bg-center" style={{
                        backgroundImage: `url('${getReliableImageUrl(testimonial.image)}')`
                      }}></div>
                      <div>
                        <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.location}</p>
                        <p className="text-sm text-red-600 font-semibold">{testimonial.project}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-8 bg-gray-50 rounded-2xl px-8 py-6">
              <div className="flex items-center space-x-2">
                <Users className="h-6 w-6 text-red-600" />
                <span className="font-semibold text-gray-900">5000+ Happy Customers</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-6 w-6 text-yellow-400 fill-current" />
                <span className="font-semibold text-gray-900">4.9/5 Average Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-6 w-6 text-green-600" />
                <span className="font-semibold text-gray-900">17+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-800 text-sm font-semibold rounded-full mb-4">
              Got Questions?
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Natural Stone FAQ
            </h2>
            <p className="text-xl text-gray-600">
              Expert answers to your most common natural stone questions
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-0">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full p-8 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-bold text-gray-900 pr-4">{faq.question}</h3>
                    <div className="flex-shrink-0">
                      {openFAQ === index ? (
                        <ChevronUp className="h-6 w-6 text-red-600" />
                      ) : (
                        <ChevronDown className="h-6 w-6 text-gray-400" />
                      )}
                    </div>
                  </button>
                  {openFAQ === index && (
                    <div className="px-8 pb-8">
                      <p className="text-gray-600 leading-relaxed text-lg">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Service Area */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-red-100 text-red-800 text-sm font-semibold rounded-full mb-4">
                Proudly Serving South Florida
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Miami's Trusted Natural Stone Experts
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Genesis Stone has been Miami's premier natural stone supplier for over 17 years. 
                Visit our showroom to see our extensive collection and speak with our stone experts.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-lg">Service Areas</div>
                    <div className="text-gray-600">Miami-Dade, Broward, Palm Beach Counties</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-lg">Call or Text</div>
                    <div className="text-gray-600">(305) 477-4402</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-lg">Response Time</div>
                    <div className="text-gray-600">Same day quotes & consultations</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-xl">
                  <div className="text-3xl font-bold text-red-600 mb-2">17+</div>
                  <div className="text-sm text-gray-700 font-medium">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">5000+</div>
                  <div className="text-sm text-gray-700 font-medium">Satisfied Customers</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                  <div className="text-3xl font-bold text-green-600 mb-2">A+</div>
                  <div className="text-sm text-gray-700 font-medium">BBB Rating</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-600 to-yellow-400 rounded-2xl opacity-20"></div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14352.472419123!2d-80.37785!3d25.761681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b6857b6c1d5b%3A0x8a6c4d7f1e9e5a8c!2sMiami%2C%20FL!5e0!3m2!1sen!2sus!4v1645123456789!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl shadow-2xl relative z-10"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[rgb(138,0,0)] to-red-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="inline-block px-6 py-2 bg-white/20 text-white text-sm font-semibold rounded-full">
              Ready to Transform Your Space?
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Get Your Natural Stone
            <span className="block text-yellow-400">Project Started Today</span>
          </h2>
          
          <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-4xl mx-auto">
            Join thousands of satisfied Miami homeowners who chose Genesis Stone for their natural stone projects. 
            Get expert consultation, competitive pricing, and professional installation.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button 
              onClick={() => handleWhatsAppQuote()}
              className="bg-white text-[rgb(138,0,0)] hover:bg-gray-100 px-16 py-6 rounded-xl font-bold text-xl transition-all duration-300 transform hover:scale-105 min-w-[320px] shadow-2xl"
            >
              📱 Text for Instant Quote
            </button>
            <a href="/contact">
              <button className="border-2 border-white text-white hover:bg-white hover:text-[rgb(138,0,0)] px-16 py-6 rounded-xl font-bold text-xl transition-all duration-300 min-w-[320px]">
                🏢 Visit Our Showroom
              </button>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 text-white">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24hr</div>
              <div className="text-white/90">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">Free</div>
              <div className="text-white/90">Consultation</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">Licensed</div>
              <div className="text-white/90">& Insured</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">Best</div>
              <div className="text-white/90">Price Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm 
            title="Get Your Natural Stone Project Estimate"
            subtitle="Tell us about your natural stone project and receive a detailed quote within 24 hours"
          />
        </div>
      </section>
    </Layout>
  );
};

export default NaturalStone;
