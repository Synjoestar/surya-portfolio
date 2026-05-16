"use strict";
"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Github, Activity } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 relative z-10 text-text bg-bg">
      <div className="max-w-7xl mx-auto">
      <ScrollReveal>
        <div className="flex items-end justify-between mb-12 border-b-4 border-border pb-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-2 uppercase">Featured Projects</h2>
            <p className="text-text-muted font-bold">A selection of my recent machine learning work.</p>
          </div>
          <a
            href="https://github.com/Synjoestar"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1 brutal-button bg-primary-light hover:bg-primary transition-colors text-sm font-black"
          >
            View GitHub <ArrowUpRight size={16} />
          </a>
        </div>
      </ScrollReveal>

        {/* Bento Grid - Fixed: auto-rows-auto on mobile */}
        <ScrollReveal delay={0.2}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto md:auto-rows-[minmax(300px,auto)]">
          
          {/* Project 1: TrashLab (Large Card) */}
          <Link href="https://trashlab.vercel.app" target="_blank" rel="noopener noreferrer" className="md:col-span-2">
          <motion.div 
             whileHover={{ y: -5 }}
             className="group h-full brutal-card p-0 overflow-hidden flex flex-col md:flex-row cursor-pointer"
          >
            {/* TrashLab Image */}
            <div className="w-full md:w-1/2 h-48 sm:h-64 md:h-full relative overflow-hidden border-b-3 md:border-b-0 md:border-r-3 border-border">
                <Image 
                    src="/images/trashlab.webp"
                    alt="TrashLab - Waste Classification System"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>

            <div className="p-6 md:p-8 flex flex-col justify-between w-full md:w-1/2 bg-surface">
                <div>
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex gap-2">
                            <span className="brutal-tag brutal-tag-accent py-1 px-2 text-[10px]">CNN</span>
                            <span className="brutal-tag py-1 px-2 text-[10px]">Python</span>
                        </div>
                        <ArrowUpRight size={24} className="text-text group-hover:text-primary-dark transition-colors" />
                    </div>
                    <h3 className="text-3xl font-black mb-2 group-hover:text-primary-dark transition-colors uppercase">TrashLab</h3>
                    <p className="text-text-muted font-bold text-sm leading-relaxed mb-4">
                        An AI-powered waste classification system using Convolutional Neural Networks (CNNs) to identify recyclable materials in real-time. Deployed on Vercel with 98% accuracy.
                    </p>
                </div>
                <div className="flex items-center gap-4 mt-4">
                    <span className="text-sm font-black text-text border-b-4 border-primary pb-0.5 group-hover:border-primary-dark transition-colors">View Live Site</span>
                </div>
            </div>
          </motion.div>
          </Link>

          {/* Project 2: Diabetes Prediction */}
          <Link href="https://github.com/Synjoestar/diabetesprediksi" target="_blank" rel="noopener noreferrer">
          <motion.div 
            whileHover={{ y: -5 }}
            className="group h-full brutal-card p-0 flex flex-col relative overflow-hidden cursor-pointer bg-accent-pink"
          >
            <div className="absolute top-4 right-4 text-text animate-pulse z-20 brutal-card p-2 bg-surface border-2">
                <Activity size={24} />
            </div>
            {/* Image */}
            <div className="relative w-full h-40 overflow-hidden border-b-3 border-border">
                <Image 
                    src="/images/diabetes.webp"
                    alt="Diabetes Prediction Model"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>
            <div className="flex-1 flex flex-col justify-end p-5">
                <h3 className="text-2xl font-black mb-2 group-hover:underline transition-colors uppercase">Diabetes Prediction</h3>
                <p className="text-text font-bold text-sm leading-relaxed mb-4 line-clamp-3">
                    Predictive modeling using Logistic Regression and Random Forest algorithms on patient health data. Includes feature importance analysis.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                    <span className="brutal-tag py-1 px-2 text-[10px]">Scikit-Learn</span>
                    <span className="brutal-tag py-1 px-2 text-[10px]">Random Forest</span>
                </div>
            </div>
          </motion.div>
          </Link>

          {/* Project 3: Book Recommendation */}
          <Link href="https://github.com/Synjoestar/sistem-rekomendasi" target="_blank" rel="noopener noreferrer" className="md:col-span-2">
          <motion.div 
            whileHover={{ y: -5 }}
            className="group h-full brutal-card p-6 relative overflow-hidden flex flex-col justify-between cursor-pointer bg-primary-light"
          >
             <div className="flex items-center justify-between mb-4 relative z-10">
                <div>
                    <h3 className="text-3xl font-black group-hover:underline transition-colors uppercase">Book Recommendation Engine</h3>
                    <p className="text-text font-bold text-xs bg-surface inline-block px-2 py-1 mt-2 border-2 border-border shadow-[2px_2px_0_#1A1A1A]">Collaborative Filtering • Matrix Factorization</p>
                </div>
                <div className="flex gap-2 bg-surface p-2 rounded-full border-2 border-border shadow-[2px_2px_0_#1A1A1A]">
                    <ArrowUpRight size={24} className="text-text" />
                </div>
            </div>
            
            {/* Book Recommendation Image */}
            <div className="relative w-full h-48 overflow-hidden rounded-xl border-3 border-border bg-surface">
                <Image 
                    src="/images/buku.webp"
                    alt="Book Recommendation Engine"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 mix-blend-multiply"
                />
            </div>
          </motion.div>
          </Link>

          {/* More on GitHub - Fixed: added mobile GitHub link */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="group brutal-card p-6 bg-accent-yellow flex flex-col items-center justify-center text-center gap-2"
          >
            <div className="w-16 h-16 rounded-full bg-surface flex items-center justify-center mb-2 border-3 border-border shadow-[4px_4px_0_#1A1A1A] group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-[0px_0px_0_#1A1A1A] transition-all">
                <Github size={32} className="text-text" />
            </div>
            <h3 className="text-2xl font-black uppercase">More on GitHub</h3>
            <p className="text-text font-bold text-sm">Explore 20+ other repositories and experiments.</p>
            <a href="https://github.com/Synjoestar" target="_blank" rel="noopener noreferrer" className="mt-2 text-text text-sm font-black underline decoration-4 underline-offset-4 hover:text-primary-dark transition-colors">@Synjoestar</a>
          </motion.div>

        </div>
        </ScrollReveal>

        {/* Mobile-only GitHub button - Fixed: visible on mobile */}
        <div className="flex md:hidden justify-center mt-8">
          <a
            href="https://github.com/Synjoestar"
            target="_blank"
            rel="noopener noreferrer"
            className="brutal-button bg-primary-light hover:bg-primary transition-colors text-base font-black"
          >
            <Github size={20} className="mr-2" />
            View All on GitHub <ArrowUpRight size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
