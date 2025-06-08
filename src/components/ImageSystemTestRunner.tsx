import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { PrimaryButton, OutlineButton } from "@/components/ui/custom-buttons";
import { Badge } from "@/components/ui/badge";
import {
  ImageSystemDiagnostics,
  type DiagnosticResult,
  type SystemHealth,
  type ComprehensiveDiagnosticResult,
} from "@/utils/imageSystemDiagnostics";
import {
  WebsiteImageScanner,
  type ImageScanResult,
} from "@/utils/websiteImageScanner";
import {
  Brain,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Play,
  RefreshCw,
  Download,
  BarChart3,
  TestTube,
  Zap,
  Clock,
  Target,
  FileImage,
  Upload,
  Search,
  Loader2,
} from "lucide-react";

interface TestResult {
  name: string;
  status: "idle" | "running" | "passed" | "failed";
  duration?: number;
  error?: string;
  details?: any;
}

export const ImageSystemTestRunner: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [testResults, setTestResults] = useState<TestResult[]>([
    { name: "1. Image Detection", status: "idle" },
    { name: "2. Image Storage", status: "idle" },
    { name: "3. Image Ranking", status: "idle" },
    { name: "4. Image Display", status: "idle" },
    { name: "5. Image Generation", status: "idle" },
    { name: "6. Image Upload", status: "idle" },
  ]);
  const [systemHealth, setSystemHealth] = useState<SystemHealth | null>(null);
  const [diagnosticsResult, setDiagnosticsResult] =
    useState<ComprehensiveDiagnosticResult | null>(null);

  const updateTestResult = (index: number, update: Partial<TestResult>) => {
    setTestResults((prev) =>
      prev.map((test, i) => (i === index ? { ...test, ...update } : test)),
    );
  };

  const runAllTests = async () => {
    setIsRunning(true);
    console.log("🚀 Starting comprehensive AI Image System tests...");

    try {
      // Reset all tests to running state
      const runningTests = testResults.map((test) => ({
        ...test,
        status: "running" as const,
      }));
      setTestResults(runningTests);

      // Run all diagnostics sequentially to show progress
      const diagnosticFunctions = [
        ImageSystemDiagnostics.testImageDetection,
        ImageSystemDiagnostics.testImageStorage,
        ImageSystemDiagnostics.testImageRanking,
        ImageSystemDiagnostics.testImageDisplay,
        ImageSystemDiagnostics.testImageGeneration,
        ImageSystemDiagnostics.testImageUpload,
      ];

      const results: DiagnosticResult[] = [];

      for (let i = 0; i < diagnosticFunctions.length; i++) {
        try {
          const result = await diagnosticFunctions[i]();
          results.push(result);
          updateTestResult(i, {
            status: result.status,
            duration: result.duration,
            details: result.details,
            error: result.error,
          });
        } catch (error) {
          const failedResult = {
            name: `Test ${i + 1}`,
            status: "failed" as const,
            error: `Unexpected error: ${error}`,
          };
          results.push(failedResult);
          updateTestResult(i, failedResult);
        }
      }

      // Run comprehensive diagnostics
      const diagnostics = await ImageSystemDiagnostics.runQuickDiagnostics();
      setDiagnosticsResult(diagnostics);

      // Calculate system health
      const systemHealth = ImageSystemDiagnostics.calculateSystemHealth(
        results,
        diagnostics,
      );
      setSystemHealth(systemHealth);
    } catch (error) {
      console.error("Test suite failed:", error);
    } finally {
      setIsRunning(false);
      console.log("✅ Test suite completed");
    }
  };

  const runQuickDiagnostics = async () => {
    try {
      const diagnostics = await ImageSystemDiagnostics.runQuickDiagnostics();
      setDiagnosticsResult(diagnostics);

      const health: SystemHealth = {
        overall: diagnostics.healthy ? "healthy" : "critical",
        totalImages: diagnostics?.scanResult?.totalImages || 0,
        managedImages: diagnostics?.scanResult?.managedImages || 0,
        avgScore: diagnostics?.avgScore || 0,
        issues: diagnostics.healthy ? [] : ["System diagnostics failed"],
      };

      setSystemHealth(health);
    } catch (error) {
      console.error("Quick diagnostics failed:", error);
    }
  };

  const getStatusIcon = (status: TestResult["status"]) => {
    switch (status) {
      case "passed":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "failed":
        return <XCircle className="h-4 w-4 text-red-600" />;
      case "running":
        return <Loader2 className="h-4 w-4 text-blue-600 animate-spin" />;
      default:
        return <Clock className="h-4 w-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: TestResult["status"]) => {
    switch (status) {
      case "passed":
        return "bg-green-100 text-green-800 border-green-300";
      case "failed":
        return "bg-red-100 text-red-800 border-red-300";
      case "running":
        return "bg-blue-100 text-blue-800 border-blue-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  const getHealthColor = (health: SystemHealth["overall"]) => {
    switch (health) {
      case "healthy":
        return "text-green-600";
      case "warning":
        return "text-yellow-600";
      case "critical":
        return "text-red-600";
    }
  };

  const exportTestReport = () => {
    const report = ImageSystemDiagnostics.generateTestReport(
      testResults.map((t) => ({
        name: t.name,
        status: t.status as "passed" | "failed" | "running",
        duration: t.duration,
        error: t.error,
        details: t.details,
      })),
      systemHealth!,
      diagnosticsResult || undefined,
    );

    const blob = new Blob([JSON.stringify(report, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `image-system-test-report-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4 flex items-center justify-center">
            <TestTube className="h-8 w-8 mr-3 text-blue-600" />
            AI Image System Test Runner
          </h1>
          <p className="text-gray-600">
            Comprehensive end-to-end testing for all 6 core image system
            functionalities
          </p>
        </div>

        {/* System Health Overview */}
        {systemHealth && (
          <Card className="border-l-4 border-blue-500">
            <CardHeader>
              <h2 className="text-xl font-bold flex items-center">
                <BarChart3 className="h-5 w-5 mr-2" />
                System Health Overview
              </h2>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div className="text-center">
                  <p className="text-sm text-gray-600">Overall Status</p>
                  <p
                    className={`text-2xl font-bold ${getHealthColor(systemHealth.overall)}`}
                  >
                    {systemHealth.overall.toUpperCase()}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">Total Images</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {systemHealth.totalImages}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">AI Managed</p>
                  <p className="text-2xl font-bold text-green-600">
                    {systemHealth.managedImages}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">Avg AI Score</p>
                  <p className="text-2xl font-bold text-purple-600">
                    {systemHealth.avgScore.toFixed(1)}/10
                  </p>
                </div>
              </div>

              {systemHealth.issues.length > 0 && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h3 className="font-semibold text-red-800 mb-2">
                    Issues Detected:
                  </h3>
                  <ul className="list-disc list-inside space-y-1">
                    {systemHealth.issues.map((issue, index) => (
                      <li key={index} className="text-red-700 text-sm">
                        {issue}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Test Controls */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-4 items-center justify-center">
              <PrimaryButton
                onClick={runAllTests}
                disabled={isRunning}
                className="flex items-center"
              >
                {isRunning ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Running Tests...
                  </>
                ) : (
                  <>
                    <Play className="h-4 w-4 mr-2" />
                    Run Full Test Suite
                  </>
                )}
              </PrimaryButton>

              <OutlineButton
                onClick={runQuickDiagnostics}
                disabled={isRunning}
                className="flex items-center"
              >
                <Zap className="h-4 w-4 mr-2" />
                Quick Diagnostics
              </OutlineButton>

              <OutlineButton
                onClick={exportTestReport}
                disabled={!systemHealth}
                className="flex items-center"
              >
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </OutlineButton>
            </div>
          </CardContent>
        </Card>

        {/* Test Results */}
        <Card>
          <CardHeader>
            <h2 className="text-xl font-bold">Test Results</h2>
            <p className="text-gray-600">
              End-to-end testing of all 6 core image system features
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {testResults.map((test, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    {getStatusIcon(test.status)}
                    <div>
                      <h3 className="font-semibold">{test.name}</h3>
                      {test.details && (
                        <p className="text-sm text-gray-600">{test.details}</p>
                      )}
                      {test.error && (
                        <p className="text-sm text-red-600">{test.error}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {test.duration && (
                      <span className="text-xs text-gray-500">
                        {test.duration}ms
                      </span>
                    )}
                    <Badge className={getStatusColor(test.status)}>
                      {test.status.toUpperCase()}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Core Features Overview */}
        <Card>
          <CardHeader>
            <h2 className="text-xl font-bold">Core Features Tested</h2>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                <Search className="h-6 w-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold">1. Image Detection</h3>
                  <p className="text-xs text-gray-600">
                    Scan entire website for image assets
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                <FileImage className="h-6 w-6 text-green-600" />
                <div>
                  <h3 className="font-semibold">2. Image Storage</h3>
                  <p className="text-xs text-gray-600">
                    Reliable storage with fallbacks
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                <Target className="h-6 w-6 text-purple-600" />
                <div>
                  <h3 className="font-semibold">3. Image Ranking</h3>
                  <p className="text-xs text-gray-600">
                    AI relevance scoring 1-10
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                <RefreshCw className="h-6 w-6 text-yellow-600" />
                <div>
                  <h3 className="font-semibold">4. Image Display</h3>
                  <p className="text-xs text-gray-600">
                    Health checking and display
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                <Brain className="h-6 w-6 text-orange-600" />
                <div>
                  <h3 className="font-semibold">5. Image Generation</h3>
                  <p className="text-xs text-gray-600">
                    AI-powered replacement plans
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
                <Upload className="h-6 w-6 text-red-600" />
                <div>
                  <h3 className="font-semibold">6. Image Upload</h3>
                  <p className="text-xs text-gray-600">
                    AI validation and placement
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Diagnostics Details */}
        {diagnosticsResult && (
          <Card>
            <CardHeader>
              <h2 className="text-xl font-bold">Detailed Diagnostics</h2>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Image Distribution</h3>
                  {diagnosticsResult.scanResult && (
                    <div className="space-y-2 text-sm">
                      {Object.entries(
                        diagnosticsResult.scanResult.imagesByLocation,
                      ).map(([location, images]) => (
                        <div key={location} className="flex justify-between">
                          <span>{location}:</span>
                          <span className="font-semibold">
                            {(images as any[]).length}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Performance Analysis</h3>
                  {diagnosticsResult.analysis && (
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Poor Performers:</span>
                        <span className="font-semibold text-red-600">
                          {diagnosticsResult.analysis.poorPerformers.length}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Need Improvement:</span>
                        <span className="font-semibold text-yellow-600">
                          {diagnosticsResult.analysis.needsImprovement.length}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Average Score:</span>
                        <span className="font-semibold text-blue-600">
                          {diagnosticsResult.avgScore.toFixed(1)}/10
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};
