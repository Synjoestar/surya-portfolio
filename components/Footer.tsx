import Link from "next/link";
import { Linkedin, ArrowRight, Bot, Code, Camera } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-[#393328] bg-surface-dark/50 overflow-hidden">
      {/* Abstract Background Glows */}
      <div 
        className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none mix-blend-overlay" 
        aria-label="Subtle noise texture for footer"
      ></div>
      <div className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="flex flex-col gap-6 lg:pr-8">
            <div className="flex items-center gap-3 text-white group cursor-default">
              <div className="size-8 flex items-center justify-center rounded-lg bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-black transition-all duration-500">
                <Bot size={20} />
              </div>
              <h2 className="text-2xl font-bold tracking-tight">
                syncode<span className="text-primary">.site</span>
              </h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Engineering intelligence for the modern web. Exploring the frontiers of Machine Learning and aesthetic design.
            </p>
            <div className="flex gap-4 mt-2">
              {/* Social Buttons with Glow Effect */}
              <a
                href="https://www.linkedin.com/in/surya-yusuf-nugroho"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-10 h-10 rounded-lg bg-[#2a261e] border border-[#393328] hover:border-primary/50 hover:bg-surface-dark transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <Linkedin size={18} className="text-gray-400 group-hover:text-primary relative z-10 transition-colors" />
              </a>
              <a
                href="https://github.com/Synjoestar"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-10 h-10 rounded-lg bg-[#2a261e] border border-[#393328] hover:border-primary/50 hover:bg-surface-dark transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <Code size={18} className="text-gray-400 group-hover:text-primary relative z-10 transition-colors" />
              </a>
              <a
                href="https://instagram.com/utchup"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-10 h-10 rounded-lg bg-[#2a261e] border border-[#393328] hover:border-primary/50 hover:bg-surface-dark transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <Camera size={18} className="text-gray-400 group-hover:text-primary relative z-10 transition-colors" />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white font-bold text-lg tracking-wide">Explore</h3>
            <nav className="flex flex-col gap-4">
              <Link
                href="#projects"
                className="text-gray-400 hover:text-primary hover:translate-x-2 transition-all duration-300 text-sm font-medium w-fit flex items-center gap-2 group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-primary transition-colors"></span>
                Latest Projects
              </Link>
              <Link
                href="#about"
                className="text-gray-400 hover:text-primary hover:translate-x-2 transition-all duration-300 text-sm font-medium w-fit flex items-center gap-2 group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-primary transition-colors"></span>
                About Me
              </Link>
              <Link
                href="#experience"
                className="text-gray-400 hover:text-primary hover:translate-x-2 transition-all duration-300 text-sm font-medium w-fit flex items-center gap-2 group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-primary transition-colors"></span>
                Experience
              </Link>
              <Link
                href="#contact"
                className="text-gray-400 hover:text-primary hover:translate-x-2 transition-all duration-300 text-sm font-medium w-fit flex items-center gap-2 group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-primary transition-colors"></span>
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact/Status Column */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white font-bold text-lg tracking-wide">Status</h3>
            <div className="flex flex-col gap-4">
              <div className="p-4 rounded-xl bg-[#2a261e]/50 border border-[#393328] backdrop-blur-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Availability</span>
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                </div>
                <p className="text-white text-sm font-medium">Open for collaboration</p>
              </div>
              <div className="p-4 rounded-xl bg-[#2a261e]/50 border border-[#393328] backdrop-blur-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Location</span>
                  <span className="material-symbols-outlined text-[16px] text-gray-500">public</span>
                </div>
                <p className="text-white text-sm font-medium">Remote / Worldwide</p>
              </div>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white font-bold text-lg tracking-wide">Stay Connected</h3>
            <p className="text-gray-400 text-sm">Get the latest ML insights and project updates.</p>
            <form className="flex flex-col gap-3">
              <div className="relative">
                <input
                  type="email"
                  className="w-full bg-[#181511] border border-[#393328] text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-gray-600"
                  placeholder="email@example.com"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 aspect-square bg-primary text-background-dark rounded-md flex items-center justify-center hover:brightness-110 transition-all"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
              <p className="text-xs text-gray-600">No spam, just tech.</p>
            </form>
          </div>
        </div>

        {/* Divider with neon accent */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#393328] to-transparent mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Surya Yusuf Nugroho. Built with <span className="text-primary">code</span> & caffeine.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
