'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Share2, Palette, Zap, Search, ChartBar as BarChart3 } from 'lucide-react';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: TrendingUp,
    title: 'Performance Marketing',
    description: 'Data-driven campaigns that maximize ROI and drive measurable growth',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Engaging content strategies that build communities and drive conversions',
  },
  {
    icon: Palette,
    title: 'Branding & Creative',
    description: 'Distinctive brand identities that resonate with your target audience',
  },
  {
    icon: Zap,
    title: 'Paid Ads Strategy',
    description: 'Optimized ad campaigns across all major platforms for maximum impact',
  },
  {
    icon: Search,
    title: 'SEO & Growth',
    description: 'Organic search strategies that deliver long-term sustainable growth',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    description: 'Comprehensive insights and reporting for informed decision making',
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
      className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-purple-200 transition-all duration-300"
    >
      <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-7 h-7 text-purple-600 group-hover:text-green-600 transition-colors duration-300" />
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {service.title}
      </h3>
      
      <p className="text-gray-600 leading-relaxed">
        {service.description}
      </p>
      
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
        viewport={{ once: true }}
        className="h-0.5 bg-gradient-to-r from-purple-600 to-green-600 mt-6 rounded-full"
      />
    </motion.div>
  );
}

export default function ExpertiseSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-50/30 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Core Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital marketing solutions designed to accelerate your business growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}