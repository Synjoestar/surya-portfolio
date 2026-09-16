"use client";
import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export default function ScrollReveal({ 
  children, 
  className = "", 
  delay = 0,
  direction = "up" 
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(() => {
    return typeof window !== "undefined" && !("IntersectionObserver" in window);
  });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { rootMargin: "-50px", threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    if (isVisible) return "none";
    switch (direction) {
      case "up": return "translate3d(0, 40px, 0)";
      case "down": return "translate3d(0, -40px, 0)";
      case "left": return "translate3d(40px, 0, 0)";
      case "right": return "translate3d(-40px, 0, 0)";
    }
  };

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity 0.6s cubic-bezier(0.25, 0.1, 0.25, 1) ${delay}s, transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1) ${delay}s`,
      }}
      className={className}
    >
      {children}
    </div>
  );
}
