"use client";

import React, { useState } from "react";
import AnimationContainer from "./global/animation-container";
import GridGlobe from "./ui/GridGlobe";
import { Search } from "lucide-react";
import Image from "next/image";

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
    <section className="relative h-[calc(100vh-4rem)] w-full">
      <div className="container h-full">
        <div className="grid lg:grid-cols-2 gap-8 h-full pt-4"> {/* Reduced pt-8 to pt-4 */}
          {/* Left Column - Text Content */}
          <AnimationContainer className="z-10 flex flex-col justify-start lg:justify-center pt-4">
            <div className="max-w-xl">
              <h1 className="text-left text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-neutral-800 to-neutral-400 mb-4"> {/* Reduced mb-6 to mb-4 */}
                Your unstoppable Army of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-500 to-violet-500">
                  Ambassadors
                </span>
              </h1>

              <p className="text-left text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-neutral-600 via-white to-neutral-600 mb-6"> {/* Reduced mb-8 to mb-6 */}
                Connect with the Right Creators & Their Followers.
                Targeted by Niche & Location for Maximum Impact!
              </p>

              {/* Search Bar */}
              <div className="relative">
                <div className="relative flex items-center bg-black/80 backdrop-blur-sm rounded-full shadow-lg border border-white/10">
                  <div className="flex-1 flex items-center">
                    <Search className="w-5 h-5 text-white/50 ml-6" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search by product, niche, or location..."
                      className="w-full px-4 py-4 bg-transparent text-white placeholder-white/50 focus:outline-none text-lg"
                    />
                  </div>
                  <button
                    onClick={handleSearch}
                    disabled={isLoading || !searchQuery.trim()}
                    className="px-8 py-4 rounded-full text-white font-medium transition-all duration-300 mr-2 
                      bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600
                      disabled:opacity-50 disabled:cursor-not-allowed"
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
            </div>
          </AnimationContainer>
          
          {/* Right Column - Globe Animation and Stats */}
          <div className="relative h-full">
            {/* Globe Animation */}
            <div className="absolute inset-0 z-0">
              <MemoizedGridGlobe />
            </div>
          
            {/* Stats Section overlaid on Globe */}
            {showStats && (
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-full max-w-2xl p-6 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-black/80 rounded-xl p-4 backdrop-blur-sm border border-white/10 transform hover:scale-105 transition-transform">
                      <Image
                        src="/ambassador1.jpg"
                        alt="Ambassadors"
                        width={200}
                        height={150}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <p className="text-center mt-2 text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-500 to-violet500">
                        5,345 Ambassadors
                      </p>
                    </div>
                    <div className="bg-black/80 rounded-xl p=4 backdrop-blur-sm border border-white/10 transform hover:scale105 transition-transform">
                      <Image
                        src="/ambassador3.jpg"
                        alt="Reach Potential"
                        width={200}
                        height={150}
                        className="w-full h32 object-cover rounded-lg"
                      />
                      <p className="text-center mt2 text-lg font-bold text-transparent bg-clipp-text bg-gradient-to-r from-violet400 via-fuchsia500 to-violet500">
                        3M+ Global Reach
                      </p>
                    </div>
                    <div className="bg-black/80 rounded-xl p=4 backdrop-blur-sm border border-white/10 transform hover:scale105 transition-transform">
                      <Image
                        src="/ambassador2.jpg"
                        alt="Brands Promoted"
                        width={200}
                        height={150}
                        className="w-full h32 object-cover rounded-lg"
                      />
                      <p className="text-center mt2 text-lg font-bold text-transparent bg-clipp-text bg-gradient-to-r from-violet400 via-fuchsia500 to-violet500">
                        1,000+ Brands
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
