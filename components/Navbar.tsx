"use client";
import Link from "next/link";
import { Terminal, Send, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-4 border-border bg-primary">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <button onClick={scrollToTop} className="flex items-center gap-2 group cursor-pointer z-50 bg-surface px-4 py-1 border-3 border-border shadow-[4px_4px_0_#1A1A1A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#1A1A1A] transition-all">
              <span className="text-text group-hover:animate-spin">
                  <Terminal size={24} strokeWidth={3} />
              </span>
            <span className="font-black text-xl tracking-tight text-text uppercase">
              Syncode
            </span>
          </button>

          {/* Desktop Nav - Reordered to match AIDA flow */}
          <nav className="hidden md:flex items-center gap-8 text-base font-black text-text uppercase bg-surface px-6 py-2 border-3 border-border shadow-[4px_4px_0_#1A1A1A]">
            <Link href="#about" className="hover:text-primary-dark hover:underline decoration-4 underline-offset-4 transition-all">
              About
            </Link>
            <Link href="#projects" className="hover:text-primary-dark hover:underline decoration-4 underline-offset-4 transition-all">
              Projects
            </Link>
            <Link href="#experience" className="hover:text-primary-dark hover:underline decoration-4 underline-offset-4 transition-all">
              Experience
            </Link>
            <Link href="#certificates" className="hover:text-primary-dark hover:underline decoration-4 underline-offset-4 transition-all">
              Certs
            </Link>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden z-50 p-2 text-text bg-surface border-3 border-border shadow-[4px_4px_0_#1A1A1A] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_#1A1A1A]"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} strokeWidth={3} /> : <Menu size={24} strokeWidth={3} />}
          </button>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="#contact" className="brutal-button bg-accent-yellow hover:bg-yellow-300 !py-2">
              <span className="uppercase">Contact</span>
              <Send size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Reordered to match AIDA flow */}
      <div
        className={`fixed inset-0 z-40 bg-bg transition-all duration-300 md:hidden flex flex-col justify-center ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="absolute inset-0 polka-dots opacity-50"></div>
        <nav className="relative flex flex-col items-center justify-center gap-6 p-6 w-full max-w-sm mx-auto">
          <Link
            href="#about"
            onClick={closeMenu}
            className="w-full text-center brutal-card bg-primary-light py-4 text-2xl font-black uppercase transition-transform hover:-translate-y-1"
          >
            About
          </Link>
          <Link
            href="#projects"
            onClick={closeMenu}
            className="w-full text-center brutal-card bg-accent-pink py-4 text-2xl font-black uppercase transition-transform hover:-translate-y-1"
          >
            Projects
          </Link>
          <Link
            href="#experience"
            onClick={closeMenu}
            className="w-full text-center brutal-card bg-accent-yellow py-4 text-2xl font-black uppercase transition-transform hover:-translate-y-1"
          >
            Experience
          </Link>
          <Link
            href="#certificates"
            onClick={closeMenu}
            className="w-full text-center brutal-card bg-success py-4 text-2xl font-black uppercase transition-transform hover:-translate-y-1"
          >
            Certificates
          </Link>
          <Link
            href="#contact"
            onClick={closeMenu}
            className="w-full flex justify-center items-center brutal-card bg-primary py-4 text-2xl font-black uppercase mt-4 transition-transform hover:-translate-y-1"
          >
            <span>Contact Me</span>
            <Send size={24} className="ml-3" />
          </Link>
        </nav>
      </div>
    </>
  );
}
