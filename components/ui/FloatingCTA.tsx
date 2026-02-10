'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToForm}
          className="fixed bottom-8 right-8 z-50 bg-[#6BBF2A] hover:bg-[#5da625] text-white px-6 py-4 rounded-full shadow-2xl shadow-[#6BBF2A]/25 hover:shadow-[#6BBF2A]/40 transition-all duration-300 font-semibold text-sm lg:text-base"
        >
          <span className="hidden lg:inline">Start Your Growth Journey</span>
          <ArrowUp className="w-5 h-5 lg:hidden" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}