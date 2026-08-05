import { CalendarDays, Camera, Car, ShieldCheck, Sparkles, Users } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const items = [
  { icon: Car, title: "Buggy Privativo", text: "Veículo exclusivo para você e seu grupo, sem dividir com estranhos." },
  { icon: Users, title: "Até 4 Pessoas", text: "Conforto garantido para casais, famílias e pequenos grupos." },
  { icon: ShieldCheck, title: "Bugueiros Credenciados", text: "Profissionais registrados, experientes e conhecedores do litoral." },
  { icon: CalendarDays, title: "Saídas Diárias", text: "Todos os dias, no horário que melhor encaixa na sua viagem." },
  { icon: Sparkles, title: "Passeios Personalizados", text: "Roteiro ajustado ao seu ritmo e às praias que você quer conhecer." },
  { icon: Camera, title: "Paradas para Fotos", text: "Os melhores cenários do litoral, com tempo para registrar." },
];

export function Diferenciais() {
  return (
    <section id="diferenciais" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-turquoise">
            Nossos diferenciais
          </p>
          <h2 className="mt-4 text-balance text-3xl font-bold sm:text-4xl">
            Uma experiência pensada para você aproveitar cada praia
          </h2>
        </Reveal>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 70}>
              <div className="group h-full rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-turquoise/40 hover:shadow-card">
                <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-accent text-turquoise transition-colors duration-500 group-hover:bg-gradient-sea group-hover:text-navy-foreground">
                  <item.icon className="size-7" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
