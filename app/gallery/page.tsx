"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, X } from 'lucide-react';
import Image from 'next/image';
import SectionHeader from '@/components/ui/SectionHeader';

const galleryImages = [
  // Education Activities
  { id: 1, src: '/Gallery/School.jpg', title: 'School Books Distribution', category: 'Education' },
  { id: 2, src: '/Gallery/School1.jpg', title: 'Education Support Program', category: 'Education' },
  
  // Youth Programs
  { id: 3, src: '/Gallery/Yoga.jpg', title: 'School Yoga Awareness', category: 'Youth Programs' },
  { id: 4, src: '/Gallery/Yoga1.jpg', title: 'Yoga Session for Students', category: 'Youth Programs' },
  { id: 5, src: '/Gallery/Yoga2.jpg', title: 'Physical Fitness Program', category: 'Youth Programs' },
  { id: 6, src: '/Gallery/Yoga3.jpg', title: 'Wellness Initiative', category: 'Youth Programs' },
  
  // Training Programs
  { id: 7, src: '/Gallery/Machine.jpg', title: 'Tailoring Machine Training', category: 'Training Programs' },
  { id: 8, src: '/Gallery/Machine1.jpg', title: 'Women Empowerment Training', category: 'Training Programs' },
  { id: 9, src: '/Gallery/Machine2.jpg', title: 'Skill Development Program', category: 'Training Programs' },
  { id: 10, src: '/Gallery/Machine3.jpg', title: 'Livelihood Training', category: 'Training Programs' },
  
  // Social Welfare
  { id: 11, src: '/Gallery/Vegetable.jpg', title: 'COVID-19 Relief Distribution', category: 'Social Welfare' },
  { id: 12, src: '/Gallery/Vegetable1.jpg', title: 'Vegetable Distribution', category: 'Social Welfare' },
  { id: 13, src: '/Gallery/Vegetable2.jpg', title: 'Community Support', category: 'Social Welfare' },
  { id: 14, src: '/Gallery/Vegetable3.jpg', title: 'Essential Supplies Distribution', category: 'Social Welfare' },
  { id: 15, src: '/Gallery/Vegetable4.jpg', title: 'Pandemic Relief Program', category: 'Social Welfare' },
  { id: 16, src: '/Gallery/Vegetable5.jpg', title: 'Food Security Initiative', category: 'Social Welfare' },
  
  // Community Service
  { id: 17, src: '/Gallery/Water.jpg', title: 'Summer Water Service', category: 'Community Service' },
  { id: 18, src: '/Gallery/Water1.jpg', title: 'Chalivendram Initiative', category: 'Community Service' },
  
  // Cultural Activities
  { id: 19, src: '/Gallery/Rangoli.jpg', title: 'Rangoli Art Competition', category: 'Cultural Activities' },
  { id: 20, src: '/Gallery/Rangoli1.jpg', title: 'Traditional Art Event', category: 'Cultural Activities' },
  { id: 21, src: '/Gallery/Rangoli2.jpg', title: 'Community Engagement', category: 'Cultural Activities' },
  
  // Village Development
  { id: 22, src: '/Gallery/Village.jpg', title: 'Village Development', category: 'Village Development' },
  { id: 23, src: '/Gallery/amaraveerulu.jpg', title: 'Community Initiative', category: 'Village Development' },
];

const categories = ['All', 'Education', 'Youth Programs', 'Training Programs', 'Social Welfare', 'Community Service', 'Cultural Activities', 'Village Development'];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

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
            <ImageIcon className="w-16 h-16 mx-auto mb-6 text-secondary-400" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display">
              Our Gallery
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              Moments captured from our programs, events, and community activities in Kistampet
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center sm:overflow-visible lg:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`shrink-0 whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium transition-all sm:px-4 sm:py-1.5 sm:text-sm lg:px-5 lg:py-2 ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.02 }}
                  className="group relative aspect-square bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white font-bold text-lg mb-1">
                        {image.title}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {image.category}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <ImageIcon className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                No images found in this category
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video w-full">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-300">
                  {selectedImage.category}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Made with Bob
