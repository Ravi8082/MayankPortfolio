"use client";

import { useEffect, useRef, useState } from "react";
import { Shield, Server, Brain, Terminal, Instagram } from "lucide-react";

const highlights = [
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Penetration testing, vulnerability assessment, and incident response.",
    gradient: "from-primary/10 to-accent/5",
  },
  {
    icon: Server,
    title: "System Admin",
    description:
      "System monitoring, configuration management, and network security.",
    gradient: "from-accent/10 to-primary/5",
  },
  {
    icon: Brain,
    title: "AI & Data",
    description:
      "AI data labeling, annotation, and machine learning model support.",
    gradient: "from-primary/10 to-accent/5",
  },
  {
    icon: Terminal,
    title: "Development",
    description:
      "Python development, automation tools, and security applications.",
    gradient: "from-accent/10 to-primary/5",
  },
];

function AnimatedCounter({
  target,
  suffix,
  isVisible,
}: {
  target: number;
  suffix: string;
  isVisible: boolean;
}) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 1500;
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(eased * target);
      setVal(start);
      if (progress >= 1) clearInterval(interval);
    }, 16);
    return () => clearInterval(interval);
  }, [isVisible, target]);
  return (
    <span>
      {val}
      {suffix}
    </span>
  );
}

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-32 grid-bg">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute top-20 right-10 h-72 w-72 rounded-full bg-primary/3 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-20 left-10 h-48 w-48 rounded-full bg-accent/3 blur-[80px]" />

      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center gap-4 mb-4">
            <p className="font-mono text-sm text-primary">{"// 01"}</p>
            <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-primary/50 to-transparent" />
          </div>
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="flex flex-col gap-16 lg:flex-row">
          {/* Text content */}
          <div
            className={`flex-1 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative">
              <div className="absolute -left-4 top-0 h-full w-0.5 bg-gradient-to-b from-primary/50 via-accent/30 to-transparent" />
              <div className="pl-6">
                <p className="mb-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                  BCA graduate with strong knowledge of{" "}
                  <span className="text-foreground font-medium">
                    IT systems
                  </span>
                  ,{" "}
                  <span className="text-foreground font-medium">
                    cybersecurity
                  </span>
                  , and{" "}
                  <span className="text-foreground font-medium">
                    data analysis
                  </span>
                  , currently working as a Research Analyst. Experienced in data
                  validation, process optimization, and analytical reporting.
                </p>
                <p className="mb-8 text-base leading-relaxed text-muted-foreground md:text-lg">
                  Proficient in applying technical and problem-solving skills to
                  ensure data accuracy, system efficiency, and information
                  security. Passionate about leveraging technology to drive
                  innovation and secure digital assets.
                </p>
              </div>
            </div>

            {/* Stats with animated counters */}
            <div className="flex flex-wrap gap-6 mt-8">
              {[
                { value: 3, suffix: "+", label: "Internships" },
                { value: 5, suffix: "+", label: "Certifications" },
                { value: 3, suffix: "+", label: "Projects" },
                { value: 7.56, suffix: "", label: "BCA Graduation", highlight: true },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className={`card-3d flex-1 min-w-[120px] rounded-xl border p-5 text-center transition-all duration-500 ${
                    stat.highlight
                      ? "border-primary/50 bg-gradient-to-br from-primary/10 to-accent/10 shadow-lg shadow-primary/20"
                      : "border-border bg-card/30"
                  } ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${400 + i * 100}ms` }}
                >
                  <p className={`text-3xl font-bold mb-1 ${
                    stat.highlight 
                      ? "text-primary neon-text animate-pulse" 
                      : "text-primary neon-text"
                  }`}>
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.suffix}
                      isVisible={isVisible}
                    />
                  </p>
                  <p className={`text-xs ${
                    stat.highlight 
                      ? "text-foreground font-medium" 
                      : "text-muted-foreground"
                  }`}>
                    {stat.label}
                    {stat.highlight && (
                      <span className="block text-primary/80 text-[0.6rem] mt-1">
                        CGPA: 7.56
                      </span>
                    )}
                  </p>
                </div>
              ))}
            </div>

            {/* Social Media Link */}
            <div
              className={`mt-8 transition-all duration-700 delay-600 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <a
                href="https://www.instagram.com/mayank_sinha.a?igsh=cXZrejBxZGVvdnRx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary transition-all hover:border-primary/40 hover:bg-primary/10 hover:scale-105"
              >
                <Instagram className="h-4 w-4" />
                <span>Follow me on Instagram</span>
              </a>
            </div>
          </div>

          {/* Highlight cards */}
          <div className="flex-1">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {highlights.map((item, i) => (
                <div
                  key={item.title}
                  className={`card-3d group relative overflow-hidden rounded-xl border border-border bg-gradient-to-br ${item.gradient} p-6 transition-all duration-500 hover:border-primary/30 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${300 + i * 120}ms` }}
                >
                  {/* Shimmer overlay */}
                  <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative z-10">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/5 transition-all group-hover:border-primary/40 group-hover:shadow-[0_0_20px_hsl(185_80%_55%/0.15)]">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-sm font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
