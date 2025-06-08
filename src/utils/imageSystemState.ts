// 🎯 IMAGE SYSTEM STATE MANAGEMENT
// Handles loading, saving, and updating images in the actual website

import { AdvancedImageConfig } from "@/utils/advancedImageAnalysis";

export class ImageSystemState {
  private static readonly STORAGE_KEY = "intelligentImages";
  private static imageCache: Record<string, AdvancedImageConfig> = {};
  private static isInitialized = false;

  // Initialize the image system with current images
  static initialize(): void {
    if (this.isInitialized) return;

    this.loadImagesFromStorage();
    this.setupEventListeners();
    this.isInitialized = true;
  }

  // Load images from localStorage
  private static loadImagesFromStorage(): void {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        this.imageCache = JSON.parse(stored);
        console.log(
          `📸 Loaded ${Object.keys(this.imageCache).length} images from storage`,
        );
      }
    } catch (error) {
      console.warn("Failed to load images from storage:", error);
      this.imageCache = {};
    }
  }

  // Setup event listeners for system updates
  private static setupEventListeners(): void {
    window.addEventListener("imageSystemUpdated", (event: any) => {
      console.log("🔄 Image system updated, reloading cache...");
      this.loadImagesFromStorage();

      // Force re-render of components that use images
      this.notifyImageComponents();
    });
  }

  // Notify components that use images to re-render
  private static notifyImageComponents(): void {
    // Trigger a window resize event to force re-render
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 100);
  }

  // Get a specific image by ID
  static getImage(imageId: string): AdvancedImageConfig | null {
    this.initialize();
    return this.imageCache[imageId] || null;
  }

  // Get all images
  static getAllImages(): Record<string, AdvancedImageConfig> {
    this.initialize();
    return { ...this.imageCache };
  }

  // Get images by category
  static getImagesByCategory(category: string): AdvancedImageConfig[] {
    this.initialize();
    return Object.values(this.imageCache).filter(
      (img) => img.category === category,
    );
  }

  // Get the best image for a specific purpose
  static getBestImageForPurpose(
    purpose: string,
    category?: string,
  ): AdvancedImageConfig | null {
    this.initialize();

    let candidates = Object.values(this.imageCache);

    // Filter by category if provided
    if (category) {
      candidates = candidates.filter((img) => img.category === category);
    }

    // Filter by purpose match
    candidates = candidates.filter(
      (img) =>
        img.purpose?.toLowerCase().includes(purpose.toLowerCase()) ||
        img.title?.toLowerCase().includes(purpose.toLowerCase()) ||
        img.description?.toLowerCase().includes(purpose.toLowerCase()),
    );

    // Sort by relevance score
    candidates.sort(
      (a, b) => (b.relevanceScore || 0) - (a.relevanceScore || 0),
    );

    return candidates[0] || null;
  }

  // Get image URL with fallback
  static getImageUrl(
    imageId: string,
    useFallback: boolean = false,
  ): string | null {
    const image = this.getImage(imageId);
    if (!image) return null;

    return useFallback && image.fallback ? image.fallback : image.primary;
  }

  // Check if an image needs replacement (score below 7)
  static needsReplacement(imageId: string): boolean {
    const image = this.getImage(imageId);
    return image ? (image.relevanceScore || 0) < 7 : false;
  }

  // Get statistics about the current image system
  static getSystemStats(): {
    totalImages: number;
    averageScore: number;
    optimalImages: number;
    needsImprovement: number;
    criticalIssues: number;
    categories: string[];
  } {
    this.initialize();

    const images = Object.values(this.imageCache);
    const totalImages = images.length;

    if (totalImages === 0) {
      return {
        totalImages: 0,
        averageScore: 0,
        optimalImages: 0,
        needsImprovement: 0,
        criticalIssues: 0,
        categories: [],
      };
    }

    const averageScore =
      images.reduce((sum, img) => sum + (img.relevanceScore || 0), 0) /
      totalImages;
    const optimalImages = images.filter(
      (img) => (img.relevanceScore || 0) >= 7,
    ).length;
    const needsImprovement = images.filter(
      (img) => (img.relevanceScore || 0) < 7,
    ).length;
    const criticalIssues = images.filter(
      (img) => (img.relevanceScore || 0) < 5,
    ).length;
    const categories = Array.from(new Set(images.map((img) => img.category)));

    return {
      totalImages,
      averageScore,
      optimalImages,
      needsImprovement,
      criticalIssues,
      categories,
    };
  }

  // Update a specific image
  static updateImage(imageId: string, updatedImage: AdvancedImageConfig): void {
    this.initialize();
    this.imageCache[imageId] = updatedImage;
    this.saveToStorage();
  }

  // Save current cache to storage
  private static saveToStorage(): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.imageCache));
    } catch (error) {
      console.warn("Failed to save images to storage:", error);
    }
  }

  // Clear all images (for complete reset)
  static clearAll(): void {
    this.imageCache = {};
    localStorage.removeItem(this.STORAGE_KEY);
  }
}

// Auto-initialize when imported
ImageSystemState.initialize();
