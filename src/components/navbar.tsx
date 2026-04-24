import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Github, Loader2, CheckCircle, XCircle } from "lucide-react";

type PushStatus = "idle" | "pushing" | "success" | "error";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [showModal, setShowModal] = useState(false);
  const [commitMessage, setCommitMessage] = useState("");
  const [pushStatus, setPushStatus] = useState<PushStatus>("idle");
  const [pushResult, setPushResult] = useState<string>("");

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

  const handlePush = async () => {
    setPushStatus("pushing");
    setPushResult("");
    try {
      const res = await fetch("/api/github/push", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: commitMessage || "Update from proposal template" }),
      });
      const data = await res.json() as { success: boolean; pushed?: number; total?: number; error?: string };
      if (data.success) {
        setPushStatus("success");
        setPushResult(`Pushed ${data.pushed} of ${data.total} files successfully.`);
      } else {
        setPushStatus("error");
        setPushResult(data.error ?? "Unknown error");
      }
    } catch (err) {
      setPushStatus("error");
      setPushResult("Could not connect to the server.");
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setPushStatus("idle");
    setPushResult("");
    setCommitMessage("");
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b border-border/70",
          scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-background"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-12 h-16 flex items-center gap-3">
          <div className="font-serif font-bold text-base tracking-tight shrink-0">
            Pet n People
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

          <div className="hidden md:flex items-center gap-2 shrink-0">
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors border border-border bg-white hover:bg-slate-50 text-foreground h-9 px-4"
            >
              <Github className="w-4 h-4" />
              Push to GitHub
            </button>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4"
            >
              Download PDF
            </button>
          </div>
        </div>
      </nav>

      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md mx-4 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Github className="w-5 h-5 text-foreground" />
              <h2 className="text-lg font-semibold">Push to GitHub</h2>
            </div>

            {pushStatus === "idle" && (
              <>
                <p className="text-sm text-muted-foreground mb-4">
                  This will update your{" "}
                  <span className="font-mono text-xs bg-slate-100 px-1.5 py-0.5 rounded">
                    YoussefBouazizTheWashed/proposal-template
                  </span>{" "}
                  repository with all current source files.
                </p>
                <label className="block text-sm font-medium mb-1.5">Commit message</label>
                <input
                  type="text"
                  placeholder="Update from proposal template"
                  value={commitMessage}
                  onChange={(e) => setCommitMessage(e.target.value)}
                  className="w-full border border-border rounded-md px-3 py-2 text-sm mb-5 focus:outline-none focus:ring-2 focus:ring-primary/30"
                  onKeyDown={(e) => e.key === "Enter" && handlePush()}
                />
                <div className="flex gap-2 justify-end">
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 text-sm rounded-md border border-border hover:bg-slate-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handlePush}
                    className="px-4 py-2 text-sm rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    Push
                  </button>
                </div>
              </>
            )}

            {pushStatus === "pushing" && (
              <div className="flex flex-col items-center py-6 gap-3">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
                <p className="text-sm text-muted-foreground">Pushing files to GitHub…</p>
              </div>
            )}

            {pushStatus === "success" && (
              <div className="flex flex-col items-center py-4 gap-3">
                <CheckCircle className="w-8 h-8 text-green-500" />
                <p className="text-sm font-medium text-green-700">{pushResult}</p>
                <a
                  href="https://github.com/YoussefBouazizTheWashed/proposal-template"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary underline"
                >
                  View on GitHub →
                </a>
                <button
                  onClick={closeModal}
                  className="mt-2 px-4 py-2 text-sm rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Done
                </button>
              </div>
            )}

            {pushStatus === "error" && (
              <div className="flex flex-col items-center py-4 gap-3">
                <XCircle className="w-8 h-8 text-red-500" />
                <p className="text-sm text-red-700">{pushResult}</p>
                <div className="flex gap-2">
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 text-sm rounded-md border border-border hover:bg-slate-50 transition-colors"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => { setPushStatus("idle"); setPushResult(""); }}
                    className="px-4 py-2 text-sm rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    Try again
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
