import { Link } from "react-router-dom";
import { GoldButton, WhiteOutlineButton } from "@/components/ui/custom-buttons";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-red-800 to-red-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      {/* Hero Navigation */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <nav className="flex justify-center space-x-8">
          <Link
            to="/wholesale"
            className="text-white/90 hover:text-white transition-colors text-sm font-medium"
          >
            For Contractors
          </Link>
          <Link
            to="/retail"
            className="text-white/90 hover:text-white transition-colors text-sm font-medium"
          >
            For Designers
          </Link>
          <Link
            to="/products"
            className="text-white/90 hover:text-white transition-colors text-sm font-medium"
          >
            Browse All Flooring
          </Link>
        </nav>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Miami's Premium Flooring—
        </h1>
        <h2 className="text-xl md:text-2xl mb-8 text-white/90 max-w-4xl mx-auto">
          Bulk discounts for contractors • Curated luxury collections for
          designers • Free samples & expert guidance
        </h2>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <GoldButton size="lg" className="px-8 py-3 text-lg font-semibold">
            Get Trade Pricing
            <ArrowRight className="ml-2 h-5 w-5" />
          </GoldButton>
          <WhiteOutlineButton
            size="lg"
            className="px-8 py-3 text-lg font-semibold"
          >
            Request Designer Samples
          </WhiteOutlineButton>
        </div>

        {/* Discount Banner */}
        <div className="inline-flex items-center bg-yellow-400/20 border border-yellow-400/30 rounded-full px-6 py-2 text-yellow-300">
          <span className="mr-2">🎉</span>
          <span className="font-medium">Reveal Your 10% Discount</span>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-16 text-gray-50"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,120 C200,60 400,0 600,40 C800,80 1000,20 1200,60 L1200,120 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
