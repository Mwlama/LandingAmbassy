"use client";

import Link from "next/link";
import React from "react";

const InternalLinksSection = () => {
  return (
    <section className="py-12 bg-black dark:bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-4xl sm:text-5xl font-bold text-white dark:text-gray-900 mb-6">
            Our Team
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-300 dark:text-gray-600 mb-8">
            Meet the powerhouse of Influencer: a dynamic team of dreamers, makers, and game changers, reshaping the future of marketing. With a collective passion and unique expertise, our people turn data into action, creativity into impact, and new ideas into new realities.
          </p>

          {/* About Us Button */}
          <Link
            href="/about-us"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-fuchsia-600 to-blue-600 text-white font-medium rounded-full hover:from-blue-600 hover:to-fuchsia-600 transition-all duration-300"
          >
            About Us
            <svg
              className="w-5 h-5 ml-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InternalLinksSection;