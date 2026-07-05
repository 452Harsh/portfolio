"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/5 bg-zinc-950/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
        <a
          href="#top"
          className="font-mono text-sm font-semibold tracking-tight text-zinc-100"
        >
          harsh<span className="text-accent">.tuli</span>
        </a>
        <ul className="flex items-center sm:gap-2">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-1.5 py-1.5 text-xs text-zinc-400 transition-colors hover:bg-white/5 hover:text-zinc-100 sm:px-3 sm:text-sm"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
