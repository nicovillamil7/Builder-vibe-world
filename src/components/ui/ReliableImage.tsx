import React, { useState, useEffect } from "react";
import { getReliableImageUrl, RELIABLE_IMAGES } from "@/utils/imageUtils";
import { ImageSystemState } from "@/utils/imageSystemState";

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
  const [currentImageUrl, setCurrentImageUrl] = useState<string>("");

  // Check if there's an updated image from the AI system
  const aiImage = ImageSystemState.getImage(imageId);
  const config = aiImage || RELIABLE_IMAGES[imageId];
  const fallbackConfig = fallbackImageId
    ? RELIABLE_IMAGES[fallbackImageId]
    : null;

  // Update image URL when AI system changes
  useEffect(() => {
    const handleImageSystemUpdate = () => {
      const updatedImage = ImageSystemState.getImage(imageId);
      if (updatedImage) {
        setCurrentImageUrl(updatedImage.primary);
        setHasErrored(false);
        setIsLoading(true);
      }
    };

    window.addEventListener("imageSystemUpdated", handleImageSystemUpdate);

    // Set initial URL
    if (config) {
      setCurrentImageUrl(config.primary);
    }

    return () => {
      window.removeEventListener("imageSystemUpdated", handleImageSystemUpdate);
    };
  }, [imageId, config]);

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
        src={currentImageUrl || config.primary}
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
interface SimpleReliableImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  imageId: string;
}

export const SimpleReliableImage: React.FC<SimpleReliableImageProps> = ({
  imageId,
  alt,
  onError,
  ...props
}) => {
  const config = RELIABLE_IMAGES[imageId];

  if (!config) {
    console.warn(`Image ID "${imageId}" not found, using default`);
    return (
      <img
        src={RELIABLE_IMAGES.modernPoolDeck.primary}
        alt={alt || RELIABLE_IMAGES.modernPoolDeck.alt}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = RELIABLE_IMAGES.modernPoolDeck.fallback;
          onError?.(e);
        }}
        {...props}
      />
    );
  }

  return (
    <img
      src={config.primary}
      alt={alt || config.alt}
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        if (target.src !== config.fallback) {
          target.src = config.fallback;
        }
        onError?.(e);
      }}
      {...props}
    />
  );
};
