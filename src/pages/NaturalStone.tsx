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
  ChevronUp,
} from "lucide-react";
import { GoldButton, WhiteOutlineButton } from "@/components/ui/custom-buttons";
import { SimpleReliableImage } from "@/components/ui/ReliableImage";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import GoogleReviews from "@/components/GoogleReviews";
import Layout from "@/components/Layout";

const NaturalStone = () => {
  const [openFAQ, setOpenFAQ] = React.useState<number | null>(null);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Natural Stone Flooring Miami",
    description:
      "Premium natural stone flooring including travertine, marble, granite, slate, and limestone for Miami homes and businesses. Cool-touch surfaces perfect for pool decks and luxury interiors.",
    brand: {
      "@type": "Brand",
      name: "Genesis Stone",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "4.99",
      highPrice: "15.99",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "4.99-15.99",
        priceCurrency: "USD",
        unitText: "per square foot",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "150",
    },
    areaServed: {
      "@type": "State",
      name: "Florida",
    },
  };

  const benefits = [
    {
      icon: <Gem className="w-8 h-8 text-amber-600" />,
      title: "Timeless Beauty & Luxury",
      description:
        "Each piece features unique natural patterns that never go out of style",
    },
    {
      icon: <Shield className="w-8 h-8 text-amber-600" />,
      title: "Extreme Durability",
      description:
        "Withstands heavy traffic and harsh Miami weather for decades",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-amber-600" />,
      title: "Increases Property Value",
      description:
        "Premium natural stone adds significant resale value to your property",
    },
    {
      icon: <Snowflake className="w-8 h-8 text-amber-600" />,
      title: "Cool Touch Surface",
      description:
        "Perfect for Miami pool decks - stays cool even in direct sunlight",
    },
    {
      icon: <Sun className="w-8 h-8 text-amber-600" />,
      title: "Indoor & Outdoor Versatility",
      description:
        "Seamlessly transitions from interior floors to outdoor patios",
    },
  ];

  const stoneTypes = [
    {
      name: "Marble",
      description:
        "Premium luxury marble with elegant veining patterns and timeless sophistication",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets%2F794088d731be4280a896b77e76e82a50%2F026f26e88569479184cc5ef36cbf77ef",
      features: [
        "Luxury finish",
        "Unique natural veining",
        "Heat-resistant surfaces",
        "High-end appeal",
      ],
    },
    {
      name: "Limestone",
      description:
        "Versatile sedimentary stone with soft neutral tones and natural fossil inclusions",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets%2F794088d731be4280a896b77e76e82a50%2F8ea9bfb38ad647ab8ca9a801a46425dc",
      features: [
        "Fossil inclusions",
        "Neutral color palette",
        "Easy to work with",
        "Versatile applications",
      ],
    },
    {
      name: "Travertine",
      description:
        "Cool-touch limestone perfect for pool decks, patios, and outdoor living spaces",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets%2F794088d731be4280a896b77e76e82a50%2F8b2f09499d21483cb694602313286f4b",
      features: [
        "Non-slip surface",
        "Cool-touch technology",
        "Heat resistant",
        "Pool-friendly",
      ],
    },
    {
      name: "Granite",
      description:
        "Ultra-durable igneous rock with superior strength and stunning speckled patterns",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets%2F794088d731be4280a896b77e76e82a50%2F752cb8e8215b4da698733a7ef3e1ed3d",
      features: [
        "Scratch resistant",
        "Stain resistant",
        "Low maintenance",
        "Commercial grade durability",
      ],
    },
    {
      name: "Dolomite",
      description:
        "Crystalline carbonate rock offering marble-like beauty with enhanced durability",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets%2F794088d731be4280a896b77e76e82a50%2F582758e9108e4f3ab984fa6e4fbb206d",
      features: [
        "Marble-like appearance",
        "Superior hardness",
        "Acid resistance",
        "Low porosity",
      ],
    },
    {
      name: "Stacked Stone",
      description:
        "Dimensional natural stone panels creating stunning textured walls and accent features",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets%2F794088d731be4280a896b77e76e82a50%2F89da7459cd1e44cc9671cb3806995930",
      features: [
        "3D textured finish",
        "Easy installation",
        "Interior/exterior use",
        "Natural variations",
      ],
    },
  ];

  const faqs = [
    {
      question: "Is natural stone waterproof?",
      answer:
        "Natural stone is naturally water-resistant, but we recommend sealing for optimal protection, especially in wet areas like bathrooms and pool decks.",
    },
    {
      question: "How do I clean natural stone?",
      answer:
        "Use pH-neutral cleaners and avoid acidic products. Daily cleaning with a microfiber mop and periodic professional cleaning maintains the beauty.",
    },
    {
      question: "Can natural stone be used outdoors in Miami?",
      answer:
        "Absolutely! Our natural stone is perfect for Miami's climate. Travertine and limestone stay cool in direct sunlight, making them ideal for pool decks.",
    },
    {
      question: "Is natural stone slippery when wet?",
      answer:
        "We offer various finishes including honed and textured surfaces that provide excellent slip resistance, especially important around pools.",
    },
    {
      question: "How long does natural stone last?",
      answer:
        "With proper installation and minimal maintenance, natural stone can last 50+ years, making it an excellent long-term investment.",
    },
    {
      question: "What's the difference between marble and granite?",
      answer:
        "Marble offers elegant veining and softer tones, while granite provides superior durability and speckled patterns. Both are excellent choices for different applications.",
    },
  ];

  return (
    <Layout>
      <Helmet>
        <title>
          Natural Stone Flooring Miami | Travertine, Marble, Granite | Genesis
          Stone
        </title>
        <meta
          name="description"
          content="Premium natural stone flooring in Miami. Travertine pool decks, marble floors, granite surfaces. Cool-touch, slip-resistant, luxury finishes. Free estimates."
        />
        <meta
          name="keywords"
          content="natural stone flooring Miami, travertine pool deck, marble flooring, granite surfaces, limestone tiles, slate flooring, cool touch stone, Miami pool deck, luxury stone floors"
        />
        <link
          rel="canonical"
          href="https://genesisstoneusa.com/products/natural-stone"
        />
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
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-800/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Timeless Elegance with
              <span className="text-amber-400 block">
                Natural Stone Flooring
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Durable, luxurious, and perfect for any space — indoors or
              outdoors. Cool-touch surfaces ideal for Miami's climate.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold text-lg px-10 py-5 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl min-w-[280px]"
                onClick={() => {
                  const phoneNumber = "13058340800";
                  const message =
                    "Hi! I'm interested in natural stone flooring for my project. Can you provide a free quote?";
                  const encodedMessage = encodeURIComponent(message);
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

                  // Track Google Ads conversion
                  if (
                    typeof (window as any).gtag_report_conversion === "function"
                  ) {
                    (window as any).gtag_report_conversion();
                  }

                  // Track Google Analytics conversion
                  if (typeof (window as any).gtag === "function") {
                    (window as any).gtag("event", "conversion", {
                      event_category: "engagement",
                      event_label: "natural_stone_quote_hero",
                      value: 1,
                    });
                  }

                  window.open(whatsappUrl, "_blank");
                }}
              >
                Get a Free Quote
              </button>
              <button
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold text-lg px-10 py-5 rounded-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/10 min-w-[280px]"
                onClick={() => {
                  const phoneNumber = "13058340800";
                  const message =
                    "Hi! I'd like to schedule a free consultation for natural stone flooring. What's your availability?";
                  const encodedMessage = encodeURIComponent(message);
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

                  // Track Google Ads conversion
                  if (
                    typeof (window as any).gtag_report_conversion === "function"
                  ) {
                    (window as any).gtag_report_conversion();
                  }

                  // Track Google Analytics conversion
                  if (typeof (window as any).gtag === "function") {
                    (window as any).gtag("event", "conversion", {
                      event_category: "engagement",
                      event_label: "natural_stone_consultation_hero",
                      value: 1,
                    });
                  }

                  window.open(whatsappUrl, "_blank");
                }}
              >
                Schedule Free Consultation
              </button>
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
              Discover the unmatched benefits that make natural stone the
              preferred choice for Miami homeowners and businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
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
              Each stone type offers unique characteristics perfect for
              different applications and design preferences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stoneTypes.map((stone, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div
                  className={`h-48 overflow-hidden ${stone.name === "Limestone" ? "flex flex-col" : ""}`}
                >
                  <img
                    src={stone.imageUrl}
                    alt={`${stone.name} natural stone flooring`}
                    className={`object-cover hover:scale-105 transition-transform duration-300 ${
                      stone.name === "Limestone"
                        ? "w-auto h-auto mb-auto flex-grow-0 self-stretch"
                        : "w-full h-full"
                    }`}
                    loading="lazy"
                    width="400"
                    height="300"
                    decoding="async"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {stone.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{stone.description}</p>
                  <ul className="space-y-2">
                    {stone.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <Star className="w-4 h-4 text-amber-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <GoldButton 
                      className="w-full"
                      onClick={() => {
                        // Track conversion
                        if (typeof (window as any).gtag === "function") {
                          (window as any).gtag("event", "conversion", {
                            event_category: "engagement",
                            event_label: `quote_request_${stone.name.toLowerCase().replace(/[^a-z0-9]/g, "_")}`,
                            value: 1,
                          });
                        }

                        // Open WhatsApp with personalized message
                        const phoneNumber = "13058340800";
                        const message = `Hi! I'm interested in ${stone.name} natural stone for my project. Can you provide more details and pricing for ${stone.name}?`;
                        const encodedMessage = encodeURIComponent(message);
                        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
                        window.open(whatsappUrl, "_blank");
                      }}
                    >
                      Request Quote Information
                    </GoldButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <GoogleReviews />

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
                  <span className="font-semibold text-gray-900">
                    {faq.question}
                  </span>
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
                As South Florida's premier natural stone supplier, we serve
                Miami-Dade, Broward, and Palm Beach counties with professional
                installation and premium materials.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-amber-600 mr-3" />
                  <span className="text-gray-700">
                    Miami, Coral Gables, Aventura, Doral
                  </span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-amber-600 mr-3" />
                  <span className="text-gray-700">(305) 834-0800</span>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="w-6 h-6 text-amber-600 mr-3" />
                  <a
                    href="https://wa.me/13058340800"
                    className="text-gray-700 hover:text-amber-600"
                  >
                    WhatsApp: (305) 8340800
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-amber-600 mr-3" />
                  <span className="text-gray-700">
                    info@genesisstoneusa.com
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg overflow-hidden h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3590.3425890707464!2d-80.30823258448123!3d25.887426983540235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b6a37e2e5c5d%3A0x9d8f7e6c5b4a3b2c!2s3399%20NW%2072nd%20Ave%20%23109%2C%20Miami%2C%20FL%2033166%2C%20USA!5e0!3m2!1sen!2sus!4v1737758867890!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Genesis Stone Location - Miami, FL"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-800 to-red-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Elevate Your Space with Natural Stone?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Transform your home or business with premium natural stone flooring.
            Get your personalized quote today.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              className="bg-white text-red-800 hover:bg-gray-100 font-bold text-lg px-10 py-5 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl min-w-[280px]"
              onClick={() => {
                const phoneNumber = "13058340800";
                const message =
                  "Hi! I'd like to book a free estimate for natural stone flooring. When would be a good time?";
                const encodedMessage = encodeURIComponent(message);
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

                // Track conversions
                if (
                  typeof (window as any).gtag_report_conversion === "function"
                ) {
                  (window as any).gtag_report_conversion();
                }
                if (typeof (window as any).gtag === "function") {
                  (window as any).gtag("event", "conversion", {
                    event_category: "engagement",
                    event_label: "natural_stone_estimate_final",
                    value: 1,
                  });
                }

                window.open(whatsappUrl, "_blank");
              }}
            >
              Book a Free Estimate
            </button>
            <button
              className="border-2 border-white text-white hover:bg-white hover:text-red-800 font-bold text-lg px-10 py-5 rounded-lg transition-all duration-300 transform hover:scale-105 min-w-[280px]"
              onClick={() => {
                const phoneNumber = "13058340800";
                const message =
                  "Hi! I'm interested in natural stone flooring for my project. Can you provide a WhatsApp quote?";
                const encodedMessage = encodeURIComponent(message);
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

                // Track conversions
                if (
                  typeof (window as any).gtag_report_conversion === "function"
                ) {
                  (window as any).gtag_report_conversion();
                }
                if (typeof (window as any).gtag === "function") {
                  (window as any).gtag("event", "conversion", {
                    event_category: "engagement",
                    event_label: "natural_stone_whatsapp_final",
                    value: 1,
                  });
                }

                window.open(whatsappUrl, "_blank");
              }}
            >
              Get WhatsApp Quote
            </button>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </Layout>
  );
};

export default NaturalStone;
