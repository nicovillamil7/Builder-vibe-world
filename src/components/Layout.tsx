import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { PrimaryButton, OutlineButton } from "@/components/ui/custom-buttons";
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

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Homeowners", href: "/retail" },
    { name: "Contractors", href: "/wholesale" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Information Bar - Genesis Maroon */}
      <div className="bg-[rgb(138,0,0)] text-white py-1.5 md:py-2.5 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Version - Just Phone & Location */}
          <div className="flex justify-center items-center gap-6 text-xs md:hidden">
            <div className="flex items-center space-x-1.5">
              <Phone className="h-3 w-3 flex-shrink-0" />
              <span className="font-medium">(305) 477-4402</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <MapPin className="h-3 w-3 flex-shrink-0" />
              <span>Miami, FL</span>
            </div>
          </div>

          {/* Desktop Version - Full Info */}
          <div className="hidden md:flex flex-col lg:flex-row justify-between items-center gap-3">
            {/* Left side - Contact & Location */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm">
              <div className="flex items-baseline space-x-2">
                <Phone className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" />
                <span className="font-medium">(305) 477-4402</span>
              </div>
              <div className="flex items-baseline space-x-2">
                <MapPin className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" />
                <span className="text-center sm:text-left">
                  Miami, FL 33122
                </span>
              </div>
            </div>

            {/* Right side - Service Info & Social */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm">
              <div className="flex items-baseline space-x-2">
                <Clock className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" />
                <span>Mon-Fri 7AM-4PM</span>
              </div>
              <div className="flex items-baseline space-x-2">
                <Truck className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" />
                <span className="text-center sm:text-left">
                  Quality Materials
                </span>
              </div>
              {/* Social Media Icons */}
              <div className="flex items-center space-x-3">
                <a
                  href="https://www.instagram.com/genesisstonefl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors duration-200"
                  title="Follow us on Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://www.facebook.com/genesisstonefl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors duration-200"
                  title="Follow us on Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <nav className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="https://cdn.builder.io/api/v1/assets/794088d731be4280a896b77e76e82a50/logo_genesis__1_-removebg-df8c37?format=webp&width=800"
                alt="Genesis Stone & More"
                className="h-12 w-auto"
              />
            </Link>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? "bg-[rgb(138,0,0)] text-white shadow-lg"
                      : "text-gray-700 hover:text-[rgb(138,0,0)] hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
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
                className="cursor-pointer"
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
                  <OutlineButton size="sm" className="w-full">
                    Get Quote
                  </OutlineButton>
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
                  href="https://web.facebook.com/genesisstoneus/?_rdc=1&_rdr#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/genesistone/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram className="h-5 w-5" />
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