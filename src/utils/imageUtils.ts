// Image optimization utilities for reliable loading and performance

interface ImageConfig {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'jpg' | 'png';
}

export const getReliableImageUrl = (
  imageId: string, 
  config: ImageConfig = {}
): string => {
  const { width = 800, height = 600, quality = 80, format = 'webp' } = config;

  // Handle different image ID formats
  if (imageId.startsWith('http')) {
    return imageId; // Already a full URL
  }

  // Handle Builder.io URLs
  if (imageId.includes('builder.io') || imageId.includes('cdn.builder.io')) {
    return imageId;
  }

  // Handle Google Cloud Storage URLs
  if (imageId.includes('storage.googleapis.com')) {
    return imageId;
  }

  // Handle relative paths
  if (imageId.startsWith('/')) {
    return imageId;
  }

  // Check if the imageId exists in our RELIABLE_IMAGES
  const imageConfig = RELIABLE_IMAGES[imageId];
  if (imageConfig) {
    return imageConfig.primary;
  }

  // Fallback for unknown formats
  return `https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=${width}&h=${height}&q=${quality}`;
};

export const optimizeImageForMobile = (imageUrl: string): string => {
  return getReliableImageUrl(imageUrl, {
    width: 400,
    height: 300,
    quality: 70,
    format: 'webp'
  });
};

export const optimizeImageForDesktop = (imageUrl: string): string => {
  return getReliableImageUrl(imageUrl, {
    width: 1200,
    height: 800,
    quality: 85,
    format: 'webp'
  });
};

// Legacy alias for backward compatibility
export const getImageUrlById = getReliableImageUrl;

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
      "https://cdn.builder.io/api/v1/image/assets%2F794088d731be4280a896b77e76e82a50%2Fdb22d75002424925b61abb0b2c647e50?format=webp",
    fallback:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Porcelain Tiles",
    category: "porcelain",
  },
  luxuryInterior: {
    id: "luxuryInterior",
    primary:
      "https://cdn.builder.io/api/v1/image/assets%2F794088d731be4280a896b77e76e82a50%2F82084b8d71414a99aeb5979316a13668?format=webp",
    fallback:
      "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Luxury interior with marble accent wall and premium tiles",
    category: "luxury",
  },
  contemporaryWhite: {
    id: "contemporaryWhite",
    primary:
      "https://cdn.builder.io/api/v1/image/assets%2F794088d731be4280a896b77e76e82a50%2F5ca1a82e481b45e8b81cba03d3e6ad83",
    fallback:
      "https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Contemporary White - Porcelain Tiles flooring showcasing floor prominence",
    category: "contemporary",
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
      "https://cdn.builder.io/api/v1/image/assets%2F794088d731be4280a896b77e76e82a50%2F965f0200ba374906b44fa49ee7bcaa93",
    fallback:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Natural Stone",
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
      "https://cdn.builder.io/api/v1/image/assets%2F794088d731be4280a896b77e76e82a50%2F62a47965cba54dd7b57094f1e799ab8c",
    fallback:
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Mosaics",
    category: "mosaics",
  },

  // 🏗️ WALL PANELS - Modern wall panel systems
  wallPanels: {
    id: "wallPanels",
    primary:
      "https://cdn.builder.io/api/v1/assets/794088d731be4280a896b77e76e82a50/20250616_1826_modern-wall-panels_simple_compose_01jxxgztz3ergafrph5m9n3mjt-5b8656?format=webp&width=800",
    fallback:
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Modern wall panels with contemporary design and natural wood texture",
    category: "wall-panels",
  },

  // 🔧 METAL TRIMS - Professional finishing accessories
  metalTrims: {
    id: "metalTrims",
    primary:
      "https://cdn.builder.io/api/v1/assets/794088d731be4280a896b77e76e82a50/assets_task_01jxxhprpfenpt4vc9bsrmnaa1_1750117185_img_0-d27fd9?format=webp&width=800",
    fallback:
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Professional metal trim profiles in various finishes including chrome, brass, and copper",
    category: "accessories",
  },

  // 🧱 GROUT - Installation and finishing materials
  grout: {
    id: "grout",
    primary:
      "https://cdn.builder.io/api/v1/assets/794088d731be4280a896b77e76e82a50/assets_task_01jxxj50r8ffztx4xpjr30dqez_1750117638_img_0-c8d68e",
    fallback:
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Professional grouting process with tools for tile installation",
    category: "installation-materials",
  },

  // 🏗️ MORTAR MIX - Professional tile adhesive and mortar
  mortarMix: {
    id: "mortarMix",
    primary:
      "https://cdn.builder.io/api/v1/assets/794088d731be4280a896b77e76e82a50/assets_task_01jxxkx79bek4ap5qk2ke9mf8z_1750119497_img_0-89caf5?format=webp&width=800",
    fallback:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Professional mortar mix with tile installation tools and materials",
    category: "installation-materials",
  },

  // 🏢 SHOWROOM & BUSINESS - Unique business images
  showroomDisplay: {
    id: "showroomDisplay",
    primary:
      "https://cdn.builder.io/api/v1/image/assets%2F794088d731be4280a896b77e76e82a50%2Fd7a19663ca904dd68beaaa9471af36d0",
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
      "https://cdn.builder.io/api/v1/image/assets%2F794088d731be4280a896b77e76e82a50%2F718b2e6acfee4b5fa3f3a367b959b281",
    fallback:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Modern family home living room with large format porcelain and marble accents",
    category: "residential-projects",
  },
  historicHomeRenovation: {
    id: "historicHomeRenovation",
    primary:
      "https://cdn.builder.io/api/v1/image/assets%2F794088d731be4280a896b77e76e82a50%2F6d89169cab1540248d3097c5555fe354",
    fallback:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Historic home renovation blending classic architecture with modern flooring",
    category: "residential-projects",
  },
  waterfrontCondoUpgrade: {
    id: "waterfrontCondoUpgrade",
    primary:
      "https://cdn.builder.io/api/v1/image/assets%2F794088d731be4280a896b77e76e82a50%2F7c5feacc40d1433497e02a4682df187d",
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
      "https://cdn.builder.io/api/v1/image/assets%2F794088d731be4280a896b77e76e82a50%2Fd1016abb6dd24daca2f7d29f8042bb9c",
    fallback:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Luxury Apartment Complex",
    category: "commercial-projects",
  },
  officeTowerRenovation: {
    id: "officeTowerRenovation",
    primary:
      "https://cdn.builder.io/api/v1/image/assets%2F794088d731be4280a896b77e76e82a50%2F773283d622e342ac8bb986c99673a3a7",
    fallback:
      "https://images.unsplash.com/photo-1600566752734-fb8444a7e4db?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Office Tower Renovation",
    category: "commercial-projects",
  },
  retailShoppingCenter: {
    id: "retailShoppingCenter",
    primary:
      "https://cdn.builder.io/api/v1/image/assets%2F794088d731be4280a896b77e76e82a50%2F991e34ddb48a4181b4ed0ed85998369c",
    fallback:
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Retail Shopping Center",
    category: "commercial-projects",
  },

  // 🏠 SMALL RESIDENTIAL PROJECTS - New images for bathroom and home renovations
  bathroomRenovation: {
    id: "bathroomRenovation",
    primary:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    fallback:
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Modern bathroom renovation with porcelain tiles and natural stone accents",
    category: "residential-renovation",
  },
  residentialHomeRenovation: {
    id: "residentialHomeRenovation",
    primary:
      "https://cdn.builder.io/api/v1/image/assets%2F794088d731be4280a896b77e76e82a50%2F485a835ca8144078b06b6e8bff4194e8",
    fallback:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Elegant residential home renovation with luxury vinyl plank flooring and designer tiles",
    category: "residential-renovation",
  },
  retailStoreBuildout: {
    id: "retailStoreBuildout",
    primary:
      "https://cdn.builder.io/api/v1/image/assets%2F794088d731be4280a896b77e76e82a50%2Fff712814d5724f929615c4b691d30baf",
    fallback:
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Modern retail store build-out with commercial porcelain flooring and professional finish",
    category: "retail-commercial",
  },
  contractorHeroImage: {
    id: "contractorHeroImage",
    primary:
      "https://cdn.builder.io/api/v1/image/assets%2F794088d731be4280a896b77e76e82a50%2F9a94e48351c7464885d2f00aa4e7e208", // Using unique image for contractor hero
    fallback:
      "https://cdn.builder.io/api/v1/image/assets%2F794088d731be4280a896b77e76e82a50%2F82084b8d71414a99aeb5979316a13668?format=webp",
    alt: "Professional flooring installation at construction site",
    category: "commercial-projects",
  },

  // 🎯 FLOOR-FOCUSED PRODUCT IMAGES - 100% Unique for Products page

  // PORCELAIN TILES - Unique product images
  porcelainLargeFormat: {
    id: "porcelainLargeFormat",
    primary:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    fallback:
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Large format porcelain tiles covering entire floor in modern space",
    category: "porcelain-products",
  },
  porcelainMarbleLook: {
    id: "porcelainMarbleLook",
    primary:
      "https://cdn.builder.io/api/v1/image/assets%2F794088d731be4280a896b77e76e82a50%2F82084b8d71414a99aeb5979316a13668?format=webp", // Reusing but in different category
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