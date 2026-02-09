'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function FinalCTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-900 via-purple-800 to-green-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-green-400/20 rounded-full blur-2xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-grid-white/[0.1] bg-[size:50px_50px]" />
      </div>
      
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0, rotate: 180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2, type: 'spring', stiffness: 100 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center border border-white/20">
              <Sparkles className="w-12 h-12 text-white" />
            </div>
          </motion.div>
          
          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-7xl font-bold text-white leading-tight"
          >
            Let's Build
            <span className="block bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
              What's Next
            </span>
          </motion.h2>
          
          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto"
          >
            Ready to join 150+ brands who trust DigiCompanions for their digital growth? 
            Let's create your success story together.
          </motion.p>
          
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-12 py-6 bg-green-500 hover:bg-green-400 text-white text-lg font-semibold rounded-2xl transition-all shadow-2xl shadow-green-500/25 hover:shadow-green-400/40 border border-green-400/50"
            >
              Get Started Today
              <ArrowRight className="ml-3 w-6 h-6" />
            </motion.button>
          </motion.div>
          
          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
            className="pt-16 border-t border-white/20"
          >
            <p className="text-white/70 text-sm mb-6">Trusted by industry leaders</p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/60 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span>Performance Driven</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span>150+ Success Stories</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span>5 Years Experience</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}