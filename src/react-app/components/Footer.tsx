import { Link } from 'react-router';
import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black/30 backdrop-blur-lg border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img 
                  src="https://mocha-cdn.com/01988d47-f944-718c-9e9d-dec488cfbafd/Qunatum-learning.png"
                  alt="Quantum Learning"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-slate-400 to-blue-500 bg-clip-text text-transparent">
                Quantum Learning
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering minds through innovative education in Public Speaking, Financial Literacy, and Innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-400 hover:text-blue-400 transition-colors text-sm">
                About Us
              </Link>
              <Link to="/pricing" className="block text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Pricing
              </Link>
              <Link to="/enterprise" className="block text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Enterprise Solutions
              </Link>
              <Link to="/schedule" className="block text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Schedule Consultation
              </Link>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-semibold mb-4">Programs</h3>
            <div className="space-y-2">
              <div className="text-gray-400 text-sm">Public Speaking & Communication</div>
              <div className="text-gray-400 text-sm">Financial Literacy</div>
              <div className="text-gray-400 text-sm">Innovation & Entrepreneurship</div>
              <div className="text-gray-400 text-sm">Enterprise Training</div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4" />
                <span>thequantumlearning@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Quantum Learning. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Terms of Service
              </Link>
              <Link to="/refund" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Refund Policy
              </Link>
              <Link to="/disclaimer" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Disclaimer
              </Link>
              <Link to="/conduct" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Code of Conduct
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
