
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Alert, AlertDescription } from './ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ScrollArea } from './ui/scroll-area';
import { seoCommands } from '../utils/seoWorkflowCommands';
import { Play, BarChart3, Wrench, FileText, RefreshCw, CheckCircle, AlertCircle, XCircle } from 'lucide-react';

interface SEOReport {
  overallScore: number;
  pageHealth: string;
  results: Array<{
    category: string;
    test: string;
    status: 'pass' | 'fail' | 'warning';
    score: number;
    message: string;
    recommendation?: string;
  }>;
  summary: {
    passed: number;
    failed: number;
    warnings: number;
  };
}

interface WorkflowResult {
  url: string;
  initialScore: number;
  finalScore: number;
  improvement: number;
  status: 'completed' | 'failed' | 'partial';
  logs: string[];
}

const SEOWorkflowDashboard: React.FC = () => {
  const [currentReport, setCurrentReport] = useState<SEOReport | null>(null);
  const [workflowResults, setWorkflowResults] = useState<WorkflowResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState('test');

  const runTest = async () => {
    setIsLoading(true);
    try {
      const result = await seoCommands.test();
      if (result.success) {
        setCurrentReport(result.data);
      }
    } catch (error) {
      console.error('Test failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const runImprovement = async () => {
    setIsLoading(true);
    try {
      const result = await seoCommands.improve();
      if (result.success) {
        setWorkflowResults(prev => [result.data, ...prev]);
        // Refresh the current report
        await runTest();
      }
    } catch (error) {
      console.error('Improvement failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const runSiteAudit = async () => {
    setIsLoading(true);
    try {
      const result = await seoCommands.auditSite();
      if (result.success) {
        setWorkflowResults(result.data);
      }
    } catch (error) {
      console.error('Site audit failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const improveSite = async () => {
    setIsLoading(true);
    try {
      const result = await seoCommands.improveSite({ threshold: 800, maxRetries: 3 });
      if (result.success) {
        setWorkflowResults(result.data);
      }
    } catch (error) {
      console.error('Site improvement failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const refreshLogs = async () => {
    try {
      const result = await seoCommands.logs();
      if (result.success) {
        setLogs(result.data);
      }
    } catch (error) {
      console.error('Failed to fetch logs:', error);
    }
  };

  useEffect(() => {
    runTest();
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pass':
      case 'completed':
        return 'bg-green-500';
      case 'fail':
      case 'failed':
        return 'bg-red-500';
      case 'warning':
      case 'partial':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pass':
      case 'completed':
        return <CheckCircle className="h-4 w-4" />;
      case 'fail':
      case 'failed':
        return <XCircle className="h-4 w-4" />;
      case 'warning':
      case 'partial':
        return <AlertCircle className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">SEO Workflow Dashboard</h1>
          <p className="text-muted-foreground">
            Automated SEO testing and improvement system
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={runTest}
            disabled={isLoading}
            variant="outline"
            size="sm"
          >
            <BarChart3 className="h-4 w-4 mr-2" />
            Test Page
          </Button>
          <Button
            onClick={runImprovement}
            disabled={isLoading}
            variant="outline"
            size="sm"
          >
            <Wrench className="h-4 w-4 mr-2" />
            Improve Page
          </Button>
          <Button
            onClick={refreshLogs}
            disabled={isLoading}
            variant="outline"
            size="sm"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="test">Current Page</TabsTrigger>
          <TabsTrigger value="workflow">Workflow Results</TabsTrigger>
          <TabsTrigger value="site">Site Management</TabsTrigger>
          <TabsTrigger value="logs">Logs</TabsTrigger>
        </TabsList>

        <TabsContent value="test" className="space-y-4">
          {currentReport && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Overall Score</CardTitle>
                    <BarChart3 className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{currentReport.overallScore}/1000</div>
                    <Progress 
                      value={currentReport.overallScore / 10} 
                      className="mt-2" 
                    />
                    <p className="text-xs text-muted-foreground mt-2">
                      Page Health: {currentReport.pageHealth}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Passed Tests</CardTitle>
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-600">
                      {currentReport.summary.passed}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Out of {currentReport.results.length} total tests
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Issues Found</CardTitle>
                    <AlertCircle className="h-4 w-4 text-red-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-red-600">
                      {currentReport.summary.failed + currentReport.summary.warnings}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {currentReport.summary.failed} failed, {currentReport.summary.warnings} warnings
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Test Results</CardTitle>
                  <CardDescription>
                    Detailed breakdown of SEO tests and recommendations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-96 w-full">
                    <div className="space-y-3">
                      {currentReport.results.map((result, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-3 p-3 border rounded-lg"
                        >
                          <div className={`w-2 h-2 rounded-full mt-2 ${getStatusColor(result.status)}`} />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              {getStatusIcon(result.status)}
                              <span className="font-medium">{result.test}</span>
                              <Badge variant="outline" className="text-xs">
                                {result.category}
                              </Badge>
                              <span className="text-sm text-muted-foreground">
                                {result.score}/100
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              {result.message}
                            </p>
                            {result.recommendation && (
                              <p className="text-sm text-blue-600 mt-1">
                                💡 {result.recommendation}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </>
          )}
        </TabsContent>

        <TabsContent value="workflow" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Workflow Results</CardTitle>
              <CardDescription>
                Results from SEO improvement workflows
              </CardDescription>
            </CardHeader>
            <CardContent>
              {workflowResults.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  No workflow results yet. Run an improvement workflow to see results.
                </div>
              ) : (
                <ScrollArea className="h-96 w-full">
                  <div className="space-y-3">
                    {workflowResults.map((result, index) => (
                      <div
                        key={index}
                        className="p-4 border rounded-lg space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{result.url}</span>
                          <Badge className={getStatusColor(result.status)}>
                            {result.status}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">Initial:</span>
                            <span className="ml-1 font-medium">{result.initialScore}/1000</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Final:</span>
                            <span className="ml-1 font-medium">{result.finalScore}/1000</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Improvement:</span>
                            <span className={`ml-1 font-medium ${
                              result.improvement >= 0 ? 'text-green-600' : 'text-red-600'
                            }`}>
                              {result.improvement >= 0 ? '+' : ''}{result.improvement}
                            </span>
                          </div>
                        </div>
                        <Progress 
                          value={result.finalScore / 10} 
                          className="h-2"
                        />
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="site" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Site Audit</CardTitle>
                <CardDescription>
                  Analyze all pages for SEO issues
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={runSiteAudit}
                  disabled={isLoading}
                  className="w-full"
                >
                  <Play className="h-4 w-4 mr-2" />
                  Run Site Audit
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Site Improvement</CardTitle>
                <CardDescription>
                  Apply SEO improvements to all pages
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={improveSite}
                  disabled={isLoading}
                  className="w-full"
                  variant="secondary"
                >
                  <Wrench className="h-4 w-4 mr-2" />
                  Improve All Pages
                </Button>
              </CardContent>
            </Card>
          </div>

          {isLoading && (
            <Alert>
              <RefreshCw className="h-4 w-4 animate-spin" />
              <AlertDescription>
                Running workflow... This may take a few minutes.
              </AlertDescription>
            </Alert>
          )}
        </TabsContent>

        <TabsContent value="logs" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Workflow Logs</CardTitle>
                <CardDescription>
                  Detailed logs from SEO workflow execution
                </CardDescription>
              </div>
              <Button
                onClick={refreshLogs}
                variant="outline"
                size="sm"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh
              </Button>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96 w-full">
                <div className="space-y-1">
                  {logs.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">
                      No logs available. Run a workflow to see logs.
                    </div>
                  ) : (
                    logs.map((log, index) => (
                      <div
                        key={index}
                        className="text-sm font-mono p-2 bg-muted rounded text-muted-foreground"
                      >
                        {log}
                      </div>
                    ))
                  )}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SEOWorkflowDashboard;
