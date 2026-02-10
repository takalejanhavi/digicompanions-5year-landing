'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Quote } from 'lucide-react';

interface FounderBlockProps {
  image: string;
  quote: string;
  name: string;
  role: string;
  foundedYear?: string;
  stats?: { label: string; value: string }[];
  reverse?: boolean;
}

export default function FounderBlock({
  image,
  quote,
  name,
  role,
  foundedYear,
  stats,
  reverse = false,
}: FounderBlockProps) {
  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      
      {/* IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={`${reverse ? 'lg:order-2' : ''} relative`}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-green-600/20 rounded-3xl rotate-3" />
        <div className="relative bg-white p-2 rounded-3xl shadow-2xl">
          <Image
            src={image}
            alt={name}
            width={500}
            height={600}
            className="w-full h-96 lg:h-[500px] object-cover rounded-2xl"
          />
        </div>

        {foundedYear && (
          <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                {foundedYear}
              </div>
              <div className="text-sm text-gray-600">Founded</div>
            </div>
          </div>
        )}
      </motion.div>

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={`${reverse ? 'lg:order-1' : ''} space-y-8`}
      >
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-100 to-green-100 rounded-2xl flex items-center justify-center">
            <Quote className="w-8 h-8 text-purple-600" />
          </div>

          <blockquote className="text-2xl lg:text-3xl font-light text-gray-900 leading-relaxed pl-16 italic">
            “{quote}”
          </blockquote>
        </div>

        <div className="pt-6 border-t border-gray-200">
          <p className="text-xl font-semibold text-gray-900">{name}</p>
          <p className="text-purple-600 font-medium">{role}</p>
        </div>

        {stats && (
          <div className="grid grid-cols-3 gap-8 pt-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-purple-600">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}