const AboutSection = () => (
  <section id="sobre-mi" className="py-24">
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="text-center mb-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Sobre mí</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">El profesional detrás de la estrategia</h2>
      </div>

      <div className="bg-card border border-border rounded-lg p-8 md:p-12">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
            <span className="text-3xl font-bold text-primary">AL</span>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Arquitecto Logístico</h3>
            <p className="text-muted-foreground mb-4">
              Soy ingeniero especializado en logística y operaciones con más de 15 años de experiencia transformando centros de distribución en Latinoamérica. He trabajado con empresas desde medianas hasta multinacionales, siempre con un mismo objetivo: convertir la logística de un centro de costo en una ventaja competitiva.
            </p>
            <p className="text-muted-foreground mb-4">
              Mi enfoque combina análisis de datos, ingeniería de procesos y visión estratégica para diseñar soluciones que funcionan en el mundo real — no en presentaciones de PowerPoint.
            </p>
            <p className="text-foreground font-medium">
              Mi propósito: ayudar a empresas ambiciosas a operar con la eficiencia de una empresa de clase mundial.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
