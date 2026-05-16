"use client";
import { useState, FormEvent } from "react";
import { Mail, MapPin, Code, AtSign, Camera, ChevronDown, Send, CheckCircle, Home } from "lucide-react";
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
    <section id="contact" className="relative py-20 px-6 min-h-0 lg:min-h-screen flex flex-col items-center justify-center overflow-hidden bg-bg">

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 w-full items-center">
          {/* Left Column: Heading & Info */}
          <ScrollReveal>
          <div className="flex flex-col justify-center gap-8 lg:pr-10">
            <div className="space-y-4">
              <div className="brutal-tag brutal-tag-accent w-fit">
                <span className="relative flex h-3 w-3 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-border opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-border"></span>
                </span>
                Open for Work
              </div>
              {/* Fixed: smaller headline on mobile */}
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-text tracking-tighter leading-[1] uppercase drop-shadow-[4px_4px_0_#FBBF24]">
                Let&apos;s <br/>
                Collaborate.
              </h1>
              <p className="text-text-muted font-bold text-lg md:text-xl leading-relaxed max-w-md bg-surface p-4 border-3 border-border rounded-xl shadow-[4px_4px_0_#1A1A1A] mt-4">
                Have a complex ML architecture to discuss or a bold project in mind? I&apos;m ready to help you build the future.
              </p>
            </div>

            {/* Contact Details Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <a href="mailto:suryanugroho042@gmail.com" className="brutal-card p-6 cursor-pointer bg-primary-light hover:bg-primary transition-colors">
                <div className="size-12 rounded-xl bg-surface border-3 border-border flex items-center justify-center text-text mb-4 shadow-[4px_4px_0_#1A1A1A]">
                  <Mail size={24} />
                </div>
                <h3 className="text-text font-black text-xl uppercase">Email</h3>
                {/* Fixed: break-words instead of break-all */}
                <p className="text-text font-bold mt-2 text-sm md:text-base break-words">suryanugroho042@gmail.com</p>
              </a>
              <div className="brutal-card p-6 bg-accent-pink hover:bg-pink-400 transition-colors">
                <div className="size-12 rounded-xl bg-surface border-3 border-border flex items-center justify-center text-text mb-4 shadow-[4px_4px_0_#1A1A1A]">
                  <MapPin size={24} />
                </div>
                <h3 className="text-text font-black text-xl uppercase">Location</h3>
                <p className="text-text font-bold mt-2">Jakarta, Indonesia</p>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-4 mt-6">
              <a href="https://github.com/Synjoestar" target="_blank" rel="noopener noreferrer" className="brutal-button bg-surface !p-3">
                <Code size={24} />
              </a>
              <a href="https://www.linkedin.com/in/surya-yusuf-nugroho" target="_blank" rel="noopener noreferrer" className="brutal-button bg-primary !p-3">
                <AtSign size={24} />
              </a>
              <a href="https://instagram.com/utchup" target="_blank" rel="noopener noreferrer" className="brutal-button bg-accent-yellow !p-3">
                <Camera size={24} />
              </a>
            </div>
          </div>
          </ScrollReveal>

          {/* Right Column: Brutalist Form - Fixed: no min-h on mobile */}
          <ScrollReveal delay={0.2}>
          <div className="relative">
            
            <div className="brutal-card p-8 md:p-10 relative z-10 w-full min-h-0 md:min-h-[600px] flex flex-col justify-center bg-surface">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <label className="flex flex-col gap-2">
                      <span className="text-text text-base font-black uppercase">Name</span>
                      <input 
                        type="text" 
                        name="name"
                        placeholder="Your Name" 
                        required
                        className="brutal-input"
                      />
                    </label>
                    <label className="flex flex-col gap-2">
                      <span className="text-text text-base font-black uppercase">Email</span>
                      <input 
                        type="email" 
                        name="email"
                        placeholder="you@example.com" 
                        required
                        className="brutal-input"
                      />
                    </label>
                  </div>
                  
                  <label className="flex flex-col gap-2">
                    <span className="text-text text-base font-black uppercase">Subject</span>
                    <div className="relative">
                      <select name="subject" className="brutal-input w-full appearance-none cursor-pointer bg-surface font-bold">
                        <option>Project Inquiry</option>
                        <option>Technical Consultation</option>
                        <option>Speaking Opportunity</option>
                        <option>Other</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-text pointer-events-none">
                        <ChevronDown size={24} strokeWidth={3} />
                      </div>
                    </div>
                  </label>
                  
                  <label className="flex flex-col gap-2">
                    <span className="text-text text-base font-black uppercase">Message</span>
                    <textarea 
                      name="message"
                      placeholder="Tell me about your idea..." 
                      required
                      className="brutal-input min-h-[160px] resize-y"
                    ></textarea>
                  </label>
                  
                  <button 
                    type="submit" 
                    disabled={isLoading}
                    className="brutal-button bg-primary text-base sm:text-xl py-3 sm:py-4 mt-2 uppercase w-full disabled:opacity-70 disabled:cursor-not-allowed justify-center"
                  >
                    <span>{isLoading ? "Sending..." : "Send Message"}</span>
                    {!isLoading && <Send size={24} className="ml-2" />}
                  </button>
                  
                  {error && (
                    <p className="text-center font-bold text-red-600 border-2 border-red-600 bg-red-100 p-2 rounded-lg shadow-[2px_2px_0_#1A1A1A]">{error}</p>
                  )}
                  
                  <p className="text-center text-sm font-bold text-text-muted mt-2 border-3 border-border border-dashed p-2 bg-bg-alt rounded-lg">
                    Usually responds within 24 hours.
                  </p>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center p-6 text-center h-full">
                  <div className="mb-8">
                    <div className="bg-success p-6 rounded-full border-4 border-border shadow-[8px_8px_0_#1A1A1A]">
                      <CheckCircle size={64} className="text-white" strokeWidth={3} />
                    </div>
                  </div>
                  <h3 className="text-4xl font-black text-text mb-4 uppercase">Success</h3>
                  <p className="text-text-muted font-bold text-lg mb-8 max-w-sm">
                    Message received. I&apos;ll get back to you as soon as possible!
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="brutal-button bg-primary text-xl py-3 px-8 uppercase"
                  >
                    <Home size={24} className="mr-2" />
                    <span>Back to Form</span>
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
