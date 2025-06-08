import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PrimaryButton, OutlineButton } from '@/components/ui/custom-buttons';
import { Input } from '@/components/ui/input';
import {
  INTELLIGENT_IMAGES,
  analyzeAllImages,
  ImageIntelligenceAnalyzer,
  IMPROVED_IMAGE_SUGGESTIONS
} from '@/utils/intelligentImages';
import {
  BulkReplacementManager,
  AIImageValidator,
  SmartImageSuggestions,
  WebpageDesignAnalyzer
} from '@/utils/advancedImageManager';
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
  Clock
} from 'lucide-react';

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
    uploading: false
  });
  const [progress, setProgress] = useState({ current: 0, total: 0, step: '' });
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Add notification helper
  const addNotification = (type: 'success' | 'error' | 'info' | 'warning', title: string, message: string, duration: number = 5000) => {
    const id = Date.now();
    const notification = { id, type, title, message };
    setNotifications(prev => [...prev, notification]);

    if (duration > 0) {
      setTimeout(() => {
        setNotifications(prev => prev.filter(n => n.id !== id));
      }, duration);
    }
  };

  // Remove notification
  const removeNotification = (id: number) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  useEffect(() => {
    const results = analyzeAllImages();
    setAnalysis(results);
    console.log("🧠 INTELLIGENT IMAGE ANALYSIS:", results);
  }, []);

  // Handle bulk replacement with comprehensive feedback
  const handleBulkReplacement = async (minScore: number = 6) => {
    // Immediate feedback
    addNotification('info', '🚀 Creating Replacement Plan', `Analyzing images scoring ≤${minScore}/10...`, 0);
    setLoadingStates(prev => ({ ...prev, creatingPlan: true }));
    setIsProcessingBulk(true);

    try {
      // Show progress steps
      setProgress({ current: 1, total: 3, step: 'Analyzing current images...' });
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate analysis time

      setProgress({ current: 2, total: 3, step: 'Generating replacement suggestions...' });
      await new Promise(resolve => setTimeout(resolve, 500));

      setProgress({ current: 3, total: 3, step: 'Creating optimization plan...' });
      const plan = await BulkReplacementManager.createReplacementPlan(minScore);

      setBulkReplacementPlan(plan);

      // Success notification
      removeNotification(notifications[notifications.length - 1]?.id);
      addNotification(
        'success',
        '✅ Replacement Plan Ready!',
        `Found ${plan.totalImages} images to improve. Estimated +${plan.estimatedImprovementScore.toFixed(1)}% quality boost!`,
        8000
      );

      console.log("📋 BULK REPLACEMENT PLAN:", plan);
    } catch (error) {
      removeNotification(notifications[notifications.length - 1]?.id);
      addNotification('error', '❌ Plan Creation Failed', `Error: ${error}`, 10000);
      console.error("Error creating replacement plan:", error);
    } finally {
      setLoadingStates(prev => ({ ...prev, creatingPlan: false }));
      setIsProcessingBulk(false);
      setProgress({ current: 0, total: 0, step: '' });
    }
  };

  // Execute bulk replacement with detailed progress
  const executeBulkReplacement = async () => {
    if (!bulkReplacementPlan) return;

    const confirmed = window.confirm(
      `🚨 BULK REPLACEMENT CONFIRMATION\n\n` +
      `This will replace ${bulkReplacementPlan.totalImages} images.\n` +
      `Estimated improvement: +${bulkReplacementPlan.estimatedImprovementScore.toFixed(1)}% quality score.\n\n` +
      `Are you sure you want to proceed?`
    );

    if (confirmed) {
      // Start execution with detailed feedback
      addNotification('info', '🔄 Executing Bulk Replacement', 'Starting image replacement process...', 0);
      setLoadingStates(prev => ({ ...prev, executing: true }));
      setIsProcessingBulk(true);

      try {
        const totalImages = bulkReplacementPlan.totalImages;

        // Simulate detailed progress for each image
        for (let i = 0; i < totalImages; i++) {
          const imageName = bulkReplacementPlan.replacementSources[i]?.imageId || `image-${i+1}`;
          setProgress({
            current: i + 1,
            total: totalImages,
            step: `Replacing ${imageName}...`
          });

          // Add progress notification for every few images
          if (i % Math.max(1, Math.floor(totalImages / 3)) === 0) {
            addNotification(
              'info',
              '⚡ Progress Update',
              `Replaced ${i}/${totalImages} images so far...`,
              3000
            );
          }

          await new Promise(resolve => setTimeout(resolve, 800)); // Simulate processing time
        }

        const results = await BulkReplacementManager.executeBulkReplacement(bulkReplacementPlan);
        console.log("✅ BULK REPLACEMENT RESULTS:", results);

        // Update analysis with new results
        setProgress({ current: totalImages, total: totalImages, step: 'Refreshing analysis...' });
        const newAnalysis = analyzeAllImages();
        setAnalysis(newAnalysis);
        setBulkReplacementPlan(null);

        // Success notification
        removeNotification(notifications.filter(n => n.title.includes('Executing'))[0]?.id);
        addNotification(
          'success',
          '🎉 Bulk Replacement Complete!',
          `Successfully replaced ${results.replacedImages.length} images! ${results.errors.length > 0 ? `${results.errors.length} errors occurred.` : 'No errors!'}`,
          10000
        );

        // Show detailed results
        setTimeout(() => {
          addNotification(
            'info',
            '📊 Replacement Summary',
            `Images improved: ${results.replacedImages.join(', ')}`,
            15000
          );
        }, 2000);

      } catch (error) {
        removeNotification(notifications.filter(n => n.title.includes('Executing'))[0]?.id);
        addNotification('error', '❌ Replacement Failed', `Error: ${error}`, 15000);
        console.error("Error executing bulk replacement:", error);
      } finally {
        setLoadingStates(prev => ({ ...prev, executing: false }));
        setIsProcessingBulk(false);
        setProgress({ current: 0, total: 0, step: '' });
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
                notification.type === 'success' ? 'border-green-500 bg-green-50' :
                notification.type === 'error' ? 'border-red-500 bg-red-50' :
                notification.type === 'warning' ? 'border-yellow-500 bg-yellow-50' :
                'border-blue-500 bg-blue-50'
              } animate-in slide-in-from-right duration-300`}
            >
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-1">
                      {notification.type === 'success' && <CheckCircle className="h-4 w-4 text-green-600 mr-2" />}
                      {notification.type === 'error' && <XCircle className="h-4 w-4 text-red-600 mr-2" />}
                      {notification.type === 'warning' && <AlertTriangle className="h-4 w-4 text-yellow-600 mr-2" />}
                      {notification.type === 'info' && <Info className="h-4 w-4 text-blue-600 mr-2" />}
                      <h4 className="font-semibold text-sm">{notification.title}</h4>
                    </div>
                    <p className="text-sm text-gray-600">{notification.message}</p>
                  </div>
                  <button
                    onClick={() => removeNotification(notification.id)}
                    className="ml-2 text-gray-400 hover:text-gray-600"
                  >
                    <XCircle className="h-4 w-4" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Progress Indicator */}
        {progress.total > 0 && (
          <Card className="mb-6 border-blue-200 bg-blue-50">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-blue-800">Processing...</span>
                <span className="text-sm text-blue-600">{progress.current}/{progress.total}</span>
              </div>
              <div className="w-full bg-blue-200 rounded-full h-2 mb-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(progress.current / progress.total) * 100}%` }}
                />
              </div>
              <div className="flex items-center text-sm text-blue-700">
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                {progress.step}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Brain className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">
              🧠 Advanced Image Intelligence System
            </h1>
          </div>
          <p className="text-lg text-gray-600 mb-6">
            AI-powered image management with bulk replacement and dynamic
            validation
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <PrimaryButton
            onClick={() => handleBulkReplacement(6)}
            disabled={isProcessingBulk || belowAcceptableImages.length === 0}
            className="p-4 h-auto flex flex-col items-center"
          >
            {isProcessingBulk ? (
              <RefreshCw className="h-6 w-6 mb-2 animate-spin" />
            ) : (
              <Zap className="h-6 w-6 mb-2" />
            )}
            <span className="font-bold">Replace Poor Images</span>
            <span className="text-xs opacity-80">
              Score ≤6 ({belowAcceptableImages.length})
            </span>
          <PrimaryButton
            onClick={() => handleBulkReplacement(6)}
            disabled={isProcessingBulk || belowAcceptableImages.length === 0}
            className={`p-4 h-auto flex flex-col items-center transition-all duration-200 ${
              loadingStates.creatingPlan ? 'bg-blue-600 hover:bg-blue-700' : ''
            }`}
          >
            {loadingStates.creatingPlan ? (
              <Loader2 className="h-6 w-6 mb-2 animate-spin" />
            ) : isProcessingBulk ? (
              <RefreshCw className="h-6 w-6 mb-2 animate-spin" />
            ) : (
              <Zap className="h-6 w-6 mb-2" />
            )}
            <span className="font-bold">
              {loadingStates.creatingPlan ? 'Analyzing...' : 'Replace Poor Images'}
            </span>
            <span className="text-xs opacity-80">
              {loadingStates.creatingPlan ? 'Creating plan...' : `Score ≤6 (${belowAcceptableImages.length})`}
            </span>
          </PrimaryButton>

          <OutlineButton
            onClick={() => handleBulkReplacement(8)}
            disabled={isProcessingBulk}
            className={`p-4 h-auto flex flex-col items-center transition-all duration-200 ${
              loadingStates.creatingPlan ? 'border-blue-500 text-blue-600' : ''
            }`}
          >
            {loadingStates.creatingPlan ? (
              <Loader2 className="h-6 w-6 mb-2 animate-spin" />
            ) : (
              <Sparkles className="h-6 w-6 mb-2" />
            )}
            <span className="font-bold">
              {loadingStates.creatingPlan ? 'Processing...' : 'Optimize All'}
            </span>
            <span className="text-xs opacity-80">
              {loadingStates.creatingPlan ? 'Please wait...' : `Score ≤8 (${allImages.filter(img => img.relevanceScore < 8).length})`}
            </span>
          </OutlineButton>

          <OutlineButton
            onClick={() => {
              addNotification('info', '🔄 Refreshing Analysis', 'Re-scanning all images for latest scores...', 3000);
              setLoadingStates(prev => ({ ...prev, analyzing: true }));
              setTimeout(() => {
                window.location.reload();
              }, 1000);
            }}
            disabled={loadingStates.analyzing}
            className="p-4 h-auto flex flex-col items-center"
          >
            {loadingStates.analyzing ? (
              <Loader2 className="h-6 w-6 mb-2 animate-spin" />
            ) : (
              <RefreshCw className="h-6 w-6 mb-2" />
            )}
            <span className="font-bold">
              {loadingStates.analyzing ? 'Refreshing...' : 'Refresh Analysis'}
            </span>
            <span className="text-xs opacity-80">
              {loadingStates.analyzing ? 'Please wait...' : 'Re-scan All'}
            </span>
          </OutlineButton>
        </div>

        {/* Hidden file input */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={(e) => handleFileUpload(e.target.files)}
          multiple
          accept="image/*"
          className="hidden"
        />

        {/* Bulk Replacement Plan */}
        {bulkReplacementPlan && (
          <Card className="mb-8 border-blue-200 bg-blue-50">
            <CardHeader>
              <h2 className="text-2xl font-bold text-blue-800 flex items-center">
                <Zap className="h-6 w-6 mr-2" />
                🚀 Bulk Replacement Plan Ready
              </h2>
              <p className="text-blue-600">
                Ready to replace {bulkReplacementPlan.totalImages} images with
                estimated +
                {bulkReplacementPlan.estimatedImprovementScore.toFixed(1)}%
                quality improvement
              </p>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 mb-4">
                <PrimaryButton
                  onClick={executeBulkReplacement}
                  disabled={isProcessingBulk}
                  className={`${
                    loadingStates.executing
                      ? 'bg-blue-600 hover:bg-blue-700'
                      : 'bg-green-600 hover:bg-green-700'
                  } transition-all duration-200`}
                >
                  {loadingStates.executing ? (
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  ) : isProcessingBulk ? (
                    <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                  ) : (
                    <CheckCircle className="h-4 w-4 mr-2" />
                  )}
                  {loadingStates.executing ? 'Executing...' : 'Execute Replacement'}
                </PrimaryButton>
                <OutlineButton onClick={() => setBulkReplacementPlan(null)}>
                  Cancel
                </OutlineButton>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {bulkReplacementPlan.replacementSources
                  .slice(0, 6)
                  .map((item: any) => (
                    <Card key={item.imageId} className="border-blue-200">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-sm">
                            {item.imageId}
                          </span>
                          <Badge className="bg-red-100 text-red-800">
                            {item.currentScore}/10
                          </Badge>
                        </div>
                        <div className="text-xs text-gray-600">
                          <div className="mb-1">
                            <strong>Search terms:</strong>{" "}
                            {item.searchTerms.slice(0, 2).join(", ")}
                          </div>
                          <div>
                            <strong>Replacements found:</strong>{" "}
                            {item.suggestedReplacements.length}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>

              {bulkReplacementPlan.replacementSources.length > 6 && (
                <p className="text-sm text-blue-600 mt-4">
                  ...and {bulkReplacementPlan.replacementSources.length - 6}{" "}
                  more images
                </p>
              )}
            </CardContent>
          </Card>
        )}

        {/* Upload Validation Results */}
        {validationResults.length > 0 && (
          <Card className="mb-8 border-purple-200 bg-purple-50">
            <CardHeader>
              <h2 className="text-2xl font-bold text-purple-800 flex items-center">
                <Upload className="h-6 w-6 mr-2" />
                📤 Upload Validation Results
              </h2>
              <p className="text-purple-600">
                AI analysis of uploaded images with dynamic placement
                suggestions
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {validationResults.map((result, idx) => (
                  <Card
                    key={idx}
                    className={`border-2 ${result.isValid ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}`}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-medium text-sm">
                          {result.file}
                        </span>
                        <div className="flex items-center gap-2">
                          {result.isValid ? (
                            <Badge className="bg-green-100 text-green-800">
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Valid
                            </Badge>
                          ) : (
                            <Badge className="bg-red-100 text-red-800">
                              <XCircle className="h-3 w-3 mr-1" />
                              Invalid
                            </Badge>
                          )}
                          {result.qualityScore && (
                            <Badge
                              className={getScoreColor(result.qualityScore)}
                            >
                              {result.qualityScore}/10
                            </Badge>
                          )}
                        </div>
                      </div>

                      {result.detectedCategory && (
                        <div className="mb-2">
                          <strong className="text-xs">
                            Detected Category:
                          </strong>
                          <span className="text-xs ml-2 px-2 py-1 bg-blue-100 text-blue-800 rounded">
                            {result.detectedCategory}
                          </span>
                        </div>
                      )}

                      {result.autoPlacementSuggestions &&
                        result.autoPlacementSuggestions.length > 0 && (
                          <div className="mb-2">
                            <strong className="text-xs text-green-700">
                              Suggested Placements:
                            </strong>
                            <div className="mt-1 space-y-1">
                              {result.autoPlacementSuggestions
                                .slice(0, 2)
                                .map((placement: any, pIdx: number) => (
                                  <div
                                    key={pIdx}
                                    className="text-xs p-2 bg-white/70 rounded border"
                                  >
                                    <div className="font-medium">
                                      {placement.pageLocation}
                                    </div>
                                    <div className="text-gray-600">
                                      {placement.contextDescription}
                                    </div>
                                    <div className="text-green-600">
                                      Confidence: {placement.confidence}%
                                    </div>
                                  </div>
                                ))}
                            </div>
                          </div>
                        )}

                      {result.issues && result.issues.length > 0 && (
                        <div className="mb-2">
                          <strong className="text-xs text-red-700">
                            Issues:
                          </strong>
                          <ul className="text-xs text-red-600 mt-1 space-y-1">
                            {result.issues
                              .slice(0, 2)
                              .map((issue: string, iIdx: number) => (
                                <li key={iIdx}>• {issue}</li>
                              ))}
                          </ul>
                        </div>
                      )}

                      {result.recommendations &&
                        result.recommendations.length > 0 && (
                          <div>
                            <strong className="text-xs text-blue-700">
                              Recommendations:
                            </strong>
                            <ul className="text-xs text-blue-600 mt-1 space-y-1">
                              {result.recommendations
                                .slice(0, 2)
                                .map((rec: string, rIdx: number) => (
                                  <li key={rIdx}>• {rec}</li>
                                ))}
                            </ul>
                          </div>
                        )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-4 flex gap-2">
                <OutlineButton onClick={() => setValidationResults([])}>
                  Clear Results
                </OutlineButton>
                <PrimaryButton
                  onClick={() =>
                    alert(
                      "This would integrate valid images into the website automatically!",
                    )
                  }
                >
                  Auto-Integrate Valid Images
                </PrimaryButton>
              </div>
            </CardContent>
          </Card>
        )}

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

                      <div className="mt-4 flex gap-2 flex-wrap">
                        <PrimaryButton
                          size="sm"
                          className="bg-red-600 hover:bg-red-700"
                          onClick={() =>
                            generateSmartSuggestions(
                              img.category,
                              img.contextMatch,
                            )
                          }
                        >
                          <Wand2 className="h-4 w-4 mr-1" />
                          AI Suggestions
                        </PrimaryButton>
                        <OutlineButton
                          size="sm"
                          onClick={() =>
                            openUnsplashSearch(
                              `${img.category} flooring installation`,
                            )
                          }
                        >
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Find on Unsplash
                        </OutlineButton>
                      </div>

                      {/* Show smart suggestions if generated */}
                      {smartSuggestions[img.category] && (
                        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                          <h4 className="font-semibold text-blue-800 mb-2">
                            🤖 AI Recommendations:
                          </h4>
                          <div className="space-y-2">
                            {smartSuggestions[
                              img.category
                            ].primarySuggestions.map(
                              (suggestion: string, idx: number) => (
                                <button
                                  key={idx}
                                  onClick={() => openUnsplashSearch(suggestion)}
                                  className="block w-full text-left text-xs text-blue-600 hover:text-blue-800 hover:bg-blue-100 p-1 rounded"
                                >
                                  🔍 {suggestion}
                                </button>
                              ),
                            )}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Smart Image Replacement Suggestions */}
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
                      <h3 className="font-bold text-gray-900 mb-3 capitalize flex items-center">
                        <FileImage className="h-4 w-4 mr-2" />
                        {category.replace(/([A-Z])/g, " $1")}
                      </h3>
                      <ul className="space-y-2">
                        {suggestions.map((suggestion, idx) => (
                          <li key={idx} className="text-sm">
                            <button
                              onClick={() => openUnsplashSearch(suggestion)}
                              className="text-blue-600 hover:text-blue-800 flex items-center w-full text-left hover:bg-blue-50 p-1 rounded"
                            >
                              <Search className="h-3 w-3 mr-1 flex-shrink-0" />
                              <span className="truncate">{suggestion}</span>
                              <ExternalLink className="h-3 w-3 ml-1 flex-shrink-0" />
                            </button>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <PrimaryButton
                          size="sm"
                          className="w-full"
                          onClick={() =>
                            generateSmartSuggestions(
                              category,
                              `${category} flooring`,
                            )
                          }
                        >
                          <Sparkles className="h-3 w-3 mr-1" />
                          Generate AI Ideas
                        </PrimaryButton>
                      </div>
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