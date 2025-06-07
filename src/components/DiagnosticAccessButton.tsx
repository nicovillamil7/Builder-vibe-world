import React from "react";
import { Link } from "react-router-dom";
import { Settings } from "lucide-react";

// Development only - quick access to image diagnostic tool
export const DiagnosticAccessButton: React.FC = () => {
  // Only show in development mode
  if (process.env.NODE_ENV === "production") {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Link
        to="/image-diagnostic"
        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors duration-200 flex items-center space-x-2"
        title="Image Diagnostic Tool"
      >
        <Settings className="h-5 w-5" />
        <span className="hidden sm:inline">Image Check</span>
      </Link>
    </div>
  );
};
