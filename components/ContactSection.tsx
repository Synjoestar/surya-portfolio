"use client";
import { useState, FormEvent } from "react";
import { Mail, MapPin, Code, AtSign, Camera, ChevronDown, Send, CheckCircle, Home } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/mbdllzle", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setError("Failed to send message. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 px-6 min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[80px] opacity-40"></div>
        <div className="absolute bottom-[-200px] right-[-100px] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[80px] opacity-30"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
          {/* Left Column: Heading & Info */}
          <ScrollReveal>
          <div className="flex flex-col justify-center gap-8 lg:pr-10">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-primary text-xs font-bold uppercase tracking-wider">Open for Work</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[1.1]">
                Let's <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Collaborate.</span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-md">
                Have a complex ML architecture to discuss or a bold project in mind? I'm ready to help you build the future.
              </p>
            </div>

            {/* Contact Details Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <a href="mailto:suryanugroho042@gmail.com" className="group glass-panel p-5 rounded-xl hover:bg-white/5 transition-all cursor-pointer">
                <div className="size-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <h3 className="text-white font-bold text-lg">Email</h3>
                <p className="text-gray-400 text-sm mt-1">suryanugroho042@gmail.com</p>
              </a>
              <div className="group glass-panel p-5 rounded-xl hover:bg-white/5 transition-all cursor-pointer">
                <div className="size-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform">
                  <MapPin size={24} />
                </div>
                <h3 className="text-white font-bold text-lg">Location</h3>
                <p className="text-gray-400 text-sm mt-1">Jakarta, Indonesia</p>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-4 mt-4">
              <a href="https://github.com/Synjoestar" target="_blank" rel="noopener noreferrer" className="size-12 rounded-full glass-panel flex items-center justify-center text-white hover:text-primary hover:border-primary/50 transition-all group">
                <Code size={24} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.linkedin.com/in/surya-yusuf-nugroho" target="_blank" rel="noopener noreferrer" className="size-12 rounded-full glass-panel flex items-center justify-center text-white hover:text-primary hover:border-primary/50 transition-all group">
                <AtSign size={24} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://instagram.com/utchup" target="_blank" rel="noopener noreferrer" className="size-12 rounded-full glass-panel flex items-center justify-center text-white hover:text-primary hover:border-primary/50 transition-all group">
                <Camera size={24} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
          </ScrollReveal>

          {/* Right Column: Glass Form */}
          <ScrollReveal delay={0.2}>
          <div className="relative">
            {/* Glow effect behind form */}
            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full transform scale-90"></div>
            
            <div className="glass-panel p-8 md:p-10 rounded-2xl relative z-10 w-full shadow-2xl shadow-black/50 overflow-hidden min-h-[600px] flex flex-col justify-center">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 fade-in">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <label className="flex flex-col gap-2">
                      <span className="text-white text-sm font-medium">Name</span>
                      <input 
                        type="text" 
                        name="name"
                        placeholder="Your Name" 
                        required
                        className="glass-input w-full rounded-lg h-12 px-4 text-white placeholder:text-white/20 focus:ring-0"
                      />
                    </label>
                    <label className="flex flex-col gap-2">
                      <span className="text-white text-sm font-medium">Email</span>
                      <input 
                        type="email" 
                        name="email"
                        placeholder="you@example.com" 
                        required
                        className="glass-input w-full rounded-lg h-12 px-4 text-white placeholder:text-white/20 focus:ring-0"
                      />
                    </label>
                  </div>
                  
                  <label className="flex flex-col gap-2">
                    <span className="text-white text-sm font-medium">Subject</span>
                    <div className="relative">
                      <select name="subject" className="glass-input w-full rounded-lg h-12 px-4 text-white focus:ring-0 appearance-none cursor-pointer bg-[#18181b]">
                        <option>Project Inquiry</option>
                        <option>Technical Consultation</option>
                        <option>Speaking Opportunity</option>
                        <option>Other</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none">
                        <ChevronDown size={16} />
                      </div>
                    </div>
                  </label>
                  
                  <label className="flex flex-col gap-2">
                    <span className="text-white text-sm font-medium">Message</span>
                    <textarea 
                      name="message"
                      placeholder="Tell me about your idea..." 
                      required
                      className="glass-input w-full rounded-lg min-h-[160px] p-4 text-white placeholder:text-white/20 focus:ring-0 resize-y"
                    ></textarea>
                  </label>
                  
                  <button 
                    type="submit" 
                    disabled={isLoading}
                    className="neon-button mt-2 flex w-full cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-lg h-14 bg-primary text-[#181511] text-base font-bold leading-normal tracking-[0.015em] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span>{isLoading ? "Sending..." : "Send Message"}</span>
                    {!isLoading && <Send size={18} />}
                  </button>
                  
                  {error && (
                    <p className="text-center text-sm text-red-400">{error}</p>
                  )}
                  
                  <p className="text-center text-xs text-white/30 mt-2">
                    Usually responds within 24 hours.
                  </p>
                </form>
              ) : (
                <div className="absolute inset-0 z-50 flex flex-col items-center justify-center p-6 text-center animate-in fade-in zoom-in duration-500">
                  <div className="relative flex items-center justify-center mb-6">
                    <div className="absolute inset-0 bg-primary/30 blur-2xl rounded-full animate-pulse"></div>
                    <div className="relative bg-[#18181b] p-4 rounded-full border border-primary/40 shadow-[0_0_25px_rgba(245,159,10,0.4)]">
                      <CheckCircle size={48} className="text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">Transmission Sent</h3>
                  <p className="text-white/60 text-sm md:text-base max-w-xs mb-8 leading-relaxed">
                    Thanks for reaching out. I've received your data and will process your request shortly.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="neon-button inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-primary text-background-dark font-bold text-sm uppercase tracking-wider hover:scale-105 transition-transform"
                  >
                    <span>Back to Form</span>
                    <Home size={18} />
                  </button>
                </div>
              )}
            </div>
          </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
