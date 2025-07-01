
import { SEOImprovementWorkflow, runSEOWorkflow, testCurrentPage } from './seoImprovementWorkflow';
import { SEOTestingUtility } from './seoTestingUtility';

interface CommandResult {
  success: boolean;
  message: string;
  data?: any;
  logs?: string[];
}

export class SEOWorkflowCommands {
  private static instance: SEOWorkflowCommands;
  private workflow: SEOImprovementWorkflow;

  private constructor() {
    this.workflow = new SEOImprovementWorkflow();
  }

  public static getInstance(): SEOWorkflowCommands {
    if (!SEOWorkflowCommands.instance) {
      SEOWorkflowCommands.instance = new SEOWorkflowCommands();
    }
    return SEOWorkflowCommands.instance;
  }

  /**
   * Test current page SEO score
   */
  public async testPage(): Promise<CommandResult> {
    try {
      const seoTester = new SEOTestingUtility();
      const report = await seoTester.runFullSEOAudit();
      
      return {
        success: true,
        message: `SEO test completed. Score: ${report.overallScore}/1000 (${report.pageHealth})`,
        data: report
      };
    } catch (error) {
      return {
        success: false,
        message: `Failed to test page: ${error instanceof Error ? error.message : 'Unknown error'}`
      };
    }
  }

  /**
   * Run improvements on current page
   */
  public async improvePage(): Promise<CommandResult> {
    try {
      const result = await testCurrentPage();
      
      return {
        success: result.status !== 'failed',
        message: `Page improvement ${result.status}. Score: ${result.finalScore}/1000 (${result.improvement >= 0 ? '+' : ''}${result.improvement} improvement)`,
        data: result,
        logs: result.logs
      };
    } catch (error) {
      return {
        success: false,
        message: `Failed to improve page: ${error instanceof Error ? error.message : 'Unknown error'}`
      };
    }
  }

  /**
   * Run full site audit
   */
  public async auditSite(): Promise<CommandResult> {
    try {
      const results = await runSEOWorkflow();
      const totalPages = results.length;
      const avgScore = results.reduce((sum, r) => sum + r.finalScore, 0) / totalPages;
      const completedPages = results.filter(r => r.status === 'completed').length;
      
      return {
        success: true,
        message: `Site audit completed. ${completedPages}/${totalPages} pages optimized. Average score: ${avgScore.toFixed(0)}/1000`,
        data: results
      };
    } catch (error) {
      return {
        success: false,
        message: `Failed to audit site: ${error instanceof Error ? error.message : 'Unknown error'}`
      };
    }
  }

  /**
   * Run improvements on all pages
   */
  public async improveSite(options?: { threshold?: number; maxRetries?: number }): Promise<CommandResult> {
    try {
      const config = {
        minScoreThreshold: options?.threshold || 800,
        maxRetries: options?.maxRetries || 3
      };

      const results = await runSEOWorkflow(config);
      const totalPages = results.length;
      const completedPages = results.filter(r => r.status === 'completed').length;
      const avgImprovement = results.reduce((sum, r) => sum + r.improvement, 0) / totalPages;
      
      return {
        success: completedPages > 0,
        message: `Site improvement completed. ${completedPages}/${totalPages} pages successfully optimized. Average improvement: ${avgImprovement.toFixed(0)} points`,
        data: results
      };
    } catch (error) {
      return {
        success: false,
        message: `Failed to improve site: ${error instanceof Error ? error.message : 'Unknown error'}`
      };
    }
  }

  /**
   * Get detailed report for a specific URL
   */
  public async getPageReport(url?: string): Promise<CommandResult> {
    try {
      const currentUrl = url || window.location.pathname;
      const result = await this.workflow.processPage(currentUrl);
      
      return {
        success: true,
        message: `Report generated for ${currentUrl}`,
        data: result
      };
    } catch (error) {
      return {
        success: false,
        message: `Failed to generate report: ${error instanceof Error ? error.message : 'Unknown error'}`
      };
    }
  }

  /**
   * Clear workflow logs
   */
  public clearLogs(): CommandResult {
    this.workflow.clearLogs();
    return {
      success: true,
      message: 'Workflow logs cleared'
    };
  }

  /**
   * Get workflow logs
   */
  public getLogs(): CommandResult {
    const logs = this.workflow.getLogs();
    return {
      success: true,
      message: `Retrieved ${logs.length} log entries`,
      data: logs
    };
  }

  /**
   * Test all pages on the site
   */
  public async testAllPages(): Promise<CommandResult> {
    try {
      const { runSiteWideSEOTest } = await import('./seoTestingUtility');
      const results = await runSiteWideSEOTest();
      
      const totalPages = Object.keys(results).length;
      const avgScore = Object.values(results).reduce((sum, report) => sum + report.overallScore, 0) / totalPages;
      const goodPages = Object.values(results).filter(report => report.overallScore >= 800).length;
      
      return {
        success: true,
        message: `Site-wide test completed. ${totalPages} pages tested. Average score: ${avgScore.toFixed(0)}/1000. ${goodPages} pages scoring 800+`,
        data: results
      };
    } catch (error) {
      return {
        success: false,
        message: `Failed to test all pages: ${error instanceof Error ? error.message : 'Unknown error'}`
      };
    }
  }
}

// Global command functions for easy access
export const seoCommands = {
  test: () => SEOWorkflowCommands.getInstance().testPage(),
  improve: () => SEOWorkflowCommands.getInstance().improvePage(),
  auditSite: () => SEOWorkflowCommands.getInstance().auditSite(),
  improveSite: (options?: { threshold?: number; maxRetries?: number }) => 
    SEOWorkflowCommands.getInstance().improveSite(options),
  report: (url?: string) => SEOWorkflowCommands.getInstance().getPageReport(url),
  logs: () => SEOWorkflowCommands.getInstance().getLogs(),
  clearLogs: () => SEOWorkflowCommands.getInstance().clearLogs(),
  testAll: () => SEOWorkflowCommands.getInstance().testAllPages()
};

// Development helper - attach to window for easy console access
if (process.env.NODE_ENV === 'development') {
  (window as any).seo = seoCommands;
  console.log('🔧 SEO Commands available via window.seo:');
  console.log('  - seo.test() - Test current page');
  console.log('  - seo.testAll() - Test all site pages');
  console.log('  - seo.improve() - Improve current page');
  console.log('  - seo.auditSite() - Audit entire site');
  console.log('  - seo.improveSite() - Improve entire site');
  console.log('  - seo.report(url) - Get detailed report');
  console.log('  - seo.logs() - View workflow logs');
  console.log('  - seo.clearLogs() - Clear logs');
  console.log('  - seo.help() - Show this help menu');
  
  // Add help command
  (window as any).seo.help = () => {
    console.log('\n🎯 === SEO WORKFLOW COMMANDS HELP ===');
    console.log('💡 Quick Start:');
    console.log('   seo.testAll()    - Run site-wide SEO analysis');
    console.log('   seo.auditSite()  - Full audit with improvements');
    console.log('\n🔍 Testing Commands:');
    console.log('   seo.test()       - Test current page SEO');
    console.log('   seo.testAll()    - Test all site pages');
    console.log('\n🛠️  Improvement Commands:');
    console.log('   seo.improve()    - Improve current page');
    console.log('   seo.improveSite()- Improve entire site');
    console.log('\n📊 Reporting Commands:');
    console.log('   seo.report(url)  - Detailed page report');
    console.log('   seo.logs()       - View workflow logs');
    console.log('   seo.clearLogs()  - Clear all logs');
    console.log('=== END HELP ===\n');
  };
  
  // Auto-run site-wide test on load
  console.log('🚀 Running automatic site-wide SEO test...');
  setTimeout(async () => {
    try {
      const result = await seoCommands.testAll();
      console.log('\n📊 === SITE-WIDE SEO TEST RESULTS ===');
      console.log(result.message);
      
      if (result.data) {
        const results = result.data;
        console.log('\n📋 Individual Page Results:');
        Object.entries(results).forEach(([url, report]: [string, any]) => {
          const statusEmoji = report.overallScore >= 800 ? '✅' : report.overallScore >= 600 ? '⚠️' : '❌';
          console.log(`${statusEmoji} ${url}: ${report.overallScore}/1000 (${report.pageHealth})`);
          
          // Show critical issues
          const criticalIssues = report.results.filter((r: any) => r.status === 'fail');
          if (criticalIssues.length > 0) {
            console.log(`   ❌ ${criticalIssues.length} critical issues`);
            criticalIssues.forEach((issue: any) => {
              console.log(`      • ${issue.test}: ${issue.message}`);
            });
          }
          
          // Show warnings
          const warnings = report.results.filter((r: any) => r.status === 'warning');
          if (warnings.length > 0) {
            console.log(`   ⚠️  ${warnings.length} warnings`);
          }
        });
        
        // Summary statistics
        const totalPages = Object.keys(results).length;
        const avgScore = Object.values(results).reduce((sum: number, report: any) => sum + report.overallScore, 0) / totalPages;
        const excellentPages = Object.values(results).filter((report: any) => report.overallScore >= 900).length;
        const goodPages = Object.values(results).filter((report: any) => report.overallScore >= 800).length;
        const fairPages = Object.values(results).filter((report: any) => report.overallScore >= 600).length;
        const poorPages = Object.values(results).filter((report: any) => report.overallScore < 600).length;
        
        console.log('\n📈 === SUMMARY STATISTICS ===');
        console.log(`📊 Total Pages: ${totalPages}`);
        console.log(`📈 Average Score: ${avgScore.toFixed(0)}/1000`);
        console.log(`🏆 Excellent (900+): ${excellentPages} pages`);
        console.log(`✅ Good (800-899): ${goodPages - excellentPages} pages`);
        console.log(`⚠️  Fair (600-799): ${fairPages - goodPages} pages`);
        console.log(`❌ Poor (<600): ${poorPages} pages`);
        console.log('=== END RESULTS ===\n');
        
        // Store for inspection
        (window as any).siteResults = results;
        console.log('💾 Results stored in window.siteResults for detailed inspection');
      }
    } catch (error) {
      console.error('❌ Failed to run site-wide test:', error);
    }
  }, 2000);
}
