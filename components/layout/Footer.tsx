'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/digicompanions/', label: 'LinkedIn' },
    { icon: Twitter, href: '#' , label: 'Twitter' },
    { icon: Instagram, href: 'https://www.instagram.com/digicompanions/', label: 'Instagram' },
    { icon: Facebook, href: 'https://www.facebook.com/DigiCompanions/', label: 'Facebook' },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">

        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
            DigiCompanions
          </h3>

          <p className="text-gray-400 text-sm mt-2">
            5 Years of Digital Excellence
          </p>

          <p className="text-gray-300 mt-6 max-w-xl mx-auto">
            Transforming brands through performance-driven digital marketing strategies that deliver measurable results.
          </p>

{/* Contact Section */}
<div className="max-w-2xl mx-auto mt-10">

  <div className="grid grid-cols-[24px_1fr] gap-x-5 gap-y-6 text-sm text-gray-300">

    {/* Email */}
    <Mail className="w-5 h-5 text-green-400 mt-1" />
    <div className="text-left">business@digicompanions.com</div>

    {/* Phone */}
    <Phone className="w-5 h-5 text-green-400 mt-1" />
    <div className="text-left">+91 9508787662</div>

    {/* Location */}
    <MapPin className="w-5 h-5 text-green-400 mt-1" />
    <div className="grid md:grid-cols-2 gap-8 text-left">

      <div>
        <p className="font-semibold text-white mb-1">
          Branch Office
        </p>
        <p className="text-gray-400 leading-relaxed">
          2nd Floor, EFC Business Centre,<br />
          Hinjewadi Phase 1, Pune,<br />
          Maharashtra – 411057
        </p>
      </div>

      <div>
        <p className="font-semibold text-white mb-1">
          Head Office
        </p>
        <p className="text-gray-400 leading-relaxed">
          Office No 723, 7th Floor, Gera’s Imperium Rise,<br />
          Opposite Wipro, Hinjewadi Phase 2,<br />
          Pune, Maharashtra – 411057
        </p>
      </div>

    </div>

  </div>

</div>

        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-10"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-400">

          <div className="text-center md:text-left">
            © {currentYear} DigiCompanions. All rights reserved.
            <br className="hidden sm:block" />
            Celebrating 5 years of digital excellence.
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
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

        {/* Badge */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-purple-900/40 to-green-900/40 rounded-full border border-purple-500/20">
            <span className="text-xs text-gray-300">
              🏆 Proudly serving 150+ brands since 2019
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
