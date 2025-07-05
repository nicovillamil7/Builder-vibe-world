import React from "react";
import { MessageCircle } from "lucide-react";

export const WhatsAppButton: React.FC = () => {
  const phoneNumber = "13055104733"; // US phone number for WhatsApp
  const message =
    "Hi! I'm interested in Genesis Stone flooring solutions. Can you help me?";

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Track Google Ads conversion
    if (typeof (window as any).gtag_report_conversion === 'function') {
      (window as any).gtag_report_conversion();
    }

    // Track Google Analytics conversion
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'conversion', {
        event_category: 'engagement',
        event_label: 'floating_button',
        value: 1
      });
    }

    // Track Google Ads conversion event
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'gads_conversion', {
        event_category: 'engagement',
        event_label: 'floating_button',
        value: 1
      });
    }

    window.open(whatsappUrl, "_blank");
  };

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <button
      onClick={handleWhatsAppClick}
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors duration-300 hover:scale-110 transform min-h-[56px] min-w-[56px] flex items-center justify-center touch-manipulation"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  );
};