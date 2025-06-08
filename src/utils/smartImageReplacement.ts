// 🧠 SMART IMAGE REPLACEMENT VALIDATION SYSTEM
// Evaluates replacement images before adding them to ensure quality and proper context

import {
  AdvancedImageAnalyzer,
  type AdvancedImageConfig,
} from "@/utils/advancedImageAnalysis";
import { ImageSystemIntegrator } from "@/utils/websiteImageScanner";

export interface ReplacementCandidate {
  url: string;
  alt: string;
  description: string;
  source: "curated" | "unsplash" | "user_upload";
  confidence: number; // How confident we are this is a good replacement
}

export interface ReplacementValidation {
  isValid: boolean;
  score: number;
  originalScore: number;
  improvement: number;
  reason: string;
  issues: string[];
  recommendation: "accept" | "reject" | "needs_review";
}

export interface ValidatedReplacement {
  originalImage: AdvancedImageConfig;
  replacementImage: AdvancedImageConfig;
  validation: ReplacementValidation;
  contextData: {
    category: string;
    location: string;
    purpose: string;
    keywords: string[];
    requirements: string[];
  };
}

// High-quality curated replacements with pre-validated scores
const VALIDATED_HIGH_QUALITY_REPLACEMENTS = {
  porcelain: [
    {
      url: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Large format porcelain tiles in luxury contemporary interior",
      description:
        "Professional installation of large format porcelain tiles covering modern interior floor with polished finish and minimal grout lines in luxury contemporary setting",
      expectedScore: 9,
      confidence: 95,
    },
    {
      url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Polished porcelain tile flooring in high-end residential space",
      description:
        "High-end porcelain tile flooring installation with polished finish in luxury residential interior showcasing contemporary design",
      expectedScore: 8,
      confidence: 90,
    },
    {
      url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Premium porcelain flooring with marble-look finish",
      description:
        "Premium porcelain tiles with realistic marble-look finish installed as flooring in modern luxury interior with professional lighting",
      expectedScore: 8,
      confidence: 88,
    },
  ],
  "natural-stone": [
    {
      url: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Natural travertine stone flooring with visible texture",
      description:
        "Natural travertine stone flooring installation showing authentic stone texture and veining patterns in luxury interior setting with proper lighting",
      expectedScore: 9,
      confidence: 95,
    },
    {
      url: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Marble stone flooring in high-end commercial space",
      description:
        "High-quality marble stone flooring with natural veining patterns installed in luxury commercial space showcasing professional craftsmanship",
      expectedScore: 8,
      confidence: 90,
    },
  ],
  "vinyl-laminate": [
    {
      url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Luxury vinyl plank flooring with realistic wood appearance",
      description:
        "High-quality luxury vinyl plank flooring with realistic wood-look texture and grain patterns installed in modern contemporary interior",
      expectedScore: 8,
      confidence: 85,
    },
    {
      url: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Premium vinyl flooring with wood grain texture",
      description:
        "Premium vinyl flooring installation with authentic wood grain texture and professional installation in modern interior design setting",
      expectedScore: 7,
      confidence: 80,
    },
  ],
  mosaics: [
    {
      url: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Glass mosaic tile installation with artistic pattern",
      description:
        "Professional glass mosaic tile installation with intricate artistic pattern and decorative design showing skilled craftsmanship and clean grout lines",
      expectedScore: 8,
      confidence: 90,
    },
    {
      url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Decorative mosaic tiles in pool application",
      description:
        "Decorative mosaic tiles professionally installed in pool application with artistic pattern and blue color scheme showcasing appropriate mosaic use",
      expectedScore: 7,
      confidence: 85,
    },
  ],
};

export class SmartImageReplacementValidator {
  // Minimum acceptable score for replacements
  private static readonly MIN_REPLACEMENT_SCORE = 7;
  private static readonly MIN_IMPROVEMENT_THRESHOLD = 2; // Must improve by at least 2 points

  // Validate a potential replacement image
  static async validateReplacement(
    originalImage: AdvancedImageConfig,
    replacementCandidate: ReplacementCandidate,
  ): Promise<ReplacementValidation> {
    // Create a temporary image config for the replacement
    const tempReplacementConfig: AdvancedImageConfig = {
      id: `temp_${originalImage.id}`,
      primary: replacementCandidate.url,
      fallback: originalImage.fallback, // Keep original fallback for now
      alt: replacementCandidate.alt,
      category: originalImage.category,
      title: originalImage.title,
      subtitle: originalImage.subtitle,
      description: replacementCandidate.description,
      keywords: originalImage.keywords,
      location: originalImage.location,
      component: originalImage.component,
      purpose: originalImage.purpose,
    };

    // Analyze the replacement image
    const replacementScore = AdvancedImageAnalyzer.analyzeImageRelevance(
      tempReplacementConfig,
    );
    const originalScore = originalImage.relevanceScore || 0;
    const improvement = replacementScore - originalScore;

    let isValid = false;
    let reason = "";
    let recommendation: "accept" | "reject" | "needs_review" = "reject";
    const issues: string[] = [];

    // Validation logic
    if (replacementScore < this.MIN_REPLACEMENT_SCORE) {
      issues.push(
        `Replacement score ${replacementScore}/10 is below minimum threshold of ${this.MIN_REPLACEMENT_SCORE}/10`,
      );
      reason = `Replacement quality too low (${replacementScore}/10)`;
    } else if (improvement < this.MIN_IMPROVEMENT_THRESHOLD) {
      issues.push(
        `Improvement of ${improvement} points is below minimum threshold of ${this.MIN_IMPROVEMENT_THRESHOLD} points`,
      );
      reason = `Insufficient improvement (only +${improvement} points)`;
    } else if (replacementScore <= originalScore) {
      issues.push("Replacement is not better than original");
      reason = "No quality improvement detected";
    } else {
      // Passed all validations
      isValid = true;
      reason = `Excellent replacement: +${improvement} point improvement (${originalScore} → ${replacementScore})`;
      recommendation = "accept";
    }

    // Additional quality checks
    if (replacementCandidate.confidence < 70) {
      issues.push("Low confidence in replacement suitability");
      if (recommendation === "accept") {
        recommendation = "needs_review";
      }
    }

    // Check category appropriateness
    if (!this.validateCategoryMatch(tempReplacementConfig)) {
      issues.push("Replacement does not match category requirements");
      isValid = false;
      recommendation = "reject";
      reason = "Category mismatch detected";
    }

    return {
      isValid,
      score: replacementScore,
      originalScore,
      improvement,
      reason,
      issues,
      recommendation,
    };
  }

  // Validate that replacement matches category requirements
  private static validateCategoryMatch(
    imageConfig: AdvancedImageConfig,
  ): boolean {
    const description = imageConfig.description.toLowerCase();
    const category = imageConfig.category;

    switch (category) {
      case "porcelain":
        return (
          description.includes("porcelain") || description.includes("ceramic")
        );
      case "natural-stone":
        return (
          description.includes("stone") ||
          description.includes("marble") ||
          description.includes("travertine")
        );
      case "vinyl-laminate":
        return (
          description.includes("vinyl") || description.includes("laminate")
        );
      case "mosaics":
        return (
          description.includes("mosaic") || description.includes("small tile")
        );
      default:
        return true; // Allow other categories
    }
  }

  // Find the best validated replacement for an image
  static async findBestReplacement(
    originalImage: AdvancedImageConfig,
  ): Promise<ValidatedReplacement | null> {
    const category = originalImage.category;
    const candidates =
      VALIDATED_HIGH_QUALITY_REPLACEMENTS[
        category as keyof typeof VALIDATED_HIGH_QUALITY_REPLACEMENTS
      ];

    if (!candidates || candidates.length === 0) {
      return null;
    }

    let bestReplacement: ValidatedReplacement | null = null;
    let bestScore = 0;

    for (const candidate of candidates) {
      const replacementCandidate: ReplacementCandidate = {
        url: candidate.url,
        alt: candidate.alt,
        description: candidate.description,
        source: "curated",
        confidence: candidate.confidence,
      };

      const validation = await this.validateReplacement(
        originalImage,
        replacementCandidate,
      );

      if (validation.isValid && validation.score > bestScore) {
        bestScore = validation.score;

        // Create the validated replacement config
        const replacementConfig: AdvancedImageConfig = {
          id: originalImage.id,
          primary: candidate.url,
          fallback: this.generateFallbackUrl(candidate.url, category),
          alt: candidate.alt,
          category: originalImage.category,
          title: this.generateImprovedTitle(originalImage.title, category),
          subtitle: this.generateImprovedSubtitle(
            originalImage.subtitle,
            category,
          ),
          description: candidate.description,
          keywords: this.generateEnhancedKeywords(
            originalImage.keywords,
            category,
          ),
          location: originalImage.location,
          component: originalImage.component,
          purpose: originalImage.purpose,
          relevanceScore: validation.score,
        };

        bestReplacement = {
          originalImage,
          replacementImage: replacementConfig,
          validation,
          contextData: {
            category: originalImage.category,
            location: originalImage.location,
            purpose: originalImage.purpose,
            keywords: replacementConfig.keywords,
            requirements: this.getCategoryRequirements(category),
          },
        };
      }
    }

    return bestReplacement;
  }

  // Generate fallback URL for a replacement
  private static generateFallbackUrl(
    primaryUrl: string,
    category: string,
  ): string {
    const candidates =
      VALIDATED_HIGH_QUALITY_REPLACEMENTS[
        category as keyof typeof VALIDATED_HIGH_QUALITY_REPLACEMENTS
      ];
    if (candidates && candidates.length > 1) {
      // Find a different image from the same category
      const fallbackCandidate = candidates.find((c) => c.url !== primaryUrl);
      return fallbackCandidate?.url || primaryUrl;
    }
    return primaryUrl;
  }

  // Generate improved title
  private static generateImprovedTitle(
    originalTitle: string,
    category: string,
  ): string {
    const categoryTitles = {
      porcelain: "Premium Porcelain Collection",
      "natural-stone": "Natural Stone Collection",
      "vinyl-laminate": "Luxury Vinyl & Laminate",
      mosaics: "Artistic Mosaic Collection",
    };

    return (
      categoryTitles[category as keyof typeof categoryTitles] || originalTitle
    );
  }

  // Generate improved subtitle
  private static generateImprovedSubtitle(
    originalSubtitle: string,
    category: string,
  ): string {
    const categorySubtitles = {
      porcelain: "High-quality porcelain flooring with contemporary appeal",
      "natural-stone": "Authentic natural stone with luxury finish",
      "vinyl-laminate": "Modern flooring with realistic wood appearance",
      mosaics: "Artistic tile designs with professional installation",
    };

    return (
      categorySubtitles[category as keyof typeof categorySubtitles] ||
      originalSubtitle
    );
  }

  // Generate enhanced keywords
  private static generateEnhancedKeywords(
    originalKeywords: string[],
    category: string,
  ): string[] {
    const baseKeywords = [...originalKeywords];

    const categoryKeywords = {
      porcelain: ["premium", "luxury", "contemporary", "professional"],
      "natural-stone": ["authentic", "natural", "luxury", "texture"],
      "vinyl-laminate": ["realistic", "modern", "durable", "wood-look"],
      mosaics: ["artistic", "decorative", "pattern", "craftsmanship"],
    };

    const additionalKeywords =
      categoryKeywords[category as keyof typeof categoryKeywords] || [];

    // Merge and deduplicate
    return Array.from(new Set([...baseKeywords, ...additionalKeywords]));
  }

  // Get category requirements
  private static getCategoryRequirements(category: string): string[] {
    const requirements = {
      porcelain: [
        "Must show porcelain tiles as main subject",
        "Floor application preferred",
        "Contemporary or luxury setting",
        "Professional installation quality",
      ],
      "natural-stone": [
        "Must show authentic natural stone",
        "Visible texture and natural patterns",
        "High-end luxury setting",
        "Floor installation focus",
      ],
      "vinyl-laminate": [
        "Must show vinyl or laminate flooring",
        "Realistic wood-look texture preferred",
        "Modern interior setting",
        "Professional installation",
      ],
      mosaics: [
        "Must show mosaic tile patterns",
        "Artistic or decorative design",
        "Professional installation",
        "Appropriate application context",
      ],
    };

    return (
      requirements[category as keyof typeof requirements] || [
        "General quality standards",
      ]
    );
  }

  // Batch validate multiple replacements
  static async batchValidateReplacements(
    imagesToReplace: AdvancedImageConfig[],
  ): Promise<ValidatedReplacement[]> {
    const validatedReplacements: ValidatedReplacement[] = [];

    for (const image of imagesToReplace) {
      const replacement = await this.findBestReplacement(image);
      if (replacement) {
        validatedReplacements.push(replacement);
      }
    }

    return validatedReplacements;
  }

  // Generate replacement report
  static generateReplacementReport(
    validatedReplacements: ValidatedReplacement[],
  ): {
    totalCandidates: number;
    validReplacements: number;
    averageImprovement: number;
    qualityDistribution: Record<string, number>;
    recommendations: string[];
  } {
    const totalCandidates = validatedReplacements.length;
    const validReplacements = validatedReplacements.filter(
      (r) => r.validation.isValid,
    ).length;

    const improvements = validatedReplacements
      .filter((r) => r.validation.isValid)
      .map((r) => r.validation.improvement);

    const averageImprovement =
      improvements.length > 0
        ? improvements.reduce((sum, imp) => sum + imp, 0) / improvements.length
        : 0;

    const qualityDistribution: Record<string, number> = {
      "excellent (8-10)": 0,
      "good (7-8)": 0,
      "acceptable (6-7)": 0,
      "poor (<6)": 0,
    };

    validatedReplacements.forEach((r) => {
      const score = r.validation.score;
      if (score >= 8) qualityDistribution["excellent (8-10)"]++;
      else if (score >= 7) qualityDistribution["good (7-8)"]++;
      else if (score >= 6) qualityDistribution["acceptable (6-7)"]++;
      else qualityDistribution["poor (<6)"]++;
    });

    const recommendations: string[] = [];

    if (validReplacements > 0) {
      recommendations.push(
        `✅ ${validReplacements} high-quality replacements ready for deployment`,
      );
      recommendations.push(
        `📈 Average improvement: +${averageImprovement.toFixed(1)} points`,
      );
    }

    if (validReplacements < totalCandidates) {
      recommendations.push(
        `⚠️ ${totalCandidates - validReplacements} images did not meet quality standards`,
      );
      recommendations.push(
        `🔍 Consider manual review for rejected replacements`,
      );
    }

    recommendations.push(
      `🎯 All replacements validated to score ${this.MIN_REPLACEMENT_SCORE}+ with +${this.MIN_IMPROVEMENT_THRESHOLD} minimum improvement`,
    );

    return {
      totalCandidates,
      validReplacements,
      averageImprovement,
      qualityDistribution,
      recommendations,
    };
  }
}
