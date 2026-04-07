const metrics = [
  { value: "+15", label: "Años de experiencia" },
  { value: "+50", label: "Proyectos ejecutados" },
  { value: "35%", label: "Reducción promedio de costos" },
  { value: "98%", label: "Clientes satisfechos" },
];

const differentials = [
  "Enfoque 100% en resultados medibles",
  "Metodología probada en +50 centros de distribución",
  "Acompañamiento de principio a fin",
  "Soluciones personalizadas, no plantillas genéricas",
  "ROI demostrable en los primeros 90 días",
];

const AuthoritySection = () => (
  <section className="py-24 bg-surface-dark text-surface-dark-foreground">
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="text-center mb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Trayectoria</p>
        <h2 className="text-3xl md:text-4xl font-bold">Resultados que respaldan cada recomendación</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        {metrics.map((m) => (
          <div key={m.label} className="text-center">
            <p className="text-4xl md:text-5xl font-extrabold text-primary">{m.value}</p>
            <p className="mt-2 text-sm text-surface-dark-foreground/70">{m.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-surface-dark-foreground/5 rounded-lg p-8 md:p-12 border border-surface-dark-foreground/10">
        <h3 className="text-xl font-bold mb-6">¿Por qué elegirme?</h3>
        <ul className="grid md:grid-cols-2 gap-4">
          {differentials.map((d) => (
            <li key={d} className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <span className="text-surface-dark-foreground/80">{d}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default AuthoritySection;
