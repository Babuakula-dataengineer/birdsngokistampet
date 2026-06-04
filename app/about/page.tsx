"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Heart, Award, Globe, Handshake } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function AboutPage() {
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display">
              About BIRDS Society
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              Building a brighter future for Kistampet through community-driven development and sustainable initiatives
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeader
                subtitle="Our Story"
                title="From Vision to Reality"
                centered={false}
                className="mb-6"
              />
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Bright Integrated Rural Development Society (BIRDS) was established with a powerful vision: to transform Kistampet village into a model of sustainable rural development and community empowerment.
                </p>
                <p>
                  Founded by dedicated citizens, supporters, and migrated members of Kistampet, BIRDS represents the collective aspiration of a community committed to creating lasting positive change. Our organization bridges the gap between local needs and global support, bringing together people who share a common love for Kistampet.
                </p>
                <p>
                  What started as a small initiative has grown into a comprehensive development organization, touching lives across education, healthcare, environment, infrastructure, and social welfare. Every project we undertake is driven by the voices and needs of our community members.
                </p>
                <p>
                  Today, BIRDS stands as a testament to what communities can achieve when they come together with purpose, dedication, and a shared vision for a better tomorrow.
                </p>
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
                  <Users className="w-32 h-32 text-primary-600 dark:text-primary-400" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Our Values"
            title="Principles That Guide Us"
            description="The core values that drive every decision and action at BIRDS Society"
            className="mb-16"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Community First',
                description: 'Every initiative is designed with the community\'s needs and aspirations at the forefront.',
                color: 'from-red-500 to-red-600',
              },
              {
                icon: Target,
                title: 'Sustainable Impact',
                description: 'We focus on creating long-term, sustainable solutions rather than temporary fixes.',
                color: 'from-blue-500 to-blue-600',
              },
              {
                icon: Handshake,
                title: 'Collaboration',
                description: 'Working together with villagers, volunteers, and partners to achieve common goals.',
                color: 'from-green-500 to-green-600',
              },
              {
                icon: Award,
                title: 'Excellence',
                description: 'Maintaining high standards in all our programs and ensuring quality outcomes.',
                color: 'from-yellow-500 to-yellow-600',
              },
              {
                icon: Globe,
                title: 'Inclusive Growth',
                description: 'Ensuring that development benefits reach every member of our community.',
                color: 'from-purple-500 to-purple-600',
              },
              {
                icon: Users,
                title: 'Transparency',
                description: 'Operating with complete openness and accountability to our community and supporters.',
                color: 'from-indigo-500 to-indigo-600',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto mb-4`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 font-display">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="What We Do"
            title="Our Focus Areas"
            description="Comprehensive initiatives addressing the diverse needs of Kistampet village"
            className="mb-16"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Education Support',
                description: 'Providing learning resources and educational infrastructure to ensure every child has access to quality education.',
                points: ['School infrastructure improvement', 'Digital learning resources', 'Teacher training initiatives', 'Educational material distribution'],
              },
              {
                title: 'Youth Empowerment',
                description: 'Creating opportunities for young villagers through skill development, career guidance, and entrepreneurship support.',
                points: ['Skill development workshops', 'Career counseling', 'Entrepreneurship training', 'Leadership programs'],
              },
              {
                title: 'Healthcare Awareness',
                description: 'Organizing health camps, awareness programs, and ensuring access to basic healthcare facilities for all villagers.',
                points: ['Regular health camps', 'Disease prevention awareness', 'Sanitation programs', 'First aid training'],
              },
              {
                title: 'Environmental Protection',
                description: 'Promoting sustainable practices through tree plantation, waste management, and environmental conservation initiatives.',
                points: ['Tree plantation drives', 'Waste management systems', 'Water conservation', 'Clean energy promotion'],
              },
              {
                title: 'Digital Literacy',
                description: 'Bridging the digital divide by providing computer training and internet access to villagers of all ages.',
                points: ['Computer training centers', 'Internet access points', 'Digital skills workshops', 'Online education support'],
              },
              {
                title: 'Infrastructure Development',
                description: 'Improving village infrastructure including roads, community centers, and public facilities for better quality of life.',
                points: ['Road improvements', 'Community center development', 'Public facility upgrades', 'Street lighting projects'],
              },
            ].map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 font-display">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {area.description}
                  </p>
                  <ul className="space-y-2">
                    {area.points.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-600 dark:bg-primary-400 mt-2 mr-3 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">{point}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 font-display">
              Be Part of Our Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Join us in creating a better future for Kistampet. Whether through volunteering, donations, or spreading awareness, every contribution matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/volunteer" size="lg">
                Become a Volunteer
              </Button>
              <Button href="/donate" size="lg" variant="outline">
                <Heart className="mr-2 w-5 h-5" />
                Support Our Mission
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Made with Bob
