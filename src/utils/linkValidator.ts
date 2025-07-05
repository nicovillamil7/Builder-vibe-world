export interface LinkMapping {
  keywords: string[];
  url: string;
  type: 'internal' | 'external';
  context?: string;
  priority: number;
}

// Simplified internal links - only the most important ones
export const internalLinks: LinkMapping[] = [
  {
    keywords: ['laminate flooring', 'laminate floors'],
    url: '/products',
    type: 'internal',
    context: 'product',
    priority: 1
  },
  {
    keywords: ['natural stone', 'stone flooring'],
    url: '/products',
    type: 'internal',
    context: 'product',
    priority: 1
  },
  {
    keywords: ['porcelain tile', 'porcelain tiles'],
    url: '/products',
    type: 'internal',
    context: 'product',
    priority: 1
  },
  {
    keywords: ['professional installation', 'tile installation'],
    url: '/retail',
    type: 'internal',
    context: 'service',
    priority: 2
  },
  {
    keywords: ['wholesale', 'contractor pricing'],
    url: '/wholesale',
    type: 'internal',
    context: 'service',
    priority: 2
  }
];

// Simplified external links - only top authority sites
export const externalLinks: LinkMapping[] = [
  {
    keywords: ['National Association of Home Builders', 'NAHB'],
    url: 'https://www.nahb.org',
    type: 'external',
    context: 'authority',
    priority: 1
  },
  {
    keywords: ['Tile Council of North America', 'TCNA'],
    url: 'https://www.tcnatile.com',
    type: 'external',
    context: 'authority',
    priority: 1
  }
];

export function addLinksToContent(content: string): string {
  let linkedContent = content;
  const usedLinks = new Set<string>();
  let linksAdded = 0;
  const maxLinks = 5;

  // Combine and sort all links by priority
  const allLinks = [...internalLinks, ...externalLinks]
    .sort((a, b) => a.priority - b.priority);

  for (const link of allLinks) {
    if (linksAdded >= maxLinks) break;

    for (const keyword of link.keywords) {
      if (linksAdded >= maxLinks || usedLinks.has(keyword)) continue;

      const regex = new RegExp(`\\b${keyword}\\b`, 'i');
      const matches = linkedContent.match(regex);

      if (matches && matches.length > 0) {
        linkedContent = linkedContent.replace(regex, (match, offset) => {
          const beforeMatch = linkedContent.substring(0, offset);
          const existingLinks = (beforeMatch.match(/<a[^>]*>/g) || []).length;
          const closingLinks = (beforeMatch.match(/<\/a>/g) || []).length;

          // Don't link if we're already inside a link
          if (existingLinks > closingLinks) return match;

          usedLinks.add(keyword);
          linksAdded++;

          return link.type === 'internal' 
            ? `<a href="${link.url}" class="text-red-700 hover:text-red-800 font-medium underline">${match}</a>`
            : `<a href="${link.url}" target="_blank" rel="noopener noreferrer" class="text-blue-700 hover:text-blue-800 font-medium underline">${match}</a>`;
        });
        break; // Only use first keyword match per link
      }
    }
  }

  return linkedContent;
}