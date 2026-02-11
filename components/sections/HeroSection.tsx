'use client';

import { motion } from 'framer-motion';
import type { Variants } from "framer-motion";
import Image from 'next/image';
import { ArrowRight, Play } from 'lucide-react';

export default function HeroSection() {
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section className="relative h-screen flex flex-col bg-gradient-to-br from-white via-purple-50/40 to-green-50/40 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-200px] right-[-100px] w-[700px] h-[700px]
                        bg-gradient-to-br from-purple-500/30 to-green-500/20
                        blur-[140px] rounded-full" />
        <div className="absolute bottom-[-200px] left-[-100px] w-[700px] h-[700px]
                        bg-gradient-to-tr from-green-400/25 to-purple-400/20
                        blur-[140px] rounded-full" />
      </div>

      {/* Logo */}
      <div className="max-w-7xl mx-auto w-full px-6 pt-4">
        <Image
          src="/logo.png"
          alt="DigiCompanions Logo"
          width={180}
          height={60}
          priority
          className="w-[140px] sm:w-[180px] h-auto"
        />
      </div>

      {/* Hero Content */}
      <div className="flex-1 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

            {/* Left Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              <motion.div variants={itemVariants}>
                <span className="inline-flex items-center px-4 py-2 
                                bg-purple-100 text-purple-800 text-sm 
                                font-semibold rounded-full">
                  Celebrating 5 Years
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight"
              >
                <span className="block">5 Years of</span>
                <span className="bg-gradient-to-r from-purple-600 to-green-600 
                                 bg-clip-text text-transparent">
                  Digital Excellence
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-600 leading-relaxed max-w-lg"
              >
                From startup dreams to market leadership. We've transformed
                150+ brands through performance-driven digital marketing
                that delivers real results.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <motion.button
                  onClick={scrollToForm}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-6 py-3 
                             bg-green-600 hover:bg-green-700 
                             text-white font-semibold rounded-xl 
                             transition-colors shadow-lg shadow-green-600/25"
                >
                  Schedule a Strategy Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-6 py-3 
                             border-2 border-purple-600 text-purple-600 
                             hover:bg-purple-600 hover:text-white 
                             font-semibold rounded-xl transition-all"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Watch Our Story
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden 
                              shadow-2xl shadow-purple-900/20">

                <div className="absolute inset-0 
                                bg-gradient-to-tr from-purple-600/20 
                                to-green-600/20 z-10" />

                <Image
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="DigiCompanions team celebrating 5 years"
                  width={600}
                  height={400}
                  className="w-full h-80 lg:h-[420px] object-cover"
                  priority
                />
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
