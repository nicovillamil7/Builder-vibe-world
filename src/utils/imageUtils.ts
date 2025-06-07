// Image Health Monitoring and Fallback System for Genesis Stone

export interface ImageConfig {
  id: string;
  primary: string;
  fallback: string;
  alt: string;
  category: string;
}

// Reliable image sources - using Unsplash with high-quality, consistent URLs
export const RELIABLE_IMAGES: Record<string, ImageConfig> = {
  // Porcelain & Modern Applications
  modernPoolDeck: {
    id: "modernPoolDeck",
    primary:
      "https://images.unsplash.com/photo-1594739797188-97c1a5b64b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    fallback:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Modern pool deck with large format porcelain tiles",
    category: "porcelain",
  },
  luxuryInterior: {
    id: "luxuryInterior",
    primary:
      "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    fallback:
      "https://images.unsplash.com/photo-1594739797188-97c1a5b64b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Luxury interior with marble accent wall and premium tiles",
    category: "luxury",
  },
  contemporaryWhite: {
    id: "contemporaryWhite",
    primary:
      "https://images.unsplash.com/photo-1562113530-57ba2cea56c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    fallback:
      "https://images.unsplash.com/photo-1594739797188-97c1a5b64b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Contemporary white polished porcelain interior space",
    category: "porcelain",
  },
  modernDining: {
    id: "modernDining",
    primary:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    fallback:
      "https://images.unsplash.com/photo-1594739797188-97c1a5b64b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Modern dining area with contemporary flooring",
    category: "porcelain",
  },

  // Natural Stone Applications
  travertinePool: {
    id: "travertinePool",
    primary:
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    fallback:
      "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Travertine pool area with spa and natural stone",
    category: "natural-stone",
  },
  darkStoneLiving: {
    id: "darkStoneLiving",
    primary:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    fallback:
      "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Contemporary living room with dark stone flooring",
    category: "natural-stone",
  },
  largeFormatPool: {
    id: "largeFormatPool",
    primary:
      "https://images.unsplash.com/photo-1594739797188-97c1a5b64b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    fallback:
      "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Pool deck with large format stone tiles",
    category: "natural-stone",
  },

  // Installation & Professional Services
  professionalInstallation: {
    id: "professionalInstallation",
    primary:
      "https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    fallback:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Professional flooring installation in progress",
    category: "installation",
  },
  installationProcess: {
    id: "installationProcess",
    primary:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    fallback:
      "https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Detailed view of professional installation technique",
    category: "installation",
  },

  // Mosaic & Specialty Applications
  blueMosaicSpa: {
    id: "blueMosaicSpa",
    primary:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    fallback:
      "https://images.unsplash.com/photo-1562113530-57ba2cea56c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Custom spa with blue mosaic tile design",
    category: "mosaics",
  },

  // Showroom & Business
  showroomDisplay: {
    id: "showroomDisplay",
    primary:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    fallback:
      "https://images.unsplash.com/photo-1594739797188-97c1a5b64b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Genesis Stone showroom with tile samples on display",
    category: "showroom",
  },

  // Vinyl & Laminate
  vinylInstallation: {
    id: "vinylInstallation",
    primary:
      "https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    fallback:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Luxury vinyl plank flooring installation",
    category: "vinyl-laminate",
  },
};

// Image health checker
export const checkImageHealth = async (url: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;

    // Timeout after 5 seconds
    setTimeout(() => resolve(false), 5000);
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

// Batch image health check
export const checkAllImagesHealth = async (): Promise<
  Record<string, boolean>
> => {
  const results: Record<string, boolean> = {};

  for (const [id, config] of Object.entries(RELIABLE_IMAGES)) {
    results[id] = await checkImageHealth(config.primary);
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
