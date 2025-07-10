import React, { useState, useCallback } from "react";
import { getImageUrlById, RELIABLE_IMAGES } from "@/utils/imageUtils";

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
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
  format?: "webp" | "jpg" | "png";
  quality?: number;
}

export const SimpleReliableImage: React.FC<SimpleReliableImageProps> = ({
  imageId,
  src,
  alt,
  className = "",
  width = 400,
  height = 300,
  loading = "lazy",
  format = "webp",
  quality = 80,
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>("");
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getReliableImageUrl = useCallback((imageId: string): string[] => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const optimizedWidth = isMobile ? Math.min(width, 400) : width;
    const optimizedHeight = isMobile ? Math.min(height, 300) : height;
    const optimizedQuality = isMobile ? Math.min(quality, 75) : quality;

    const baseParams = `?format=${format}&width=${optimizedWidth}&height=${optimizedHeight}&fit=crop&quality=${optimizedQuality}`;

    return [
      `https://cdn.builder.io/api/v1/image/assets/794088d731be4280a896b77e76e82a50/${imageId}${baseParams}`,
      getImageUrlById(imageId),
      "/placeholder.svg"
    ];
  }, [width, height, format, quality]);

  React.useEffect(() => {
    if (imageId) {
      // Try to get the reliable image URL
      try {
        const reliableUrl = getReliableImageUrl(imageId);
        setCurrentSrc(reliableUrl);
      } catch (error) {
        console.warn(`Failed to get image for ${imageId}, using fallback`);
        setCurrentSrc("/placeholder.svg");
      }
    } else if (src) {
      setCurrentSrc(src);
    } else {
      setCurrentSrc("/placeholder.svg");
    }
    setHasError(false);
    setIsLoading(true);
  }, [imageId, src, getReliableImageUrl]);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    setIsLoading(false);
    
    if (!hasError) {
      setHasError(true);
      // Try fallback URL
      if (imageId) {
        const fallbackUrl = `https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=${width}&h=${height}&q=${quality}`;
        target.src = fallbackUrl;
        return;
      }
    }
    
    // Final fallback
    target.src = "/placeholder.svg";
  };

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
      onLoad={handleLoad}
      onError={handleError}
      loading={loading}
      width={width}
      height={height}
      decoding="async"
      fetchpriority={loading === "eager" ? "high" : "low"}
      style={{
        aspectRatio: `${width}/${height}`,
        contentVisibility: loading === "lazy" ? "auto" : "visible",
      }}
    />
  );
};