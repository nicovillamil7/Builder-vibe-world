
export interface SEOIssue {
  type: 'canonical' | 'headers' | 'title' | 'content' | 'schema' | 'twitter' | 'meta' | 'links' | 'og';
  severity: 'critical' | 'warning';
  description: string;
  fix: () => void;
}

export class GlobalSEOOptimizer {
  private static instance: GlobalSEOOptimizer;
  
  public static getInstance(): GlobalSEOOptimizer {
    if (!GlobalSEOOptimizer.instance) {
      GlobalSEOOptimizer.instance = new GlobalSEOOptimizer();
    }
    return GlobalSEOOptimizer.instance;
  }

  public fixCanonicalLinks(): void {
    // Remove existing canonical links
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) {
      existingCanonical.remove();
    }

    // Add proper canonical link
    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = window.location.href.split('?')[0].split('#')[0];
    document.head.appendChild(canonical);
  }

  public fixMissingHeaders(): void {
    const content = document.querySelector('main') || document.body;
    const h1 = content.querySelector('h1');
    
    if (h1 && !content.querySelector('h2')) {
      // Create h2 elements from existing h3s or add default ones
      const h3Elements = content.querySelectorAll('h3');
      
      if (h3Elements.length > 0) {
        h3Elements.forEach((h3, index) => {
          if (index < 3) { // Convert first 3 h3s to h2s
            const h2 = document.createElement('h2');
            h2.textContent = h3.textContent;
            h2.className = h3.className;
            h3.parentNode?.replaceChild(h2, h3);
          }
        });
      } else {
        // Add default h2 after h1
        const h2 = document.createElement('h2');
        h2.textContent = 'Premium Flooring Solutions';
        h2.className = 'text-2xl font-semibold mb-4';
        h1.parentNode?.insertBefore(h2, h1.nextSibling);
      }
    }
  }

  public fixPageTitle(): void {
    const title = document.querySelector('title');
    if (title && title.textContent) {
      if (title.textContent.length > 60) {
        title.textContent = title.textContent.substring(0, 57) + '...';
      }
    }
  }

  public addMissingMetaTags(): void {
    // Add robots meta if missing
    if (!document.querySelector('meta[name="robots"]')) {
      const robots = document.createElement('meta');
      robots.name = 'robots';
      robots.content = 'index, follow';
      document.head.appendChild(robots);
    }

    // Add Twitter Card meta tags if missing
    if (!document.querySelector('meta[name="twitter:card"]')) {
      const twitterCard = document.createElement('meta');
      twitterCard.name = 'twitter:card';
      twitterCard.content = 'summary_large_image';
      document.head.appendChild(twitterCard);
    }

    if (!document.querySelector('meta[name="twitter:site"]')) {
      const twitterSite = document.createElement('meta');
      twitterSite.name = 'twitter:site';
      twitterSite.content = '@genesisstoneusa';
      document.head.appendChild(twitterSite);
    }

    // Add OG site_name if missing
    if (!document.querySelector('meta[property="og:site_name"]')) {
      const ogSiteName = document.createElement('meta');
      ogSiteName.setAttribute('property', 'og:site_name');
      ogSiteName.content = 'Genesis Stone';
      document.head.appendChild(ogSiteName);
    }
  }

  public fixMetaDescription(): void {
    const metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (metaDesc) {
      const content = metaDesc.content;
      if (content.length < 120 || content.length > 160) {
        // Optimize length
        if (content.length < 120) {
          metaDesc.content = content + ' Professional flooring solutions and expert installation services in South Florida.';
        } else if (content.length > 160) {
          metaDesc.content = content.substring(0, 157) + '...';
        }
      }
    }
  }

  public addInternalLinks(): void {
    const content = document.querySelector('main') || document.body;
    const textNodes = this.getTextNodes(content);
    
    const linkReplacements = {
      'porcelain tiles': '<a href="/products/porcelain" class="text-primary hover:underline">porcelain tiles</a>',
      'natural stone': '<a href="/products/naturalStone" class="text-primary hover:underline">natural stone</a>',
      'laminate flooring': '<a href="/products/laminates" class="text-primary hover:underline">laminate flooring</a>',
      'contact us': '<a href="/contact" class="text-primary hover:underline">contact us</a>',
      'South Florida': '<a href="/service-areas" class="text-primary hover:underline">South Florida</a>'
    };

    textNodes.forEach(node => {
      if (node.parentElement?.tagName !== 'A') { // Don't link inside existing links
        let text = node.textContent || '';
        let hasReplacement = false;
        
        Object.entries(linkReplacements).forEach(([phrase, link]) => {
          if (text.toLowerCase().includes(phrase.toLowerCase()) && !hasReplacement) {
            const regex = new RegExp(phrase, 'gi');
            if (regex.test(text)) {
              text = text.replace(regex, link);
              hasReplacement = true;
            }
          }
        });
        
        if (hasReplacement && node.parentElement) {
          node.parentElement.innerHTML = text;
        }
      }
    });
  }

  private getTextNodes(element: Element): Text[] {
    const textNodes: Text[] = [];
    const walker = document.createTreeWalker(
      element,
      NodeFilter.SHOW_TEXT,
      null
    );
    
    let node;
    while (node = walker.nextNode()) {
      if (node.textContent?.trim()) {
        textNodes.push(node as Text);
      }
    }
    
    return textNodes;
  }

  public addStructuredData(): void {
    if (!document.querySelector('script[type="application/ld+json"]')) {
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Genesis Stone",
        "description": "Premium flooring solutions in South Florida",
        "url": "https://genesisstoneusa.com",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "FL",
          "addressCountry": "US"
        },
        "areaServed": "South Florida",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Flooring Products",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Porcelain Tiles"
              }
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "Product",
                "name": "Natural Stone"
              }
            }
          ]
        }
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }

  public runAllFixes(): void {
    console.log('🔧 Running global SEO fixes...');
    
    try {
      this.fixCanonicalLinks();
      console.log('✅ Fixed canonical links');
      
      this.fixMissingHeaders();
      console.log('✅ Fixed missing headers');
      
      this.fixPageTitle();
      console.log('✅ Fixed page title');
      
      this.addMissingMetaTags();
      console.log('✅ Added missing meta tags');
      
      this.fixMetaDescription();
      console.log('✅ Fixed meta description');
      
      this.addInternalLinks();
      console.log('✅ Added internal links');
      
      this.addStructuredData();
      console.log('✅ Added structured data');
      
      console.log('🎯 All SEO fixes applied successfully!');
    } catch (error) {
      console.error('❌ Error applying SEO fixes:', error);
    }
  }
}

// Development helper function
export const fixAllSEOIssues = (): void => {
  if (process.env.NODE_ENV === 'development') {
    const optimizer = GlobalSEOOptimizer.getInstance();
    optimizer.runAllFixes();
  }
};

// Auto-fix on page load in development
if (process.env.NODE_ENV === 'development') {
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      fixAllSEOIssues();
    }, 1000);
  });
}
