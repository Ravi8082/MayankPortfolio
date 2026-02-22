"use client";

import React from "react"

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { ExternalLink, Lock, Database, Bot, Sparkles, FileSearch } from "lucide-react";

const projects = [
  {
    title: "HashFinder (Python)",
    description:
      "A lightweight Python tool for generating and verifying MD5 file hashes to support basic malware detection and data integrity checks.",
    image: "/images/project-malware.jpg",
    tags: ["Python", "File Handling", "Cryptographic Hashing", "MD5", "Security"],
    icon: FileSearch,
    highlights: [
      "Generates MD5 hashes using hashlib",
      "Compares files with known malicious hashes",
      "Simple command-line interface",
      "Uses pyfiglet for styled terminal output",
    ],
    color: "270 80% 55%",
    link: "https://github.com/Mayank8092/Hash-MalwareAnalysis",
  },
  {
    title: "Malware Analysis & Encryption Tool",
    description:
      "Python-based malware analysis tool with malicious pattern detection, digital signature analysis, and secure file inspection using industry-standard cryptography.",
    image: "/images/project-malware.jpg",
    tags: ["Python", "Cryptography", "MD5", "SHA-256", "Security"],
    icon: Lock,
    highlights: [
      "Malicious pattern detection",
      "Digital signature analysis",
      "Encryption & decryption",
      "Multi-format file support",
    ],
    color: "185 80% 55%",
    link: "https://github.com/Mayank8092/Malware-Analysis-Tool.git",
  },
  {
    title: "SQL Vulnerability Finder",
    description:
      "Automated tool to detect SQL injection vulnerabilities in web applications with crawling capabilities to identify and assess security weaknesses.",
    image: "/images/project-sql.jpg",
    tags: ["Python", "SQL Injection", "Web Security", "Automation"],
    icon: Database,
    highlights: [
      "Automated web crawling",
      "SQL injection detection",
      "Vulnerability assessment",
      "Security reporting",
    ],
    color: "165 70% 45%",
    link: "https://github.com/Mayank8092/SQL_Vulnerability_Finder.git",
  },
  {
    title: "AI Chatbot Development",
    description:
      "AI-powered chatbot using Python and advanced NLP techniques, capable of understanding and responding to user queries with context-aware responses.",
    image: "/images/project-chatbot.jpg",
    tags: ["Python", "NLP", "AI", "Machine Learning"],
    icon: Bot,
    highlights: [
      "Natural Language Processing",
      "Context-aware responses",
      "Python-based architecture",
      "Intelligent conversations",
    ],
    color: "195 75% 50%",
    link: "https://github.com/Mayank8092/AI_chatbox-CODSOFT-.git",
  },
];

function ProjectCard({
  project,
  index,
  isVisible,
}: {
  project: (typeof projects)[0];
  index: number;
  isVisible: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setTilt({
        x: (y - 0.5) * -10,
        y: (x - 0.5) * 10,
      });
    },
    []
  );

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      className={`group relative overflow-hidden rounded-2xl border border-border bg-card/20 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
      style={{
        transitionDelay: `${300 + index * 200}ms`,
        transform: isHovered
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-8px)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg)",
        transition: isHovered
          ? "transform 0.1s ease-out, box-shadow 0.3s ease, border-color 0.3s ease"
          : "transform 0.5s ease-out, box-shadow 0.3s ease, border-color 0.3s ease, opacity 0.7s ease, translate 0.7s ease",
        boxShadow: isHovered
          ? `0 20px 60px hsl(${project.color} / 0.1), 0 0 30px hsl(${project.color} / 0.05)`
          : "none",
        borderColor: isHovered
          ? `hsl(${project.color} / 0.3)`
          : undefined,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Spotlight glow on hover */}
      {isHovered && (
        <div
          className="pointer-events-none absolute z-0"
          style={{
            left: `${(tilt.y / 10 + 0.5) * 100}%`,
            top: `${(-tilt.x / 10 + 0.5) * 50}%`,
            width: "200px",
            height: "200px",
            background: `radial-gradient(circle, hsl(${project.color} / 0.15), transparent 70%)`,
            transform: "translate(-50%, -50%)",
          }}
        />
      )}

      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className={`object-cover transition-all duration-700 ${
            isHovered ? "scale-110 brightness-110" : "scale-100 brightness-90"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />

        {/* Floating icon */}
        <div
          className="absolute right-4 top-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-background/80 backdrop-blur-sm transition-all duration-300"
          style={{
            borderColor: isHovered
              ? `hsl(${project.color} / 0.4)`
              : undefined,
            boxShadow: isHovered
              ? `0 0 20px hsl(${project.color} / 0.2)`
              : "none",
          }}
        >
          <project.icon className="h-6 w-6 text-primary" />
        </div>

        {/* Project number */}
        <div className="absolute left-4 top-4 font-mono text-xs text-primary/40">
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-6">
        <h3 className="mb-3 text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {/* Highlights */}
        <ul className="mb-5 grid grid-cols-2 gap-2">
          {project.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex items-center gap-2 text-xs text-muted-foreground"
            >
              <Sparkles className="h-3 w-3 text-primary/60 shrink-0" />
              {highlight}
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1 font-mono text-xs text-primary transition-all hover:border-primary/30 hover:bg-primary/10"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* View link */}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary transition-all duration-300"
            style={{
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? "translateX(0)" : "translateX(-12px)",
            }}
          >
            <ExternalLink className="h-4 w-4" />
            View Project Details
          </a>
        )}
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative py-32">
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="pointer-events-none absolute bottom-20 right-0 h-64 w-64 rounded-full bg-accent/3 blur-[100px]" />

      <div className="mx-auto max-w-6xl px-6">
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center gap-4 mb-4">
            <p className="font-mono text-sm text-primary">{"// 04"}</p>
            <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-primary/50 to-transparent" />
          </div>
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl">
            A collection of cybersecurity tools and AI projects that showcase my
            technical skills and passion for building secure solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
