'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Trophy, Users, Rocket, Target } from 'lucide-react';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const timelineData: TimelineItem[] = [
  {
    year: '2019',
    title: 'The Beginning',
    description: 'Founded with a vision to transform digital marketing',
    icon: Rocket,
  },
  {
    year: '2020',
    title: 'First Milestone',
    description: 'Served 25+ brands and established our core processes',
    icon: Users,
  },
  {
    year: '2021',
    title: 'Rapid Expansion',
    description: 'Scaled to 75+ clients with specialized service offerings',
    icon: Target,
  },
  {
    year: '2022',
    title: 'Market Leader',
    description: 'Became recognized leader with 120+ successful campaigns',
    icon: Trophy,
  },
  {
    year: '2024',
    title: 'Excellence Achieved',
    description: '150+ brands trust us for performance-driven results',
    icon: Calendar,
  },
];

function TimelineItem({ item, index }: { item: TimelineItem; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const Icon = item.icon;
  const isTop = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: 'easeOut' }}
      className="relative flex flex-col items-center"
    >
      {/* Card positioned above timeline */}
      <div className={`${isTop ? 'order-1 mb-8' : 'order-3 mt-8'} hidden lg:block`}>
        <motion.div
          whileHover={{ y: -4, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' }}
          transition={{ duration: 0.2 }}
          className="w-80 bg-white rounded-xl shadow-md p-6 border border-gray-100"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
              <Icon className="w-5 h-5 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-purple-600">{item.year}</div>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
          <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
        </motion.div>
      </div>

      {/* Vertical connector */}
      <div className={`${isTop ? 'order-2' : 'order-2'} hidden lg:block w-0.5 ${isTop ? 'h-8' : 'h-8'} bg-gray-200`} />

      {/* Timeline node */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.3, delay: index * 0.15 + 0.2 }}
        className="order-2 w-5 h-5 rounded-full border-2 border-purple-600 bg-green-500 flex-shrink-0 z-10"
      />

      {/* Mobile card */}
      <div className="lg:hidden mt-4 ml-8">
        <motion.div
          whileHover={{ y: -4, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' }}
          transition={{ duration: 0.2 }}
          className="bg-white rounded-xl shadow-md p-6 border border-gray-100"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
              <Icon className="w-5 h-5 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-purple-600">{item.year}</div>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
          <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function TimelineSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Five years of milestones, growth, and consistent excellence in digital marketing
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div ref={ref} className="relative hidden lg:block">
          {/* Horizontal timeline line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.5, delay: 0.3, ease: 'easeInOut' }}
            className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-gray-300 origin-left"
          />
          
          {/* Timeline items */}
          <div className="flex justify-between items-center relative">
            {timelineData.map((item, index) => (
              <TimelineItem key={item.year} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden relative">
          {/* Vertical line */}
          <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gray-300" />
          
          {/* Timeline items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <TimelineItem key={item.year} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}