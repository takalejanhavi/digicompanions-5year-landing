'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Trophy, Users, Rocket, Target } from 'lucide-react';

interface TimelineItemType {
  year: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const timelineData: TimelineItemType[] = [
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

function TimelineItem({
  item,
  index,
}: {
  item: TimelineItemType;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isAbove = index % 2 === 0;

  return (
    <div ref={ref} className="relative flex flex-col items-center flex-1">
      
      {/* Top Card */}
      {isAbove && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="mb-16"
        >
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 max-w-xs hover:shadow-xl transition-shadow duration-300">
            <div className="text-2xl font-bold text-purple-600 mb-2">
              {item.year}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        </motion.div>
      )}

      {/* Node aligned perfectly to center line */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
        className="absolute top-1/2 -translate-y-1/2 z-10"
      >
        <div className="w-4 h-4 rounded-full border-2 border-purple-600 bg-white" />
      </motion.div>

      {/* Bottom Card */}
      {!isAbove && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="mt-16"
        >
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 max-w-xs hover:shadow-xl transition-shadow duration-300">
            <div className="text-2xl font-bold text-purple-600 mb-2">
              {item.year}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default function TimelineSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
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
        <div
          ref={ref}
          className="relative hidden lg:flex justify-between items-center max-w-6xl mx-auto"
        >
          {/* Center Horizontal Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1 }}
            className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 origin-left -translate-y-1/2"
          />

          {timelineData.map((item, index) => (
            <TimelineItem key={item.year} item={item} index={index} />
          ))}
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden relative">
          <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gray-300" />

          <div className="space-y-10 pl-8">
            {timelineData.map((item, index) => (
              <div key={item.year} className="relative flex items-start gap-4">
                
                <div className="w-4 h-4 rounded-full border-2 border-purple-600 bg-white mt-2 z-10" />

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-2xl font-bold text-purple-600 mb-2">
                    {item.year}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
