import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PrimaryButton, OutlineButton } from "@/components/ui/custom-buttons";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  INTELLIGENT_IMAGES,
  analyzeAllImages,
  ImageIntelligenceAnalyzer,
} from "@/utils/intelligentImages";
import {
  BulkReplacementManager,
  AIImageValidator,
  SmartImageSuggestions,
} from "@/utils/advancedImageManager";
import {
  WebsiteImageScanner,
  ImageSystemIntegrator,
  type ScannedImageAsset,
  type ImageScanResult,
} from "@/utils/websiteImageScanner";
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
  ExternalLink,
  FileImage,
  Sparkles,
  Wand2,
  Loader2,
  Info,
  Clock,
  ChevronLeft,
  ChevronRight,
  Filter,
  Grid3X3,
  List,
  Eye,
  EyeOff,
  Plus,
  Download,
  BarChart3,
  Globe,
  Settings,
} from "lucide-react";
import { ImageSystemResetPanel } from "@/components/ImageSystemResetPanel";

// Enhanced interface for image display
interface EnhancedImageData {
  id: string;
  title: string;
  subtitle: string;
  primary: string;
  fallback: string;
  alt: string;
  category: string;
  description: string;
  keywords: string[];
  relevanceScore: number;
  contextMatch: string;
  actualContent: string;
  improvementSuggestions: string[];
  isManaged: boolean;
  location: string;
  component: string;
  purpose: string;
  type: "intelligent" | "scanned";
}

export const EnhancedImageIntelligenceDashboard: React.FC = () => {
  // State management
  const [analysis, setAnalysis] = useState<any>(null);
  const [websiteScan, setWebsiteScan] = useState<ImageScanResult | null>(null);
  const [allEnhancedImages, setAllEnhancedImages] = useState<
    EnhancedImageData[]
  >([]);
  const [filteredImages, setFilteredImages] = useState<EnhancedImageData[]>([]);
  const [bulkReplacementPlan, setBulkReplacementPlan] = useState<any>(null);
  const [isProcessingBulk, setIsProcessingBulk] = useState(false);
  const [notifications, setNotifications] = useState<any[]>([]);
  const [loadingStates, setLoadingStates] = useState({
    analyzing: false,
    scanning: false,
    creatingPlan: false,
    executing: false,
  });
  const [progress, setProgress] = useState({ current: 0, total: 0, step: "" });

  // UI State
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("overview");

  // Refs
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Notification helpers
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

  const removeNotification = (id: number) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  // Initialize dashboard
  useEffect(() => {
    initializeDashboard();
  }, []);

  // Filter images based on current filters
  useEffect(() => {
    filterImages();
  }, [allEnhancedImages, selectedCategory, selectedStatus, searchTerm]);

  // Initialize dashboard with comprehensive scan
  const initializeDashboard = async () => {
    setLoadingStates((prev) => ({ ...prev, analyzing: true, scanning: true }));

    try {
      // Analyze existing intelligent images
      const intelligentAnalysis = analyzeAllImages();
      setAnalysis(intelligentAnalysis);

      // Scan entire website for images
      const scanResult = await WebsiteImageScanner.scanWebsiteImages();
      setWebsiteScan(scanResult);

      // Combine intelligent images with scanned images
      const combinedImages = await combineAllImages(scanResult);
      setAllEnhancedImages(combinedImages);

      addNotification(
        "success",
        "🔍 Website Scan Complete",
        `Found ${scanResult.totalImages} images across the website. ${scanResult.managedImages} managed by AI system.`,
      );
    } catch (error) {
      addNotification("error", "❌ Initialization Failed", `Error: ${error}`);
    } finally {
      setLoadingStates((prev) => ({
        ...prev,
        analyzing: false,
        scanning: false,
      }));
    }
  };

  // Combine intelligent images with scanned website images
  const combineAllImages = async (
    scanResult: ImageScanResult,
  ): Promise<EnhancedImageData[]> => {
    const combined: EnhancedImageData[] = [];

    // Add intelligent images
    Object.values(INTELLIGENT_IMAGES).forEach((img) => {
      const enhancedImg: EnhancedImageData = {
        ...img,
        relevanceScore: ImageIntelligenceAnalyzer.analyzeRelevance(img),
        improvementSuggestions:
          ImageIntelligenceAnalyzer.generateImprovementSuggestions(img),
        isManaged: true,
        location: getImageUsageLocation(img.id),
        component: getImageComponent(img.id),
        purpose: `Product showcase - ${img.title}`,
        type: "intelligent",
      };
      combined.push(enhancedImg);
    });

    // Add scanned unmanaged images
    scanResult.missingFromAI.forEach((scannedImg) => {
      const intelligentFormat =
        ImageSystemIntegrator.convertToIntelligentImage(scannedImg);
      const enhancedImg: EnhancedImageData = {
        ...intelligentFormat,
        isManaged: false,
        location: scannedImg.location,
        component: scannedImg.component,
        purpose: scannedImg.purpose,
        type: "scanned",
      };
      combined.push(enhancedImg);
    });

    return combined;
  };

  // Filter images based on current criteria
  const filterImages = () => {
    let filtered = [...allEnhancedImages];

    // Category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter((img) => img.category === selectedCategory);
    }

    // Status filter
    if (selectedStatus !== "all") {
      if (selectedStatus === "managed") {
        filtered = filtered.filter((img) => img.isManaged);
      } else if (selectedStatus === "unmanaged") {
        filtered = filtered.filter((img) => !img.isManaged);
      } else if (selectedStatus === "excellent") {
        filtered = filtered.filter((img) => img.relevanceScore >= 8);
      } else if (selectedStatus === "poor") {
        filtered = filtered.filter((img) => img.relevanceScore < 6);
      }
    }

    // Search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (img) =>
          img.title.toLowerCase().includes(term) ||
          img.description.toLowerCase().includes(term) ||
          img.keywords.some((k) => k.toLowerCase().includes(term)) ||
          img.location.toLowerCase().includes(term),
      );
    }

    setFilteredImages(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  };

  // Pagination helpers
  const totalPages = Math.ceil(filteredImages.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedImages = filteredImages.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  // Get unique categories for filter
  const categories = Array.from(
    new Set(allEnhancedImages.map((img) => img.category)),
  );

  // Utility functions
  const getScoreColor = (score: number) => {
    if (score >= 8) return "bg-green-100 text-green-800 border-green-300";
    if (score >= 6) return "bg-yellow-100 text-yellow-800 border-yellow-300";
    if (score >= 4) return "bg-orange-100 text-orange-800 border-orange-300";
    return "bg-red-100 text-red-800 border-red-300";
  };

  const getScoreIcon = (score: number) => {
    if (score >= 8) return <CheckCircle className="h-4 w-4 text-green-600" />;
    if (score >= 6)
      return <AlertTriangle className="h-4 w-4 text-yellow-600" />;
    return <XCircle className="h-4 w-4 text-red-600" />;
  };

  const getImageUsageLocation = (imageId: string): string => {
    const locationMap: Record<string, string> = {
      porcelainLargeFormat: "/products",
      porcelainMarbleLook: "/products",
      naturalStoneTravertine: "/products",
      vinylLuxuryPlank: "/products",
    };
    return locationMap[imageId] || "/unknown";
  };

  const getImageComponent = (imageId: string): string => {
    return "Products.tsx"; // Simplified for this example
  };

  const toggleCardExpansion = (imageId: string) => {
    setExpandedCard(expandedCard === imageId ? null : imageId);
  };

  // Handle bulk operations
  const handleBulkReplacement = async (minScore: number = 6) => {
    addNotification(
      "info",
      "🚀 Creating Replacement Plan",
      `Analyzing images scoring ≤${minScore}/10...`,
      0,
    );
    setLoadingStates((prev) => ({ ...prev, creatingPlan: true }));
    setIsProcessingBulk(true);

    try {
      const plan = await BulkReplacementManager.createReplacementPlan(minScore);
      const safePlan = {
        totalImages: plan.totalImages || 0,
        poorPerformers: plan.poorPerformers || [],
        replacementSources: plan.replacementSources || [],
        estimatedImprovementScore: plan.estimatedImprovementScore || 0,
        projectedAverageScore: plan.projectedAverageScore || 7.5,
      };

      setBulkReplacementPlan(safePlan);
      removeNotification(notifications[notifications.length - 1]?.id);
      addNotification(
        "success",
        "✅ Replacement Plan Ready!",
        `Found ${safePlan.totalImages} images to improve. Estimated +${(safePlan.estimatedImprovementScore || 0).toFixed(1)}% quality boost!`,
        8000,
      );
    } catch (error) {
      addNotification(
        "error",
        "❌ Plan Creation Failed",
        `Error: ${error}`,
        10000,
      );
    } finally {
      setLoadingStates((prev) => ({ ...prev, creatingPlan: false }));
      setIsProcessingBulk(false);
    }
  };

  // Add unmanaged image to AI system
  const addToAISystem = async (image: EnhancedImageData) => {
    try {
      addNotification(
        "info",
        "➕ Adding to AI System",
        `Processing ${image.title}...`,
      );

      // Here you would integrate with the actual AI system
      // For now, we'll simulate the process
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Update the image to be managed
      const updatedImages = allEnhancedImages.map((img) =>
        img.id === image.id
          ? { ...img, isManaged: true, type: "intelligent" as const }
          : img,
      );
      setAllEnhancedImages(updatedImages);

      addNotification(
        "success",
        "✅ Added to AI System",
        `${image.title} is now managed by AI intelligence system`,
      );
    } catch (error) {
      addNotification("error", "❌ Addition Failed", `Error: ${error}`);
    }
  };

  if (loadingStates.analyzing || loadingStates.scanning) {
    return (
      <div className="p-6 bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto text-center">
          <Brain className="h-12 w-12 mx-auto mb-4 text-blue-600 animate-pulse" />
          <h1 className="text-2xl font-bold mb-2">
            Scanning Website & Analyzing Images...
          </h1>
          <p className="text-gray-600">
            {loadingStates.scanning &&
              "Detecting all image assets across the website..."}
            {loadingStates.analyzing &&
              "Running AI analysis on discovered images..."}
          </p>
        </div>
      </div>
    );
  }

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

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 flex items-center">
            <Brain className="h-8 w-8 mr-3 text-blue-600" />
            Enhanced AI Image Intelligence Dashboard
          </h1>
          <p className="text-gray-600 mb-4">
            Comprehensive website image analysis with AI-powered optimization
            and management
          </p>
        </div>

        {/* Main Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="images" className="flex items-center gap-2">
              <FileImage className="h-4 w-4" />
              All Images ({allEnhancedImages.length})
            </TabsTrigger>
            <TabsTrigger
              value="website-scan"
              className="flex items-center gap-2"
            >
              <Globe className="h-4 w-4" />
              Website Scan
            </TabsTrigger>
            <TabsTrigger value="bulk-ops" className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              Bulk Operations
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        Total Images
                      </p>
                      <p className="text-2xl font-bold text-blue-600">
                        {allEnhancedImages.length}
                      </p>
                    </div>
                    <FileImage className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        AI Managed
                      </p>
                      <p className="text-2xl font-bold text-green-600">
                        {
                          allEnhancedImages.filter((img) => img.isManaged)
                            .length
                        }
                      </p>
                    </div>
                    <Brain className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        Unmanaged
                      </p>
                      <p className="text-2xl font-bold text-orange-600">
                        {
                          allEnhancedImages.filter((img) => !img.isManaged)
                            .length
                        }
                      </p>
                    </div>
                    <AlertTriangle className="h-8 w-8 text-orange-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        Avg Score
                      </p>
                      <p className="text-2xl font-bold text-purple-600">
                        {allEnhancedImages.length > 0
                          ? (
                              allEnhancedImages.reduce(
                                (sum, img) => sum + img.relevanceScore,
                                0,
                              ) / allEnhancedImages.length
                            ).toFixed(1)
                          : "0.0"}
                        /10
                      </p>
                    </div>
                    <Target className="h-8 w-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Website Scan Summary */}
            {websiteScan && (
              <Card>
                <CardHeader>
                  <h2 className="text-xl font-bold flex items-center">
                    <Globe className="h-5 w-5 mr-2" />
                    Website Scan Results
                  </h2>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <p className="text-sm text-gray-600">Images by Type</p>
                      <div className="text-xs space-y-1 mt-2">
                        {Object.entries(websiteScan.imagesByType).map(
                          ([type, count]) => (
                            <div key={type} className="flex justify-between">
                              <span className="capitalize">{type}:</span>
                              <span className="font-semibold">{count}</span>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-600">
                        Images by Location
                      </p>
                      <div className="text-xs space-y-1 mt-2">
                        {Object.entries(websiteScan.imagesByLocation).map(
                          ([location, images]) => (
                            <div
                              key={location}
                              className="flex justify-between"
                            >
                              <span>{location}:</span>
                              <span className="font-semibold">
                                {images.length}
                              </span>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-600">Recommendations</p>
                      <p className="text-2xl font-bold text-blue-600">
                        {websiteScan.recommendations.length}
                      </p>
                      <p className="text-xs text-blue-600">
                        Action items identified
                      </p>
                    </div>
                  </div>

                  {/* Recommendations */}
                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm">
                      AI Recommendations:
                    </h3>
                    {websiteScan.recommendations.map((rec, index) => (
                      <div
                        key={index}
                        className="text-xs bg-blue-50 rounded p-2 border-l-2 border-blue-300"
                      >
                        {rec}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* All Images Tab */}
          <TabsContent value="images" className="space-y-6">
            {/* Filters and Controls */}
            <Card>
              <CardContent className="p-4">
                <div className="flex flex-wrap items-center gap-4">
                  {/* Search */}
                  <div className="flex-1 min-w-64">
                    <Input
                      placeholder="Search images by title, description, keywords..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full"
                    />
                  </div>

                  {/* Category Filter */}
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="all">All Categories</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </option>
                    ))}
                  </select>

                  {/* Status Filter */}
                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="all">All Status</option>
                    <option value="managed">AI Managed</option>
                    <option value="unmanaged">Unmanaged</option>
                    <option value="excellent">Excellent (8-10)</option>
                    <option value="poor">Poor (&lt;6)</option>
                  </select>

                  {/* View Mode */}
                  <div className="flex border border-gray-300 rounded-md">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-2 ${viewMode === "grid" ? "bg-blue-500 text-white" : "text-gray-600"}`}
                    >
                      <Grid3X3 className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-2 ${viewMode === "list" ? "bg-blue-500 text-white" : "text-gray-600"}`}
                    >
                      <List className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Items Per Page */}
                  <select
                    value={itemsPerPage}
                    onChange={(e) => setItemsPerPage(Number(e.target.value))}
                    className="px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value={6}>6 per page</option>
                    <option value={12}>12 per page</option>
                    <option value={24}>24 per page</option>
                    <option value={48}>48 per page</option>
                  </select>
                </div>

                {/* Results Summary */}
                <div className="mt-4 text-sm text-gray-600">
                  Showing {startIndex + 1}-
                  {Math.min(startIndex + itemsPerPage, filteredImages.length)}{" "}
                  of {filteredImages.length} images
                  {selectedCategory !== "all" &&
                    ` in category "${selectedCategory}"`}
                  {selectedStatus !== "all" &&
                    ` with status "${selectedStatus}"`}
                  {searchTerm && ` matching "${searchTerm}"`}
                </div>
              </CardContent>
            </Card>

            {/* Image Display */}
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                  : "space-y-4"
              }
            >
              {paginatedImages.map((img) => (
                <Card
                  key={img.id}
                  className={`${
                    viewMode === "list" ? "flex" : ""
                  } hover:shadow-lg transition-shadow cursor-pointer ${
                    !img.isManaged ? "border-orange-200 bg-orange-50" : ""
                  }`}
                  onClick={() => toggleCardExpansion(img.id)}
                >
                  {viewMode === "grid" ? (
                    <CardContent className="p-4">
                      {/* Image Thumbnail */}
                      <div className="relative mb-3">
                        <img
                          src={img.primary}
                          alt={img.alt}
                          className="w-full h-32 object-cover rounded-lg"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = img.fallback;
                          }}
                        />
                        <div className="absolute top-2 right-2 flex gap-1">
                          <Badge
                            className={getScoreColor(img.relevanceScore)}
                            size="sm"
                          >
                            {getScoreIcon(img.relevanceScore)}
                            {img.relevanceScore}/10
                          </Badge>
                          {!img.isManaged && (
                            <Badge
                              variant="secondary"
                              className="bg-orange-100 text-orange-800"
                            >
                              Unmanaged
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Basic Info */}
                      <div className="space-y-2">
                        <h3 className="font-semibold text-sm line-clamp-2">
                          {img.title}
                        </h3>
                        <p className="text-xs text-gray-600 line-clamp-2">
                          {img.subtitle}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs bg-gray-100 px-2 py-1 rounded capitalize">
                            {img.category}
                          </span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleCardExpansion(img.id);
                            }}
                            className="text-blue-600 hover:text-blue-800"
                          >
                            {expandedCard === img.id ? (
                              <EyeOff className="h-4 w-4" />
                            ) : (
                              <Eye className="h-4 w-4" />
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Expanded Details */}
                      {expandedCard === img.id && (
                        <div className="mt-4 pt-4 border-t space-y-3">
                          <div>
                            <h4 className="font-semibold text-xs mb-1">
                              Location & Usage:
                            </h4>
                            <p className="text-xs text-gray-600">
                              {img.location} ({img.component})
                            </p>
                            <p className="text-xs text-gray-600">
                              {img.purpose}
                            </p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-xs mb-1">
                              Keywords:
                            </h4>
                            <div className="flex flex-wrap gap-1">
                              {img.keywords
                                .slice(0, 5)
                                .map((keyword, index) => (
                                  <span
                                    key={index}
                                    className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded"
                                  >
                                    {keyword}
                                  </span>
                                ))}
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <OutlineButton
                              size="sm"
                              className="text-xs"
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(img.primary, "_blank");
                              }}
                            >
                              <ExternalLink className="h-3 w-3 mr-1" />
                              View
                            </OutlineButton>

                            {!img.isManaged && (
                              <PrimaryButton
                                size="sm"
                                className="text-xs"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  addToAISystem(img);
                                }}
                              >
                                <Plus className="h-3 w-3 mr-1" />
                                Add to AI
                              </PrimaryButton>
                            )}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  ) : (
                    // List View
                    <CardContent className="p-4 flex items-center space-x-4 w-full">
                      <img
                        src={img.primary}
                        alt={img.alt}
                        className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = img.fallback;
                        }}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-sm truncate">
                            {img.title}
                          </h3>
                          <Badge
                            className={getScoreColor(img.relevanceScore)}
                            size="sm"
                          >
                            {img.relevanceScore}/10
                          </Badge>
                          {!img.isManaged && (
                            <Badge
                              variant="secondary"
                              className="bg-orange-100 text-orange-800"
                            >
                              Unmanaged
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-gray-600 truncate">
                          {img.purpose}
                        </p>
                        <p className="text-xs text-gray-500">
                          {img.location} • {img.category}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <OutlineButton
                          size="sm"
                          className="text-xs"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(img.primary, "_blank");
                          }}
                        >
                          <ExternalLink className="h-3 w-3" />
                        </OutlineButton>

                        {!img.isManaged && (
                          <PrimaryButton
                            size="sm"
                            className="text-xs"
                            onClick={(e) => {
                              e.stopPropagation();
                              addToAISystem(img);
                            }}
                          >
                            <Plus className="h-3 w-3" />
                          </PrimaryButton>
                        )}
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      Page {currentPage} of {totalPages}
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() =>
                          setCurrentPage(Math.max(1, currentPage - 1))
                        }
                        disabled={currentPage === 1}
                        className="p-2 border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>

                      {/* Page Numbers */}
                      {Array.from(
                        { length: Math.min(5, totalPages) },
                        (_, i) => {
                          const pageNum =
                            Math.max(
                              1,
                              Math.min(totalPages - 4, currentPage - 2),
                            ) + i;
                          return (
                            <button
                              key={pageNum}
                              onClick={() => setCurrentPage(pageNum)}
                              className={`px-3 py-1 border rounded-md ${
                                currentPage === pageNum
                                  ? "bg-blue-500 text-white border-blue-500"
                                  : "border-gray-300 hover:bg-gray-50"
                              }`}
                            >
                              {pageNum}
                            </button>
                          );
                        },
                      )}

                      <button
                        onClick={() =>
                          setCurrentPage(Math.min(totalPages, currentPage + 1))
                        }
                        disabled={currentPage === totalPages}
                        className="p-2 border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Website Scan Tab */}
          <TabsContent value="website-scan" className="space-y-6">
            {websiteScan && (
              <>
                <Card>
                  <CardHeader>
                    <h2 className="text-xl font-bold">
                      Comprehensive Website Image Analysis
                    </h2>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <h3 className="font-semibold text-blue-800">
                          Total Found
                        </h3>
                        <p className="text-2xl font-bold text-blue-600">
                          {websiteScan.totalImages}
                        </p>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <h3 className="font-semibold text-green-800">
                          AI Managed
                        </h3>
                        <p className="text-2xl font-bold text-green-600">
                          {websiteScan.managedImages}
                        </p>
                      </div>
                      <div className="text-center p-4 bg-orange-50 rounded-lg">
                        <h3 className="font-semibold text-orange-800">
                          Unmanaged
                        </h3>
                        <p className="text-2xl font-bold text-orange-600">
                          {websiteScan.unmanagedImages}
                        </p>
                      </div>
                      <div className="text-center p-4 bg-red-50 rounded-lg">
                        <h3 className="font-semibold text-red-800">Issues</h3>
                        <p className="text-2xl font-bold text-red-600">
                          {websiteScan.brokenImages}
                        </p>
                      </div>
                    </div>

                    {/* Images by Location */}
                    <div className="space-y-4">
                      <h3 className="font-semibold">
                        Images by Website Location:
                      </h3>
                      {Object.entries(websiteScan.imagesByLocation).map(
                        ([location, images]) => (
                          <Card
                            key={location}
                            className="border-l-4 border-blue-500"
                          >
                            <CardContent className="p-4">
                              <h4 className="font-semibold mb-2">
                                {location} ({images.length} images)
                              </h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {images.slice(0, 4).map((img) => (
                                  <div
                                    key={img.id}
                                    className="flex items-center space-x-3 text-sm"
                                  >
                                    <div className="w-12 h-12 bg-gray-200 rounded flex-shrink-0 flex items-center justify-center">
                                      <FileImage className="h-6 w-6 text-gray-400" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <p className="font-medium truncate">
                                        {img.purpose}
                                      </p>
                                      <p className="text-xs text-gray-500 truncate">
                                        {img.component}
                                      </p>
                                      <div className="flex items-center gap-2 mt-1">
                                        <span
                                          className={`text-xs px-2 py-1 rounded ${
                                            img.isManaged
                                              ? "bg-green-100 text-green-800"
                                              : "bg-orange-100 text-orange-800"
                                          }`}
                                        >
                                          {img.isManaged
                                            ? "Managed"
                                            : "Unmanaged"}
                                        </span>
                                        <span className="text-xs bg-gray-100 px-2 py-1 rounded capitalize">
                                          {img.type}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                                {images.length > 4 && (
                                  <div className="text-sm text-gray-500 italic">
                                    +{images.length - 4} more images...
                                  </div>
                                )}
                              </div>
                            </CardContent>
                          </Card>
                        ),
                      )}
                    </div>
                  </CardContent>
                </Card>
              </>
            )}
          </TabsContent>

          {/* Bulk Operations Tab */}
          <TabsContent value="bulk-ops" className="space-y-6">
            <Card>
              <CardHeader>
                <h2 className="text-xl font-bold">Bulk Image Operations</h2>
                <p className="text-gray-600">
                  Automated AI-powered image optimization and management
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <PrimaryButton
                    onClick={() => handleBulkReplacement(6)}
                    disabled={isProcessingBulk}
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

                  <OutlineButton
                    onClick={initializeDashboard}
                    disabled={loadingStates.scanning}
                    className="flex items-center justify-center"
                  >
                    {loadingStates.scanning ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Scanning...
                      </>
                    ) : (
                      <>
                        <RefreshCw className="h-4 w-4 mr-2" />
                        Refresh Scan
                      </>
                    )}
                  </OutlineButton>
                </div>

                {/* Bulk Replacement Plan Display */}
                {bulkReplacementPlan && (
                  <Card className="mt-6 border-green-200 bg-green-50">
                    <CardHeader>
                      <h3 className="text-lg font-bold text-green-800 flex items-center">
                        <Wand2 className="h-5 w-5 mr-2" />
                        Replacement Plan Ready
                      </h3>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center">
                          <p className="text-sm text-gray-600">
                            Images to Replace
                          </p>
                          <p className="text-2xl font-bold text-green-600">
                            {bulkReplacementPlan.totalImages}
                          </p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-gray-600">
                            Estimated Improvement
                          </p>
                          <p className="text-2xl font-bold text-green-600">
                            +
                            {(
                              bulkReplacementPlan.estimatedImprovementScore || 0
                            ).toFixed(1)}
                            %
                          </p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-gray-600">
                            New Average Score
                          </p>
                          <p className="text-2xl font-bold text-green-600">
                            {(
                              bulkReplacementPlan.projectedAverageScore || 7.5
                            ).toFixed(1)}
                            /10
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
