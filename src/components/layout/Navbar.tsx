
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="border-b border-gray-100 bg-white">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-black">Hamza & Vassia LLC</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-900 hover:text-gray-600 font-medium">
              Home
            </Link>
            <Link to="/services" className="text-gray-900 hover:text-gray-600 font-medium">
              Services
            </Link>
            <Link to="/privacy-policy" className="text-gray-900 hover:text-gray-600 font-medium">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="text-gray-900 hover:text-gray-600 font-medium">
              Terms & Conditions
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link 
              to="/" 
              className="block py-2 text-gray-900 hover:text-gray-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="block py-2 text-gray-900 hover:text-gray-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/privacy-policy" 
              className="block py-2 text-gray-900 hover:text-gray-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms-conditions" 
              className="block py-2 text-gray-900 hover:text-gray-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Terms & Conditions
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
