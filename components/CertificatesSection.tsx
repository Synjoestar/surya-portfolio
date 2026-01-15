"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Download, ExternalLink, Award } from "lucide-react";

interface Certificate {
    id: string;
    title: string;
    issuer: string;
    date: string;
    credentialId: string;
    category: "All" | "Deep Learning" | "NLP" | "Data Engineering" | "Generative AI" | "Machine Learning";
    imageUrl: string;
    pdfUrl?: string; // Optional URL for the PDF download or verification
    credentialUrl?: string; // Link to the digital credential/certificate
    badge: string; // Short acronym for the card icon (e.g., "ML", "AI")
}

const certificates: Certificate[] = [
    {
        id: "1",
        title: "Best Capstone Project - Coding Camp 2025",
        issuer: "Coding Camp",
        date: "2025",
        credentialId: "MS118D5Y0628",
        category: "Generative AI",
        imageUrl: "/certificates/[Coding Camp 2025 - SMK] Best Capstone Project - MS118D5Y0628.webp",
        badge: "AI",
    },
    {
        id: "2",
        title: "Coding Camp 2025 Completion",
        issuer: "Coding Camp",
        date: "2025",
        credentialId: "MS118D5Y0628-1",
        category: "Machine Learning",
        imageUrl: "/certificates/[Coding Camp 2025] Certificate - MS118D5Y0628-1.webp",
        badge: "CC",
    },
    {
        id: "3",
        title: "Belajar Pengembangan Machine Learning",
        issuer: "Dicoding",
        date: "2024",
        credentialId: "RVZKW03MMZD5",
        category: "Deep Learning",
        imageUrl: "/certificates/belajarpengembanganmachinelearning-1.webp",
        credentialUrl: "https://www.dicoding.com/certificates/RVZKW03MMZD5",
        badge: "DL",
    },
    {
        id: "4",
        title: "Machine Learning Terapan",
        issuer: "Dicoding",
        date: "2024",
        credentialId: "0LZ0RKJ93P65",
        category: "Machine Learning",
        imageUrl: "/certificates/sertifikat_course_319_4265038_080625125027-1.webp",
        credentialUrl: "https://www.dicoding.com/certificates/0LZ0RKJ93P65",
        badge: "ML",
    },
    {
        id: "5",
        title: "Belajar Fundamental Pemrosesan Data",
        issuer: "Dicoding",
        date: "2024",
        credentialId: "98XWENQ0LXM3",
        category: "Data Engineering",
        imageUrl: "/certificates/belajarfundamentalpemrosesandata-1.webp",
        credentialUrl: "https://www.dicoding.com/certificates/98XWENQ0LXM3",
        badge: "DE",
    },
     {
        id: "6",
        title: "Belajar Analisis Data dengan Python",
        issuer: "Dicoding",
        date: "2024",
        credentialId: "GRX53DGJRZ0M",
        category: "All",
        imageUrl: "/certificates/sertifikat_course_555_4265038_020225083715-1.webp",
        credentialUrl: "https://www.dicoding.com/certificates/GRX53DGJRZ0M",
        badge: "DA",
    },
];
export default function CertificatesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  /* Removed filtering logic as per request */

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400; // Adjust as needed
      scrollRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative py-20 overflow-hidden bg-background-dark" id="certificates">
      {/* Background Ambience */}
      <div className="absolute top-[20%] left-[20%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col gap-2 mb-12 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-mono text-primary tracking-widest uppercase">Certifications</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-white font-display">
            PROVEN <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-200">EXPERTISE</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base font-mono mt-2 max-w-xl">
             // Validated technical milestones across Machine Learning, Cloud Engineering, and Data Science.
          </p>
        </div>

        {/* Filter Buttons */}
        {/* Filter Buttons Removed */}

        {/* Cards Container */}
        <div className="relative w-full group/container">
            {/* Scroll Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-r from-background-dark to-transparent z-20 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-l from-background-dark to-transparent z-20 pointer-events-none"></div>

            {/* Scroll Buttons */}
             <button 
                onClick={() => scroll("left")}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/50 border border-white/10 text-white hover:bg-primary hover:text-black transition-all opacity-0 group-hover/container:opacity-100 hidden md:block"
             >
                <ChevronLeft size={24} />
             </button>
             <button 
                onClick={() => scroll("right")}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/50 border border-white/10 text-white hover:bg-primary hover:text-black transition-all opacity-0 group-hover/container:opacity-100 hidden md:block"
             >
                <ChevronRight size={24} />
             </button>



          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-12 pt-4 snap-x snap-mandatory scrollbar-hide"
            style={{
                scrollbarWidth: 'none',  /* Firefox */
                msOverflowStyle: 'none',  /* IE and Edge */
            }}
          >
             {/* Hide scrollbar for Chrome/Safari/Opera */
              <style jsx>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
            }

            {/* Infinite Loop by duplicating the array */}
            {[...certificates, ...certificates, ...certificates].map((cert, index) => (
              <div key={`${cert.id}-${index}`} className="snap-center shrink-0 w-[300px] md:w-[380px] group">
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:shadow-[0_0_30px_rgba(245,159,10,0.15)] transition-all duration-500 overflow-hidden relative flex flex-col">
                  
                  {/* Image Area */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image 
                        src={cert.imageUrl} 
                        alt={cert.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
                    
                    {/* Badge */}
                    <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md border border-white/10 p-1.5 rounded-lg">
                      <Award className="text-primary w-5 h-5 drop-shadow-[0_0_8px_rgba(245,159,10,0.8)]" />
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-6 relative flex-1 flex flex-col">
                    {/* Floating Icon */}
                    <div className="absolute -top-10 left-6">
                      <div className="h-12 w-12 rounded-xl bg-[#1a1610] border border-white/10 flex items-center justify-center shadow-lg group-hover:border-primary/50 transition-colors duration-300">
                        <span className="font-mono text-xl font-bold text-primary">
                            {cert.badge}
                        </span>
                      </div>
                    </div>

                    <div className="pt-4 flex flex-col gap-3 flex-1">
                      <h3 className="text-xl font-bold text-white leading-snug group-hover:text-primary transition-colors line-clamp-2">
                        {cert.title}
                      </h3>
                      
                      <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                        <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-300">
                            {cert.issuer}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                        <span>{cert.date}</span>
                      </div>

                      <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center group/btn cursor-pointer">
                        <span className="text-xs text-gray-500 font-mono tracking-wider truncate mr-2">
                            ID: {cert.credentialId}
                        </span>
                        {cert.credentialUrl ? (
                            <a 
                                href={cert.credentialUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="h-8 w-8 shrink-0 rounded-full bg-white/5 flex items-center justify-center group-hover/btn:bg-primary group-hover/btn:text-background-dark transition-all duration-300"
                            >
                                <ExternalLink size={16} />
                            </a>
                        ) : (
                            <div className="h-8 w-8 shrink-0 rounded-full bg-white/5 flex items-center justify-center group-hover/btn:bg-primary group-hover/btn:text-background-dark transition-all duration-300">
                                <ExternalLink size={16} />
                            </div>
                        )}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Scroll Indicator */}
        <div className="flex justify-center items-center gap-3 py-6 opacity-60">
            <ChevronLeft className="text-primary animate-pulse w-5 h-5" />
            <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">Scroll to explore</span>
            <ChevronRight className="text-primary animate-pulse w-5 h-5" />
        </div>

        {/* CTA Button */}
        <div className="flex px-4 py-8 justify-center">
            <a 
                href="https://drive.google.com/file/d/1pYKjMc-x7FimIwyQof6UFcURLs73Y9YJ/view" 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-transparent border border-primary/50 text-white gap-3 font-bold leading-normal tracking-[0.015em] transition-all hover:bg-primary/10 hover:shadow-[0_0_20px_rgba(245,159,10,0.15)] active:scale-95"
            >
                <Download className="transition-transform group-hover:translate-y-1 group-hover:text-primary w-6 h-6" />
                <span className="truncate group-hover:text-primary transition-colors">Download Full CV</span>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-primary/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
            </a>
        </div>

      </div>
    </section>
  );
}
