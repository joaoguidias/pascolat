import { artist } from "../data/content";
import Waveform from "./Waveform";

export default function About() {
  return (
    <section id="bio" className="relative bg-zinc-950 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16 items-center">
          {/* Image */}
          <div className="relative order-1">
            <div className="relative overflow-hidden rounded-lg border border-zinc-800">
              <img
                src={artist.aboutImage}
                alt={`Retrato de ${artist.name}`}
                className="h-[420px] sm:h-[480px] md:h-[560px] w-full object-cover grayscale-[85%] contrast-95 brightness-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </div>
          </div>

          {/* Text */}
          <div className="order-2">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-500">
              Bio
            </span>
            <h2 className="font-['Scaves'] text-3xl sm:text-4xl text-ink mt-3 mb-2">
              {artist.name}
            </h2>
            <p className="font-body text-sm text-zinc-400 mb-6">{artist.tagline}</p>

            <Waveform className="h-4 w-32 text-zinc-700 mb-6" barCount={28} />

            <div className="space-y-4">
              {artist.bio.map((paragraph, i) => (
                <p
                  key={i}
                  className="font-body text-[15px] sm:text-base leading-relaxed text-zinc-300"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
