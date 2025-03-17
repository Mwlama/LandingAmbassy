"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from 'next/dynamic';
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { LampContainer } from "@/components/ui/lamp";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import MagicBadge from "@/components/ui/magic-badge";
import { Vortex } from "@/components/ui/vortex";

// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false
});



// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Company stats
const companyStats = [
  { value: 500, suffix: "+", title: "Global Brands" },
  { value: 10000, suffix: "+", title: "Creator Partnerships" },
  { value: 25, suffix: "M+", title: "Audience Reach" },
  { value: 95, suffix: "%", title: "Partner Satisfaction" },
];

// Core values
const coreValues = [
  {
    title: "Authenticity",
    description: "We believe in genuine connections that resonate with audiences.",
    icon: "✦"
  },
  {
    title: "Innovation",
    description: "We constantly push boundaries to deliver cutting-edge solutions.",
    icon: "◈"
  },
  {
    title: "Collaboration",
    description: "We foster partnerships based on mutual growth and respect.",
    icon: "⬡"
  },
  {
    title: "Excellence",
    description: "We strive for exceptional quality in everything we do.",
    icon: "⬢"
  },
];

// Timeline milestones
const timeline = [
  { year: "2023", title: "Founded", description: "Ambassy was born with a vision to transform influencer marketing." },
  { year: "2024", title: "Global Expansion", description: "Expanded operations worldwide." },
  { year: "2025", title: "Platform Launch", description: "Released our proprietary partnership management platform." },
  { year: "2027", title: "Industry Innovation", description: "We're planning to tokenize the creator economy, empowering influencers to monetize their digital presence." },
];

const AboutUsPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // Loading state for animations
  const [animationsLoaded, setAnimationsLoaded] = useState(false);
  const [missionAnim, setMissionAnim] = useState<any>(null);
  const [teamAnim, setTeamAnim] = useState<any>(null);
  const [impactAnim, setImpactAnim] = useState<any>(null);

  useEffect(() => {
    // Load animations only on the client side
    const loadAnimations = async () => {
      try {
        const missionAnimation = await import("@/components/lottie/anim5.json");
        const teamAnimation = await import("@/components/lottie/anim1.json");
        const impactAnimation = await import("@/components/lottie/anim4.json");
        
        setMissionAnim(missionAnimation.default || missionAnimation);
        setTeamAnim(teamAnimation.default || teamAnimation);
        setImpactAnim(impactAnimation.default || impactAnimation);
        setAnimationsLoaded(true);
      } catch (error) {
        console.error("Failed to load animations:", error);
      }
    };
    
    loadAnimations();
  }, []);

  return (
    <div className="bg-black text-white">

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-24 bg-gradient-to-br from-fuchsia-900/20 to-blue-900/20 relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <Vortex className="w-full h-full" />
          {/* Ensure the Vortex component fills the entire background */}
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold mb-6"
            >
              About Ambassy
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-300 mb-8"
            >
              Transforming brand-creator relationships through innovation and authentic storytelling.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/get-started"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium rounded-full hover:bg-white/20 transition-all duration-300"
              >
                Get Started
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>


      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-black via-fuchsia-900 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4"
          >
            {companyStats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 text-center"
              >
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-blue-400">
                  {inView ? (
                    <CountUp end={stat.value} suffix={stat.suffix} duration={2.5} separator="," />
                  ) : (
                    "0"
                  )}
                </h3>
                <p className="text-gray-400 mt-2">{stat.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section with enhanced visuals */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-24 bg-black"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div variants={fadeInLeft} className="flex-1">
              {animationsLoaded && missionAnim && (
                <Lottie animationData={missionAnim} className="max-w-md mx-auto md:mx-0" />
              )}
            </motion.div>
            <motion.div variants={fadeInRight} className="flex-1">
              <div className="max-w-xl">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 relative">
                  <span className="absolute -left-6 text-fuchsia-500 opacity-70">|</span>
                  Our Mission
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  At Ambassy, our mission is to revolutionize the way brands and creators collaborate. We believe in the power of authentic storytelling to drive meaningful connections and measurable results.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-fuchsia-600 to-blue-600 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Data-Driven Approach</h3>
                      <p className="text-gray-400">We leverage analytics to optimize partnerships and deliver exceptional ROI.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-fuchsia-600 to-blue-600 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Impactful Storytelling</h3>
                      <p className="text-gray-400">We help brands craft narratives that resonate and drive genuine engagement.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Core Values Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Our Core Values
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-300">
              The principles that guide everything we do at Ambassy
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-8 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:bg-gray-800/70 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 text-fuchsia-500 group-hover:text-blue-600 transition-colors duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section with improved layout */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-24 bg-black"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <motion.div variants={fadeInLeft} className="flex-1">
              {animationsLoaded && teamAnim && (
                <Lottie animationData={teamAnim} className="max-w-md mx-auto md:mx-0" />
              )}
            </motion.div>
            <motion.div variants={fadeInRight} className="flex-1">
              <div className="max-w-xl">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 relative">
                  <span className="absolute -left-6 text-blue-600 opacity-70">|</span>
                  Our Team
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Our team is made up of passionate individuals who are experts in marketing, technology, and creativity. Together, we&apos;re dedicated to helping brands and creators thrive in the digital age.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-4 bg-gray-800/30 rounded-xl border border-gray-700/30">
                    <p className="text-3xl font-bold text-blue-600 mb-1">35+</p>
                    <p className="text-gray-400">Team Members</p>
                  </div>
                  <div className="p-4 bg-gray-800/30 rounded-xl border border-gray-700/30">
                    <p className="text-3xl font-bold text-fuchsia-600 mb-1">12+</p>
                    <p className="text-gray-400">Countries</p>
                  </div>
                  <div className="p-4 bg-gray-800/30 rounded-xl border border-gray-700/30">
                    <p className="text-3xl font-bold text-blue-600 mb-1">8+</p>
                    <p className="text-gray-400">Languages</p>
                  </div>
                  <div className="p-4 bg-gray-800/30 rounded-xl border border-gray-700/30">
                    <p className="text-3xl font-bold text-fuchsia-600 mb-1">15+</p>
                    <p className="text-gray-400">Industries</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Timeline Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Our Journey</h2>
            <p className="text-xl text-gray-300">Milestones that shaped who we are today</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="flex gap-8 mb-12 relative"
              >
                <div className="w-24 md:w-32 flex-shrink-0 text-right">
                  <span className="text-2xl font-bold text-fuchsia-500">{item.year}</span>
                </div>
                <div className="relative">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-fuchsia-500 to-blue-500 absolute -left-10 top-3 z-10"></div>
                  {index !== timeline.length - 1 && (
                    <div className="w-0.5 bg-gray-700 absolute -left-8 top-6 h-full z-0"></div>
                  )}
                  <div className="pt-1">
                    <h3 className="text-xl md:text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section with data visualization */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-24 bg-black"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div variants={fadeInLeft} className="flex-1">
              {animationsLoaded && impactAnim && (
                <Lottie animationData={impactAnim} className="max-w-md mx-auto md:mx-0" />
              )}
            </motion.div>
            <motion.div variants={fadeInRight} className="flex-1">
              <div className="max-w-xl">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 relative">
                  <span className="absolute -left-6 text-fuchsia-500 opacity-70">|</span>
                  Our Impact
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  We&apos;re revolutionizing digital marketing by connecting brands and creators worldwide. For E-commerce Pros, we&apos;ve empowered thousands of businesses to skyrocket their online presence and sales, delivering exceptional ROI. For Ambassadors, we&apos;ve launched careers and helped passionate individuals build thriving personal brands, reaching millions of engaged followers. Together, we&apos;re shaping the future of digital marketing, transforming the way brands and creators collaborate to achieve unprecedented growth and engagement.
                </p>
                <div className="space-y-6 mb-8">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Revenue Growth</span>
                      <span className="text-fuchsia-400">+185%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "85%" }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-fuchsia-600 to-blue-600 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Engagement Rate</span>
                      <span className="text-blue-400">+210%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "92%" }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="h-full bg-gradient-to-r from-blue-600 to-fuchsia-600 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Conversion Rate</span>
                      <span className="text-fuchsia-400">+140%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "75%" }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="h-full bg-gradient-to-r from-fuchsia-600 to-blue-600 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Partner Logos Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-semibold mb-2">Trusted By Industry Leaders</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-fuchsia-500 to-blue-500 mx-auto"></div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8"
          >
            {[...Array(6)].map((_, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="h-16 flex items-center justify-center bg-gray-800/30 rounded-lg border border-gray-700/30"
              >
                <div className="text-gray-400 font-medium">PARTNER LOGO</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-24 bg-gradient-to-br from-fuchsia-900/20 to-blue-900/20 relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold mb-6"
            >
              Ready to Elevate Your Brand?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-300 mb-8"
            >
              Join the thousands of brands and creators who trust Ambassy to deliver authentic and impactful partnerships.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/get-started"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium rounded-full hover:bg-white/20 transition-all duration-300"
              >
                Get Started
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutUsPage;