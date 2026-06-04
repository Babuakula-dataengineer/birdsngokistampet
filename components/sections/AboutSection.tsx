"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider mb-2">
              About BIRDS Society
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 font-display">
              Building a Better Future for Kistampet
            </h2>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p className="text-lg leading-relaxed">
                <strong className="text-gray-900 dark:text-white">BRIGHT Integrated Rural Development Society (BIRDS)</strong> is a nonprofit organization founded by the citizens, supporters, and migrated members of Kistampet village who share a common vision of rural transformation and sustainable development.
              </p>
              
              <p className="leading-relaxed">
                BIRDS was established to improve the quality of life in Kistampet through collective responsibility, social service, and community-driven initiatives.
              </p>
              
              <p className="leading-relaxed">
                By connecting local residents with supporters across the globe, BIRDS aims to create meaningful and lasting change for present and future generations.
              </p>

              <div className="pt-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Our Focus Areas:
                </h3>
                <ul className="space-y-2">
                  {[
                    'Education Support & Learning Resources',
                    'Youth Empowerment & Skill Development',
                    'Healthcare Awareness & Preventive Care',
                    'Environmental Protection & Sustainability',
                    'Digital Literacy & Technology Access',
                    'Village Infrastructure Improvement',
                    'Social Welfare & Community Support'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary-600 dark:text-primary-400 mr-2">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <Button href="/about" variant="primary" size="lg">
                Read Our Full Story
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/Gallery/Village.jpg"
                alt="BIRDS Society Community Activities"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-600 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary-600 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Made with Bob