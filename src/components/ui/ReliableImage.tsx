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
  className = '',
  fallbackSrc = '/placeholder.svg',
  onLoad,
  onError,
  loading = 'lazy',
  sizes,
  srcSet,
  width,
  height,
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>(src);
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
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
    setIsLoaded(false);
  }, [src]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    if (!hasError && currentSrc !== fallbackSrc) {
      console.warn(`Failed to load image: ${currentSrc}, falling back to: ${fallbackSrc}`);
      setCurrentSrc(fallbackSrc);
      setHasError(true);
    }
    onError?.();
  };

  // Try WebP first, fallback to original format
  const optimizedSrc = getOptimizedSrc(currentSrc);

  return (
    <picture>
      {/* WebP version for modern browsers */}
      {optimizedSrc !== currentSrc && (
        <source srcSet={optimizedSrc} type="image/webp" />
      )}

      <img
        ref={imgRef}
        src={currentSrc}
        alt={alt}
        className={`${className} ${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onLoad={handleLoad}
        onError={handleError}
        loading={loading}
        sizes={sizes}
        srcSet={srcSet}
        width={width}
        height={height}
        decoding="async"
        fetchPriority={loading === 'eager' ? 'high' : 'auto'}
      />
    </picture>
  );
};