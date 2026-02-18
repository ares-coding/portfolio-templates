"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (el) {
      el.classList.add("visible");
    }
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-neon/5 blur-[120px] animate-pulse-neon" />
      </div>

      <div
        ref={containerRef}
        className="reveal relative z-10 text-center max-w-4xl mx-auto"
      >
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon/30 bg-neon/5 mb-8">
          <span className="w-2 h-2 rounded-full bg-neon animate-pulse shadow-neon" />
          <span className="text-xs text-neon tracking-widest">
            AVAILABLE FOR OPPORTUNITIES
          </span>
        </div>

        {/* Name */}
        <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tight mb-4">
          <span className="text-white">AU</span>
          <span className="neon-text"> AMORES</span>
        </h1>

        {/* Tagline */}
        <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
          <span className="text-gray-400 text-sm md:text-base tracking-widest">
            AI/ML ENGINEER
          </span>
          <span className="text-neon/50">◆</span>
          <span className="text-gray-400 text-sm md:text-base tracking-widest">
            SOFTWARE DEVELOPER
          </span>
          <span className="text-neon/50">◆</span>
          <span className="text-gray-400 text-sm md:text-base tracking-widest">
            SECURITY SYSTEMS
          </span>
        </div>

        {/* Sub-tagline */}
        <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed">
          Building intelligent systems that bridge{" "}
          <span className="text-neon">artificial intelligence</span> and
          real-world software deployment.
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center justify-center gap-4 flex-wrap mb-12">
          <a
            href="#projects"
            className="px-8 py-3 bg-neon text-dark font-display font-bold text-sm tracking-widest hover:shadow-neon-lg transition-all duration-300 hover:scale-105 rounded"
          >
            VIEW PROJECTS
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-neon/50 text-neon font-display font-bold text-sm tracking-widest hover:bg-neon/10 hover:border-neon hover:shadow-neon transition-all duration-300 hover:scale-105 rounded"
          >
            CONTACT ME
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6">
          {[
            { label: "GitHub", icon: "GH" },
            { label: "LinkedIn", icon: "LI" },
            { label: "Email", icon: "@" },
          ].map((social) => (
            <a
              key={social.label}
              href="#"
              className="w-10 h-10 rounded-full border border-neon/20 flex items-center justify-center text-xs text-neon/60 hover:border-neon hover:text-neon hover:shadow-neon transition-all duration-300 hover:scale-110"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-gray-600 tracking-widest">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-neon/50 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
