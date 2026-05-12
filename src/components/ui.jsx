import { motion } from "framer-motion";

// Small fade-up wrapper used everywhere
export function FadeUp({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Section wrapper with consistent padding + eyebrow label
export function Section({ id, eyebrow, title, kicker, children, className = "" }) {
  return (
    <section id={id} className={`relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 ${className}`}>
      {(eyebrow || title) && (
        <FadeUp className="mb-12 max-w-3xl">
          {eyebrow && (
            <div className="eyebrow mb-3 flex items-center gap-2">
              <span className="inline-block h-px w-6 bg-signal-green/60" />
              <span>{eyebrow}</span>
            </div>
          )}
          {title && (
            <h2 className="font-display display-h text-3xl font-medium leading-[1.1] tracking-tight text-bone-50 sm:text-5xl">
              {title}
            </h2>
          )}
          {kicker && <p className="mt-4 max-w-2xl text-base text-bone-200 sm:text-lg">{kicker}</p>}
        </FadeUp>
      )}
      {children}
    </section>
  );
}

// Status pill — matches status string
export function StatusPill({ status }) {
  const map = {
    "Live": "status-live",
    "In Progress": "status-progress",
    "Demo": "status-demo",
    "Synthetic Demo": "status-demo",
    "Sanitized Demos": "status-demo",
    "Private System": "status-private",
  };
  return (
    <span className={`badge status-dot ${map[status] || "status-demo"}`}>{status}</span>
  );
}
