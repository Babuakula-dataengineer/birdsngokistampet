"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Compass } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';

export default function MissionPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 to-accent-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Compass className="w-16 h-16 mx-auto mb-6 text-secondary-400" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display">
              Mission & Vision
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              Guiding principles that drive our commitment to Kistampet's development
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center mb-6">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 font-display">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                To empower and develop Kistampet village through community-driven initiatives in education, rural development, youth empowerment, social welfare, environmental sustainability, healthcare awareness, and global-local collaboration for a better future.
              </p>
              <div className="space-y-4">
                {[
                  'Provide quality education and learning opportunities',
                  'Promote sustainable rural development practices',
                  'Empower youth through skill development',
                  'Ensure healthcare access and awareness',
                  'Protect and preserve the environment',
                  'Build strong community partnerships',
                ].map((point, index) => (
                  <div key={index} className="flex items-start">
                    <Heart className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-600 to-accent-600 p-1">
                <div className="w-full h-full rounded-2xl bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                  <Target className="w-32 h-32 text-primary-600 dark:text-primary-400" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-2 md:order-1"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent-600 to-primary-600 p-1">
                <div className="w-full h-full rounded-2xl bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                  <Eye className="w-32 h-32 text-accent-600 dark:text-accent-400" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent-600 to-primary-600 flex items-center justify-center mb-6">
                <Eye className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 font-display">
                Our Vision
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                To transform Kistampet into a model village that exemplifies sustainable development, community empowerment, and quality of life, inspiring rural communities across the region and beyond.
              </p>
              <div className="space-y-4">
                {[
                  'A self-sustainable and prosperous village',
                  'Equal opportunities for all community members',
                  'Modern infrastructure with traditional values',
                  'Environmentally conscious and green village',
                  'Digitally connected and globally aware',
                  'Strong sense of community and belonging',
                ].map((point, index) => (
                  <div key={index} className="flex items-start">
                    <Heart className="w-5 h-5 text-accent-600 dark:text-accent-400 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Objectives Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Our Objectives"
            title="Strategic Goals for Development"
            description="Key objectives that guide our programs and initiatives"
            className="mb-16"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Education Excellence',
                description: 'Ensure every child has access to quality education and learning resources for a brighter future.',
              },
              {
                title: 'Healthcare for All',
                description: 'Provide accessible healthcare services and promote health awareness throughout the village.',
              },
              {
                title: 'Economic Empowerment',
                description: 'Create livelihood opportunities and support entrepreneurship for sustainable income generation.',
              },
              {
                title: 'Environmental Sustainability',
                description: 'Implement eco-friendly practices and conservation efforts for a greener tomorrow.',
              },
              {
                title: 'Infrastructure Development',
                description: 'Improve village infrastructure including roads, facilities, and public amenities.',
              },
              {
                title: 'Digital Inclusion',
                description: 'Bridge the digital divide through technology access and digital literacy programs.',
              },
            ].map((objective, index) => (
              <motion.div
                key={objective.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 font-display">
                    {objective.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {objective.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Made with Bob
