import React, { useState } from "react";
import { getReliableImageUrl, RELIABLE_IMAGES } from "@/utils/imageUtils";

interface ReliableImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  imageId: string;
  fallbackImageId?: string;
  onLoadSuccess?: () => void;
  onLoadError?: (error: Event) => void;
}

export const ReliableImage: React.FC<ReliableImageProps> = ({
  imageId,
  fallbackImageId,
  onLoadSuccess,
  onLoadError,
  className = "",
  alt,
  ...props
}) => {
  const [hasErrored, setHasErrored] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const config = RELIABLE_IMAGES[imageId];
  const fallbackConfig = fallbackImageId
    ? RELIABLE_IMAGES[fallbackImageId]
    : null;

  if (!config) {
    console.warn(`Image ID "${imageId}" not found, using default`);
    return (
      <img
        src={RELIABLE_IMAGES.modernPoolDeck.primary}
        alt={alt || RELIABLE_IMAGES.modernPoolDeck.alt}
        className={className}
        {...props}
      />
    );
  }

  const handleLoad = () => {
    setIsLoading(false);
    onLoadSuccess?.();
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;

    if (!hasErrored) {
      // First error - try fallback
      setHasErrored(true);
      if (fallbackConfig) {
        target.src = fallbackConfig.primary;
        return;
      } else if (config.fallback !== config.primary) {
        target.src = config.fallback;
        return;
      }
    } else if (fallbackConfig && target.src === fallbackConfig.primary) {
      // Fallback image failed, try its fallback
      target.src = fallbackConfig.fallback;
      return;
    }

    // All fallbacks failed
    setIsLoading(false);
    onLoadError?.(e.nativeEvent);
    console.error(`All image sources failed for ${imageId}`);
  };

  return (
    <div className="relative">
      <img
        src={config.primary}
        alt={alt || config.alt}
        className={`${className} ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />

      {isLoading && (
        <div
          className={`absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center ${className}`}
        >
          <div className="text-gray-400 text-sm">Loading...</div>
        </div>
      )}
    </div>
  );
};

// Simplified version for cases where you just need a reliable URL
interface SimpleReliableImageProps {
  imageId?: string;
  src?: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
}

export const SimpleReliableImage: React.FC<SimpleReliableImageProps> = ({
  imageId,
  src,
  alt,
  className = "",
  fallbackSrc = "/placeholder.svg",
  width,
  height,
  loading = "lazy"
}) => {
  const imageSrc = getReliableImageUrl(imageId);
  const finalSrc = src || imageSrc || fallbackSrc;
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const currentSrc = src || imageSrc || fallbackSrc;

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <img
        src={currentSrc}
        alt={alt}
        loading={loading}
        decoding="async"
        fetchpriority={loading === 'eager' ? 'high' : 'low'}
        onLoad={handleLoad}
        onError={handleError}
        className={`w-full h-full object-cover transition-opacity duration-200 ${isLoading ? "opacity-0" : "opacity-100"} ${hasError ? "hidden" : ""}`}
        style={{ willChange: isLoading ? 'opacity' : 'auto' }}
      />
  );
};