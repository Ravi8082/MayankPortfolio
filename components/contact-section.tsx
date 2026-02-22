"use client";

import { useEffect, useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Download,
  Award,
  GraduationCap,
  Languages,
  ArrowUpRight,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7761056093",
    href: "tel:+917761056093",
  },
  {
    icon: Mail,
    label: "Email",
    value: "mayank12345klg@gmail.com",
    href: "mailto:mayank12345klg@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India",
    href: "#",
  },
];

const certifications = [
  "Introduction to Cyber Security - Cisco Networking Academy",
  "Core Java Certification - MSME Indo-Danish Tool Room, Jamshedpur",
  "TATA Cybersecurity Analyst Job Simulation - Forage",
  "Mastercard Cybersecurity Virtual Experience - Forage",
];

export default function ContactSection() {
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
    <section id="contact" ref={sectionRef} className="relative py-32 grid-bg">
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="pointer-events-none absolute top-1/3 left-0 h-72 w-72 rounded-full bg-primary/3 blur-[100px]" />

      <div className="mx-auto max-w-6xl px-6">
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center gap-4 mb-4">
            <p className="font-mono text-sm text-primary">{"// 05"}</p>
            <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-primary/50 to-transparent" />
          </div>
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Get In <span className="gradient-text">Touch</span>
          </h2>
        </div>

        <div className="flex flex-col gap-12 lg:flex-row">
          {/* Contact info */}
          <div className="flex-1">
            <div
              className={`transition-all duration-700 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <p className="mb-8 text-base leading-relaxed text-muted-foreground max-w-md">
                {"I'm"} always open to discussing new opportunities, interesting
                projects, or collaborations in{" "}
                <span className="text-foreground font-medium">
                  cybersecurity
                </span>{" "}
                and{" "}
                <span className="text-foreground font-medium">IT</span>. Feel
                free to reach out!
              </p>

              <div className="flex flex-col gap-3 mb-8">
                {contactInfo.map((item, i) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`card-3d group flex items-center gap-4 rounded-xl border border-border bg-card/20 p-4 transition-all duration-500 hover:border-primary/30 hover:bg-card/50 ${
                      isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-10"
                    }`}
                    style={{ transitionDelay: `${300 + i * 100}ms` }}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/5 transition-all group-hover:border-primary/40 group-hover:shadow-[0_0_15px_hsl(185_80%_55%/0.15)]">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all" />
                  </a>
                ))}
              </div>

              {/* Social + Resume */}
              <div
                className={`flex items-center gap-3 transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                {[
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/mayank-raj11",
                    label: "LinkedIn",
                  },
                  {
                    icon: Github,
                    href: "https://github.com/Mayank8092",
                    label: "GitHub",
                  },
                  {
                    icon: Twitter,
                    href: "https://x.com/MayankRaj197560",
                    label: "X (Twitter)",
                  },
                  {
                    icon: Instagram,
                    href: "https://www.instagram.com/mayank_sinha.a?igsh=cXZrejBxZGVvdnRx",
                    label: "Instagram",
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card/30 text-muted-foreground transition-all hover:border-primary/30 hover:text-primary hover:shadow-[0_0_15px_hsl(185_80%_55%/0.15)] hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
                <a
                  href="https://drive.google.com/file/d/1gVB9jtN-HAvFl5ISM7R08PAL2BcM3Xwy/view?usp=sharing"
                  download="MayankRaj_Resume.pdf"
                  className="magnetic-btn flex h-12 items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-6 text-sm font-medium text-primary transition-all hover:bg-primary/20 hover:scale-105"
                >
                  <Download className="h-4 w-4" />
                  Resume
                </a>
              </div>
            </div>
          </div>

          {/* Certifications & Education */}
          <div
            className={`flex-1 transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Education */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="h-5 w-5 text-primary" />
                <h3 className="font-mono text-lg font-bold text-foreground">
                  Education
                </h3>
              </div>
              <div className="card-3d rounded-xl border border-border bg-card/20 p-6 transition-all hover:border-primary/20">
                <p className="mb-1 font-mono text-xs text-primary">
                  2022 - 2025
                </p>
                <h4 className="mb-1 text-base font-bold text-foreground">
                  Bachelor of Computer Applications (BCA)
                </h4>
                <p className="text-sm text-muted-foreground">
                  Mewar University
                </p>
              </div>
            </div>

            {/* Certs */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Award className="h-5 w-5 text-primary" />
                <h3 className="font-mono text-lg font-bold text-foreground">
                  Certifications
                </h3>
              </div>
              <div className="flex flex-col gap-3">
                {certifications.map((cert, i) => (
                  <div
                    key={i}
                    className={`group flex items-start gap-3 rounded-xl border border-border bg-card/15 p-4 transition-all duration-500 hover:border-primary/20 hover:bg-card/30 ${
                      isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-10"
                    }`}
                    style={{ transitionDelay: `${500 + i * 100}ms` }}
                  >
                    <div className="relative mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary transition-all group-hover:shadow-[0_0_10px_hsl(185_80%_55%/0.5)]">
                      <span className="absolute inset-0 rounded-full bg-primary animate-glow-pulse" />
                    </div>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {cert}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Languages className="h-5 w-5 text-primary" />
                <h3 className="font-mono text-lg font-bold text-foreground">
                  Languages
                </h3>
              </div>
              <div className="flex gap-3">
                {["English", "Hindi"].map((lang) => (
                  <span
                    key={lang}
                    className="rounded-xl border border-primary/20 bg-primary/5 px-5 py-2.5 text-sm text-foreground transition-all hover:border-primary/30 hover:bg-primary/10 hover:scale-105"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
