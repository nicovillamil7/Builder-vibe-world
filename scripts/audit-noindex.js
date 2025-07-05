
// Script to audit pages for noindex tags
const pages = [
  '/',
  '/products',
  '/products/grout',
  '/products/naturalStone',
  '/products/porcelain',
  '/products/laminates',
  '/products/mosaics',
  '/products/metalTrims',
  '/products/mortarMix',
  '/products/wallPanels',
  '/retail',
  '/wholesale',
  '/about',
  '/contact',
  '/blog',
  '/service-areas'
];

async function auditNoIndex() {
  console.log('🔍 Auditing pages for noindex tags...\n');
  
  for (const page of pages) {
    try {
      const response = await fetch(`https://genesisstoneusa.com${page}`, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; SEO-Audit/1.0)'
        }
      });
      
      if (response.ok) {
        const html = await response.text();
        const hasNoIndex = html.includes('noindex') || html.includes('NOINDEX');
        const hasNoFollow = html.includes('nofollow') || html.includes('NOFOLLOW');
        
        console.log(`${hasNoIndex ? '❌' : '✅'} ${page}`);
        if (hasNoIndex) {
          console.log(`   → Contains noindex tag`);
        }
        if (hasNoFollow) {
          console.log(`   → Contains nofollow tag`);
        }
      } else {
        console.log(`❌ ${page} - Status: ${response.status}`);
      }
    } catch (error) {
      console.log(`❌ ${page} - Error: ${error.message}`);
    }
  }
}

// Only run if this is the main module
if (typeof window === 'undefined') {
  auditNoIndex();
}
