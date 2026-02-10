'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface MetricProps {
  number: string;
  label: string;
  delay: number;
}

function MetricCard({ number, label, delay }: MetricProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const target = parseInt(number.replace(/\D/g, ''));
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, number]);

  const formatNumber = (num: number) => {
    if (number.includes('+')) return `${num}+`;
    return num.toString();
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
      className="text-center group"
    >
      <motion.div
        initial={{ scale: 0.5 }}
        animate={isInView ? { scale: 1 } : { scale: 0.5 }}
        transition={{ duration: 0.8, delay: delay + 0.2 }}
        className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-purple-100 to-green-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
      >
        <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-green-600 bg-clip-text text-transparent">
          {formatNumber(count)}
        </span>
      </motion.div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{label}</h3>
    </motion.div>
  );
}

export default function MetricsSection() {
  const metrics = [
    { number: "5", label: "Years Strong" },
    { number: "160+", label: "Clients served" },
    { number: "280+", label: "Chai pe Charcha" },
    { number: "200+", label: "Projects Completed" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Five years of consistent growth, innovation, and delivering exceptional results for our clients
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {metrics.map((metric, index) => (
            <MetricCard
              key={metric.label}
              number={metric.number}
              label={metric.label}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}