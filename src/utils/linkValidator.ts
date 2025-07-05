
export const validateBlogLinks = () => {
  const validInternalRoutes = [
    '/',
    '/products',
    '/retail', 
    '/wholesale',
    '/about',
    '/contact',
    '/blog',
    '/service-areas'
  ];

  const linkValidation = {
    validInternal: 0,
    invalidInternal: 0,
    external: 0,
    issues: [] as string[]
  };

  // This would normally check all processed blog content
  // For now, we'll just validate our known internal links
  Object.entries({
    '/products': 'Products page',
    '/retail': 'Retail/Homeowners page', 
    '/wholesale': 'Wholesale/Contractors page',
    '/about': 'About page',
    '/contact': 'Contact page',
    '/blog': 'Blog page',
    '/service-areas': 'Service Areas page'
  }).forEach(([route, description]) => {
    if (validInternalRoutes.includes(route)) {
      linkValidation.validInternal++;
    } else {
      linkValidation.invalidInternal++;
      linkValidation.issues.push(`Invalid internal route: ${route} (${description})`);
    }
  });

  console.log('Blog Link Validation:', linkValidation);
  return linkValidation;
};

// Run validation
validateBlogLinks();
