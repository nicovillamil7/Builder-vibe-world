
import { SEOTestingUtility, type SEOReport, type SEOTestResult } from './seoTestingUtility';
import { getAllSiteUrls } from './urlUtils';

interface WorkflowConfig {
  maxRetries: number;
  retryDelay: number;
  criticalFailureThreshold: number;
  minScoreThreshold: number;
}

interface ImprovementAction {
  category: string;
  test: string;
  action: string;
  element: string;
  improvement: string;
  priority: 'critical' | 'high' | 'medium' | 'low';
  implemented: boolean;
  retries: number;
}

interface WorkflowResult {
  url: string;
  initialScore: number;
  finalScore: number;
  improvement: number;
  actionsApplied: ImprovementAction[];
  status: 'completed' | 'failed' | 'partial';
  logs: string[];
}

export class SEOImprovementWorkflow {
  private config: WorkflowConfig;
  private seoTester: SEOTestingUtility;
  private logs: string[] = [];

  constructor(config?: Partial<WorkflowConfig>) {
    this.config = {
      maxRetries: 3,
      retryDelay: 1000,
      criticalFailureThreshold: 400,
      minScoreThreshold: 800,
      ...config
    };
    this.seoTester = new SEOTestingUtility();
  }

  public async runFullSiteAudit(): Promise<WorkflowResult[]> {
    this.log('🚀 Starting full site SEO audit and improvement workflow');
    const urls = getAllSiteUrls();
    const results: WorkflowResult[] = [];

    for (const url of urls) {
      try {
        this.log(`📊 Processing: ${url}`);
        const result = await this.processPage(url);
        results.push(result);
      } catch (error) {
        this.log(`❌ Failed to process ${url}: ${error instanceof Error ? error.message : 'Unknown error'}`);
        results.push({
          url,
          initialScore: 0,
          finalScore: 0,
          improvement: 0,
          actionsApplied: [],
          status: 'failed',
          logs: [`Failed to process: ${error instanceof Error ? error.message : 'Unknown error'}`]
        });
      }
    }

    this.generateSummaryReport(results);
    return results;
  }

  public async processPage(url: string): Promise<WorkflowResult> {
    this.log(`🔍 Analyzing page: ${url}`);
    
    // Navigate to the page (in a real implementation, you'd use a headless browser)
    if (typeof window !== 'undefined' && url !== window.location.pathname) {
      this.log(`⚠️ Cannot navigate to ${url} in current context. Analyzing current page instead.`);
    }

    // Run initial audit
    const initialReport = await this.seoTester.runFullSEOAudit();
    this.log(`📊 Initial score: ${initialReport.overallScore}/1000`);

    // Generate improvement actions
    const actions = this.generateImprovementActions(initialReport);
    this.log(`🎯 Generated ${actions.length} improvement actions`);

    // Apply improvements with retry mechanism
    const appliedActions = await this.applyImprovements(actions);

    // Run final audit
    const finalReport = await this.seoTester.runFullSEOAudit();
    const improvement = finalReport.overallScore - initialReport.overallScore;
    
    this.log(`📈 Final score: ${finalReport.overallScore}/1000 (${improvement >= 0 ? '+' : ''}${improvement})`);

    const result: WorkflowResult = {
      url,
      initialScore: initialReport.overallScore,
      finalScore: finalReport.overallScore,
      improvement,
      actionsApplied: appliedActions,
      status: this.determineStatus(finalReport.overallScore, appliedActions),
      logs: [...this.logs]
    };

    // Reset logs for next page
    this.logs = [];
    
    return result;
  }

  private generateImprovementActions(report: SEOReport): ImprovementAction[] {
    const actions: ImprovementAction[] = [];

    report.results.forEach(result => {
      if (result.status === 'fail' || result.status === 'warning') {
        const action = this.createImprovementAction(result);
        if (action) {
          actions.push(action);
        }
      }
    });

    // Sort by priority (critical first)
    return actions.sort((a, b) => {
      const priorityOrder = { critical: 0, high: 1, medium: 2, low: 3 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
  }

  private createImprovementAction(result: SEOTestResult): ImprovementAction | null {
    const baseAction: Partial<ImprovementAction> = {
      category: result.category,
      test: result.test,
      implemented: false,
      retries: 0
    };

    // Map specific SEO issues to improvement actions
    switch (result.test) {
      case 'Canonical Link':
        return {
          ...baseAction,
          action: 'addCanonicalLink',
          element: 'head',
          improvement: 'Add canonical link tag to prevent duplicate content',
          priority: 'high'
        } as ImprovementAction;

      case 'Page Title':
        return {
          ...baseAction,
          action: 'optimizeTitle',
          element: 'title',
          improvement: result.message.includes('too long') ? 
            'Shorten title to under 60 characters' : 
            'Optimize title length and content',
          priority: 'critical'
        } as ImprovementAction;

      case 'Meta Description':
        return {
          ...baseAction,
          action: 'optimizeMetaDescription',
          element: 'meta[name="description"]',
          improvement: 'Optimize meta description to 150-160 characters',
          priority: 'high'
        } as ImprovementAction;

      case 'Page Headers':
        return {
          ...baseAction,
          action: 'improveHeaders',
          element: result.message.includes('H1') ? 'h1' : 'h2',
          improvement: result.message.includes('missing') ? 
            'Add missing header tags' : 
            'Optimize existing headers',
          priority: 'high'
        } as ImprovementAction;

      case 'Schema':
        return {
          ...baseAction,
          action: 'addSchema',
          element: 'head',
          improvement: 'Add structured data markup',
          priority: 'medium'
        } as ImprovementAction;

      case 'Twitter Meta':
        return {
          ...baseAction,
          action: 'addTwitterCards',
          element: 'head',
          improvement: 'Add missing Twitter Card meta tags',
          priority: 'medium'
        } as ImprovementAction;

      case 'OG Meta':
        return {
          ...baseAction,
          action: 'addOpenGraph',
          element: 'head',
          improvement: 'Add missing Open Graph meta tags',
          priority: 'medium'
        } as ImprovementAction;

      case 'Images':
        return {
          ...baseAction,
          action: 'optimizeImages',
          element: 'img',
          improvement: 'Add alt text and optimize image tags',
          priority: 'medium'
        } as ImprovementAction;

      case 'Links':
        return {
          ...baseAction,
          action: 'improveInternalLinking',
          element: 'a',
          improvement: 'Add more internal links for better navigation',
          priority: 'low'
        } as ImprovementAction;

      case 'Content':
        if (result.message.includes('too short')) {
          return {
            ...baseAction,
            action: 'expandContent',
            element: 'main',
            improvement: 'Expand content to meet minimum word count',
            priority: 'medium'
          } as ImprovementAction;
        }
        break;

      default:
        this.log(`⚠️ No improvement action defined for: ${result.test}`);
        return null;
    }

    return null;
  }

  private async applyImprovements(actions: ImprovementAction[]): Promise<ImprovementAction[]> {
    const appliedActions: ImprovementAction[] = [];

    for (const action of actions) {
      try {
        this.log(`🔧 Applying: ${action.improvement}`);
        const success = await this.retryWithBackoff(
          () => this.executeImprovement(action),
          this.config.maxRetries,
          this.config.retryDelay
        );

        if (success) {
          action.implemented = true;
          appliedActions.push(action);
          this.log(`✅ Successfully applied: ${action.improvement}`);
        } else {
          this.log(`❌ Failed to apply: ${action.improvement} after ${this.config.maxRetries} retries`);
        }
      } catch (error) {
        this.log(`❌ Error applying ${action.improvement}: ${error instanceof Error ? error.message : 'Unknown error'}`);
      }
    }

    return appliedActions;
  }

  private async executeImprovement(action: ImprovementAction): Promise<boolean> {
    // In a real implementation, these would make actual DOM/file modifications
    // For now, we'll simulate the improvements
    
    switch (action.action) {
      case 'addCanonicalLink':
        return this.simulateCanonicalLinkAddition();
      
      case 'optimizeTitle':
        return this.simulateTitleOptimization();
      
      case 'optimizeMetaDescription':
        return this.simulateMetaDescriptionOptimization();
      
      case 'improveHeaders':
        return this.simulateHeaderImprovement();
      
      case 'addSchema':
        return this.simulateSchemaAddition();
      
      case 'addTwitterCards':
        return this.simulateTwitterCardsAddition();
      
      case 'addOpenGraph':
        return this.simulateOpenGraphAddition();
      
      case 'optimizeImages':
        return this.simulateImageOptimization();
      
      case 'improveInternalLinking':
        return this.simulateInternalLinkingImprovement();
      
      case 'expandContent':
        return this.simulateContentExpansion();
      
      default:
        this.log(`⚠️ Unknown improvement action: ${action.action}`);
        return false;
    }
  }

  // Simulation methods (in real implementation, these would make actual changes)
  private async simulateCanonicalLinkAddition(): Promise<boolean> {
    // Simulate adding canonical link
    await this.delay(100);
    return Math.random() > 0.1; // 90% success rate
  }

  private async simulateTitleOptimization(): Promise<boolean> {
    await this.delay(100);
    return Math.random() > 0.05; // 95% success rate
  }

  private async simulateMetaDescriptionOptimization(): Promise<boolean> {
    await this.delay(100);
    return Math.random() > 0.05; // 95% success rate
  }

  private async simulateHeaderImprovement(): Promise<boolean> {
    await this.delay(150);
    return Math.random() > 0.1; // 90% success rate
  }

  private async simulateSchemaAddition(): Promise<boolean> {
    await this.delay(200);
    return Math.random() > 0.15; // 85% success rate
  }

  private async simulateTwitterCardsAddition(): Promise<boolean> {
    await this.delay(100);
    return Math.random() > 0.1; // 90% success rate
  }

  private async simulateOpenGraphAddition(): Promise<boolean> {
    await this.delay(100);
    return Math.random() > 0.1; // 90% success rate
  }

  private async simulateImageOptimization(): Promise<boolean> {
    await this.delay(300);
    return Math.random() > 0.2; // 80% success rate
  }

  private async simulateInternalLinkingImprovement(): Promise<boolean> {
    await this.delay(250);
    return Math.random() > 0.25; // 75% success rate
  }

  private async simulateContentExpansion(): Promise<boolean> {
    await this.delay(500);
    return Math.random() > 0.3; // 70% success rate
  }

  private async retryWithBackoff<T>(
    fn: () => Promise<T>,
    maxRetries: number,
    baseDelay: number
  ): Promise<T | null> {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        return await fn();
      } catch (error) {
        if (attempt === maxRetries) {
          this.log(`🔄 Final attempt failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
          return null;
        }
        
        const delay = baseDelay * Math.pow(2, attempt - 1); // Exponential backoff
        this.log(`🔄 Attempt ${attempt} failed, retrying in ${delay}ms...`);
        await this.delay(delay);
      }
    }
    
    return null;
  }

  private determineStatus(finalScore: number, appliedActions: ImprovementAction[]): 'completed' | 'failed' | 'partial' {
    if (finalScore >= this.config.minScoreThreshold) {
      return 'completed';
    }
    
    if (finalScore < this.config.criticalFailureThreshold) {
      return 'failed';
    }
    
    const successfulActions = appliedActions.filter(a => a.implemented).length;
    const totalActions = appliedActions.length;
    
    if (successfulActions === 0) {
      return 'failed';
    }
    
    if (successfulActions < totalActions) {
      return 'partial';
    }
    
    return 'completed';
  }

  private generateSummaryReport(results: WorkflowResult[]): void {
    this.log('\n📋 === SEO IMPROVEMENT WORKFLOW SUMMARY ===');
    
    const totalPages = results.length;
    const completed = results.filter(r => r.status === 'completed').length;
    const partial = results.filter(r => r.status === 'partial').length;
    const failed = results.filter(r => r.status === 'failed').length;
    
    const avgInitialScore = results.reduce((sum, r) => sum + r.initialScore, 0) / totalPages;
    const avgFinalScore = results.reduce((sum, r) => sum + r.finalScore, 0) / totalPages;
    const avgImprovement = avgFinalScore - avgInitialScore;
    
    this.log(`📊 Pages Processed: ${totalPages}`);
    this.log(`✅ Completed: ${completed}`);
    this.log(`🔄 Partial: ${partial}`);
    this.log(`❌ Failed: ${failed}`);
    this.log(`📈 Average Score Improvement: ${avgImprovement.toFixed(0)} points`);
    this.log(`📊 Average Final Score: ${avgFinalScore.toFixed(0)}/1000`);
    
    // Best and worst performing pages
    const bestPage = results.reduce((best, current) => 
      current.improvement > best.improvement ? current : best
    );
    const worstPage = results.reduce((worst, current) => 
      current.improvement < worst.improvement ? current : worst
    );
    
    this.log(`🏆 Best Improvement: ${bestPage.url} (+${bestPage.improvement} points)`);
    this.log(`🔻 Needs Attention: ${worstPage.url} (${worstPage.improvement >= 0 ? '+' : ''}${worstPage.improvement} points)`);
    
    this.log('=== END SUMMARY ===\n');
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private log(message: string): void {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    this.logs.push(logMessage);
    
    if (process.env.NODE_ENV === 'development') {
      console.log(logMessage);
    }
  }

  // Public method to get logs
  public getLogs(): string[] {
    return [...this.logs];
  }

  // Public method to clear logs
  public clearLogs(): void {
    this.logs = [];
  }
}

// Convenience functions for external use
export const runSEOWorkflow = async (config?: Partial<WorkflowConfig>): Promise<WorkflowResult[]> => {
  const workflow = new SEOImprovementWorkflow(config);
  return await workflow.runFullSiteAudit();
};

export const testCurrentPage = async (): Promise<WorkflowResult> => {
  const workflow = new SEOImprovementWorkflow();
  return await workflow.processPage(window.location.pathname);
};

// Development helper
export const runWorkflowInDev = async (): Promise<void> => {
  if (process.env.NODE_ENV === 'development') {
    console.log('🚀 Starting SEO Improvement Workflow...');
    const results = await runSEOWorkflow({
      maxRetries: 2,
      minScoreThreshold: 750
    });
    
    console.log('🎯 Workflow completed!');
    (window as any).seoWorkflowResults = results;
  }
};
