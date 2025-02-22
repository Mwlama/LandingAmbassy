import { AnimationContainer, MaxWidthWrapper, PricingCards } from "@/components";
import { BentoCard, BentoGrid, CARDS } from "@/components/ui/bento-grid";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { LampContainer } from "@/components/ui/lamp";
import MagicBadge from "@/components/ui/magic-badge";
import MagicCard from "@/components/ui/magic-card";
import { COMPANIES, PROCESS } from "@/utils";
import { currentUser } from "@clerk/nextjs/server";
import { ArrowRightIcon, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import VideoBanner from "@/components/VideoBanner";
import About from "@/components/about";
import SearchBar from "@/components/searchBar";
import GridGlobe from "@/components/ui/GridGlobe";

const ThemeToggle = dynamic(() => import("@/components/ui/ThemeToggle"), { ssr: false });


const HomePage = async () => {

    const user = await currentUser();

    return (
        
        <div className="overflow-x-hidden scrollbar-hide size-full">
            {/* Hero Section */}
            <MaxWidthWrapper>
                <div className="flex flex-col justify-center w-full">
                    <SearchBar />
                </div>
            </MaxWidthWrapper >
            
            {/* Pricing Section */}
            <MaxWidthWrapper >
                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
                        <MagicBadge title="Simple Pricing" />
                        <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
                            Choose a plan that works for you
                        </h2>
                        <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
                            Get started with Ambassy today and enjoy more features with our pro plans.
                        </p>
                        
                    </div>
                </AnimationContainer>
                <AnimationContainer delay={0.2}>
                    <PricingCards />
                </AnimationContainer>
                
            </MaxWidthWrapper >
          <div className="max-w-7xl mx-auto px-4 py-10">
            <VideoBanner />
          </div>
          {/* Process Section */}
          <MaxWidthWrapper className="py-10">
                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
                        <MagicBadge title="The Process" />
                        <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
                            Transform Followers into Customers, Ambassadors into Your Sales Force
                        </h2>
                        <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
                        Ambassy is the ultimate platform that connects professionals with a curated network of social media ambassadors, enabling targeted, trackable, and transformative marketing campaigns that turn social media reach into real revenue.
                        </p>
                    </div>
                </AnimationContainer>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full py-8 gap-4 md:gap-8">
                    {PROCESS.map((process, id) => (
                        <AnimationContainer delay={0.2 * id} key={id}>
                            <MagicCard className="group md:py-8">
                                <div className="flex flex-col items-start justify-center w-full">
                                    <process.icon strokeWidth={1.5} className="w-10 h-10 text-foreground" />
                                    <div className="flex flex-col relative items-start">
                                        <span className="absolute -top-6 right-0 border-2 border-border text-foreground font-medium text-2xl rounded-full w-12 h-12 flex items-center justify-center pt-0.5">
                                            {id + 1}
                                        </span>
                                        <h3 className="text-base mt-6 font-medium text-foreground">
                                            {process.title}
                                        </h3>
                                        <p className="mt-2 text-sm text-muted-foreground">
                                            {process.description}
                                        </p>
                                    </div>
                                </div>
                            </MagicCard>
                        </AnimationContainer>
                    ))}
                </div>
                <div className="max-w-7xl mx-auto px-4">
                     <About />
                </div>
            </MaxWidthWrapper>

            {/* Companies Section */}
            <MaxWidthWrapper className="relative">
                <AnimationContainer delay={0.4}>
                    <LampContainer>
                        <div className="py-20 relative z-10">
                            <div className="mx-auto px-4 md:px-8">
                                <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 md:gap-x-12">
                                    {COMPANIES.map((company) => (
                                        <li key={company.name}>
                                            <a 
                                                href={company.url} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="block transition-transform hover:scale-110"
                                            >
                                                <Image
                                                    src={company.logo}
                                                    alt={company.name}
                                                    width={40}
                                                    height={40}
                                                    quality={100}
                                                    className="w-10 h-10 md:w-12 md:h-12"
                                                />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </LampContainer>
                </AnimationContainer>
            </MaxWidthWrapper>


            {/* Features Section */}
            <MaxWidthWrapper>
                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col w-full items-center lg:items-center justify-center">
                        <MagicBadge title="Features" />
                        <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
                            Manage Campaigns Like a Pro
                        </h2>
                        <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
                            Ambassy: The Ultimate Communication Tool to Share, Monetize & Organize All Your Campaigns in One Place.
                        </p>
                    </div>
                </AnimationContainer>
                <AnimationContainer delay={0.2}>
                    <BentoGrid className="py-8">
                        {CARDS.map((feature, idx) => (
                            <BentoCard key={idx} {...feature} />
                        ))}
                    </BentoGrid>
                </AnimationContainer>
            </MaxWidthWrapper>

            {/* CTA Section */}
            <MaxWidthWrapper className="mt-20 max-w-[100vw] overflow-x-hidden scrollbar-hide">
                <AnimationContainer delay={0.1}>
                        <div className="flex flex-col items-center justify-center relative w-full text-center">
                            <h2 className="bg-gradient-to-b from-neutral-800 to-neutral-400 py-4 bg-clip-text text-center text-4xl md:text-7xl !leading-[1.15] font-medium font-heading tracking-tight text-transparent mt-8">
                                Step into the future of Marketing management
                            </h2>
                            <p className="text-muted-foreground mt-6 max-w-md mx-auto">
                                Experience the cutting-edge solution that transforms how you handle your communication. Elevate your online presence with our next-gen platform.
                            </p>
                            <div className="mt-6">
                                <Button>
                                    Get started
                                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                                </Button>
                            </div>
                        </div>
                </AnimationContainer>
            </MaxWidthWrapper>

        </div>
    )
};

export default HomePage
