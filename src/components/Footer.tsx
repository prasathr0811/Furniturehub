import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">FurnitureHub</h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner for high-quality furniture and home décor solutions.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-300 hover:text-white cursor-pointer" />
              <Instagram className="h-6 w-6 text-gray-300 hover:text-white cursor-pointer" />
              <Twitter className="h-6 w-6 text-gray-300 hover:text-white cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products/living-room" className="text-gray-300 hover:text-white">
                  Living Room
                </Link>
              </li>
              <li>
                <Link to="/products/bedroom" className="text-gray-300 hover:text-white">
                  Bedroom
                </Link>
              </li>
              <li>
                <Link to="/products/dining" className="text-gray-300 hover:text-white">
                  Dining Room
                </Link>
              </li>
              <li>
                <Link to="/products/office" className="text-gray-300 hover:text-white">
                  Office
                </Link>
              </li>
              <li>
                <Link to="/products/storage" className="text-gray-300 hover:text-white">
                  Storage
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-300 hover:text-white">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-300 hover:text-white">
                  Returns
                </Link>
              </li>
              <li>
                <Link to="/warranty" className="text-gray-300 hover:text-white">
                  Warranty
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-300" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-300" />
                <span className="text-gray-300">info@furniturehub.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gray-300" />
                <span className="text-gray-300">Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            &copy; 2025 FurnitureHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;