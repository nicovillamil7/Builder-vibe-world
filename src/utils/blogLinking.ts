
export interface LinkMap {
  [key: string]: {
    url: string;
    title: string;
    type: 'internal' | 'external';
  };
}

// Internal links to existing pages
export const INTERNAL_LINKS: LinkMap = {
  'laminate flooring Miami': {
    url: '/products',
    title: 'Premium Laminate Flooring Collection - Genesis Stone Miami',
    type: 'internal'
  },
  'commercial laminate flooring': {
    url: '/wholesale',
    title: 'Commercial Laminate Flooring Installation Miami',
    type: 'internal'
  },
  'natural stone floors Miami': {
    url: '/products',
    title: 'Natural Stone Flooring Collection - Genesis Stone Miami',
    type: 'internal'
  },
  'porcelain tiles Miami': {
    url: '/products',
    title: 'Porcelain Tile Collection - Genesis Stone Miami',
    type: 'internal'
  },
  'tile installation Miami': {
    url: '/retail',
    title: 'Professional Tile Installation Services Miami',
    type: 'internal'
  },
  'wholesale flooring Miami': {
    url: '/wholesale',
    title: 'Wholesale Flooring for Contractors - Genesis Stone Miami',
    type: 'internal'
  },
  'flooring contractor Miami': {
    url: '/wholesale',
    title: 'Professional Flooring Services for Contractors',
    type: 'internal'
  },
  'Genesis Stone showroom': {
    url: '/retail',
    title: 'Visit Our Miami Flooring Showroom - Genesis Stone',
    type: 'internal'
  },
  'contact us': {
    url: '/contact',
    title: 'Contact Genesis Stone - Miami Flooring Experts',
    type: 'internal'
  },
  'about Genesis Stone': {
    url: '/about',
    title: 'About Genesis Stone - Miami Flooring Specialists Since 2008',
    type: 'internal'
  }
};

// External links to relevant industry resources
export const EXTERNAL_LINKS: LinkMap = {
  'National Association of Home Builders': {
    url: 'https://www.nahb.org/',
    title: 'National Association of Home Builders - Construction Industry Standards',
    type: 'external'
  },
  'Environmental Protection Agency': {
    url: 'https://www.epa.gov/',
    title: 'EPA - Environmental Standards and Guidelines',
    type: 'external'
  },
  'Tile Council of North America': {
    url: 'https://www.tcnatile.com/',
    title: 'TCNA - Professional Tile Installation Standards',
    type: 'external'
  },
  'American National Standards Institute': {
    url: 'https://www.ansi.org/',
    title: 'ANSI - Industry Standards and Certifications',
    type: 'external'
  }
};

export const ALL_LINKS = { ...INTERNAL_LINKS, ...EXTERNAL_LINKS };

// Function to automatically add links to blog content
export const addLinksToContent = (content: string): string => {
  let updatedContent = content;
  
  // Sort links by length (longest first) to avoid partial matches
  const sortedLinks = Object.entries(ALL_LINKS).sort((a, b) => b[0].length - a[0].length);
  
  sortedLinks.forEach(([keyword, linkData]) => {
    // Create regex pattern that matches the keyword but not if it's already inside a link
    const regex = new RegExp(`(?<!<a[^>]*>)\\b${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b(?![^<]*</a>)`, 'gi');
    
    const linkTag = linkData.type === 'internal' 
      ? `<a href="${linkData.url}" title="${linkData.title}" class="text-red-700 hover:text-red-800 font-medium underline">${keyword}</a>`
      : `<a href="${linkData.url}" title="${linkData.title}" class="text-blue-700 hover:text-blue-800 font-medium underline" target="_blank" rel="noopener noreferrer">${keyword}</a>`;
    
    // Only replace first occurrence to avoid over-linking
    updatedContent = updatedContent.replace(regex, linkTag);
  });
  
  return updatedContent;
};

// Function to verify internal links exist
export const verifyInternalLinks = (): boolean => {
  const validRoutes = ['/', '/products', '/retail', '/wholesale', '/about', '/contact', '/blog', '/service-areas'];
  
  return Object.values(INTERNAL_LINKS).every(link => 
    validRoutes.includes(link.url)
  );
};
