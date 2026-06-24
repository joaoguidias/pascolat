/**
 * Waveform — elemento de assinatura do site.
 * Uma forma de onda de áudio estilizada, reutilizada como divisor entre
 * seções e como motivo decorativo perto do hero e dos players de set.
 * `animated` faz as barras centrais pulsarem, sugerindo áudio em reprodução.
 */
export default function Waveform({ className = "", animated = false, barCount = 48 }) {
  const bars = Array.from({ length: barCount }, (_, i) => {
    // padrão pseudo-aleatório mas determinístico, com pico suave no centro
    const center = barCount / 2;
    const distFromCenter = Math.abs(i - center) / center;
    const base = 0.25 + Math.sin(i * 0.7) * 0.15 + Math.cos(i * 0.3) * 0.1;
    const envelope = 1 - distFromCenter * 0.5;
    const height = Math.max(0.12, Math.min(1, base * envelope + 0.3));
    return height;
  });

  return (
    <div
      className={`flex items-end justify-center gap-[3px] ${className}`}
      aria-hidden="true"
    >
      {bars.map((h, i) => (
        <span
          key={i}
          className={`w-[2px] sm:w-[3px] rounded-full bg-current ${
            animated ? "animate-pulseLine" : ""
          }`}
          style={{
            height: `${h * 100}%`,
            animationDelay: animated ? `${(i % 12) * 0.07}s` : undefined,
          }}
        />
      ))}
    </div>
  );
}
