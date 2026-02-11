"use client";

import { useRef, useEffect, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
      if (!isVisible) setIsVisible(true);
    };

    const enter = () => setIsVisible(true);
    const leave = () => setIsVisible(false);

    const checkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, [role='button'], input, textarea, select");
      setIsHovering(!!interactive);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousemove", checkHover);
    document.addEventListener("mouseenter", enter);
    document.addEventListener("mouseleave", leave);

    let animId: number;
    const animateRing = () => {
      animId = requestAnimationFrame(animateRing);
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px) scale(${isHovering ? 1.6 : 1})`;
    };
    animateRing();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousemove", checkHover);
      document.removeEventListener("mouseenter", enter);
      document.removeEventListener("mouseleave", leave);
    };
  }, [isHovering, isVisible]);

  return (
    <div className="hidden lg:block">
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-2 w-2 rounded-full bg-primary"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s",
          mixBlendMode: "difference",
        }}
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] h-10 w-10 rounded-full border border-primary/50"
        style={{
          opacity: isVisible ? 0.6 : 0,
          transition: "opacity 0.3s, border-color 0.3s",
          borderColor: isHovering ? "hsl(185 80% 55%)" : "hsl(185 80% 55% / 0.4)",
        }}
        aria-hidden="true"
      />
    </div>
  );
}
