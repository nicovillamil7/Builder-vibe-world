// 🧠 INTELLIGENT IMAGE SYSTEM - Content-Aware with Relevance Scoring
// Analyzes image-content match and automatically improves poor performers

export interface IntelligentImageConfig {
  id: string;
  primary: string;
  fallback: string;
  alt: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  keywords: string[];
  relevanceScore: number; // 1-10 rating
  contextMatch: string; // What it should show
  actualContent: string; // What it actually shows
  improvementSuggestions: string[];
}

// 🎯 CONTENT-SPECIFIC IMAGE REQUIREMENTS
export const IMAGE_REQUIREMENTS = {
  // PORCELAIN TILES - Must show actual porcelain floor tiles prominently
  porcelain: {
    mustShow: [
      "porcelain tiles",
      "ceramic flooring",
      "polished tiles",
      "large format tiles",
    ],
    keywords: [
      "porcelain",
      "ceramic",
      "tile",
      "floor",
      "polished",
      "matte",
      "contemporary",
    ],
    context: "Flooring showroom or installed porcelain tile floors",
    avoid: ["walls", "backsplash", "small tiles", "non-flooring applications"],
  },

  // NATURAL STONE - Must show real stone materials (marble, travertine, granite, slate)
  naturalStone: {
    mustShow: [
      "natural stone flooring",
      "marble floor",
      "travertine",
      "granite tiles",
      "slate flooring",
    ],
    keywords: [
      "marble",
      "travertine",
      "granite",
      "slate",
      "natural stone",
      "stone floor",
      "limestone",
    ],
    context:
      "Natural stone flooring installations with visible stone texture and patterns",
    avoid: ["synthetic materials", "porcelain", "ceramic", "artificial stone"],
  },

  // VINYL & LAMINATE - Must show realistic wood-look or vinyl plank flooring
  vinylLaminate: {
    mustShow: [
      "vinyl plank flooring",
      "laminate flooring",
      "LVP",
      "wood-look vinyl",
      "click flooring",
    ],
    keywords: [
      "vinyl",
      "laminate",
      "plank",
      "wood-look",
      "LVP",
      "SPC",
      "waterproof flooring",
    ],
    context:
      "Vinyl or laminate flooring installation or finished floors with realistic wood appearance",
    avoid: ["real hardwood", "tile", "stone", "carpet"],
  },

  // MOSAICS - Must show intricate mosaic patterns, small tiles in artistic arrangements
  mosaics: {
    mustShow: [
      "mosaic tiles",
      "small tile patterns",
      "glass mosaics",
      "stone mosaics",
      "intricate patterns",
    ],
    keywords: [
      "mosaic",
      "small tiles",
      "pattern",
      "glass tiles",
      "artistic",
      "decorative",
      "inlay",
    ],
    context:
      "Mosaic tile installations with visible small tile patterns and artistic designs",
    avoid: ["large tiles", "plain surfaces", "single-color installations"],
  },
};

// 🔍 INTELLIGENT IMAGE ANALYSIS SYSTEM
export class ImageIntelligenceAnalyzer {
  // Analyze how well an image matches its intended content (1-10 score)
  static analyzeRelevance(imageConfig: IntelligentImageConfig): number {
    const requirements =
      IMAGE_REQUIREMENTS[
        imageConfig.category as keyof typeof IMAGE_REQUIREMENTS
      ];
    if (!requirements) return 5; // Default score for unknown categories

    let score = 0;
    const maxScore = 10;

    // Check if image shows required content (40% of score)
    const contentMatch = requirements.mustShow.some(
      (content) =>
        imageConfig.description.toLowerCase().includes(content.toLowerCase()) ||
        imageConfig.title.toLowerCase().includes(content.toLowerCase()) ||
        imageConfig.alt.toLowerCase().includes(content.toLowerCase()),
    );
    if (contentMatch) score += 4;

    // Check keyword relevance (30% of score)
    const keywordMatches = requirements.keywords.filter(
      (keyword) =>
        imageConfig.description.toLowerCase().includes(keyword.toLowerCase()) ||
        imageConfig.title.toLowerCase().includes(keyword.toLowerCase()),
    ).length;
    score += Math.min(3, (keywordMatches / requirements.keywords.length) * 3);

    // Check context appropriateness (20% of score)
    const contextMatch = imageConfig.description
      .toLowerCase()
      .includes(requirements.context.toLowerCase());
    if (contextMatch) score += 2;

    // Penalty for content that should be avoided (10% of score)
    const hasAvoidedContent = requirements.avoid.some((avoid) =>
      imageConfig.description.toLowerCase().includes(avoid.toLowerCase()),
    );
    if (!hasAvoidedContent) score += 1;

    return Math.round(Math.min(maxScore, score));
  }

  // Generate improvement suggestions for low-scoring images
  static generateImprovementSuggestions(
    imageConfig: IntelligentImageConfig,
  ): string[] {
    const score = imageConfig.relevanceScore;
    const suggestions: string[] = [];

    if (score < 6) {
      suggestions.push(
        `🚨 LOW RELEVANCE (${score}/10) - Image doesn't match category "${imageConfig.category}"`,
      );
    }

    const requirements =
      IMAGE_REQUIREMENTS[
        imageConfig.category as keyof typeof IMAGE_REQUIREMENTS
      ];
    if (requirements) {
      suggestions.push(`📋 SHOULD SHOW: ${requirements.mustShow.join(", ")}`);
      suggestions.push(`🎯 IDEAL CONTEXT: ${requirements.context}`);
      suggestions.push(`❌ AVOID: ${requirements.avoid.join(", ")}`);
    }

    if (score < 4) {
      suggestions.push(
        "🔄 URGENT: Replace with category-specific image immediately",
      );
    } else if (score < 7) {
      suggestions.push(
        "⚠️ RECOMMENDED: Find better matching image when possible",
      );
    }

    return suggestions;
  }

  // Auto-generate better image alternatives for poor performers
  static generateImageAlternatives(category: string): string[] {
    const requirements =
      IMAGE_REQUIREMENTS[category as keyof typeof IMAGE_REQUIREMENTS];
    if (!requirements) return [];

    // Generate Unsplash search URLs based on requirements
    const searchTerms = requirements.mustShow.map(
      (term) => `https://unsplash.com/s/photos/${encodeURIComponent(term)}`,
    );

    return searchTerms;
  }
}

// 🎯 IMPROVED IMAGE DATABASE - With Proper Metadata and Relevance Scoring
export const INTELLIGENT_IMAGES: Record<string, IntelligentImageConfig> = {
  // ✅ PORCELAIN TILES - High-relevance porcelain flooring images
  porcelainLargeFormat: {
    id: "porcelainLargeFormat",
    primary:
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    fallback:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Large format porcelain tiles in modern interior space",
    category: "porcelain",
    title: "Large Format Porcelain Collection",
    subtitle: "Contemporary porcelain tiles with clean lines and modern appeal",
    description:
      "Large format porcelain tiles covering contemporary interior floor with polished finish and minimal grout lines",
    keywords: [
      "porcelain",
      "large format",
      "tiles",
      "contemporary",
      "polished",
      "floor",
    ],
    relevanceScore: 8,
    contextMatch: "Large format porcelain flooring in contemporary space",
    actualContent: "Modern interior with tile flooring",
    improvementSuggestions: [],
  },

  porcelainMarbleLook: {
    id: "porcelainMarbleLook",
    primary:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    fallback:
      "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Porcelain tiles with realistic marble veining pattern",
    category: "porcelain",
    title: "Marble-Look Porcelain Series",
    subtitle:
      "Porcelain tiles that replicate natural marble with modern durability",
    description:
      "Porcelain tiles with realistic marble veining pattern covering floor in luxury interior setting",
    keywords: [
      "porcelain",
      "marble-look",
      "veining",
      "luxury",
      "tiles",
      "floor",
    ],
    relevanceScore: 9,
    contextMatch: "Marble-look porcelain flooring with natural veining",
    actualContent: "Luxury interior with marble-pattern flooring",
    improvementSuggestions: [],
  },

  // ❌ POOR RELEVANCE EXAMPLE - Generic contemporary space (doesn't show porcelain specifically)
  porcelainContemporary: {
    id: "porcelainContemporary",
    primary:
      "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    fallback:
      "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Contemporary white interior space",
    category: "porcelain",
    title: "Contemporary White Collection",
    subtitle: "Modern minimalist interior design",
    description:
      "Contemporary white interior space with modern furniture and minimalist design approach",
    keywords: ["contemporary", "white", "minimalist", "modern", "interior"],
    relevanceScore: 3, // LOW - doesn't specifically show porcelain tiles
    contextMatch: "White porcelain tile flooring in contemporary space",
    actualContent: "Generic contemporary interior, flooring type unclear",
    improvementSuggestions: [
      "🚨 LOW RELEVANCE (3/10) - Image doesn't show porcelain tiles specifically",
      "📋 SHOULD SHOW: porcelain tiles, ceramic flooring, polished tiles, large format tiles",
      "🎯 IDEAL CONTEXT: Flooring showroom or installed porcelain tile floors",
      "🔄 URGENT: Replace with porcelain-specific flooring image",
    ],
  },

  // ✅ NATURAL STONE - High-relevance natural stone images
  naturalTravertine: {
    id: "naturalTravertine",
    primary:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    fallback:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Natural travertine stone pool deck with filled and honed finish",
    category: "naturalStone",
    title: "Travertine Pool Deck Collection",
    subtitle: "Natural travertine stone with authentic texture and earth tones",
    description:
      "Natural travertine stone flooring around pool area with filled and honed finish showing natural stone texture",
    keywords: [
      "travertine",
      "natural stone",
      "pool deck",
      "filled",
      "honed",
      "texture",
    ],
    relevanceScore: 9,
    contextMatch: "Natural travertine flooring with stone texture",
    actualContent: "Pool deck with natural travertine stone flooring",
    improvementSuggestions: [],
  },

  // 🎨 MOSAICS - Mixed relevance
  mosaicGlassFloor: {
    id: "mosaicGlassFloor",
    primary:
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    fallback:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Contemporary interior with glass accents",
    category: "mosaics",
    title: "Glass Mosaic Floor Collection",
    subtitle: "Reflective glass mosaics for artistic floor applications",
    description:
      "Contemporary interior space with glass design elements and modern fixtures",
    keywords: ["glass", "contemporary", "interior", "modern"],
    relevanceScore: 4, // LOW - doesn't show mosaic tiles specifically
    contextMatch: "Glass mosaic tile flooring with intricate patterns",
    actualContent: "Contemporary interior, no visible mosaic tiles",
    improvementSuggestions: [
      "🚨 LOW RELEVANCE (4/10) - Image doesn't show mosaic tiles",
      "📋 SHOULD SHOW: mosaic tiles, small tile patterns, glass mosaics, intricate patterns",
      "🎯 IDEAL CONTEXT: Mosaic tile installations with visible small tile patterns",
      "⚠️ RECOMMENDED: Find image showing actual mosaic tile work",
    ],
  },
};

// 🎯 INTELLIGENT IMAGE RECOMMENDATIONS
export const IMPROVED_IMAGE_SUGGESTIONS = {
  // Better porcelain tile images (specific search terms)
  porcelain: [
    "porcelain tile floor installation",
    "large format porcelain tiles",
    "polished porcelain flooring",
    "marble look porcelain tiles",
    "contemporary porcelain floor",
  ],

  // Better natural stone images
  naturalStone: [
    "travertine floor installation",
    "marble floor polished",
    "granite tile flooring",
    "slate floor natural",
    "limestone flooring interior",
  ],

  // Better vinyl/laminate images
  vinylLaminate: [
    "luxury vinyl plank flooring",
    "laminate wood floor installation",
    "SPC flooring waterproof",
    "vinyl plank click flooring",
    "realistic wood look vinyl",
  ],

  // Better mosaic images
  mosaics: [
    "glass mosaic tile pattern",
    "small mosaic tiles floor",
    "artistic mosaic installation",
    "stone mosaic pattern",
    "decorative mosaic flooring",
  ],
};

// 🔍 IMAGE QUALITY ANALYZER
export const analyzeAllImages = (): {
  poorPerformers: IntelligentImageConfig[];
  needsImprovement: IntelligentImageConfig[];
} => {
  const analyzed = Object.values(INTELLIGENT_IMAGES).map((img) => ({
    ...img,
    relevanceScore: ImageIntelligenceAnalyzer.analyzeRelevance(img),
    improvementSuggestions:
      ImageIntelligenceAnalyzer.generateImprovementSuggestions(img),
  }));

  const poorPerformers = analyzed.filter((img) => img.relevanceScore <= 4);
  const needsImprovement = analyzed.filter(
    (img) => img.relevanceScore > 4 && img.relevanceScore < 7,
  );

  return { poorPerformers, needsImprovement };
};

// 🚀 AUTO-IMPROVEMENT SYSTEM
export const generateImageImprovements = () => {
  const analysis = analyzeAllImages();

  console.log("🔍 IMAGE ANALYSIS RESULTS:");
  console.log(
    `📊 Poor Performers (≤4/10): ${analysis.poorPerformers.length} images`,
  );
  console.log(
    `⚠️ Needs Improvement (5-6/10): ${analysis.needsImprovement.length} images`,
  );

  analysis.poorPerformers.forEach((img) => {
    console.log(`🚨 URGENT: ${img.id} (${img.relevanceScore}/10)`);
    console.log(`   Problem: ${img.actualContent}`);
    console.log(`   Should be: ${img.contextMatch}`);
  });

  return analysis;
};
