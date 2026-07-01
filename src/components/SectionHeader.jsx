import React from "react";

export const SectionHeader = ({ index, title, subtitle, id }) => {
  return (
    <div
      id={id}
      className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
    >
      <div>
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-[#ccff00] mb-3">
          [{index}] / {subtitle}
        </div>

        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#ededed]">
          {title}
        </h2>
      </div>

      <div className="hidden sm:block flex-1 ml-8 border-b border-white/10 mb-3" />
    </div>
  );
};

export default SectionHeader;