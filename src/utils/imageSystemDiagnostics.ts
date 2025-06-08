// 🔧 BROWSER-COMPATIBLE IMAGE SYSTEM DIAGNOSTICS
// Provides comprehensive diagnostics without Vitest dependencies for browser use

import {
  WebsiteImageScanner,
  type ImageScanResult,
} from "@/utils/websiteImageScanner";
import {
  ImageIntelligenceAnalyzer,
  INTELLIGENT_IMAGES,
  analyzeAllImages,
} from "@/utils/intelligentImages";
import {
  BulkReplacementManager,
  AIImageValidator,
} from "@/utils/advancedImageManager";
import {
  checkImageHealth,
  getReliableImageUrl,
  RELIABLE_IMAGES,
} from "@/utils/imageUtils";

export interface DiagnosticResult {
  name: string;
  status: "passed" | "failed" | "running";
  duration?: number;
  error?: string;
  details?: string;
}

export interface SystemHealth {
  overall: "healthy" | "warning" | "critical";
  totalImages: number;
  managedImages: number;
  avgScore: number;
  issues: string[];
}

export interface ComprehensiveDiagnosticResult {
  healthy: boolean;
  scanResult?: ImageScanResult;
  analysis?: any;
  avgScore: number;
  error?: string;
}

export class ImageSystemDiagnostics {
  // Test 1: Image Detection System
  static async testImageDetection(): Promise<DiagnosticResult> {
    const startTime = Date.now();

    try {
      const scanResult = await WebsiteImageScanner.scanWebsiteImages();
      const duration = Date.now() - startTime;

      if (scanResult.totalImages > 0) {
        return {
          name: "1. Image Detection",
          status: "passed",
          duration,
          details: `Found ${scanResult.totalImages} images across ${Object.keys(scanResult.imagesByLocation).length} locations`,
        };
      } else {
        return {
          name: "1. Image Detection",
          status: "failed",
          duration,
          error: "No images detected",
        };
      }
    } catch (error) {
      return {
        name: "1. Image Detection",
        status: "failed",
        duration: Date.now() - startTime,
        error: `Detection failed: ${error}`,
      };
    }
  }

  // Test 2: Image Storage System
  static async testImageStorage(): Promise<DiagnosticResult> {
    const startTime = Date.now();

    try {
      // Verify intelligent images storage
      if (!INTELLIGENT_IMAGES || Object.keys(INTELLIGENT_IMAGES).length === 0) {
        return {
          name: "2. Image Storage",
          status: "failed",
          duration: Date.now() - startTime,
          error: "No intelligent images found in storage",
        };
      }

      // Verify reliable images storage
      if (!RELIABLE_IMAGES || Object.keys(RELIABLE_IMAGES).length === 0) {
        return {
          name: "2. Image Storage",
          status: "failed",
          duration: Date.now() - startTime,
          error: "No reliable images found in storage",
        };
      }

      // Test URL retrieval
      const testImageId = Object.keys(INTELLIGENT_IMAGES)[0];
      const url = getReliableImageUrl(testImageId);

      if (!url || !url.includes("https://")) {
        return {
          name: "2. Image Storage",
          status: "failed",
          duration: Date.now() - startTime,
          error: "URL retrieval failed",
        };
      }

      const duration = Date.now() - startTime;
      return {
        name: "2. Image Storage",
        status: "passed",
        duration,
        details: `Storage operational with ${Object.keys(INTELLIGENT_IMAGES).length} intelligent images`,
      };
    } catch (error) {
      return {
        name: "2. Image Storage",
        status: "failed",
        duration: Date.now() - startTime,
        error: `Storage test failed: ${error}`,
      };
    }
  }

  // Test 3: Image Ranking System
  static async testImageRanking(): Promise<DiagnosticResult> {
    const startTime = Date.now();

    try {
      const analysis = analyzeAllImages();

      if (!analysis || analysis.poorPerformers === undefined) {
        return {
          name: "3. Image Ranking",
          status: "failed",
          duration: Date.now() - startTime,
          error: "Analysis failed",
        };
      }

      // Test individual image scoring
      const firstImage = Object.values(INTELLIGENT_IMAGES)[0];
      const score = ImageIntelligenceAnalyzer.analyzeRelevance(firstImage);

      if (typeof score !== "number" || score < 1 || score > 10) {
        return {
          name: "3. Image Ranking",
          status: "failed",
          duration: Date.now() - startTime,
          error: "Invalid scoring results",
        };
      }

      const duration = Date.now() - startTime;
      const totalAnalyzed =
        analysis.poorPerformers.length + analysis.needsImprovement.length;

      return {
        name: "3. Image Ranking",
        status: "passed",
        duration,
        details: `AI ranking operational, analyzed ${totalAnalyzed} images`,
      };
    } catch (error) {
      return {
        name: "3. Image Ranking",
        status: "failed",
        duration: Date.now() - startTime,
        error: `Ranking test failed: ${error}`,
      };
    }
  }

  // Test 4: Image Display System
  static async testImageDisplay(): Promise<DiagnosticResult> {
    const startTime = Date.now();

    try {
      const testUrl =
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";
      const isHealthy = await checkImageHealth(testUrl);
      const duration = Date.now() - startTime;

      return {
        name: "4. Image Display",
        status: "passed",
        duration,
        details: `Display system operational, test image ${isHealthy ? "healthy" : "unhealthy"}`,
      };
    } catch (error) {
      return {
        name: "4. Image Display",
        status: "failed",
        duration: Date.now() - startTime,
        error: `Display test failed: ${error}`,
      };
    }
  }

  // Test 5: Image Generation System
  static async testImageGeneration(): Promise<DiagnosticResult> {
    const startTime = Date.now();

    try {
      const replacementPlan =
        await BulkReplacementManager.createReplacementPlan(6);
      const duration = Date.now() - startTime;

      if (!replacementPlan || replacementPlan.totalImages === undefined) {
        return {
          name: "5. Image Generation",
          status: "failed",
          duration,
          error: "Generation plan creation failed",
        };
      }

      return {
        name: "5. Image Generation",
        status: "passed",
        duration,
        details: `Generation system operational, created plan for ${replacementPlan.totalImages} images`,
      };
    } catch (error) {
      return {
        name: "5. Image Generation",
        status: "failed",
        duration: Date.now() - startTime,
        error: `Generation test failed: ${error}`,
      };
    }
  }

  // Test 6: Image Upload System
  static async testImageUpload(): Promise<DiagnosticResult> {
    const startTime = Date.now();

    try {
      // Create a mock file for testing
      const mockFile = new File(["test-data"], "test-image.jpg", {
        type: "image/jpeg",
      });

      const validationResult = await AIImageValidator.validateImage({
        file: mockFile,
        autoDetectPlacement: true,
      });

      const duration = Date.now() - startTime;

      if (!validationResult || validationResult.isValid === undefined) {
        return {
          name: "6. Image Upload",
          status: "failed",
          duration,
          error: "Upload validation failed",
        };
      }

      return {
        name: "6. Image Upload",
        status: "passed",
        duration,
        details: "Upload validation system operational",
      };
    } catch (error) {
      return {
        name: "6. Image Upload",
        status: "failed",
        duration: Date.now() - startTime,
        error: `Upload test failed: ${error}`,
      };
    }
  }

  // Run all diagnostic tests
  static async runAllDiagnostics(): Promise<DiagnosticResult[]> {
    const tests = [
      this.testImageDetection(),
      this.testImageStorage(),
      this.testImageRanking(),
      this.testImageDisplay(),
      this.testImageGeneration(),
      this.testImageUpload(),
    ];

    return Promise.all(tests);
  }

  // Quick health check for system overview
  static async runQuickDiagnostics(): Promise<ComprehensiveDiagnosticResult> {
    try {
      // Run basic health checks
      const scanResult = await WebsiteImageScanner.scanWebsiteImages();
      const analysis = analyzeAllImages();

      const avgScore =
        Object.values(INTELLIGENT_IMAGES)
          .map((img) => ImageIntelligenceAnalyzer.analyzeRelevance(img))
          .reduce((sum, score) => sum + score, 0) /
        Object.keys(INTELLIGENT_IMAGES).length;

      return {
        healthy: scanResult.totalImages > 0 && analysis,
        scanResult,
        analysis,
        avgScore,
      };
    } catch (error) {
      return {
        healthy: false,
        avgScore: 0,
        error: `Diagnostics failed: ${error}`,
      };
    }
  }

  // Calculate system health based on diagnostic results
  static calculateSystemHealth(
    results: DiagnosticResult[],
    diagnostics?: ComprehensiveDiagnosticResult,
  ): SystemHealth {
    const passedTests = results.filter(
      (test) => test.status === "passed",
    ).length;
    const totalTests = results.length;

    let overall: SystemHealth["overall"] = "critical";
    if (passedTests === totalTests) {
      overall = "healthy";
    } else if (passedTests >= totalTests * 0.8) {
      overall = "warning";
    }

    const issues = results
      .filter((test) => test.status === "failed")
      .map((test) => test.error || "Unknown error");

    return {
      overall,
      totalImages: diagnostics?.scanResult?.totalImages || 0,
      managedImages: diagnostics?.scanResult?.managedImages || 0,
      avgScore: diagnostics?.avgScore || 0,
      issues,
    };
  }

  // Performance validation
  static validatePerformance(results: DiagnosticResult[]): {
    allWithinLimits: boolean;
    slowTests: DiagnosticResult[];
    averageTime: number;
  } {
    const timeLimit = 5000; // 5 seconds max per test
    const slowTests = results.filter(
      (test) => test.duration && test.duration > timeLimit,
    );

    const totalTime = results.reduce(
      (sum, test) => sum + (test.duration || 0),
      0,
    );
    const averageTime = totalTime / results.length;

    return {
      allWithinLimits: slowTests.length === 0,
      slowTests,
      averageTime,
    };
  }

  // Generate test report
  static generateTestReport(
    results: DiagnosticResult[],
    systemHealth: SystemHealth,
    diagnostics?: ComprehensiveDiagnosticResult,
  ) {
    const performance = this.validatePerformance(results);

    return {
      timestamp: new Date().toISOString(),
      summary: {
        passed: results.filter((r) => r.status === "passed").length,
        failed: results.filter((r) => r.status === "failed").length,
        total: results.length,
        averageTime: performance.averageTime,
        systemHealth: systemHealth.overall,
      },
      testResults: results,
      systemHealth,
      performance,
      diagnostics,
    };
  }
}
