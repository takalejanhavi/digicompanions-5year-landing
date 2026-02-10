'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Quote } from 'lucide-react';

export default function FounderSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50/50 via-white to-green-50/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-green-600/20 rounded-3xl transform rotate-3" />
              <div className="relative bg-white p-2 rounded-3xl shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="DigiCompanions Founder"
                  width={500}
                  height={600}
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl"
                />
              </div>
            </div>
            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">2021</div>
                <div className="text-sm text-gray-600">Founded</div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right - Message */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-100 to-green-100 rounded-2xl flex items-center justify-center"
              >
                <Quote className="w-8 h-8 text-purple-600" />
              </motion.div>
              
              <motion.blockquote
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-2xl lg:text-3xl font-light text-gray-900 leading-relaxed pl-16 italic"
              >
                "Five years ago, we started with a simple belief: that every brand deserves exceptional digital marketing that delivers real results. Today, we're proud to have helped 150+ brands achieve their growth goals through performance-driven strategies."
              </motion.blockquote>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="pt-8 border-t border-gray-200"
            >
              <div className="flex items-center space-x-4">
                <div>
                  <p className="text-xl font-semibold text-gray-900">Leadership Team</p>
                  <p className="text-purple-600 font-medium">DigiCompanions</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-8 pt-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">150+</div>
                <div className="text-sm text-gray-600">Brands Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">500+</div>
                <div className="text-sm text-gray-600">Campaigns</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">5</div>
                <div className="text-sm text-gray-600">Years Strong</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}