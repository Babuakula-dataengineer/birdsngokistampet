"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Stethoscope, TreePine, Lightbulb, Building2, Users, Heart } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function ProgramsPage() {
  const programs = [
    {
      id: 'education',
      icon: GraduationCap,
      title: 'Education Support',
      description: 'Providing quality education resources and learning opportunities for village children and youth.',
      color: 'from-blue-500 to-blue-600',
      initiatives: [
        'School infrastructure improvement projects',
        'Distribution of books and learning materials',
        'After-school tutoring and mentoring',
        'Career guidance and counseling sessions',
        'Educational workshops and seminars',
        'Digital learning support',
      ],
      impact: 'Supporting education for village children',
    },
    {
      id: 'healthcare',
      icon: Stethoscope,
      title: 'Healthcare Awareness',
      description: 'Organizing health camps, awareness programs, and ensuring access to basic healthcare facilities.',
      color: 'from-red-500 to-red-600',
      initiatives: [
        'Regular health checkup camps',
        'Disease prevention awareness programs',
        'Sanitation and hygiene campaigns',
        'First aid training for villagers',
        'Mental health awareness sessions',
        'Nutrition and wellness programs',
      ],
      impact: 'Regular health awareness programs',
    },
    {
      id: 'environment',
      icon: TreePine,
      title: 'Environmental Protection',
      description: 'Tree plantation drives, waste management initiatives, and promoting sustainable living practices.',
      color: 'from-green-500 to-green-600',
      initiatives: [
        'Annual tree plantation drives',
        'Waste segregation and management systems',
        'Water conservation projects',
        'Clean energy promotion',
        'Organic farming workshops',
        'Environmental awareness campaigns',
      ],
      impact: 'Environmental conservation initiatives',
    },
    {
      id: 'youth',
      icon: Lightbulb,
      title: 'Youth Empowerment',
      description: 'Skill development programs, career guidance, and creating opportunities for young villagers.',
      color: 'from-yellow-500 to-yellow-600',
      initiatives: [
        'Vocational training programs',
        'Entrepreneurship development workshops',
        'Leadership and personality development',
        'Sports and cultural activities',
        'Youth clubs and forums',
        'Internship and job placement support',
      ],
      impact: 'Empowering youth through skill development',
    },
    {
      id: 'infrastructure',
      icon: Building2,
      title: 'Infrastructure Development',
      description: 'Improving village infrastructure including roads, community centers, and public facilities.',
      color: 'from-purple-500 to-purple-600',
      initiatives: [
        'Road repair and maintenance',
        'Community center development',
        'Street lighting projects',
        'Public toilet facilities',
        'Playground and park development',
        'Water supply improvements',
      ],
      impact: 'Improving village infrastructure',
    },
  ];

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
            <Users className="w-16 h-16 mx-auto mb-6 text-secondary-400" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display">
              Our Programs & Projects
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              Comprehensive initiatives transforming lives and building a sustainable future for Kistampet
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                id={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-6`}>
                    <program.icon className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-display">
                    {program.title}
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    {program.description}
                  </p>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Key Initiatives:
                    </h3>
                    <ul className="space-y-2">
                      {program.initiatives.map((initiative, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-600 dark:bg-primary-400 mt-2 mr-3 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300">{initiative}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="inline-flex items-center px-4 py-2 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                    <Heart className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2" />
                    <span className="font-semibold text-primary-600 dark:text-primary-400">
                      {program.impact}
                    </span>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <Card className="aspect-square flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                    <program.icon className="w-48 h-48 text-gray-300 dark:text-gray-700" />
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
              Support Our Programs
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              Your contribution helps us expand these programs and reach more villagers in need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/volunteer" size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
                Volunteer With Us
              </Button>
              <Button href="/donate" size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Heart className="mr-2 w-5 h-5" />
                Donate Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Made with Bob
