import React from 'react';
import Hero from '../components/about/Hero';
import Leadership from '../components/about/Leadership';
import Stats from '../components/about/Stats';
import Mission from '../components/about/Mission';

export default function AboutUs() {
  return (
    <div className="pt-20 min-h-screen bg-[#003025]">
      <Hero />
      <Leadership />
      <Stats />
      <Mission />
    </div>
  );
}