import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Team', path: '/team' },
    { name: 'Our Alumni', path: '/alumni' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-14 h-14 bg-gradient-to-br from-saffron to-maroon rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">RCA</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-saffron to-maroon bg-clip-text text-transparent">
              RCA
            </span>
          </Link>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-lg font-medium transition-colors duration-300 ${
                  isActive(link.path)
                    ? 'text-maroon'
                    : 'text-gray-700 hover:text-saffron'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-saffron to-maroon"></span>
                )}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-maroon transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-lg font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-gradient-to-r from-saffron to-maroon text-white'
                    : 'text-gray-700 hover:bg-cream'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
