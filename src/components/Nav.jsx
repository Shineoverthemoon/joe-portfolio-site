import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { contact } from "../data";

const links = [
  { href: "#what-i-build", label: "What I Build" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Work With Me" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-ink-700/60 bg-ink-950/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="group flex items-center gap-2 font-mono text-sm font-semibold text-bone-50">
          <span className="text-signal-green">jq</span>
          <span className="text-bone-300 group-hover:text-bone-100 transition-colors">/ joseph quinn</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-xs uppercase tracking-wider text-bone-200 transition-colors hover:text-signal-green"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            {contact.resume && (
              <a href={contact.resume} download className="btn-ghost py-1.5 text-xs">
                Resume
              </a>
            )}
          </li>
        </ul>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden rounded-md border border-ink-700 p-2 text-bone-100"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-ink-700/60 bg-ink-950/95 backdrop-blur-md">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-4 sm:px-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-mono text-sm uppercase tracking-wider text-bone-200 hover:text-signal-green"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              {contact.resume && (
                <a
                  href={contact.resume}
                  download
                  onClick={() => setOpen(false)}
                  className="block py-3 font-mono text-sm uppercase tracking-wider text-signal-green"
                >
                  Download Resume ↓
                </a>
              )}
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
