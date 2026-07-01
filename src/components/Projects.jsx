import React from "react";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { projects } from "../data/resume";

const ProjectCard = ({ project }) => {
  return (
    <article
      data-testid={`project-${project.id}`}
      className={`group relative bg-[#0f0f0f] border border-white/10 overflow-hidden ${
        project.span || "lg:col-span-12"
      } transition-colors hover:border-[#ccff00]/40`}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[#0a0a0a]">
        <img
          src={project.image}
          alt={project.name}
          className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />

        <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#ccff00] bg-[#050505]/80 px-3 py-1 border border-[#ccff00]/30">
            {project.tag}
          </span>

          <span className="font-mono text-xs text-[#52525b]">
            {project.year}
          </span>
        </div>
      </div>

      <div className="p-6 lg:p-8 space-y-5">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-2xl sm:text-3xl text-[#ededed] flex items-baseline gap-3">
            <span className="text-[#52525b] text-base">{project.id}</span>
            {project.name}
          </h3>

          <ArrowUpRight
            size={24}
            className="text-[#a1a1aa] group-hover:text-[#ccff00] group-hover:-translate-y-1 group-hover:translate-x-1 transition-all flex-shrink-0"
          />
        </div>

        <p className="font-mono text-sm sm:text-base text-[#a1a1aa] leading-relaxed">
          {project.summary}
        </p>

        <ul className="space-y-1.5 pt-2">
          {project.details.map((d, i) => (
            <li
              key={i}
              className="font-mono text-xs sm:text-sm text-[#ededed]/70 flex gap-3"
            >
              <span className="text-[#ccff00] flex-shrink-0">→</span>
              {d}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 pt-3">
          {project.stack.map((s) => (
            <span
              key={s}
              className="font-mono text-xs uppercase tracking-wider text-[#ededed]/80 border border-white/15 px-2.5 py-1"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export const Projects = () => {
  return (
    <section
      data-testid="projects-section"
      className="py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          id="work"
          index="03"
          subtitle="Selected Work"
          title="Things I've built"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {projects.map((p, idx) => (
            <ProjectCard key={p.id} project={p} idx={idx} />
          ))}
        </div>

        <div className="mt-16 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-[#52525b]">
          <span className="w-8 h-px bg-[#52525b]" />
          More on GitHub
        </div>
      </div>
    </section>
  );
};

export default Projects;