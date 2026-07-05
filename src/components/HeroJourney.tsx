"use client";

import { motion } from "framer-motion";

const MILESTONES = [
  {
    year: "2021",
    title: "Higher Secondary (12th)",
    place: "JK Montessorie School, Jammu",
    metric: "89.2%",
  },
  {
    year: "2021 — 2025",
    title: "B.E. Computer Science",
    place: "VESIT, Mumbai",
    metric: "CGPA 9.15 / 10",
  },
  {
    year: "2025 — Present",
    title: "Developer @ Iterforge Digital",
    place: "Angular & Shopify · Mumbai",
    metric: "Currently shipping",
  },
];

/** Compact vertical journey: the line draws itself, milestones unlock with a glow. */
export default function HeroJourney() {
  return (
    <motion.div
      className="relative pl-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6 }}
    >
      <p className="mb-8 font-mono text-xs uppercase tracking-[0.35em] text-zinc-500">
        The journey <span className="text-accent">so far</span>
      </p>

      {/* the path draws itself */}
      <div className="absolute left-[9px] top-14 h-[calc(100%-4rem)] w-px bg-white/8" />
      <motion.div
        className="absolute left-[9px] top-14 w-px origin-top bg-gradient-to-b from-emerald-300 via-emerald-400 to-teal-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]"
        style={{ height: "calc(100% - 4rem)" }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.8, duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
      />

      <div className="space-y-9">
        {MILESTONES.map((m, i) => (
          <motion.div
            key={m.title}
            className="relative"
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.9 + i * 0.45,
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* milestone node unlocks with a glow burst */}
            <motion.span
              className="absolute -left-[2rem] top-1 flex h-5 w-5 items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 1.0 + i * 0.45,
                type: "spring",
                stiffness: 300,
                damping: 14,
              }}
            >
              <span className="ring-ping absolute h-full w-full rounded-full border border-emerald-400/60" />
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_#34d399]" />
            </motion.span>

            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-600">
              {m.year}
            </p>
            <h3 className="mt-1 text-sm font-semibold text-zinc-100">
              {m.title}
            </h3>
            <p className="mt-0.5 text-xs text-zinc-500">{m.place}</p>
            <p className="mt-1.5 inline-block rounded-full border border-emerald-400/25 bg-emerald-400/8 px-2.5 py-0.5 font-mono text-[10px] text-emerald-300">
              {m.metric}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
