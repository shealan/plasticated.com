"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import * as React from "react";

const ParticlesBg = dynamic(() => import("particles-bg"), { ssr: false });

export default function HomePage() {
  return (
    <main className="min-h-screen bg-stone-900 text-white">
      <header className="relative h-screen w-screen">
        <div className="absolute inset-0 grid place-content-center">
          <div className="relative z-10">
            <div className="animate-glow animate-fade-left hidden h-px w-screen bg-gradient-to-r from-stone-300/0 via-stone-300/50 to-stone-300/0 md:block" />
            <h1 className="font-headline text-edge-outline animate-title font-display md:text-10xl z-10 cursor-default whitespace-nowrap bg-white bg-clip-text text-center text-5xl font-bold tracking-tight text-transparent duration-1000 sm:text-9xl">
              plasticated
            </h1>
            <div className="animate-glow animate-fade-right hidden h-px w-screen bg-gradient-to-r from-stone-300/0 via-stone-300/50 to-stone-300/0 md:block" />
            <div className="animate-fade-in mx-auto my-12 max-w-xs text-center md:max-w-md">
              <h2 className="inline text-sm md:text-lg">
                Creators of the{" "}
                <strong className="font-bold">Pose Panel</strong> platform:
                Deploy cutting-edge, big-screen augmented reality experiences
                for your company or brand in record time.{" "}
                <Link
                  target="_blank"
                  href="mailto:contact@plasticated.com"
                  className="underline underline-offset-2 duration-500"
                >
                  Contact us
                </Link>
              </h2>
            </div>
          </div>
        </div>
        <div className="absolute inset-0">
          <ParticlesBg color="#db2777" type="circle" />
        </div>
      </header>
    </main>
  );
}
