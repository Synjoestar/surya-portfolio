import Link from "next/link";
import { Linkedin, ArrowRight, Bot, Code, Camera } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full border-t-4 border-border bg-primary-light overflow-hidden polka-dots">

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 relative z-10">
        {/* Fixed: reduced padding/shadow on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16 bg-surface p-4 sm:p-8 border-4 border-border rounded-2xl shadow-[4px_4px_0_#1A1A1A] sm:shadow-[8px_8px_0_#1A1A1A]">
          {/* Brand Column */}
          <div className="flex flex-col gap-6 lg:pr-8">
            <div className="flex items-center gap-3 text-text group cursor-default">
              <div className="size-12 flex items-center justify-center rounded-xl bg-accent-yellow border-3 border-border shadow-[4px_4px_0_#1A1A1A] group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-[2px_2px_0_#1A1A1A] transition-all duration-300">
                <Bot size={28} strokeWidth={2.5} />
              </div>
              <h2 className="text-3xl font-black tracking-tight uppercase">
                syncode
              </h2>
            </div>
            <p className="text-text font-bold text-sm leading-relaxed border-l-4 border-border pl-4 bg-bg-alt p-3">
              Engineering intelligence for the modern web. Exploring the frontiers of Machine Learning and aesthetic design.
            </p>
            <div className="flex gap-4 mt-2">
              {/* Social Buttons */}
              <a
                href="https://www.linkedin.com/in/surya-yusuf-nugroho"
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-button !p-3 bg-surface"
              >
                <Linkedin size={20} className="text-text" />
              </a>
              <a
                href="https://github.com/Synjoestar"
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-button !p-3 bg-surface"
              >
                <Code size={20} className="text-text" />
              </a>
              <a
                href="https://instagram.com/utchup"
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-button !p-3 bg-surface"
              >
                <Camera size={20} className="text-text" />
              </a>
            </div>
          </div>

          {/* Navigation Column - Reordered to match AIDA flow */}
          <div className="flex flex-col gap-6">
            <h3 className="text-text font-black text-xl tracking-wide uppercase border-b-3 border-border pb-2 w-fit">Explore</h3>
            <nav className="flex flex-col gap-4 font-bold text-lg">
              <Link
                href="#about"
                className="text-text hover:text-primary-dark hover:translate-x-2 transition-all flex items-center gap-2"
              >
                <span className="w-2 h-2 bg-border"></span>
                About Me
              </Link>
              <Link
                href="#projects"
                className="text-text hover:text-primary-dark hover:translate-x-2 transition-all flex items-center gap-2"
              >
                <span className="w-2 h-2 bg-border"></span>
                Projects
              </Link>
              <Link
                href="#experience"
                className="text-text hover:text-primary-dark hover:translate-x-2 transition-all flex items-center gap-2"
              >
                <span className="w-2 h-2 bg-border"></span>
                Experience
              </Link>
              <Link
                href="#contact"
                className="text-text hover:text-primary-dark hover:translate-x-2 transition-all flex items-center gap-2"
              >
                <span className="w-2 h-2 bg-border"></span>
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact/Status Column */}
          <div className="flex flex-col gap-6">
            <h3 className="text-text font-black text-xl tracking-wide uppercase border-b-3 border-border pb-2 w-fit">Status</h3>
            <div className="flex flex-col gap-4">
              <div className="p-4 bg-accent-yellow border-3 border-border shadow-[4px_4px_0_#1A1A1A] rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-black text-text uppercase tracking-wider">Availability</span>
                  <span className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-success border-2 border-border"></span>
                  </span>
                </div>
                <p className="text-text text-base font-black">Open for collaboration</p>
              </div>
              <div className="p-4 bg-bg border-3 border-border shadow-[4px_4px_0_#1A1A1A] rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-black text-text uppercase tracking-wider">Location</span>
                </div>
                <p className="text-text text-base font-black">Remote / Worldwide</p>
              </div>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="flex flex-col gap-6">
            <h3 className="text-text font-black text-xl tracking-wide uppercase border-b-3 border-border pb-2 w-fit">Updates</h3>
            <p className="text-text font-bold text-sm">Get the latest ML insights and project updates.</p>
            <form className="flex flex-col gap-4">
              <div className="relative">
                <input
                  type="email"
                  className="w-full bg-surface border-3 border-border text-text font-bold text-sm rounded-lg px-4 py-3 sm:py-4 focus:outline-none focus:shadow-[4px_4px_0_#9B8AFB] transition-all placeholder:text-text-muted"
                  placeholder="email@example.com"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 bottom-2 aspect-square bg-primary border-2 border-border text-text rounded-md flex items-center justify-center hover:translate-x-[2px] hover:translate-y-[2px] transition-all shadow-[2px_2px_0_#1A1A1A]"
                >
                  <ArrowRight size={20} strokeWidth={3} />
                </button>
              </div>
              <p className="text-xs font-black text-text-muted uppercase tracking-wider bg-bg-alt w-fit px-2 border-2 border-border">No spam, just tech.</p>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm font-bold bg-surface p-4 sm:p-6 border-4 border-border rounded-xl shadow-[4px_4px_0_#1A1A1A] sm:shadow-[6px_6px_0_#1A1A1A]">
          <p className="text-text text-sm sm:text-base">
            © {new Date().getFullYear()} Surya Yusuf Nugroho. Built with <span className="text-primary-dark font-black uppercase px-1 bg-primary-light border-2 border-border">code</span> & caffeine.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-text hover:underline decoration-2 underline-offset-4 transition-colors">Privacy Policy</a>
            <a href="#" className="text-text hover:underline decoration-2 underline-offset-4 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
