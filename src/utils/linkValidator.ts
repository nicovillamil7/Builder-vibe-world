
export interface LinkMapping {
  keywords: string[];
  url: string;
  type: 'internal' | 'external';
  context?: string;
}

export const internalLinks: LinkMapping[] = [
  {
    keywords: ['laminate flooring', 'laminate floors', 'laminate'],
    url: '/products/laminates',
    type: 'internal',
    context: 'product'
  },
  {
    keywords: ['porcelain tile', 'porcelain tiles', 'porcelain'],
    url: '/products/porcelain',
    type: 'internal',
    context: 'product'
  },
  {
    keywords: ['natural stone', 'stone flooring', 'marble', 'granite', 'travertine'],
    url: '/products/naturalStone',
    type: 'internal',
    context: 'product'
  },
  {
    keywords: ['grout', 'grout lines', 'tile grout'],
    url: '/products/grout',
    type: 'internal',
    context: 'product'
  },
  {
    keywords: ['mosaic tile', 'mosaic tiles', 'mosaics'],
    url: '/products/mosaics',
    type: 'internal',
    context: 'product'
  },
  {
    keywords: ['metal trim', 'edge trim', 'tile trim'],
    url: '/products/metalTrims',
    type: 'internal',
    context: 'product'
  },
  {
    keywords: ['mortar mix', 'tile mortar', 'installation mortar'],
    url: '/products/mortarMix',
    type: 'internal',
    context: 'product'
  },
  {
    keywords: ['wall panels', 'wall panel systems'],
    url: '/products/wallPanels',
    type: 'internal',
    context: 'product'
  },
  {
    keywords: ['wholesale', 'contractor pricing', 'trade pricing'],
    url: '/wholesale',
    type: 'internal',
    context: 'service'
  },
  {
    keywords: ['retail', 'showroom', 'visit our showroom'],
    url: '/retail',
    type: 'internal',
    context: 'service'
  },
  {
    keywords: ['contact us', 'get in touch', 'consultation'],
    url: '/contact',
    type: 'internal',
    context: 'contact'
  },
  {
    keywords: ['tile installation', 'installation techniques', 'installation guide'],
    url: '/blog/mastering-simple-tile-installation-techniques',
    type: 'internal',
    context: 'blog'
  },
  {
    keywords: ['flooring selection', 'choosing flooring', 'homeowner guide'],
    url: '/blog/homeowners-guide-tile-stone-flooring-selection',
    type: 'internal',
    context: 'blog'
  }
];

export const externalLinks: LinkMapping[] = [
  {
    keywords: ['National Association of Home Builders', 'NAHB'],
    url: 'https://www.nahb.org',
    type: 'external',
    context: 'authority'
  },
  {
    keywords: ['Tile Council of North America', 'TCNA'],
    url: 'https://www.tcnatile.com',
    type: 'external',
    context: 'authority'
  },
  {
    keywords: ['Environmental Protection Agency', 'EPA indoor air quality'],
    url: 'https://www.epa.gov/indoor-air-quality-iaq',
    type: 'external',
    context: 'authority'
  },
  {
    keywords: ['American National Standards Institute', 'ANSI standards'],
    url: 'https://www.ansi.org',
    type: 'external',
    context: 'authority'
  },
  {
    keywords: ['International Building Code', 'IBC'],
    url: 'https://www.iccsafe.org/building-safety-journal/bsj-technical/international-building-code/',
    type: 'external',
    context: 'authority'
  }
];

export function addLinksToContent(content: string): string {
  let linkedContent = content;
  const usedLinks = new Set<string>();

  // Add internal links first (prioritize our own content)
  internalLinks.forEach(link => {
    link.keywords.forEach(keyword => {
      if (usedLinks.has(keyword)) return;
      
      const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
      const matches = linkedContent.match(regex);
      
      if (matches && matches.length > 0) {
        // Only link the first occurrence to avoid over-linking
        linkedContent = linkedContent.replace(regex, (match, offset) => {
          const beforeMatch = linkedContent.substring(0, offset);
          const existingLinks = (beforeMatch.match(/<a[^>]*>/g) || []).length;
          const closingLinks = (beforeMatch.match(/<\/a>/g) || []).length;
          
          // Don't link if we're already inside a link
          if (existingLinks > closingLinks) return match;
          
          usedLinks.add(keyword);
          return `<a href="${link.url}">${match}</a>`;
        });
      }
    });
  });

  // Add external links
  externalLinks.forEach(link => {
    link.keywords.forEach(keyword => {
      if (usedLinks.has(keyword)) return;
      
      const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
      const matches = linkedContent.match(regex);
      
      if (matches && matches.length > 0) {
        linkedContent = linkedContent.replace(regex, (match, offset) => {
          const beforeMatch = linkedContent.substring(0, offset);
          const existingLinks = (beforeMatch.match(/<a[^>]*>/g) || []).length;
          const closingLinks = (beforeMatch.match(/<\/a>/g) || []).length;
          
          if (existingLinks > closingLinks) return match;
          
          usedLinks.add(keyword);
          return `<a href="${link.url}" target="_blank" rel="noopener noreferrer">${match}</a>`;
        });
      }
    });
  });

  return linkedContent;
}
