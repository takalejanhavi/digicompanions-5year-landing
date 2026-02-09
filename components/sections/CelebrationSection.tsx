'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CelebrationSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-600/5 via-green-600/5 to-purple-600/5 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-200/30 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-green-200/30 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-purple-100/20 to-green-100/20 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-green-600 rounded-2xl flex items-center justify-center shadow-xl shadow-purple-600/25">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
          </motion.div>
          
          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight"
          >
            Celebrating 5 Years of
            <span className="block bg-gradient-to-r from-purple-600 to-green-600 bg-clip-text text-transparent">
              Growth & Trust
            </span>
          </motion.h2>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
          >
            From our first client to our 150th brand partnership, every milestone has been achieved through dedication to excellence and performance-driven results.
          </motion.p>
          
          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-10 py-5 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-xl transition-all shadow-xl shadow-green-600/25 hover:shadow-green-600/40"
            >
              Start Your Growth Journey
              <ArrowRight className="ml-3 w-6 h-6" />
            </motion.button>
          </motion.div>
          
          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-16 mt-16 border-t border-gray-200"
          >
            {[
              { number: '2019', label: 'Founded' },
              { number: '150+', label: 'Brands' },
              { number: '500+', label: 'Campaigns' },
              { number: '5★', label: 'Excellence' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-2xl lg:text-3xl font-bold text-purple-600">
                  {stat.number}
                </div>
                <div className="text-gray-600 mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}