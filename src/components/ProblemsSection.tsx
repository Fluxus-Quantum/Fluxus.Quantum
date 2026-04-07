import { AlertTriangle, TrendingDown, Clock, ShieldX } from "lucide-react";

const problems = [
  { icon: TrendingDown, title: "Costos operativos elevados", desc: "Procesos ineficientes que consumen presupuesto sin generar valor." },
  { icon: Clock, title: "Tiempos de entrega impredecibles", desc: "Retrasos constantes que afectan la satisfacción del cliente." },
  { icon: AlertTriangle, title: "Errores en inventario", desc: "Diferencias entre inventario físico y digital que generan pérdidas." },
  { icon: ShieldX, title: "Falta de escalabilidad", desc: "Operaciones que colapsan al crecer la demanda." },
];

const ProblemsSection = () => (
  <section className="py-24 bg-secondary">
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="text-center mb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">El desafío</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">¿Su operación logística está frenando su crecimiento?</h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Estos problemas cuestan a las empresas entre un 15% y 30% de su presupuesto logístico anual. La buena noticia: tienen solución.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {problems.map((p) => (
          <div key={p.title} className="bg-card rounded-lg p-6 border border-border hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
              <p.icon className="text-primary" size={24} />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground">{p.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-card rounded-lg p-8 md:p-12 border border-border text-center">
        <h3 className="text-2xl font-bold text-foreground mb-4">La solución: Arquitectura Logística Estratégica</h3>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Analizo, diseño y optimizo cada proceso de su centro de distribución con un enfoque integral que combina ingeniería de procesos, tecnología y mejores prácticas globales para entregar resultados medibles en semanas, no meses.
        </p>
      </div>
    </div>
  </section>
);

export default ProblemsSection;
