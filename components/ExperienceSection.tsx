"use client";
import { History, GraduationCap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6 relative z-10 text-text">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
        <h2 className="text-4xl md:text-5xl font-black mb-12 flex items-center gap-3 uppercase drop-shadow-[2px_2px_0_#9B8AFB]">
            <History className="text-primary-dark" size={40} />
            Journey
        </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
        <div className="relative pl-8 md:pl-0">
            {/* Center Line for Desktop */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-2 bg-border -translate-x-1/2 hidden md:block"></div>
            {/* Left Line for Mobile */}
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-border md:hidden"></div>
            
            {/* Timeline Item 1 (Right) - Education */}
            <div className="relative mb-12 md:w-1/2 md:ml-auto md:pl-12 group">
                <div className="absolute left-[-12px] md:left-[-12px] top-4 w-6 h-6 rounded-full bg-accent-yellow border-3 border-border z-10 shadow-[2px_2px_0_#1A1A1A]"></div>
                <div className="brutal-card p-6 rounded-xl hover:-translate-y-1 hover:shadow-[6px_6px_0_#1A1A1A] transition-transform">
                    <div className="inline-block bg-primary-light border-2 border-border px-3 py-1 text-sm font-bold rounded-full mb-3 shadow-[2px_2px_0_#1A1A1A]">
                        2023 - Present
                    </div>
                    <h3 className="text-xl font-bold text-text flex items-center gap-2">
                        <GraduationCap size={20} /> Teknik Komputer Jaringan
                    </h3>
                    <h4 className="text-base font-bold text-text-muted mb-4">SMKN 2 Kota Bekasi</h4>
                    <p className="text-text font-medium leading-relaxed">
                        Currently pursuing vocational education in Computer Network Engineering. Developing skills in networking, system administration, and programming while exploring machine learning and AI on the side.
                    </p>
                </div>
            </div>

            {/* Timeline Item 2 (Left) */}
            <div className="relative mb-12 md:w-1/2 md:mr-auto md:pr-12 md:text-right group">
                {/* Dot position for Left alignment (Right side of the block, which is center of screen) */}
                <div className="absolute left-[-12px] md:right-[-12px] md:left-auto top-4 w-6 h-6 rounded-full bg-accent-pink border-3 border-border z-10 shadow-[2px_2px_0_#1A1A1A]"></div>
                
                <div className="brutal-card p-6 rounded-xl hover:-translate-y-1 hover:shadow-[6px_6px_0_#1A1A1A] transition-transform">
                    <div className="inline-block bg-success text-white border-2 border-border px-3 py-1 text-sm font-bold rounded-full mb-3 shadow-[2px_2px_0_#1A1A1A]">
                        2025
                    </div>
                    <h3 className="text-xl font-bold text-text flex md:justify-end items-center gap-2">
                        <GraduationCap size={20} className="md:order-2" /> 
                        <span className="md:order-1">Machine Learning Bootcamp</span>
                    </h3>
                    <h4 className="text-base font-bold text-text-muted mb-4">Coding Camp powered by DBS Foundation</h4>
                    <p className="text-text font-medium leading-relaxed">
                        Completed intensive machine learning bootcamp covering supervised and unsupervised learning, deep learning fundamentals, and real-world ML deployment. Built end-to-end ML projects from data preprocessing to model deployment.
                    </p>
                </div>
            </div>

        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
