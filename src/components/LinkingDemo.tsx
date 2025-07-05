
import React from 'react';
import { addLinksToContent, verifyImagePreservation } from '@/utils/blogLinking';

const LinkingDemo = () => {
  const sampleContent = `
    <img src="https://example.com/test.jpg" alt="Sample image" />
    <p>This is a test of laminate flooring and natural stone installation. 
    We also offer porcelain tiles and professional installation services.</p>
  `;

  const processedContent = addLinksToContent(sampleContent);
  const imagesPreserved = verifyImagePreservation(sampleContent, processedContent);

  return (
    <div className="p-6 bg-gray-50 rounded-lg">
      <h3 className="text-lg font-bold mb-4">Linking System Demo</h3>
      
      <div className="mb-4">
        <h4 className="font-semibold">Original Content:</h4>
        <div className="bg-white p-3 rounded border text-sm">
          {sampleContent}
        </div>
      </div>

      <div className="mb-4">
        <h4 className="font-semibold">Processed Content (with links):</h4>
        <div 
          className="bg-white p-3 rounded border text-sm"
          dangerouslySetInnerHTML={{ __html: processedContent }}
        />
      </div>

      <div className="text-sm">
        <p className={`font-semibold ${imagesPreserved ? 'text-green-600' : 'text-red-600'}`}>
          Images Preserved: {imagesPreserved ? '✅ YES' : '❌ NO'}
        </p>
        <p className="text-gray-600">
          Links Added: {(processedContent.match(/<a[^>]*>/g) || []).length}
        </p>
      </div>
    </div>
  );
};

export default LinkingDemo;
