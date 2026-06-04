"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Users, Wifi, TreePine, Building2, Heart, Stethoscope, Lightbulb, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Button from '@/components/ui/Button';

const programs = [
  {
    icon: GraduationCap,
    title: 'Education Support',
    description: 'Providing educational assistance, learning resources, and encouragement for students.',
    image: '/Gallery/School1.jpg',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Users,
    title: 'Youth Empowerment',
    description: 'Developing leadership, skills, and opportunities for young people.',
    image: '/Gallery/Yoga1.jpg',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Wifi,
    title: 'Digital Literacy',
    description: 'Promoting digital awareness and access to technology.',
    image: '/Gallery/Machine.jpg',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    icon: TreePine,
    title: 'Environmental Sustainability',
    description: 'Supporting tree plantation, cleanliness drives, and environmental awareness.',
    image: '/Gallery/amaraveerulu.jpg',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Building2,
    title: 'Village Infrastructure Development',
    description: 'Contributing to community improvement and village development initiatives.',
    image: '/Gallery/Village.jpg',
    color: 'from-gray-500 to-gray-600',
  },
  {
    icon: Heart,
    title: 'Social Welfare Programs',
    description: 'Supporting vulnerable individuals and families through community welfare initiatives.',
    image: '/Gallery/Vegetable.jpg',
    color: 'from-pink-500 to-pink-600',
  },
  {
    icon: Stethoscope,
    title: 'Healthcare Awareness',
    description: 'Creating awareness on health, hygiene, and preventive care.',
    image: '/Gallery/Yoga2.jpg',
    color: 'from-red-500 to-red-600',
  },
  {
    icon: Lightbulb,
    title: 'Community Development',
    description: 'Implementing initiatives that improve the quality of life in the village.',
    image: '/Gallery/Water.jpg',
    color: 'from-yellow-500 to-yellow-600',
  },
];

export default function Programs() {
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
            Our Programs
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-display">
            Comprehensive Community Development
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our initiatives that are transforming lives in Kistampet
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                
                {/* Icon */}
                <div className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-br ${program.color} rounded-lg flex items-center justify-center shadow-lg`}>
                  <program.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 font-display">
                  {program.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {program.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Button href="/programs" size="lg" variant="primary">
            View All Programs
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// Made with Bob