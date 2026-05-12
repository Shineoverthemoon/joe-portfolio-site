import {
  Workflow,
  BrainCircuit,
  HeartPulse,
  LayoutDashboard,
  Package,
  FlaskConical,
} from "lucide-react";
import { Section, FadeUp } from "./ui";
import { capabilities } from "../data";

const iconMap = {
  Workflow,
  BrainCircuit,
  HeartPulse,
  LayoutDashboard,
  Package,
  FlaskConical,
};

export default function WhatIBuild() {
  return (
    <Section
      id="what-i-build"
      eyebrow="01 · What I Build"
      title="Six lanes, one operating system."
      kicker="Most engagements land in one of these six lanes. Same delivery style across all of them — ship a working slice fast, then expand."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((c, i) => {
          const Icon = iconMap[c.icon];
          return (
            <FadeUp key={c.title} delay={i * 0.05}>
              <div className="card card-hover h-full p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md border border-ink-700 bg-ink-800/70 text-signal-green">
                  {Icon && <Icon size={18} strokeWidth={1.75} />}
                </div>
                <h3 className="mb-2 font-display text-xl font-medium text-bone-50">{c.title}</h3>
                <p className="text-sm leading-relaxed text-bone-200">{c.body}</p>
              </div>
            </FadeUp>
          );
        })}
      </div>
    </Section>
  );
}
