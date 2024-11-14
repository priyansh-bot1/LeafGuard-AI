import React from 'react';
import OnboardingSteps from '../components/getStarted/OnboardingSteps';
import SubscriptionPlans from '../components/getStarted/SubscriptionPlans';
import SupportResources from '../components/getStarted/SupportResources';

export default function GetStarted() {
  return (
    <div className="pt-20 min-h-screen bg-[#003025]">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-gradient-to-b from-emerald-900/20 to-[#003025]" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-[28rem] bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013')] bg-cover bg-center opacity-20" />
        
        <div className="relative container mx-auto px-6 py-36 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Welcome to LeafGuard AI
          </h1>
          <p className="text-xl text-emerald-100/80 mb-8 max-w-3xl mx-auto">
            Your First Step Toward Healthier, More Resilient Orchards
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-48">
        <OnboardingSteps />
        <SubscriptionPlans />
        <SupportResources />
        
        {/* Final CTA */}
        <div className="text-center py-20">
          <h2 className="text-3xl font-bold text-white mb-6">
            Maximize Your Orchard's Potential
          </h2>
          <p className="text-emerald-100/80 mb-8 max-w-2xl mx-auto">
            Join LeafGuard AI today and take the first step towards healthier, more resilient orchards.
          </p>
          <button className="px-8 py-3 bg-emerald-500 hover:bg-emerald-400 text-white rounded-md transition-all">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
}