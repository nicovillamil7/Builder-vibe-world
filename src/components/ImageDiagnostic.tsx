import React, { useState, useEffect } from "react";
import { checkAllImagesHealth, RELIABLE_IMAGES } from "@/utils/imageUtils";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PrimaryButton } from "@/components/ui/custom-buttons";
import { CheckCircle, XCircle, RefreshCw, AlertTriangle } from "lucide-react";

interface ImageHealthStatus {
  id: string;
  url: string;
  status: "loading" | "success" | "error" | "untested";
  category: string;
  alt: string;
}

export const ImageDiagnostic: React.FC = () => {
  const [imageStatuses, setImageStatuses] = useState<
    Record<string, ImageHealthStatus>
  >({});
  const [isRunning, setIsRunning] = useState(false);
  const [lastChecked, setLastChecked] = useState<Date | null>(null);

  const initializeStatuses = () => {
    const statuses: Record<string, ImageHealthStatus> = {};
    Object.entries(RELIABLE_IMAGES).forEach(([id, config]) => {
      statuses[id] = {
        id,
        url: config.primary,
        status: "untested",
        category: config.category,
        alt: config.alt,
      };
    });
    setImageStatuses(statuses);
  };

  const runDiagnostic = async () => {
    setIsRunning(true);

    // Reset all to loading
    const loadingStatuses = { ...imageStatuses };
    Object.keys(loadingStatuses).forEach((id) => {
      loadingStatuses[id].status = "loading";
    });
    setImageStatuses(loadingStatuses);

    try {
      const results = await checkAllImagesHealth();

      const updatedStatuses = { ...imageStatuses };
      Object.entries(results).forEach(([id, isHealthy]) => {
        if (updatedStatuses[id]) {
          updatedStatuses[id].status = isHealthy ? "success" : "error";
        }
      });

      setImageStatuses(updatedStatuses);
      setLastChecked(new Date());
    } catch (error) {
      console.error("Diagnostic failed:", error);
    } finally {
      setIsRunning(false);
    }
  };

  useEffect(() => {
    initializeStatuses();
  }, []);

  const getStatusIcon = (status: ImageHealthStatus["status"]) => {
    switch (status) {
      case "loading":
        return <RefreshCw className="h-4 w-4 animate-spin text-blue-500" />;
      case "success":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "error":
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return <AlertTriangle className="h-4 w-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: ImageHealthStatus["status"]) => {
    switch (status) {
      case "success":
        return "bg-green-100 text-green-800";
      case "error":
        return "bg-red-100 text-red-800";
      case "loading":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const successCount = Object.values(imageStatuses).filter(
    (s) => s.status === "success",
  ).length;
  const errorCount = Object.values(imageStatuses).filter(
    (s) => s.status === "error",
  ).length;
  const totalCount = Object.keys(imageStatuses).length;

  const groupedByCategory = Object.values(imageStatuses).reduce(
    (acc, status) => {
      if (!acc[status.category]) {
        acc[status.category] = [];
      }
      acc[status.category].push(status);
      return acc;
    },
    {} as Record<string, ImageHealthStatus[]>,
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Genesis Stone Image Health Monitor
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Monitor and diagnose image loading across your website
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <PrimaryButton
              onClick={runDiagnostic}
              disabled={isRunning}
              className="px-8"
            >
              {isRunning ? (
                <>
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                  Checking Images...
                </>
              ) : (
                <>
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Run Full Diagnostic
                </>
              )}
            </PrimaryButton>

            {lastChecked && (
              <p className="text-sm text-gray-500">
                Last checked: {lastChecked.toLocaleTimeString()}
              </p>
            )}
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-green-600">
                  {successCount}
                </div>
                <div className="text-sm text-gray-600">Working Images</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-red-600">
                  {errorCount}
                </div>
                <div className="text-sm text-gray-600">Failed Images</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {totalCount}
                </div>
                <div className="text-sm text-gray-600">Total Images</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Results by Category */}
        <div className="space-y-6">
          {Object.entries(groupedByCategory).map(([category, statuses]) => (
            <Card key={category}>
              <CardHeader>
                <h3 className="text-xl font-semibold capitalize">
                  {category.replace("-", " ")} Images
                </h3>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {statuses.map((status) => (
                    <div
                      key={status.id}
                      className="flex items-center space-x-4 p-4 border rounded-lg"
                    >
                      <div className="flex-shrink-0">
                        {getStatusIcon(status.status)}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-medium text-gray-900">
                            {status.id}
                          </h4>
                          <Badge className={getStatusColor(status.status)}>
                            {status.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 truncate">
                          {status.alt}
                        </p>
                        <p className="text-xs text-gray-400 truncate">
                          {status.url}
                        </p>
                      </div>

                      {status.status === "success" && (
                        <div className="flex-shrink-0">
                          <img
                            src={status.url}
                            alt={status.alt}
                            className="w-16 h-16 object-cover rounded"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recommendations */}
        {errorCount > 0 && (
          <Card className="mt-8 border-red-200">
            <CardHeader>
              <h3 className="text-xl font-semibold text-red-800">
                Recommendations
              </h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-red-700">
                <p>• Failed images will automatically use fallback URLs</p>
                <p>• The ReliableImage component handles errors gracefully</p>
                <p>
                  • Consider updating failed primary URLs to working sources
                </p>
                <p>
                  • All images have been configured with high-quality Unsplash
                  fallbacks
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};
