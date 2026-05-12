import { useMemo, useState } from "react";
import { ArrowUpRight, Lock } from "lucide-react";
import { Section, FadeUp, StatusPill } from "./ui";
import { projects, filters } from "../data";

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.category === active);
  }, [active]);

  return (
    <Section
      id="projects"
      eyebrow="02 · Featured Projects"
      title="Work that's actually shipped, demoed, or in production."
      kicker="Each project links to a live demo, a public store, or — where the client data is sensitive — a sanitized case study."
    >
      {/* Filter chips */}
      <FadeUp className="mb-8 -mx-1 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`rounded-full border px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wider transition-all ${
              active === f
                ? "border-signal-green bg-signal-green/10 text-signal-green"
                : "border-ink-700 text-bone-200 hover:border-bone-300"
            }`}
          >
            {f}
            {active === f && <span className="ml-1.5 text-signal-green/60">·</span>}
            {active === f && (
              <span className="ml-0.5 text-signal-green/80">{filtered.length}</span>
            )}
          </button>
        ))}
      </FadeUp>

      {/* Grid */}
      <div className="grid gap-5 md:grid-cols-2">
        {filtered.map((p, i) => (
          <FadeUp key={p.id} delay={i * 0.04}>
            <article className="card card-hover group flex h-full flex-col p-6">
              {/* Top row: category + status */}
              <div className="mb-5 flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-wider text-bone-300">
                  {p.category}
                </span>
                <StatusPill status={p.status} />
              </div>

              {/* Title */}
              <h3 className="mb-3 font-display text-2xl font-medium leading-tight text-bone-50">
                {p.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-bone-200">{p.description}</p>

              {/* Safe note */}
              {p.note && (
                <p className="mt-3 flex items-start gap-2 text-xs italic text-bone-300">
                  <Lock size={12} className="mt-0.5 shrink-0" />
                  {p.note}
                </p>
              )}

              {/* Tags + link */}
              <div className="mt-auto pt-6">
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="badge">{t}</span>
                  ))}
                </div>
                {p.linkType === "live" && p.link ? (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-signal-green transition-all group-hover:gap-2.5"
                  >
                    {p.linkLabel || "Open"}
                    <ArrowUpRight size={14} />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-bone-300">
                    <Lock size={12} />
                    {p.linkType === "request" && "Demo available on request"}
                    {p.linkType === "sanitized" && "Sanitized demo only — no real client data"}
                    {p.linkType === "soon" && "Case study coming soon"}
                    {!p.linkType && "Case study on request"}
                  </span>
                )}
              </div>
            </article>
          </FadeUp>
        ))}
      </div>
    </Section>
  );
}
