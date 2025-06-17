import { Link } from "react-router-dom";
import { GoldButton, WhiteOutlineButton } from "@/components/ui/custom-buttons";
import { ArrowRight } from "lucide-react";
import { getReliableImageUrl } from "@/utils/imageUtils";

const Hero = () => {
  return (
    <div className="relative h-screen min-h-[600px] bg-gray-100 overflow-hidden">
      {/* Split Layout Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
        {/* Left Side - Hero Image */}
        <div className="relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 hover:scale-110 transition-transform duration-700 ease-out"
            style={{
              backgroundImage: `url('${getReliableImageUrl("luxuryInterior")}')`,
            }}
          />
          {/* Subtle overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent lg:hidden" />
        </div>

        {/* Right Side - Content Overlay */}
        <div className="relative flex items-center justify-center lg:justify-start">
          {/* Background with subtle pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100" />

          {/* Content Container */}
          <div className="relative z-10 px-6 sm:px-8 lg:px-12 xl:px-16 py-12 max-w-2xl">
            {/* Small Badge/Category */}
            <div className="inline-flex items-center px-4 py-2 bg-[rgb(138,0,0)]/10 text-[rgb(138,0,0)] rounded-full text-sm font-semibold mb-6 border border-[rgb(138,0,0)]/20">
              Premium Flooring Solutions
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Genesis Stone
              <span className="block text-[rgb(138,0,0)] mt-2">
                Premium Materials
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
              Over 17 years of service. Discover our wide range of indoor,
              outdoor, wall & kitchen/bathroom tiles and natural stones.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[rgb(138,0,0)] rounded-full" />
                <span className="text-gray-700 font-medium">
                  Premium Quality
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[rgb(138,0,0)] rounded-full" />
                <span className="text-gray-700 font-medium">
                  Expert Service
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[rgb(138,0,0)] rounded-full" />
                <span className="text-gray-700 font-medium">
                  Wide Selection
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[rgb(138,0,0)] rounded-full" />
                <span className="text-gray-700 font-medium">Fast Delivery</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[rgb(138,0,0)] hover:bg-[rgb(120,0,0)] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group">
                Explore Our Collection
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="border-2 border-[rgb(138,0,0)] text-[rgb(138,0,0)] hover:bg-[rgb(138,0,0)] hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Get Quote
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-[rgb(138,0,0)] mb-1">
                    17+
                  </div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[rgb(138,0,0)] mb-1">
                    1000+
                  </div>
                  <div className="text-sm text-gray-600">
                    Projects Completed
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[rgb(138,0,0)] mb-1">
                    50+
                  </div>
                  <div className="text-sm text-gray-600">Material Types</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements for Visual Interest */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-[rgb(138,0,0)]/5 rounded-full blur-3xl hidden lg:block" />
      <div className="absolute bottom-32 left-16 w-24 h-24 bg-yellow-400/10 rounded-full blur-2xl hidden lg:block" />

      {/* Bottom Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
};

export default Hero;
