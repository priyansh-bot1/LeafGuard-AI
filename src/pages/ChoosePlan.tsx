import React from 'react';
import PlanComparison from '../components/choosePlan/PlanComparison';
import PlanFeatures from '../components/choosePlan/PlanFeatures';
import PlanCalculator from '../components/choosePlan/PlanCalculator';
import Testimonials from '../components/choosePlan/Testimonials';
import FAQ from '../components/choosePlan/FAQ';

export default function ChoosePlan() {
  return (
    <div className="pt-20 min-h-screen bg-[#003025]">
      <div className="container mx-auto px-6 py-8">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-white mb-4">Choose Your Plan</h1>
          <p className="text-emerald-100/80">
            Select the perfect plan for your orchard's needs. All plans include our core AI-powered disease detection.
          </p>
        </div>

        <div className="space-y-12">
          <PlanComparison />
          <PlanFeatures />
          <PlanCalculator />
          <FAQ />
          <Testimonials />
        </div>
      </div>
    </div>
  );
}