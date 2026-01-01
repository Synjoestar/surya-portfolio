"use client";
import { History, Briefcase, GraduationCap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6 relative z-10 text-white">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <History className="text-primary" size={32} />
            Journey
        </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
        <div className="relative pl-8 md:pl-0">
            {/* Center Line for Desktop */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent -translate-x-1/2 hidden md:block"></div>
            {/* Left Line for Mobile */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent md:hidden"></div>
            
            {/* Timeline Item 1 (Right) - Education */}
            <div className="relative mb-12 md:w-1/2 md:ml-auto md:pl-12 group">
                <div className="absolute left-[-5px] md:left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_#f59f0a] z-10"></div>
                <div className="glass-panel p-6 rounded-xl hover:border-primary/30 transition-colors">
                    <span className="text-xs font-mono text-primary mb-1 block">2023 - Present</span>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <GraduationCap size={16} /> Teknik Komputer Jaringan
                    </h3>
                    <h4 className="text-sm text-gray-400 mb-4">SMKN 2 Kota Bekasi</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Currently pursuing vocational education in Computer Network Engineering. Developing skills in networking, system administration, and programming while exploring machine learning and AI on the side.
                    </p>
                </div>
            </div>

            {/* Timeline Item 2 (Left) */}
            <div className="relative mb-12 md:w-1/2 md:mr-auto md:pr-12 md:text-right group">
                {/* Dot position for Left alignment (Right side of the block, which is center of screen) */}
                <div className="absolute left-[-5px] md:right-[-5px] md:left-auto top-2 w-2.5 h-2.5 rounded-full bg-surface-dark border-2 border-primary z-10"></div>
                
                <div className="glass-panel p-6 rounded-xl hover:border-primary/30 transition-colors">
                    <span className="text-xs font-mono text-primary mb-1 block">2025</span>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2 md:justify-end">
                        <GraduationCap size={16} /> Machine Learning Bootcamp
                    </h3>
                    <h4 className="text-sm text-gray-400 mb-4">Coding Camp powered by DBS Foundation</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
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
