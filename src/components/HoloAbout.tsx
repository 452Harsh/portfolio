"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const NODES = [
  { label: "Mumbai, India", x: 12, y: 10 },
  { label: "B.E. CS · 9.15 CGPA", x: 62, y: 2 },
  { label: "Shopify Apps & Themes", x: 78, y: 38 },
  { label: "Angular · RxJS", x: 8, y: 55 },
  { label: "Next.js Full-Stack", x: 44, y: 72 },
  { label: "AI Engineer", x: 80, y: 82 },
];

/** Holographic portrait: glass frame with pointer-tracked tilt + lighting. */
function HoloPortrait() {
  const ref = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [imgOk, setImgOk] = useState(true);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rx = useSpring(useTransform(py, [0, 1], [10, -10]), {
    stiffness: 150,
    damping: 20,
  });
  const ry = useSpring(useTransform(px, [0, 1], [-12, 12]), {
    stiffness: 150,
    damping: 20,
  });
  const lightX = useTransform(px, [0, 1], ["20%", "80%"]);
  const lightY = useTransform(py, [0, 1], ["15%", "85%"]);
  const lightBg = useTransform(
    [lightX, lightY],
    ([lx, ly]) =>
      `radial-gradient(420px circle at ${lx} ${ly}, rgba(52,211,153,0.2), rgba(45,212,191,0.06) 45%, transparent 70%)`,
  );

  // onError can fire before hydration and get lost — re-check after mount
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setImgOk(false);
  }, []);

  return (
    <div className="[perspective:1200px]">
      <motion.div
        ref={ref}
        className="holo-border relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl"
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        onPointerMove={(e) => {
          const r = ref.current!.getBoundingClientRect();
          px.set((e.clientX - r.left) / r.width);
          py.set((e.clientY - r.top) / r.height);
        }}
        onPointerLeave={() => {
          px.set(0.5);
          py.set(0.5);
        }}
        initial={{ opacity: 0, y: 60, rotateY: -20 }}
        whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        {imgOk ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            ref={imgRef}
            src="/profile.jpg"
            alt="Harsh Tuli, full-stack developer and AI engineer in Mumbai"
            className="h-full w-full object-cover opacity-90"
            onError={() => setImgOk(false)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[#0c0f0e]">
            <span className="bg-gradient-to-br from-emerald-300 to-teal-400 bg-clip-text text-8xl font-black text-transparent">
              HT
            </span>
          </div>
        )}

        {/* pointer-following light */}
        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{ background: lightBg }}
        />
        {/* scanline sweep */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 overflow-hidden opacity-60">
          <div className="scanline h-10 w-full bg-gradient-to-b from-transparent via-emerald-400/25 to-transparent" />
        </div>
        {/* HUD readout */}
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/70 to-transparent p-4 font-mono text-[10px] uppercase tracking-[0.25em] text-emerald-300/80">
          <span>ID // H.TULI</span>
          <span className="flex items-center gap-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="ring-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            Online
          </span>
        </div>
      </motion.div>
    </div>
  );
}

/** Facts rendered as data nodes wired together; pulses travel the circuits. */
function DataNodes() {
  return (
    <div className="relative mt-12 h-64 w-full">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        {NODES.slice(0, -1).map((n, i) => {
          const next = NODES[i + 1];
          const path = `M ${n.x + 8} ${n.y + 6} L ${(n.x + next.x) / 2 + 8} ${n.y + 6} L ${(n.x + next.x) / 2 + 8} ${next.y + 6} L ${next.x + 8} ${next.y + 6}`;
          return (
            <g key={i}>
              <path
                d={path}
                fill="none"
                stroke="rgba(52,211,153,0.22)"
                strokeWidth="0.3"
              />
              <circle r="0.7" fill="#34d399" opacity="0">
                <animateMotion
                  dur={`${2.4 + i * 0.5}s`}
                  repeatCount="indefinite"
                  path={path}
                  begin={`${i * 0.7}s`}
                />
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  keyTimes="0;0.1;0.9;1"
                  dur={`${2.4 + i * 0.5}s`}
                  repeatCount="indefinite"
                  begin={`${i * 0.7}s`}
                />
              </circle>
            </g>
          );
        })}
      </svg>
      {NODES.map((n, i) => (
        <motion.div
          key={n.label}
          className="absolute rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-[10px] tracking-wider text-emerald-100/90 backdrop-blur-sm sm:text-[11px]"
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
          initial={{ opacity: 0, scale: 0.4 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.15 * i,
            type: "spring",
            stiffness: 200,
            damping: 16,
          }}
        >
          <span className="mr-1.5 inline-block h-1 w-1 rounded-full bg-emerald-400 align-middle shadow-[0_0_8px_#34d399]" />
          {n.label}
        </motion.div>
      ))}
    </div>
  );
}

export default function HoloAbout() {
  return (
    <section id="about" className="py-24">
      <div className="mb-10 flex items-center gap-4">
        <span className="font-mono text-sm text-accent">01</span>
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-100">
          About
        </h2>
        <div className="h-px flex-1 bg-white/10" />
      </div>

      <div className="grid items-center gap-14 md:grid-cols-2">
        <HoloPortrait />

        <div>
          <motion.h3
            className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            Builder of things
            <span className="block bg-gradient-to-r from-emerald-300 to-teal-400 bg-clip-text text-transparent">
              that feel alive.
            </span>
          </motion.h3>

          <motion.p
            className="mt-6 max-w-lg leading-relaxed text-zinc-400"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            Computer Science graduate from VESIT, Mumbai (CGPA 9.15) turned
            production engineer at Iterforge Digital — shipping Shopify
            storefronts, custom commerce apps and Angular platforms by day,
            training speech-recognition models and chasing hackathon podiums
            by night.
          </motion.p>

          <DataNodes />
        </div>
      </div>
    </section>
  );
}
