import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Basic Monitoring',
    price: '29',
    features: [
      'Core scanning capabilities',
      'Basic disease alerts',
      'Monthly reports'
    ]
  },
  {
    name: 'Professional',
    price: '79',
    features: [
      'All basic features',
      'Advanced disease analytics',
      'Weekly detailed reports',
      'Priority support'
    ],
    highlighted: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'All Professional features',
      'Predictive modeling',
      'Real-time data syncing',
      'Dedicated account manager'
    ]
  }
];

export default function SubscriptionPlans() {
  return (
    <div className="mb-20">
      <h2 className="text-2xl font-bold text-white mb-12 text-center">
        Flexible Subscription Plans
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`bg-emerald-900/30 p-8 rounded-xl backdrop-blur-sm border ${
              plan.highlighted 
                ? 'border-emerald-400/50 ring-1 ring-emerald-400/20' 
                : 'border-emerald-800/20'
            }`}
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              {plan.name}
            </h3>
            <div className="text-3xl font-bold text-white mb-6">
              ${plan.price}
              {plan.price !== 'Custom' && <span className="text-lg font-normal text-emerald-100/60">/month</span>}
            </div>
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center gap-3 text-emerald-100/80">
                  <Check className="w-5 h-5 text-emerald-400" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link to="/choose-plan">
            <button className={`w-full py-2 rounded-md transition-all ${
              plan.highlighted
                ? 'bg-emerald-500 hover:bg-emerald-400 text-white'
                : 'bg-emerald-900/40 hover:bg-emerald-900/60 text-white'
            }`}>
              Choose Plan
            </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}