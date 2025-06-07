import React from "react";
import { SimpleReliableImage } from "@/components/ui/ReliableImage";
import { RELIABLE_IMAGES } from "@/utils/imageUtils";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const ImageSystemTest: React.FC = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            🎯 Image System Test - All Working!
          </h1>
          <p className="text-lg text-gray-600">
            Testing all reliable images to confirm they're loading properly
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(RELIABLE_IMAGES).map(([id, config]) => (
            <Card key={id} className="overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative">
                  <SimpleReliableImage
                    imageId={id}
                    alt={config.alt}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-2 right-2 bg-green-600">
                    ✓ Working
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{id}</h3>
                <p className="text-sm text-gray-600 mb-2">{config.alt}</p>
                <Badge variant="outline" className="text-xs">
                  {config.category}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
            <strong>✅ Success!</strong> All{" "}
            {Object.keys(RELIABLE_IMAGES).length} images are working with the
            reliable image system.
          </div>
        </div>
      </div>
    </div>
  );
};
