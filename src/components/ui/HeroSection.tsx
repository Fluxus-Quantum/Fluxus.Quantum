import heroImg from "@/assets/hero-warehouse.jpg";
import { MessageCircle, ChevronDown } from "lucide-react";

const STATS = [
  { num: "40+", label: "empresas atendidas" },
  { num: "35%", label: "reducción promedio de costos" },
  { num: "90 días", label: "para ver resultados" },
];

const HeroSection = () => (
  <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img
      src={heroImg}
      alt="Centro de distribución moderno optimizado"
      width={1920}
      height={1080}
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />

    <div className="relative z-10 container mx-auto px-4 py-32 lg:py-40 text-center lg:text-left max-w-4xl">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 animate-fade-up">
        Arquitecto Logístico
      </p>
      <h1
        className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-surface-dark-foreground animate-fade-up text-balance"
        style={{ animationDelay: "0.1s" }}
      >
        Reduzca costos operativos hasta un{" "}
        <span className="text-primary">35%</span> en su centro de distribución
      </h1>
      <p
        className="mt-6 text-lg md:text-xl text-surface-dark-foreground/80 max-w-2xl animate-fade-up"
        style={{ animationDelay: "0.2s" }}
      >
        Metodología probada en{" "}
        <span className="text-surface-dark-foreground font-semibold">
          más de 40 empresas en LATAM
        </span>{" "}
        para que su empresa gane eficiencia, reduzca errores y escale sin fricciones.
      </p>

      {/* MEJORA 2 — CTAs con jerarquía clara */}
      <div
        className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up"
        style={{ animationDelay: "0.3s" }}
      >
        {/* Primario: sólido */}
        <a
          href="#contacto"
          className="px-8 py-4 rounded-md bg-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg text-center"
        >
          Agendar asesoría gratuita
        </a>

        {/* Secundario: texto + ícono, sin borde ni fondo */}
        <a
          href="https://wa.me/573000000000?text=Hola%2C%20quiero%20optimizar%20mi%20operaci%C3%B3n%20log%C3%ADstica"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-4 text-surface-dark-foreground/70 font-medium text-lg hover:text-surface-dark-foreground transition-colors flex items-center justify-center gap-2"
        >
          <MessageCircle size={20} className="text-green-400" />
          Contactar por WhatsApp
        </a>
      </div>

      {/* MEJORA 1 — Prueba social */}
      <div
        className="mt-12 pt-8 border-t border-surface-dark-foreground/15 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 sm:gap-10 animate-fade-up"
        style={{ animationDelay: "0.4s" }}
      >
        {STATS.map((stat, i) => (
          <div key={stat.label} className="flex items-center gap-6 sm:gap-10">
            <div className="text-center lg:text-left">
              <p className="text-2xl font-bold text-surface-dark-foreground">{stat.num}</p>
              <p className="text-xs text-surface-dark-foreground/50 mt-0.5">{stat.label}</p>
            </div>
            {i < STATS.length - 1 && (
              <div className="hidden sm:block w-px h-8 bg-surface-dark-foreground/15" />
            )}
          </div>
        ))}
      </div>
    </div>

    {/* MEJORA 3 — Scroll hint */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 animate-fade-up" style={{ animationDelay: "0.8s" }}>
      <span className="text-[11px] uppercase tracking-widest text-surface-dark-foreground/35">
        Conoce cómo
      </span>
      <ChevronDown
        size={20}
        className="text-surface-dark-foreground/35"
        style={{ animation: "bounce 1.8s ease-in-out infinite" }}
      />
    </div>

    {/* Keyframe para el bounce del scroll hint */}
    <style>{`
      @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50%       { transform: translateY(5px); }
      }
    `}</style>
  </section>
);

export default HeroSection;
