"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is BIRDS Society?',
      answer: 'BIRDS (Bright Integrated Rural Development Society) is a nonprofit organization dedicated to the development and empowerment of Kistampet village through community-driven initiatives in education, healthcare, environment, and social welfare.',
    },
    {
      question: 'How can I contribute to BIRDS Society?',
      answer: 'You can contribute in multiple ways: make a financial donation, volunteer your time and skills, sponsor specific programs, donate materials or resources, or help spread awareness about our work.',
    },
    {
      question: 'Are donations tax-deductible?',
      answer: 'Yes, BIRDS Society is a registered nonprofit organization. Donations made to us are eligible for tax deductions under applicable laws. We provide tax receipts for all donations.',
    },
    {
      question: 'How can I become a volunteer?',
      answer: 'Visit our Volunteer page and fill out the application form. We welcome volunteers from all backgrounds and skill sets. Our team will contact you with opportunities that match your interests and availability.',
    },
    {
      question: 'What programs does BIRDS Society run?',
      answer: 'We run comprehensive programs in Education Support, Healthcare Awareness, Environmental Protection, Youth Empowerment, Infrastructure Development, and Digital Literacy. Each program is designed to address specific community needs.',
    },
    {
      question: 'How are donations utilized?',
      answer: 'All donations are used directly for program implementation, beneficiary support, and community development. We maintain complete transparency and provide regular updates on fund utilization. Administrative costs are kept minimal.',
    },
    {
      question: 'Can I sponsor a specific program or project?',
      answer: 'Yes, you can sponsor specific programs, projects, or even individual beneficiaries. Contact us to discuss your preferences, and we will provide detailed information about sponsorship opportunities.',
    },
    {
      question: 'How can I stay updated about BIRDS activities?',
      answer: 'Subscribe to our newsletter, follow us on social media, or visit our website regularly for updates on programs, events, and impact stories. We also send periodic reports to our supporters.',
    },
    {
      question: 'Does BIRDS Society work only in Kistampet?',
      answer: 'Currently, our primary focus is Kistampet village. However, we aim to expand our model to neighboring villages and inspire similar initiatives in other rural communities.',
    },
    {
      question: 'How can organizations partner with BIRDS?',
      answer: 'We welcome partnerships with corporations, NGOs, educational institutions, and government bodies. Contact us through our Contact page to discuss collaboration opportunities that align with our mission.',
    },
    {
      question: 'Are there volunteer opportunities for students?',
      answer: 'Yes, we offer various volunteer opportunities for students including internships, project work, field visits, and skill-based volunteering. These experiences provide valuable learning while contributing to community development.',
    },
    {
      question: 'How can I verify the authenticity of BIRDS Society?',
      answer: 'We are a registered nonprofit organization with proper documentation. You can request our registration details, annual reports, and financial statements. We maintain complete transparency in our operations.',
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
            <HelpCircle className="w-16 h-16 mx-auto mb-6 text-secondary-400" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              Find answers to common questions about BIRDS Society and our work
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
                >
                  <span className="text-left font-semibold text-gray-900 dark:text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary-600 dark:text-primary-400 transition-transform flex-shrink-0 ml-4 ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center p-8 bg-primary-50 dark:bg-primary-900/20 rounded-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-display">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Can't find the answer you're looking for? Feel free to reach out to us.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Made with Bob
