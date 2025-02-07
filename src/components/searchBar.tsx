import React from 'react';
import { HiSearch } from 'react-icons/hi';
import AnimationContainer from './global/animation-container';
import GridGlobe from './ui/GridGlobe';

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-[75vh] max-h-[1000px] flex items-center justify-center w-full overflow-hidden rounded-3xl my-0">
      <GridGlobe />
      <div className="absolute inset-0 bg-transparent bg-opacity-60 rounded-3xl"></div>
      
      <AnimationContainer className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white dark:text-transparent bg-clip-text bg-gradient-to-r from-neutral-600 via-white to-neutral-600 mb-6">
        Your unstoppable Army of<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-500 to-violet-500"> Ambassadors</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white dark:text-transparent bg-clip-text bg-gradient-to-r from-neutral-600 via-white to-neutral-600 mb-8 max-w-3xl mx-auto">
          Connect with the Right Creators & Their Followers. 
          <br className="hidden md:block" />
          Targeted by Niche & Location for Maximum Impact!
        </p>
        
        <div className="relative max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Product, Niche or location"
            className="w-full px-6 py-4 rounded-full text-white bg-black bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-violet-500 text-lg"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white p-3 rounded-full hover:from-violet-600 hover:to-fuchsia-600 transition duration-300">
            Try for Free
            {/* <HiSearch className="h-6 w-6" /> */}
          </button>
        </div>
        
        <div className="mt-8">
          <button className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full overflow-hidden transition-all duration-300 ease-out hover:scale-105">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-violet-600 to-fuchsia-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></span>
            <span className="relative">Get Started</span>
          </button>
        </div>
      </AnimationContainer>
    </div>
  );
};

export default HeroSection;
