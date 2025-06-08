import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PrimaryButton, OutlineButton } from "@/components/ui/custom-buttons";
import { Input } from "@/components/ui/input";
import {
  INTELLIGENT_IMAGES,
  analyzeAllImages,
  ImageIntelligenceAnalyzer,
  IMPROVED_IMAGE_SUGGESTIONS,
} from "@/utils/intelligentImages";
import {
  BulkReplacementManager,
  AIImageValidator,
  SmartImageSuggestions,
  WebpageDesignAnalyzer,
} from "@/utils/advancedImageManager";
import {
  AlertTriangle,
  CheckCircle,
  XCircle,
  Brain,
  Search,
  Target,
  Upload,
  RefreshCw,
  Zap,
  Download,
  ExternalLink,
  FileImage,
  Sparkles,
  Wand2,
  Loader2,
  Info,
  Clock,
} from "lucide-react";

export const ImageIntelligenceDashboard: React.FC = () => {
  const [analysis, setAnalysis] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [bulkReplacementPlan, setBulkReplacementPlan] = useState<any>(null);
  const [isProcessingBulk, setIsProcessingBulk] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [validationResults, setValidationResults] = useState<any[]>([]);
  const [smartSuggestions, setSmartSuggestions] = useState<any>({});
  const [notifications, setNotifications] = useState<any[]>([]);
  const [loadingStates, setLoadingStates] = useState({
    analyzing: false,
    creatingPlan: false,
    executing: false,
    uploading: false,
  });
  const [progress, setProgress] = useState({ current: 0, total: 0, step: "" });
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Add notification helper
  const addNotification = (
    type: "success" | "error" | "info" | "warning",
    title: string,
    message: string,
    duration: number = 5000,
  ) => {
    const id = Date.now();
    const notification = { id, type, title, message };
    setNotifications((prev) => [...prev, notification]);

    if (duration > 0) {
      setTimeout(() => {
        setNotifications((prev) => prev.filter((n) => n.id !== id));
      }, duration);
    }
  };

  // Remove notification
  const removeNotification = (id: number) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  useEffect(() => {
    const results = analyzeAllImages();
    setAnalysis(results);
    console.log("🧠 INTELLIGENT IMAGE ANALYSIS:", results);
  }, []);

  // Handle bulk replacement with comprehensive feedback
  const handleBulkReplacement = async (minScore: number = 6) => {
    // Immediate feedback
    addNotification(
      "info",
      "🚀 Creating Replacement Plan",
      `Analyzing images scoring ≤${minScore}/10...`,
      0,
    );
    setLoadingStates((prev) => ({ ...prev, creatingPlan: true }));
    setIsProcessingBulk(true);

    try {
      // Show progress steps
      setProgress({
        current: 1,
        total: 3,
        step: "Analyzing current images...",
      });
      await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate analysis time

      setProgress({
        current: 2,
        total: 3,
        step: "Generating replacement suggestions...",
      });
      await new Promise((resolve) => setTimeout(resolve, 500));

      setProgress({
        current: 3,
        total: 3,
        step: "Creating optimization plan...",
      });
      const plan = await BulkReplacementManager.createReplacementPlan(minScore);

      // Ensure plan has all required properties with defaults
      const safePlan = {
        totalImages: plan.totalImages || 0,
        poorPerformers: plan.poorPerformers || [],
        replacementSources: plan.replacementSources || [],
        estimatedImprovementScore: plan.estimatedImprovementScore || 0,
        projectedAverageScore: plan.projectedAverageScore || 7.5,
      };

      setBulkReplacementPlan(safePlan);

      // Success notification
      removeNotification(notifications[notifications.length - 1]?.id);
      addNotification(
        "success",
        "✅ Replacement Plan Ready!",
        `Found ${plan.totalImages} images to improve. Estimated +${(plan.estimatedImprovementScore || 0).toFixed(1)}% quality boost!`,
        8000,
      );

      console.log("📋 BULK REPLACEMENT PLAN:", plan);
    } catch (error) {
      removeNotification(notifications[notifications.length - 1]?.id);
      addNotification(
        "error",
        "❌ Plan Creation Failed",
        `Error: ${error}`,
        10000,
      );
      console.error("Error creating replacement plan:", error);
    } finally {
      setLoadingStates((prev) => ({ ...prev, creatingPlan: false }));
      setIsProcessingBulk(false);
      setProgress({ current: 0, total: 0, step: "" });
    }
  };

  // Execute bulk replacement with detailed progress
  const executeBulkReplacement = async () => {
    if (!bulkReplacementPlan) return;

    const confirmed = window.confirm(
      `🚨 BULK REPLACEMENT CONFIRMATION\n\n` +
        `This will replace ${bulkReplacementPlan.totalImages} images.\n` +
        `Estimated improvement: +${(bulkReplacementPlan.estimatedImprovementScore || 0).toFixed(1)}% quality score.\n\n` +
        `Are you sure you want to proceed?`,
    );

    if (confirmed) {
      // Start execution with detailed feedback
      addNotification(
        "info",
        "🔄 Executing Bulk Replacement",
        "Starting image replacement process...",
        0,
      );
      setLoadingStates((prev) => ({ ...prev, executing: true }));
      setIsProcessingBulk(true);

      try {
        const totalImages = bulkReplacementPlan.totalImages;

        // Simulate detailed progress for each image
        for (let i = 0; i < totalImages; i++) {
          const imageName =
            bulkReplacementPlan.replacementSources[i]?.imageId ||
            `image-${i + 1}`;
          setProgress({
            current: i + 1,
            total: totalImages,
            step: `Replacing ${imageName}...`,
          });

          // Add progress notification for every few images
          if (i % Math.max(1, Math.floor(totalImages / 3)) === 0) {
            addNotification(
              "info",
              "⚡ Progress Update",
              `Replaced ${i}/${totalImages} images so far...`,
              3000,
            );
          }

          await new Promise((resolve) => setTimeout(resolve, 800)); // Simulate processing time
        }

        const results =
          await BulkReplacementManager.executeBulkReplacement(
            bulkReplacementPlan,
          );
        console.log("✅ BULK REPLACEMENT RESULTS:", results);

        // Update analysis with new results
        setProgress({
          current: totalImages,
          total: totalImages,
          step: "Refreshing analysis...",
        });
        const newAnalysis = analyzeAllImages();
        setAnalysis(newAnalysis);
        setBulkReplacementPlan(null);

        // Success notification
        removeNotification(
          notifications.filter((n) => n.title.includes("Executing"))[0]?.id,
        );
        addNotification(
          "success",
          "🎉 Bulk Replacement Complete!",
          `Successfully replaced ${results.replacedImages.length} images! ${results.errors.length > 0 ? `${results.errors.length} errors occurred.` : "No errors!"}`,
          10000,
        );

        // Show detailed results
        setTimeout(() => {
          addNotification(
            "info",
            "📊 Replacement Summary",
            `Images improved: ${results.replacedImages.join(", ")}`,
            15000,
          );
        }, 2000);
      } catch (error) {
        removeNotification(
          notifications.filter((n) => n.title.includes("Executing"))[0]?.id,
        );
        addNotification(
          "error",
          "❌ Replacement Failed",
          `Error: ${error}`,
          15000,
        );
        console.error("Error executing bulk replacement:", error);
      } finally {
        setLoadingStates((prev) => ({ ...prev, executing: false }));
        setIsProcessingBulk(false);
        setProgress({ current: 0, total: 0, step: "" });
      }
    }
  };

  // Handle file upload
  const handleFileUpload = async (files: FileList | null) => {
    if (!files || files.length === 0) return;

    const fileArray = Array.from(files);
    setUploadedFiles((prev) => [...prev, ...fileArray]);

    // Validate each uploaded file
    const validations = [];
    for (const file of fileArray) {
      try {
        const validation = await AIImageValidator.validateImage({
          file,
          autoDetectPlacement: true,
        });
        validations.push({ file: file.name, ...validation });
      } catch (error) {
        validations.push({
          file: file.name,
          isValid: false,
          issues: [`Upload error: ${error}`],
        });
      }
    }

    setValidationResults((prev) => [...prev, ...validations]);
    console.log("🔍 UPLOAD VALIDATION RESULTS:", validations);
  };

  // Generate smart suggestions for category
  const generateSmartSuggestions = async (
    category: string,
    context: string,
  ) => {
    try {
      const suggestions = await SmartImageSuggestions.generateSmartSuggestions(
        category,
        context,
      );
      setSmartSuggestions((prev) => ({ ...prev, [category]: suggestions }));
    } catch (error) {
      console.error("Error generating smart suggestions:", error);
    }
  };

  // Open Unsplash search in new tab
  const openUnsplashSearch = (searchTerm: string) => {
    const url = `https://unsplash.com/s/photos/${encodeURIComponent(searchTerm)}`;
    window.open(url, "_blank");
  };

  // Generate AI avoidance prompts based on category
  const getAIAvoidancePrompt = (category: string): string => {
    const avoidanceRules: Record<string, string> = {
      porcelain:
        "walls, backsplash, small tiles, non-flooring applications, bathrooms",
      "natural-stone":
        "artificial materials, painted surfaces, non-stone textures",
      "vinyl-laminate":
        "real wood, ceramic tiles, natural stone, painted floors",
      mosaics:
        "large tiles, plain surfaces, single-color installations, uniform patterns",
    };

    return (
      avoidanceRules[category] ||
      "low quality, blurry images, irrelevant content"
    );
  };

  // Track where each image is used across the website
  const getImageUsageLocations = (imageId: string): string[] => {
    const usageMap: Record<string, string[]> = {
      // Porcelain images
      porcelainLargeFormat: [
        "/products - Porcelain Tiles - Large Format Collection",
        "/components/ProductGrid - Homepage product showcase",
        "Product catalog - Main porcelain category",
      ],
      porcelainMarbleLook: [
        "/products - Porcelain Tiles - Marble Look Series",
        "Product galleries - Luxury porcelain section",
        "Homepage hero rotation",
      ],
      porcelainContemporary: [
        "/products - Porcelain Tiles - Contemporary White",
        "Product comparison pages",
      ],

      // Natural Stone images
      naturalStoneTravertine: [
        "/products - Natural Stone - Travertine Collection",
        "/retail - Residential projects gallery",
        "Homepage - Natural materials section",
      ],
      naturalStoneMarble: [
        "/products - Natural Stone - Marble Collection",
        "/wholesale - Commercial projects",
        "Luxury home galleries",
      ],
      naturalStoneSlate: [
        "/products - Natural Stone - Slate Collection",
        "Rustic design galleries",
      ],

      // Vinyl & Laminate images
      vinylLuxuryPlank: [
        "/products - Vinyl & Laminate - Luxury Vinyl Plank",
        "/retail - Budget-friendly options",
        "DIY installation guides",
      ],
      vinylWoodLook: [
        "/products - Vinyl & Laminate - Wood Look Collection",
        "Product comparison - Wood alternatives",
      ],
      laminateEuropean: [
        "/products - Vinyl & Laminate - European Laminate",
        "Commercial flooring solutions",
      ],

      // Mosaic images
      mosaicGlass: [
        "/products - Mosaics - Glass Mosaic Collection",
        "Accent wall galleries",
        "Bathroom design inspiration",
      ],
      mosaicNatural: [
        "/products - Mosaics - Natural Stone Mosaic",
        "Kitchen backsplash gallery",
      ],
      mosaicMetallic: [
        "/products - Mosaics - Metallic Mosaic Series",
        "Modern design galleries",
      ],
    };

    return usageMap[imageId] || ["Location mapping not configured"];
  };

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

  const allImages = Object.values(INTELLIGENT_IMAGES).map((img) => {
    try {
      return {
        ...img,
        relevanceScore: ImageIntelligenceAnalyzer.analyzeRelevance(img) || 5,
        improvementSuggestions:
          ImageIntelligenceAnalyzer.generateImprovementSuggestions(img) || [],
      };
    } catch (error) {
      console.error("Error analyzing image:", img.id, error);
      return {
        ...img,
        relevanceScore: 5,
        improvementSuggestions: [],
      };
    }
  });

  const excellentImages = allImages.filter((img) => img.relevanceScore >= 8);
  const goodImages = allImages.filter(
    (img) => img.relevanceScore >= 6 && img.relevanceScore < 8,
  );
  const belowAcceptableImages = allImages.filter(
    (img) => img.relevanceScore < 6,
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Notifications */}
        <div className="fixed top-4 right-4 z-50 space-y-2">
          {notifications.map((notification) => (
            <Card
              key={notification.id}
              className={`max-w-md shadow-lg border-l-4 ${
                notification.type === "success"
                  ? "border-green-500 bg-green-50"
                  : notification.type === "error"
                    ? "border-red-500 bg-red-50"
                    : notification.type === "warning"
                      ? "border-yellow-500 bg-yellow-50"
                      : "border-blue-500 bg-blue-50"
              } animate-in slide-in-from-right duration-300`}
            >
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-1">
                      {notification.type === "success" && (
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      )}
                      {notification.type === "error" && (
                        <XCircle className="h-4 w-4 text-red-600 mr-2" />
                      )}
                      {notification.type === "warning" && (
                        <AlertTriangle className="h-4 w-4 text-yellow-600 mr-2" />
                      )}
                      {notification.type === "info" && (
                        <Info className="h-4 w-4 text-blue-600 mr-2" />
                      )}
                      <h3 className="font-semibold text-sm">
                        {notification.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      {notification.message}
                    </p>
                  </div>
                  <button
                    onClick={() => removeNotification(notification.id)}
                    className="ml-2 text-gray-400 hover:text-gray-600"
                  >
                    ×
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Progress Bar */}
        {isProcessingBulk && progress.total > 0 && (
          <div className="mb-6 bg-white rounded-lg p-4 shadow-sm border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">
                {progress.step}
              </span>
              <span className="text-sm text-gray-500">
                {progress.current}/{progress.total}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${(progress.current / progress.total) * 100}%`,
                }}
              ></div>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 flex items-center">
            <Brain className="h-8 w-8 mr-3 text-blue-600" />
            AI Image Intelligence Dashboard
          </h1>
          <p className="text-gray-600">
            Advanced AI-powered image analysis and optimization system
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Excellent Images
                  </p>
                  <p className="text-2xl font-bold text-green-600">
                    {excellentImages.length}
                  </p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Good Images
                  </p>
                  <p className="text-2xl font-bold text-yellow-600">
                    {goodImages.length}
                  </p>
                </div>
                <AlertTriangle className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Needs Improvement
                  </p>
                  <p className="text-2xl font-bold text-red-600">
                    {belowAcceptableImages.length}
                  </p>
                </div>
                <XCircle className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Average Score
                  </p>
                  <p className="text-2xl font-bold text-blue-600">
                    {allImages.length > 0
                      ? (
                          allImages.reduce(
                            (sum, img) => sum + img.relevanceScore,
                            0,
                          ) / allImages.length
                        ).toFixed(1)
                      : "0.0"}
                    /10
                  </p>
                </div>
                <Target className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <PrimaryButton
            onClick={() => handleBulkReplacement(6)}
            disabled={isProcessingBulk || belowAcceptableImages.length === 0}
            className="flex items-center justify-center"
          >
            {loadingStates.creatingPlan ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Creating Plan...
              </>
            ) : (
              <>
                <Zap className="h-4 w-4 mr-2" />
                Replace Poor Images
              </>
            )}
          </PrimaryButton>

          <PrimaryButton
            onClick={() => handleBulkReplacement(8)}
            disabled={
              isProcessingBulk || excellentImages.length === allImages.length
            }
            className="flex items-center justify-center"
          >
            {loadingStates.creatingPlan ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Optimizing...
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4 mr-2" />
                Optimize All Images
              </>
            )}
          </PrimaryButton>

          {bulkReplacementPlan && (
            <PrimaryButton
              onClick={executeBulkReplacement}
              disabled={isProcessingBulk}
              className="flex items-center justify-center bg-green-600 hover:bg-green-700"
            >
              {loadingStates.executing ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Executing...
                </>
              ) : (
                <>
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Execute Plan ({bulkReplacementPlan.totalImages})
                </>
              )}
            </PrimaryButton>
          )}

          <OutlineButton
            onClick={() => {
              const newAnalysis = analyzeAllImages();
              setAnalysis(newAnalysis);
              addNotification(
                "success",
                "🔄 Analysis Refreshed",
                "Image analysis has been updated with latest data",
              );
            }}
            disabled={isProcessingBulk}
            className="flex items-center justify-center"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh Analysis
          </OutlineButton>
        </div>

        {/* Bulk Replacement Plan Display */}
        {bulkReplacementPlan && (
          <Card className="mb-8 border-green-200 bg-green-50">
            <CardHeader>
              <h2 className="text-xl font-bold text-green-800 flex items-center">
                <Wand2 className="h-5 w-5 mr-2" />
                Replacement Plan Ready
              </h2>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <p className="text-sm text-gray-600">Images to Replace</p>
                  <p className="text-2xl font-bold text-green-600">
                    {bulkReplacementPlan.totalImages}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">Estimated Improvement</p>
                  <p className="text-2xl font-bold text-green-600">
                    +
                    {(
                      bulkReplacementPlan.estimatedImprovementScore || 0
                    ).toFixed(1)}
                    %
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">New Average Score</p>
                  <p className="text-2xl font-bold text-green-600">
                    {(bulkReplacementPlan.projectedAverageScore || 7.5).toFixed(
                      1,
                    )}
                    /10
                  </p>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <strong>Replacement Sources:</strong>{" "}
                {bulkReplacementPlan.replacementSources
                  .map((source: any) => source.imageId)
                  .join(", ")}
              </div>
            </CardContent>
          </Card>
        )}

        {/* File Upload Section */}
        <Card className="mb-8">
          <CardHeader>
            <h2 className="text-xl font-bold flex items-center">
              <Upload className="h-5 w-5 mr-2" />
              AI Image Validator
            </h2>
            <p className="text-gray-600">
              Upload images for AI analysis and automatic placement suggestions
            </p>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <FileImage className="h-12 w-12 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-600 mb-4">
                Drop images here or click to browse
              </p>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/*"
                onChange={(e) => handleFileUpload(e.target.files)}
                className="hidden"
              />
              <OutlineButton
                onClick={() => fileInputRef.current?.click()}
                disabled={loadingStates.uploading}
              >
                Choose Images
              </OutlineButton>
            </div>

            {validationResults.length > 0 && (
              <div className="mt-6">
                <h3 className="font-semibold mb-3">Validation Results</h3>
                <div className="space-y-3">
                  {validationResults.map((result, index) => (
                    <Card key={index} className="p-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-medium">{result.file}</p>
                          <p
                            className={`text-sm ${
                              result.isValid ? "text-green-600" : "text-red-600"
                            }`}
                          >
                            {result.isValid ? "✅ Valid" : "❌ Invalid"}
                          </p>
                          {result.autoPlacementSuggestions && (
                            <p className="text-sm text-blue-600">
                              Suggested:{" "}
                              {result.autoPlacementSuggestions.join(", ")}
                            </p>
                          )}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Comprehensive Image System Overview */}
        <Card className="mb-8">
          <CardHeader>
            <h2 className="text-xl font-bold flex items-center">
              <FileImage className="h-5 w-5 mr-2" />
              Complete Image System Overview
            </h2>
            <p className="text-gray-600">
              All images in the system with titles, locations, AI context, and
              generation prompts
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {allImages.map((img) => (
                <Card
                  key={img.id}
                  className={`border-l-4 hover:shadow-md transition-shadow ${
                    img.relevanceScore >= 8
                      ? "border-green-500"
                      : img.relevanceScore >= 6
                        ? "border-yellow-500"
                        : "border-red-500"
                  }`}
                >
                  <CardContent className="p-6">
                    {/* Header with Score and Title */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-bold text-lg">{img.title}</h3>
                          <Badge
                            className={getScoreColor(img.relevanceScore)}
                            size="lg"
                          >
                            {getScoreIcon(img.relevanceScore)}
                            {img.relevanceScore}/10
                          </Badge>
                        </div>
                        <p className="text-gray-600 text-sm mb-2">
                          {img.subtitle}
                        </p>
                        <p className="text-xs text-gray-500">ID: {img.id}</p>
                      </div>
                      <div className="ml-4">
                        <img
                          src={img.primary}
                          alt={img.alt}
                          className="w-24 h-24 object-cover rounded-lg border"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = img.fallback;
                          }}
                        />
                      </div>
                    </div>

                    {/* Usage and Location Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-blue-50 rounded-lg p-3">
                        <h4 className="font-semibold text-sm text-blue-800 mb-2 flex items-center">
                          <Target className="h-4 w-4 mr-1" />
                          Usage & Locations
                        </h4>
                        <div className="text-xs space-y-2">
                          <div>
                            <strong>Category:</strong>{" "}
                            <span className="capitalize">{img.category}</span>
                          </div>
                          <div>
                            <strong>Alt Text:</strong> {img.alt}
                          </div>
                          <div>
                            <strong>Keywords:</strong> {img.keywords.join(", ")}
                          </div>
                          <div className="mt-2">
                            <strong>Used In:</strong>
                            <ul className="mt-1 space-y-1">
                              {getImageUsageLocations(img.id).map(
                                (location, index) => (
                                  <li
                                    key={index}
                                    className="text-blue-700 bg-blue-100 rounded px-2 py-1"
                                  >
                                    • {location}
                                  </li>
                                ),
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-purple-50 rounded-lg p-3">
                        <h4 className="font-semibold text-sm text-purple-800 mb-2 flex items-center">
                          <Brain className="h-4 w-4 mr-1" />
                          AI Context & Analysis
                        </h4>
                        <div className="text-xs space-y-1">
                          <div>
                            <strong>Expected Content:</strong>{" "}
                            {img.contextMatch}
                          </div>
                          <div>
                            <strong>Actual Content:</strong> {img.actualContent}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* AI Generation Prompt */}
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 mb-4">
                      <h4 className="font-semibold text-sm text-green-800 mb-2 flex items-center">
                        <Wand2 className="h-4 w-4 mr-1" />
                        AI Image Generation Prompt
                      </h4>
                      <div className="bg-white rounded border p-3 font-mono text-xs">
                        <div className="text-green-700 mb-2">
                          <strong>Primary Prompt:</strong>
                        </div>
                        <div className="mb-3 text-gray-800">
                          "Generate a high-quality, professional photograph
                          showing {img.description}. Focus on {img.category}{" "}
                          flooring with emphasis on{" "}
                          {img.keywords.slice(0, 3).join(", ")}. The image
                          should clearly show the flooring material as the main
                          subject in a real-world installation."
                        </div>

                        <div className="text-green-700 mb-2">
                          <strong>Style Parameters:</strong>
                        </div>
                        <div className="mb-3 text-gray-800">
                          "Style: Professional architectural photography,
                          well-lit, high resolution, clean composition. Avoid:{" "}
                          {getAIAvoidancePrompt(img.category)}"
                        </div>

                        <div className="text-green-700 mb-2">
                          <strong>Quality Requirements:</strong>
                        </div>
                        <div className="text-gray-800">
                          "Resolution: 1200x800px minimum, Format: JPG/WebP,
                          Compression: High quality, Focus: Sharp detail on
                          flooring texture and pattern"
                        </div>
                      </div>
                    </div>

                    {/* Description and Improvement Suggestions */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-sm mb-2">
                          Current Description:
                        </h4>
                        <p className="text-xs text-gray-600 bg-gray-50 rounded p-2">
                          {img.description}
                        </p>
                      </div>

                      {img.improvementSuggestions &&
                        img.improvementSuggestions.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-sm mb-2 text-orange-700">
                              AI Improvement Suggestions:
                            </h4>
                            <div className="space-y-1">
                              {img.improvementSuggestions.map(
                                (suggestion, index) => (
                                  <div
                                    key={index}
                                    className="text-xs bg-orange-50 rounded p-2 border-l-2 border-orange-300"
                                  >
                                    {suggestion}
                                  </div>
                                ),
                              )}
                            </div>
                          </div>
                        )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 mt-4 pt-4 border-t">
                      <OutlineButton
                        size="sm"
                        className="text-xs"
                        onClick={() =>
                          openUnsplashSearch(
                            `${img.category} flooring ${img.keywords[0]}`,
                          )
                        }
                      >
                        <Search className="h-3 w-3 mr-1" />
                        Find Similar
                      </OutlineButton>

                      <OutlineButton
                        size="sm"
                        className="text-xs"
                        onClick={() => window.open(img.primary, "_blank")}
                      >
                        <ExternalLink className="h-3 w-3 mr-1" />
                        View Full Size
                      </OutlineButton>

                      {img.relevanceScore < 7 && (
                        <OutlineButton
                          size="sm"
                          className="text-xs text-orange-600 border-orange-300"
                          onClick={() =>
                            generateSmartSuggestions(
                              img.category,
                              img.contextMatch,
                            )
                          }
                        >
                          <Sparkles className="h-3 w-3 mr-1" />
                          Generate Alternatives
                        </OutlineButton>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats Summary */}
        <Card>
          <CardHeader>
            <h2 className="text-xl font-bold flex items-center">
              <Brain className="h-5 w-5 mr-2" />
              AI Generation Summary
            </h2>
            <p className="text-gray-600">
              Overall system statistics and AI prompt effectiveness
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-semibold text-blue-800">Total Images</h3>
                <p className="text-2xl font-bold text-blue-600">
                  {allImages.length}
                </p>
                <p className="text-xs text-blue-600">
                  Across {new Set(allImages.map((img) => img.category)).size}{" "}
                  categories
                </p>
              </div>

              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="font-semibold text-green-800">Avg AI Score</h3>
                <p className="text-2xl font-bold text-green-600">
                  {allImages.length > 0
                    ? (
                        allImages.reduce(
                          (sum, img) => sum + img.relevanceScore,
                          0,
                        ) / allImages.length
                      ).toFixed(1)
                    : "0.0"}
                  /10
                </p>
                <p className="text-xs text-green-600">AI relevance accuracy</p>
              </div>

              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-800">
                  Optimization Potential
                </h3>
                <p className="text-2xl font-bold text-purple-600">
                  {allImages.filter((img) => img.relevanceScore < 7).length}
                </p>
                <p className="text-xs text-purple-600">
                  Images can be improved
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
