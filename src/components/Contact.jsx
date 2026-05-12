import { useState } from "react";
import { Mail, Linkedin, Github, ArrowUpRight, Send, Info } from "lucide-react";
import { Section, FadeUp } from "./ui";
import { contact } from "../data";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Wiring coming later — Netlify Forms or Formspree.
  };

  return (
    <Section
      id="contact"
      eyebrow="06 · Contact"
      title="Let's talk."
      kicker="Best for: scoped automation work, integration troubleshooting, SE/IE conversations, or interesting builds."
    >
      <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:gap-12">
        {/* Contact methods */}
        <FadeUp className="space-y-3">
          <ContactRow
            href={`mailto:${contact.email}`}
            label="Email"
            value={contact.email}
            icon={Mail}
          />
          <ContactRow
            href={contact.linkedin}
            label="LinkedIn"
            value={contact.linkedin}
            icon={Linkedin}
            external
          />
          <ContactRow
            href={contact.github}
            label="GitHub"
            value={contact.github}
            icon={Github}
            external
          />
          <ContactRow
            href={contact.gumroad}
            label="Gumroad"
            value="Digital products & study bundles"
            icon={ArrowUpRight}
            external
          />
        </FadeUp>

        {/* Form */}
        <FadeUp delay={0.1}>
          <div className="card p-6 sm:p-8">
            <div className="mb-6 flex items-start gap-2 rounded-md border border-signal-amber/30 bg-signal-amber/5 p-3 text-xs text-bone-200">
              <Info size={14} className="mt-0.5 shrink-0 text-signal-amber" />
              <span>
                Contact form wiring is coming soon. For now,{" "}
                <span className="text-bone-50">email</span> or{" "}
                <span className="text-bone-50">LinkedIn</span> is best.
              </span>
            </div>

            {submitted ? (
              <div className="rounded-md border border-signal-green/30 bg-signal-green/5 p-5 text-sm text-bone-100">
                Thanks — once the form is wired this will route to my inbox. In the meantime,
                please email or message me on LinkedIn.
              </div>
            ) : (
              <div className="space-y-4">
                <Field label="Name" type="text" name="name" placeholder="Your name" />
                <Field label="Email" type="email" name="email" placeholder="you@company.com" />
                <Field
                  label="What do you need built or fixed?"
                  type="textarea"
                  name="message"
                  placeholder="A few sentences is fine — context, urgency, budget range if you have one."
                />
                <button onClick={handleSubmit} className="btn-primary w-full justify-center">
                  Send message
                  <Send size={14} />
                </button>
              </div>
            )}
          </div>
        </FadeUp>
      </div>
    </Section>
  );
}

function ContactRow({ href, label, value, icon: Icon, external }) {
  const isPlaceholder = typeof value === "string" && value.startsWith("[");
  return (
    <a
      href={isPlaceholder ? "#" : href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`card card-hover flex items-center gap-4 p-4 ${
        isPlaceholder ? "pointer-events-none opacity-60" : ""
      }`}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-md border border-ink-700 bg-ink-800/70 text-signal-green">
        <Icon size={16} strokeWidth={1.75} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-mono text-[10px] uppercase tracking-wider text-bone-300">{label}</p>
        <p className="truncate text-sm text-bone-100">{value}</p>
      </div>
      {!isPlaceholder && <ArrowUpRight size={14} className="shrink-0 text-bone-300" />}
    </a>
  );
}

function Field({ label, type, name, placeholder }) {
  const baseInput =
    "w-full rounded-md border border-ink-700 bg-ink-950/60 px-3.5 py-2.5 text-sm text-bone-100 placeholder:text-bone-300/60 transition-colors focus:border-signal-green/60 focus:outline-none focus:ring-1 focus:ring-signal-green/40";
  return (
    <label className="block">
      <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-wider text-bone-300">
        {label}
      </span>
      {type === "textarea" ? (
        <textarea name={name} placeholder={placeholder} rows={4} className={baseInput} />
      ) : (
        <input type={type} name={name} placeholder={placeholder} className={baseInput} />
      )}
    </label>
  );
}
