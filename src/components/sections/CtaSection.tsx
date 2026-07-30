import ctaImg from "@/assets/cta-drone.jpg";
import { Reveal } from "@/components/Reveal";
import { WhatsAppLink } from "@/components/WhatsAppButton";

export function CtaSection() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={ctaImg}
        alt="Vista aérea do litoral de Porto de Galinhas ao pôr do sol com rastros de buggy na areia"
        width={1920}
        height={912}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-20 size-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-navy/70"
        style={{ backgroundColor: "color-mix(in oklab, var(--navy) 68%, transparent)" }}
      />

      <div className="mx-auto max-w-4xl px-5 py-24 text-center sm:py-32 lg:px-8">
        <Reveal>
          <h2 className="text-balance font-display text-3xl font-extrabold text-navy-foreground sm:text-5xl">
            Pronto para conhecer Porto de Galinhas de ponta a ponta?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-navy-foreground/85 sm:text-lg">
            Consulte a disponibilidade da sua data agora mesmo. Resposta rápida, sem compromisso e
            sem pagamento antecipado.
          </p>
          <div className="mt-10 flex justify-center">
            <WhatsAppLink variant="gold" className="px-10 py-5 text-lg">
              Reservar Agora
            </WhatsAppLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
