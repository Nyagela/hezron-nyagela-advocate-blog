
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <span className="text-primary font-serif text-2xl font-bold">Hezron Nyagela</span>
            <span className="text-accent font-serif italic">Advocate</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-foreground hover:text-primary font-medium transition-colors">
              Home
            </Link>
            <Link to="/blog" className="text-foreground hover:text-primary font-medium transition-colors">
              Blog
            </Link>
            <Link to="/achievements" className="text-foreground hover:text-primary font-medium transition-colors">
              Achievements
            </Link>
            <a href="https://hezronnyagela.com/contact" className="text-foreground hover:text-primary font-medium transition-colors">
              Contact
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-2 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="text-foreground hover:text-primary font-medium px-3 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/blog" 
                className="text-foreground hover:text-primary font-medium px-3 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/achievements" 
                className="text-foreground hover:text-primary font-medium px-3 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Achievements
              </Link>
              <a 
                href="https://hezronnyagela.com/contact" 
                className="text-foreground hover:text-primary font-medium px-3 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
