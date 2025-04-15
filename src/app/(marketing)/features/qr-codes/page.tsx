"use client"

import { useState } from 'react';
import Image from 'next/image';

// Define TypeScript interfaces
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
  author?: {
    name: string;
    role: string;
    avatarUrl: string;
  };
}

const CryptoComingSoonPage = () => {
  // Blog posts data
  const featuredPosts: BlogPost[] = [
    {
      id: 1,
      title: "Unlock the Creator Economy's Future: Gen Z, Social Commerce, AI",
      excerpt: "Welcome to our tech blog! Right now, this is just a placeholder filled with potential topics on web development, CMS...",
      date: "March 31, 2025",
      readTime: "4 MIN READ",
      category: "GUIDE",
      imageUrl: "/blog/Article1.jpg"
    },
    {
      id: 2,
      title: "Get started with NovaJAM",
      excerpt: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The...",
      date: "March 28, 2025",
      readTime: "4 MIN READ",
      category: "GUIDE",
      imageUrl: "/api/placeholder/400/240"
    },
    {
      id: 3,
      title: "Grid system for better Design User Interface",
      excerpt: "The articles in this blog are conceptual placeholders meant to showcase potential topics related to web...",
      date: "March 28, 2025",
      readTime: "7 MIN READ",
      category: "NEWS",
      imageUrl: "/api/placeholder/400/240"
    },
    {
      id: 4,
      title: "How Headless CMS is Changing the Way We Build Websites",
      excerpt: "Welcome to our tech blog! Right now, this is just a placeholder filled with potential topics on web development, CMS...",
      date: "March 30, 2025",
      readTime: "4 MIN READ",
      category: "NEWS",
      imageUrl: "/api/placeholder/400/240"
    },
  ];

  const allArticles: BlogPost[] = [
    {
      id: 5,
      title: "Is Web3 the Future? Understanding Blockchain and Decentralized Apps",
      excerpt: "",
      date: "March 31, 2025",
      readTime: "4 MIN READ",
      category: "TECHNOLOGY",
      imageUrl: "/api/placeholder/400/240"
    },
    {
      id: 6,
      title: "The Blueprint for Launching Your Business Successfully",
      excerpt: "",
      date: "March 31, 2025",
      readTime: "4 MIN READ",
      category: "TECHNOLOGY",
      imageUrl: "/api/placeholder/400/240"
    },
    {
      id: 7,
      title: "How AI is Changing the Way We Build Websites",
      excerpt: "",
      date: "March 31, 2025",
      readTime: "4 MIN READ",
      category: "NEWS",
      imageUrl: "/api/placeholder/400/240"
    },
    {
      id: 8,
      title: "Edge Computing vs. Cloud Computing: What's the Difference?",
      excerpt: "",
      date: "March 31, 2025",
      readTime: "4 MIN READ",
      category: "NEWS",
      imageUrl: "/api/placeholder/400/240"
    },
  ];

  // Hero post data
  const heroPost: BlogPost = {
    id: 9,
    title: "Unlock the Creator Economy's Future: Gen Z, Social Commerce, AI",
    excerpt: "",
    date: "March 28, 2025",
    readTime: "7 MIN READ",
    category: "NEWS",
    imageUrl: "/blog/Article1.jpg",
    author: {
      name: "Rhoda Brody",
      role: "Software Engineer",
      avatarUrl: "/api/placeholder/50/50"
    }
  };

  // State for category filter in All Articles section
  const [activeCategory, setActiveCategory] = useState<string>("All");
  
  // Filter articles based on selected category
  const filteredArticles = activeCategory === "All" 
    ? allArticles 
    : allArticles.filter(article => article.category.toUpperCase() === activeCategory.toUpperCase());

  return (
    <div className="overflow-x-hidden scrollbar-hide size-full">
      {/* Hero Section */}
      
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="relative rounded-2xl overflow-hidden flex flex-col lg:flex-row shadow-lg">
            {/* Image on the left */}
            <div className="lg:w-7/12 w-full h-96 lg:h-auto relative">
              <Image 
                  src={heroPost.imageUrl} 
                  alt={heroPost.title} 
                  width={1200} 
                  height={1200} 
                  className="w-full h-full object-cover" />
            </div>
            {/* Content on the right */}
            <div className="lg:w-5/12 w-full p-6 lg:p-8 bg-white">
              <div className="flex items-center space-x-2">
                <span className="text-indigo-500 font-medium text-sm">{heroPost.category}</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-400 text-sm">{heroPost.readTime}</span>
              </div>
              
              <h1 className="text-4xl font-bold text-gray-800 mt-4">{heroPost.title}</h1>
              
              {heroPost.author && (
                <div className="flex items-center mt-6">
                  <Image 
                  src={heroPost.author.avatarUrl} 
                  alt={heroPost.author.name} 
                  width={10} 
                  height={10} 
                  className="rounded-full" />
                  <div className="ml-3">
                    <p className="text-gray-800 font-medium">{heroPost.author.name}</p>
                    <p className="text-gray-500 text-sm">{heroPost.author.role}</p>
                  </div>
                </div>
              )}
              
              <p className="text-gray-500 mt-4">{heroPost.date}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Content</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredPosts.map((post) => (
              <div key={post.id} className="rounded-xl overflow-hidden shadow-md">
                <div className="h-48 relative">
                  <Image 
                  src={post.imageUrl} 
                  alt={post.title} 
                  width={1200} 
                  height={1200} 
                  className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-indigo-600 font-medium text-sm">{post.category}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-400 text-sm">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <p className="text-gray-500 text-sm">{post.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles Section - Updated to match reference exactly */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">All Articles</h2>
            
            <div className="flex space-x-6">
              {["All", "Technology", "News", "Guide"].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-1 py-1 ${
                    activeCategory === category 
                      ? "text-gray-900 border-b-2 border-gray-900 font-medium" 
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {filteredArticles.map((article) => (
              <div key={article.id} className="group cursor-pointer">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-2/5 h-56 md:h-40 rounded-lg overflow-hidden">
                    <Image 
                  src={article.imageUrl} 
                  alt={article.title} 
                  width={1200} 
                  height={1200} 
                  className="w-full h-full object-cover" />
                  </div>
                  <div className="md:w-3/5">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-indigo-600 font-medium text-sm">{article.category}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-400 text-sm">{article.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-200">{article.title}</h3>
                    <p className="text-gray-500 text-sm">{article.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CryptoComingSoonPage;

// export default CryptoComingSoonPage;
