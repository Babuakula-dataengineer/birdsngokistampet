"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Globe, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function OurStory() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider mb-2">
            Our Journey
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-display">
            The Story of BIRDS Society
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            How a shared vision united local citizens and global supporters to transform Kistampet
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/Gallery/Village.jpg"
                alt="BIRDS Society Vision - Kistampet Village Development"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Overlay with inspirational quote */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-800/50 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <p className="text-2xl font-bold mb-2 font-display">
                    "From Vision to Reality"
                  </p>
                  <p className="text-lg text-gray-200">
                    Transforming Kistampet through unity and purpose
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                <strong className="text-gray-900 dark:text-white">BIRDS Society was born from a simple yet powerful idea:</strong> that the people of Kistampet, whether living in the village or having migrated to different parts of the world, could come together to create lasting positive change in their homeland.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                What started as informal conversations among concerned citizens evolved into a structured nonprofit organization dedicated to rural development and community empowerment. Local residents, former villagers now settled elsewhere, and supporters who felt connected to Kistampet's future united under a common mission.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                The founders recognized that sustainable development requires more than just financial support—it demands active participation, local knowledge, and a deep understanding of community needs. This realization shaped BIRDS Society's approach: combining grassroots involvement with global resources.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Timeline/Milestones */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-600 via-accent-600 to-secondary-600 hidden lg:block" />
          
          <div className="space-y-12">
            {[
              {
                icon: Heart,
                title: 'The Vision',
                description: 'Local citizens and migrated members came together with a shared dream of transforming Kistampet into a model village with opportunities for all.',
                color: 'bg-primary-600',
              },
              {
                icon: Users,
                title: 'Community Unity',
                description: 'Volunteers, supporters, and well-wishers from across the globe joined hands to support various development initiatives in education, health, and infrastructure.',
                color: 'bg-accent-600',
              },
              {
                icon: Globe,
                title: 'Global-Local Collaboration',
                description: 'BIRDS Society established a unique model connecting local needs with global support, ensuring that every initiative is community-driven and culturally appropriate.',
                color: 'bg-secondary-600',
              },
              {
                icon: Sparkles,
                title: 'Sustainable Impact',
                description: 'Today, BIRDS Society continues to grow, implementing programs that create long-term positive change and inspiring other villages to follow a similar path.',
                color: 'bg-green-600',
              },
            ].map((milestone, index) => (
              <motion.div
                key={milestone.title}
                className={`relative grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={index % 2 === 0 ? 'lg:text-right' : 'lg:col-start-2'}>
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${milestone.color} rounded-xl shadow-lg mb-4`}>
                    <milestone.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 font-display">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
                
                {/* Center dot for timeline */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
                  <div className={`w-4 h-4 ${milestone.color} rounded-full border-4 border-white dark:border-gray-900`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-12 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-4 font-display">
            Be Part of Our Story
          </h3>
          <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Every contribution, every volunteer hour, and every act of support adds a new chapter to the BIRDS Society story. Join us in writing the future of Kistampet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/volunteer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-xl"
            >
              Join Our Mission
            </a>
            <a
              href="/donate"
              className="inline-flex items-center justify-center px-8 py-4 bg-secondary-600 text-white font-bold rounded-lg hover:bg-secondary-700 transition-colors shadow-xl"
            >
              Support Our Cause
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Made with Bob