import { Link } from "react-router-dom";
import { GoldButton, WhiteOutlineButton } from "@/components/ui/custom-buttons";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-[rgb(138,0,0)] to-[rgb(120,0,0)] text-white">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('https://i.imgur.com/mY8KqL2.jpg')`,
        }}
        onError={(e) => {
          e.target.style.backgroundImage = `url('https://images.unsplash.com/photo-1594739797188-97c1a5b64b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`;
        }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[rgb(138,0,0)]/90 to-[rgb(120,0,0)]/90"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Genesis Stone Premium Flooring
        </h1>
        <h2 className="text-xl md:text-2xl mb-8 text-white/90 max-w-4xl mx-auto">
          Volume discounts for contractors • Beautiful home transformations •
          Professional installation & expert guidance
        </h2>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <GoldButton size="lg" className="px-8 py-3 text-lg font-semibold">
            Get Project Estimate
            <ArrowRight className="ml-2 h-5 w-5" />
          </GoldButton>
          <WhiteOutlineButton
            size="lg"
            className="px-8 py-3 text-lg font-semibold"
          >
            Schedule Consultation
          </WhiteOutlineButton>
        </div>

        {/* Discount Banner */}
        <div className="inline-flex items-center bg-[rgb(251,189,35)]/20 border border-[rgb(251,189,35)]/30 rounded-full px-6 py-2 text-[rgb(251,189,35)]">
          <span className="mr-2">🎉</span>
          <span className="font-medium">Get Your Project Quote Today</span>
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
