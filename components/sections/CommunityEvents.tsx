"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const events = [
  {
    title: 'Tailoring Machine Training Program',
    description: 'Empowering women through tailoring machine training to enhance skills, create livelihood opportunities, and support financial independence.',
    images: ['/Gallery/Machine1.jpg', '/Gallery/Machine2.jpg', '/Gallery/Machine3.jpg'],
  },
  {
    title: 'School Yoga Awareness Program',
    description: 'Promoting physical fitness, mental well-being, discipline, and healthy lifestyle habits among school students through guided yoga sessions.',
    images: ['/Gallery/Yoga.jpg', '/Gallery/Yoga1.jpg', '/Gallery/Yoga3.jpg'],
  },
  {
    title: 'COVID-19 Relief Vegetable Distribution',
    description: 'Supporting vulnerable families by distributing vegetables and essential supplies during the COVID-19 pandemic.',
    images: ['/Gallery/Vegetable1.jpg', '/Gallery/Vegetable2.jpg', '/Gallery/Vegetable3.jpg'],
  },
  {
    title: 'Rangoli Art Competition',
    description: 'Encouraging cultural participation, creativity, and community engagement through traditional Rangoli art competitions.',
    images: ['/Gallery/Rangoli.jpg', '/Gallery/Rangoli1.jpg', '/Gallery/Rangoli2.jpg'],
  },
  {
    title: 'Summer Drinking Water Service (Chalivendram)',
    description: 'Providing free drinking water facilities during the summer season for travelers, workers, and local residents.',
    images: ['/Gallery/Water.jpg', '/Gallery/Water1.jpg'],
  },
  {
    title: 'School Books Distribution Program',
    description: 'Supporting education by distributing books and learning materials to school children.',
    images: ['/Gallery/School.jpg', '/Gallery/School1.jpg'],
  },
];

export default function CommunityEvents() {
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
            Community Activities
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-display">
            Our Events & Initiatives
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Witness the positive impact we're creating through various community programs and activities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              className="group bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Image Gallery */}
              <div className="relative h-64 overflow-hidden">
                <div className="flex h-full">
                  {event.images.map((image, imgIndex) => (
                    <div
                      key={imgIndex}
                      className={`relative ${event.images.length === 1 ? 'w-full' : event.images.length === 2 ? 'w-1/2' : 'w-1/3'}`}
                    >
                      <Image
                        src={image}
                        alt={`${event.title} - Image ${imgIndex + 1}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 font-display">
                  {event.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Activities Note */}
        <motion.div
          className="mt-16 text-center bg-primary-50 dark:bg-primary-900/20 rounded-2xl p-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-display">
            Join Our Community Activities
          </h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            BIRDS Society regularly organizes various community events, training programs, and social welfare activities. 
            Stay connected with us to participate in upcoming initiatives and make a difference in Kistampet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/volunteer"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
            >
              Become a Volunteer
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-lg border-2 border-gray-200 dark:border-gray-700 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Made with Bob