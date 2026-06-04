"use client"

import React from 'react';
import Hero from '@/components/sections/Hero';
import AboutSection from '@/components/sections/AboutSection';
import MissionVision from '@/components/sections/MissionVision';
import Programs from '@/components/sections/Programs';
import CommunityEvents from '@/components/sections/CommunityEvents';
import OurStory from '@/components/sections/OurStory';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <MissionVision />
      <Programs />
      <CommunityEvents />
      <OurStory />
      <WhatsAppButton />
    </>
  );
}

// Made with Bob
