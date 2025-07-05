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
    const ratio = `${img.naturalWidth}/${img.naturalHeight}`;
    setAspectRatio(ratio);
    setIsLoading(false);
    setHasError(false);
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
      style={{ aspectRatio }}
    >
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
        </div>
      )}

      <img
        src={currentSrc}
        alt={alt}
        loading={loading}
        decoding="async"
        fetchPriority="low"
        onLoad={handleLoad}
        onError={handleError}
        className={`w-full h-full object-cover transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"} ${hasError && "hidden"}`}
        sizes={sizes}
        srcSet={srcSet}
        width={width}
        height={height}
      />

      {hasError && (
        <div 
          className="flex items-center justify-center bg-gray-100 text-gray-500 text-sm p-4 w-full h-full"
          style={{ aspectRatio }}
        >
          Image unavailable
        </div>
      )}
    </div>
  );
};