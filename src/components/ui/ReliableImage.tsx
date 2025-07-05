import React, { useState, useRef, useEffect } from 'react';

interface ReliableImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  onLoad?: () => void;
  onError?: () => void;
  loading?: 'lazy' | 'eager';
  sizes?: string;
  srcSet?: string;
  width?: number;
  height?: number;
}

// Simple version for product grids - using actual Genesis Stone images
export const SimpleReliableImage: React.FC<{ imageId: string; alt: string; className?: string; priority?: boolean }> = ({
  imageId,
  alt,
  className = "",
  priority = false,
}) => {
  const config = {
    grout: { 
      primary: 'https://cdn.builder.io/api/v1/assets/794088d731be4280a896b77e76e82a50/assets_task_01jxxj50r8ffztx4xpjr30dqez_1750117638_img_0-c8d68e', 
      fallback: '/placeholder.svg' 
    },
    naturalStone: { 
      primary: 'https://cdn.builder.io/api/v1/image/assets%2F794088d731be4280a896b77e76e82a50%2F965f0200ba374906b44fa49ee7bcaa93', 
      fallback: '/placeholder.svg' 
    },
    laminates: { 
      primary: 'https://cdn.builder.io/api/v1/image/assets%2F794088d731be4280a896b77e76e82a50%2F7c5feacc40d1433497e02a4682df187d', 
      fallback: '/placeholder.svg' 
    },
    mosaics: { 
      primary: 'https://cdn.builder.io/api/v1/image/assets%2F794088d731be4280a896b77e76e82a50%2F62a47965cba54dd7b57094f1e799ab8c', 
      fallback: '/placeholder.svg' 
    },
    wallPanels: { 
      primary: 'https://cdn.builder.io/api/v1/assets/794088d731be4280a896b77e76e82a50/20250616_1826_modern-wall-panels_simple_compose_01jxxgztz3ergafrph5m9n3mjt-5b8656?format=webp&width=800', 
      fallback: '/placeholder.svg' 
    },
    metalTrims: { 
      primary: 'https://cdn.builder.io/api/v1/assets/794088d731be4280a896b77e76e82a50/assets_task_01jxxhprpfenpt4vc9bsrmnaa1_1750117185_img_0-d27fd9?format=webp&width=800', 
      fallback: '/placeholder.svg' 
    },
    mortarMix: { 
      primary: 'https://cdn.builder.io/api/v1/assets/794088d731be4280a896b77e76e82a50/assets_task_01jxxkx79bek4ap5qk2ke9mf8z_1750119497_img_0-89caf5?format=webp&width=800', 
      fallback: '/placeholder.svg' 
    },
    modernPoolDeck: { 
      primary: 'https://cdn.builder.io/api/v1/image/assets%2F794088d731be4280a896b77e76e82a50%2Fdb22d75002424925b61abb0b2c647e50?format=webp', 
      fallback: '/placeholder.svg' 
    },
    vinylInstallation: { 
      primary: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', 
      fallback: '/placeholder.svg' 
    },
    blueMosaicSpa: { 
      primary: 'https://cdn.builder.io/api/v1/image/assets%2F794088d731be4280a896b77e76e82a50%2F62a47965cba54dd7b57094f1e799ab8c', 
      fallback: '/placeholder.svg' 
    },
  };

  const imageConfig = config[imageId] || config.modernPoolDeck;
  const [src, setSrc] = useState(imageConfig.primary);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ aspectRatio: '16/9', minHeight: '200px' }}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="w-4 h-4 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchpriority={priority ? 'high' : 'low'}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          if (src !== imageConfig.fallback) {
            setSrc(imageConfig.fallback);
          }
        }}
        className={`w-full h-full object-cover transition-opacity duration-200 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        style={{ 
          maxWidth: '100%',
          height: 'auto',
        }}
        width="600"
        height="338"
      />
    </div>
  );
};

export const ReliableImage: React.FC<ReliableImageProps> = ({
  src,
  alt,
  className = "",
  fallbackSrc = '/placeholder.svg',
  onLoad,
  onError,
  loading = "lazy",
  sizes,
  srcSet,
  width,
  height,
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>(src);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const [aspectRatio, setAspectRatio] = useState<string>("16/9");
  const imgRef = useRef<HTMLImageElement>(null);

  // Generate WebP versions if possible
  const getOptimizedSrc = (originalSrc: string) => {
    if (originalSrc.includes('storage.googleapis.com') || originalSrc.includes('cdn.builder.io')) {
      return originalSrc;
    }

    if (originalSrc.includes('.jpg') || originalSrc.includes('.jpeg') || originalSrc.includes('.png')) {
      const webpSrc = originalSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      return webpSrc;
    }

    return originalSrc;
  };

  // Reset state when src changes
  useEffect(() => {
    setCurrentSrc(src);
    setHasError(false);
    setIsLoading(true); // Reset isLoading when src changes
  }, [src]);

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    if (img.naturalWidth && img.naturalHeight) {
      const ratio = `${img.naturalWidth}/${img.naturalHeight}`;
      setAspectRatio(ratio);
    }
    setIsLoading(false);
    setHasError(false);
    onLoad?.();
  };

  const handleError = () => {
    if (!hasError && currentSrc !== fallbackSrc) {
      console.warn(`Failed to load image: ${currentSrc}, falling back to: ${fallbackSrc}`);
      setCurrentSrc(fallbackSrc);
      setHasError(true);
      setIsLoading(false); // Ensure isLoading is false after fallback
    }
    onError?.();
  };

  // Try WebP first, fallback to original format
  const optimizedSrc = getOptimizedSrc(currentSrc);

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{ 
        aspectRatio,
        minHeight: height ? `${height}px` : '200px'
      }}
    >
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
        </div>
      )}

      <img
        ref={imgRef}
        src={currentSrc}
        alt={alt}
        loading={loading}
        decoding="async"
        fetchpriority={loading === 'eager' ? 'high' : 'low'}
        onLoad={handleLoad}
        onError={handleError}
        className={`w-full h-full object-cover transition-opacity duration-200 ${isLoading ? "opacity-0" : "opacity-100"} ${hasError ? "hidden" : ""}`}
        sizes={sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
        srcSet={srcSet}
        width={width}
        height={height}
        style={{
          maxWidth: '100%',
          height: 'auto'
        }}
      />

      {hasError && (
        <div 
          className="flex items-center justify-center bg-gray-100 text-gray-500 text-sm p-4 w-full h-full absolute inset-0"
          style={{ aspectRatio }}
        >
          Image unavailable
        </div>
      )}
    </div>
  );
};