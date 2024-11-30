import React from 'react';
import SupportChannels from '../components/contactSupport/SupportChannels';
import ResponseTimes from '../components/contactSupport/ResponseTimes';
import KnowledgeBase from '../components/contactSupport/KnowledgeBase';
import SupportTicketForm from '../components/contactSupport/SupportTicketForm';
import SupportHours from '../components/contactSupport/SupportHours';
import EscalationSection from '../components/contactSupport/EscalationSection';

export default function ContactSupport() {
  return (
    <div className="pt-20 min-h-screen bg-[#003025]">
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-white mb-4">Contact Support</h1>
        <p className="text-emerald-100/80 mb-8">Get Help From Our Dedicated Support Team</p>
        
        <div className="space-y-8">
          <SupportChannels />
          <ResponseTimes />
          <KnowledgeBase />
          <SupportTicketForm />
          <SupportHours />
          <EscalationSection />
        </div>
      </div>
    </div>
  );
}