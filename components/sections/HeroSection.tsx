'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Play } from 'lucide-react';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 to-purple-50/30 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-green-100 to-green-200 rounded-full blur-3xl opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 text-sm font-semibold rounded-full">
                Celebrating 5 Years
              </span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight"
            >
              <span className="block">5 Years of</span>
              <span className="bg-gradient-to-r from-purple-600 to-green-600 bg-clip-text text-transparent">
                Digital Excellence
              </span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600 leading-relaxed max-w-lg"
            >
              From startup dreams to market leadership. We've transformed 150+ brands through performance-driven digital marketing that delivers real results.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-green-600/25"
              >
                Start Your Growth Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-semibold rounded-xl transition-all"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Our Story
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-purple-900/20">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-green-600/20 z-10" />
              <Image
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="DigiCompanions team celebrating 5 years"
                width={600}
                height={400}
                className="w-full h-96 lg:h-[500px] object-cover"
                priority
              />
            </div>
            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-green-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  5
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Years Strong</p>
                  <p className="text-sm text-gray-600">Est. 2019</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}