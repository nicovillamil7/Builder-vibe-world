import React from "react";
import { MessageCircle } from "lucide-react";

export const WhatsAppButton: React.FC = () => {
  const phoneNumber = "13055104733"; // US phone number for WhatsApp
  const message =
    "Hi! I'm interested in Genesis Stone flooring solutions. Can you help me?";

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Track conversion before opening WhatsApp
    if (typeof (window as any).gtag_report_conversion === 'function') {
      (window as any).gtag_report_conversion();
    }

    // Also track as GA4 event (optional)
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'conversion', {
        event_category: 'engagement',
        event_label: 'floating_button',
        value: 1
      });
    }

    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-200 flex items-center space-x-2 group"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="hidden group-hover:inline text-sm font-medium animate-fade-in bg-green-500 px-2 py-1 rounded-l-lg -ml-2">
        Chat with us
      </span>
    </button>
  );
};