"use client"

import { AnimationContainer, MaxWidthWrapper } from "@/components";
import { Button } from "@/components/ui/button";
import { Vortex } from "@/components/ui/vortex";
import MagicBadge from "@/components/ui/magic-badge";
import { COMPANIES } from "@/utils";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CryptoComingSoonPage = () => {
  return (
    <>
      <MaxWidthWrapper>
        <AnimationContainer delay={0.1} className="w-full relative">
          <div className="flex flex-col items-center justify-center py-10 max-w-lg mx-auto">
            <div className="absolute inset-0 z-0">
              <Vortex className="w-full h-full opacity-30" />
            </div>
            <MagicBadge title="Coming Soon" />
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight relative z-10">
              Revolutionizing Crypto Governance
            </h1>
            <p className="text-base md:text-lg mt-6 text-center text-muted-foreground relative z-10">
              Get ready to shape the future of decentralized finance! Our governance and reward token is on the horizon. Be the first to join the revolution.
            </p>
          </div>
        </AnimationContainer>
      </MaxWidthWrapper>

      <MaxWidthWrapper>
        <AnimationContainer delay={0.3} className="w-full py-14 relative z-20">
          <div className="mx-auto px-4 md:px-8">
            <h2 className="text-center text-sm font-medium font-heading text-neutral-400 uppercase">
              Backed by Industry Leaders
            </h2>
            <div className="mt-8">
              <ul className="flex flex-wrap items-center justify-center gap-8 md:gap-12 py-8">
                {COMPANIES.map((company) => (
                  <li key={company.name} className="flex items-center justify-center">
                    <Image
                      src={company.logo}
                      alt={company.name}
                      width={100}
                      height={100}
                      quality={100}
                      className="w-24 h-24 object-contain"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimationContainer>
      </MaxWidthWrapper>

      <MaxWidthWrapper className="pt-20">
        <AnimationContainer delay={0.4} className="w-full">
          <div className="flex flex-col items-center justify-center relative w-full text-center">
            <h2 className="bg-gradient-to-b from-neutral-800 to-neutral-400 py-4 bg-clip-text text-center text-4xl font-semibold font-heading tracking-tight text-transparent md:text-7xl mt-8">
              Empowering Decentralized Communities
            </h2>
            <p className="text-muted-foreground mt-6 max-w-lg mx-auto text-base md:text-lg">
              Our token will enable holders to participate in governance decisions and earn rewards. Join us in building a decentralized future.
            </p>
            <div className="mt-6">
              <Button asChild>
                <Link href="#" className="flex items-center">
                  Stay Updated
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </AnimationContainer>
      </MaxWidthWrapper>
    </>
  );
};

export default CryptoComingSoonPage;
