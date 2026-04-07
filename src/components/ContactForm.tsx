import { useState } from "react";
import { Send, ShieldCheck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const serviceOptions = [
  "Optimización de operaciones",
  "Reducción de costos logísticos",
  "Gestión de inventarios",
  "Diseño de layout / CEDI",
  "Integración tecnológica (WMS/TMS)",
  "Consultoría integral",
  "Otro",
];

const budgetOptions = [
  "Menos de $10,000 USD",
  "$10,000 - $25,000 USD",
  "$25,000 - $50,000 USD",
  "Más de $50,000 USD",
  "Prefiero no decir",
];

const ContactForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "¡Solicitud enviada!",
        description: "Me pondré en contacto contigo en las próximas 24 horas.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  const inputClass = "w-full px-4 py-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm";
  const labelClass = "block text-sm font-medium text-foreground mb-1.5";

  return (
    <section id="contacto" className="py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Contacto</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Dé el primer paso hacia una operación eficiente</h2>
          <p className="mt-4 text-muted-foreground">Complete el formulario y recibirá una propuesta personalizada en menos de 24 horas.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8 md:p-10 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className={labelClass}>Nombre completo *</label>
              <input required type="text" placeholder="Juan Pérez" className={inputClass} maxLength={100} />
            </div>
            <div>
              <label className={labelClass}>Empresa *</label>
              <input required type="text" placeholder="Nombre de su empresa" className={inputClass} maxLength={100} />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className={labelClass}>Cargo *</label>
              <input required type="text" placeholder="Director de Operaciones" className={inputClass} maxLength={100} />
            </div>
            <div>
              <label className={labelClass}>Email corporativo *</label>
              <input required type="email" placeholder="juan@empresa.com" className={inputClass} maxLength={255} />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className={labelClass}>Teléfono / WhatsApp *</label>
              <input required type="tel" placeholder="+57 300 000 0000" className={inputClass} maxLength={20} />
            </div>
            <div>
              <label className={labelClass}>Tipo de servicio *</label>
              <select required className={inputClass}>
                <option value="">Seleccione un servicio</option>
                {serviceOptions.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className={labelClass}>Describa su problema o necesidad *</label>
            <textarea required rows={4} placeholder="Cuénteme brevemente el desafío principal de su operación logística..." className={inputClass} maxLength={1000} />
          </div>

          <div>
            <label className={labelClass}>Presupuesto estimado (opcional)</label>
            <select className={inputClass}>
              <option value="">Seleccione un rango</option>
              {budgetOptions.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-md bg-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-60"
          >
            <Send size={20} />
            {loading ? "Enviando..." : "Solicitar asesoría personalizada"}
          </button>

          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <ShieldCheck size={14} />
            <span>Tu información está protegida. No compartimos tus datos con terceros.</span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
