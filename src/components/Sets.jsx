import { Headphones } from "lucide-react";
import { sets } from "../data/content";
import Waveform from "./Waveform";

export default function Sets() {
  return (
    <section id="sets" className="relative bg-black py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10 sm:mb-12">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-500">
              Sets
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-ink mt-3">
              Ouça a Seleção
            </h2>
          </div>
          <Headphones className="hidden sm:block text-zinc-700" size={32} strokeWidth={1.5} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {sets.map((set) => (
            <div
              key={set.id}
              className="group rounded-sm border border-zinc-800 bg-zinc-950/60 backdrop-blur-sm p-4 sm:p-5 transition-all duration-300 hover:border-zinc-600"
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <div>
                  <h3 className="font-body font-semibold text-ink text-base">
                    {set.title}
                  </h3>
                  <p className="font-mono text-xs text-zinc-500 mt-1">
                    {set.description}
                  </p>
                </div>
                <Waveform
                  className="h-6 w-14 shrink-0 text-zinc-700 transition-colors duration-300 group-hover:text-zinc-500"
                  barCount={16}
                />
              </div>

              <div className="overflow-hidden rounded-sm border border-zinc-900">
                <iframe
                  title={set.title}
                  width="100%"
                  height="120"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src={set.embedUrl}
                  className="block w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
