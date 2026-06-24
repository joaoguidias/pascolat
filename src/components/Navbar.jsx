import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { artist } from "../data/content";

const LINKS = [
  { label: "Bio", href: "#bio" },
  { label: "Sets", href: "#sets" },
  { label: "Agenda", href: "#agenda" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-md border-b border-zinc-800"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <a
          href="#top"
          className="font-['Scaves'] text-lg tracking-wide text-ink"
        >
          {artist.name}{" "}
          <span className="text-smoke text-sm align-middle">
            ({artist.country})
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-smoke">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors duration-300 hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center text-ink"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-64 border-t border-zinc-800" : "max-h-0"
        } bg-black/90 backdrop-blur-md`}
      >
        <ul className="flex flex-col px-4 sm:px-6 py-2 font-mono text-sm uppercase tracking-widest text-smoke">
          {LINKS.map((link) => (
            <li key={link.href} className="border-b border-zinc-900 last:border-none">
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-4 transition-colors duration-300 hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
