"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, User } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: 'Education Program Launch Success',
      excerpt: 'Our new education support program has successfully enrolled 50 students in its first month...',
      date: '2024-05-15',
      author: 'BIRDS Team',
      category: 'Education',
    },
    {
      id: 2,
      title: 'Community Health Camp Report',
      excerpt: 'Over 200 villagers benefited from our recent health checkup camp organized in collaboration with...',
      date: '2024-05-10',
      author: 'BIRDS Team',
      category: 'Healthcare',
    },
    {
      id: 3,
      title: 'Tree Plantation Drive 2024',
      excerpt: 'BIRDS Society successfully planted 500 trees across Kistampet village with the help of volunteers...',
      date: '2024-05-05',
      author: 'BIRDS Team',
      category: 'Environment',
    },
    {
      id: 4,
      title: 'Youth Skills Workshop Success',
      excerpt: 'Our recent digital skills workshop trained 30 young villagers in computer basics and internet usage...',
      date: '2024-04-28',
      author: 'BIRDS Team',
      category: 'Youth',
    },
    {
      id: 5,
      title: 'Infrastructure Development Update',
      excerpt: 'Road repair work in the village center has been completed, improving connectivity for residents...',
      date: '2024-04-20',
      author: 'BIRDS Team',
      category: 'Infrastructure',
    },
    {
      id: 6,
      title: 'Volunteer Appreciation Event',
      excerpt: 'We celebrated our dedicated volunteers who have contributed countless hours to community service...',
      date: '2024-04-15',
      author: 'BIRDS Team',
      category: 'Community',
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
            <BookOpen className="w-16 h-16 mx-auto mb-6 text-secondary-400" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display">
              News & Updates
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              Stay informed about our latest programs, events, and community impact stories
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col">
                  <div className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-gray-400 dark:text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded text-xs">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 font-display">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <span className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <User className="w-4 h-4" />
                      {post.author}
                    </span>
                    <Button href={`/blog/${post.id}`} variant="ghost" size="sm">
                      Read More
                    </Button>
                  </div>
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
