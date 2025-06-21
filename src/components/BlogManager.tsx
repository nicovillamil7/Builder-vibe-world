
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { blogArticles, BlogArticle } from "@/utils/blogData";
import { PlusCircle, Edit, Trash2, Eye, Save, X } from "lucide-react";

const BlogManager = () => {
  const [articles, setArticles] = useState<BlogArticle[]>(blogArticles);
  const [editingArticle, setEditingArticle] = useState<BlogArticle | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const createNewArticle = (): BlogArticle => ({
    id: Date.now().toString(),
    slug: '',
    title: '',
    excerpt: '',
    content: '',
    image: '',
    author: 'Genesis Stone Team',
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    publishDate: new Date().toISOString(),
    lastModified: new Date().toISOString(),
    readTime: '5 min read',
    tags: [],
    featured: false,
    published: false,
    seoKeywords: []
  });

  const handleEdit = (article: BlogArticle) => {
    setEditingArticle({ ...article });
    setIsCreating(false);
  };

  const handleCreate = () => {
    setEditingArticle(createNewArticle());
    setIsCreating(true);
  };

  const handleSave = () => {
    if (!editingArticle) return;

    // Generate slug from title if creating new article
    if (isCreating) {
      editingArticle.slug = editingArticle.title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .trim();
    }

    // Update lastModified
    editingArticle.lastModified = new Date().toISOString();

    if (isCreating) {
      setArticles([editingArticle, ...articles]);
    } else {
      setArticles(articles.map(a => a.id === editingArticle.id ? editingArticle : a));
    }

    setEditingArticle(null);
    setIsCreating(false);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this article?')) {
      setArticles(articles.filter(a => a.id !== id));
    }
  };

  const handleCancel = () => {
    setEditingArticle(null);
    setIsCreating(false);
  };

  const handleTagsChange = (tagsString: string) => {
    if (!editingArticle) return;
    const tags = tagsString.split(',').map(tag => tag.trim()).filter(tag => tag);
    setEditingArticle({ ...editingArticle, tags });
  };

  const handleKeywordsChange = (keywordsString: string) => {
    if (!editingArticle) return;
    const keywords = keywordsString.split(',').map(keyword => keyword.trim()).filter(keyword => keyword);
    setEditingArticle({ ...editingArticle, seoKeywords: keywords });
  };

  if (editingArticle) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              {isCreating ? 'Create New Article' : 'Edit Article'}
              <div className="flex gap-2">
                <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
                  <Save className="w-4 h-4 mr-2" />
                  Save
                </Button>
                <Button variant="outline" onClick={handleCancel}>
                  <X className="w-4 h-4 mr-2" />
                  Cancel
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Title</label>
                <Input
                  value={editingArticle.title}
                  onChange={(e) => setEditingArticle({ ...editingArticle, title: e.target.value })}
                  placeholder="Article title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Author</label>
                <Input
                  value={editingArticle.author}
                  onChange={(e) => setEditingArticle({ ...editingArticle, author: e.target.value })}
                  placeholder="Author name"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Excerpt</label>
              <Textarea
                value={editingArticle.excerpt}
                onChange={(e) => setEditingArticle({ ...editingArticle, excerpt: e.target.value })}
                placeholder="Brief description of the article"
                rows={3}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Content (HTML)</label>
              <Textarea
                value={editingArticle.content}
                onChange={(e) => setEditingArticle({ ...editingArticle, content: e.target.value })}
                placeholder="Article content in HTML format"
                rows={12}
                className="font-mono text-sm"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Image URL</label>
                <Input
                  value={editingArticle.image}
                  onChange={(e) => setEditingArticle({ ...editingArticle, image: e.target.value })}
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Read Time</label>
                <Input
                  value={editingArticle.readTime}
                  onChange={(e) => setEditingArticle({ ...editingArticle, readTime: e.target.value })}
                  placeholder="5 min read"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Tags (comma separated)</label>
              <Input
                value={editingArticle.tags.join(', ')}
                onChange={(e) => handleTagsChange(e.target.value)}
                placeholder="Tag1, Tag2, Tag3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">SEO Keywords (comma separated)</label>
              <Input
                value={editingArticle.seoKeywords.join(', ')}
                onChange={(e) => handleKeywordsChange(e.target.value)}
                placeholder="keyword1, keyword2, keyword3"
              />
            </div>

            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={editingArticle.featured}
                  onChange={(e) => setEditingArticle({ ...editingArticle, featured: e.target.checked })}
                  className="rounded"
                />
                Featured Article
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={editingArticle.published}
                  onChange={(e) => setEditingArticle({ ...editingArticle, published: e.target.checked })}
                  className="rounded"
                />
                Published
              </label>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Blog Manager</h1>
        <Button onClick={handleCreate} className="bg-blue-600 hover:bg-blue-700">
          <PlusCircle className="w-4 h-4 mr-2" />
          Create Article
        </Button>
      </div>

      <div className="grid gap-6">
        {articles.map((article) => (
          <Card key={article.id} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-semibold">{article.title}</h3>
                    {article.featured && <Badge variant="secondary">Featured</Badge>}
                    <Badge variant={article.published ? "default" : "outline"}>
                      {article.published ? "Published" : "Draft"}
                    </Badge>
                  </div>
                  
                  <p className="text-gray-600 mb-3 line-clamp-2">{article.excerpt}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span>By {article.author}</span>
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-2 ml-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(`/blog/${article.slug}`, '_blank')}
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEdit(article)}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDelete(article.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BlogManager;
