import Link from 'next/link';
import { Instagram, Linkedin, Facebook, Twitter, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white flex items-center justify-center rounded">
                <svg
                  className="w-5 h-5 text-black"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Zyxen logo icon"
                >
                  <path d="M4 4h8L4 12h8" />
                </svg>
              </div>
              <span className="text-white font-bold">
                <span className="text-[1.4rem]">Z</span>YXEN
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Intelligent Software Meets Elegant Engineering
            </p>
            <div className="space-y-2 pt-2">
              <a href="tel:+919876543210" className="flex items-center gap-2 text-sm text-gray-400 hover:text-purple-400 transition-colors">
                <Phone size={14} />
                +91 98765 43210
              </a>
              <a href="mailto:contact@zyxen.in" className="flex items-center gap-2 text-sm text-gray-400 hover:text-purple-400 transition-colors">
                <Mail size={14} />
                contact@zyxen.in
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-purple-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-purple-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <a href="mailto:contact@zyxen.in" className="hover:text-purple-400 transition-colors">
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-white">Pages</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-purple-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#crafted" className="hover:text-purple-400 transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-purple-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-purple-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-white">Social Media</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://www.instagram.com/zyxen.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Instagram size={16} />
                  Instagram
                </a>
              </li>
              <li>
                <a 
                  href="https://x.com/zyxen_in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Twitter size={16} />
                  X (Twitter)
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/company/zyxen/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://www.facebook.com/share/1BGNGdWE92/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Facebook size={16} />
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-gray-400">
          <p>© 2025 ZYXEN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;