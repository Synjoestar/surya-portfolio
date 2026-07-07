"use client";
import React from "react";
import Image from "next/image";
import { Brain, Download, ArrowRight, Eye, MessageSquare, Cpu, Code, Database, Globe } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function AboutSection() {
  return (
    <section id="about" className="relative flex min-h-0 lg:min-h-screen w-full flex-col py-20 overflow-hidden bg-bg">
      <div className="container mx-auto px-6 md:px-10 lg:px-20 flex flex-1 justify-center py-5 relative z-10">
        <div className="flex flex-col max-w-[1200px] flex-1">
          {/* Section Header */}
          <ScrollReveal>
          <div className="flex items-center gap-3 px-4 pb-6 pt-4">
            <span className="h-[4px] w-8 bg-primary border-y-2 border-l-2 border-border"></span>
            <h3 className="text-text font-mono text-sm font-black tracking-widest uppercase bg-primary-light px-2 py-1 border-2 border-border">About The Engineer</h3>
          </div>
          </ScrollReveal>

          {/* Main Grid Layout */}
          <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start px-4">
            {/* Left Column: Portrait & Stats */}
            <div className="lg:col-span-5 flex flex-col gap-6 relative group mt-4">
              {/* Portrait Card - Fixed: aspect-square on mobile, aspect-[4/5] on desktop */}
              <div className="relative w-full aspect-square lg:aspect-[4/5] overflow-hidden brutal-card bg-primary-light p-2 group">
                <div className="relative w-full h-full rounded-xl overflow-hidden border-3 border-border bg-surface">
                  <Image 
                    src="/images/profile.webp" 
                    alt="Surya Yusuf Nugroho" 
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Floating Badge */}
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <div className="brutal-card p-4 flex items-center justify-between">
                    <div>
                      <p className="text-text text-sm font-black uppercase">Status</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-success border border-border"></span>
                        </span>
                        <span className="text-text-muted text-xs font-bold uppercase">Accepting Projects</span>
                      </div>
                    </div>
                    <div className="h-10 w-10 rounded-lg bg-accent-yellow flex items-center justify-center text-text border-2 border-border shadow-[2px_2px_0_#1A1A1A]">
                      <Brain size={24} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Mini Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="brutal-card p-5 bg-accent-pink">
                  <h4 className="text-3xl font-black text-text mb-1">1<span className="text-text text-xl">+</span></h4>
                  <p className="text-text font-bold text-xs uppercase tracking-wider">Years Exp.</p>
                </div>
                <div className="brutal-card p-5 bg-primary-light">
                  <h4 className="text-3xl font-black text-text mb-1">5<span className="text-text text-xl">+</span></h4>
                  <p className="text-text font-bold text-xs uppercase tracking-wider">Models Deployed</p>
                </div>
              </div>
            </div>

            {/* Right Column: Bio & Details */}
            <div className="lg:col-span-7 flex flex-col justify-center h-full pt-4 lg:pt-0">
              <h1 className="text-text tracking-tighter text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-8 uppercase drop-shadow-[2px_2px_0_rgba(155,138,251,1)]">
                Building the <span className="text-primary-dark underline decoration-border decoration-4 underline-offset-4">brains</span> <br className="hidden md:block"/> of tomorrow.
              </h1>
              
              <div className="space-y-6 text-text-muted text-lg font-medium leading-relaxed max-w-[640px]">
                <p>
                  I&apos;m <span className="text-text font-black uppercase bg-accent-yellow px-1 border-2 border-border shadow-[2px_2px_0_#1A1A1A]">Surya Yusuf Nugroho</span>, an ML Engineer obsessed with optimization. I don&apos;t just write code; I design systems that learn, adapt, and evolve.
                </p>
                <p>
                  My passion lies in blending <span className="text-text font-bold bg-primary-light px-1 border-b-4 border-border">rigorous mathematics</span> with creative problem-solving. I turn raw, chaotic data into predictive power and actionable intelligence.
                </p>
                <div className="brutal-card p-4 bg-surface relative">
                    <div className="absolute -top-3 -left-3 bg-accent-pink p-1 border-2 border-border shadow-[2px_2px_0_#1A1A1A]">
                       <Globe size={16} className="text-text" />
                    </div>
                    <p className="text-base text-text font-bold italic">
                    &quot;Architecture is policy. How we build our models defines how they interact with the world.&quot;
                    </p>
                </div>
              </div>

              {/* Tech Stack Ticker/Grid */}
              <div className="mt-10 mb-10">
                <p className="text-sm font-black text-text mb-4 uppercase tracking-widest bg-border text-surface inline-block px-2 py-1">Tech Arsenal</p>
                <div className="flex flex-wrap gap-3">
                  {/* Technology Tags */}
                  <div className="brutal-tag">
                    <Code size={16} />
                    <span>Python</span>
                  </div>
                  <div className="brutal-tag brutal-tag-accent">
                    <Cpu size={16} />
                    <span>PyTorch</span>
                  </div>
                  <div className="brutal-tag">
                    <Database size={16} />
                    <span>TensorFlow</span>
                  </div>
                  <div className="brutal-tag brutal-tag-accent">
                    <Eye size={16} />
                    <span>Computer Vision</span>
                  </div>
                  <div className="brutal-tag">
                    <MessageSquare size={16} />
                    <span>NLP</span>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <a href="/Harvard_ATS_ML_EN.pdf" target="_blank" rel="noopener noreferrer" className="brutal-button bg-accent-yellow text-lg">
                  <Download size={20} className="mr-2" />
                  <span>Resume</span>
                </a>
                <Link href="#projects" className="brutal-button bg-surface text-lg">
                    <span>Portfolio</span>
                    <ArrowRight size={20} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
          </ScrollReveal>

          {/* Bottom "Ticker" visual decoration - Fixed: justify-center on mobile */}
          <div className="w-full mt-24 border-t-4 border-border pt-8">
            <div className="flex justify-center md:justify-between items-center text-text font-bold text-xs uppercase tracking-widest flex-wrap gap-3">
              <span className="bg-primary-light px-2 py-1 border-2 border-border shadow-[2px_2px_0_#1A1A1A]">Based in Indonesia</span>
              <span className="hidden md:inline-block">/</span>
              <span className="bg-accent-pink px-2 py-1 border-2 border-border shadow-[2px_2px_0_#1A1A1A]">Available for Freelance</span>
              <span className="hidden md:inline-block">/</span>
              <span className="bg-accent-yellow px-2 py-1 border-2 border-border shadow-[2px_2px_0_#1A1A1A]">UTC+7 Timezone</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
