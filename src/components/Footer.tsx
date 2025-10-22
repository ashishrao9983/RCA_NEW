import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Globe, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-orange-600 to-red-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-maroon font-bold text-lg">RCA</span>
              </div>
              <span className="text-2xl font-bold">RCA</span>
            </div>
            <p className="text-cream text-sm leading-relaxed">
              Rajasthan Cultural Association at NIT Silchar celebrates the rich heritage
              and vibrant culture of Rajasthan.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.instagram.com/rca.nits/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-saffron rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram size={20} />
              </a>
              {/* <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-saffron rounded-full flex items-center justify-center transition-colors"
              >
                <Linkedin size={20} />
              </a> */}
              {/* <a
                href="/"
                className="w-10 h-10 bg-white/10 hover:bg-saffron rounded-full flex items-center justify-center transition-colors"
              >
                <Globe size={20} />
              </a> */}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-cream hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-cream hover:text-gold transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-cream hover:text-gold transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/alumni" className="text-cream hover:text-gold transition-colors">
                  Our Alumni
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-cream hover:text-gold transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-gold">Upcoming Events</h3>
            <ul className="space-y-2 text-cream text-sm">
              <li className="hover:text-gold transition-colors cursor-pointer">
                Rajasthani Folk Dance Workshop
              </li>
              <li className="hover:text-gold transition-colors cursor-pointer">
                Traditional Cuisine Festival
              </li>
              <li className="hover:text-gold transition-colors cursor-pointer">
                Cultural Night 2025
              </li>
              <li className="hover:text-gold transition-colors cursor-pointer">
                Heritage Art Exhibition
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-gold">Contact Info</h3>
            <ul className="space-y-3 text-cream text-sm">
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>Fakirtilla, Masimpur, Silchar, Assam 788010</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:abhayrsharma1000@gmail.com" className="hover:text-gold transition-colors">
                  abhayrsharma1000@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="flex-shrink-0" />
                <a href="tel:+918824631483" className="hover:text-gold transition-colors">
                  +91-8824631483
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-cream text-sm">
              © 2025 Rajasthan Cultural Association, NIT Silchar. All rights reserved.
            </p>
            {/* <div className="flex space-x-6 text-cream text-sm">
              <Link to="/privacy" className="hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-gold transition-colors">
                Terms of Service
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
