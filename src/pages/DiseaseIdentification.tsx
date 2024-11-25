import React from 'react';
import HowItWorks from '../components/diseaseIdentification/HowItWorks';
import ImageUploader from '../components/diseaseIdentification/ImageUploader';
import Features from '../components/diseaseIdentification/Features';
import SuccessStories from '../components/diseaseIdentification/SuccessStories';
import CallToAction from '../components/diseaseIdentification/CallToAction';

export default function DiseaseIdentification() {
  return (
    <div className="pt-20 min-h-screen bg-[#003025]">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-gradient-to-b from-emerald-900/20 to-[#003025]" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-[28rem] bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013')] bg-cover bg-center opacity-20" />
        
        <div className="relative container mx-auto px-6 py-24">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Disease Identification
          </h1>
          <p className="text-xl text-emerald-100/80 mb-8 max-w-3xl">
            LeafGuard AI revolutionizes crop protection through advanced AI-powered image recognition. 
            Identify early signs of Black Rot, Cedar Rust, and Apple Scabs instantly.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <HowItWorks />
        <ImageUploader />
        <Features />
        <SuccessStories />
        <CallToAction />
      </div>
    </div>
  );
}