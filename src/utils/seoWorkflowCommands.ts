
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
  clearLogs: () => SEOWorkflowCommands.getInstance().clearLogs()
};

// Development helper - attach to window for easy console access
if (process.env.NODE_ENV === 'development') {
  (window as any).seo = seoCommands;
  console.log('🔧 SEO Commands available via window.seo:');
  console.log('  - seo.test() - Test current page');
  console.log('  - seo.improve() - Improve current page');
  console.log('  - seo.auditSite() - Audit entire site');
  console.log('  - seo.improveSite() - Improve entire site');
  console.log('  - seo.report(url) - Get detailed report');
  console.log('  - seo.logs() - View workflow logs');
  console.log('  - seo.clearLogs() - Clear logs');
}
