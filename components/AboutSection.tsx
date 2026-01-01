"use client";
import React from "react";
import Image from "next/image";
import { Brain, Download, ArrowRight, Eye, MessageSquare, Terminal, Cpu, Code, Database, Globe } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function AboutSection() {
  return (
    <section id="about" className="relative flex min-h-screen w-full flex-col py-20 overflow-hidden">
      {/* Background Grid - simulating tech-grid-bg */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(245,159,10,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(245,159,10,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* Decorative Background Glow */}
      <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-10 lg:px-20 flex flex-1 justify-center py-5 relative z-10">
        <div className="flex flex-col max-w-[1200px] flex-1">
          {/* Section Header */}
          <ScrollReveal>
          <div className="flex items-center gap-3 px-4 pb-6 pt-4">
            <span className="h-[1px] w-8 bg-primary"></span>
            <h3 className="text-primary font-mono text-sm font-bold tracking-widest uppercase">About The Engineer</h3>
          </div>
          </ScrollReveal>

          {/* Main Grid Layout */}
          <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start px-4">
            {/* Left Column: Portrait & Stats */}
            <div className="lg:col-span-5 flex flex-col gap-6 relative group">
              {/* Portrait Card */}
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-transform duration-500 hover:scale-[1.01] bg-surface-dark">
                {/* Glitch Overlay Effect Container */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#181511] via-transparent to-transparent z-10 opacity-60"></div>
                
                {/* Image */}
                <div className="relative w-full h-full">
                  <Image 
                    src="/images/profile.webp" 
                    alt="Surya Yusuf Nugroho" 
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Floating Badge */}
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <div className="glass-panel rounded-xl p-4 flex items-center justify-between">
                    <div>
                      <p className="text-white text-sm font-bold">Status</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                        </span>
                        <span className="text-gray-300 text-xs font-mono">Accepting Projects</span>
                      </div>
                    </div>
                    <div className="h-10 w-10 rounded-lg bg-[#2d2820] flex items-center justify-center text-primary border border-white/5">
                      <Brain size={24} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Mini Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-panel p-5 rounded-xl border border-primary/20 hover:border-primary/50 transition-colors">
                  <h4 className="text-3xl font-bold text-white mb-1">1<span className="text-primary text-xl">+</span></h4>
                  <p className="text-gray-400 text-xs font-mono uppercase tracking-wider">Years Exp.</p>
                </div>
                <div className="glass-panel p-5 rounded-xl border border-white/5 hover:border-white/20 transition-colors">
                  <h4 className="text-3xl font-bold text-white mb-1">5<span className="text-primary text-xl">+</span></h4>
                  <p className="text-gray-400 text-xs font-mono uppercase tracking-wider">Models Deployed</p>
                </div>
              </div>
            </div>

            {/* Right Column: Bio & Details */}
            <div className="lg:col-span-7 flex flex-col justify-center h-full pt-4 lg:pt-0">
              <h1 className="text-white tracking-tight text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.1] mb-8">
                Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">brains</span> <br className="hidden md:block"/> of tomorrow.
              </h1>
              
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed max-w-[640px]">
                <p>
                  I’m <span className="text-white font-semibold">Surya Yusuf Nugroho</span>, an ML Engineer obsessed with optimization. I don't just write code; I design systems that learn, adapt, and evolve.
                </p>
                <p>
                  My passion lies in blending <span className="text-primary border-b border-primary/30 pb-0.5">rigorous mathematics</span> with creative problem-solving. I turn raw, chaotic data into predictive power and actionable intelligence.
                </p>
                <p className="text-base text-gray-400 italic border-l-2 border-primary/50 pl-4 py-1">
                  "Architecture is policy. How we build our models defines how they interact with the world."
                </p>
              </div>

              {/* Tech Stack Ticker/Grid */}
              <div className="mt-10 mb-10">
                <p className="text-xs font-mono text-gray-500 mb-4 uppercase tracking-widest">Tech Arsenal</p>
                <div className="flex flex-wrap gap-3">
                  {/* Technology Tags */}
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#2d2820] border border-white/5 hover:border-primary/50 transition-colors cursor-default">
                    <Code size={18} className="text-gray-300" />
                    <span className="text-sm font-mono text-gray-300">Python</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#2d2820] border border-white/5 hover:border-primary/50 transition-colors cursor-default">
                    <Cpu size={18} className="text-gray-300" />
                    <span className="text-sm font-mono text-gray-300">PyTorch</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#2d2820] border border-white/5 hover:border-primary/50 transition-colors cursor-default">
                    <Database size={18} className="text-gray-300" />
                    <span className="text-sm font-mono text-gray-300">TensorFlow</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#2d2820] border border-white/5 hover:border-primary/50 transition-colors cursor-default">
                    <Eye size={18} className="text-gray-400" />
                    <span className="text-sm font-mono text-gray-300">Computer Vision</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#2d2820] border border-white/5 hover:border-primary/50 transition-colors cursor-default">
                    <MessageSquare size={18} className="text-gray-400" />
                    <span className="text-sm font-mono text-gray-300">NLP</span>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <a href="https://drive.google.com/file/d/1pYKjMc-x7FimIwyQof6UFcURLs73Y9YJ/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-8 py-3 bg-primary hover:bg-white hover:text-black text-[#181511] font-bold rounded-lg transition-all duration-300 shadow-[0_0_20px_-5px_rgba(245,159,10,0.3)] hover:shadow-white/20">
                  <Download size={20} />
                  <span>Download Resume</span>
                </a>
                <Link href="#projects" className="flex items-center justify-center gap-2 px-8 py-3 bg-transparent border border-white/20 hover:border-primary hover:text-primary text-white font-medium rounded-lg transition-all duration-300 group">
                    <span>View Portfolio</span>
                    <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
          </ScrollReveal>

          {/* Bottom "Ticker" visual decoration */}
          <div className="w-full mt-24 border-t border-white/5 pt-8">
            <div className="flex justify-between items-center text-gray-600 font-mono text-xs uppercase tracking-widest">
              <span>Based in Indonesia</span>
              <span className="hidden md:inline-block">/</span>
              <span className="hidden md:inline-block">Available for Freelance</span>
              <span className="hidden md:inline-block">/</span>
              <span>UTC+7 Timezone</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
