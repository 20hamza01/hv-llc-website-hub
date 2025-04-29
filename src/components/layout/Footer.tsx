
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container-custom py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Hamza & Vassia LLC</h3>
            <p className="text-gray-600 max-w-xs">
              Providing professional tech services and digital products to enhance your business.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-gray-900">Services</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-gray-600 hover:text-gray-900">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="text-gray-600 hover:text-gray-900">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <div className="flex items-start space-x-2">
              <Mail className="h-5 w-5 text-gray-600 mt-0.5" />
              <span className="text-gray-600">
                For any inquiries, please contact us at <a href="mailto:hamzaalaouiismaili21@gmail.com" className="underline hover:text-black">hamzaalaouiismaili21@gmail.com</a>
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            &copy; {new Date().getFullYear()} Hamza & Vassia LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
