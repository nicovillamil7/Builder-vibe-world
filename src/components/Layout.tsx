import { useState, lazy, Suspense } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  PrimaryButton,
  OutlineButton,
} from "@/components/ui/custom-buttons";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  Phone,
  MapPin,
  Mail,
  Menu,
  X,
  Facebook,
  Instagram,
  Clock,
  Truck,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  // Site navigation schema for better sitelinks
  const siteNavigationSchema = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "name": "Main Navigation",
    "url": [
      {
        "@type": "WebPage",
        "name": "Products",
        "url": "https://genesisstoneusa.com/products",
        "description": "Premium flooring products including porcelain tiles, natural stone, and laminate flooring"
      },
      {
        "@type": "WebPage", 
        "name": "Retail Services",
        "url": "https://genesisstoneusa.com/retail",
        "description": "Visit our showroom for personalized flooring consultation and selection"
      },
      {
        "@type": "WebPage",
        "name": "Wholesale",
        "url": "https://genesisstoneusa.com/wholesale", 
        "description": "Trade pricing and wholesale services for contractors and designers"
      },
      {
        "@type": "WebPage",
        "name": "About Us",
        "url": "https://genesisstoneusa.com/about",
        "description": "Learn about Genesis Stone's history and expertise in flooring solutions"
      },
      {
        "@type": "WebPage",
        "name": "Contact",
        "url": "https://genesisstoneusa.com/contact",
        "description": "Get in touch with our flooring experts for consultation and quotes"
      },
      {
        "@type": "WebPage",
        "name": "Blog",
        "url": "https://genesisstoneusa.com/blog",
        "description": "Expert flooring tips, installation guides, and industry insights"
      }
    ]
  };
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Homeowners", href: "/retail" },
    { name: "Contractors", href: "/wholesale" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(siteNavigationSchema)}
        </script>
      </Helmet>
      {/* Top Information Bar - Genesis Maroon */}
      <div className="bg-[rgb(138,0,0)] text-white py-2 md:py-3 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Version - Just Phone & Location */}
          <div className="flex justify-center items-center gap-8 text-xs md:hidden">
            <div className="flex items-center space-x-2">
              <Phone className="h-3.5 w-3.5 flex-shrink-0" />
              <span className="font-medium">(305) 477-4402</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
              <span>Miami, FL 33122</span>
            </div>
          </div>

          {/* Desktop Version - Full Info */}
          <div className="hidden md:flex justify-between items-center">
            {/* Left side - Contact & Location */}
            <div className="flex items-center gap-8 text-sm">
              <div className="flex items-center space-x-2.5">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="font-medium">(305) 477-4402</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>Miami, FL 33122</span>
              </div>
            </div>

            {/* Right side - Service Info & Social */}
            <div className="flex items-center gap-8 text-sm">
              <div className="flex items-center space-x-2.5">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <span>Mon-Fri 7AM-4PM</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Truck className="h-4 w-4 flex-shrink-0" />
                <span>Quality Materials</span>
              </div>
              {/* Social Media Icons */}
              <div className="flex items-center space-x-4">
                <a
                  href="https://www.instagram.com/genesistone/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors duration-200"
                  title="Follow Genesis Stone on Instagram - Flooring Design Inspiration"
                  aria-label="Genesis Stone Instagram - Miami Flooring Inspiration"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://es-es.facebook.com/genesisstoneus/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors duration-200"
                  title="Like Genesis Stone on Facebook - Miami Flooring Updates"
                  aria-label="Genesis Stone Facebook - South Florida Flooring News"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="https://www.tiktok.com/@genesis.stone.more"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors duration-200"
                  title="Follow Genesis Stone on TikTok - Flooring Installation Tips"
                  aria-label="Genesis Stone TikTok - Quick Flooring Tips and Trends"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@genesisstoneandmore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors duration-200"
                  title="Subscribe to Genesis Stone YouTube - Flooring Installation Tutorials"
                  aria-label="Genesis Stone YouTube - Professional Flooring Installation Videos"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <nav className="bg-white shadow-sm sticky top-0 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">


            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center flex-1 space-x-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-6 py-2.5 rounded-lg font-medium text-sm uppercase tracking-wide transition-all duration-200 ${
                    isActive(item.href)
                      ? "bg-[rgb(138,0,0)] text-white shadow-md"
                      : "text-gray-700 hover:text-[rgb(138,0,0)] hover:bg-red-50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center">
              <PrimaryButton
                size="sm"
                onClick={() => {
                  // Track Google Ads conversion
                  if (typeof (window as any).gtag_report_conversion === 'function') {
                    (window as any).gtag_report_conversion();
                  }

                  // Track Google Analytics conversion
                  if (typeof (window as any).gtag === 'function') {
                    (window as any).gtag('event', 'conversion', {
                      event_category: 'engagement',
                      event_label: 'call_now_header',
                      value: 1
                    });
                  }

                  // Track Google Ads conversion event
                  if (typeof (window as any).gtag === 'function') {
                    (window as any).gtag('event', 'gads_conversion', {
                      event_category: 'engagement',
                      event_label: 'call_now_header',
                      value: 1
                    });
                  }

                  window.location.href = "tel:+13054774402";
                }}
                className="cursor-pointer bg-[rgb(138,0,0)] hover:bg-[rgb(120,0,0)] text-xs px-3 py-1.5"
              >
                Call Now
              </PrimaryButton>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-[rgb(138,0,0)] p-2"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                      isActive(item.href)
                        ? "bg-[rgb(138,0,0)] text-white"
                        : "text-gray-700 hover:text-[rgb(138,0,0)] hover:bg-gray-50"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                  <PrimaryButton
                    size="sm"
                    className="w-full cursor-pointer"
                    onClick={() => {
                      window.location.href = "tel:+13054774402";
                      setMobileMenuOpen(false);
                    }}
                  >
                    Call Now
                  </PrimaryButton>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-[rgb(138,0,0)] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">G</span>
                </div>
                <span className="text-xl font-bold">Genesis Stone</span>
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Since 2008, Genesis Stone has been Florida's premier destination
                for premium flooring solutions, serving contractors, designers,
                and homeowners across South Florida.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://es-es.facebook.com/genesisstoneus/"
                  className="text-gray-400 hover:text-white transition-colors"
                  title="Genesis Stone Facebook - Miami Flooring Updates"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/genesistone/"
                  className="text-gray-400 hover:text-white transition-colors"
                  title="Genesis Stone Instagram - Flooring Design Inspiration"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.tiktok.com/@genesis.stone.more"
                  className="text-gray-400 hover:text-white transition-colors"
                  title="Genesis Stone TikTok - Quick Flooring Tips"
                  aria-label="Follow us on TikTok"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@genesisstoneandmore"
                  className="text-gray-400 hover:text-white transition-colors"
                  title="Genesis Stone YouTube - Flooring Installation Tutorials"
                  aria-label="Subscribe to our YouTube channel"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                  <div>
                    <p>3399 NW 72nd Ave #109</p>
                    <p>Miami, FL 33122</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  <p>(305) 477-4402</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  <p>genesistonemore@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2024 Genesis Stone. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Contact Button */}
      <WhatsAppButton />
    </div>
  );
};

export default Layout;