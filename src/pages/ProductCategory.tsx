
import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import SEOHead from '@/components/SEOHead';
import { PRODUCT_IMAGES } from '@/utils/sitemapGenerator';

const ProductCategory = () => {
  const { category } = useParams<{ category: string }>();
  
  const categoryData = category ? PRODUCT_IMAGES[category] : null;
  
  if (!categoryData) {
    return <Layout><div>Product category not found</div></Layout>;
  }

  return (
    <Layout>
      <SEOHead
        title={`${categoryData.title} | Genesis Stone`}
        description={categoryData.caption}
        canonicalUrl={`https://genesisstoneusa.com/products/${category}`}
        ogImage={categoryData.loc}
      />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">{categoryData.title}</h1>
        <p className="text-lg mb-8">{categoryData.caption}</p>
        {/* Add your product category content here */}
      </div>
    </Layout>
  );
};

export default ProductCategory;
