import React from "react";
import { SectionHeader } from "./SectionHeader";
import { skills } from "../data/resume";

export const Skills = () => {
  return (
    <section
      data-testid="skills-section"
      className="py-24 lg:py-32 bg-[#0a0a0a]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          id="skills"
          index="02"
          subtitle="Stack"
          title="Toolkit I reach for"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {skills.map((group, idx) => (
            <div
              key={group.group}
              data-testid={`skill-group-${idx}`}
              className="bg-[#0f0f0f] p-8 group hover:bg-[#1a1a1a] transition-colors"
            >
              <div className="flex items-baseline justify-between mb-6">
                <h3 className="font-display text-lg sm:text-xl text-[#ededed]">
                  {group.group}
                </h3>

                <span className="font-mono text-xs text-[#52525b]">
                  0{idx + 1}
                </span>
              </div>

              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="font-mono text-sm text-[#a1a1aa] flex items-center gap-3 group-hover:text-[#ededed] transition-colors"
                  >
                    <span className="w-1.5 h-1.5 bg-[#ccff00]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;