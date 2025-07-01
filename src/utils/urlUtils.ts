export const validateUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const cleanUrl = (url: string): string => {
  // Remove trailing slashes except for root
  if (url !== '/' && url.endsWith('/')) {
    url = url.slice(0, -1);
  }
  
  // Convert to lowercase
  url = url.toLowerCase();
  
  // Replace spaces with hyphens
  url = url.replace(/\s+/g, '-');
  
  // Remove special characters except hyphens and slashes
  url = url.replace(/[^a-z0-9\-\/]/g, '');
  
  // Remove double hyphens
  url = url.replace(/--+/g, '-');
  
  return url;
};

export const generateCanonicalUrl = (path: string): string => {
  const baseUrl = 'https://genesisstoneusa.com';
  const cleanPath = cleanUrl(path);
  return `${baseUrl}${cleanPath}`;
};

// Blog URL utilities
export const generateBlogUrl = (slug: string): string => {
  const cleanSlug = cleanUrl(slug);
  return `/blog${cleanSlug.startsWith('/') ? '' : '/'}${cleanSlug}`;
};

export const getAllSiteUrls = (): string[] => {
  // Define all the URLs in your Genesis Stone website
  return [
    '/',
    '/products',
    '/products/grout',
    '/products/laminates', 
    '/products/metalTrims',
    '/products/mortarMix',
    '/products/mosaics',
    '/products/naturalStone',
    '/products/porcelain',
    '/products/wallPanels',
    '/retail',
    '/wholesale',
    '/about',
    '/contact',
    '/service-areas',
    '/blog',
    '/blog/benefits-of-laminate-flooring-for-enduring-elegance',
    '/blog/laminate-flooring-durability-that-lasts-for-years',
    '/seo-dashboard'
  ];
};

export const getFullUrl = (path: string): string => {
  const baseUrl = 'https://genesisstoneusa.com';
  return path === '/' ? baseUrl : `${baseUrl}${path}`;
};

export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};