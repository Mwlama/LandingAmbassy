"use client";

import Link from "next/link";
import React from "react";

const AboutUsPage = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section with Video Background */}
      <section className="relative py-20 h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/Aboutus.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay to darken the video */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            About Ambassy
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            We are a global leader in Ambassador marketing, empowering brands to connect with their audiences through authentic and impactful partnerships.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Mission
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8">
              At Ambassy, our mission is to revolutionize the way brands and creators collaborate. We believe in the power of authentic storytelling to drive meaningful connections and measurable results.
            </p>
            <Link
              href="/our-mission"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-fuchsia-600 to-blue-600 text-white font-medium rounded-full hover:from-blue-600 hover:to-fuchsia-600 transition-all duration-300"
            >
              Learn More
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

      {/* Team Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Meet Our Team
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8">
              Our team is made up of passionate individuals who are experts in marketing, technology, and creativity. Together, we’re dedicated to helping brands and creators thrive in the digital age.
            </p>
            <Link
              href="/our-team"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-fuchsia-600 to-blue-600 text-white font-medium rounded-full hover:from-blue-600 hover:to-fuchsia-600 transition-all duration-300"
            >
              Meet the Team
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

      {/* Impact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Impact
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8">
              Since our founding, we’ve helped thousands of brands and creators achieve their goals. From startups to Fortune 500 companies, we’re proud to be a trusted partner in the ambassador marketing industry.
            </p>
            <Link
              href="/our-impact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-fuchsia-600 to-blue-600 text-white font-medium rounded-full hover:from-blue-600 hover:to-fuchsia-600 transition-all duration-300"
            >
              See Our Impact
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

      {/* CTA Section */}
      <section className="py-20 bg-black dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white dark:text-gray-100 mb-6">
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Join the thousands of brands and creators who trust Ambassy to deliver authentic and impactful partnerships.
          </p>
          <Link
            href="/get-started"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-fuchsia-600 to-blue-600 text-white font-medium rounded-full hover:from-blue-600 hover:to-fuchsia-600 transition-all duration-300"
          >
            Get Started
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
      </section>
    </div>
  );
};

export default AboutUsPage;