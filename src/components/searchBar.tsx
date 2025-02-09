"use client";

import React, { useState } from "react";
import AnimationContainer from "./global/animation-container";
import GridGlobe from "./ui/GridGlobe";
import Image from "next/image";
import { Search } from "lucide-react";

const MemoizedGridGlobe = React.memo(GridGlobe);

const HeroSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (!searchQuery.trim()) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowStats(true);
    }, 2000);
  };

  return (
    <div className="relative h-[75vh] max-h-[1000px] flex items-center justify-center w-full overflow-hidden rounded-3xl my-0">
      <div className="absolute inset-0 w-full h-full">
        <MemoizedGridGlobe />
      </div>
      <div className="absolute inset-0 bg-transparent bg-opacity-60 rounded-3xl"></div>

      <AnimationContainer className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neutral-700 via-white to-neutral-700 mb-6">
          Your unstoppable Army of{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-500 to-violet-500">
            Ambassadors
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-neutral-600 via-white to-neutral-600 mb-8 max-w-3xl mx-auto">
          Connect with the Right Creators & Their Followers.
          <br className="hidden md:block" />
          Targeted by Niche & Location for Maximum Impact!
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <div className="relative flex items-center bg-black/80 rounded-full shadow-lg border border-white/10">
              <div className="flex-1 flex items-center">
                <Search className="w-5 h-5 text-white/50 ml-6" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by product, niche, or location..."
                  className="w-full px-4 py-4 bg-transparent text-white placeholder-white/50 focus:outline-none text-lg"
                  disabled={isLoading || showStats}
                />
              </div>
              <button
                onClick={handleSearch}
                disabled={isLoading || !searchQuery.trim()}
                className={`px-8 py-4 rounded-full text-white font-medium transition-all duration-300 mr-2 
                  bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600
                  ${isLoading || !searchQuery.trim() ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Searching...</span>
                  </div>
                ) : (
                  "Try For Free"
                )}
              </button>
            </div>
          </div>

          

          {/* Stats Section */}
          {showStats && (
            <div className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-black/80 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                  <Image
                    src="/ambassador1.jpg"
                    alt="Ambassadors"
                    width={200}
                    height={150}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
                <div className="bg-black/80 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                  <Image
                    src="/ambassador3.jpg"
                    alt="Reach Potential"
                    width={200}
                    height={150}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
                <div className="bg-black/80 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                  <Image
                    src="/ambassador2.jpg"
                    alt="Brands Promoted"
                    width={200}
                    height={150}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Stats Text Below Images */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-500 to-violet-500">
                <p className="text-lg font-bold">5,345 Ambassadors Available</p>
                <p className="text-lg font-bold">Reach Over 3M People</p>
                <p className="text-lg font-bold">Promote 1,000+ Brands</p>
              </div>
            </div>
          )}
        </div>
        {/* Get Started Button */}
        <div className="mt-6">
            <button className="bg-gradient-to-r from-fuchsia-600 to-violet-600 hover:from-fuchsia-700 hover:to-violet-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-colors duration-300">
              Get Started
            </button>
          </div>
      </AnimationContainer>
    </div>
  );
};

export default HeroSection;
