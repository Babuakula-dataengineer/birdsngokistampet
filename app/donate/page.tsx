"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Copy, Download, Check, Users, GraduationCap, Stethoscope, TreePine, Building2, Lightbulb } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function DonatePage() {
  const [copied, setCopied] = useState(false);

  const bankDetails = {
    accountName: 'Bright Integrated Rural Development Society',
    bank: 'State Bank of India',
    accountNumber: '38618133360',
    ifscCode: 'SBIN0020153',
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 text-white overflow-hidden">
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
            <Heart className="w-16 h-16 mx-auto mb-6 text-secondary-400" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display">
              Support Rural Transformation
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              Your contribution helps fund educational support, youth initiatives, environmental projects, digital literacy programs, social welfare activities, and village development efforts in Kistampet.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Donate Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Why Your Support Matters"
            title="Making Every Rupee Count"
            description="Your donation directly impacts the lives of villagers and helps build a sustainable future"
            className="mb-16"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: GraduationCap,
                title: 'Education for All',
                description: 'Fund learning materials and educational infrastructure for village children.',
                impact: '₹15,000 supports educational resources',
              },
              {
                icon: Stethoscope,
                title: 'Healthcare Access',
                description: 'Support medical supplies and healthcare awareness programs.',
                impact: '₹30,000 supports healthcare initiatives',
              },
              {
                icon: TreePine,
                title: 'Environmental Projects',
                description: 'Fund waste management and sustainability initiatives.',
                impact: '₹10,000 supports environmental projects',
              },
              {
                icon: Building2,
                title: 'Infrastructure',
                description: 'Improve village roads, community centers, and public facilities.',
                impact: '₹2,00,000 builds a community facility',
              },
              {
                icon: Lightbulb,
                title: 'Skill Development',
                description: 'Provide training programs and resources for youth empowerment.',
                impact: '₹12,000 trains one youth in skills',
              },
              {
                icon: Users,
                title: 'Community Programs',
                description: 'Support social welfare activities and community development initiatives.',
                impact: '₹50,000 runs a community program',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center mb-4">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 font-display">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {item.description}
                  </p>
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                      {item.impact}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bank Details Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Donation Details"
            title="How to Contribute"
            description="Make a direct bank transfer to support BIRDS Society"
            className="mb-12"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white dark:bg-gray-900">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Account Name
                  </label>
                  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <p className="text-lg font-medium text-gray-900 dark:text-white">
                      {bankDetails.accountName}
                    </p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Bank Name
                  </label>
                  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <p className="text-lg font-medium text-gray-900 dark:text-white">
                      {bankDetails.bank}
                    </p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Account Number
                  </label>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <p className="text-lg font-mono font-medium text-gray-900 dark:text-white">
                        {bankDetails.accountNumber}
                      </p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(bankDetails.accountNumber)}
                      className="p-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
                      title="Copy account number"
                    >
                      {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    IFSC Code
                  </label>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <p className="text-lg font-mono font-medium text-gray-900 dark:text-white">
                        {bankDetails.ifscCode}
                      </p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(bankDetails.ifscCode)}
                      className="p-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
                      title="Copy IFSC code"
                    >
                      {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  <strong>Note:</strong> After making a donation, please email us at{' '}
                  <a href="mailto:akulababu20@gmail.com" className="underline font-semibold">
                    akulababu20@gmail.com
                  </a>{' '}
                  with your transaction details to receive a confirmation. We appreciate your support!
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Impact Stories Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-accent-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Your Impact"
            title="See Where Your Donation Goes"
            description="Real stories of how contributions are transforming lives"
            className="text-white mb-16"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                amount: '₹5,000',
                impact: 'Provides one year of education support including books, uniforms, and supplies for a village student.',
              },
              {
                amount: '₹10,000',
                impact: 'Organizes a comprehensive health camp serving 100+ villagers with medical checkups and medicines.',
              },
              {
                amount: '₹25,000',
                impact: 'Establishes a digital learning center with computers and internet access for youth training.',
              },
            ].map((story, index) => (
              <motion.div
                key={story.amount}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card glass className="h-full text-center">
                  <div className="text-3xl font-bold text-secondary-400 mb-4 font-display">
                    {story.amount}
                  </div>
                  <p className="text-gray-100">
                    {story.impact}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Heart className="w-16 h-16 mx-auto mb-6 text-primary-600 dark:text-primary-400" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 font-display">
              Thank You for Your Generosity
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Every contribution, big or small, makes a real difference in the lives of Kistampet villagers. Together, we are building a brighter future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg" variant="outline">
                Contact Us
              </Button>
              <Button href="/about" size="lg">
                Learn More About Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Made with Bob
