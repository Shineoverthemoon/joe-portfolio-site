import { identity } from "../data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink-700/60 bg-ink-950/80">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 py-8 sm:flex-row sm:items-center sm:px-8">
        <p className="font-mono text-xs text-bone-300">
          <span className="text-signal-green">jq</span> · {identity.name} · © {year}
        </p>
        <p className="font-mono text-[11px] uppercase tracking-wider text-bone-300">
          Built with React, Vite, Tailwind · Deployed on Netlify
        </p>
      </div>
    </footer>
  );
}
