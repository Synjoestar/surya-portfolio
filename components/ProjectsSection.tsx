"use strict";
"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Github, Activity, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 relative z-10 text-white">
      <div className="max-w-7xl mx-auto">
      <ScrollReveal>
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Projects</h2>
            <p className="text-gray-400">A selection of my recent machine learning work.</p>
          </div>
          <a
            href="https://github.com/Synjoestar"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1 text-primary hover:text-white transition-colors text-sm font-mono"
          >
            View GitHub <ArrowUpRight size={14} />
          </a>
        </div>
      </ScrollReveal>

        {/* Bento Grid */}
        <ScrollReveal delay={0.2}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
          
          {/* Project 1: TrashLab (Large Card) */}
          <Link href="https://trashlab.vercel.app" target="_blank" rel="noopener noreferrer" className="md:col-span-2">
          <motion.div 
             whileHover={{ y: -5 }}
             className="group h-full glass-panel rounded-2xl p-1 hover:border-primary/50 transition-all duration-500 relative overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="h-full w-full rounded-xl bg-[#1e1e1e] overflow-hidden relative flex flex-col md:flex-row">
                {/* TrashLab Image */}
                <div className="w-full md:w-1/2 h-64 md:h-full relative overflow-hidden bg-gray-800">
                    <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors"></div>
                    <Image 
                        src="/images/trashlab.webp"
                        alt="TrashLab - Waste Classification System"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                </div>

                <div className="p-6 md:p-8 flex flex-col justify-between w-full md:w-1/2">
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex gap-2">
                                <span className="px-2 py-1 rounded text-[10px] font-mono bg-primary/20 text-primary border border-primary/20">CNN</span>
                                <span className="px-2 py-1 rounded text-[10px] font-mono bg-white/5 text-gray-300 border border-white/10">Python</span>
                            </div>
                            <ArrowUpRight size={20} className="text-gray-500 group-hover:text-primary transition-colors" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">TrashLab</h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            An AI-powered waste classification system using Convolutional Neural Networks (CNNs) to identify recyclable materials in real-time. Deployed on Vercel with 98% accuracy.
                        </p>
                    </div>
                    <div className="flex items-center gap-4 mt-4">
                        <span className="text-sm font-medium text-white border-b border-primary pb-0.5">View Live Site</span>
                    </div>
                </div>
            </div>
          </motion.div>
          </Link>

          {/* Project 2: Diabetes Prediction */}
          <Link href="https://github.com/Synjoestar/diabetesprediksi" target="_blank" rel="noopener noreferrer">
          <motion.div 
            whileHover={{ y: -5 }}
            className="group h-full glass-panel rounded-2xl p-1 hover:border-primary/50 transition-all duration-500 flex flex-col relative overflow-hidden cursor-pointer"
          >
            <div className="absolute top-4 right-4 text-primary animate-pulse z-20">
                <Activity size={24} />
            </div>
            {/* Image */}
            <div className="relative w-full h-40 overflow-hidden rounded-t-xl">
                <Image 
                    src="/images/diabetes.webp"
                    alt="Diabetes Prediction Model"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e1e] via-transparent to-transparent"></div>
            </div>
            <div className="flex-1 flex flex-col justify-end p-5">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Diabetes Prediction</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    Predictive modeling using Logistic Regression and Random Forest algorithms on patient health data. Includes feature importance analysis.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                    <span className="px-2 py-1 rounded text-[10px] font-mono bg-white/5 text-gray-400">Scikit-Learn</span>
                    <span className="px-2 py-1 rounded text-[10px] font-mono bg-white/5 text-gray-400">Random Forest</span>
                </div>
            </div>
          </motion.div>
          </Link>

          {/* Project 3: Book Recommendation */}
          <Link href="https://github.com/Synjoestar/sistem-rekomendasi" target="_blank" rel="noopener noreferrer" className="md:col-span-2">
          <motion.div 
            whileHover={{ y: -5 }}
            className="group h-full glass-panel rounded-2xl p-6 hover:border-primary/50 transition-all duration-500 relative overflow-hidden flex flex-col justify-between cursor-pointer"
          >
             <div className="flex items-center justify-between mb-4 relative z-10">
                <div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">Book Recommendation Engine</h3>
                    <p className="text-gray-400 text-xs">Collaborative Filtering • Matrix Factorization</p>
                </div>
                <div className="flex gap-2">
                    <ArrowUpRight size={20} className="text-gray-600 group-hover:text-primary transition-colors" />
                </div>
            </div>
            
            {/* Book Recommendation Image */}
            <div className="relative w-full h-48 overflow-hidden rounded-xl">
                <Image 
                    src="/images/buku.webp"
                    alt="Book Recommendation Engine"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#181511]/80 via-transparent to-[#181511]/80"></div>
            </div>
          </motion.div>
          </Link>

          {/* More on GitHub */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="group glass-panel rounded-2xl p-6 hover:border-primary/50 transition-all duration-500 flex flex-col items-center justify-center text-center gap-2"
          >
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-2 group-hover:bg-primary group-hover:text-background-dark transition-colors">
                <Github size={32} />
            </div>
            <h3 className="text-lg font-bold">More on GitHub</h3>
            <p className="text-gray-500 text-xs">Explore 20+ other repositories and experiments.</p>
            <a href="https://github.com/Synjoestar" target="_blank" rel="noopener noreferrer" className="mt-2 text-primary text-sm font-medium hover:underline">@Synjoestar</a>
          </motion.div>

        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
