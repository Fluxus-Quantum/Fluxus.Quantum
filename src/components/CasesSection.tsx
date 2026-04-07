import { ArrowRight } from "lucide-react";

const CasesSection = () => (
  <section id="resultados" className="py-24 bg-secondary">
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="text-center mb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Caso de éxito</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">De la ineficiencia a la excelencia operativa</h2>
      </div>

      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <div className="grid md:grid-cols-3">
          {/* Problem */}
          <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-border">
            <span className="inline-block px-3 py-1 rounded-full bg-destructive/10 text-destructive text-xs font-semibold mb-4">Problema</span>
            <h3 className="text-lg font-bold text-foreground mb-3">Empresa de consumo masivo</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Costos logísticos 28% sobre ventas</li>
              <li>• Errores de picking del 8%</li>
              <li>• Tiempos de despacho de 48h promedio</li>
              <li>• Capacidad del CEDI al límite</li>
            </ul>
          </div>

          {/* Solution */}
          <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-border">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">Solución</span>
            <h3 className="text-lg font-bold text-foreground mb-3">Plan integral de optimización</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Rediseño de layout del CEDI</li>
              <li>• Implementación de WMS</li>
              <li>• Nuevos procesos de picking por olas</li>
              <li>• Capacitación del equipo operativo</li>
            </ul>
          </div>

          {/* Results */}
          <div className="p-8 md:p-10 bg-primary/5">
            <span className="inline-block px-3 py-1 rounded-full bg-success/20 text-success text-xs font-semibold mb-4">Resultado</span>
            <h3 className="text-lg font-bold text-foreground mb-3">En 6 meses</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <ArrowRight size={14} className="text-success" />
                <span className="text-foreground font-semibold">Costos reducidos al 19% sobre ventas</span>
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight size={14} className="text-success" />
                <span className="text-foreground font-semibold">Errores de picking al 1.2%</span>
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight size={14} className="text-success" />
                <span className="text-foreground font-semibold">Despacho en menos de 12h</span>
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight size={14} className="text-success" />
                <span className="text-foreground font-semibold">+30% capacidad sin ampliar</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CasesSection;
