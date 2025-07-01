
import React from 'react';
import Layout from '../components/Layout';
import SEOHead from '../components/SEOHead';
import TechnicalSEO from '../components/TechnicalSEO';
import SEOWorkflowDashboard from '../components/SEOWorkflowDashboard';

const SEODashboard: React.FC = () => {
  return (
    <Layout>
      <SEOHead
        title="SEO Dashboard - Genesis Stone | Automated SEO Testing & Improvement"
        description="Advanced SEO workflow dashboard for automated testing, analysis, and improvement of website SEO performance. Monitor scores, apply fixes, and track improvements."
        keywords="SEO dashboard, SEO testing, SEO improvement, website optimization, SEO automation, Genesis Stone"
        canonicalUrl="https://genesisstoneusa.com/seo-dashboard"
      />
      
      <TechnicalSEO
        pageType="website"
        lastModified={new Date().toISOString()}
      />

      <div className="min-h-screen bg-gray-50">
        <SEOWorkflowDashboard />
      </div>
    </Layout>
  );
};

export default SEODashboard;
