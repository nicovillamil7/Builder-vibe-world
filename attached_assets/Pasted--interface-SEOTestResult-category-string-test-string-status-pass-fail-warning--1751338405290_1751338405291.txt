
interface SEOTestResult {
  category: string;
  test: string;
  status: 'pass' | 'fail' | 'warning';
  score: number;
  message: string;
  element?: string;
  recommendation?: string;
}

interface SEOReport {
  overallScore: number;
  pageHealth: string;
  results: SEOTestResult[];
  summary: {
    passed: number;
    failed: number;
    warnings: number;
  };
}

export class SEOTestingUtility {
  private results: SEOTestResult[] = [];
  
  public async runFullSEOAudit(url: string = window.location.href): Promise<SEOReport> {
    this.results = [];
    
    // Run all SEO tests
    await this.testCanonicalLink();
    await this.testPageHeaders();
    await this.testPageTitle();
    await this.testContent();
    await this.testSchema();
    await this.testTwitterMeta();
    await this.testMetaDescription();
    await this.testInternalLinks();
    await this.testOpenGraphMeta();
    await this.testImages();
    await this.testPageURL();
    await this.testRobots();
    await this.testAnalytics();
    await this.testSitemap();
    await this.testHreflang();
    await this.testUniqueness();
    
    return this.generateReport();
  }

  private async testCanonicalLink(): Promise<void> {
    const canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    const currentURL = window.location.href.split('?')[0]; // Remove query params
    
    if (!canonical) {
      this.addResult('Technical', 'Canonical Link', 'fail', 0, 'Canonical link is missing', 'link[rel="canonical"]', 'Add a canonical link to prevent duplicate content issues');
    } else if (canonical.href !== currentURL) {
      this.addResult('Technical', 'Canonical Link', 'fail', 0, 'URL not matching canonical', canonical.href, 'Ensure canonical URL matches the current page URL');
    } else {
      this.addResult('Technical', 'Canonical Link', 'pass', 100, 'Canonical link is properly set');
    }
  }

  private async testPageHeaders(): Promise<void> {
    const h1s = document.querySelectorAll('h1');
    const h2s = document.querySelectorAll('h2');
    
    if (h1s.length === 0) {
      this.addResult('Content', 'Page Headers', 'fail', 0, 'H1 tag missing or empty', 'h1', 'Add a descriptive H1 tag to improve page structure');
    } else if (h1s.length > 1) {
      this.addResult('Content', 'Page Headers', 'warning', 50, 'Multiple H1 tags found', 'h1', 'Use only one H1 tag per page');
    } else if (h1s[0].textContent!.length < 20) {
      this.addResult('Content', 'Page Headers', 'warning', 60, 'H1 tag too short', h1s[0].textContent!, 'Make H1 more descriptive (20+ characters)');
    } else {
      this.addResult('Content', 'Page Headers', 'pass', 100, `H1 tag is properly set: "${h1s[0].textContent}"`);
    }

    if (h2s.length === 0) {
      this.addResult('Content', 'Page Headers', 'fail', 0, 'H2 tag missing or empty', 'h2', 'Add H2 tags to improve content structure');
    } else {
      this.addResult('Content', 'Page Headers', 'pass', 100, `Found ${h2s.length} H2 tags for good content structure`);
    }
  }

  private async testPageTitle(): Promise<void> {
    const title = document.querySelector('title');
    const titleText = title?.textContent || '';
    
    if (!title || titleText.length === 0) {
      this.addResult('Content', 'Page Title', 'fail', 0, 'Title tag is missing or empty', 'title', 'Add a descriptive title tag');
    } else if (titleText.length > 60) {
      this.addResult('Content', 'Page Title', 'fail', 20, 'Title too long', titleText, 'Keep title under 60 characters for better display in search results');
    } else if (titleText.length < 30) {
      this.addResult('Content', 'Page Title', 'warning', 60, 'Title may be too short', titleText, 'Consider making title more descriptive (30-60 characters)');
    } else {
      this.addResult('Content', 'Page Title', 'pass', 100, `Title is well optimized: "${titleText}"`);
    }
  }

  private async testContent(): Promise<void> {
    const bodyText = document.body.innerText;
    const wordCount = bodyText.split(/\s+/).length;
    
    if (wordCount < 300) {
      this.addResult('Content', 'Content', 'fail', 20, 'Content too short', `${wordCount} words`, 'Add more content (300+ words recommended)');
    } else if (wordCount < 500) {
      this.addResult('Content', 'Content', 'warning', 60, 'Content could be longer', `${wordCount} words`, 'Consider adding more comprehensive content');
    } else {
      this.addResult('Content', 'Content', 'pass', 100, `Good content length: ${wordCount} words`);
    }

    // Check for large JS files
    const scripts = document.querySelectorAll('script[src]');
    let hasLargeJS = false;
    scripts.forEach(script => {
      const src = (script as HTMLScriptElement).src;
      if (src.includes('chunk') || src.includes('vendor')) {
        hasLargeJS = true;
      }
    });

    if (hasLargeJS) {
      this.addResult('Performance', 'Content', 'warning', 70, 'JS file size may be large', 'Large JavaScript bundles detected', 'Consider code splitting for better performance');
    }
  }

  private async testSchema(): Promise<void> {
    const schemas = document.querySelectorAll('script[type="application/ld+json"]');
    
    if (schemas.length === 0) {
      this.addResult('Technical', 'Schema', 'fail', 0, 'Missing recommended schema markup', 'application/ld+json', 'Add structured data for better search engine understanding');
    } else {
      let validSchemas = 0;
      schemas.forEach(schema => {
        try {
          JSON.parse(schema.textContent || '');
          validSchemas++;
        } catch (e) {
          // Invalid JSON
        }
      });
      
      if (validSchemas === 0) {
        this.addResult('Technical', 'Schema', 'fail', 20, 'Schema markup is invalid', 'JSON-LD syntax error', 'Fix JSON syntax in structured data');
      } else {
        this.addResult('Technical', 'Schema', 'pass', 100, `Found ${validSchemas} valid schema markup(s)`);
      }
    }
  }

  private async testTwitterMeta(): Promise<void> {
    const twitterCard = document.querySelector('meta[name="twitter:card"]');
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    const twitterSite = document.querySelector('meta[name="twitter:site"]');
    
    const issues = [];
    
    if (!twitterCard) issues.push('Twitter Cards Title tag missing');
    if (!twitterTitle) issues.push('Twitter Cards Title tag missing');
    if (!twitterDesc) issues.push('Twitter Cards Description tag missing');
    if (!twitterImage) issues.push('Twitter Cards Image tag missing');
    if (!twitterSite) issues.push('Twitter Cards Site tag missing');
    
    if (issues.length > 0) {
      this.addResult('Social', 'Twitter Meta', 'fail', Math.max(0, 100 - (issues.length * 20)), 
        issues.join(', '), 'meta[name^="twitter:"]', 'Add missing Twitter Card meta tags');
    } else {
      this.addResult('Social', 'Twitter Meta', 'pass', 100, 'All Twitter Card meta tags are present');
    }
  }

  private async testMetaDescription(): Promise<void> {
    const metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    
    if (!metaDesc || !metaDesc.content) {
      this.addResult('Content', 'Meta Description', 'fail', 0, 'Meta description doesn\'t meet requirements', 'meta[name="description"]', 'Add a meta description (150-160 characters)');
    } else if (metaDesc.content.length < 120) {
      this.addResult('Content', 'Meta Description', 'warning', 60, 'Meta description may be too short', metaDesc.content, 'Consider making description longer (150-160 characters)');
    } else if (metaDesc.content.length > 160) {
      this.addResult('Content', 'Meta Description', 'warning', 70, 'Meta description may be too long', metaDesc.content, 'Keep description under 160 characters');
    } else {
      this.addResult('Content', 'Meta Description', 'pass', 100, 'Meta description is well optimized');
    }
  }

  private async testInternalLinks(): Promise<void> {
    const links = document.querySelectorAll('a[href^="/"], a[href*="genesisstoneusa.com"]');
    
    if (links.length < 3) {
      this.addResult('Content', 'Links', 'fail', 30, 'Too few internal links', `${links.length} internal links`, 'Add more internal links to improve site navigation and SEO');
    } else if (links.length < 6) {
      this.addResult('Content', 'Links', 'warning', 60, 'Could use more internal links', `${links.length} internal links`, 'Consider adding more internal links');
    } else {
      this.addResult('Content', 'Links', 'pass', 100, `Good internal linking: ${links.length} links found`);
    }
  }

  private async testOpenGraphMeta(): Promise<void> {
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const ogImage = document.querySelector('meta[property="og:image"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    
    const missing = [];
    if (!ogTitle) missing.push('og:title');
    if (!ogDesc) missing.push('og:description');
    if (!ogImage) missing.push('og:image');
    if (!ogUrl) missing.push('og:url');
    
    if (missing.length > 0) {
      this.addResult('Social', 'OG Meta', 'fail', Math.max(0, 100 - (missing.length * 25)), 
        `Open Graph Description too long: ${missing.join(', ')}`, 'meta[property^="og:"]', 'Add missing Open Graph meta tags');
    } else {
      this.addResult('Social', 'OG Meta', 'pass', 100, 'All Open Graph meta tags are present');
    }
  }

  private async testImages(): Promise<void> {
    const images = document.querySelectorAll('img');
    let issues = 0;
    
    images.forEach(img => {
      if (!img.alt) issues++;
      if (!img.src) issues++;
    });
    
    if (issues === 0) {
      this.addResult('Content', 'Images', 'pass', 100, 'No image issues found');
    } else {
      this.addResult('Content', 'Images', 'warning', Math.max(40, 100 - (issues * 10)), 
        `${issues} image issues found`, 'img elements', 'Ensure all images have alt text and valid src attributes');
    }
  }

  private async testPageURL(): Promise<void> {
    const url = window.location.href;
    const isClean = !url.includes('?') && !url.includes('#') && url.toLowerCase() === url;
    
    if (isClean) {
      this.addResult('Technical', 'Page URL', 'pass', 100, 'No URL issues found');
    } else {
      this.addResult('Technical', 'Page URL', 'warning', 70, 'URL could be cleaner', url, 'Consider using clean URLs without query parameters');
    }
  }

  private async testRobots(): Promise<void> {
    const robotsMeta = document.querySelector('meta[name="robots"]');
    
    if (!robotsMeta) {
      this.addResult('Technical', 'Robots', 'warning', 80, 'No robots meta tag found', 'meta[name="robots"]', 'Consider adding robots meta tag for explicit control');
    } else {
      const content = (robotsMeta as HTMLMetaElement).content;
      if (content.includes('noindex')) {
        this.addResult('Technical', 'Robots', 'warning', 50, 'Page set to noindex', content, 'Page will not be indexed by search engines');
      } else {
        this.addResult('Technical', 'Robots', 'pass', 100, 'No robots issues found');
      }
    }
  }

  private async testAnalytics(): Promise<void> {
    const hasGoogleAnalytics = document.querySelector('script[src*="googletagmanager.com"]') || 
                              document.querySelector('script[src*="google-analytics.com"]') ||
                              window.gtag || window.ga;
    
    if (hasGoogleAnalytics) {
      this.addResult('Technical', 'Analytics', 'pass', 100, 'No analytics issues found');
    } else {
      this.addResult('Technical', 'Analytics', 'warning', 70, 'No analytics tracking detected', 'Google Analytics', 'Consider adding Google Analytics for tracking');
    }
  }

  private async testSitemap(): Promise<void> {
    try {
      const response = await fetch('/sitemap.xml');
      if (response.ok) {
        this.addResult('Technical', 'Sitemap', 'pass', 100, 'No sitemap issues found');
      } else {
        this.addResult('Technical', 'Sitemap', 'warning', 70, 'Sitemap not accessible', '/sitemap.xml', 'Ensure sitemap.xml is accessible');
      }
    } catch {
      this.addResult('Technical', 'Sitemap', 'warning', 70, 'Could not check sitemap', '/sitemap.xml', 'Verify sitemap.xml exists and is accessible');
    }
  }

  private async testHreflang(): Promise<void> {
    const hreflangLinks = document.querySelectorAll('link[rel="alternate"][hreflang]');
    
    if (hreflangLinks.length === 0) {
      this.addResult('Technical', 'Hreflang', 'pass', 100, 'No hreflang issues found (not required for single language sites)');
    } else {
      this.addResult('Technical', 'Hreflang', 'pass', 100, `Found ${hreflangLinks.length} hreflang attributes`);
    }
  }

  private async testUniqueness(): Promise<void> {
    const title = document.querySelector('title')?.textContent || '';
    const metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    const h1 = document.querySelector('h1')?.textContent || '';
    
    // Basic uniqueness check (in a real implementation, you'd check against a database)
    const isUnique = title.length > 0 && h1.length > 0 && metaDesc?.content?.length > 0;
    
    if (isUnique) {
      this.addResult('Content', 'Uniqueness', 'pass', 100, 'No uniqueness issues found');
    } else {
      this.addResult('Content', 'Uniqueness', 'warning', 60, 'Content may not be unique enough', 'Page content', 'Ensure title, description, and content are unique');
    }
  }

  private addResult(category: string, test: string, status: 'pass' | 'fail' | 'warning', score: number, message: string, element?: string, recommendation?: string): void {
    this.results.push({
      category,
      test,
      status,
      score,
      message,
      element,
      recommendation
    });
  }

  private generateReport(): SEOReport {
    const totalScore = this.results.reduce((sum, result) => sum + result.score, 0);
    const maxScore = this.results.length * 100;
    const overallScore = Math.round((totalScore / maxScore) * 1000); // Scale to 1000 like in the screenshot
    
    const summary = {
      passed: this.results.filter(r => r.status === 'pass').length,
      failed: this.results.filter(r => r.status === 'fail').length,
      warnings: this.results.filter(r => r.status === 'warning').length
    };

    let pageHealth = 'Good';
    if (overallScore < 600) pageHealth = 'Poor';
    else if (overallScore < 800) pageHealth = 'Fair';

    return {
      overallScore,
      pageHealth,
      results: this.results.sort((a, b) => a.status === 'fail' ? -1 : b.status === 'fail' ? 1 : 0),
      summary
    };
  }
}

// Development-only testing function
export const runSEOTest = async (): Promise<void> => {
  if (process.env.NODE_ENV === 'development') {
    console.log('🔍 Running SEO Audit...');
    const seoTester = new SEOTestingUtility();
    const report = await seoTester.runFullSEOAudit();
    
    console.log(`📊 SEO Score: ${report.overallScore}/1000 (${report.pageHealth})`);
    console.log(`✅ Passed: ${report.summary.passed}`);
    console.log(`❌ Failed: ${report.summary.failed}`);
    console.log(`⚠️  Warnings: ${report.summary.warnings}`);
    
    console.group('📋 Detailed Results:');
    report.results.forEach(result => {
      const emoji = result.status === 'pass' ? '✅' : result.status === 'fail' ? '❌' : '⚠️';
      console.log(`${emoji} ${result.category} - ${result.test}: ${result.message}`);
      if (result.recommendation) {
        console.log(`   💡 ${result.recommendation}`);
      }
    });
    console.groupEnd();
    
    // Store results globally for debugging
    (window as any).seoReport = report;
  }
};
