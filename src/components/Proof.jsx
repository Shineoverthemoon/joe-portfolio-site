import { Check } from "lucide-react";
import { Section, FadeUp } from "./ui";
import { operatingStyle } from "../data";

export default function Proof() {
  return (
    <Section
      id="proof"
      eyebrow="05 · Operating Style"
      title="How I work, in five lines."
      kicker="Hire signal for technical leads, not marketing fluff."
    >
      <div className="grid gap-6 md:grid-cols-[2fr_1fr] md:gap-12">
        <div className="space-y-3">
          {operatingStyle.map((line, i) => (
            <FadeUp key={i} delay={i * 0.05}>
              <div className="flex items-start gap-4 rounded-md border border-ink-700/60 bg-ink-900/40 p-4 transition-colors hover:border-signal-green/40">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-sm border border-signal-green/40 bg-signal-green/10 text-signal-green">
                  <Check size={14} strokeWidth={2.5} />
                </div>
                <p className="text-base leading-relaxed text-bone-100">{line}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.1}>
          <div className="card sticky top-28 p-6 font-mono text-xs leading-relaxed text-bone-200">
            <div className="mb-4 flex items-center gap-2 text-bone-300">
              <span className="inline-block h-2 w-2 rounded-full bg-signal-red/80" />
              <span className="inline-block h-2 w-2 rounded-full bg-signal-amber/80" />
              <span className="inline-block h-2 w-2 rounded-full bg-signal-green/80" />
              <span className="ml-2 text-[10px] uppercase tracking-wider">first_engagement.log</span>
            </div>
            <div className="space-y-1.5">
              <p><span className="text-bone-300">→</span> <span className="text-signal-green">scope</span> defined in writing</p>
              <p><span className="text-bone-300">→</span> <span className="text-signal-green">demo</span> shipped before invoice</p>
              <p><span className="text-bone-300">→</span> <span className="text-signal-green">runbook</span> handed over</p>
              <p><span className="text-bone-300">→</span> <span className="text-signal-green">followup</span> 30 days after</p>
              <p className="pt-2 text-bone-300">
                <span className="text-bone-100">$</span> <span className="animate-blink">▌</span>
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </Section>
  );
}
