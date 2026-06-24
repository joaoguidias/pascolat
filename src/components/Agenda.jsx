import { upcomingGigs, pastGigs } from "../data/content";

function formatDate(iso) {
  const [year, month, day] = iso.split("-");
  return `${day}/${month}/${year}`;
}

function StatusBadge({ status }) {
  const isConfirmed = status === "Confirmado";
  const isPast = status === "Realizado";

  const styles = isConfirmed
    ? "border-zinc-400 text-ink"
    : isPast
    ? "border-zinc-800 text-zinc-500"
    : "border-zinc-700 text-zinc-400";

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-widest ${styles}`}
    >
      {status}
    </span>
  );
}

function GigRow({ gig }) {
  return (
    <div className="grid grid-cols-[auto_1fr_auto] sm:grid-cols-[110px_1fr_140px_auto] items-center gap-3 sm:gap-4 border-b border-zinc-900 py-4 px-1">
      <span className="font-mono text-xs sm:text-sm text-zinc-500">
        {formatDate(gig.date)}
      </span>
      <div className="min-w-0">
        <p className="font-body text-sm sm:text-base text-ink truncate">{gig.event}</p>
        <p className="font-mono text-[11px] sm:hidden text-zinc-500 mt-0.5">{gig.place}</p>
      </div>
      <span className="hidden sm:block font-mono text-xs text-zinc-500">{gig.place}</span>
      <StatusBadge status={gig.status} />
    </div>
  );
}

function GigGroup({ title, gigs }) {
  return (
    <div>
      <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-500 mb-2">
        {title}
      </h3>
      <div className="rounded-sm border border-zinc-800 bg-zinc-950/40 px-3 sm:px-4">
        {gigs.map((gig, i) => (
          <GigRow key={i} gig={gig} />
        ))}
      </div>
    </div>
  );
}

export default function Agenda() {
  return (
    <section id="agenda" className="relative bg-zinc-950 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-500">
          Agenda
        </span>
        <h2 className="font-display text-3xl sm:text-4xl text-ink mt-3 mb-10 sm:mb-12">
          Datas e Shows
        </h2>

        <div className="space-y-10">
          <GigGroup title="Próximas Datas" gigs={upcomingGigs} />
          <GigGroup title="Gigs Recentes" gigs={pastGigs} />
        </div>
      </div>
    </section>
  );
}
