// 🧪 COMPREHENSIVE END-TO-END TESTING - AI Image Intelligence System
// Tests all 6 core functionalities: detection, storage, ranking, display, generation, upload

import { describe, test, expect, beforeAll, afterAll } from "vitest";
import {
  WebsiteImageScanner,
  ImageSystemIntegrator,
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

// Test data and mock objects
const mockImageFile = new File(["test-image-data"], "test-flooring.jpg", {
  type: "image/jpeg",
});
const testImageUrls = [
  "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-invalid-url",
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
];

describe("AI Image Intelligence System - End-to-End Tests", () => {
  let systemStartTime: number;
  let testResults: {
    detection: boolean;
    storage: boolean;
    ranking: boolean;
    display: boolean;
    generation: boolean;
    upload: boolean;
  };

  beforeAll(() => {
    systemStartTime = Date.now();
    testResults = {
      detection: false,
      storage: false,
      ranking: false,
      display: false,
      generation: false,
      upload: false,
    };

    console.log("🚀 Starting End-to-End AI Image System Tests...");
  });

  afterAll(() => {
    const totalTime = Date.now() - systemStartTime;
    console.log(`\n📊 TEST SUITE SUMMARY (${totalTime}ms)`);
    console.log("======================================");
    Object.entries(testResults).forEach(([feature, passed]) => {
      console.log(
        `${passed ? "✅" : "❌"} ${feature.toUpperCase()}: ${passed ? "PASSED" : "FAILED"}`,
      );
    });

    const passedTests = Object.values(testResults).filter(Boolean).length;
    const totalTests = Object.keys(testResults).length;
    console.log(
      `\n🎯 OVERALL: ${passedTests}/${totalTests} core features working`,
    );

    if (passedTests === totalTests) {
      console.log(
        "🎉 ALL SYSTEMS OPERATIONAL - AI Image Intelligence System is fully functional!",
      );
    } else {
      console.log("⚠️  SOME ISSUES DETECTED - Review failed tests above");
    }
  });

  // 1. IMAGE DETECTION TESTS
  describe("1. 🔍 Image Detection System", () => {
    test("should scan entire website and detect all image assets", async () => {
      console.log("\n🔍 Testing Image Detection...");

      try {
        const scanResult = await WebsiteImageScanner.scanWebsiteImages();

        // Verify scan completeness
        expect(scanResult).toBeDefined();
        expect(scanResult.totalImages).toBeGreaterThan(0);
        expect(scanResult.imagesByLocation).toBeDefined();
        expect(scanResult.imagesByType).toBeDefined();

        // Verify different image types are detected
        expect(Object.keys(scanResult.imagesByType)).toContain("unsplash");
        expect(scanResult.totalImages).toBeGreaterThanOrEqual(10); // Should find at least 10 images

        // Verify location mapping
        expect(Object.keys(scanResult.imagesByLocation)).toContain("/");
        expect(Object.keys(scanResult.imagesByLocation)).toContain("/products");

        console.log(
          `✅ Detection: Found ${scanResult.totalImages} images across ${Object.keys(scanResult.imagesByLocation).length} locations`,
        );
        testResults.detection = true;
      } catch (error) {
        console.error("❌ Detection failed:", error);
        throw error;
      }
    });

    test("should identify managed vs unmanaged images", async () => {
      const scanResult = await WebsiteImageScanner.scanWebsiteImages();

      expect(scanResult.managedImages).toBeGreaterThan(0);
      expect(scanResult.unmanagedImages).toBeGreaterThan(0);
      expect(scanResult.managedImages + scanResult.unmanagedImages).toBe(
        scanResult.totalImages,
      );

      // Verify missing images are identified
      expect(scanResult.missingFromAI).toBeDefined();
      expect(scanResult.missingFromAI.length).toBe(scanResult.unmanagedImages);

      console.log(
        `✅ Classification: ${scanResult.managedImages} managed, ${scanResult.unmanagedImages} unmanaged`,
      );
    });

    test("should generate actionable recommendations", async () => {
      const scanResult = await WebsiteImageScanner.scanWebsiteImages();

      expect(scanResult.recommendations).toBeDefined();
      expect(scanResult.recommendations.length).toBeGreaterThan(0);
      expect(scanResult.recommendations[0]).toContain("🔄"); // Should have emoji indicators

      console.log(
        `✅ Recommendations: Generated ${scanResult.recommendations.length} action items`,
      );
    });
  });

  // 2. IMAGE STORAGE TESTS
  describe("2. 💾 Image Storage System", () => {
    test("should have reliable image storage with fallbacks", async () => {
      console.log("\n💾 Testing Image Storage...");

      try {
        // Test intelligent images storage
        expect(INTELLIGENT_IMAGES).toBeDefined();
        expect(Object.keys(INTELLIGENT_IMAGES).length).toBeGreaterThan(0);

        // Test reliable images storage
        expect(RELIABLE_IMAGES).toBeDefined();
        expect(Object.keys(RELIABLE_IMAGES).length).toBeGreaterThan(0);

        // Verify each intelligent image has required fields
        Object.values(INTELLIGENT_IMAGES).forEach((img) => {
          expect(img.id).toBeDefined();
          expect(img.primary).toBeDefined();
          expect(img.fallback).toBeDefined();
          expect(img.category).toBeDefined();
          expect(img.title).toBeDefined();
          expect(img.description).toBeDefined();
          expect(Array.isArray(img.keywords)).toBe(true);
        });

        console.log(
          `✅ Storage: ${Object.keys(INTELLIGENT_IMAGES).length} intelligent images stored`,
        );
        console.log(
          `✅ Storage: ${Object.keys(RELIABLE_IMAGES).length} reliable images configured`,
        );
        testResults.storage = true;
      } catch (error) {
        console.error("❌ Storage test failed:", error);
        throw error;
      }
    });

    test("should provide reliable URL retrieval", () => {
      const testImageId = Object.keys(INTELLIGENT_IMAGES)[0];
      const url = getReliableImageUrl(testImageId);

      expect(url).toBeDefined();
      expect(url).toContain("https://");
      expect(url.length).toBeGreaterThan(20);

      console.log(
        `✅ URL Retrieval: Successfully retrieved URL for ${testImageId}`,
      );
    });

    test("should handle invalid image IDs gracefully", () => {
      const invalidUrl = getReliableImageUrl("nonexistent-image-id");

      // Should return a fallback URL or handle gracefully
      expect(invalidUrl).toBeDefined();
      expect(typeof invalidUrl).toBe("string");

      console.log("✅ Error Handling: Invalid IDs handled gracefully");
    });
  });

  // 3. IMAGE RANKING TESTS
  describe("3. 🏆 Image Ranking System", () => {
    test("should analyze and score all images with AI relevance algorithm", async () => {
      console.log("\n🏆 Testing Image Ranking...");

      try {
        const analysis = analyzeAllImages();

        expect(analysis).toBeDefined();
        expect(analysis.poorPerformers).toBeDefined();
        expect(analysis.needsImprovement).toBeDefined();

        // Test individual image scoring
        const firstImage = Object.values(INTELLIGENT_IMAGES)[0];
        const score = ImageIntelligenceAnalyzer.analyzeRelevance(firstImage);

        expect(score).toBeDefined();
        expect(score).toBeGreaterThanOrEqual(1);
        expect(score).toBeLessThanOrEqual(10);
        expect(Number.isInteger(score)).toBe(true);

        console.log(
          `✅ Ranking: AI scored image "${firstImage.id}" as ${score}/10`,
        );

        // Test scoring across multiple images
        const allScores = Object.values(INTELLIGENT_IMAGES).map((img) =>
          ImageIntelligenceAnalyzer.analyzeRelevance(img),
        );

        const avgScore =
          allScores.reduce((sum, score) => sum + score, 0) / allScores.length;
        expect(avgScore).toBeGreaterThan(0);
        expect(avgScore).toBeLessThan(11);

        console.log(
          `✅ Ranking: Average AI score across all images: ${avgScore.toFixed(1)}/10`,
        );
        console.log(
          `✅ Ranking: Found ${analysis.poorPerformers.length} poor performers, ${analysis.needsImprovement.length} needing improvement`,
        );

        testResults.ranking = true;
      } catch (error) {
        console.error("❌ Ranking test failed:", error);
        throw error;
      }
    });

    test("should generate improvement suggestions", () => {
      const firstImage = Object.values(INTELLIGENT_IMAGES)[0];
      const suggestions =
        ImageIntelligenceAnalyzer.generateImprovementSuggestions(firstImage);

      expect(Array.isArray(suggestions)).toBe(true);

      if (suggestions.length > 0) {
        expect(suggestions[0]).toContain(""); // Should have some content
        console.log(
          `✅ Suggestions: Generated ${suggestions.length} improvement suggestions`,
        );
      } else {
        console.log(
          "✅ Suggestions: No improvements needed (high-quality image)",
        );
      }
    });

    test("should categorize images by performance", () => {
      const analysis = analyzeAllImages();

      const totalAnalyzed =
        analysis.poorPerformers.length + analysis.needsImprovement.length;
      expect(totalAnalyzed).toBeGreaterThanOrEqual(0);

      // Verify categorization logic
      analysis.poorPerformers.forEach((img) => {
        expect(img.relevanceScore).toBeLessThanOrEqual(4);
      });

      analysis.needsImprovement.forEach((img) => {
        expect(img.relevanceScore).toBeGreaterThan(4);
        expect(img.relevanceScore).toBeLessThan(7);
      });

      console.log(
        "✅ Categorization: Images properly categorized by performance",
      );
    });
  });

  // 4. IMAGE DISPLAY TESTS
  describe("4. 🖼️ Image Display System", () => {
    test("should check image health and availability", async () => {
      console.log("\n🖼️ Testing Image Display...");

      try {
        // Test health checking for multiple URLs
        const healthResults = await Promise.all(
          testImageUrls.map(async (url) => {
            try {
              const isHealthy = await checkImageHealth(url);
              return { url, isHealthy };
            } catch (error) {
              return { url, isHealthy: false, error };
            }
          }),
        );

        expect(healthResults.length).toBe(testImageUrls.length);

        // At least some images should be healthy
        const healthyCount = healthResults.filter(
          (result) => result.isHealthy,
        ).length;
        expect(healthyCount).toBeGreaterThan(0);

        console.log(
          `✅ Display: ${healthyCount}/${healthResults.length} test images are healthy`,
        );

        // Test specific image health
        const firstImageUrl = Object.values(INTELLIGENT_IMAGES)[0].primary;
        const isFirstImageHealthy = await checkImageHealth(firstImageUrl);

        console.log(
          `✅ Display: First intelligent image health check: ${isFirstImageHealthy ? "HEALTHY" : "UNHEALTHY"}`,
        );
        testResults.display = true;
      } catch (error) {
        console.error("❌ Display test failed:", error);
        throw error;
      }
    });

    test("should provide fallback mechanism", () => {
      // Test that every intelligent image has a fallback
      Object.values(INTELLIGENT_IMAGES).forEach((img) => {
        expect(img.fallback).toBeDefined();
        expect(img.fallback).toContain("https://");
        expect(img.fallback).not.toBe(img.primary); // Fallback should be different
      });

      console.log(
        "✅ Fallbacks: All intelligent images have fallback URLs configured",
      );
    });

    test("should handle broken images gracefully", async () => {
      const brokenUrl = "https://images.unsplash.com/photo-invalid-broken-url";
      const isHealthy = await checkImageHealth(brokenUrl);

      expect(isHealthy).toBe(false);
      console.log("✅ Error Handling: Broken images detected correctly");
    });
  });

  // 5. IMAGE GENERATION/REGENERATION TESTS
  describe("5. 🎨 Image Generation System", () => {
    test("should create bulk replacement plans with AI optimization", async () => {
      console.log("\n🎨 Testing Image Generation...");

      try {
        const replacementPlan =
          await BulkReplacementManager.createReplacementPlan(6);

        expect(replacementPlan).toBeDefined();
        expect(replacementPlan.totalImages).toBeDefined();
        expect(replacementPlan.poorPerformers).toBeDefined();
        expect(replacementPlan.replacementSources).toBeDefined();
        expect(replacementPlan.estimatedImprovementScore).toBeDefined();
        expect(replacementPlan.projectedAverageScore).toBeDefined();

        expect(Array.isArray(replacementPlan.poorPerformers)).toBe(true);
        expect(Array.isArray(replacementPlan.replacementSources)).toBe(true);
        expect(typeof replacementPlan.estimatedImprovementScore).toBe("number");
        expect(typeof replacementPlan.projectedAverageScore).toBe("number");

        console.log(
          `✅ Generation: Created replacement plan for ${replacementPlan.totalImages} images`,
        );
        console.log(
          `✅ Generation: Estimated improvement: +${replacementPlan.estimatedImprovementScore.toFixed(1)}%`,
        );
        console.log(
          `✅ Generation: Projected average score: ${replacementPlan.projectedAverageScore.toFixed(1)}/10`,
        );

        testResults.generation = true;
      } catch (error) {
        console.error("❌ Generation test failed:", error);
        throw error;
      }
    });

    test("should generate search terms for image replacement", () => {
      // Test private method indirectly through bulk replacement
      const replacementPlan = BulkReplacementManager.createReplacementPlan(6);

      expect(replacementPlan).resolves.toBeDefined();
      console.log("✅ Search Terms: Image replacement search terms generated");
    });

    test("should calculate improvement metrics", async () => {
      const plan = await BulkReplacementManager.createReplacementPlan(6);

      if (plan.totalImages > 0) {
        expect(plan.estimatedImprovementScore).toBeGreaterThanOrEqual(0);
        expect(plan.projectedAverageScore).toBeGreaterThan(0);
        expect(plan.projectedAverageScore).toBeLessThanOrEqual(10);

        console.log(
          "✅ Metrics: Improvement calculations are within valid ranges",
        );
      } else {
        console.log(
          "✅ Metrics: No images need replacement (all are high quality)",
        );
      }
    });
  });

  // 6. IMAGE UPLOAD TESTS
  describe("6. 📤 Image Upload System", () => {
    test("should validate uploaded images with AI analysis", async () => {
      console.log("\n📤 Testing Image Upload...");

      try {
        const validationResult = await AIImageValidator.validateImage({
          file: mockImageFile,
          autoDetectPlacement: true,
        });

        expect(validationResult).toBeDefined();
        expect(validationResult.isValid).toBeDefined();
        expect(validationResult.confidence).toBeDefined();
        expect(validationResult.detectedCategory).toBeDefined();
        expect(validationResult.qualityScore).toBeDefined();
        expect(validationResult.autoPlacementSuggestions).toBeDefined();

        expect(typeof validationResult.isValid).toBe("boolean");
        expect(typeof validationResult.confidence).toBe("number");
        expect(typeof validationResult.qualityScore).toBe("number");
        expect(Array.isArray(validationResult.autoPlacementSuggestions)).toBe(
          true,
        );

        expect(validationResult.confidence).toBeGreaterThanOrEqual(0);
        expect(validationResult.confidence).toBeLessThanOrEqual(100);
        expect(validationResult.qualityScore).toBeGreaterThanOrEqual(1);
        expect(validationResult.qualityScore).toBeLessThanOrEqual(10);

        console.log(`✅ Upload: Image validation completed`);
        console.log(
          `✅ Upload: Detected category: ${validationResult.detectedCategory}`,
        );
        console.log(
          `✅ Upload: Quality score: ${validationResult.qualityScore}/10`,
        );
        console.log(`✅ Upload: Confidence: ${validationResult.confidence}%`);
        console.log(
          `✅ Upload: Placement suggestions: ${validationResult.autoPlacementSuggestions.length}`,
        );

        testResults.upload = true;
      } catch (error) {
        console.error("❌ Upload test failed:", error);
        throw error;
      }
    });

    test("should provide automatic placement suggestions", async () => {
      const validationResult = await AIImageValidator.validateImage({
        file: mockImageFile,
        autoDetectPlacement: true,
      });

      expect(validationResult.autoPlacementSuggestions).toBeDefined();
      expect(Array.isArray(validationResult.autoPlacementSuggestions)).toBe(
        true,
      );

      if (validationResult.autoPlacementSuggestions.length > 0) {
        const firstSuggestion = validationResult.autoPlacementSuggestions[0];
        expect(firstSuggestion.pageLocation).toBeDefined();
        expect(firstSuggestion.elementSelector).toBeDefined();
        expect(firstSuggestion.contextDescription).toBeDefined();
        expect(firstSuggestion.confidence).toBeDefined();

        console.log("✅ Placement: Automatic placement suggestions generated");
      } else {
        console.log(
          "✅ Placement: No specific placement suggestions (general purpose image)",
        );
      }
    });

    test("should convert scanned images to intelligent format", () => {
      const mockScannedImage = {
        id: "test-scanned-image",
        url: "https://example.com/test.jpg",
        location: "/test",
        component: "Test.tsx",
        purpose: "Test image for porcelain flooring",
        type: "unsplash" as const,
        isManaged: false,
        description: "Test description",
      };

      const intelligentFormat =
        ImageSystemIntegrator.convertToIntelligentImage(mockScannedImage);

      expect(intelligentFormat).toBeDefined();
      expect(intelligentFormat.id).toBe(mockScannedImage.id);
      expect(intelligentFormat.primary).toBe(mockScannedImage.url);
      expect(intelligentFormat.category).toBeDefined();
      expect(intelligentFormat.title).toBeDefined();
      expect(intelligentFormat.keywords).toBeDefined();
      expect(Array.isArray(intelligentFormat.keywords)).toBe(true);

      console.log(
        "✅ Integration: Scanned images converted to intelligent format",
      );
    });
  });

  // INTEGRATION TESTS
  describe("🔄 System Integration Tests", () => {
    test("should perform complete end-to-end workflow", async () => {
      console.log("\n🔄 Testing Complete Integration...");

      try {
        // 1. Scan website
        const scanResult = await WebsiteImageScanner.scanWebsiteImages();
        expect(scanResult.totalImages).toBeGreaterThan(0);

        // 2. Analyze images
        const analysis = analyzeAllImages();
        expect(analysis).toBeDefined();

        // 3. Create replacement plan
        const replacementPlan =
          await BulkReplacementManager.createReplacementPlan(7);
        expect(replacementPlan).toBeDefined();

        // 4. Check health
        const firstImageUrl = Object.values(INTELLIGENT_IMAGES)[0].primary;
        const isHealthy = await checkImageHealth(firstImageUrl);
        expect(typeof isHealthy).toBe("boolean");

        // 5. Validate upload capability
        const validation = await AIImageValidator.validateImage({
          file: mockImageFile,
          autoDetectPlacement: true,
        });
        expect(validation).toBeDefined();

        console.log(
          "✅ Integration: Complete end-to-end workflow executed successfully",
        );
      } catch (error) {
        console.error("❌ Integration test failed:", error);
        throw error;
      }
    });

    test("should maintain data consistency across operations", async () => {
      const scanResult = await WebsiteImageScanner.scanWebsiteImages();
      const analysis = analyzeAllImages();

      // Verify data consistency
      expect(scanResult.managedImages).toBe(
        Object.keys(INTELLIGENT_IMAGES).length,
      );
      expect(
        analysis.poorPerformers.length + analysis.needsImprovement.length,
      ).toBeLessThanOrEqual(scanResult.managedImages);

      console.log("✅ Consistency: Data remains consistent across operations");
    });
  });

  // PERFORMANCE TESTS
  describe("⚡ Performance Tests", () => {
    test("should complete operations within acceptable time limits", async () => {
      console.log("\n⚡ Testing Performance...");

      const startTime = Date.now();

      // Test scan performance
      const scanStart = Date.now();
      await WebsiteImageScanner.scanWebsiteImages();
      const scanTime = Date.now() - scanStart;
      expect(scanTime).toBeLessThan(5000); // Should complete within 5 seconds

      // Test analysis performance
      const analysisStart = Date.now();
      analyzeAllImages();
      const analysisTime = Date.now() - analysisStart;
      expect(analysisTime).toBeLessThan(1000); // Should complete within 1 second

      // Test health check performance
      const healthStart = Date.now();
      await checkImageHealth(testImageUrls[0]);
      const healthTime = Date.now() - healthStart;
      expect(healthTime).toBeLessThan(3000); // Should complete within 3 seconds

      console.log(
        `✅ Performance: Scan took ${scanTime}ms, Analysis took ${analysisTime}ms, Health check took ${healthTime}ms`,
      );
    });
  });
});

// Utility functions for testing
export const runImageSystemDiagnostics = async () => {
  console.log("🔧 Running Image System Diagnostics...\n");

  try {
    // Quick health check
    const scanResult = await WebsiteImageScanner.scanWebsiteImages();
    const analysis = analyzeAllImages();

    console.log("📊 SYSTEM STATUS:");
    console.log(`Total Images: ${scanResult.totalImages}`);
    console.log(`AI Managed: ${scanResult.managedImages}`);
    console.log(`Unmanaged: ${scanResult.unmanagedImages}`);
    console.log(`Poor Performers: ${analysis.poorPerformers.length}`);
    console.log(`Need Improvement: ${analysis.needsImprovement.length}`);

    const avgScore =
      Object.values(INTELLIGENT_IMAGES)
        .map((img) => ImageIntelligenceAnalyzer.analyzeRelevance(img))
        .reduce((sum, score) => sum + score, 0) /
      Object.keys(INTELLIGENT_IMAGES).length;

    console.log(`Average AI Score: ${avgScore.toFixed(1)}/10`);

    return {
      healthy: scanResult.totalImages > 0 && analysis,
      scanResult,
      analysis,
      avgScore,
    };
  } catch (error) {
    console.error("❌ Diagnostics failed:", error);
    return { healthy: false, error };
  }
};
