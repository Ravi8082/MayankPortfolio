"use client";

import { useEffect, useRef, useState } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "InternPe Pvt. Ltd.",
    role: "Python Intern",
    period: "Oct 2023 - Nov 2023",
    description: [
      "Completed a virtual internship focused on Python programming and practical coding skills.",
      "Developed small-scale applications and problem-solving scripts using core Python concepts.",
      "Strengthened understanding of data structures, functions, and object-oriented programming.",
    ],
    tags: [
      "Python",
      "Programming",
      "Problem Solving",
    ],
    current: false,
  },
  {
    company: "CodSoft Pvt. Ltd.",
    role: "AI Intern",
    period: "Oct 2023",
    description: [
      "Completed a virtual AI internship focused on core concepts and practical applications.",
      "Worked on AI-based mini projects using machine learning algorithms and data processing.",
      "Implemented basic NLP and predictive models using Python.",
      "Gained hands-on experience in data preprocessing, model training, and performance evaluation.",
      "Strengthened understanding of supervised and unsupervised learning techniques.",
      "Collaborated remotely and submitted weekly project reports and tasks within deadlines.",
    ],
    tags: [
      "AI",
      "Python",
      "Machine Learning",
    ],
    current: false,
  },
  {
    company: "Netparam Technologies Pvt. Ltd.",
    role: "Cybersecurity & Network Intern",
    period: "May 2024 - Aug 2024",
    description: [
      "Delivered advanced cybersecurity and network troubleshooting solutions.",
      "Performed incident response, digital forensics, and vulnerability assessments.",
      "Ensured system security through continuous monitoring and security audits.",
    ],
    tags: [
      "Cybersecurity",
      "Penetration Testing",
      "Network Security",
      "Forensics",
    ],
    current: false,
  },
  {
    company: "Arcgate (DoorDash Project)",
    role: "Research Analyst",
    period: "Feb 2025 - Present",
    description: [
      "Specialized in AI data labeling and annotation for reliable ML model development.",
      "Utilized Salesforce CRM for structured data management and project tracking.",
      "Supported product campaigns and sales initiatives within Salesforce.",
      "Contributed to large-scale data preparation workflows improving AI performance.",
    ],
    tags: [
      "Salesforce",
      "AI Data Labeling",
      "Data Analysis",
    ],
    current: true,
  },
];

export default function ExperienceSection() {
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
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-32 grid-bg"
    >
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="mx-auto max-w-5xl px-6">
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center gap-4 mb-4">
            <p className="font-mono text-sm text-primary">{"// 03"}</p>
            <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-primary/50 to-transparent" />
          </div>
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated timeline line */}
          <div
            className="absolute left-6 top-0 w-0.5 md:left-1/2 md:-translate-x-px transition-all duration-[2s] ease-out"
            style={{
              height: isVisible ? "100%" : "0%",
              background:
                "linear-gradient(180deg, hsl(185 80% 55% / 0.5), hsl(165 70% 45% / 0.3), transparent)",
            }}
          />

          {experiences.map((exp, i) => (
            <div
              key={exp.company}
              className={`relative mb-16 last:mb-0 flex flex-col md:flex-row transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${300 + i * 200}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 top-8 z-10 md:left-1/2 md:-translate-x-1/2">
                <div
                  className={`relative flex h-10 w-10 items-center justify-center rounded-full border-2 bg-background transition-all ${
                    exp.current
                      ? "border-primary shadow-[0_0_20px_hsl(185_80%_55%/0.5)]"
                      : "border-primary/40 shadow-[0_0_10px_hsl(185_80%_55%/0.2)]"
                  }`}
                >
                  <Briefcase className="h-4 w-4 text-primary" />
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full border-2 border-primary animate-glow-pulse" />
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="ml-20 w-full md:ml-0 md:w-[calc(100%-3rem)] md:pl-8">
                <div className="card-3d rounded-2xl border border-border bg-card/30 p-6 transition-all hover:border-primary/20 backdrop-blur-sm">
                  {/* Period badge */}
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1">
                    <Calendar className="h-3 w-3 text-primary" />
                    <span className="font-mono text-xs text-primary">
                      {exp.period}
                    </span>
                  </div>

                  <div>
                    <h3 className="mb-1 text-lg font-bold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="mb-4 text-sm text-muted-foreground font-medium">
                      {exp.company}
                    </p>

                    <ul className="mb-5 flex flex-col gap-2">
                      {exp.description.map((desc, di) => (
                        <li
                          key={di}
                          className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/60" />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-col gap-1">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="text-sm text-primary">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
