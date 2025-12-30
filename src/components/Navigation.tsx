import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Building2 } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-black/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="p-0 rounded-lg">
              <img
                src="../src/images/siTP.png"
                alt="Shetty Industries Logo"
                width={36}
                height={36}
                className="block"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-white">
                Shetty Industries
              </h1>
              <p className="text-xs text-gray-300 -mt-1">Excellence in Innovation</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-all duration-300 hover:text-white ${
                isActive('/') ? 'text-white border-b border-white pb-1' : 'text-gray-300'
              }`}
            >
              Home
            </Link>
            
            <div className="relative group">
              <button className="text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 flex items-center">
                Products
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-black shadow-xl rounded-lg border border-gray-600 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                <div className="p-2">
                  <Link
                    to="/blazehigh-ai"
                    className="block px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white rounded-md transition-all duration-200"
                  >
                    <div className="font-medium text-sm">BlazeHigh.AI</div>
                    <div className="text-xs text-gray-500">Automation Services</div>
                  </Link>
                  <Link
                    to="/blazehigh-farms"
                    className="block px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white rounded-md transition-all duration-200"
                  >
                    <div className="font-medium text-sm">BlazeHigh Farms</div>
                    <div className="text-xs text-gray-500">Export Quality Produce</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-700 py-4">
            <div className="space-y-2">
              <Link
                to="/"
                className={`block px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  isActive('/') ? 'bg-gray-800 text-white' : 'text-gray-300 hover:bg-gray-800'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <div className="px-4 py-2">
                <div className="text-sm font-medium text-gray-500 mb-2">Products</div>
                <div className="space-y-1 ml-4">
                  <Link
                    to="/blazehigh-ai"
                    className="block py-2 text-sm text-gray-400 hover:text-white transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    BlazeHigh.AI
                  </Link>
                  <Link
                    to="/blazehigh-farms"
                    className="block py-2 text-sm text-gray-400 hover:text-white transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    BlazeHigh Farms
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;