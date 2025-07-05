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

// Simple version for product grids
export const SimpleReliableImage: React.FC<{ imageId: string; alt: string; className?: string; priority?: boolean }> = ({
  imageId,
  alt,
  className = "",
  priority = false,
}) => {
  const config = {
    grout: { primary: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', fallback: '/placeholder.svg' },
    naturalStone: { primary: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', fallback: '/placeholder.svg' },
    laminates: { primary: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', fallback: '/placeholder.svg' },
    mosaics: { primary: 'https://images.unsplash.com/photo-1615971677499-5467609c2abd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', fallback: '/placeholder.svg' },
    wallPanels: { primary: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', fallback: '/placeholder.svg' },
    metalTrims: { primary: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', fallback: '/placeholder.svg' },
    mortarMix: { primary: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', fallback: '/placeholder.svg' },
    modernPoolDeck: { primary: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', fallback: '/placeholder.svg' },
    vinylInstallation: { primary: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', fallback: '/placeholder.svg' },
    blueMosaicSpa: { primary: 'https://images.unsplash.com/photo-1615971677499-5467609c2abd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', fallback: '/placeholder.svg' },
  };

  const imageConfig = config[imageId] || config.modernPoolDeck;
  const [src, setSrc] = useState(imageConfig.primary);
  const [isLoading, setIsLoading] = useState(true);
  
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ aspectRatio: '16/9' }}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="w-4 h-4 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
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
        fetchPriority={loading === 'eager' ? 'high' : 'low'}
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