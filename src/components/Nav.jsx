import React, { useEffect, useState } from "react";
import { navLinks, profile } from "../data/resume";

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      data-testid="site-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/85 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <button
          data-testid="nav-logo"
          onClick={() => go("hero")}
          className="font-display text-xl tracking-tight text-[#ededed] hover:text-[#ccff00] transition-colors"
        >
          {profile.initials}
          <span className="text-[#ccff00]">.</span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <button
              key={l.id}
              data-testid={`nav-link-${l.id}`}
              onClick={() => go(l.id)}
              className="font-mono text-xs uppercase tracking-[0.2em] text-[#a1a1aa] hover:text-[#ededed] link-underline"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <a
          data-testid="nav-resume-btn"
          href={profile.resumeUrl}
          download
          className="hidden md:inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] px-4 py-2 border border-white/20 text-[#ededed] hover:bg-[#ccff00] hover:text-[#050505] hover:border-[#ccff00] transition-colors"
        >
          <span className="w-1.5 h-1.5 bg-[#ccff00] rounded-full" />
          Resume
        </a>

        <button
          data-testid="nav-mobile-toggle"
          onClick={() => setOpen(!open)}
          className="md:hidden font-mono text-xs uppercase tracking-[0.2em] text-[#ededed]"
        >
          {open ? "[ close ]" : "[ menu ]"}
        </button>
      </div>

      {open && (
        <div
          data-testid="mobile-menu"
          className="md:hidden bg-[#050505] border-t border-white/10"
        >
          <div className="px-6 py-6 space-y-4 flex flex-col">
            {navLinks.map((l) => (
              <button
                key={l.id}
                data-testid={`mobile-nav-${l.id}`}
                onClick={() => go(l.id)}
                className="font-mono text-sm uppercase tracking-[0.2em] text-left text-[#a1a1aa] hover:text-[#ccff00]"
              >
                — {l.label}
              </button>
            ))}

            <a
              data-testid="mobile-resume-btn"
              href={profile.resumeUrl}
              download
              className="font-mono text-sm uppercase tracking-[0.2em] mt-2 px-4 py-3 border border-[#ccff00] text-[#ccff00] text-center"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};