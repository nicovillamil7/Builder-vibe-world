
export interface RelatedProduct {
  name: string;
  url: string;
  anchor: string;
  description: string;
}

export const getRelatedProducts = (currentProduct: string): RelatedProduct[] => {
  const productRelations: Record<string, RelatedProduct[]> = {
    porcelain: [
      {
        name: "Natural Stone",
        url: "/products/naturalStone", 
        anchor: "natural stone alternatives Miami",
        description: "Explore natural stone options for luxury projects"
      },
      {
        name: "Grout Solutions",
        url: "/products/grout",
        anchor: "professional grout solutions Miami", 
        description: "Complete your porcelain tile installation"
      },
      {
        name: "Metal Trims",
        url: "/products/metalTrims",
        anchor: "tile edge trim solutions Miami",
        description: "Professional finishing for porcelain installations"
      }
    ],
    laminates: [
      {
        name: "Luxury Vinyl Plank", 
        url: "/products/laminates",
        anchor: "waterproof luxury vinyl plank Miami",
        description: "Upgrade to waterproof luxury vinyl options"
      },
      {
        name: "Natural Stone",
        url: "/products/naturalStone",
        anchor: "natural stone flooring Miami", 
        description: "Consider natural stone for premium applications"
      },
      {
        name: "Installation Support",
        url: "/wholesale",
        anchor: "laminate flooring installation Miami",
        description: "Professional installation services available"
      }
    ],
    naturalStone: [
      {
        name: "Porcelain Tiles",
        url: "/products/porcelain",
        anchor: "porcelain stone-look tiles Miami",
        description: "Discover stone-look porcelain alternatives"
      },
      {
        name: "Pool Deck Travertine",
        url: "/products/naturalStone",
        anchor: "travertine pool decks South Florida",
        description: "Specialized pool deck solutions"
      },
      {
        name: "Custom Installation",
        url: "/contact",
        anchor: "natural stone installation consultation Miami",
        description: "Get expert consultation for your project"
      }
    ],
    grout: [
      {
        name: "Porcelain Tiles",
        url: "/products/porcelain", 
        anchor: "porcelain tiles Miami installation",
        description: "Complete tile and grout solutions"
      },
      {
        name: "Mosaic Tiles",
        url: "/products/mosaics",
        anchor: "custom mosaic tile installation Miami",
        description: "Specialty grout for mosaic projects"
      }
    ]
  };

  return productRelations[currentProduct] || [];
};

export const generateProductCrossLinks = (productCategory: string): string => {
  const related = getRelatedProducts(productCategory);
  
  if (related.length === 0) return '';
  
  return `
    <div class="mt-8 p-6 bg-gray-50 rounded-lg">
      <h3 class="text-lg font-semibold text-gray-900 mb-4">Related Products & Services</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        ${related.map(product => `
          <div class="bg-white p-4 rounded border">
            <h4 class="font-medium mb-2">
              <a href="${product.url}" class="text-red-700 hover:text-red-800 underline" title="${product.description}">${product.anchor}</a>
            </h4>
            <p class="text-sm text-gray-600">${product.description}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
};
