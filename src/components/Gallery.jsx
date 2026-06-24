import { gallery } from "../data/content";

export default function Gallery() {
  return (
    <section id="galeria" className="relative bg-black py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-500">
          Galeria
        </span>
        <h2 className="font-display text-3xl sm:text-4xl text-ink mt-3 mb-10 sm:mb-12">
          Pista &amp; Cabine
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 auto-rows-[160px] sm:auto-rows-[220px] gap-2 sm:gap-3">
          {gallery.map((src, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-sm border border-zinc-800 ${
                i === 0 ? "col-span-2 sm:col-span-2 row-span-2" : ""
              }`}
            >
              <img
                src={src}
                alt={`Registro de evento ${i + 1}`}
                loading="lazy"
                className="h-full w-full object-cover grayscale-[15%] transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
