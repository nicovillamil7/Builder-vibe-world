import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PrimaryButton, OutlineButton } from "@/components/ui/custom-buttons";
import {
  INTELLIGENT_IMAGES,
  analyzeAllImages,
  ImageIntelligenceAnalyzer,
  IMPROVED_IMAGE_SUGGESTIONS,
} from "@/utils/intelligentImages";
import {
  AlertTriangle,
  CheckCircle,
  XCircle,
  Brain,
  Search,
  Target,
} from "lucide-react";

export const ImageIntelligenceDashboard: React.FC = () => {
  const [analysis, setAnalysis] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const results = analyzeAllImages();
    setAnalysis(results);
    console.log("🧠 INTELLIGENT IMAGE ANALYSIS:", results);
  }, []);

  if (!analysis) {
    return (
      <div className="p-6 bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto text-center">
          <Brain className="h-12 w-12 mx-auto mb-4 text-blue-600 animate-pulse" />
          <h1 className="text-2xl font-bold">
            Analyzing Image Intelligence...
          </h1>
        </div>
      </div>
    );
  }

  const getScoreColor = (score: number) => {
    if (score >= 8) return "bg-green-100 text-green-800";
    if (score >= 6) return "bg-yellow-100 text-yellow-800";
    if (score >= 4) return "bg-orange-100 text-orange-800";
    return "bg-red-100 text-red-800";
  };

  const getScoreIcon = (score: number) => {
    if (score >= 8) return <CheckCircle className="h-4 w-4 text-green-600" />;
    if (score >= 6)
      return <AlertTriangle className="h-4 w-4 text-yellow-600" />;
    return <XCircle className="h-4 w-4 text-red-600" />;
  };

  const allImages = Object.values(INTELLIGENT_IMAGES).map((img) => ({
    ...img,
    relevanceScore: ImageIntelligenceAnalyzer.analyzeRelevance(img),
    improvementSuggestions:
      ImageIntelligenceAnalyzer.generateImprovementSuggestions(img),
  }));

  const excellentImages = allImages.filter((img) => img.relevanceScore >= 8);
  const goodImages = allImages.filter(
    (img) => img.relevanceScore >= 6 && img.relevanceScore < 8,
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Brain className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">
              🧠 Intelligent Image Analysis Dashboard
            </h1>
          </div>
          <p className="text-lg text-gray-600 mb-6">
            AI-powered image relevance scoring and improvement recommendations
          </p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center mb-2">
                <XCircle className="h-6 w-6 text-red-600 mr-2" />
                <span className="text-2xl font-bold text-red-600">
                  {analysis.poorPerformers.length}
                </span>
              </div>
              <div className="text-sm text-gray-600">
                Poor Performers (≤4/10)
              </div>
              <div className="text-xs text-red-600 mt-1">
                URGENT REPLACEMENT NEEDED
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center mb-2">
                <AlertTriangle className="h-6 w-6 text-yellow-600 mr-2" />
                <span className="text-2xl font-bold text-yellow-600">
                  {analysis.needsImprovement.length}
                </span>
              </div>
              <div className="text-sm text-gray-600">
                Needs Improvement (5-6/10)
              </div>
              <div className="text-xs text-yellow-600 mt-1">
                RECOMMENDED UPDATES
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center mb-2">
                <CheckCircle className="h-6 w-6 text-yellow-500 mr-2" />
                <span className="text-2xl font-bold text-yellow-500">
                  {goodImages.length}
                </span>
              </div>
              <div className="text-sm text-gray-600">Good Images (6-7/10)</div>
              <div className="text-xs text-gray-500 mt-1">
                ACCEPTABLE QUALITY
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center mb-2">
                <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                <span className="text-2xl font-bold text-green-600">
                  {excellentImages.length}
                </span>
              </div>
              <div className="text-sm text-gray-600">
                Excellent Images (8+/10)
              </div>
              <div className="text-xs text-green-600 mt-1">PERFECT MATCHES</div>
            </CardContent>
          </Card>
        </div>

        {/* Poor Performers Section */}
        {analysis.poorPerformers.length > 0 && (
          <Card className="mb-8 border-red-200">
            <CardHeader>
              <h2 className="text-2xl font-bold text-red-800 flex items-center">
                <XCircle className="h-6 w-6 mr-2" />
                🚨 URGENT: Poor Performing Images
              </h2>
              <p className="text-red-600">
                These images have low relevance scores and need immediate
                replacement
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {analysis.poorPerformers.map((img: any) => (
                  <Card key={img.id} className="border-red-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-gray-900">{img.title}</h3>
                        <Badge className={getScoreColor(img.relevanceScore)}>
                          {getScoreIcon(img.relevanceScore)}
                          {img.relevanceScore}/10
                        </Badge>
                      </div>

                      <div className="space-y-3 text-sm">
                        <div>
                          <strong className="text-gray-700">Category:</strong>{" "}
                          {img.category}
                        </div>
                        <div>
                          <strong className="text-red-700">Problem:</strong>{" "}
                          {img.actualContent}
                        </div>
                        <div>
                          <strong className="text-green-700">
                            Should Show:
                          </strong>{" "}
                          {img.contextMatch}
                        </div>
                      </div>

                      <div className="mt-4 p-3 bg-red-50 rounded-lg">
                        <h4 className="font-semibold text-red-800 mb-2">
                          Improvement Suggestions:
                        </h4>
                        <ul className="text-xs text-red-700 space-y-1">
                          {img.improvementSuggestions.map(
                            (suggestion: string, idx: number) => (
                              <li key={idx}>• {suggestion}</li>
                            ),
                          )}
                        </ul>
                      </div>

                      <div className="mt-4 flex gap-2">
                        <PrimaryButton
                          size="sm"
                          className="bg-red-600 hover:bg-red-700"
                        >
                          <Search className="h-4 w-4 mr-1" />
                          Find Replacement
                        </PrimaryButton>
                        <OutlineButton size="sm">
                          View Current Image
                        </OutlineButton>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Improvement Suggestions */}
        <Card className="mb-8 border-blue-200">
          <CardHeader>
            <h2 className="text-2xl font-bold text-blue-800 flex items-center">
              <Target className="h-6 w-6 mr-2" />
              🎯 Smart Image Replacement Suggestions
            </h2>
            <p className="text-blue-600">
              AI-generated search terms for finding better category-specific
              images
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(IMPROVED_IMAGE_SUGGESTIONS).map(
                ([category, suggestions]) => (
                  <Card key={category}>
                    <CardContent className="p-4">
                      <h3 className="font-bold text-gray-900 mb-3 capitalize">
                        {category.replace(/([A-Z])/g, " $1")}
                      </h3>
                      <ul className="space-y-2">
                        {suggestions.map((suggestion, idx) => (
                          <li key={idx} className="text-sm">
                            <a
                              href={`https://unsplash.com/s/photos/${encodeURIComponent(suggestion)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 flex items-center"
                            >
                              <Search className="h-3 w-3 mr-1" />
                              {suggestion}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ),
              )}
            </div>
          </CardContent>
        </Card>

        {/* All Images Analysis */}
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-bold text-gray-800">
              📊 Complete Image Analysis
            </h2>
            <p className="text-gray-600">
              Detailed breakdown of all images with relevance scores
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              {allImages.map((img) => (
                <Card
                  key={img.id}
                  className="hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-sm">{img.id}</h4>
                      <Badge className={getScoreColor(img.relevanceScore)}>
                        {getScoreIcon(img.relevanceScore)}
                        {img.relevanceScore}/10
                      </Badge>
                    </div>
                    <div className="text-xs text-gray-600 mb-2">
                      <strong>Category:</strong> {img.category}
                    </div>
                    <div className="text-xs text-gray-600">
                      <strong>Content:</strong> {img.actualContent}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
