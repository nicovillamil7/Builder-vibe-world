export interface LinkMap {
  [key: string]: {
    url: string;
    title: string;
    type: 'internal' | 'external';
    priority: number; // 1 = highest priority, 5 = lowest
  };
}

// Internal links to existing pages - prioritized by business value
export const INTERNAL_LINKS: LinkMap = {
  'laminate flooring': {
    url: '/products',
    title: 'Laminate Flooring Collection - Genesis Stone',
    type: 'internal',
    priority: 1
  },
  'natural stone': {
    url: '/products',
    title: 'Natural Stone Collection - Genesis Stone',
    type: 'internal',
    priority: 1
  },
  'porcelain tiles': {
    url: '/products',
    title: 'Porcelain Tile Collection - Genesis Stone',
    type: 'internal',
    priority: 1
  },
  'tile installation': {
    url: '/retail',
    title: 'Professional Tile Installation Services',
    type: 'internal',
    priority: 2
  },
  'wholesale flooring': {
    url: '/wholesale',
    title: 'Wholesale Flooring for Contractors',
    type: 'internal',
    priority: 2
  },
  'contact us': {
    url: '/contact',
    title: 'Contact Genesis Stone - Miami Flooring Experts',
    type: 'internal',
    priority: 3
  },
  'flooring showroom': {
    url: '/retail',
    title: 'Visit Our Flooring Showroom - Genesis Stone',
    type: 'internal',
    priority: 3
  }
};

// External links to relevant industry resources - limited to high-authority sites
export const EXTERNAL_LINKS: LinkMap = {
  'National Association of Home Builders': {
    url: 'https://www.nahb.org/',
    title: 'National Association of Home Builders',
    type: 'external',
    priority: 1
  },
  'Tile Council of North America': {
    url: 'https://www.tcnatile.com/',
    title: 'TCNA - Professional Tile Installation Standards',
    type: 'external',
    priority: 1
  },
  'Environmental Protection Agency': {
    url: 'https://www.epa.gov/',
    title: 'EPA - Environmental Standards',
    type: 'external',
    priority: 2
  }
};

export const ALL_LINKS = { ...INTERNAL_LINKS, ...EXTERNAL_LINKS };

// Function to automatically add links to blog content - LIMITED TO 5 TOTAL LINKS
export const addLinksToContent = (content: string): string => {
  let updatedContent = content;
  let linksAdded = 0;
  const maxLinks = 5;

  // Sort links by priority (lower number = higher priority)
  const sortedLinks = Object.entries(ALL_LINKS)
    .sort((a, b) => a[1].priority - b[1].priority)
    .sort((a, b) => b[0].length - a[0].length); // Then by length to avoid partial matches

  for (const [keyword, linkData] of sortedLinks) {
    if (linksAdded >= maxLinks) break;

    // Create regex pattern that matches the keyword but not if it's already inside a link or image
    const regex = new RegExp(
      `(?<!<a[^>]*>)(?<!<img[^>]*>)(?<!alt="[^"]*?)(?<!title="[^"]*?)\\b${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b(?![^<]*</a>)(?![^"]*"[^>]*>)`, 
      'i' // Only match first occurrence (case insensitive)
    );

    if (regex.test(updatedContent)) {
      const linkTag = linkData.type === 'internal' 
        ? `<a href="${linkData.url}" title="${linkData.title}" class="text-red-700 hover:text-red-800 font-medium underline">${keyword}</a>`
        : `<a href="${linkData.url}" title="${linkData.title}" class="text-blue-700 hover:text-blue-800 font-medium underline" target="_blank" rel="noopener noreferrer">${keyword}</a>`;

      // Only replace first occurrence
      updatedContent = updatedContent.replace(regex, linkTag);
      linksAdded++;
    }
  }

  return updatedContent;
};

// Function to verify that images are preserved
export const verifyImagePreservation = (originalContent: string, processedContent: string): boolean => {
  const originalImages = originalContent.match(/<img[^>]*>/g) || [];
  const processedImages = processedContent.match(/<img[^>]*>/g) || [];

  return originalImages.length === processedImages.length;
};

// Function to verify internal links exist
export const verifyInternalLinks = (): boolean => {
  const validRoutes = ['/', '/products', '/retail', '/wholesale', '/about', '/contact', '/blog', '/service-areas'];

  return Object.values(INTERNAL_LINKS).every(link => 
    validRoutes.includes(link.url)
  );
};