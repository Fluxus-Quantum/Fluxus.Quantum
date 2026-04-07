import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Cuánto tiempo toma ver resultados?",
    a: "Dependiendo del alcance, los primeros resultados son visibles entre las 4 y 8 semanas. Proyectos integrales muestran su impacto completo en 3 a 6 meses, con mejoras incrementales desde el día uno.",
  },
  {
    q: "¿Trabaja con empresas de cualquier tamaño?",
    a: "Trabajo principalmente con empresas medianas y grandes que operan centros de distribución. Si su empresa mueve más de 500 pedidos diarios o tiene un CEDI de más de 1,000 m², puedo ayudarle.",
  },
  {
    q: "¿Cuál es la inversión aproximada?",
    a: "Cada proyecto es único. Ofrezco una asesoría inicial gratuita donde evalúo su situación y presento una propuesta con alcance, tiempos y costos claros. El ROI típico supera 5x la inversión.",
  },
  {
    q: "¿Necesito parar mi operación durante el proyecto?",
    a: "No. Mi metodología está diseñada para implementar cambios de forma gradual, sin interrumpir la operación. Trabajo en paralelo con su equipo para minimizar cualquier impacto.",
  },
  {
    q: "¿Qué incluye la asesoría inicial gratuita?",
    a: "Incluye un diagnóstico preliminar de su operación, identificación de las 3 principales oportunidades de mejora y una estimación del potencial de ahorro. Sin compromiso.",
  },
  {
    q: "¿Ofrece acompañamiento post-implementación?",
    a: "Sí. Todos mis proyectos incluyen un periodo de acompañamiento post-implementación para asegurar que los cambios se mantengan y los resultados sean sostenibles.",
  },
];

const FAQSection = () => (
  <section id="faq" className="py-24 bg-secondary">
    <div className="container mx-auto px-4 max-w-3xl">
      <div className="text-center mb-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Preguntas frecuentes</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Resolvemos sus dudas</h2>
      </div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-lg px-6">
            <AccordionTrigger className="text-foreground font-medium text-left hover:no-underline">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
