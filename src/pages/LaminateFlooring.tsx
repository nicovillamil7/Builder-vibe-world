
import React from "react";
import { Helmet } from "react-helmet-async";
import { SimpleReliableImage } from "@/components/ui/ReliableImage";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import GoogleReviews from "@/components/GoogleReviews";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  Wrench, 
  Sparkles, 
  Home, 
  DollarSign, 
  Users, 
  ChevronDown, 
  ChevronUp,
  Star,
  MapPin,
  Phone,
  MessageCircle
} from "lucide-react";
import { PrimaryButton, GoldButton, WhiteOutlineButton } from "@/components/ui/custom-buttons";

const LaminateFlooring = () => {
  const [openFAQ, setOpenFAQ] = React.useState<number | null>(null);

  const whatsappMessage = encodeURIComponent(
    "Hi! I'm interested in laminate flooring for my project. Can you help me with pricing and options?"
  );

  const benefits = [
    {
      icon: DollarSign,
      title: "Affordable Style",
      description: "Get the beautiful wood look without the high cost. Premium laminate flooring at budget-friendly prices."
    },
    {
      icon: Shield,
      title: "Scratch & Dent Resistant",
      description: "Advanced wear layer technology protects against daily wear, pets, and heavy foot traffic."
    },
    {
      icon: Wrench,
      title: "Easy Installation",
      description: "DIY-friendly click-lock system or professional installation available. Quick and hassle-free setup."
    },
    {
      icon: Sparkles,
      title: "Low Maintenance",
      description: "Simple cleaning with regular sweeping and occasional mopping. No refinishing required."
    },
    {
      icon: Users,
      title: "Family & Pet Friendly",
      description: "Safe for children and pets with anti-bacterial surface treatment and non-toxic materials."
    }
  ];

  const laminateTypes = [
    {
      name: "Wood-Look Laminate",
      description: "Classic oak, walnut, and driftwood tones with realistic grain patterns",
      features: ["Authentic wood grain texture", "Multiple plank widths", "Traditional and rustic styles", "AC3-AC5 ratings available"],
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Wood-look laminate flooring Miami - realistic oak grain patterns for living rooms and bedrooms"
    },
    {
      name: "Tile-Look Laminate",
      description: "Mimics stone and ceramic surfaces with waterproof technology",
      features: ["Stone and ceramic designs", "Waterproof core", "Grout line textures", "Perfect for kitchens"],
      image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Tile-look laminate flooring Miami - waterproof stone patterns for kitchens and bathrooms"
    },
    {
      name: "Wide Plank Laminate",
      description: "Sleek modern look with fewer seams and contemporary appeal",
      features: ["7-9 inch wide planks", "Modern aesthetic", "Fewer seams", "Premium finishes"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Wide plank laminate flooring Miami - modern large format planks for contemporary homes"
    },
    {
      name: "Water-Resistant Laminate",
      description: "Advanced waterproof core technology for high-moisture areas",
      features: ["100% waterproof core", "Spill protection", "Humidity resistant", "Ideal for Florida climate"],
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Water-resistant laminate flooring Miami - waterproof technology for Florida kitchens and bathrooms"
    }
  ];

  const applications = [
    {
      name: "Bedrooms",
      description: "Warm, comfortable underfoot with sound-dampening properties",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Living Rooms",
      description: "Durable enough for family gatherings and daily activities",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Kitchens",
      description: "Water-resistant options perfect for cooking and dining areas",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Home Offices",
      description: "Professional appearance with comfort for long work hours",
      image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Hallways",
      description: "High-traffic durability with easy maintenance",
      image: "https://images.unsplash.com/photo-1590725140738-115d4443ce6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Commercial Spaces",
      description: "Commercial-grade options for offices, retail, and hospitality",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const testimonials = [
    {
      name: "Maria Rodriguez",
      location: "Coral Gables, FL",
      rating: 5,
      text: "Genesis Stone helped us install beautiful wood-look laminate throughout our home. It looks amazing and has held up perfectly with our two dogs!",
      project: "1,500 sq ft whole house renovation"
    },
    {
      name: "James Wilson",
      location: "Aventura, FL",
      rating: 5,
      text: "The water-resistant laminate in our kitchen has been a game-changer. Easy to clean and looks exactly like real hardwood at half the price.",
      project: "Kitchen and dining room flooring"
    },
    {
      name: "Sandra Martinez",
      location: "Homestead, FL",
      rating: 5,
      text: "Professional installation and great customer service. Our laminate floors still look brand new after 3 years of heavy use.",
      project: "Commercial office space - 3,000 sq ft"
    }
  ];

  const faqs = [
    {
      question: "Is laminate flooring waterproof?",
      answer: "Our premium water-resistant laminate collections feature waterproof cores that protect against spills and moisture. While traditional laminate should avoid standing water, our waterproof options are perfect for kitchens, bathrooms, and Florida's humid climate."
    },
    {
      question: "Can I install laminate flooring myself?",
      answer: "Yes! Most laminate flooring features click-lock installation that's DIY-friendly. However, for best results and warranty coverage, we recommend professional installation. Our certified installers ensure proper subfloor preparation and perfect results."
    },
    {
      question: "Does laminate flooring work in humid climates like Miami?",
      answer: "Absolutely! Our laminate flooring is specifically chosen for South Florida's climate. Water-resistant and waterproof options handle humidity excellently, and proper installation with moisture barriers ensures long-lasting performance."
    },
    {
      question: "Is laminate flooring safe for pets and children?",
      answer: "Yes, laminate flooring is very family and pet-friendly. It's made with non-toxic materials, has anti-bacterial surface treatments, and the scratch-resistant wear layer handles pet claws better than hardwood."
    },
    {
      question: "How long does laminate flooring last?",
      answer: "High-quality laminate flooring can last 15-30 years with proper care. Our premium collections come with 20-30 year warranties, reflecting their durability and long-term value."
    },
    {
      question: "What's the difference between laminate and luxury vinyl plank?",
      answer: "Laminate has a wood fiber core with a photographic layer, offering authentic wood texture. LVP is 100% waterproof plastic. Laminate typically offers better realism and comfort underfoot, while LVP excels in moisture resistance."
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Laminate Flooring Miami | Wood-Look, Waterproof Options | Genesis Stone</title>
        <meta 
          name="description" 
          content="Premium laminate flooring in Miami - wood-look, tile-look, and waterproof options. Affordable luxury with professional installation. Perfect for Florida homes and businesses."
        />
        <meta 
          name="keywords" 
          content="laminate flooring miami, wood look laminate, waterproof laminate, vinyl plank flooring, affordable hardwood alternative, florida laminate installation"
        />
        <link rel="canonical" href="https://genesisstoneusa.com/products/laminate-flooring" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Premium Laminate Flooring Miami | Wood-Look & Waterproof | Genesis Stone" />
        <meta property="og:description" content="Transform your space with premium laminate flooring. Wood-look, tile-look, and waterproof options. Professional installation in Miami and South Florida." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />
        <meta property="og:url" content="https://genesisstoneusa.com/products/laminate-flooring" />
        <meta property="og:type" content="product" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Premium Laminate Flooring Miami | Genesis Stone" />
        <meta name="twitter:description" content="Wood-look, tile-look, and waterproof laminate flooring options for Miami homes and businesses." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Laminate Flooring",
            "description": "Premium laminate flooring collections including wood-look, tile-look, and waterproof options for residential and commercial applications.",
            "brand": {
              "@type": "Brand",
              "name": "Genesis Stone & More"
            },
            "offers": {
              "@type": "AggregateOffer",
              "availability": "https://schema.org/InStock",
              "priceCurrency": "USD",
              "lowPrice": "2.99",
              "highPrice": "8.99",
              "priceValidUntil": "2025-12-31",
              "seller": {
                "@type": "Organization",
                "name": "Genesis Stone & More",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Miami",
                  "addressRegion": "FL",
                  "addressCountry": "US"
                }
              }
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "187",
              "bestRating": "5",
              "worstRating": "1"
            },
            "image": [
              "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
              "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            ],
            "category": "Flooring",
            "areaServed": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "25.7617",
                "longitude": "-80.1918"
              },
              "geoRadius": "50"
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Affordable Style with
            <span className="block text-yellow-400">Durable Laminate Flooring</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Get the wood look without the cost — durable, modern, and easy to maintain. 
            Perfect for Miami homes and Florida's climate.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href={`https://wa.me/17863810964?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <GoldButton size="lg" className="px-8 py-4 text-lg font-semibold min-h-[56px] w-full sm:w-auto">
                Get Free Quote
              </GoldButton>
            </a>
            <a href="#laminate-types" className="inline-block">
              <WhiteOutlineButton size="lg" className="px-8 py-4 text-lg font-semibold min-h-[56px] w-full sm:w-auto">
                Browse Styles
              </WhiteOutlineButton>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm">
            <a 
              href="tel:+17863810964" 
              className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
            >
              <Phone className="h-4 w-4" />
              (786) 381-0964
            </a>
            <a 
              href={`https://wa.me/17863810964?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Quote
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Laminate Flooring?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the perfect combination of style, durability, and affordability with our premium laminate flooring collections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[rgb(138,0,0)] to-[rgb(153,27,27)] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Laminate Types Section */}
      <section id="laminate-types" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Types of Laminate Flooring We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              From classic wood-look to modern tile designs, our laminate collections offer endless possibilities for your Miami home or business.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {laminateTypes.map((type, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-64">
                  <SimpleReliableImage
                    imageId="laminateHardwood"
                    alt={type.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    fallbackSrc={type.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{type.name}</h3>
                  </div>
                </div>
                <CardContent className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">{type.description}</p>
                  <div className="space-y-2 mb-6">
                    {type.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[rgb(138,0,0)] rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <a 
                    href={`https://wa.me/17863810964?text=${encodeURIComponent(`Hi! I'm interested in ${type.name}. Can you provide more details and pricing?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full"
                  >
                    <PrimaryButton className="w-full group-hover:bg-[rgb(120,0,0)] transition-colors">
                      Request Quote Information
                    </PrimaryButton>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Perfect Applications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Perfect Applications for Every Space
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Laminate flooring is versatile enough for any room in your home or business, providing beauty and durability where you need it most.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl group hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative h-64">
                  <img
                    src={app.image}
                    alt={`Laminate flooring in ${app.name.toLowerCase()} Miami - ${app.description}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{app.name}</h3>
                    <p className="text-white/90 text-sm leading-relaxed">{app.description}</p>
                  </div>
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about laminate flooring installation and maintenance.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <button
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-[rgb(138,0,0)] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-[rgb(138,0,0)] flex-shrink-0" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Serving Miami & South Florida
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Genesis Stone & More has been Miami's trusted laminate flooring specialist since 2008. We serve residential and commercial customers throughout South Florida with premium products and professional installation services.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-[rgb(138,0,0)]" />
                  <span className="text-gray-700">Miami-Dade, Broward, and Palm Beach Counties</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-[rgb(138,0,0)]" />
                  <a href="tel:+17863810964" className="text-gray-700 hover:text-[rgb(138,0,0)]">(786) 381-0964</a>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="h-5 w-5 text-[rgb(138,0,0)]" />
                  <span className="text-gray-700">Same-day quotes via WhatsApp</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={`https://wa.me/17863810964?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <PrimaryButton size="lg" className="w-full sm:w-auto">
                    Get Instant Quote
                  </PrimaryButton>
                </a>
                <a href="/contact" className="inline-block">
                  <WhiteOutlineButton size="lg" className="w-full sm:w-auto border-[rgb(138,0,0)] text-[rgb(138,0,0)] hover:bg-[rgb(138,0,0)] hover:text-white">
                    Visit Showroom
                  </WhiteOutlineButton>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-w-16 aspect-h-12 rounded-2xl overflow-hidden shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.289234567890!2d-80.19179!3d25.76170!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a20ec8c111%3A0xa5c75c0e1f6d1c9d!2sGenesis%20Stone%20%26%20More!5e0!3m2!1sen!2sus!4v1652901234567!5m2!1sen!2sus"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Genesis Stone & More - Laminate Flooring Miami Showroom Location"
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 bg-gradient-to-r from-[rgb(138,0,0)] to-[rgb(153,27,27)]">
        <div className="absolute inset-0 bg-black/30"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Upgrade Your Floors?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Transform your space with beautiful, durable laminate flooring. Get expert guidance, competitive pricing, and professional installation from Miami's trusted flooring specialists.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href={`https://wa.me/17863810964?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <GoldButton size="lg" className="px-8 py-4 text-lg font-semibold">
                Book Free Estimate
              </GoldButton>
            </a>
            <a href="/contact" className="inline-block">
              <WhiteOutlineButton size="lg" className="px-8 py-4 text-lg font-semibold">
                Visit Our Showroom
              </WhiteOutlineButton>
            </a>
          </div>

          <p className="text-white/80">
            Call us today: <a href="tel:+17863810964" className="font-semibold hover:text-yellow-400">(786) 381-0964</a> | 
            Same-day quotes available via WhatsApp
          </p>
        </div>
      </section>

      <WhatsAppButton />
    </Layout>
  );
};

export default LaminateFlooring;
