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
  Droplets, 
  Users, 
  ChevronDown, 
  ChevronUp,
  Star,
  MapPin,
  Phone,
  MessageCircle,
  CheckCircle
} from "lucide-react";
import { PrimaryButton, GoldButton, WhiteOutlineButton } from "@/components/ui/custom-buttons";

const PorcelainTile = () => {
  const [openFAQ, setOpenFAQ] = React.useState<number | null>(null);

  const whatsappMessage = encodeURIComponent(
    "Hi! I'm interested in porcelain tile flooring for my project. Can you help me with pricing and options?"
  );

  const benefits = [
    {
      icon: Droplets,
      title: "Waterproof & Stain-Resistant",
      description: "Non-porous surface that repels water and resists stains, perfect for kitchens and bathrooms."
    },
    {
      icon: Shield,
      title: "Long-Lasting & Highly Durable",
      description: "Superior strength and durability that withstands heavy foot traffic and daily wear for decades."
    },
    {
      icon: Users,
      title: "High-Traffic Areas",
      description: "Engineered to handle commercial and residential high-traffic spaces without showing wear."
    },
    {
      icon: Home,
      title: "Indoor & Outdoor Use",
      description: "Versatile application for seamless indoor-outdoor transitions with weather resistance."
    },
    {
      icon: Sparkles,
      title: "Wide Variety of Styles",
      description: "Extensive collection of textures, colors, and finishes to match any design aesthetic."
    }
  ];

  const porcelainTypes = [
    {
      name: "Wood Look Porcelain",
      description: "Authentic wood grain appearance with superior durability and waterproof performance for Miami homes",
      features: ["Realistic wood grain textures", "100% waterproof construction", "Fade and scratch resistant", "No seasonal expansion like real wood"],
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Wood look porcelain tile Miami - realistic oak and walnut grain patterns for living rooms and bedrooms"
    },
    {
      name: "Polished Porcelain",
      description: "High-gloss finish that reflects light beautifully, creating bright and luxurious spaces throughout your home",
      features: ["Mirror-like high-gloss finish", "Light-amplifying surface", "Stain and water resistant", "Premium aesthetic appeal"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Polished porcelain tile Miami - high-gloss mirror finish for modern contemporary living spaces"
    },
    {
      name: "Matte Porcelain",
      description: "Sophisticated non-slip finish that combines safety with elegant design for high-traffic areas",
      features: ["Non-slip textured surface", "Hides water spots and fingerprints", "Contemporary matte appearance", "Low maintenance requirements"],
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Matte porcelain tile Miami - non-slip textured finish ideal for bathrooms and kitchen floors"
    },
    {
      name: "Satin Porcelain",
      description: "Perfect balance between matte and polished finishes, offering subtle elegance with practical performance",
      features: ["Soft satin sheen finish", "Balanced light reflection", "Easy to clean surface", "Versatile design compatibility"],
      image: "https://images.unsplash.com/photo-1590725140738-115d4443ce6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Satin porcelain tile Miami - subtle sheen finish for elegant residential and commercial applications"
    }
  ];

  const applications = [
    {
      name: "Kitchens",
      description: "Waterproof and stain-resistant for cooking and dining areas",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Bathrooms",
      description: "Non-slip options perfect for wet areas and spa-like environments",
      image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Patios & Balconies",
      description: "Weather-resistant tiles that handle Florida's climate year-round",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Commercial Spaces",
      description: "Heavy-duty durability for offices, retail, and hospitality",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Entryways",
      description: "First impressions that last with durable, elegant tile flooring",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Pool Surrounds",
      description: "Slip-resistant and chlorine-resistant for pool areas and outdoor walkways",
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const faqs = [
    {
      question: "Is porcelain tile slippery when wet?",
      answer: "Porcelain tiles come in various finishes, including textured and matte options that provide excellent slip resistance when wet. We offer specific slip-resistant porcelain tiles rated for wet areas like bathrooms and pool surrounds."
    },
    {
      question: "Can porcelain tile be used outdoors?",
      answer: "Yes! Porcelain tile is excellent for outdoor use. It's frost-resistant, won't fade from UV exposure, and handles temperature changes well. It's perfect for patios, pool decks, and outdoor kitchens in Florida's climate."
    },
    {
      question: "How do I clean porcelain tile?",
      answer: "Porcelain tile is very easy to maintain. Regular sweeping and mopping with a pH-neutral cleaner is all that's needed. Unlike natural stone, porcelain doesn't require sealing and resists stains naturally."
    },
    {
      question: "What's the difference between porcelain and ceramic tile?",
      answer: "Porcelain is a denser, stronger type of ceramic tile. It's fired at higher temperatures, making it less porous, more durable, and suitable for both indoor and outdoor use. Porcelain also handles heavy traffic better than standard ceramic."
    },
    {
      question: "How long does porcelain tile last?",
      answer: "High-quality porcelain tile can last 50+ years with proper installation and minimal maintenance. It's one of the most durable flooring options available, making it an excellent long-term investment."
    },
    {
      question: "Is porcelain tile suitable for underfloor heating?",
      answer: "Yes, porcelain tile is an excellent choice for radiant floor heating systems. It conducts heat efficiently and won't crack or warp with temperature changes, providing comfortable, even heating."
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Porcelain Tile Miami | Waterproof & Durable Installation | Genesis Stone</title>
        <meta 
          name="description" 
          content="Premium porcelain tile Miami - wood-look, stone-look & large format options. Waterproof, durable indoor/outdoor installation. Professional service, trade pricing."
        />
        <meta 
          name="keywords" 
          content="porcelain tile miami, waterproof tile, wood look porcelain, stone look porcelain, large format tile, outdoor porcelain tile, bathroom tile miami"
        />
        <link rel="canonical" href="https://genesisstoneusa.com/products/porcelain" />

        {/* Open Graph */}
        <meta property="og:title" content="Premium Porcelain Tile Miami | Waterproof & Durable | Genesis Stone" />
        <meta property="og:description" content="Transform your space with premium porcelain tile. Wood-look, stone-look, and large format options. Professional installation in Miami and South Florida." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1615971677499-5467cbab01c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />
        <meta property="og:url" content="https://genesisstoneusa.com/products/porcelain" />
        <meta property="og:type" content="product" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Premium Porcelain Tile Miami | Genesis Stone" />
        <meta name="twitter:description" content="Waterproof, durable porcelain tile options for Miami homes and businesses." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1615971677499-5467cbab01c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Product", "Service"],
            "name": "Premium Porcelain Tile Miami",
            "description": "Professional porcelain tile installation and supply in Miami. Wood-look, stone-look, and large format porcelain options with expert installation services.",
            "brand": {
              "@type": "Brand",
              "name": "Genesis Stone & More"
            },
            "category": ["Flooring", "Tile", "Home Improvement"],
            "keywords": "porcelain tile Miami, waterproof tile, wood look porcelain, stone look porcelain",
            "serviceType": "Porcelain Tile Installation and Supply",
            "provider": {
              "@type": "Organization",
              "name": "Genesis Stone & More",
              "telephone": "+17863810964"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Miami",
                "containedInPlace": { "@type": "State", "name": "Florida" }
              }
            ]
          })}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      </Helmet>

      

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1615971677499-5467cbab01c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Elegant & Durable
            <span className="block text-yellow-400">Porcelain Tile Flooring</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Versatile, water-resistant, and perfect for any space — indoor or outdoor. 
            Discover the ultimate in style and performance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GoldButton 
              size="lg" 
              className="px-8 py-4 text-lg font-semibold min-h-[56px] w-full sm:w-auto"
              onClick={() => {
                if (typeof (window as any).gtag === 'function') {
                  (window as any).gtag('event', 'conversion', {
                    event_category: 'engagement',
                    event_label: 'get_quote_hero_porcelain',
                    value: 1
                  });
                }
                const phoneNumber = "17863810964";
                const message = "Hi! I'm interested in porcelain tile for my project. Can you help me with pricing and options?";
                const encodedMessage = encodeURIComponent(message);
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
                window.open(whatsappUrl, '_blank');
              }}
            >
              Get Free Quote
            </GoldButton>
            <WhiteOutlineButton 
              size="lg" 
              className="px-8 py-4 text-lg font-semibold min-h-[56px] w-full sm:w-auto"
              onClick={() => {
                if (typeof (window as any).gtag === 'function') {
                  (window as any).gtag('event', 'navigation', {
                    event_category: 'engagement',
                    event_label: 'see_porcelain_styles_hero',
                    value: 1
                  });
                }
                document.getElementById('porcelain-types')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              See Porcelain Styles
            </WhiteOutlineButton>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Porcelain Tile?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the perfect combination of beauty, durability, and versatility with our premium porcelain tile collections.
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

      {/* Porcelain Types Section */}
      <section id="porcelain-types" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Types of Porcelain Tile We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              From wood-look elegance to stone-inspired luxury, our porcelain collections offer unlimited design possibilities for your Miami project.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {porcelainTypes.map((type, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-64">
                  <SimpleReliableImage
                    imageId="porcelainTile"
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
                        <CheckCircle className="w-5 h-5 text-[rgb(138,0,0)] flex-shrink-0" />
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
              Porcelain tile's versatility makes it ideal for any room or outdoor space, providing unmatched beauty and performance.
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
                    alt={`Porcelain tile in ${app.name.toLowerCase()} Miami - ${app.description}`}
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

      {/* Customer Success Stories */}
      <GoogleReviews />

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about porcelain tile installation and maintenance.
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

      

      {/* Final CTA */}
      <section className="relative py-20 bg-gradient-to-r from-[rgb(138,0,0)] to-[rgb(153,27,27)]">
        <div className="absolute inset-0 bg-black/30"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1615971677499-5467cbab01c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Discover the beauty and durability of premium porcelain tile. Get expert guidance, competitive pricing, and professional installation from Miami's trusted tile specialists.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <GoldButton 
              size="lg" 
              className="px-8 py-4 text-lg font-semibold"
              onClick={() => {
                if (typeof (window as any).gtag === 'function') {
                  (window as any).gtag('event', 'conversion', {
                    event_category: 'engagement',
                    event_label: 'book_estimate_porcelain_final',
                    value: 1
                  });
                }
                const phoneNumber = "17863810964";
                const message = "Hi! I'm ready to transform my space with premium porcelain tile. Can you help me book a free estimate?";
                const encodedMessage = encodeURIComponent(message);
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
                window.open(whatsappUrl, '_blank');
              }}
            >
              Book Free Estimate
            </GoldButton>
            <a href="/contact">
              <WhiteOutlineButton 
                size="lg" 
                className="px-8 py-4 text-lg font-semibold"
                onClick={() => {
                  if (typeof (window as any).gtag === 'function') {
                    (window as any).gtag('event', 'conversion', {
                      event_category: 'engagement',
                      event_label: 'find_perfect_tile_final',
                      value: 1
                    });
                  }
                }}
              >
                Find Your Perfect Tile
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

export default PorcelainTile;