import React, { useEffect, useState } from "react";
import { ArrowDownRight, MapPin } from "lucide-react";
import { profile } from "../data/resume";

const Marquee = () => {
  const items = [
    "FULL-STACK",
    "MERN",
    "REACT",
    "PYTHON",
    "MACHINE LEARNING",
    "MONGODB",
    "NODE.JS",
    "TAILWIND",
  ];

  const repeated = [...items, ...items, ...items];

  return (
    <div className="overflow-hidden border-y border-white/10 py-4 bg-[#0f0f0f]">
      <div className="marquee-track flex gap-12 whitespace-nowrap font-display text-2xl sm:text-3xl text-[#ededed]/60">
        {repeated.map((t, i) => (
          <span key={i} className="flex items-center gap-12">
            {t}
            <span className="text-[#ccff00]">/</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export const Hero = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const t = d.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Asia/Kolkata",
        hour12: false,
      });
      setTime(t);
    };

    tick();
    const id = setInterval(tick, 1000 * 30);

    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative pt-32 pb-16"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top status bar */}
        <div className="flex items-center justify-between mb-12 font-mono text-xs tracking-[0.2em] uppercase text-[#a1a1aa] reveal">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#ccff00] rounded-full animate-pulse" />
            <span data-testid="hero-status">{profile.status}</span>
          </div>

          <div className="hidden sm:flex items-center gap-6">
            <span className="flex items-center gap-2">
              <MapPin size={12} /> {profile.location}
            </span>
            <span>{time} IST</span>
          </div>
        </div>

        {/* Main heading */}
        <div className="reveal">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-[#ccff00] mb-6">
            // portfolio_v1.0 / 2026
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#ededed]">
            {profile.name.split(" ")[0]}
            <br />
            <span className="text-[#ededed]/40">
              {profile.name.split(" ")[1]}
              <span className="text-[#ccff00] blink">_</span>
            </span>
          </h1>
        </div>

        {/* Sub block */}
        <div
          className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 reveal"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="lg:col-span-7 space-y-6">
            <p className="font-mono text-base sm:text-lg text-[#ededed]/90 leading-relaxed max-w-2xl">
              <span className="text-[#52525b]">&gt;</span> {profile.role}.{" "}
              {profile.bio}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                data-testid="hero-work-cta"
                href="#work"
                className="group inline-flex items-center gap-3 px-6 py-4 bg-[#ccff00] text-[#050505] font-mono text-xs uppercase tracking-[0.2em] hover:bg-[#ededed] transition-colors"
              >
                See selected work
                <ArrowDownRight
                  size={16}
                  className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"
                />
              </a>

              <a
                data-testid="hero-contact-cta"
                href="#contact"
                className="inline-flex items-center gap-3 px-6 py-4 border border-white/20 font-mono text-xs uppercase tracking-[0.2em] text-[#ededed] hover:bg-[#ededed] hover:text-[#050505] transition-colors"
              >
                Start a conversation
              </a>
            </div>
          </div>

          {/* Right meta block */}
          <div className="lg:col-span-5 lg:col-start-9">
            <div className="border border-white/10 bg-[#0f0f0f] p-6">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#52525b] mb-4">
                // stats.json
              </div>

              <div className="space-y-3 font-mono text-sm">
                <Row k="role" v={profile.role} />
                <Row k="location" v={profile.location} />
                <Row k="education" v="PICT, Pune" />
                <Row k="focus" v="Full-Stack · ML" />
                <Row k="status" v="Available 2026" accent />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <Marquee />
      </div>
    </section>
  );
};

const Row = ({ k, v, accent }) => (
  <div className="flex items-baseline justify-between gap-4 border-b border-white/5 pb-2 last:border-0">
    <span className="text-[#52525b] text-xs uppercase tracking-[0.2em]">
      {k}
    </span>

    <span className={`text-sm ${accent ? "text-[#ccff00]" : "text-[#ededed]"}`}>
      {v}
    </span>
  </div>
);

export default Hero;