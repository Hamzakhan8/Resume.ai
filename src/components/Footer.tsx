import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  const footerLinks = [
    { title: 'Product', links: ['Features', 'Pricing', 'FAQ', 'Support'] },
    { title: 'Company', links: ['About', 'Team', 'Careers', 'Contact'] },
    { title: 'Legal', links: ['Privacy', 'Terms', 'Security', 'Cookies'] },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">
              ResumeTailor
            </h3>
            <p className="text-gray-400">
              Transforming careers with AI-powered resume optimization.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="text-gray-400 hover:text-violet-400 transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map(({ title, links }) => (
            <div key={title}>
              <h4 className="font-semibold text-white mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-violet-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} ResumeTailor. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors mx-3">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors mx-3">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 