
// Internal Linking Strategy for Genesis Stone & More
// Prioritizing Natural Stone Floors and Porcelain Tiles

export interface StrategicLink {
  anchor: string;
  url: string;
  priority: 'high' | 'medium' | 'low';
  category: 'natural-stone' | 'porcelain' | 'service' | 'commercial';
}

// Verified URLs from sitemap.xml
export const VERIFIED_URLS = [
  '/',
  '/products',
  '/products/grout',
  '/products/laminates', 
  '/products/metalTrims',
  '/products/mortarMix',
  '/products/mosaics',
  '/products/naturalStone',
  '/products/porcelain',
  '/products/wallPanels',
  '/retail',
  '/wholesale',
  '/about',
  '/contact',
  '/service-areas',
  '/blog'
];

// HIGH PRIORITY: Natural Stone Floors & Porcelain Tiles
export const HIGH_PRIORITY_ANCHORS = [
  {
    anchor: "natural stone floors Miami",
    url: "/products/naturalStone",
    priority: 'high' as const,
    category: 'natural-stone' as const
  },
  {
    anchor: "porcelain tiles Miami",
    url: "/products/porcelain", 
    priority: 'high' as const,
    category: 'porcelain' as const
  },
  {
    anchor: "large format porcelain tiles",
    url: "/products/porcelain",
    priority: 'high' as const,
    category: 'porcelain' as const
  },
  {
    anchor: "travertine flooring South Florida",
    url: "/products/naturalStone",
    priority: 'high' as const,
    category: 'natural-stone' as const
  },
  {
    anchor: "natural stone supplier Miami",
    url: "/products/naturalStone",
    priority: 'high' as const,
    category: 'natural-stone' as const
  },
  {
    anchor: "porcelain tile supplier Miami",
    url: "/products/porcelain",
    priority: 'high' as const,
    category: 'porcelain' as const
  }
];

// MEDIUM PRIORITY: Supporting Products & Services
export const MEDIUM_PRIORITY_ANCHORS = [
  {
    anchor: "luxury vinyl plank flooring Miami",
    url: "/products/laminates",
    priority: 'medium' as const,
    category: 'service' as const
  },
  {
    anchor: "mosaic tile installation Miami",
    url: "/products/mosaics", 
    priority: 'medium' as const,
    category: 'service' as const
  },
  {
    anchor: "wholesale flooring Miami",
    url: "/wholesale",
    priority: 'medium' as const,
    category: 'commercial' as const
  },
  {
    anchor: "professional grout solutions Miami",
    url: "/products/grout",
    priority: 'medium' as const,
    category: 'service' as const
  }
];

// CONTEXTUAL LINKING RULES
export const getContextualLinks = (pageType: string): StrategicLink[] => {
  const baseLinks = [...HIGH_PRIORITY_ANCHORS, ...MEDIUM_PRIORITY_ANCHORS];
  
  switch (pageType) {
    case 'homepage':
      return baseLinks.filter(link => link.priority === 'high').slice(0, 4);
    case 'products':
      return baseLinks.slice(0, 6);
    case 'blog':
      return baseLinks.filter(link => 
        link.category === 'natural-stone' || link.category === 'porcelain'
      );
    default:
      return baseLinks.slice(0, 3);
  }
};

// ANCHOR TEXT VARIATIONS (to avoid over-optimization)
export const ANCHOR_VARIATIONS = {
  'natural-stone': [
    "natural stone floors Miami",
    "natural stone flooring South Florida", 
    "travertine floors Miami",
    "natural stone supplier Miami",
    "stone flooring Miami"
  ],
  'porcelain': [
    "porcelain tiles Miami",
    "large format porcelain tiles",
    "porcelain tile flooring Miami",
    "porcelain tile supplier Miami", 
    "commercial porcelain tiles Miami"
  ]
};

export const validateUrl = (url: string): boolean => {
  return VERIFIED_URLS.includes(url);
};
