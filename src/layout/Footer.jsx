import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4 md:px-20 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold mb-4">QuickBite</h2>
          <p className="text-sm text-gray-400">
            Fast, fresh, and delicious food delivered to your doorstep.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/menu" className="hover:text-white">Menu</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="/faq" className="hover:text-white">FAQ</a></li>
            <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Connect with Us</h3>
          <div className="flex gap-4 mb-3">
            <a href="#" className="hover:text-blue-500"><Facebook size={20} /></a>
            <a href="#" className="hover:text-pink-500"><Instagram size={20} /></a>
            <a href="#" className="hover:text-blue-400"><Twitter size={20} /></a>
          </div>
          <p className="text-sm text-gray-400">Email: support@quickbite.com</p>
          <p className="text-sm text-gray-400">Phone: +91 98765 43210</p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} QuickBite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;