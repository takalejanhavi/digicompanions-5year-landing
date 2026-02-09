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

export default function TimelineSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-24 bg-gradient-to-b from-white to-purple-50/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-24"
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
  className="relative hidden lg:block max-w-6xl mx-auto"
>
  {/* Center Line */}
  <motion.div
    initial={{ scaleX: 0 }}
    animate={isInView ? { scaleX: 1 } : {}}
    transition={{ duration: 1.2 }}
    className="absolute left-0 right-0 
              top-[calc(50%-10px)]
              h-[3px]
              bg-gradient-to-r from-purple-400 via-purple-500 to-green-400
              origin-left rounded-full"

  />

  <div className="grid grid-cols-5 relative">

    {timelineData.map((item, index) => {
      const Icon = item.icon;
      const isTop = index % 2 === 0;

      return (
        <div key={item.year} className="flex flex-col items-center">

          {/* TOP SIDE */}
          {isTop && (
            <>
              {/* Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="mb-6"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 w-64 text-center hover:shadow-xl transition-all duration-300">
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

              {/* Icon ABOVE line */}
              <div className="mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-green-600 
                                rounded-xl flex items-center justify-center 
                                shadow-lg shadow-purple-600/25">
                  <Icon className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Spacer pushes line to middle */}
              <div className="h-[200px]" />
            </>
          )}

          {/* BOTTOM SIDE */}
          {!isTop && (
            <>
              {/* Spacer pushes content below line */}
              <div className="h-[200px]" />

              {/* Icon BELOW line */}
              <div className="mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-green-600 
                                rounded-xl flex items-center justify-center 
                                shadow-lg shadow-purple-600/25">
                  <Icon className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 w-64 text-center hover:shadow-xl transition-all duration-300">
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
            </>
          )}

        </div>
      );
    })}

  </div>
</div>


        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-12">
          {timelineData.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.year} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-green-600 
                                rounded-2xl flex items-center justify-center 
                                mb-6 shadow-lg shadow-purple-600/25">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 max-w-xs">
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
            );
          })}
        </div>

      </div>
    </section>
  );
}
