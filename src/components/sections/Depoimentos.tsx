import { Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { GOOGLE_REVIEW_URL, testimonials } from "@/lib/site";

function Stars({ rating, label }: { rating: number; label: string }) {
  return (
    <div className="flex items-center gap-0.5" role="img" aria-label={label}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          aria-hidden="true"
          className={
            i < rating ? "size-4 fill-gold text-gold" : "size-4 text-muted-foreground/40"
          }
        />
      ))}
    </div>
  );
}

export function Depoimentos() {
  return (
    <section id="depoimentos" className="bg-accent/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-turquoise">
            Depoimentos
          </p>
          <h2 className="mt-4 text-balance text-3xl font-bold sm:text-4xl">
            Quem viaja com a TAXSIM recomenda
          </h2>
          <div className="mt-6 flex flex-col items-center gap-3">
            <div className="flex items-center gap-3 rounded-full border border-border bg-card px-5 py-2.5 shadow-card">
              <span className="font-display text-2xl font-extrabold text-navy">5,0</span>
              <Stars rating={5} label="Nota 5 de 5 no Google" />
              <span className="text-sm text-muted-foreground">no Google</span>
            </div>
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-turquoise underline-offset-4 hover:underline"
            >
              Ver e deixar sua avaliação no Google
            </a>
          </div>
        </Reveal>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal as="li" key={item.name} delay={i * 70}>
              <figure className="flex h-full flex-col rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-turquoise/40 hover:shadow-card">
                <Stars
                  rating={item.rating}
                  label={`Avaliação ${item.rating} de 5 estrelas`}
                />
                <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  “{item.text}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-sea font-display text-sm font-bold text-navy-foreground">
                    {item.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-sm font-bold">{item.name}</span>
                    <span className="block text-xs text-muted-foreground">{item.origin}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
