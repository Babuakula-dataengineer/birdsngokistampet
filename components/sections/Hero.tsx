"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Users } from 'lucide-react';
import Button from '@/components/ui/Button';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Gallery/Background_image.png"
          alt="Kistampet Village Development"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/85 to-accent-900/90" />
      </div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo */}
          <motion.div
            className="mb-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              <Image
                src="/Gallery/Logo.png"
                alt="BIRDS Society Logo"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>

          {/* NGO Name */}
          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-display"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            BIRDS Society Kistampet
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="text-secondary-400 font-semibold text-lg md:text-xl uppercase tracking-wider mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Local Roots • Global Vision • Better Future
          </motion.p>
          
          {/* Main Heading */}
          <motion.h2
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-display max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Empowering Kistampet Through Unity, Development & Social Responsibility
          </motion.h2>
          
          {/* Sub Heading */}
          <motion.p
            className="text-lg md:text-xl text-gray-200 mb-10 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            BIRDS Society brings together local citizens and global supporters connected to Kistampet to create sustainable opportunities through education, youth empowerment, environmental stewardship, digital inclusion, and community development.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button href="/donate" size="lg" className="bg-secondary-600 hover:bg-secondary-700 text-white shadow-xl">
              <Heart className="mr-2 w-5 h-5" />
              Donate Now
            </Button>
            <Button href="/volunteer" size="lg" className="bg-white text-primary-800 hover:bg-gray-100 shadow-xl">
              <Users className="mr-2 w-5 h-5" />
              Volunteer With Us
            </Button>
            <Button href="/contact" size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 shadow-xl">
              Contact Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Made with Bob