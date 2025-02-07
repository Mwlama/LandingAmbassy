"use clients";

import React from 'react';
import { Award, Users, Clock, Lightbulb } from 'lucide-react';
import { BackgroundGradientAnimation } from '../components/ui/BackgroundGradientAnimation';

const stats = [
  { icon: <Users />, value: '1500+', label: 'Campaigns' },
  { icon: <Award />, value: '50M+', label: 'Reach' },
  { icon: <Clock />, value: '24/7', label: 'Support' },
  { icon: <Lightbulb />, value: 'X10', label: 'Engagement' }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-transparent dark:bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="relative p-6 rounded-lg shadow-md text-center overflow-hidden">
              <BackgroundGradientAnimation />
            <div >
              <div className="relative z-10 text-black dark:text-white flex justify-center mb-2">
                {stat.icon}
              </div>
              <div className="relative z-10 text-2xl font-bold text-black dark:text-white">
                {stat.value}
              </div>
              <div className="relative z-10 text-black dark:text-white">
                {stat.label}
              </div>
              </div>
              

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}