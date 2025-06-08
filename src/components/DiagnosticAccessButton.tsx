import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Settings, Brain, ChevronUp, TestTube, Sparkles } from "lucide-react";

// Development only - quick access to image diagnostic tools
export const DiagnosticAccessButton: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Only show in development mode
  if (process.env.NODE_ENV === "production") {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="flex flex-col gap-2">
        {/* Expanded Tools */}
        {isExpanded && (
          <>
            <Link
              to="/image-intelligence"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 flex items-center space-x-2"
              title="🚀 AI Image Intelligence - Complete website image management"
            >
              <Sparkles className="h-5 w-5" />
              <span className="hidden sm:inline text-sm font-medium">
                AI Dashboard
              </span>
            </Link>
            <Link
              to="/image-system-tests"
              className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-colors duration-200 flex items-center space-x-2"
              title="🧪 End-to-End System Tests - Test all 6 core functionalities"
            >
              <TestTube className="h-5 w-5" />
              <span className="hidden sm:inline text-sm font-medium">
                Run Tests
              </span>
            </Link>

            <Link
              to="/image-intelligence"
              className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-colors duration-200 flex items-center space-x-2"
              title="🧠 Classic AI Analysis - AI-powered relevance scoring"
            >
              <Brain className="h-5 w-5" />
              <span className="hidden sm:inline text-sm font-medium">
                Classic AI
              </span>
            </Link>

            <Link
              to="/image-diagnostic"
              className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors duration-200 flex items-center space-x-2"
              title="🔧 Basic Health Check - Simple image health diagnostic"
            >
              <Settings className="h-5 w-5" />
              <span className="hidden sm:inline text-sm font-medium">
                Health Check
              </span>
            </Link>
          </>
        )}

        {/* Main Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`${
            isExpanded
              ? "bg-red-600 hover:bg-red-700"
              : "bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
          } text-white p-3 rounded-full shadow-lg transition-all duration-200 flex items-center space-x-2`}
          title={isExpanded ? "Close Tools" : "🧠 AI Image Intelligence System"}
        >
          {isExpanded ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <Brain className="h-5 w-5" />
          )}
          <span className="hidden sm:inline text-sm font-medium">
            {isExpanded ? "Close" : "Image AI"}
          </span>
        </button>
      </div>
    </div>
  );
};
