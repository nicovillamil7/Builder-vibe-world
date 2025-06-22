import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PrimaryButton, OutlineButton } from "@/components/ui/custom-buttons";
import { SimpleReliableImage } from "@/components/ui/ReliableImage";
import { Calendar, Clock, User, ArrowRight, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import { blogArticles } from "@/utils/blogData";

const Blog = () => {
  const featuredArticle = blogArticles.find(article => article.featured);
  const regularArticles = blogArticles.filter(article => !article.featured);

  return (
    <Layout>
      <SEOHead 
        title="Flooring Blog - Expert Tips & Trends | Genesis Stone & More"
        description="Discover the latest flooring trends, installation tips, and design inspiration. Expert advice on porcelain tiles, natural stone, laminates, and decorative floors."
        keywords="flooring blog, tile trends, decorative floor ideas, installation tips, natural stone care, porcelain tiles, laminate flooring, floor design"
        canonicalUrl="https://genesisstoneusa.com/blog"
      />

      <BreadcrumbNavigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-900 to-red-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Flooring Blog - Expert Tips & Design Trends
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Expert advice, design inspiration, and industry insights from Genesis Stone & More
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Article</h2>
            <Card className="max-w-4xl mx-auto overflow-hidden hover:shadow-xl transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <SimpleReliableImage
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-64 md:h-full object-cover"
                    width={400}
                    height={256}
                    loading="eager"
                  />
                </div>
                <CardContent className="md:w-1/2 p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {featuredArticle.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{featuredArticle.title}</h3>
                  <p className="text-gray-600 mb-6">{featuredArticle.excerpt}</p>
                  <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredArticle.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{featuredArticle.readTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{featuredArticle.author}</span>
                    </div>
                  </div>
                  <Link to={`/blog/${featuredArticle.slug}`}>
                    <PrimaryButton>
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </PrimaryButton>
                  </Link>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <SimpleReliableImage
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                  width={400}
                  height={192}
                  loading="lazy"
                />
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {article.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <Link to={`/blog/${article.slug}`}>
                    <OutlineButton className="w-full">
                      Read More
                    </OutlineButton>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-red-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 opacity-90">
            Get the latest flooring trends and tips delivered to your inbox
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <PrimaryButton className="bg-white text-red-900 hover:bg-gray-100">
              Subscribe
            </PrimaryButton>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;