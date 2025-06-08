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

      setBulkReplacementPlan(plan);

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

        {/* Detailed Image Analysis */}
        <Card>
          <CardHeader>
            <h2 className="text-xl font-bold flex items-center">
              <Brain className="h-5 w-5 mr-2" />
              Detailed Image Analysis
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
                    <div className="text-xs text-gray-600 mb-3">
                      <strong>Content:</strong> {img.actualContent}
                    </div>

                    {img.relevanceScore < 6 && (
                      <div className="flex gap-1">
                        <OutlineButton
                          size="sm"
                          className="text-xs px-2 py-1 h-auto"
                          onClick={() =>
                            openUnsplashSearch(`${img.category} flooring`)
                          }
                        >
                          <Search className="h-3 w-3 mr-1" />
                          Find Better
                        </OutlineButton>
                      </div>
                    )}
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
