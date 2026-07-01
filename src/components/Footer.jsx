import React from "react";
import { profile } from "../data/resume";

export const Footer = () => {
  return (
    <footer
      data-testid="site-footer"
      className="border-t border-white/10 bg-[#050505]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#52525b]">
          © {new Date().getFullYear()} {profile.name} · Built with React ·
          Deployed on Vercel
        </div>

        <div className="flex items-center gap-6 font-mono text-xs uppercase tracking-[0.2em] text-[#a1a1aa]">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ccff00]"
            data-testid="footer-linkedin"
          >
            LinkedIn
          </a>

          <a
            href={`mailto:${profile.email}`}
            className="hover:text-[#ccff00]"
            data-testid="footer-email"
          >
            Email
          </a>

          <button
            data-testid="footer-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:text-[#ccff00]"
          >
            Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;