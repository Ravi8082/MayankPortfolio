"use client";

import { Shield, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border bg-card/10">
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-primary/20 bg-primary/5">
              <Shield className="h-4 w-4 text-primary" />
            </div>
            <span className="text-sm text-muted-foreground">
              {"<"}
              <span className="text-primary font-medium">MR</span>
              {" />"}
            </span>
          </div>

          <p className="font-mono text-xs text-muted-foreground">
            {"// "}Designed & Built by{" "}
            <span className="text-foreground">Mayank Raj</span>
          </p>

          <button
            onClick={scrollToTop}
            className="magnetic-btn flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card/30 text-muted-foreground transition-all hover:border-primary/30 hover:text-primary hover:shadow-[0_0_15px_hsl(185_80%_55%/0.15)] hover:scale-110"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
