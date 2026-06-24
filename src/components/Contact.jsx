import { MessageCircle, Mail, FileText, Download, AtSign } from "lucide-react";
import { artist, socials, downloads } from "../data/content";
import Waveform from "./Waveform";

const SOCIAL_ICON = {
  Instagram: AtSign,
};

export default function Contact() {
  return (
    <footer id="contato" className="relative bg-zinc-950 border-t border-zinc-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-500">
            Contratações
          </span>
          <h2 className="font-display text-3xl sm:text-5xl text-ink mt-3 mb-4 text-balance">
            Vamos tocar na sua festa
          </h2>
          <p className="font-body text-sm sm:text-base text-zinc-400">
            Disponível para clubs, festivais e eventos privados. Resposta rápida por
            WhatsApp ou e-mail.
          </p>

          <Waveform className="h-6 w-40 mx-auto text-zinc-700 mt-8 mb-10" barCount={32} />

          {/* Primary contact actions */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href={artist.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 font-mono text-xs uppercase tracking-widest text-black transition-all duration-300 hover:bg-zinc-300"
            >
              <MessageCircle size={16} />
              Falar no WhatsApp
            </a>
            <a
              href={`mailto:${artist.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-700 bg-white/5 backdrop-blur-md px-6 py-3 font-mono text-xs uppercase tracking-widest text-ink transition-all duration-300 hover:border-zinc-400 hover:bg-white/10"
            >
              <Mail size={16} />
              Enviar E-mail
            </a>
          </div>
        </div>

        {/* EPK downloads */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          <a
            href={downloads.techRider}
            download
            className="group flex items-center justify-between rounded-sm border border-zinc-800 bg-black/40 px-5 py-4 transition-all duration-300 hover:border-zinc-600"
          >
            <span className="flex items-center gap-3">
              <FileText className="text-zinc-500" size={20} />
              <span className="font-body text-sm text-ink">
                Tech Rider <span className="text-zinc-500">/ Equipamentos</span>
              </span>
            </span>
            <Download
              size={16}
              className="text-zinc-600 transition-colors duration-300 group-hover:text-ink"
            />
          </a>

          <a
            href={downloads.pressKit}
            download
            className="group flex items-center justify-between rounded-sm border border-zinc-800 bg-black/40 px-5 py-4 transition-all duration-300 hover:border-zinc-600"
          >
            <span className="flex items-center gap-3">
              <FileText className="text-zinc-500" size={20} />
              <span className="font-body text-sm text-ink">
                Press Kit <span className="text-zinc-500">/ Fotos &amp; Bio</span>
              </span>
            </span>
            <Download
              size={16}
              className="text-zinc-600 transition-colors duration-300 group-hover:text-ink"
            />
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-900">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[11px] text-zinc-600 order-2 sm:order-1">
            © {new Date().getFullYear()} {artist.name}. Todos os direitos reservados.
          </p>
          <ul className="flex items-center gap-5 order-1 sm:order-2">
            {socials.map((social) => {
              const Icon = SOCIAL_ICON[social.label];
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 transition-colors duration-300 hover:text-ink flex items-center gap-1.5"
                  >
                    {Icon && <Icon size={14} />}
                    {social.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}
