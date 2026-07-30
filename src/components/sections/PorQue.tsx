import { Check } from "lucide-react";
import whyImg from "@/assets/why-buggy.jpg";
import { Reveal } from "@/components/Reveal";
import { WhatsAppLink } from "@/components/WhatsAppButton";

const reasons = [
  "Passeio totalmente privativo",
  "Até 4 passageiros por veículo",
  "Flexibilidade durante o roteiro",
  "Motoristas experientes",
  "Atendimento personalizado",
  "Paisagens incríveis",
  "Excelente para famílias",
  "Excelente para casais",
  "Excelente para grupos",
];

export function PorQue() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal>
          <img
            src={whyImg}
            alt="Grupo de amigos sorrindo em um buggy amarelo na areia branca de Porto de Galinhas"
            width={1200}
            height={1400}
            loading="lazy"
            decoding="async"
            className="aspect-4/5 w-full rounded-[2rem] object-cover shadow-card"
          />
        </Reveal>

        <Reveal delay={120}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-turquoise">
            Exclusividade e liberdade
          </p>
          <h2 className="mt-4 text-balance text-3xl font-bold sm:text-4xl">
            Por que escolher nosso passeio?
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            Nada de esperar por outros turistas ou correr contra o relógio. Aqui o buggy é só seu, o
            ritmo é o seu, e o bugueiro adapta o roteiro para você aproveitar o melhor de cada praia.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {reasons.map((reason) => (
              <li key={reason} className="flex items-start gap-3 text-sm font-medium">
                <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-accent text-turquoise">
                  <Check className="size-3.5" aria-hidden="true" />
                </span>
                {reason}
              </li>
            ))}
          </ul>

          <WhatsAppLink className="mt-10">Reservar Agora</WhatsAppLink>
        </Reveal>
      </div>
    </section>
  );
}
