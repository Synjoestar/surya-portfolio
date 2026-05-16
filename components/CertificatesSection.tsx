"use client";
import { useRef } from "react";
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
    color: string;
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
        color: "bg-accent-pink"
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
        color: "bg-accent-yellow"
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
        color: "bg-primary-light"
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
        color: "bg-success"
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
        color: "bg-primary"
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
        color: "bg-accent-pink"
    },
];

export default function CertificatesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

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
    <section className="relative py-20 overflow-hidden bg-bg polka-dots" id="certificates">

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col gap-2 mb-12 text-center md:text-left">
          <div className="brutal-tag brutal-tag-accent mb-4 self-center md:self-start w-fit">
             Certifications
          </div>
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight text-text drop-shadow-[4px_4px_0_#9B8AFB]">
            PROVEN EXPERTISE
          </h2>
          <p className="text-text-muted font-bold text-base md:text-lg mt-2 max-w-xl mx-auto md:mx-0">
             Validated technical milestones across Machine Learning, Cloud Engineering, and Data Science.
          </p>
        </div>

        {/* Cards Container */}
        <div className="relative w-full group/container">

            {/* Scroll Buttons */}
             <button 
                onClick={() => scroll("left")}
                className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 z-30 brutal-button bg-surface p-3 !rounded-full opacity-0 group-hover/container:opacity-100 hidden md:block"
             >
                <ChevronLeft size={24} />
             </button>
             <button 
                onClick={() => scroll("right")}
                className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 z-30 brutal-button bg-surface p-3 !rounded-full opacity-0 group-hover/container:opacity-100 hidden md:block"
             >
                <ChevronRight size={24} />
             </button>

          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto pb-8 pt-6 snap-x snap-mandatory scrollbar-hide px-4"
            style={{
                scrollbarWidth: 'none',  /* Firefox */
                msOverflowStyle: 'none',  /* IE and Edge */
            }}
          >
             {/* Hide scrollbar for Chrome/Safari/Opera */}
              <style jsx>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>

            {/* Infinite Loop by duplicating the array */}
            {[...certificates, ...certificates, ...certificates].map((cert, index) => (
              <div key={`${cert.id}-${index}`} className="snap-center shrink-0 w-[260px] sm:w-[300px] md:w-[380px] group pt-4">
                <div className="brutal-card h-full flex flex-col hover:-translate-y-2 transition-transform">
                  
                  {/* Image Area */}
                  <div className="relative h-56 w-full overflow-hidden border-b-3 border-border rounded-t-[9px]">
                    <Image 
                        src={cert.imageUrl} 
                        alt={cert.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    
                    {/* Badge Area */}
                    <div className="absolute top-4 right-4 bg-surface border-3 border-border p-2 rounded-xl shadow-[4px_4px_0_#1A1A1A]">
                      <Award className="text-text w-6 h-6" />
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-6 relative flex-1 flex flex-col bg-surface rounded-b-xl">
                    {/* Floating Icon */}
                    <div className="absolute -top-10 left-6">
                      <div className={`h-16 w-16 rounded-xl ${cert.color} border-3 border-border flex items-center justify-center shadow-[4px_4px_0_#1A1A1A]`}>
                        <span className="font-mono text-2xl font-black text-text">
                            {cert.badge}
                        </span>
                      </div>
                    </div>

                    <div className="pt-8 flex flex-col gap-4 flex-1">
                      <h3 className="text-xl font-black text-text uppercase leading-tight line-clamp-2">
                        {cert.title}
                      </h3>
                      
                      <div className="flex flex-wrap items-center gap-3 font-bold text-sm text-text-muted">
                        <span className="px-3 py-1 rounded-md bg-bg-alt border-2 border-border text-text shadow-[2px_2px_0_#1A1A1A]">
                            {cert.issuer}
                        </span>
                        <span className="text-text-muted">{cert.date}</span>
                      </div>

                      <div className="mt-auto pt-6 flex justify-between items-center border-t-3 border-border border-dashed">
                        <span className="text-xs font-bold bg-bg-alt px-2 py-1 border-2 border-border rounded-md shadow-[2px_2px_0_#1A1A1A] truncate mr-2">
                            ID: {cert.credentialId}
                        </span>
                        {cert.credentialUrl ? (
                            <a 
                                href={cert.credentialUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="brutal-button !p-2 bg-primary hover:bg-primary-dark shrink-0"
                            >
                                <ExternalLink size={20} />
                            </a>
                        ) : (
                            <div className="brutal-button !p-2 bg-bg-alt shrink-0">
                                <ExternalLink size={20} />
                            </div>
                        )}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Swipe hint for mobile */}
          <div className="flex md:hidden justify-center mt-2 gap-2 items-center text-text-muted">
            <ChevronLeft size={16} />
            <span className="text-xs font-bold uppercase tracking-wider">Swipe to explore</span>
            <ChevronRight size={16} />
          </div>
        </div>

        {/* CTA Button - Fixed: smaller on mobile */}
        <div className="flex px-4 py-8 justify-center mt-4">
            <a 
                href="https://drive.google.com/file/d/1pYKjMc-x7FimIwyQof6UFcURLs73Y9YJ/view" 
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-button bg-accent-pink text-base sm:text-xl py-3 sm:py-4 px-6 sm:px-8 uppercase hover:bg-pink-400"
            >
                <Download size={24} className="mr-3" />
                <span>Download Full CV</span>
            </a>
        </div>

      </div>
    </section>
  );
}
