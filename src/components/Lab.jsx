import { Terminal, ArrowRight } from "lucide-react";
import { Section, FadeUp } from "./ui";
import { projects } from "../data";

export default function Lab() {
  const labProjects = projects.filter((p) => p.category === "Lab");

  return (
    <Section
      id="lab"
      eyebrow="03 · The Lab"
      title="Smaller experiments, in public."
      kicker="Side builds where I test ideas before they become full case studies."
    >
      <div className="grid gap-px overflow-hidden rounded-lg border border-ink-700 bg-ink-700 md:grid-cols-3">
        {labProjects.map((p, i) => (
          <FadeUp key={p.id} delay={i * 0.05} className="bg-ink-900 group">
            <div className="relative h-full p-6 transition-colors hover:bg-ink-800/80">
              <Terminal size={16} className="mb-4 text-signal-green/80" />
              <h4 className="mb-2 font-display text-lg font-medium text-bone-50">{p.title}</h4>
              <p className="text-sm text-bone-200">{p.description}</p>
              <div className="mt-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-bone-300">
                <span>{p.status}</span>
                <ArrowRight size={12} className="opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </Section>
  );
}
