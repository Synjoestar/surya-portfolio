"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, Send, Bot, Cpu } from "lucide-react";
import StatusWidgets from "./StatusWidgets";

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
      setTimeout(() => setReverse(true), 0);
      return;
    }

    if (subIndex === 0 && reverse) {
      setTimeout(() => {
        setReverse(false);
        setIndex((prev) => (prev + 1) % words.length);
      }, 0);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1500 : 150, parseInt((Math.random() * 350).toString())));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span className="font-mono font-bold text-xl md:text-2xl text-primary-dark flex items-center h-8 bg-primary-light px-2 py-1 rounded-sm border-2 border-border border-b-[4px]">
        {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
    </span>
  );
};

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 flex flex-col items-center justify-center min-h-[90vh] overflow-hidden polka-dots">
      
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Column: Text Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6 order-2 md:order-1">
            
            {/* Badge */}
            <div className="brutal-tag brutal-tag-accent mb-2 self-center md:self-start">
                <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-border opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-border"></span>
                </span>
                Available for work
            </div>

            {/* Headline - Fixed: text-4xl on mobile instead of text-6xl */}
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-black tracking-tighter leading-[1] mb-2 uppercase text-text drop-shadow-[4px_4px_0_rgba(155,138,251,1)]">
                Surya <br/> 
                Yusuf <br/>
                Nugroho
            </h1>

            {/* Typewriter */}
            <div className="h-10 mb-4 mt-2">
                <Typewriter words={["ML Engineer", "Computer Vision Enthusiast", "Data Scientist", "Full Stack Developer"]} />
            </div>

            <p className="text-text-muted font-bold max-w-xl text-lg md:text-xl leading-relaxed mt-2 bg-surface p-4 border-3 border-border rounded-xl shadow-[4px_4px_0_#1A1A1A]">
                Architecting intelligent systems and deploying scalable machine learning models. Specializing in Deep Learning and MLOps.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                <Link 
                    href="#projects"
                    className="brutal-button bg-primary text-text text-lg py-3 px-8"
                >
                    View Projects
                    <ArrowDown size={20} className="ml-2" />
                </Link>
                <Link
                    href="#contact"
                    className="brutal-button bg-surface text-text text-lg py-3 px-8 hover:bg-bg-alt"
                >
                    Contact Me
                    <Send size={20} className="ml-2" />
                </Link>
            </div>
        </div>

        {/* Right Column: Profile Image - Fixed: smaller on mobile */}
        <div className="relative order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px]">
                
                {/* Card Container */}
                <div className="relative w-full h-full rounded-3xl p-2 bg-primary-light border-4 border-border shadow-[8px_8px_0_#1A1A1A] overflow-hidden group transition-all duration-300 hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0_#1A1A1A]">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-surface border-3 border-border">
                         {/* Using Next/Image for optimization */}
                        <Image 
                            src="/images/profile.webp" 
                            alt="Surya Yusuf Nugroho" 
                            fill
                            className="object-cover group-hover:scale-105 transition-all duration-500 ease-in-out"
                        />
                    </div>
                </div>

                {/* Floating Badge (Verified) */}
                <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute bottom-4 -left-4 bg-surface p-3 rounded-xl border-3 border-border flex items-center gap-3 shadow-[4px_4px_0_#1A1A1A] z-20"
                >
                    <div className="w-10 h-10 rounded-full bg-success border-2 border-border flex items-center justify-center text-white">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-black text-text uppercase">Surya Yusuf N.</span>
                        <span className="text-xs text-primary-dark font-bold font-mono">Verified</span>
                    </div>
                </motion.div>

                {/* Floating Icons - Hidden on small screens to prevent overflow */}
                <div className="absolute -top-6 -right-6 w-14 h-14 bg-accent-yellow rounded-full hidden sm:flex items-center justify-center border-3 border-border animate-bounce shadow-[4px_4px_0_#1A1A1A] z-20">
                    <Bot size={24} className="text-text" />
                </div>
                <div className="absolute top-1/2 -left-8 w-12 h-12 bg-accent-pink rounded-xl hidden sm:flex items-center justify-center border-3 border-border animate-[bounce_3s_infinite] shadow-[4px_4px_0_#1A1A1A] z-20 rotate-12">
                    <Cpu size={24} className="text-text" />
                </div>
            </div>
        </div>
      </div>

      {/* Widgets Section - Fixed: reduced spacing on mobile */}
      <div className="w-full max-w-7xl mx-auto mt-10 md:mt-20 relative z-10">
        <StatusWidgets />
      </div>
    </section>
  );
}
