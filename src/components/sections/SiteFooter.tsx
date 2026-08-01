import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { INSTAGRAM_URL, DEFAULT_WHATSAPP_MESSAGE, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/WhatsAppButton";

export function SiteFooter() {
  return (
    <footer className="bg-gradient-deep text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="sm:col-span-2">
          <p className="font-display text-xl font-extrabold">
            Buggy<span className="text-gold">PortoDeGalinhas</span>
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-foreground/75">
            Passeios de buggy privativos em Porto de Galinhas, Pernambuco. Roteiros de 2, 4, 6 e 8
            horas com bugueiros credenciados e até 4 pessoas por veículo.
          </p>
        </div>

        <nav aria-label="Links rápidos">
          <h2 className="text-sm font-bold uppercase tracking-wide text-gold">Links rápidos</h2>
          <ul className="mt-4 space-y-3 text-sm text-navy-foreground/80">
            <li><a href="/#passeios" className="hover:text-gold">Passeios</a></li>
            <li><a href="/#diferenciais" className="hover:text-gold">Diferenciais</a></li>
            <li><a href="/#galeria" className="hover:text-gold">Galeria</a></li>
            <li><a href="/#depoimentos" className="hover:text-gold">Depoimentos</a></li>
            <li><a href="/#faq" className="hover:text-gold">Perguntas frequentes</a></li>
            <li>
              <Link to="/politica-de-privacidade" className="hover:text-gold">
                Política de Privacidade
              </Link>
            </li>
            <li>
              <Link to="/termos-de-uso" className="hover:text-gold">
                Termos de Uso
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide text-gold">Contato</h2>
          <ul className="mt-4 space-y-3 text-sm text-navy-foreground/80">
            <li>
              <a
                href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-gold"
              >
                <WhatsAppIcon className="size-4" />
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-gold"
              >
                <Instagram className="size-4" aria-hidden="true" />
                Instagram
              </a>
            </li>
            <li>Porto de Galinhas — Ipojuca/PE</li>
            <li>Saídas diárias, das 8h às 17h</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-foreground/15">
        <p className="mx-auto max-w-7xl px-5 py-6 text-center text-xs text-navy-foreground/60 lg:px-8">
          © {new Date().getFullYear()} Buggy Porto de Galinhas. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
