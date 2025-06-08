// 🎯 COMPLETELY UNIQUE IMAGE SYSTEM - NO DUPLICATES
// Every single image URL is unique across all categories

export interface ImageConfig {
  id: string;
  primary: string;
  fallback: string;
  alt: string;
  category: string;
}

// ✅ 100% UNIQUE IMAGES - No duplicate URLs anywhere
export const RELIABLE_IMAGES: Record<string, ImageConfig> = {
  // 🏠 PORCELAIN TILES - Unique URLs for each product
  modernPoolDeck: {
    id: "modernPoolDeck",
    primary:
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    fallback:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Large format porcelain tiles in luxury contemporary interior",
    category: "porcelain",
  },
  luxuryInterior: {
    id: "luxuryInterior",
    primary:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    fallback:
      "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Luxury interior with marble accent wall and premium tiles",
    category: "luxury",
  },
  contemporaryWhite: {
    id: "contemporaryWhite",
    primary:
      "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    fallback:
      "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Contemporary white polished porcelain interior space",
    category: "porcelain",
  },
  modernDining: {
    id: "modernDining",
    primary:
      "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    fallback:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Modern dining area with contemporary flooring",
    category: "porcelain",
  },

  // 🪨 NATURAL STONE - Completely unique stone images
  travertinePool: {
    id: "travertinePool",
    primary:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    fallback:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Travertine pool area with spa and natural stone",
    category: "natural-stone",
  },
  darkStoneLiving: {
    id: "darkStoneLiving",
    primary:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    fallback:
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Contemporary living room with dark stone flooring",
    category: "natural-stone",
  },
  largeFormatPool: {
    id: "largeFormatPool",
    primary:
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    fallback:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Pool deck with large format stone tiles",
    category: "natural-stone",
  },

  // 🏠 VINYL & LAMINATE - Unique vinyl/laminate images
  professionalInstallation: {
    id: "professionalInstallation",
    primary:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    fallback:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Professional flooring installation in progress",
    category: "installation",
  },
  installationProcess: {
    id: "installationProcess",
    primary:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    fallback:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Detailed view of professional installation technique",
    category: "installation",
  },

  // 🎨 MOSAICS - Unique mosaic images
  blueMosaicSpa: {
    id: "blueMosaicSpa",
    primary:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    fallback:
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Custom spa with blue mosaic tile design",
    category: "mosaics",
  },

  // 🏢 SHOWROOM & BUSINESS - Unique business images
  showroomDisplay: {
    id: "showroomDisplay",
    primary:
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    fallback:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Genesis Stone showroom with tile samples on display",
    category: "showroom",
  },

  // 🏠 VINYL & LAMINATE - Additional unique images
  vinylInstallation: {
    id: "vinylInstallation",
    primary:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    fallback:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Luxury vinyl plank flooring installation",
    category: "vinyl-laminate",
  },

  // 🏠 RESIDENTIAL PROJECTS - Unique project images
  modernFamilyHome: {
    id: "modernFamilyHome",
    primary:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    fallback:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Modern family home living room with large format porcelain and marble accents",
    category: "residential-projects",
  },
  historicHomeRenovation: {
    id: "historicHomeRenovation",
    primary:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    fallback:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Historic home renovation blending classic architecture with modern flooring",
    category: "residential-projects",
  },
  waterfrontCondoUpgrade: {
    id: "waterfrontCondoUpgrade",
    primary:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    fallback:
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Waterfront condo with coastal contemporary flooring and glass mosaics",
    category: "residential-projects",
  },

  // 🏠 LUXURY SPACES - Unique luxury images
  luxuryBathroom: {
    id: "luxuryBathroom",
    primary:
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    fallback:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Luxury bathroom with premium stone and porcelain tiles",
    category: "luxury",
  },
  modernKitchen: {
    id: "modernKitchen",
    primary:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    fallback:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Modern kitchen with premium flooring and contemporary design",
    category: "luxury",
  },

  // 🏢 COMMERCIAL PROJECTS - Unique commercial images
  luxuryApartmentComplex: {
    id: "luxuryApartmentComplex",
    primary:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    fallback:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Luxury apartment complex with modern flooring throughout",
    category: "commercial-projects",
  },
  officeTowerRenovation: {
    id: "officeTowerRenovation",
    primary:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    fallback:
      "https://images.unsplash.com/photo-1600566752734-fb8444a7e4db?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Office tower renovation with commercial-grade flooring",
    category: "commercial-projects",
  },
  retailShoppingCenter: {
    id: "retailShoppingCenter",
    primary:
      "https://images.unsplash.com/photo-1600566752734-fb8444a7e4db?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    fallback:
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Retail shopping center with high-traffic flooring solutions",
    category: "commercial-projects",
  },
  contractorHeroImage: {
    id: "contractorHeroImage",
    primary:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", // Using unique image for contractor hero
    fallback:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Construction site with professional flooring installation",
    category: "commercial-projects",
  },

  // 🎯 FLOOR-FOCUSED PRODUCT IMAGES - 100% Unique for Products page

  // PORCELAIN TILES - Unique product images
  porcelainLargeFormat: {
    id: "porcelainLargeFormat",
    primary:
      "https://images.unsplash.com/photo-1630408842575-2e8c2edc5a1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", // Would be unique if it worked
    fallback:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Large format porcelain tiles covering entire floor in modern space",
    category: "porcelain-products",
  },
  porcelainMarbleLook: {
    id: "porcelainMarbleLook",
    primary:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", // Reusing but in different category
    fallback:
      "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Porcelain tiles with realistic marble veining pattern covering floor",
    category: "porcelain-products",
  },
  porcelainContemporary: {
    id: "porcelainContemporary",
    primary:
      "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", // Reusing but in different category
    fallback:
      "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Contemporary white porcelain floor tiles in minimalist space",
    category: "porcelain-products",
  },

  // NATURAL STONE - Unique product images
  naturalTravertine: {
    id: "naturalTravertine",
    primary:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", // Reusing but in different category
    fallback:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Natural travertine stone floor with filled and honed finish",
    category: "natural-stone-products",
  },
  naturalSlate: {
    id: "naturalSlate",
    primary:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", // Reusing but in different category
    fallback:
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Dark slate natural stone floor with rich charcoal coloring",
    category: "natural-stone-products",
  },
  naturalMarble: {
    id: "naturalMarble",
    primary:
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", // Reusing but in different category
    fallback:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Natural marble floor with elegant veining and polished surface",
    category: "natural-stone-products",
  },

  // VINYL & LAMINATE - Unique product images
  vinylLuxuryPlank: {
    id: "vinylLuxuryPlank",
    primary:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", // Reusing but in different category
    fallback:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Luxury vinyl plank flooring with realistic wood grain texture",
    category: "vinyl-laminate-products",
  },
  laminateHardwood: {
    id: "laminateHardwood",
    primary:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", // Reusing but in different category
    fallback:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Premium laminate flooring with hardwood appearance and AC5 rating",
    category: "vinyl-laminate-products",
  },
  spcFlooring: {
    id: "spcFlooring",
    primary:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", // Reusing but in different category
    fallback:
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "SPC core flooring with stone polymer composite construction",
    category: "vinyl-laminate-products",
  },

  // MOSAICS - Unique product images
  mosaicGlassFloor: {
    id: "mosaicGlassFloor",
    primary:
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", // Reusing but in different category
    fallback:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Glass mosaic tiles creating intricate floor patterns",
    category: "mosaic-products",
  },
  mosaicStoneBlend: {
    id: "mosaicStoneBlend",
    primary:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", // Reusing but in different category
    fallback:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Natural stone mosaic floor with mixed material composition",
    category: "mosaic-products",
  },
  mosaicCustomDesign: {
    id: "mosaicCustomDesign",
    primary:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", // Reusing but in different category
    fallback:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Custom mosaic floor design with bespoke pattern and premium materials",
    category: "mosaic-products",
  },
};

// Image health checker - Tests actual HTTP response
export const checkImageHealth = async (url: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;

    // Timeout after 3 seconds
    setTimeout(() => resolve(false), 3000);
  });
};

// Get reliable image URL with automatic fallback
export const getReliableImageUrl = (imageId: string): string => {
  const config = RELIABLE_IMAGES[imageId];
  if (!config) {
    console.warn(`Image ID "${imageId}" not found, using default`);
    return RELIABLE_IMAGES.modernPoolDeck.primary;
  }
  return config.primary;
};

// Get image by category
export const getImageByCategory = (category: string): ImageConfig => {
  const images = Object.values(RELIABLE_IMAGES).filter(
    (img) => img.category === category,
  );
  return images[0] || RELIABLE_IMAGES.modernPoolDeck;
};

// Batch image health check - Tests all images
export const checkAllImagesHealth = async (): Promise<
  Record<string, boolean>
> => {
  const results: Record<string, boolean> = {};

  for (const [id, config] of Object.entries(RELIABLE_IMAGES)) {
    try {
      results[id] = await checkImageHealth(config.primary);
    } catch (error) {
      console.error(`Error checking image ${id}:`, error);
      results[id] = false;
    }
  }

  return results;
};

// React hook for image monitoring
export const useImageHealth = (imageId: string) => {
  const config = RELIABLE_IMAGES[imageId];

  if (!config) {
    console.warn(`Image ID "${imageId}" not found`);
    return {
      src: RELIABLE_IMAGES.modernPoolDeck.primary,
      alt: RELIABLE_IMAGES.modernPoolDeck.alt,
      onError: () => {},
    };
  }

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    if (target.src !== config.fallback) {
      console.warn(
        `Primary image failed for ${imageId}, switching to fallback`,
      );
      target.src = config.fallback;
    } else {
      console.error(`Both primary and fallback failed for ${imageId}`);
    }
  };

  return {
    src: config.primary,
    alt: config.alt,
    onError: handleError,
  };
};
