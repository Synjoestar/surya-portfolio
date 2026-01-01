"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowDown, Send, Braces, Brain, Cpu, Database, Cloud, Bot } from "lucide-react";

const Typewriter = ({ words }: { words: string[] }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blink cursor
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  // Typing logic
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1500 : 150, parseInt((Math.random() * 350).toString())));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span className="font-mono text-lg md:text-xl text-primary/90 flex items-center h-8">
        <ChevronRight size={20} className="mr-2" />
        {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
    </span>
  );
};

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 flex flex-col items-center justify-center min-h-[90vh] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none hero-grid z-0 opacity-50"></div>
      <div className="absolute top-0 right-0 md:right-1/4 w-[600px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Column: Text Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6 order-2 md:order-1">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-primary mb-2 self-center md:self-start">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Available for freelance & full-time roles
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.1] mb-2">
                Surya Yusuf <br/> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
                    Nugroho
                </span>
            </h1>

            {/* Typewriter */}
            <div className="h-8 mb-4">
                <Typewriter words={["ML Engineer", "Computer Vision Enthusiast", "Data Scientist", "Full Stack Developer"]} />
            </div>

            <p className="text-gray-400 max-w-xl text-base md:text-lg leading-relaxed mt-2">
                Architecting intelligent systems and deploying scalable machine learning models. Specializing in Deep Learning and MLOps.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                <Link 
                    href="#projects"
                    className="h-12 px-8 rounded-full bg-primary hover:bg-primary/90 text-background-dark font-bold flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(245,159,10,0.4)] hover:shadow-[0_0_30px_rgba(245,159,10,0.6)]"
                >
                    View Projects
                    <ArrowDown size={18} />
                </Link>
                <Link
                    href="#contact"
                    className="h-12 px-8 rounded-full glass-panel hover:bg-white/10 text-white font-medium flex items-center gap-2 transition-all"
                >
                    Contact Me
                    <Send size={18} />
                </Link>
            </div>

            {/* Tech Stack Icons */}
            <div className="mt-8 pt-8 border-t border-white/5 w-full flex flex-wrap justify-center md:justify-start gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="flex items-center gap-2 text-sm font-mono"><Braces size={16} /> Python</div>
                <div className="flex items-center gap-2 text-sm font-mono"><Brain size={16} /> TensorFlow</div>
                <div className="flex items-center gap-2 text-sm font-mono"><Cpu size={16} /> PyTorch</div>
                <div className="flex items-center gap-2 text-sm font-mono"><Database size={16} /> Pandas</div>
                <div className="flex items-center gap-2 text-sm font-mono"><Cloud size={16} /> AWS</div>
            </div>
        </div>

        {/* Right Column: Profile Image */}
        <div className="relative order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px]">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-500 rounded-[2rem] blur-[60px] opacity-40 animate-pulse"></div>
                
                {/* Card Container */}
                <div className="relative w-full h-full rounded-[2rem] p-1.5 bg-background-dark border-[3px] border-primary shadow-[0_0_30px_rgba(245,159,10,0.4),inset_0_0_20px_rgba(245,159,10,0.2)] overflow-hidden group hover:shadow-[0_0_60px_rgba(245,159,10,0.7),inset_0_0_30px_rgba(245,159,10,0.4)] transition-all duration-500">
                    <div className="absolute inset-0 bg-black/40 z-0"></div>
                    <div className="relative w-full h-full rounded-[1.6rem] overflow-hidden bg-surface-dark bg-gray-800">
                         {/* Using Next/Image for optimization, require dummy image in public/photo.webp */}
                        <Image 
                            src="/images/profile.webp" 
                            alt="Surya Yusuf Nugroho" 
                            fill
                            className="object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-110 transition-all duration-700 ease-in-out"
                        />
                    </div>
                </div>

                {/* Floating Badge (Verified) */}
                <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute bottom-4 left-4 right-4 glass-panel p-3 rounded-xl border border-white/10 flex items-center gap-3 shadow-lg z-20"
                >
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-background-dark shadow-[0_0_10px_rgba(245,159,10,0.5)]">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs font-bold text-white tracking-wide">Surya Yusuf N.</span>
                        <span className="text-[10px] text-primary font-mono">Open to Work</span>
                    </div>
                </motion.div>

                {/* Floating Icons */}
                <div className="absolute -top-4 -right-4 w-12 h-12 glass-panel rounded-full flex items-center justify-center border border-white/10 animate-bounce delay-100 shadow-lg z-20">
                    <Bot size={20} className="text-primary" />
                </div>
                <div className="absolute top-1/2 -left-6 w-10 h-10 glass-panel rounded-full flex items-center justify-center border border-white/10 animate-[bounce_3s_infinite] shadow-lg z-20">
                    <Cpu size={18} className="text-purple-400" />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
