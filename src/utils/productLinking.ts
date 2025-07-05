
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
        name: "Natural Stone Floors",
        url: "/products/naturalStone", 
        anchor: "natural stone floors Miami",
        description: "Explore premium natural stone flooring options"
      },
      {
        name: "Grout Solutions",
        url: "/products/grout",
        anchor: "porcelain tile grout solutions Miami", 
        description: "Professional grout for porcelain tile installations"
      },
      {
        name: "Metal Trims",
        url: "/products/metalTrims",
        anchor: "porcelain tile edge trim Miami",
        description: "Finishing accessories for porcelain tile projects"
      }
    ],
    laminates: [
      {
        name: "Porcelain Tiles", 
        url: "/products/porcelain",
        anchor: "large format porcelain tiles Miami",
        description: "Upgrade to durable porcelain tile flooring"
      },
      {
        name: "Natural Stone Floors",
        url: "/products/naturalStone",
        anchor: "natural stone floors vs laminate Miami", 
        description: "Compare natural stone flooring options"
      },
      {
        name: "Installation Services",
        url: "/wholesale",
        anchor: "professional flooring installation Miami",
        description: "Expert installation for all flooring types"
      }
    ],
    naturalStone: [
      {
        name: "Porcelain Tiles",
        url: "/products/porcelain",
        anchor: "porcelain tiles vs natural stone Miami",
        description: "Compare porcelain tile alternatives"
      },
      {
        name: "Pool Deck Solutions",
        url: "/retail",
        anchor: "travertine pool deck installation South Florida",
        description: "Specialized natural stone pool deck services"
      },
      {
        name: "Stone Installation",
        url: "/contact",
        anchor: "natural stone floors installation Miami",
        description: "Professional natural stone flooring consultation"
      }
    ],
    grout: [
      {
        name: "Porcelain Tiles",
        url: "/products/porcelain", 
        anchor: "porcelain tiles Miami supplier",
        description: "Premium porcelain tiles with matching grout"
      },
      {
        name: "Natural Stone",
        url: "/products/naturalStone",
        anchor: "natural stone grout solutions Miami",
        description: "Specialized grout for natural stone installations"
      },
      {
        name: "Mosaic Tiles",
        url: "/products/mosaics",
        anchor: "mosaic tile grout Miami",
        description: "Custom grout colors for mosaic projects"
      }
    ],
    mosaics: [
      {
        name: "Porcelain Tiles",
        url: "/products/porcelain",
        anchor: "porcelain tiles with mosaic accents Miami",
        description: "Complement mosaics with porcelain tile flooring"
      },
      {
        name: "Natural Stone",
        url: "/products/naturalStone",
        anchor: "natural stone mosaic floors Miami",
        description: "Natural stone options for mosaic designs"
      }
    ],
    wallPanels: [
      {
        name: "Porcelain Tiles",
        url: "/products/porcelain",
        anchor: "porcelain wall tiles Miami",
        description: "Porcelain tile options for wall applications"
      },
      {
        name: "Natural Stone",
        url: "/products/naturalStone",
        anchor: "natural stone wall panels Miami",
        description: "Natural stone solutions for wall cladding"
      }
    ],
    metalTrims: [
      {
        name: "Porcelain Tiles",
        url: "/products/porcelain",
        anchor: "porcelain tile trim solutions Miami",
        description: "Metal trims designed for porcelain installations"
      },
      {
        name: "Natural Stone",
        url: "/products/naturalStone",
        anchor: "natural stone edge trim Miami",
        description: "Professional edge solutions for natural stone"
      }
    ],
    mortarMix: [
      {
        name: "Porcelain Tiles",
        url: "/products/porcelain",
        anchor: "porcelain tile mortar Miami",
        description: "Specialized mortar for porcelain tile installation"
      },
      {
        name: "Natural Stone Floors",
        url: "/products/naturalStone",
        anchor: "natural stone installation mortar Miami",
        description: "Professional mortar for natural stone flooring"
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
