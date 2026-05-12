import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, FileDown } from "lucide-react";
import { identity, contact } from "../data";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-50" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink-950/0 to-ink-950" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* Terminal-style identity strip */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-3 rounded-md border border-ink-700/80 bg-ink-900/60 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-bone-200 backdrop-blur-sm"
        >
          <span className="flex h-2 w-2">
            <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-signal-green/60 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-signal-green" />
          </span>
          <span className="text-signal-green">available</span>
          <span className="text-bone-300">·</span>
          <span>{identity.role}</span>
        </motion.div>

        {/* Availability line */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mb-6 font-mono text-xs uppercase tracking-wider text-bone-200 sm:text-[13px]"
        >
          <span className="text-bone-300">→ </span>
          Open to <span className="text-bone-50">Solutions Engineer</span>,{" "}
          <span className="text-bone-50">Integration Engineer</span>, and{" "}
          <span className="text-bone-50">fixed-scope automation work</span>.
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display display-h max-w-5xl text-4xl font-medium leading-[1.05] tracking-tight text-bone-50 sm:text-6xl lg:text-7xl"
        >
          I build automation,{" "}
          <span className="text-signal-green">AI-assisted tools</span>, and workflow systems that turn{" "}
          <span className="italic text-bone-200">messy processes</span>{" "}
          into usable products, reports, and demos.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-8 max-w-2xl text-base text-bone-200 sm:text-lg"
        >
          {identity.subheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a href="#projects" className="btn-primary">
            View Projects
            <ArrowDown size={16} />
          </a>
          <a href="#services" className="btn-ghost">
            Work With Me
            <ArrowUpRight size={16} />
          </a>
          {contact.resume && (
            <a href={contact.resume} download className="btn-ghost">
              Download Resume
              <FileDown size={16} />
            </a>
          )}
        </motion.div>

        {/* Stack ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-wider text-bone-300"
        >
          <span className="text-bone-300/60">stack //</span>
          {["Mirth", "HL7", "Python", "SQL", "React", "Vite", "APIs", "SFTP", "AI tooling"].map((s) => (
            <span key={s}>{s}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
