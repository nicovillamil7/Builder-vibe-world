
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
  ChevronUp
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
      description: "Each piece is naturally unique with stunning patterns that never go out of style"
    },
    {
      icon: Shield,
      title: "Extreme Durability",
      description: "Withstands heavy traffic and harsh weather conditions for decades"
    },
    {
      icon: TrendingUp,
      title: "Increases Property Value",
      description: "Premium natural stone significantly boosts your home's resale value"
    },
    {
      icon: Star,
      title: "Unique One-of-a-Kind Patterns",
      description: "No two pieces are identical - your space will be truly distinctive"
    },
    {
      icon: Home,
      title: "Indoor & Outdoor Versatility",
      description: "Perfect for any application from elegant interiors to stunning patios"
    }
  ];

  const stoneTypes = [
    {
      name: "Marble",
      description: "Elegant and smooth with luxurious veining patterns",
      features: ["Classic elegance", "Heat resistant", "Perfect for countertops", "Luxurious appearance"],
      imageId: "naturalMarble",
      applications: ["Kitchens", "Bathrooms", "Foyers", "Fireplaces"]
    },
    {
      name: "Granite",
      description: "Tough and stylish with exceptional durability",
      features: ["Extremely durable", "Scratch resistant", "Low maintenance", "Wide color range"],
      imageId: "naturalGranite",
      applications: ["Countertops", "Floors", "Outdoor kitchens", "Commercial spaces"]
    },
    {
      name: "Travertine",
      description: "Earthy and natural with distinctive porous texture",
      features: ["Natural slip resistance", "Cool to touch", "Pool deck favorite", "Tumbled or polished"],
      imageId: "naturalTravertine",
      applications: ["Pool decks", "Patios", "Bathrooms", "Outdoor walkways"]
    },
    {
      name: "Slate",
      description: "Rustic and textured with natural split surface",
      features: ["Natural texture", "Weather resistant", "Non-slip surface", "Earthy colors"],
      imageId: "naturalSlate",
      applications: ["Outdoor patios", "Roofing", "Wall cladding", "Walkways"]
    },
    {
      name: "Limestone",
      description: "Soft tones with natural charm and warmth",
      features: ["Soft neutral tones", "Easy to work with", "Fossil inclusions", "Timeless appeal"],
      imageId: "naturalLimestone",
      applications: ["Flooring", "Wall facades", "Landscaping", "Interior accents"]
    }
  ];

  const applications = [
    {
      name: "Living Rooms",
      description: "Create stunning focal points with natural stone flooring",
      imageId: "luxuryInterior"
    },
    {
      name: "Kitchens",
      description: "Durable countertops and backsplashes that last a lifetime",
      imageId: "modernKitchen"
    },
    {
      name: "Patios",
      description: "Weather-resistant outdoor entertaining spaces",
      imageId: "outdoorPatio"
    },
    {
      name: "Poolsides",
      description: "Slip-resistant and cool-to-touch pool deck solutions",
      imageId: "poolDeck"
    },
    {
      name: "Commercial Spaces",
      description: "Professional appearances that withstand heavy traffic",
      imageId: "commercialFlooring"
    },
    {
      name: "Wall Cladding",
      description: "Dramatic interior and exterior wall features",
      imageId: "stoneWall"
    }
  ];

  const testimonials = [
    {
      name: "Maria Rodriguez",
      location: "Coral Gables, FL",
      text: "The travertine pool deck from Genesis Stone transformed our backyard into a resort-like oasis. It stays cool even in Miami heat!",
      rating: 5,
      project: "Pool Deck Installation"
    },
    {
      name: "James Wilson",
      location: "Aventura, FL",
      text: "Outstanding quality marble for our kitchen renovation. The team's expertise in natural stone is unmatched in South Florida.",
      rating: 5,
      project: "Kitchen Countertops"
    },
    {
      name: "Carlos Mendez",
      location: "Doral, FL",
      text: "As a contractor, I trust Genesis Stone for all my commercial projects. Their granite selection and pricing can't be beat.",
      rating: 5,
      project: "Commercial Flooring"
    }
  ];

  const faqs = [
    {
      question: "Is natural stone waterproof?",
      answer: "While natural stone is water-resistant, it's not completely waterproof. Most stones benefit from sealing to prevent water absorption and staining. We recommend proper sealing every 1-2 years depending on the stone type and application."
    },
    {
      question: "How do I clean natural stone?",
      answer: "Use pH-neutral cleaners specifically designed for natural stone. Avoid acidic cleaners like vinegar or lemon-based products. Daily maintenance involves sweeping and damp mopping with clean water."
    },
    {
      question: "Can natural stone be used outdoors in Florida?",
      answer: "Absolutely! Many natural stones like travertine, granite, and slate are perfect for Florida's climate. They're UV-resistant and can handle temperature changes and humidity."
    },
    {
      question: "Is natural stone slippery when wet?",
      answer: "It depends on the finish. Polished stones can be slippery when wet, but textured finishes like tumbled travertine or brushed granite provide excellent slip resistance, making them ideal for pool areas."
    },
    {
      question: "How long does natural stone last?",
      answer: "With proper installation and maintenance, natural stone can last for decades or even centuries. Many historic buildings with original stone are still standing today!"
    },
    {
      question: "What's the difference between honed and polished finishes?",
      answer: "Polished stone has a glossy, reflective surface that shows maximum color depth. Honed stone has a matte finish that's less slippery and hides scratches better."
    }
  ];

  const handleWhatsAppQuote = () => {
    const phoneNumber = "13055104733";
    const message = "Hi! I'm interested in natural stone for my project. Can you provide me with a free quote and consultation?";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Track conversion
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'conversion', {
        event_category: 'engagement',
        event_label: 'natural_stone_quote_request',
        value: 1
      });
    }
    
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Layout>
      <SEOHead
        title="Natural Stone Flooring Miami | Marble, Granite, Travertine | Genesis Stone"
        description="Premium natural stone flooring in Miami. Travertine pool decks, marble countertops, granite flooring. 17+ years experience serving South Florida."
        canonicalUrl="https://genesisstoneusa.com/products/natural-stone"
        ogImage={getReliableImageUrl("naturalTravertine")}
        keywords="natural stone Miami, travertine pool deck, marble countertops, granite flooring, limestone, slate, South Florida"
      />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${getReliableImageUrl("naturalTravertine")}')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center text-white">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Timeless Elegance with
              <span className="block text-white mt-2">Natural Stone Flooring</span>
            </h1>
            
            <p className="text-xl sm:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto font-light">
              Durable, luxurious, and perfect for any space — indoors or outdoors.
              Transform your Miami home with premium natural stone.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={handleWhatsAppQuote}
                className="bg-[rgb(138,0,0)] hover:bg-[rgb(120,0,0)] text-white px-12 py-6 rounded-lg font-semibold text-xl transition-all duration-300 transform hover:scale-105 min-w-[280px]"
              >
                Get a Free Quote
              </button>
              <a href="#stone-types">
                <WhiteOutlineButton className="px-12 py-6 text-xl min-w-[280px]">
                  Explore Stone Types
                </WhiteOutlineButton>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Natural Stone Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Natural Stone?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the unmatched benefits of natural stone for your Miami home or business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[rgb(138,0,0)] transition-colors duration-300">
                    <benefit.icon className="h-8 w-8 text-red-800 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Natural Stone */}
      <section id="stone-types" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Types of Natural Stone We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each stone type offers unique characteristics perfect for different applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stoneTypes.map((stone, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                    style={{
                      backgroundImage: `url('${getReliableImageUrl(stone.imageId)}')`,
                    }}
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{stone.name}</h3>
                  <p className="text-gray-600 mb-4">{stone.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {stone.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Perfect For:</h4>
                    <div className="flex flex-wrap gap-2">
                      {stone.applications.map((app, idx) => (
                        <span key={idx} className="px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button 
                    onClick={handleWhatsAppQuote}
                    className="w-full bg-[rgb(138,0,0)] hover:bg-[rgb(120,0,0)] text-white py-3 rounded-lg font-semibold transition-colors duration-300"
                  >
                    Request {stone.name} Quote
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Perfect Applications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Perfect Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how natural stone can transform every space in your home or business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                    style={{
                      backgroundImage: `url('${getReliableImageUrl(app.imageId)}')`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{app.name}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600">{app.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from satisfied Miami homeowners and contractors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                    <p className="text-sm text-red-600 font-medium">{testimonial.project}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about natural stone
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border">
                <CardContent className="p-0">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                    {openFAQ === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-600" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-600" />
                    )}
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Service Area */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Serving Miami & South Florida
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Genesis Stone has been serving South Florida for over 17 years with premium natural stone solutions. 
                Visit our Miami showroom to see our extensive collection in person.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-red-600" />
                  <span className="text-lg text-gray-700">Miami-Dade, Broward, Palm Beach Counties</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-red-600" />
                  <span className="text-lg text-gray-700">(305) 477-4402</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-red-600" />
                  <span className="text-lg text-gray-700">info@genesisstoneusa.com</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-red-600 mb-1">17+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-red-600 mb-1">5000+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14352.472419123!2d-80.37785!3d25.761681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b6857b6c1d5b%3A0x8a6c4d7f1e9e5a8c!2sMiami%2C%20FL!5e0!3m2!1sen!2sus!4v1645123456789!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-[rgb(138,0,0)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Elevate Your Space with Natural Stone?
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Get a personalized quote and expert consultation for your Miami natural stone project. 
            Our team will help you choose the perfect stone for your needs and budget.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button 
              onClick={handleWhatsAppQuote}
              className="bg-white text-[rgb(138,0,0)] hover:bg-gray-100 px-12 py-6 rounded-lg font-semibold text-xl transition-all duration-300 transform hover:scale-105 min-w-[280px]"
            >
              Book a Free Estimate
            </button>
            <a href="/contact">
              <button className="border-2 border-white text-white hover:bg-white hover:text-[rgb(138,0,0)] px-12 py-6 rounded-lg font-semibold text-xl transition-all duration-300 min-w-[280px]">
                Visit Our Showroom
              </button>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-white">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24hr</div>
              <div className="text-white/90">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Free</div>
              <div className="text-white/90">Consultation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Licensed</div>
              <div className="text-white/90">& Insured</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm 
            title="Get Your Natural Stone Project Estimate"
            subtitle="Tell us about your natural stone project and we'll provide a detailed quote"
          />
        </div>
      </section>
    </Layout>
  );
};

export default NaturalStone;
