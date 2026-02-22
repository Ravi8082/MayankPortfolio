"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Download,
  ArrowRight,
} from "lucide-react";

const ThreeScene = dynamic(() => import("./three-scene"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 z-0 bg-background" />,
});

const titles = [
  "Cybersecurity Analyst",
  "Research Analyst",
  "Python Developer",
  "System Administrator",
  "AI Enthusiast",
];

export default function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [count, setCount] = useState(0);

  // Typewriter
  useEffect(() => {
    const current = titles[titleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(current.slice(0, displayText.length + 1));
          if (displayText.length === current.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setDisplayText(current.slice(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setTitleIndex((prev) => (prev + 1) % titles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  // Animated counter
  useEffect(() => {
    const target = 2025;
    const duration = 2000;
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress >= 1) clearInterval(interval);
    }, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* 3D Background */}
      <ThreeScene />

      {/* Multiple gradient layers */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/70 via-transparent to-background z-[1]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40 z-[1]" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-[1]" />

      {/* Scan line effect */}
      <div className="pointer-events-none absolute inset-0 scan-line z-[2]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Enhanced Terminal-style greeting with animation */}
        <div
          className="animate-slide-up relative"
          style={{ animationDelay: "0.2s", opacity: 0 }}
        >
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-sm opacity-70 animate-pulse"></div>
          <Link href="/contact" className="relative mb-6 inline-flex items-center gap-3 rounded-full border border-primary/30 bg-gradient-to-r from-primary/10 to-accent/10 px-6 py-3 backdrop-blur-md hover:border-primary/50 hover:from-primary/20 hover:to-accent/20 transition-all duration-300 group">
            <div className="relative">
              <span className="relative h-2 w-2 rounded-full bg-primary pulse-dot"></span>
              <span className="absolute inset-0 h-2 w-2 rounded-full bg-primary animate-ping opacity-75"></span>
            </div>
            <span className="font-mono text-xs tracking-widest text-primary group-hover:text-accent transition-colors">
              AVAILABLE FOR OPPORTUNITIES
            </span>
            <div className="h-4 w-px bg-primary/30"></div>
            <span className="text-xs text-primary/70 animate-pulse">●</span>
          </Link>
        </div>

        {/* Enhanced Glitch Name with floating effects */}
        <div
          className="animate-slide-up relative"
          style={{ animationDelay: "0.4s", opacity: 0 }}
        >
          {/* Floating particles around name */}
          <div className="absolute inset-0 -m-20">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute h-1 w-1 rounded-full bg-primary animate-float opacity-30"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + (i % 3) * 20}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${3 + i}s`
                }}
              />
            ))}
          </div>
          
          <h1 className="relative mb-2 text-6xl font-bold leading-none text-foreground md:text-8xl lg:text-9xl text-balance">
            <span className="block text-2xl font-normal text-muted-foreground mb-3 md:text-3xl animate-pulse">
              {"Hello, I'm"}
            </span>
            <span className="relative inline-block">
              <span className="gradient-text relative">
                Mayank
                {/* Glow effect */}
                <span className="absolute inset-0 blur-xl opacity-30 gradient-text"></span>
              </span>
            </span>{" "}
            <span className="relative inline-block text-primary neon-text">
              Raj
              {/* Neon glow */}
              <span className="absolute inset-0 blur-lg opacity-50 text-primary"></span>
            </span>
          </h1>
        </div>

        {/* Typewriter role */}
        <div
          className="animate-slide-up"
          style={{ animationDelay: "0.6s", opacity: 0 }}
        >
          <div className="mb-8 flex items-center justify-center gap-2">
            <span className="font-mono text-lg text-muted-foreground md:text-2xl">
              {"$"}
            </span>
            <span className="font-mono text-lg text-accent md:text-2xl neon-text-accent">
              {displayText}
            </span>
            <span className="inline-block h-7 w-0.5 bg-primary animate-glow-pulse" />
          </div>
        </div>

        {/* Description */}
        <div
          className="animate-slide-up"
          style={{ animationDelay: "0.8s", opacity: 0 }}
        >
          <p className="mx-auto mb-12 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            BCA graduate specializing in{" "}
            <span className="text-foreground font-medium">Cybersecurity</span>,{" "}
            <span className="text-foreground font-medium">System Administration</span>, and{" "}
            <span className="text-foreground font-medium">AI Development</span>.
            Building secure digital solutions since {count || "..."}.
          </p>
        </div>

        {/* Enhanced CTA Buttons with gradient effects */}
        <div
          className="animate-slide-up relative"
          style={{ animationDelay: "1s", opacity: 0 }}
        >
          {/* Background glow for buttons */}
          <div className="absolute inset-0 -m-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl blur-xl opacity-50"></div>
          
          <div className="relative flex flex-wrap items-center justify-center gap-6">
            <a
              href="https://drive.google.com/file/d/1gVB9jtN-HAvFl5ISM7R08PAL2BcM3Xwy/view?usp=sharing"
              download="MayankRaj_Resume.pdf"
              className="group relative flex items-center gap-3 rounded-2xl bg-gradient-to-r from-primary to-accent px-8 py-4 text-sm font-semibold text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-primary/90 hover:to-accent/90"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Download className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
              <span>Download Resume</span>
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-20 blur transition-opacity"></div>
            </a>
            <a
              href="#projects"
              className="group relative flex items-center gap-3 rounded-2xl border-2 border-border bg-card/50 px-8 py-4 text-sm font-semibold text-foreground backdrop-blur-sm hover:border-primary/50 hover:bg-card/80 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
            >
              <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">View Projects</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 text-primary" />
              <div className="absolute inset-0 rounded-2xl border-2 border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></div>
            </a>
          </div>
        </div>

        {/* Social links + quick stats row */}
        <div
          className="animate-slide-up"
          style={{ animationDelay: "1.2s", opacity: 0 }}
        >
          <div className="mt-14 flex flex-col items-center gap-8 sm:flex-row sm:justify-center">
            {/* Enhanced Socials with gradient effects */}
            <div className="relative flex items-center gap-3">
              {/* Background glow */}
              <div className="absolute inset-0 -m-4 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 rounded-full blur-sm"></div>
              
              {[
                {
                  icon: Mail,
                  href: "mailto:mayank12345klg@gmail.com",
                  label: "Email",
                  color: "from-red-500/20 to-orange-500/20",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/mayank-raj11",
                  label: "LinkedIn",
                  color: "from-blue-500/20 to-cyan-500/20",
                },
                {
                  icon: Github,
                  href: "https://github.com/Mayank8092",
                  label: "GitHub",
                  color: "from-gray-500/20 to-slate-500/20",
                },
                {
                  icon: Twitter,
                  href: "https://x.com/MayankRaj197560",
                  label: "X (Twitter)",
                  color: "from-black/20 to-gray-800/20",
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/mayank_sinha.a?igsh=cXZrejBxZGVvdnRx",
                  label: "Instagram",
                  color: "from-purple-500/20 to-pink-500/20",
                },
              ].map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    social.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group relative flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card/40 text-muted-foreground backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-primary/40 hover:bg-card/60 hover:text-primary"
                  aria-label={social.label}
                  style={{
                    animationDelay: `${0.3 + index * 0.1}s`,
                  }}
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-xl bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                  
                  <social.icon className="relative z-10 h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>

            {/* Separator */}
            <div className="hidden h-8 w-px bg-border sm:block" />

            {/* Enhanced Quick stats with animated counters */}
            <div className="relative flex items-center gap-8">
              {/* Stats background glow */}
              <div className="absolute inset-0 -m-6 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl blur-sm"></div>
              
              {[
                { value: "3+", label: "Internships", delay: "0.1s" },
                { value: "5+", label: "Certs", delay: "0.2s" },
                { value: "3+", label: "Projects", delay: "0.3s" },
              ].map((stat) => (
                <div 
                  key={stat.label} 
                  className="relative text-center group"
                  style={{ animationDelay: stat.delay }}
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <p className="text-xl font-bold text-primary neon-text mb-1 group-hover:scale-110 transition-transform">
                      {stat.value}
                    </p>
                    <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                      {stat.label}
                    </p>
                  </div>
                  
                  {/* Decorative dots */}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex gap-1">
                    <div className="h-1 w-1 rounded-full bg-primary/30 group-hover:bg-primary/60 transition-colors"></div>
                    <div className="h-1 w-1 rounded-full bg-accent/30 group-hover:bg-accent/60 transition-colors"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-float">
        <a
          href="#about"
          className="group flex flex-col items-center gap-2 text-muted-foreground"
          aria-label="Scroll down"
        >
          <span className="text-xs font-mono tracking-wider group-hover:text-primary transition-colors">
            SCROLL
          </span>
          <div className="flex h-8 w-5 items-start justify-center rounded-full border border-muted-foreground/30 p-1 group-hover:border-primary/50 transition-colors">
            <div className="h-1.5 w-1 rounded-full bg-primary animate-glow-pulse" />
          </div>
          <ChevronDown className="h-4 w-4 text-primary -mt-1" />
        </a>
      </div>
    </section>
  );
}
