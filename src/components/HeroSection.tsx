import heroImg from "@/assets/hero-warehouse.jpg";
import { MessageCircle } from "lucide-react";

const HeroSection = () => (
  <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img src={heroImg} alt="Centro de distribución moderno optimizado" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />

    <div className="relative z-10 container mx-auto px-4 py-32 lg:py-40 text-center lg:text-left max-w-4xl">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 animate-fade-up">Arquitecto Logístico</p>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-surface-dark-foreground animate-fade-up text-balance" style={{ animationDelay: "0.1s" }}>
        Reduzca costos operativos hasta un 35% en su centro de distribución
      </h1>
      <p className="mt-6 text-lg md:text-xl text-surface-dark-foreground/80 max-w-2xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
        Optimizo operaciones logísticas con metodología probada para que su empresa gane eficiencia, reduzca errores y escale sin fricciones.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.3s" }}>
        <a href="#contacto" className="px-8 py-4 rounded-md bg-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg">
          Agendar asesoría gratuita
        </a>
        <a
          href="https://wa.me/573000000000?text=Hola%2C%20quiero%20optimizar%20mi%20operaci%C3%B3n%20log%C3%ADstica"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 rounded-md border-2 border-surface-dark-foreground/30 text-surface-dark-foreground font-semibold text-lg hover:bg-surface-dark-foreground/10 transition-colors flex items-center justify-center gap-2"
        >
          <MessageCircle size={20} />
          Contactar por WhatsApp
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
