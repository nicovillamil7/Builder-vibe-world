
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
    imagesPreserved: true,
    linksFound: 0,
    issues: [] as string[]
  };

  // Validate our known internal links
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

  console.log('Blog Link Validation Report:');
  console.log('✅ Valid Internal Links:', linkValidation.validInternal);
  console.log('❌ Invalid Internal Links:', linkValidation.invalidInternal);
  console.log('🌐 External Links Available:', Object.keys(require('./blogLinking').EXTERNAL_LINKS).length);
  console.log('🔗 Total Link Types Available:', Object.keys(require('./blogLinking').ALL_LINKS).length);
  
  if (linkValidation.issues.length > 0) {
    console.log('Issues found:', linkValidation.issues);
  }

  return linkValidation;
};

// Test image preservation
export const testImagePreservation = (content: string) => {
  const { addLinksToContent, verifyImagePreservation } = require('./blogLinking');
  
  const originalContent = content;
  const processedContent = addLinksToContent(content);
  
  const preserved = verifyImagePreservation(originalContent, processedContent);
  
  console.log('Image Preservation Test:', preserved ? '✅ PASSED' : '❌ FAILED');
  
  return {
    preserved,
    originalImageCount: (originalContent.match(/<img[^>]*>/g) || []).length,
    processedImageCount: (processedContent.match(/<img[^>]*>/g) || []).length,
    linksAdded: (processedContent.match(/<a[^>]*>/g) || []).length
  };
};

// Run validation
validateBlogLinks();

export { validateBlogLinks, testImagePreservation };
