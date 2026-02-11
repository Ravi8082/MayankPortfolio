"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import {
  ChevronDown,
  Github,
  Linkedin,
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
        {/* Terminal-style greeting */}
        <div
          className="animate-slide-up"
          style={{ animationDelay: "0.2s", opacity: 0 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 backdrop-blur-sm">
            <span className="relative h-2 w-2 rounded-full bg-primary pulse-dot" />
            <span className="font-mono text-xs tracking-widest text-primary">
              AVAILABLE FOR OPPORTUNITIES
            </span>
          </div>
        </div>

        {/* Glitch Name */}
        <div
          className="animate-slide-up"
          style={{ animationDelay: "0.4s", opacity: 0 }}
        >
          <h1 className="mb-2 text-6xl font-bold leading-none text-foreground md:text-8xl lg:text-9xl text-balance">
            <span className="block text-2xl font-normal text-muted-foreground mb-3 md:text-3xl">
              {"Hello, I'm"}
            </span>
            <span className="relative inline-block">
              <span className="gradient-text">Mayank</span>
            </span>{" "}
            <span className="relative inline-block text-primary neon-text">
              Raj
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

        {/* CTA Buttons */}
        <div
          className="animate-slide-up"
          style={{ animationDelay: "1s", opacity: 0 }}
        >
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/resume/MayankRaj_Resume.pdf"
              download="MayankRaj_Resume.pdf"
              className="magnetic-btn group relative flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:scale-105"
            >
              <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              <span>Download Resume</span>
            </a>
            <a
              href="#projects"
              className="magnetic-btn group flex items-center gap-2 rounded-xl border border-border bg-secondary/50 px-8 py-4 text-sm font-semibold text-foreground transition-all hover:border-primary/30 hover:bg-secondary hover:scale-105"
            >
              <span>View Projects</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Social links + quick stats row */}
        <div
          className="animate-slide-up"
          style={{ animationDelay: "1.2s", opacity: 0 }}
        >
          <div className="mt-14 flex flex-col items-center gap-8 sm:flex-row sm:justify-center">
            {/* Socials */}
            <div className="flex items-center gap-4">
              {[
                {
                  icon: Mail,
                  href: "mailto:mayank12345klg@gmail.com",
                  label: "Email",
                },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com",
                  label: "LinkedIn",
                },
                {
                  icon: Github,
                  href: "https://github.com",
                  label: "GitHub",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    social.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card/30 text-muted-foreground backdrop-blur-sm transition-all hover:border-primary/30 hover:text-primary hover:shadow-[0_0_20px_hsl(185_80%_55%/0.15)] hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Separator */}
            <div className="hidden h-8 w-px bg-border sm:block" />

            {/* Quick stats */}
            <div className="flex items-center gap-6">
              {[
                { value: "3+", label: "Internships" },
                { value: "5+", label: "Certs" },
                { value: "3+", label: "Projects" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-lg font-bold text-primary neon-text">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
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
