"use client";

import { useState, useEffect } from "react";
import { Menu, X, Shield, Download } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Track active section - only for hash links
      const hashItems = navItems.filter(item => item.href.startsWith("#"));
      const sections = hashItems.map((item) =>
        document.querySelector(item.href)
      );
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(hashItems[i].href);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-lg shadow-[hsl(185_80%_55%/0.03)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#hero" className="group flex items-center gap-2">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-primary/20 bg-primary/5 transition-all group-hover:border-primary/50 group-hover:shadow-[0_0_15px_hsl(185_80%_55%/0.2)]">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <span className="text-lg font-bold text-foreground">
              {"<"}
              <span className="text-primary">MR</span>
              {" />"}
            </span>
          </a>

          {/* Desktop */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`relative rounded-lg px-4 py-2 text-sm transition-all ${
                  activeSection === item.href
                    ? "text-primary bg-primary/5"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                {item.label}
                {activeSection === item.href && (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-primary" />
                )}
              </a>
            ))}
            <a
              href="/resume/MayankRaj_Resume.pdf"
              download="MayankRaj_Resume.pdf"
              className="magnetic-btn ml-2 flex items-center gap-2 rounded-lg bg-primary/10 border border-primary/30 px-5 py-2 text-sm font-medium text-primary transition-all hover:bg-primary/20"
            >
              <Download className="h-3.5 w-3.5" />
              Resume
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card/30 text-foreground md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="mt-4 flex flex-col gap-2 rounded-xl border border-border bg-card/80 backdrop-blur-xl p-4 md:hidden animate-slide-up">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`rounded-lg px-4 py-3 text-sm transition-all ${
                  activeSection === item.href
                    ? "text-primary bg-primary/5"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/resume/MayankRaj_Resume.pdf"
              download="MayankRaj_Resume.pdf"
              className="flex items-center justify-center gap-2 rounded-lg bg-primary/10 border border-primary/30 px-4 py-3 text-sm text-primary"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
