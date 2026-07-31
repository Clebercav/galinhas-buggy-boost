import { useState } from "react";
import { Check, Clock, Users } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { WhatsAppLink } from "@/components/WhatsAppButton";
import { tours, type Tour } from "@/lib/site";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function Passeios() {
  const [selected, setSelected] = useState<Tour | null>(null);

  return (
    <section id="passeios" className="bg-sand py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-turquoise">
            Roteiros disponíveis
          </p>
          <h2 className="mt-4 text-balance text-3xl font-bold sm:text-4xl">Escolha seu Passeio</h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Todos os roteiros são realizados em buggy privativo, com até 4 pessoas por veículo e
            saída no horário que você preferir.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tours.map((tour, i) => (
            <Reveal as="article" key={tour.id} delay={i * 80} className="h-full">
              <div className="flex h-full flex-col overflow-hidden rounded-3xl bg-card shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card">
                <div className="relative aspect-4/3 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={`${tour.name} de ${tour.duration} em Porto de Galinhas`}
                    width={600}
                    height={388}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1 text-xs font-bold text-gold-foreground">
                    <Clock className="size-3.5" aria-hidden="true" />
                    {tour.duration}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-bold">{tour.name}</h3>
                  <p className="text-sm font-semibold text-turquoise">{tour.duration}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{tour.short}</p>

                  <ul className="mt-5 space-y-2 border-t border-border pt-5 text-sm">
                    <li className="flex items-center gap-2">
                      <Users className="size-4 shrink-0 text-turquoise" aria-hidden="true" />
                      Até 4 pessoas por buggy
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="size-4 shrink-0 text-turquoise" aria-hidden="true" />
                      Buggy privativo
                    </li>
                  </ul>

                  <div className="mt-auto flex flex-col gap-2.5 pt-6">
                    <button
                      type="button"
                      onClick={() => setSelected(tour)}
                      className="inline-flex w-full items-center justify-center rounded-full border-2 border-navy/15 px-5 py-3 text-sm font-semibold transition-colors hover:border-turquoise hover:text-turquoise"
                    >
                      Ver detalhes
                    </button>
                    <WhatsAppLink
                      size="md"
                      className="w-full py-3"
                      message={`Olá! Quero reservar o passeio de buggy de ${tour.duration} em Porto de Galinhas.`}
                    >
                      Reservar
                    </WhatsAppLink>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog open={selected !== null} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-h-[88svh] overflow-y-auto sm:max-w-lg">
          {selected && (
            <>
              <img
                src={selected.image}
                alt={`${selected.name} de ${selected.duration}`}
                width={600}
                height={388}
                loading="lazy"
                className="aspect-video w-full rounded-2xl object-cover"
              />
              <DialogHeader>
                <DialogTitle className="font-display text-2xl">
                  {selected.name} · {selected.duration}
                </DialogTitle>
                <DialogDescription className="text-left text-base leading-relaxed">
                  {selected.description}
                </DialogDescription>
              </DialogHeader>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wide text-turquoise">
                  Praias do roteiro
                </h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  {selected.highlights.join(" · ")}
                </p>
              </div>

              <ul className="space-y-2">
                {selected.includes.map((line) => (
                  <li key={line} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-turquoise" aria-hidden="true" />
                    {line}
                  </li>
                ))}
              </ul>

              <WhatsAppLink
                className="w-full"
                message={`Olá! Quero reservar o passeio de buggy de ${selected.duration} em Porto de Galinhas.`}
              >
                Reservar pelo WhatsApp
              </WhatsAppLink>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
