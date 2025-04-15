
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { BreadcrumbSchema, BlogPostingSchema } from "@/components/seo/JsonLd";
import { blogPosts } from "@/data/blogPosts";
import { ArrowLeft, Calendar, User, Tag, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import ReactMarkdown from "react-markdown";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Find the current post based on slug
  const currentPost = blogPosts.find((post) => post.slug === slug);
  
  // Get related posts (same category, excluding current post)
  const relatedPosts = currentPost
    ? blogPosts
        .filter(
          (post) => 
            post.category === currentPost.category && 
            post.id !== currentPost.id
        )
        .slice(0, 3)
    : [];
  
  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  
  // If post not found
  if (!currentPost) {
    return (
      <Layout
        title="Post Not Found | Hezron Nyagela, Advocate"
        description="The requested blog post could not be found."
        url={`/blog/${slug}`}
      >
        <div className="container mx-auto px-4 md:px-6 py-16 text-center">
          <h1 className="text-3xl font-serif font-bold mb-4 text-primary">Post Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">The blog post you're looking for could not be found.</p>
          <Link 
            to="/blog" 
            className="inline-flex items-center bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-md transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" /> Return to Blog
          </Link>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout
      title={`${currentPost.title} | Hezron Nyagela, Advocate`}
      description={currentPost.excerpt}
      keywords={currentPost.tags.join(", ")}
      image={currentPost.featuredImage}
      type="article"
      url={`/blog/${currentPost.slug}`}
    >
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: currentPost.title, url: `/blog/${currentPost.slug}` }
        ]} 
      />
      
      <BlogPostingSchema 
        title={currentPost.title}
        description={currentPost.excerpt}
        image={currentPost.featuredImage}
        datePublished={currentPost.publishDate}
        dateModified={currentPost.modifiedDate}
        authorName={currentPost.author}
        url={`/blog/${currentPost.slug}`}
        category={currentPost.category}
      />
      
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" /> Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
              {currentPost.title}
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm md:text-base">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                <span>{formatDate(currentPost.publishDate)}</span>
              </div>
              <div className="flex items-center">
                <User size={16} className="mr-2" />
                <span>{currentPost.author}</span>
              </div>
              <div className="flex items-center">
                <Tag size={16} className="mr-2" />
                <span>{currentPost.category}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Image */}
      <div className="container mx-auto px-4 md:px-6 -mt-16 relative z-20 max-w-4xl">
        <div className="rounded-lg overflow-hidden shadow-xl">
          <img 
            src={currentPost.featuredImage}
            alt={currentPost.altText}
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>
      </div>
      
      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <article className="prose prose-lg max-w-none">
                <ReactMarkdown>
                  {currentPost.content}
                </ReactMarkdown>
              </article>
              
              {/* Tags */}
              <div className="mt-8 pt-6 border-t">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-medium text-primary">Tags:</span>
                  {currentPost.tags.map((tag) => (
                    <span key={tag} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Share Section */}
              <div className="mt-8 pt-6 border-t">
                <h3 className="text-xl font-serif font-semibold mb-4 flex items-center text-primary">
                  <Share2 size={20} className="mr-2" /> Share this article
                </h3>
                <div className="flex space-x-4">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=https://blog.hezronnyagela.com/blog/${currentPost.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                    aria-label="Share on Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=https://blog.hezronnyagela.com/blog/${currentPost.slug}&text=${currentPost.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-sky-500 text-white p-2 rounded-full hover:bg-sky-600 transition-colors"
                    aria-label="Share on Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=https://blog.hezronnyagela.com/blog/${currentPost.slug}&title=${currentPost.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-800 text-white p-2 rounded-full hover:bg-blue-900 transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
              
              {/* Author Bio */}
              <div className="mt-8 pt-6 border-t">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-gray-50 p-6 rounded-lg">
                  <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                    <img 
                      src="/images/hezron-nyagela-portrait-2024.jpg" 
                      alt="Hezron Nyagela"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold mb-2 text-primary">{currentPost.author}</h3>
                    <p className="text-gray-600 mb-4">{currentPost.authorTitle}</p>
                    <p className="text-gray-700">
                      Hezron Nyagela is a distinguished advocate with over 15 years of experience in Kenya's legal landscape.
                      He specializes in corporate governance, human rights advocacy, and cyberlaw.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <div className="bg-gray-50 p-6 rounded-lg mb-8">
                    <h3 className="text-xl font-serif font-semibold mb-4 text-primary">Related Articles</h3>
                    <div className="space-y-4">
                      {relatedPosts.map((post) => (
                        <div key={post.id} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                          <Link 
                            to={`/blog/${post.slug}`}
                            className="text-primary hover:text-accent transition-colors font-medium"
                          >
                            {post.title}
                          </Link>
                          <div className="flex items-center mt-2 text-sm text-gray-500">
                            <Calendar size={14} className="mr-1" />
                            <span>{formatDate(post.publishDate)}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Categories */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-serif font-semibold mb-4 text-primary">Categories</h3>
                  <div className="space-y-2">
                    {Array.from(new Set(blogPosts.map((post) => post.category))).map((category) => (
                      <Link
                        key={category}
                        to={`/blog?category=${category}`}
                        className="block px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;
