import { Settings, BarChart3, PackageSearch, Workflow, Cpu } from "lucide-react";

const services = [
  {
    icon: Settings,
    name: "Optimización de Operaciones",
    desc: "Rediseño de flujos operativos en picking, packing, recepción y despacho.",
    benefit: "Reducción de tiempos muertos hasta 40%",
    result: "Operación más ágil con menos recursos.",
  },
  {
    icon: BarChart3,
    name: "Reducción de Costos Logísticos",
    desc: "Análisis de costos ocultos y reestructuración de procesos para eliminar desperdicios.",
    benefit: "Ahorro promedio del 20-35% en costos operativos",
    result: "Mayor rentabilidad sin sacrificar calidad.",
  },
  {
    icon: PackageSearch,
    name: "Gestión Estratégica de Inventarios",
    desc: "Implementación de modelos de inventario inteligentes y sistemas de control.",
    benefit: "Precisión de inventario superior al 98%",
    result: "Menos quiebres de stock y menos capital inmovilizado.",
  },
  {
    icon: Workflow,
    name: "Diseño de Layout y Flujos",
    desc: "Diseño o rediseño de la distribución física del centro de distribución.",
    benefit: "Incremento de capacidad hasta 30% sin ampliar espacio",
    result: "Mejor aprovechamiento de cada metro cuadrado.",
  },
  {
    icon: Cpu,
    name: "Integración Tecnológica (WMS/TMS)",
    desc: "Selección, implementación y optimización de sistemas de gestión logística.",
    benefit: "Visibilidad en tiempo real de toda la operación",
    result: "Decisiones basadas en datos, no suposiciones.",
  },
];

const ServicesSection = () => (
  <section id="servicios" className="py-24">
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="text-center mb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Servicios</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Soluciones diseñadas para resultados concretos</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s) => (
          <div key={s.name} className="group bg-card border border-border rounded-lg p-8 hover:border-primary/50 hover:shadow-xl transition-all">
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <s.icon className="text-primary" size={28} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">{s.name}</h3>
            <p className="text-muted-foreground text-sm mb-4">{s.desc}</p>
            <div className="border-t border-border pt-4 mt-auto">
              <p className="text-sm font-semibold text-primary">{s.benefit}</p>
              <p className="text-xs text-muted-foreground mt-1">{s.result}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
