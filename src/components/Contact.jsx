import React, { useState } from "react";
import { Mail, Phone, Copy, Check, ArrowUpRight, Globe } from "lucide-react";
import { toast, Toaster } from "sonner";
import { profile } from "../data/resume";

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);

      setCopied(true);

      toast.success("Email copied to clipboard", {
        description: profile.email,
      });

      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      toast.error("Could not copy");
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="py-24 lg:py-32 relative"
    >
      <Toaster
        position="bottom-right"
        theme="dark"
        toastOptions={{
          style: {
            fontFamily: "JetBrains Mono, monospace",
            background: "#0f0f0f",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "#ededed",
            borderRadius: 0,
          },
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-[#ccff00] mb-6">
          [05] / Contact
        </div>

        <h2
          data-testid="contact-heading"
          className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#ededed] leading-[0.9] max-w-5xl"
        >
          Let's build
          <br />
          <span className="text-[#ededed]/30">something</span>{" "}
          <span className="text-[#ccff00]">together.</span>
        </h2>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-px bg-white/10 border border-white/10">
          {/* Email block */}
          <button
            data-testid="copy-email-btn"
            onClick={copyEmail}
            className="lg:col-span-8 bg-[#0f0f0f] p-8 lg:p-12 text-left group hover:bg-[#1a1a1a] transition-colors"
          >
            <div className="flex items-start justify-between mb-8">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#52525b]">
                // email · click to copy
              </div>

              {copied ? (
                <Check size={20} className="text-[#ccff00]" />
              ) : (
                <Copy
                  size={20}
                  className="text-[#a1a1aa] group-hover:text-[#ccff00] transition-colors"
                />
              )}
            </div>

            <div className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#ededed] group-hover:text-[#ccff00] transition-colors break-all">
              {profile.email}
            </div>
          </button>

          {/* Phone block */}
          <a
            data-testid="phone-link"
            href={`tel:${profile.phone}`}
            className="lg:col-span-4 bg-[#0f0f0f] p-8 lg:p-12 group hover:bg-[#1a1a1a] transition-colors flex flex-col"
          >
            <div className="flex items-start justify-between mb-8">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#52525b]">
                // phone
              </div>

              <Phone
                size={18}
                className="text-[#a1a1aa] group-hover:text-[#ccff00] transition-colors"
              />
            </div>

            <div className="font-display text-xl sm:text-2xl text-[#ededed] mt-auto group-hover:text-[#ccff00] transition-colors">
              {profile.phone}
            </div>
          </a>

          {/* LinkedIn */}
          <a
            data-testid="linkedin-link"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="lg:col-span-6 bg-[#0f0f0f] p-8 lg:p-10 group hover:bg-[#1a1a1a] transition-colors flex items-center justify-between"
          >
            <div className="flex items-center gap-5">
              <Globe size={22} className="text-[#ededed] group-hover:text-[#ccff00] transition-colors" />

              <div>
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#52525b]">
                  // linkedin
                </div>

                <div className="font-display text-lg text-[#ededed] mt-1">
                  abhiram-hirde
                </div>
              </div>
            </div>

            <ArrowUpRight
              size={22}
              className="text-[#a1a1aa] group-hover:text-[#ccff00] group-hover:-translate-y-1 group-hover:translate-x-1 transition-all"
            />
          </a>

          {/* Resume */}
          <a
            data-testid="contact-resume-link"
            href={profile.resumeUrl}
            download
            className="lg:col-span-6 bg-[#ccff00] p-8 lg:p-10 group hover:bg-[#b3e600] transition-colors flex items-center justify-between"
          >
            <div className="flex items-center gap-5">
              <Mail size={22} className="text-[#050505]" />

              <div>
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#050505]/70">
                  // resume.pdf
                </div>

                <div className="font-display text-lg text-[#050505] mt-1">
                  Download CV
                </div>
              </div>
            </div>

            <ArrowUpRight
              size={22}
              className="text-[#050505] group-hover:-translate-y-1 group-hover:translate-x-1 transition-all"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;