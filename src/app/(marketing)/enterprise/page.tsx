"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Zap, TrendingUp, Users, Globe, DollarSign, Award, Rocket } from 'lucide-react';

interface BenefitCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon: Icon, title, description }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6 rounded-xl shadow-lg backdrop-blur-sm"
  >
    <Icon className="w-12 h-12 mb-4 text-purple-500" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </motion.div>
);

const BenefitsPage: React.FC = () => {
  const proBenefits = [
    {
      icon: Users,
      title: "Army of Promoters",
      description: "Access a vast network of Ambassadors to promote your brand to millions for a fraction of traditional costs.",
    },
    {
      icon: Globe,
      title: "Exponential Reach",
      description: "Potentially reach millions of viewers and grow your audience rapidly through our Ambassador network.",
    },
    {
      icon: DollarSign,
      title: "Cost-Effective Marketing",
      description: "Achieve widespread brand exposure for just a few dollars compared to expensive traditional campaigns.",
    },
    {
      icon: Zap,
      title: "AI-Powered Tools",
      description: "Utilize cutting-edge AI tools for content creation and optimization to enhance your marketing efforts.",
    },
  ];

  const ambassadorBenefits = [
    {
      icon: TrendingUp,
      title: "Massive Community Growth",
      description: "Rapidly expand your follower base and online presence by promoting popular brands and products.",
    },
    {
      icon: Rocket,
      title: "Viral Content Potential",
      description: "Create content that could reach millions of views, boosting your profile and influence.",
    },
    {
      icon: Award,
      title: "Monetization Opportunities",
      description: "Earn income by promoting brands to your growing audience and leveraging your influence.",
    },
    {
      icon: Star,
      title: "Networking Opportunities",
      description: "Connect with other successful Ambassadors and Pro users to learn and grow together.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 bg-gradient-to-b from-background to-background/50">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-6xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 bg-clip-text text-white dark:text-black">
          Unlock Your Potential
        </h1>
        <p className="text-lg md:text-xl text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Discover the amazing benefits our app offers to both Pro users and Ambassadors.
        </p>
        
        <h2 className="text-3xl font-semibold text-center mb-8">Pro User Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {proBenefits.map((benefit, index) => (
            <BenefitCard key={`pro-${index}`} {...benefit} />
          ))}
        </div>

        <h2 className="text-3xl font-semibold text-center mb-8">Ambassador Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {ambassadorBenefits.map((benefit, index) => (
            <BenefitCard key={`ambassador-${index}`} {...benefit} />
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-purple-600 text-text-transparent bg-gradient-to-r from-fuchsia-600 to-blue-600 px-8 py-4 rounded-full font-semibold text-lg cursor-pointer"
          >
            Become a Pro
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-pink-600 text-text-transparent bg-gradient-to-r from-blue-600 to-fuchsia-600 px-8 py-4 rounded-full font-semibold text-lg cursor-pointer"
          >
            Ambassador
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default BenefitsPage;
