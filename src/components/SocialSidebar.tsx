import { Linkedin, Instagram, Youtube } from "lucide-react";

const links = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const SocialSidebar = () => (
  <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3">
    {links.map((l) => (
      <a
        key={l.label}
        href={l.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={l.label}
        className="w-10 h-10 rounded-md bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-md transition-all"
      >
        <l.icon size={18} />
      </a>
    ))}
  </div>
);

export default SocialSidebar;
