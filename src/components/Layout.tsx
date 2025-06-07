import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { PrimaryButton, OutlineButton } from "@/components/ui/custom-buttons";
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
    { name: "Interior Design", href: "/retail" },
    { name: "Contractors", href: "/wholesale" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Information Bar - Genesis Maroon */}
      <div className="bg-[rgb(138,0,0)] text-white py-3 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            {/* Left side - Contact & Location */}
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a
                  href="tel:+13055550123"
                  className="hover:text-[rgb(251,189,35)] transition-colors"
                >
                  (305) 555-0123
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Miami Design District</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Mon-Fri 7AM-6PM</span>
              </div>
            </div>

            {/* Right side - Value Props & Quick Actions */}
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <Truck className="h-4 w-4 text-[rgb(251,189,35)]" />
                <span className="font-medium">
                  Professional Installation • Same-Day Pickup
                </span>
              </div>
              <div className="hidden lg:flex items-center space-x-3">
                <a
                  href="mailto:info@miamifloorspro.com"
                  className="hover:text-[rgb(251,189,35)] transition-colors"
                >
                  <Mail className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="hover:text-[rgb(251,189,35)] transition-colors"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="hover:text-[rgb(251,189,35)] transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50 border-b-2 border-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo & Brand */}
            <Link to="/" className="flex items-center space-x-4 group">
              <div className="w-12 h-12 bg-gradient-to-br from-[rgb(138,0,0)] to-[rgb(153,27,27)] rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold text-[rgb(138,0,0)] group-hover:text-[rgb(153,27,27)] transition-colors">
                  Miami Floors Pro
                </h1>
                <p className="text-sm text-gray-600 font-medium">
                  Premium Flooring Solutions
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative text-sm font-semibold transition-all duration-200 hover:text-[rgb(138,0,0)] ${
                    isActive(item.href)
                      ? "text-[rgb(138,0,0)]"
                      : "text-gray-700"
                  }`}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[rgb(138,0,0)] rounded-full"></div>
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Desktop Action Buttons */}
              <div className="hidden md:flex items-center space-x-3">
                <OutlineButton size="sm" className="text-sm px-4">
                  Get Estimate
                </OutlineButton>
                <PrimaryButton size="sm" className="text-sm px-4">
                  Schedule Consultation
                </PrimaryButton>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6 text-gray-700" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 py-4 bg-gray-50">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-base font-medium transition-colors px-4 py-2 rounded-lg ${
                      isActive(item.href)
                        ? "text-[rgb(138,0,0)] bg-red-50"
                        : "text-gray-700 hover:text-[rgb(138,0,0)] hover:bg-red-50"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                {/* Mobile Action Buttons */}
                <div className="flex flex-col space-y-3 pt-4 px-4">
                  <OutlineButton className="w-full">Get Estimate</OutlineButton>
                  <PrimaryButton className="w-full">
                    Schedule Consultation
                  </PrimaryButton>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

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
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <span className="text-xl font-bold">Miami Floors Pro</span>
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Since 2008, Miami Floors Pro has been Florida's premier
                destination for premium flooring solutions, serving contractors,
                designers, and homeowners across South Florida.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
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

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-400">
                    123 Design District, Miami, FL 33137
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-gray-400" />
                  <a
                    href="tel:+13055550123"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    (305) 555-0123
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-gray-400" />
                  <a
                    href="mailto:info@miamifloorspro.com"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    info@miamifloorspro.com
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-400">
                    Mon-Fri: 7:00 AM - 6:00 PM
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2024 Miami Floors Pro. All rights reserved.
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
    </div>
  );
};

export default Layout;
