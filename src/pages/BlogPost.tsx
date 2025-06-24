import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PrimaryButton, OutlineButton } from "@/components/ui/custom-buttons";
import { SimpleReliableImage } from "@/components/ui/ReliableImage";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  ArrowRight,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import InteractiveFAQ from "@/components/InteractiveFAQ";
import { blogArticles } from "@/utils/blogData";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = blogArticles.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/404" replace />;
  }

  const relatedArticles = blogArticles
    .filter(
      (a) =>
        a.id !== article.id && a.tags.some((tag) => article.tags.includes(tag)),
    )
    .slice(0, 3);

  const shareUrl = `https://genesisstoneusa.com/blog/${article.slug}`;

  return (
    <Layout>
      <SEOHead
        title={`${article.title} | Genesis Stone & More Blog`}
        description={article.excerpt}
        keywords={`${article.tags.join(", ")}, flooring, tiles, stone`}
        canonicalUrl={shareUrl}
        ogImage={article.image}
        articleData={{
          publishedTime: article.publishDate,
          modifiedTime: article.lastModified,
          author: article.author,
          tags: article.tags,
        }}
      />

      <BreadcrumbNavigation />

      {/* Article Header */}
      <article className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link
              to="/blog"
              className="inline-flex items-center text-red-700 hover:text-red-800 mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>

            {/* Article Meta */}
            <div className="flex flex-wrap gap-2 mb-4">
              {article.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {article.title}
            </h1>

            <div className="flex items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{article.readTime}</span>
              </div>
            </div>

            {/* Featured Image */}
            <SimpleReliableImage
              src={article.image}
              alt={article.title}
              className="w-full h-96 object-cover rounded-lg mb-8"
            />

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </div>

            {/* Interactive FAQ Component */}
            <InteractiveFAQ />

            {/* Share Buttons */}
            <div className="border-t border-b py-6 my-8">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Share this article</h3>
                <div className="flex gap-3">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(article.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-blue-400 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Author Bio */}
            <Card className="mb-12">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-red-700 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {article.author.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {article.author}
                    </h3>
                    <p className="text-gray-600">
                      Expert flooring consultant at Genesis Stone & More with
                      over 10 years of experience in helping customers choose
                      the perfect flooring solutions for their projects.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {relatedArticles.map((related) => (
                <Card
                  key={related.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <SimpleReliableImage
                    src={related.image}
                    alt={related.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3 line-clamp-2">
                      {related.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {related.excerpt}
                    </p>
                    <Link to={`/blog/${related.slug}`}>
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
      )}

      {/* Newsletter CTA */}
      <section className="py-16 bg-red-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Don't Miss Our Latest Articles
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to get expert flooring tips and design inspiration
          </p>
          <Link to="/contact">
            <PrimaryButton className="bg-white text-red-900 hover:bg-gray-100">
              Subscribe to Newsletter
            </PrimaryButton>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;
