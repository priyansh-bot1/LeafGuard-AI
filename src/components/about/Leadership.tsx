import React from 'react';
import { Award, Target, Users } from 'lucide-react';
import SocialLinks from './SocialLinks';

const achievements = [
  {
    icon: <Award className="w-5 h-5 text-emerald-400" />,
    text: 'Forbes 30 Under 30 in Agriculture Technology'
  },
  {
    icon: <Target className="w-5 h-5 text-emerald-400" />,
    text: 'Pioneer in AI-Driven Agriculture Solutions'
  },
  {
    icon: <Users className="w-5 h-5 text-emerald-400" />,
    text: 'Leader of a 100+ Strong Global Team'
  }
];

export default function Leadership() {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="bg-emerald-900/30 rounded-xl p-12 backdrop-blur-sm border border-emerald-800/20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://raw.githubusercontent.com/ALGOREX-PH/LeafGuard-AI/refs/heads/main/src/images/462359443_538218162149662_3966092412338603545_n.jpg" 
              alt="CEO Portrait"
              className="rounded-lg shadow-2xl border-2 border-emerald-500/20 w-full"
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
              Danielle founded LeafGuard AI with a mission to revolutionize how we protect and nurture our orchards.
            </p>
            <div className="space-y-4 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3 text-emerald-100/70">
                  {achievement.icon}
                  <span>{achievement.text}</span>
                </div>
              ))}
            </div>
            <blockquote className="border-l-4 border-emerald-500 pl-4 italic text-emerald-100/90 mb-6">
              "Our vision is to empower every orchard owner with AI technology that makes sustainable 
              farming not just possible, but profitable. We're not just protecting trees; we're 
              securing our agricultural future."
            </blockquote>
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
}