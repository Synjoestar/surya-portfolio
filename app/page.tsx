"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Wrench, Terminal, Cpu, Loader2 } from "lucide-react";

export default function UnderConstruction() {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background-dark text-white">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 hero-grid"></div>
        {/* Animated Glow in the center */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] bg-primary/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        {/* Icons container */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 relative flex items-center justify-center w-32 h-32"
        >
          {/* Outer dashed spinning ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-dashed border-primary/40"
          />
          
          {/* Inner components */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute w-20 h-20 rounded-full border border-white/10 flex items-center justify-center bg-background-dark/50 backdrop-blur-md"
          >
             <Wrench className="w-8 h-8 text-primary/80" />
          </motion.div>
          
          {/* Floating icons around */}
          <motion.div 
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 bg-surface-dark p-3 rounded-2xl border border-white/10 glass-panel"
          >
            <Terminal className="w-5 h-5 text-white/70" />
          </motion.div>

          <motion.div 
            animate={{ y: [5, -5, 5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-2 -left-6 bg-surface-dark p-3 rounded-2xl border border-white/10 glass-panel"
          >
            <Cpu className="w-5 h-5 text-primary" />
          </motion.div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="glass-panel p-8 md:p-12 rounded-[2rem] max-w-2xl border-white/10 backdrop-blur-xl relative overflow-hidden"
        >
          {/* Inner subtle glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-mono mb-6">
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>SYSTEM UPGRADE IN PROGRESS</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 font-sans">
            <span className="text-glow">syncode.site</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium text-white/90 mb-6">
            Lagi proses pembuatan ulang{dots}
          </h2>
          
          <p className="text-white/60 text-lg md:text-xl leading-relaxed font-light mb-8 max-w-lg mx-auto">
            We are completely architecting the system to bring you a better, faster, and more aesthetic experience. 
            Stay tuned.
          </p>
          
          <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-full bg-gradient-to-r from-transparent via-primary to-transparent"
            />
          </div>
        </motion.div>
        
        {/* Footer info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 text-sm text-white/40 font-mono"
        >
          &copy; {new Date().getFullYear()} Syncode. All systems nominal.
        </motion.div>
      </div>
    </div>
  );
}
