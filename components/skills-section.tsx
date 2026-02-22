"use client";

import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    title: "Security Tools",
    icon: "shield",
    skills: [
      { name: "Nmap", level: 85 },
      { name: "Wireshark", level: 80 },
      { name: "Burp Suite", level: 75 },
      { name: "Metasploit", level: 80 },
      { name: "Kali Linux", level: 85 },
    ],
  },
  {
    title: "Programming",
    icon: "code",
    skills: [
      { name: "Python", level: 85 },
      { name: "Java", level: 70 },
      { name: "C / C++", level: 65 },
      { name: "MySQL", level: 75 },
      { name: "Databases", level: 70 },
      { name: "Problem Solving", level: 85 },
    ],
  },
  {
    title: "IT & Systems",
    icon: "server",
    skills: [
      { name: "System Monitoring", level: 80 },
      { name: "Cloud", level: 70 },
      { name: "Active Directory", level: 75 },
      { name: "Networking", level: 85 },
      { name: "Troubleshooting", level: 90 },
    ],
  },
  {
    title: "Cybersecurity",
    icon: "lock",
    skills: [
      { name: "Penetration Testing", level: 80 },
      { name: "Forensics", level: 75 },
      { name: "Vulnerability Assessment", level: 85 },
      { name: "Network Security", level: 80 },
      { name: "Incident Response", level: 75 },
    ],
  },
];

function SkillBar({
  name,
  level,
  isVisible,
  delay,
}: {
  name: string;
  level: number;
  isVisible: boolean;
  delay: number;
}) {
  return (
    <div className="mb-5 group">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm text-foreground group-hover:text-primary transition-colors">
          {name}
        </span>
        <span
          className="font-mono text-xs text-primary transition-all"
          style={{
            opacity: isVisible ? 1 : 0,
            transitionDelay: `${delay + 500}ms`,
          }}
        >
          {level}%
        </span>
      </div>
      <div className="relative h-2.5 overflow-hidden rounded-full bg-secondary/80">
        <div
          className="absolute inset-y-0 left-0 rounded-full transition-all ease-out"
          style={{
            width: isVisible ? `${level}%` : "0%",
            transitionDuration: "1.2s",
            transitionDelay: `${delay}ms`,
            background: `linear-gradient(90deg, hsl(185 80% 55%), hsl(165 70% 45%))`,
            boxShadow: isVisible
              ? "0 0 12px hsl(185 80% 55% / 0.4), 0 0 4px hsl(185 80% 55% / 0.2)"
              : "none",
          }}
        />
        {/* Animated shine */}
        <div
          className="absolute inset-y-0 w-20 -skew-x-12"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
            left: isVisible ? "100%" : "-20%",
            transition: "left 2s ease-out",
            transitionDelay: `${delay + 800}ms`,
          }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="relative py-32">
      {/* Decorative */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-primary/2 blur-[120px]" />

      <div className="mx-auto max-w-6xl px-6">
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center gap-4 mb-4">
            <p className="font-mono text-sm text-primary">{"// 02"}</p>
            <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-primary/50 to-transparent" />
          </div>
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Technical <span className="gradient-text">Skills</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {skillCategories.map((category, catIdx) => (
            <div
              key={category.title}
              className={`card-3d relative overflow-hidden rounded-2xl border border-border bg-card/20 p-7 transition-all duration-700 hover:border-primary/20 animate-border-glow ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${catIdx * 150}ms`,
                animationDelay: `${catIdx * 1}s`,
              }}
            >
              {/* Card glow effect */}
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/3 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/20 bg-primary/5">
                    <span className="font-mono text-sm text-primary font-bold">
                      {String(catIdx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-mono text-lg font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>
                {category.skills.map((skill, skillIdx) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    isVisible={isVisible}
                    delay={catIdx * 200 + skillIdx * 120}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
