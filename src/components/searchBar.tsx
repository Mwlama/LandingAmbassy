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
    <section className={`relative w-full ${showStats ? 'h-auto min-h-[calc(100vh-4rem)]' : 'h-[calc(100vh-4rem)]'}`}>
      <div className="container h-full">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 h-full">
          {/* Left Column - Text Content and Search Bar */}
          <AnimationContainer className="z-20 flex flex-col justify-start lg:justify-center">
            <div className="max-w-xl">
              <h1 className="text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white dark:text-black mb-4">
                One Price, Unlimited Influencers,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                  Maximum Impact
                </span>
              </h1>

              <p className="text-left text-lg md:text-xl lg:text-2xl text-white dark:text-black mb-6">
                Find the Right Ambassadors, Reach Their Communities, and Grow Your Brand All for a Simple Monthly Fee.
              </p>

              {/* Search Bar */}
              <div className="relative">
                <div className="relative flex items-center bg-black/80 backdrop-blur-sm rounded-full shadow-lg border border-white/10">
                  <div className="flex-1 flex items-center">
                    <Search className="w-5 h-5 text-white/50 ml-4 sm:ml-6" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search by product, niche, or location..."
                      className="w-full px-4 py-3 sm:py-4 bg-transparent text-white placeholder-white/50 focus:outline-none text-base sm:text-lg"
                    />
                  </div>
                  <button
                    onClick={handleSearch}
                    disabled={isLoading || !searchQuery.trim()}
                    className="px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white font-medium transition-all duration-300 mr-2
                      bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:from-blue-600 hover:to-fuchsia-600
                      disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span className="hidden sm:inline">Searching...</span>
                      </div>
                    ) : (
                      <>
                        <span className="hidden sm:inline">Try For Free</span>
                        <span className="inline sm:hidden">Try</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Stats Section for Mobile */}
              {showStats && (
                <div className="lg:hidden mt-6">
                  <div className="w-full p-4 sm:p-6 space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* 3 Results for Mobile */}
                      <div className="bg-black/80 rounded-xl backdrop-blur-sm border border-white/10 transform transition-transform">
                        <Image
                          src="/ambassador1.jpg"
                          alt="Ambassadors"
                          width={200}
                          height={200}
                          className="w-full h-24 sm:h-32 object-cover rounded-lg"
                        />
                        <p className="text-center mt-2 text-base sm:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                          Rabat, Morocco
                        </p>
                      </div>
                      <div className="bg-black/80 rounded-xl backdrop-blur-sm border border-white/10 transform transition-transform">
                        <Image
                          src="/ambassador3.jpg"
                          alt="Reach Potential"
                          width={200}
                          height={200}
                          className="w-full h-24 sm:h-32 object-cover rounded-lg"
                        />
                        <p className="text-center mt-2 text-base sm:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                          New York, USA
                        </p>
                      </div>
                      <div className="bg-black/80 rounded-xl backdrop-blur-sm border border-white/10 transform transition-transform">
                        <Image
                          src="/ambassador2.jpg"
                          alt="Brands Promoted"
                          width={200}
                          height={200}
                          className="w-full h-24 sm:h-32 object-cover rounded-lg"
                        />
                        <p className="text-center mt-2 text-base sm:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                          Berlin, Germany
                        </p>
                      </div>
                    </div>
                    <div className="relative mt-4">
                      <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
                        <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                          +3k Ambassadors available
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </AnimationContainer>

          {/* Right Column - Globe Animation and Stats (Desktop) */}
          <div className="relative h-full w-full">
            {/* Globe Animation */}
            <div className={`absolute inset-0 z-0 w-full h-full transition-all duration-500 ${showStats ? 'scale-75' : 'scale-100'}`}>
              <MemoizedGridGlobe />
            </div>

            {/* Stats Section for Desktop */}
            {showStats && (
              <div className="hidden lg:flex absolute inset-0 items-center justify-center z-10 h-full">
                <div className="w-full max-w-2xl p-4 sm:p-6 space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4">
                    {/* 6 Results for Desktop */}
                    <div className="bg-black/80 rounded-xl backdrop-blur-sm border border-white/10 transform transition-transform">
                      <Image
                        src="/ambassador1.jpg"
                        alt="Ambassadors"
                        width={200}
                        height={200}
                        className="w-full h-24 sm:h-32 object-cover rounded-lg"
                      />
                      <p className="text-center mt-2 text-base sm:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                        Rabat, Morocco
                      </p>
                    </div>
                    <div className="bg-black/80 rounded-xl backdrop-blur-sm border border-white/10 transform transition-transform">
                      <Image
                        src="/ambassador3.jpg"
                        alt="Reach Potential"
                        width={200}
                        height={200}
                        className="w-full h-24 sm:h-32 object-cover rounded-lg"
                      />
                      <p className="text-center mt-2 text-base sm:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                        New York, USA
                      </p>
                    </div>
                    <div className="bg-black/80 rounded-xl backdrop-blur-sm border border-white/10 transform transition-transform">
                      <Image
                        src="/ambassador2.jpg"
                        alt="Brands Promoted"
                        width={200}
                        height={200}
                        className="w-full h-24 sm:h-32 object-cover rounded-lg"
                      />
                      <p className="text-center mt-2 text-base sm:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                        Berlin, Germany
                      </p>
                    </div>
                    <div className="bg-black/80 rounded-xl backdrop-blur-sm border border-white/10 transform transition-transform">
                      <Image
                        src="/ambassador1.jpg"
                        alt="Ambassadors"
                        width={200}
                        height={200}
                        className="w-full h-24 sm:h-32 object-cover rounded-lg"
                      />
                      <p className="text-center mt-2 text-base sm:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                        Paris, France
                      </p>
                    </div>
                    <div className="bg-black/80 rounded-xl backdrop-blur-sm border border-white/10 transform transition-transform">
                      <Image
                        src="/ambassador3.jpg"
                        alt="Reach Potential"
                        width={200}
                        height={200}
                        className="w-full h-24 sm:h-32 object-cover rounded-lg"
                      />
                      <p className="text-center mt-2 text-base sm:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                        Dubai, UAE
                      </p>
                    </div>
                    <div className="bg-black/80 rounded-xl backdrop-blur-sm border border-white/10 transform transition-transform">
                      <Image
                        src="/ambassador2.jpg"
                        alt="Brands Promoted"
                        width={200}
                        height={200}
                        className="w-full h-24 sm:h-32 object-cover rounded-lg"
                      />
                      <p className="text-center mt-2 text-base sm:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                        London, UK
                      </p>
                    </div>
                  </div>
                  <div className="relative mt-4">
                    <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
                      <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                        +3k Ambassadors available
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