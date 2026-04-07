import { Linkedin, Instagram, Youtube, Mail, Phone } from "lucide-react";

const Footer = () => (
  <footer className="py-12 border-t border-border">
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <p className="text-xl font-bold text-foreground mb-2">
            Arq<span className="text-primary">Logística</span>
          </p>
          <p className="text-sm text-muted-foreground">
            Transformamos operaciones logísticas en ventajas competitivas medibles.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-3">Contacto</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Mail size={14} /> contacto@arqlogistica.com</li>
            <li className="flex items-center gap-2"><Phone size={14} /> +57 300 000 0000</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-3">Síguenos</h4>
          <div className="flex gap-3">
            <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" aria-label="YouTube" className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
              <Youtube size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-border text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} ArqLogística. Todos los derechos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
