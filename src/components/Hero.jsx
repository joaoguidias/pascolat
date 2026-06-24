import { ChevronDown } from "lucide-react";
import { artist } from "../data/content";
import Waveform from "./Waveform";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-black"
    >
      {/* Background image */}
      <img
        src={artist.heroImage}
        alt="Cabine de DJ na penumbra"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Dark overlay for legibility */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />

      <div className="relative z-10 flex flex-col items-center px-4 sm:px-6 lg:px-8 text-center animate-fadeUp">
        <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.3em] text-zinc-400 mb-4">
          Electronic Press Kit
        </span>

        <h1 className="font-display leading-[0.95] text-ink text-balance text-[15vw] sm:text-[10vw] md:text-[7.5rem] lg:text-[8.5rem]">
          {artist.name}
          <span className="block text-zinc-500 text-[8vw] sm:text-[5vw] md:text-5xl lg:text-6xl mt-1">
            ({artist.country})
          </span>
        </h1>

        <p className="mt-5 font-body text-sm sm:text-base text-zinc-300 tracking-wide">
          {artist.genres}
        </p>

        <Waveform className="h-8 w-48 sm:w-64 mt-8 text-zinc-600" animated barCount={40} />

        <a
          href="#sets"
          className="group mt-10 inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-white/5 backdrop-blur-md px-6 py-3 font-mono text-xs uppercase tracking-widest text-ink transition-all duration-300 hover:border-zinc-400 hover:bg-white/10"
        >
          Ouça os Sets
          <ChevronDown
            size={14}
            className="transition-transform duration-300 group-hover:translate-y-0.5"
          />
        </a>
      </div>
    </section>
  );
}
