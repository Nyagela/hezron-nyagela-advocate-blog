
import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";
import { blogPosts } from "@/data/blogPosts";
import { ArrowRight, Calendar, Tag } from "lucide-react";

// Categories derived from blog posts
const categories = Array.from(
  new Set(blogPosts.map((post) => post.category))
);

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Filter posts by category if one is selected
  const filteredPosts = selectedCategory
    ? blogPosts.filter((post) => post.category === selectedCategory)
    : blogPosts;

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <Layout
      title="Blog | Hezron Nyagela, Advocate"
      description="Expert legal insights, case analyses, and commentary from Hezron Nyagela, a leading advocate in Kenya specializing in corporate governance, human rights, and cyberlaw."
      keywords="legal blog, Hezron Nyagela, advocate, corporate governance, human rights, cyberlaw, Kenya, legal articles"
      url="/blog"
    >
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" }
        ]} 
      />
      
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Legal Insights & Commentary</h1>
          <p className="text-xl max-w-3xl">
            Expert analysis, case studies, and reflections on important legal developments in Kenya and East Africa.
          </p>
        </div>
      </section>
      
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row">
            {/* Sidebar */}
            <div className="w-full md:w-1/4 mb-8 md:mb-0 md:pr-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-serif font-semibold mb-4 text-primary">Categories</h2>
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      setSelectedCategory(null);
                      setCurrentPage(1);
                    }}
                    className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                      selectedCategory === null
                        ? "bg-primary text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    All Categories
                  </button>
                  
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setCurrentPage(1);
                      }}
                      className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                        selectedCategory === category
                          ? "bg-primary text-white"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Blog Posts Grid */}
            <div className="w-full md:w-3/4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentPosts.map((post) => (
                  <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={post.featuredImage}
                        alt={post.altText}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <Calendar size={14} className="mr-1" />
                        <span>{formatDate(post.publishDate)}</span>
                      </div>
                      <h3 className="text-xl font-serif font-semibold mb-3 text-primary">
                        <Link to={`/blog/${post.slug}`} className="hover:text-accent transition-colors">
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 mb-4 flex-grow">
                        {post.excerpt}
                      </p>
                      <div className="mt-4 flex items-center">
                        <Tag size={14} className="text-accent mr-2" />
                        <span className="text-sm text-gray-500">{post.category}</span>
                      </div>
                      <Link 
                        to={`/blog/${post.slug}`} 
                        className="mt-4 inline-flex items-center text-accent hover:text-primary font-medium transition-colors"
                      >
                        Read more <ArrowRight size={16} className="ml-2" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Pagination */}
              {filteredPosts.length > postsPerPage && (
                <div className="mt-12 flex justify-center">
                  <div className="flex space-x-2">
                    {Array.from(
                      { length: Math.ceil(filteredPosts.length / postsPerPage) },
                      (_, i) => i + 1
                    ).map((number) => (
                      <button
                        key={number}
                        onClick={() => paginate(number)}
                        className={`px-4 py-2 rounded-md ${
                          currentPage === number
                            ? "bg-primary text-white"
                            : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                        }`}
                      >
                        {number}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
