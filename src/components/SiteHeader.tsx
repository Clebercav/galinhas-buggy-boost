import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { WhatsAppLink } from "@/components/WhatsAppButton";

const navItems = [
  { label: "Passeios", href: "/#passeios" },
  { label: "Diferenciais", href: "/#diferenciais" },
  { label: "Galeria", href: "/#galeria" },
  { label: "Dúvidas", href: "/#faq" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500",
        scrolled ? "bg-background/90 shadow-soft backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:flex sm:justify-between lg:px-8">
        <Link
          to="/"
          className={cn(
            "min-w-0 font-display text-lg font-extrabold tracking-tight transition-colors sm:text-xl",
            scrolled ? "text-foreground" : "text-navy-foreground",
          )}
        >
          Buggy<span className="text-gold">PortoDeGalinhas</span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-turquoise",
                scrolled ? "text-muted-foreground" : "text-navy-foreground/90",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <WhatsAppLink size="md" className="shrink-0">
          <span className="hidden sm:inline">Reservar pelo WhatsApp</span>
          <span className="sm:hidden">Reservar</span>
        </WhatsAppLink>
      </div>
    </header>
  );
}
