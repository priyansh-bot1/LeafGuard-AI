import React from 'react';
import Hero from '../components/exploreResources/Hero';
import TutorialVideos from '../components/exploreResources/TutorialVideos';
import ResourceCategories from '../components/exploreResources/ResourceCategories';
import FAQ from '../components/exploreResources/FAQ';
import CommunityInsights from '../components/exploreResources/CommunityInsights';

export default function ExploreResources() {
  return (
    <div className="pt-20 min-h-screen bg-[#003025]">
      <Hero />
      <div className="container mx-auto px-6 py-12">
        <div className="space-y-20">
          <TutorialVideos />
          <ResourceCategories />
          <FAQ />
          <CommunityInsights />
        </div>
      </div>
    </div>
  );
}