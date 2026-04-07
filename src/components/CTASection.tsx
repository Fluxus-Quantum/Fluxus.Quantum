import { MessageCircle } from "lucide-react";

const CTASection = () => (
  <section className="py-24 bg-surface-dark text-surface-dark-foreground">
    <div className="container mx-auto px-4 max-w-3xl text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Cada día sin optimizar su operación le cuesta dinero
      </h2>
      <p className="text-lg text-surface-dark-foreground/70 mb-10 max-w-xl mx-auto">
        Agende una asesoría gratuita hoy y descubra cuánto puede ahorrar en los próximos 90 días.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#contacto" className="px-8 py-4 rounded-md bg-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity">
          Agendar asesoría gratuita
        </a>
        <a
          href="https://wa.me/573000000000?text=Hola%2C%20quiero%20optimizar%20mi%20operaci%C3%B3n%20log%C3%ADstica"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 rounded-md border-2 border-surface-dark-foreground/30 text-surface-dark-foreground font-semibold text-lg hover:bg-surface-dark-foreground/10 transition-colors flex items-center justify-center gap-2"
        >
          <MessageCircle size={20} />
          WhatsApp directo
        </a>
      </div>
    </div>
  </section>
);

export default CTASection;
