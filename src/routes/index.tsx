import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/sections/Hero";
import { Diferenciais } from "@/components/sections/Diferenciais";
import { Passeios } from "@/components/sections/Passeios";
import { PorQue } from "@/components/sections/PorQue";
import { Galeria } from "@/components/sections/Galeria";
import { Depoimentos } from "@/components/sections/Depoimentos";
import { CtaSection } from "@/components/sections/CtaSection";
import { Faq } from "@/components/sections/Faq";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppButton";
import { faqs, testimonials, tours } from "@/lib/site";

const TITLE = "Passeio de Buggy em Porto de Galinhas | 2h, 4h, 6h e 8h";
const DESCRIPTION =
  "Reserve seu passeio de buggy em Porto de Galinhas. Opções de 2, 4, 6 e 8 horas em buggy privativo para até 4 pessoas. Atendimento rápido pelo WhatsApp.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "passeio de buggy em porto de galinhas, buggy porto de galinhas, buggy ponta a ponta, buggy privativo porto de galinhas, passeio de buggy 4 horas, passeio de buggy 6 horas, passeio de buggy 8 horas, buggy muro alto, buggy maracaípe, passeio porto de galinhas",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "TouristAttraction",
              name: "Passeio de Buggy em Porto de Galinhas",
              description: DESCRIPTION,
              touristType: ["Famílias", "Casais", "Grupos"],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Porto de Galinhas",
                addressRegion: "PE",
                addressCountry: "BR",
              },
            },
            ...tours.map((tour) => ({
              "@type": "Product",
              name: `${tour.name} — ${tour.duration}`,
              description: `${tour.short} ${tour.description}`,
              category: "Passeio turístico",
              brand: { "@type": "Brand", name: "Buggy Porto de Galinhas" },
            })),
            {
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: { "@type": "Answer", text: faq.a },
              })),
            },
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Diferenciais />
        <Passeios />
        <PorQue />
        <Galeria />
        <CtaSection />
        <Faq />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}
