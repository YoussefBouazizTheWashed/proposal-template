import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const sections = [
    { id: "hero", label: "Product" },
    { id: "problem", label: "Problem and Requirements" },
    { id: "solution", label: "Solution" },
    { id: "vision", label: "Vision / Goal" },
    { id: "timeframe", label: "Timeframe and Deliverables" },
    { id: "resources", label: "Resources & Budget" },
    { id: "risks", label: "Risks & Implications" },
    { id: "success", label: "Success Criteria" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const current = sections.find((section) => {
        const element = document.getElementById(section.id);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 140 && rect.bottom >= 140;
      });

      if (current) setActiveSection(current.id);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    const top = element.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <nav
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b border-border/70",
        scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-background"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-12 h-16 flex items-center gap-3">
        <div className="font-serif font-bold text-base tracking-tight shrink-0">
          [Project Name]
        </div>

        <div className="flex-1 overflow-x-auto">
          <div className="flex items-center gap-1 min-w-max">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={cn(
                  "relative px-3 sm:px-4 h-10 rounded-full text-sm font-medium whitespace-nowrap transition-colors",
                  activeSection === section.id
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-slate-100"
                )}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => window.print()}
          className="hidden md:inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 shrink-0"
        >
          Download PDF
        </button>
      </div>
    </nav>
  );
}
