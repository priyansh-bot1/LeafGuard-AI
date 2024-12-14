import React from 'react';
import { Award, Leaf, Target, Users } from 'lucide-react';

export default function AboutUs() {
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
            Revolutionizing Orchard Management
          </h1>
          <p className="text-xl text-emerald-100/80 mb-8 max-w-3xl">
            At LeafGuard AI, we're transforming agriculture through cutting-edge artificial intelligence 
            and a deep commitment to sustainable farming practices.
          </p>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="bg-emerald-900/30 rounded-xl p-12 backdrop-blur-sm border border-emerald-800/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574" 
                alt="CEO Portrait"
                className="rounded-lg shadow-2xl border-2 border-emerald-500/20"
              />
            </div>
            <div>
              <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
                Founder & CEO
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Danielle Bagaforo Meer
              </h2>
              <p className="text-emerald-100/80 mb-6 text-lg leading-relaxed">
                A visionary leader in agricultural technology, Danielle has pioneered the integration of AI 
                in orchard management. With over 15 years of experience in both technology and agriculture, 
                she founded LeafGuard AI with a mission to revolutionize how we protect and nurture our orchards.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-emerald-100/70">
                  <Award className="w-5 h-5 text-emerald-400" />
                  <span>Forbes 30 Under 30 in Agriculture Technology</span>
                </div>
                <div className="flex items-center gap-3 text-emerald-100/70">
                  <Target className="w-5 h-5 text-emerald-400" />
                  <span>Pioneer in AI-Driven Agriculture Solutions</span>
                </div>
                <div className="flex items-center gap-3 text-emerald-100/70">
                  <Users className="w-5 h-5 text-emerald-400" />
                  <span>Leader of a 100+ Strong Global Team</span>
                </div>
              </div>
              <blockquote className="border-l-4 border-emerald-500 pl-4 italic text-emerald-100/90">
                "Our vision is to empower every orchard owner with AI technology that makes sustainable 
                farming not just possible, but profitable. We're not just protecting trees; we're 
                securing our agricultural future."
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      {/* Company Stats */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-emerald-900/30 p-8 rounded-xl backdrop-blur-sm border border-emerald-800/20">
            <div className="text-4xl font-bold text-emerald-400 mb-2">15K+</div>
            <div className="text-emerald-100/80">Orchards Protected</div>
          </div>
          <div className="bg-emerald-900/30 p-8 rounded-xl backdrop-blur-sm border border-emerald-800/20">
            <div className="text-4xl font-bold text-emerald-400 mb-2">95%</div>
            <div className="text-emerald-100/80">Detection Accuracy</div>
          </div>
          <div className="bg-emerald-900/30 p-8 rounded-xl backdrop-blur-sm border border-emerald-800/20">
            <div className="text-4xl font-bold text-emerald-400 mb-2">30%</div>
            <div className="text-emerald-100/80">Yield Improvement</div>
          </div>
          <div className="bg-emerald-900/30 p-8 rounded-xl backdrop-blur-sm border border-emerald-800/20">
            <div className="text-4xl font-bold text-emerald-400 mb-2">24/7</div>
            <div className="text-emerald-100/80">Monitoring</div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="container mx-auto px-6 pb-20">
        <div className="bg-gradient-to-r from-emerald-900/40 to-emerald-800/40 rounded-2xl p-12 text-center backdrop-blur-sm border border-emerald-700/20">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 mb-6">
            <Leaf className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-6">
            Our Mission
          </h2>
          <p className="text-emerald-100/80 mb-8 max-w-3xl mx-auto text-lg">
            To revolutionize orchard management through AI-driven solutions that enhance crop health, 
            maximize yields, and promote sustainable farming practices. We believe in empowering farmers 
            with technology that makes precision agriculture accessible and effective.
          </p>
          <button className="px-8 py-3 bg-emerald-500 hover:bg-emerald-400 text-white rounded-md transition-all">
            Join Our Mission
          </button>
        </div>
      </div>
    </div>
  );
}