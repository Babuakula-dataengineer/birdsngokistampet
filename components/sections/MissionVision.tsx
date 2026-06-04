"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';
import Image from 'next/image';

export default function MissionVision() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider mb-2">
            Our Purpose
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white font-display">
            Mission & Vision
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <motion.div
            className="group relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              <Image
                src="/Gallery/School.jpg"
                alt="BIRDS Society Mission"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
              
              {/* Icon */}
              <div className="absolute top-6 left-6 w-16 h-16 bg-primary-600 rounded-xl flex items-center justify-center shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-display">
                Our Mission
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To empower and transform Kistampet village through education, rural development, youth empowerment, social welfare, environmental sustainability, healthcare awareness, digital inclusion, and global-local community collaboration.
              </p>
              
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Key Focus Areas:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Education', 'Youth Empowerment', 'Healthcare', 'Environment', 'Digital Inclusion'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            className="group relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              <Image
                src="/Gallery/Yoga.jpg"
                alt="BIRDS Society Vision"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
              
              {/* Icon */}
              <div className="absolute top-6 left-6 w-16 h-16 bg-accent-600 rounded-xl flex items-center justify-center shadow-lg">
                <Eye className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-display">
                Our Vision
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To build a stronger, smarter, inclusive, and self-sustainable Kistampet where every individual has access to opportunities, resources, and support needed to thrive.
              </p>
              
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Our Goals:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Stronger Community', 'Smart Village', 'Inclusive Growth', 'Self-Sustainable'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Quote */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <blockquote className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300 italic">
            "Together, we are building a better tomorrow for Kistampet"
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}

// Made with Bob