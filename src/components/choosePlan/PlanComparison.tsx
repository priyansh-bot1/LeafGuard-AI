import React from 'react';
import { Check, X } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '29',
    period: 'monthly',
    features: [
      { name: 'Real-time monitoring', included: true },
      { name: 'Basic disease detection', included: true },
      { name: 'Mobile app access', included: true },
      { name: 'Advanced analytics', included: false },
      { name: 'Priority support', included: false }
    ]
  },
  {
    name: 'Professional',
    price: '79',
    period: 'monthly',
    popular: true,
    features: [
      { name: 'Real-time monitoring', included: true },
      { name: 'Advanced disease detection', included: true },
      { name: 'Mobile app access', included: true },
      { name: 'Advanced analytics', included: true },
      { name: 'Priority support', included: true }
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'monthly',
    features: [
      { name: 'Real-time monitoring', included: true },
      { name: 'Advanced disease detection', included: true },
      { name: 'Mobile app access', included: true },
      { name: 'Advanced analytics', included: true },
      { name: 'Dedicated support', included: true }
    ]
  }
];

export default function PlanComparison() {
  return (
    <div className="bg-emerald-900/30 p-6 rounded-xl backdrop-blur-sm border border-emerald-800/20">
      <h2 className="text-xl font-semibold text-white mb-6">Compare Subscription Plans</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div 
            key={index}
            className={`bg-emerald-900/40 p-6 rounded-lg ${
              plan.popular ? 'ring-2 ring-emerald-400' : ''
            }`}
          >
            {plan.popular && (
              <div className="text-emerald-400 text-sm font-medium mb-2">Most Popular</div>
            )}
            <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
            <div className="mb-6">
              <span className="text-3xl font-bold text-white">
                {typeof plan.price === 'number' ? `$${plan.price}` : plan.price}
              </span>
              {plan.price !== 'Custom' && (
                <span className="text-emerald-100/60">/{plan.period}</span>
              )}
            </div>

            <ul className="space-y-4 mb-6">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center gap-3">
                  {feature.included ? (
                    <Check className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <X className="w-5 h-5 text-emerald-100/40" />
                  )}
                  <span className={feature.included ? 'text-emerald-100/80' : 'text-emerald-100/40'}>
                    {feature.name}
                  </span>
                </li>
              ))}
            </ul>

            <button className={`w-full py-2 rounded-md transition-all ${
              plan.popular
                ? 'bg-emerald-500 hover:bg-emerald-400 text-white'
                : 'bg-emerald-900/40 hover:bg-emerald-900/60 text-white'
            }`}>
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}