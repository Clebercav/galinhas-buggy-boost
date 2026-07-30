import { Reveal } from "@/components/Reveal";
import { WhatsAppLink } from "@/components/WhatsAppButton";
import { faqs } from "@/lib/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq() {
  return (
    <section id="faq" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-turquoise">
            Perguntas frequentes
          </p>
          <h2 className="mt-4 text-balance text-3xl font-bold sm:text-4xl">
            Tudo o que você precisa saber antes de reservar
          </h2>
        </Reveal>

        <Reveal delay={100} className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={faq.q} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-display text-base font-semibold hover:text-turquoise">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        <Reveal delay={150} className="mt-12 text-center">
          <p className="text-muted-foreground">Ficou com alguma dúvida?</p>
          <div className="mt-5 flex justify-center">
            <WhatsAppLink message="Olá! Tenho uma dúvida sobre o passeio de buggy em Porto de Galinhas.">
              Falar com um especialista
            </WhatsAppLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
