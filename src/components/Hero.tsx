import { Link } from "react-router-dom";
import { GoldButton, WhiteOutlineButton } from "@/components/ui/custom-buttons";
import { ArrowRight } from "lucide-react";
import { getReliableImageUrl } from "@/utils/imageUtils";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-[rgb(138,0,0)] to-[rgb(120,0,0)] text-white">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('${getReliableImageUrl("luxuryInterior")}')`,
        }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[rgb(138,0,0)]/90 to-[rgb(120,0,0)]/90"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Genesis Stone Premium Flooring and Setting materials
        </h1>
        <h2 className="text-xl md:text-2xl mb-8 text-white/90 max-w-4xl mx-auto">
          Over 17 Years of Service. We offer a wide range of indoor, outdoor,
          wall & kitchen/bathroom tiles and natural stones
        </h2>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <GoldButton size="lg" className="px-8 py-3 text-lg font-semibold">
            Get Project Estimate
            <ArrowRight className="ml-2 h-5 w-5" />
          </GoldButton>
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
