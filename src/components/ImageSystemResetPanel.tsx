import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { PrimaryButton, OutlineButton } from "@/components/ui/custom-buttons";
import { Badge } from "@/components/ui/badge";
import { ImageSystemReset } from "@/utils/imageSystemReset";
import {
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Zap,
  BarChart3,
  Clock,
  Download,
  Loader2,
  Brain,
  Target,
} from "lucide-react";

interface ResetResult {
  success: boolean;
  totalImages: number;
  managedImages: number;
  regeneratedImages: number;
  avgScore: number;
  criticalIssues: number;
  report: string[];
}

interface QuickCheck {
  totalImages: number;
  averageScore: number;
  criticalIssues: number;
  recommendations: string[];
}

export const ImageSystemResetPanel: React.FC = () => {
  const [isResetting, setIsResetting] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const [resetResult, setResetResult] = useState<ResetResult | null>(null);
  const [quickCheck, setQuickCheck] = useState<QuickCheck | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const performQuickCheck = async () => {
    setIsChecking(true);
    try {
      const result = await ImageSystemReset.performQuickQualityCheck();
      setQuickCheck(result);
    } catch (error) {
      console.error("Quick check failed:", error);
    } finally {
      setIsChecking(false);
    }
  };

  const performCompleteReset = async () => {
    if (!showConfirmation) {
      setShowConfirmation(true);
      return;
    }

    setIsResetting(true);
    setShowConfirmation(false);

    try {
      const result = await ImageSystemReset.performCompleteReset();
      setResetResult(result);

      // Refresh the page after successful reset to show new data
      if (result.success) {
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
    } catch (error) {
      console.error("System reset failed:", error);
      setResetResult({
        success: false,
        totalImages: 0,
        managedImages: 0,
        regeneratedImages: 0,
        avgScore: 0,
        criticalIssues: 0,
        report: [`❌ Reset failed: ${error}`],
      });
    } finally {
      setIsResetting(false);
    }
  };

  const exportReport = () => {
    if (!resetResult) return;

    const report = {
      timestamp: new Date().toISOString(),
      resetResult,
      summary: {
        operation: "Complete Image System Reset",
        success: resetResult.success,
        totalImages: resetResult.totalImages,
        qualityImprovement:
          resetResult.avgScore > 6 ? "Significant" : "Needs Further Work",
        criticalIssuesResolved: resetResult.criticalIssues === 0,
      },
    };

    const blob = new Blob([JSON.stringify(report, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `image-system-reset-report-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="border-orange-200 bg-orange-50">
        <CardHeader>
          <h2 className="text-xl font-bold text-orange-800 flex items-center">
            <RefreshCw className="h-5 w-5 mr-2" />
            Complete System Reset & Regeneration
          </h2>
          <p className="text-orange-700">
            Completely rebuild the image system with proper AI scoring and
            high-quality curated images
          </p>
        </CardHeader>
      </Card>

      {/* Quick Quality Check */}
      <Card>
        <CardHeader>
          <h3 className="text-lg font-bold flex items-center">
            <BarChart3 className="h-5 w-5 mr-2" />
            Current System Quality Analysis
          </h3>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-4">
            <OutlineButton
              onClick={performQuickCheck}
              disabled={isChecking}
              className="flex items-center"
            >
              {isChecking ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Target className="h-4 w-4 mr-2" />
                  Quick Quality Check
                </>
              )}
            </OutlineButton>
          </div>

          {quickCheck && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-600">Total Images</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {quickCheck.totalImages}
                  </p>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <p className="text-sm text-gray-600">Average Quality</p>
                  <p className="text-2xl font-bold text-red-600">
                    {quickCheck.averageScore.toFixed(1)}/10
                  </p>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <p className="text-sm text-gray-600">Critical Issues</p>
                  <p className="text-2xl font-bold text-yellow-600">
                    {quickCheck.criticalIssues}
                  </p>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-semibold text-red-800 mb-2">
                  Quality Issues Detected:
                </h4>
                <ul className="space-y-1">
                  {quickCheck.recommendations.map((rec, index) => (
                    <li key={index} className="text-red-700 text-sm">
                      {rec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Reset Actions */}
      <Card className="border-green-200">
        <CardHeader>
          <h3 className="text-lg font-bold text-green-800 flex items-center">
            <Zap className="h-5 w-5 mr-2" />
            System Reset Actions
          </h3>
          <p className="text-green-700">
            Perform complete reset to fix all quality issues and implement
            proper AI scoring
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {!showConfirmation ? (
              <PrimaryButton
                onClick={performCompleteReset}
                disabled={isResetting}
                className="flex items-center bg-green-600 hover:bg-green-700"
              >
                {isResetting ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Performing Reset...
                  </>
                ) : (
                  <>
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Perform Complete Reset
                  </>
                )}
              </PrimaryButton>
            ) : (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  Confirmation Required
                </h4>
                <p className="text-yellow-700 mb-4">
                  This will completely regenerate all images with proper AI
                  scoring. This action cannot be undone.
                </p>
                <div className="flex gap-2">
                  <PrimaryButton
                    onClick={performCompleteReset}
                    className="bg-red-600 hover:bg-red-700"
                  >
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Yes, Perform Reset
                  </PrimaryButton>
                  <OutlineButton onClick={() => setShowConfirmation(false)}>
                    <XCircle className="h-4 w-4 mr-2" />
                    Cancel
                  </OutlineButton>
                </div>
              </div>
            )}

            <div className="text-sm text-gray-600">
              <h4 className="font-semibold mb-1">What the reset will do:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Replace all poor-quality images with curated high-quality
                  alternatives
                </li>
                <li>
                  Implement strict AI scoring that properly evaluates image
                  relevance
                </li>
                <li>Convert ALL images to be managed by the AI system</li>
                <li>Generate proper categories, titles, and descriptions</li>
                <li>Create improvement suggestions for all images</li>
                <li>Establish quality standards for future image additions</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Reset Results */}
      {resetResult && (
        <Card
          className={`border-l-4 ${resetResult.success ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50"}`}
        >
          <CardHeader>
            <h3 className="text-lg font-bold flex items-center">
              {resetResult.success ? (
                <>
                  <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                  <span className="text-green-800">
                    Reset Completed Successfully!
                  </span>
                </>
              ) : (
                <>
                  <XCircle className="h-5 w-5 mr-2 text-red-600" />
                  <span className="text-red-800">Reset Failed</span>
                </>
              )}
            </h3>
          </CardHeader>
          <CardContent>
            {resetResult.success && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <div className="text-center p-3 bg-white rounded">
                    <p className="text-sm text-gray-600">Total Images</p>
                    <p className="text-xl font-bold text-blue-600">
                      {resetResult.totalImages}
                    </p>
                  </div>
                  <div className="text-center p-3 bg-white rounded">
                    <p className="text-sm text-gray-600">Now Managed</p>
                    <p className="text-xl font-bold text-green-600">
                      {resetResult.managedImages}
                    </p>
                  </div>
                  <div className="text-center p-3 bg-white rounded">
                    <p className="text-sm text-gray-600">New Avg Score</p>
                    <p className="text-xl font-bold text-purple-600">
                      {resetResult.avgScore.toFixed(1)}/10
                    </p>
                  </div>
                  <div className="text-center p-3 bg-white rounded">
                    <p className="text-sm text-gray-600">Critical Issues</p>
                    <p className="text-xl font-bold text-orange-600">
                      {resetResult.criticalIssues}
                    </p>
                  </div>
                </div>

                <div className="bg-green-100 border border-green-200 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-green-800 mb-2">
                    🎉 Reset Success!
                  </h4>
                  <p className="text-green-700 text-sm">
                    The system will automatically refresh in a few seconds to
                    show the new image configuration.
                  </p>
                </div>
              </>
            )}

            <div className="bg-white rounded-lg p-4 max-h-40 overflow-y-auto">
              <h4 className="font-semibold mb-2">Reset Report:</h4>
              <div className="space-y-1 text-sm font-mono">
                {resetResult.report.map((line, index) => (
                  <div key={index} className="text-gray-700">
                    {line}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <OutlineButton
                onClick={exportReport}
                className="flex items-center"
              >
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </OutlineButton>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
