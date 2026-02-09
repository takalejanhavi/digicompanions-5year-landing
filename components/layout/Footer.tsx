'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    'Services': [
      'Performance Marketing',
      'Social Media Marketing',
      'Branding & Creative',
      'Paid Ads Strategy',
      'SEO & Growth',
      'Analytics & Reporting',
    ],
    'Company': [
      'About Us',
      'Our Story',
      'Careers',
      'Contact',
      'Blog',
      'Case Studies',
    ],
    'Legal': [
      'Privacy Policy',
      'Terms of Service',
      'Cookie Policy',
      'GDPR Compliance',
    ],
  };
  
  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
                DigiCompanions
              </h3>
              <p className="text-gray-400 mt-2 text-sm">
                5 Years of Digital Excellence
              </p>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              Transforming brands through performance-driven digital marketing strategies that deliver measurable results.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center text-gray-300 text-sm">
                <Mail className="w-4 h-4 mr-3 text-green-400" />
                hello@digicompanions.com
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <Phone className="w-4 h-4 mr-3 text-green-400" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <MapPin className="w-4 h-4 mr-3 text-green-400" />
                Digital Marketing Hub
              </div>
            </div>
          </motion.div>
          
          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} DigiCompanions. All rights reserved. Celebrating 5 years of digital excellence.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-green-600 rounded-xl flex items-center justify-center transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Achievement Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-900/50 to-green-900/50 rounded-full border border-purple-500/20">
              <span className="text-xs text-gray-300">
                🏆 Proudly serving 150+ brands since 2019
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}