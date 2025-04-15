import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout
      title="Page Not Found | Hezron Nyagela, Advocate"
      description="The page you were looking for could not be found."
    >
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center px-4 md:px-6">
          <h1 className="text-6xl font-serif font-bold mb-6 text-primary">404</h1>
          <p className="text-2xl font-serif text-gray-600 mb-8">
            Oops! The page you're looking for doesn't exist.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-md transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" /> Return to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
