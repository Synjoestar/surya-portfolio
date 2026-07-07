"use client";
import { useRef, useState, useCallback, useEffect } from "react";
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
        imageUrl: "/certificates/coding-camp-2025-best-capstone.webp",
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
        imageUrl: "/certificates/coding-camp-2025-completion.webp",
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

// Lightweight placeholder SVG to show while images are loading
// This renders as a subtle shimmer/skeleton instead of blank space
function getBlurDataURL() {
  return "data:image/svg+xml;base64," + btoa(
    `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="280">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#2a2a2a"/>
          <stop offset="50%" style="stop-color:#3a3a3a"/>
          <stop offset="100%" style="stop-color:#2a2a2a"/>
        </linearGradient>
      </defs>
      <rect width="400" height="280" fill="url(#g)"/>
    </svg>`
  );
}

export default function CertificatesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<Set<string>>(new Set());

  const handleImageLoad = useCallback((id: string) => {
    setImagesLoaded(prev => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Track active card index from scroll position for indicator dots
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const scrollLeft = el.scrollLeft;
      const cardWidth = el.querySelector<HTMLElement>(':scope > div:not(style)')?.offsetWidth ?? 380;
      const gap = 32; // gap-8 = 2rem = 32px
      const index = Math.round(scrollLeft / (cardWidth + gap));
      setActiveIndex(Math.min(index, certificates.length - 1));
    };

    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to a specific card when clicking a dot
  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.querySelector<HTMLElement>(`:scope > div:nth-child(${index + 1})`);
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
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
                aria-label="Scroll left"
             >
                <ChevronLeft size={24} />
             </button>
             <button 
                onClick={() => scroll("right")}
                className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 z-30 brutal-button bg-surface p-3 !rounded-full opacity-0 group-hover/container:opacity-100 hidden md:block"
                aria-label="Scroll right"
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

            {certificates.map((cert, index) => (
              <div key={cert.id} className="snap-center shrink-0 w-[260px] sm:w-[300px] md:w-[380px] group pt-4">
                <div className="brutal-card h-full flex flex-col hover:-translate-y-2 transition-transform">
                  
                  {/* Image Area */}
                  <div className="relative h-56 w-full overflow-hidden border-b-3 border-border rounded-t-[9px] bg-bg-alt">
                    {/* Skeleton shimmer while loading */}
                    {!imagesLoaded.has(cert.id) && (
                      <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-bg-alt via-surface to-bg-alt" />
                    )}
                    <Image 
                        src={cert.imageUrl} 
                        alt={cert.title}
                        fill
                        className={`object-cover transition-all duration-500 group-hover:scale-105 ${
                          imagesLoaded.has(cert.id) ? 'opacity-100' : 'opacity-0'
                        }`}
                        sizes="(max-width: 640px) 260px, (max-width: 768px) 300px, 380px"
                        loading={index < 2 ? "eager" : "lazy"}
                        placeholder="blur"
                        blurDataURL={getBlurDataURL()}
                        onLoad={() => handleImageLoad(cert.id)}
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

          {/* Dot indicators (replace swipe text) */}
          <div className="flex justify-center mt-2 gap-2 items-center">
            {certificates.map((cert, index) => (
              <button
                key={cert.id}
                onClick={() => scrollToIndex(index)}
                aria-label={`Go to certificate ${index + 1}`}
                className={`w-2.5 h-2.5 rounded-full border-2 border-border transition-all duration-300 ${
                  activeIndex === index
                    ? 'bg-primary scale-125 shadow-[2px_2px_0_#1A1A1A]'
                    : 'bg-bg-alt hover:bg-surface'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Button - Fixed: smaller on mobile */}
        <div className="flex px-4 py-8 justify-center mt-4">
            <a 
                href="/Harvard_ATS_ML_EN.pdf" 
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
