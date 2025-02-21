import React from 'react';
import { Award, Users, Clock, Lightbulb } from 'lucide-react';

const stats = [
  { 
    value: '1500+', 
    label: 'Campaigns',
    description: 'Reaching new audiences'
  },
  { 
    value: '50M+', 
    label: 'Reach',
    description: 'Across all platforms'
  },
  { 
    value: '24/7', 
    label: 'Support',
    description: 'Always here to help'
  },
  { 
     
    value: 'X10', 
    label: 'Engagement',
    description: 'Improved results'
  }
];

export default function About() {
  return (
    <section id="about" className="py-10 bg-transparent sm:py-16 lg:py-24">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 mt-1 text-center lg:mt-4 sm:gap-x-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index}>
              <h3 className="font-bold text-6xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                  {stat.value}
                </span>
              </h3>
              <p className="mt-4 text-xl font-medium text-white dark:text-black">{stat.label}</p>
              <p className="text-base mt-0.5 text-gray-500">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}