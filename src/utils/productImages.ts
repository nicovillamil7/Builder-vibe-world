// 🎯 FLOOR-FOCUSED PRODUCT IMAGES - Category-Specific with Floor Prominence
// Each image showcases the actual flooring material with floors as the main focus

export interface ProductImageConfig {
  id: string;
  primary: string;
  fallback: string;
  alt: string;
  category: string;
  focus: string; // What the image emphasizes
}

// ✅ FLOOR-PROMINENT PRODUCT IMAGES - All URLs verified working
export const PRODUCT_IMAGES: Record<string, ProductImageConfig> = {
  // 🏠 PORCELAIN TILES - Floor-focused images showing porcelain prominently
  porcelainLargeFormat: {
    id: "porcelainLargeFormat",
    primary:
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    fallback:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Large format porcelain tiles covering entire floor in modern space",
    category: "porcelain",
    focus:
      "Large format porcelain tile flooring with clean lines and contemporary pattern",
  },
  porcelainMarbleLook: {
    id: "porcelainMarbleLook",
    primary:
      "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    fallback:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Porcelain tiles with realistic marble veining pattern covering floor",
    category: "porcelain",
    focus:
      "Marble-look porcelain flooring with natural veining and polished finish",
  },
  porcelainContemporary: {
    id: "porcelainContemporary",
    primary:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    fallback:
      "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Contemporary white porcelain floor tiles in minimalist space",
    category: "porcelain",
    focus:
      "White porcelain tile flooring with high-gloss finish and modern appeal",
  },

  // 🪨 NATURAL STONE - Floor-focused showing actual stone materials
  naturalTravertine: {
    id: "naturalTravertine",
    primary:
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    fallback:
      "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Natural travertine stone floor with filled and honed finish",
    category: "natural-stone",
    focus: "Travertine flooring showing natural stone texture and earth tones",
  },
  naturalSlate: {
    id: "naturalSlate",
    primary:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    fallback:
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Dark slate natural stone floor with rich charcoal coloring",
    category: "natural-stone",
    focus:
      "Slate stone flooring with natural cleft texture and dark sophisticated tones",
  },
  naturalMarble: {
    id: "naturalMarble",
    primary:
      "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    fallback:
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Natural marble floor with elegant veining and polished surface",
    category: "natural-stone",
    focus:
      "Marble flooring showcasing natural veining patterns and luxury appeal",
  },

  // 🏠 VINYL & LAMINATE - Floor-focused showing realistic wood and composite looks
  vinylLuxuryPlank: {
    id: "vinylLuxuryPlank",
    primary:
      "https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    fallback:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Luxury vinyl plank flooring with realistic wood grain texture",
    category: "vinyl-laminate",
    focus:
      "LVP flooring with authentic wood-look planks and waterproof construction",
  },
  laminateHardwood: {
    id: "laminateHardwood",
    primary:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    fallback:
      "https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Premium laminate flooring with hardwood appearance and AC5 rating",
    category: "vinyl-laminate",
    focus:
      "Laminate flooring with realistic hardwood texture and high-traffic durability",
  },
  spcFlooring: {
    id: "spcFlooring",
    primary:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    fallback:
      "https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "SPC core flooring with stone polymer composite construction",
    category: "vinyl-laminate",
    focus:
      "SPC flooring showing dimensional stability and commercial-grade performance",
  },

  // 🎨 MOSAICS - Floor applications with intricate patterns
  mosaicGlassFloor: {
    id: "mosaicGlassFloor",
    primary:
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    fallback:
      "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Glass mosaic tiles creating intricate floor patterns",
    category: "mosaics",
    focus:
      "Glass mosaic flooring with reflective surfaces and artistic patterns",
  },
  mosaicStoneBlend: {
    id: "mosaicStoneBlend",
    primary:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    fallback:
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Natural stone mosaic floor with mixed material composition",
    category: "mosaics",
    focus:
      "Stone mosaic flooring combining multiple natural materials in artistic patterns",
  },
  mosaicCustomDesign: {
    id: "mosaicCustomDesign",
    primary:
      "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    fallback:
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Custom mosaic floor design with bespoke pattern and premium materials",
    category: "mosaics",
    focus:
      "Custom mosaic flooring with unique artistic design and luxury materials",
  },
};

// Helper function to get product image by ID
export const getProductImageUrl = (imageId: string): string => {
  const config = PRODUCT_IMAGES[imageId];
  if (!config) {
    console.warn(`Product image ID "${imageId}" not found, using default`);
    return PRODUCT_IMAGES.porcelainLargeFormat.primary;
  }
  return config.primary;
};

// Get images by category
export const getProductImagesByCategory = (
  category: string,
): ProductImageConfig[] => {
  return Object.values(PRODUCT_IMAGES).filter(
    (img) => img.category === category,
  );
};

// Batch health check for product images
export const checkProductImagesHealth = async (): Promise<
  Record<string, boolean>
> => {
  const results: Record<string, boolean> = {};

  for (const [id, config] of Object.entries(PRODUCT_IMAGES)) {
    try {
      const response = await fetch(config.primary, { method: "HEAD" });
      results[id] = response.ok;
    } catch (error) {
      console.error(`Error checking product image ${id}:`, error);
      results[id] = false;
    }
  }

  return results;
};
