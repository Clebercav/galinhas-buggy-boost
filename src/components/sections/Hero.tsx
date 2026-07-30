import heroImg from "@/assets/hero-buggy.jpg";
import { WhatsAppLink } from "@/components/WhatsAppButton";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[92svh] w-full items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Buggy percorrendo a orla de Porto de Galinhas em vista aérea, com mar turquesa e coqueiros"
        width={1920}
        height={1088}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 -z-20 size-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      />

      <div className="mx-auto w-full max-w-7xl px-5 pb-24 pt-36 lg:px-8">
        <div className="max-w-3xl">
          <p className="inline-flex items-center rounded-full border border-navy-foreground/30 bg-navy-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-navy-foreground backdrop-blur-sm">
            Buggy privativo · Bugueiros credenciados
          </p>

          <h1 className="mt-6 text-balance font-display text-4xl font-extrabold leading-[1.05] text-navy-foreground sm:text-5xl lg:text-6xl">
            Passeio de Buggy em Porto de Galinhas
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-navy-foreground/90 sm:text-lg">
            Conheça as praias mais bonitas do litoral pernambucano em um passeio privativo,
            confortável e cheio de aventura.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <WhatsAppLink>Reservar pelo WhatsApp</WhatsAppLink>
            <a
              href="#passeios"
              className="inline-flex items-center justify-center rounded-full border-2 border-navy-foreground/60 px-8 py-4 text-base font-semibold text-navy-foreground backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-foreground/10"
            >
              Ver opções de passeio
            </a>
          </div>

          <dl className="mt-12 grid max-w-xl grid-cols-2 gap-6 sm:grid-cols-3">
            {[
              ["4", "pessoas por buggy"],
              ["2h a 8h", "opções de roteiro"],
              ["100%", "privativo"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="font-display text-2xl font-bold text-gold">{value}</dt>
                <dd className="text-sm text-navy-foreground/80">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
