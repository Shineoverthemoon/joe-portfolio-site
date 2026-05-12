import { Mail, ArrowUpRight } from "lucide-react";
import { Section, FadeUp } from "./ui";
import { services, contact } from "../data";

export default function Services() {
  return (
    <Section
      id="services"
      eyebrow="04 · Ways I Can Help"
      title="Fixed-scope engagements, clear deliverables, and practical timelines."
      kicker="Most first projects are scoped, priced, and delivered in 1–3 weeks. The goal is to ship a working thing — not a deck."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {services.map((s, i) => (
          <FadeUp key={s.title} delay={i * 0.04}>
            <div className="card h-full p-6 transition-colors hover:border-signal-green/40">
              <div className="mb-3 flex items-center gap-3">
                <span className="font-mono text-[11px] text-signal-green">0{i + 1}</span>
                <span className="h-px flex-1 bg-ink-700" />
              </div>
              <h3 className="mb-2 font-display text-lg font-medium text-bone-50">{s.title}</h3>
              <p className="text-sm leading-relaxed text-bone-200">{s.body}</p>
            </div>
          </FadeUp>
        ))}
      </div>

      <FadeUp delay={0.15} className="mt-12">
        <div className="card relative overflow-hidden p-8 sm:p-10">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-signal-green/5 blur-3xl" aria-hidden />
          <div className="relative max-w-2xl">
            <p className="font-display text-xl font-medium leading-snug text-bone-50 sm:text-2xl">
              Have a messy workflow, broken process, or technical idea that needs to become usable?
              <span className="text-bone-300"> Send me a message.</span>
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="btn-primary">
                Start a conversation
                <Mail size={16} />
              </a>
              <a
                href={contact.gumroad}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Browse digital products
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </FadeUp>
    </Section>
  );
}
