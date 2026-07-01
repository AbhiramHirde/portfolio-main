import React from "react";
import { SectionHeader } from "./SectionHeader";
import { profile } from "../data/resume";

export const About = () => {
  const facts = [
    { k: "Based in", v: "Pune, India" },
    { k: "Studying", v: "B.E. E&TC" },
    { k: "Graduates", v: "June 2026" },
    { k: "Currently", v: "Job hunting" },
  ];

  return (
    <section
      data-testid="about-section"
      className="py-24 lg:py-32 relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          id="about"
          index="01"
          subtitle="About"
          title="Notes about me"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-white/10">
          {/* Main bio */}
          <div className="lg:col-span-8 bg-[#050505] p-8 lg:p-12">
            <p className="font-mono text-base sm:text-lg leading-relaxed text-[#ededed]/90">
              I build full-stack web applications with a soft spot for clean UI
              and data-driven backends. At{" "}
              <span className="text-[#ccff00]">PICT, Pune</span>, I'm finishing
              my B.E. in Electronics &amp; Telecommunication, but most of my
              hours go into shipping React frontends, designing MongoDB schemas
              and tuning ML models on the side.
            </p>

            <p className="font-mono text-base sm:text-lg leading-relaxed text-[#ededed]/70 mt-6">
              I like systems that feel obvious in use and ruthless under the
              hood — secure auth, REST APIs that don't embarrass themselves, and
              interfaces that respect attention. Right now I'm sharpening on the
              MERN stack, writing better tests, and exploring where ML fits into
              product surfaces.
            </p>

            <div className="mt-10 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-[#52525b]">
              <span className="w-8 h-px bg-[#52525b]" />
              Last updated · Dec 2025
            </div>
          </div>

          {/* Right facts grid */}
          <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1">
            {facts.map((f, i) => (
              <div
                key={i}
                className="bg-[#050505] p-6 lg:p-8 flex flex-col justify-between min-h-[120px]"
              >
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#52525b]">
                  {f.k}
                </div>

                <div className="font-display text-xl lg:text-2xl text-[#ededed] mt-3">
                  {f.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;