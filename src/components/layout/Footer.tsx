
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Mail, PhoneCall } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">Hezron Nyagela, Advocate</h3>
            <p className="text-gray-300 mb-4">
              Dedicated to providing expert legal counsel and representation across Kenya and East Africa.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" aria-label="Facebook" className="text-gray-300 hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="text-gray-300 hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="text-gray-300 hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/achievements" className="text-gray-300 hover:text-accent transition-colors">
                  Achievements
                </Link>
              </li>
              <li>
                <a href="https://hezronnyagela.com/contact" className="text-gray-300 hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="https://hezronnyagela.com/privacy-policy" className="text-gray-300 hover:text-accent transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="flex items-center text-gray-300">
                <Mail size={18} className="mr-2" />
                <a href="mailto:info@hezronnyagela.com" className="hover:text-accent transition-colors">
                  info@hezronnyagela.com
                </a>
              </p>
              <p className="flex items-center text-gray-300">
                <PhoneCall size={18} className="mr-2" />
                <a href="tel:+254-123-456-789" className="hover:text-accent transition-colors">
                  +254 123 456 789
                </a>
              </p>
              <p className="text-gray-300 mt-2">
                Nyagela Law Chambers<br />
                Kibera Drive, Nairobi<br />
                Kenya
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {currentYear} Hezron Nyagela, Advocate. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
