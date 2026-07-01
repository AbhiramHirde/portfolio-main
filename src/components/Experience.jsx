import React from "react";
import { SectionHeader } from "./SectionHeader";
import { experience, education } from "../data/resume";

export const Experience = () => {
  return (
    <section
      data-testid="experience-section"
      className="py-24 lg:py-32 bg-[#0a0a0a]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          id="experience"
          index="04"
          subtitle="Timeline"
          title="Experience & Education"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Experience column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-[#ccff00]">
              // experience
            </div>

            {experience.map((exp, i) => (
              <article
                key={i}
                data-testid={`exp-${i}`}
                className="border border-white/10 bg-[#0f0f0f] p-6 lg:p-8 hover:border-[#ccff00]/30 transition-colors"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-3 mb-4">
                  <h3 className="font-display text-xl sm:text-2xl text-[#ededed]">
                    {exp.role}
                  </h3>

                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#ccff00]">
                    {exp.period}
                  </span>
                </div>

                <div className="font-mono text-sm text-[#a1a1aa] mb-5">
                  {exp.company}
                  <span className="text-[#52525b]"> · </span>
                  {exp.location}
                </div>

                <ul className="space-y-2 mb-5">
                  {exp.bullets.map((b, j) => (
                    <li
                      key={j}
                      className="font-mono text-sm text-[#ededed]/80 flex gap-3"
                    >
                      <span className="text-[#ccff00] flex-shrink-0">→</span>
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-xs uppercase tracking-wider text-[#ededed]/70 border border-white/15 px-2.5 py-1"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {/* Education column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-[#ccff00]">
              // education
            </div>

            {education.map((edu, i) => (
              <article
                key={i}
                data-testid={`edu-${i}`}
                className="border border-white/10 bg-[#0f0f0f] p-6 lg:p-8 hover:border-[#ccff00]/30 transition-colors"
              >
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#ccff00] mb-3">
                  {edu.period}
                </div>

                <h3 className="font-display text-lg sm:text-xl text-[#ededed] leading-tight mb-3">
                  {edu.school}
                </h3>

                <div className="font-mono text-sm text-[#a1a1aa]">
                  {edu.degree}
                </div>

                <div className="font-mono text-xs text-[#52525b] mt-2">
                  {edu.note}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;