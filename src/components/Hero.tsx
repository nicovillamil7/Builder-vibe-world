import { Link } from "react-router-dom";
import { GoldButton, WhiteOutlineButton } from "@/components/ui/custom-buttons";
import { ArrowRight } from "lucide-react";
import { getReliableImageUrl } from "@/utils/imageUtils";

const Hero = () => {
  return (
    <div className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Large Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 hover:scale-110 transition-transform duration-1000 ease-out"
        style={{
          backgroundImage: `url('${getReliableImageUrl("luxuryInterior")}')`,
        }}
      />

      {/* Dark Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center justify-center min-h-[25px]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center text-white">
          {/* Main Heading - Large and Bold like cpffloors.com */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Genesis Stone
            <span className="block text-white mt-2">Premium Materials</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto font-light">
            Over 17 years of service. Discover our wide range of indoor,
            outdoor, wall & kitchen/bathroom tiles and natural stones.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="border-2 border-white text-white hover:bg-white hover:text-[rgb(138,0,0)] px-10 py-5 rounded-lg font-semibold text-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/10 min-w-[280px]">
              Request Sample
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">17+</div>
              <div className="text-lg text-white/90">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">1000+</div>
              <div className="text-lg text-white/90">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-lg text-white/90">Material Types</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-20 text-white"
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
