import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Mail, Phone, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/Logo/Logo1.png"   // put your logo in public/Logo/Logo1.png
                alt="Trust Logo"
                className="h-14 w-auto"
              />
              <span className="text-2xl font-bold">Trust</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering Gulf students with world-class education through live Zoom classes 
              and comprehensive Moodle LMS integration. From Grade 4 to Grade 12, we prepare 
              students for success in American, AP, and IGCSE curricula.
            </p>
            <a
              href="https://studyintrust.com/online"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <span>Access Our LMS</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/staff" className="text-gray-300 hover:text-white transition-colors">Our Staff</Link></li>
              <li><Link to="/testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">info@studyintrust.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">+971 XX XXX XXXX</span>
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="font-medium mb-2">Subjects We Teach:</h4>
              <p className="text-gray-300 text-sm">American Curriculum • AP Courses • IGCSE • SAT/ACT Prep</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Trust Online Learning Center. All rights reserved. | studyintrust.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;