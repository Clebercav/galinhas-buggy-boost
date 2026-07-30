import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppButton";

const TITLE = "Termos de Uso | Buggy Porto de Galinhas";
const DESCRIPTION =
  "Condições de reserva, cancelamento e realização dos passeios de buggy em Porto de Galinhas.";

export const Route = createFileRoute("/termos-de-uso")({
  component: Page,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/termos-de-uso" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/termos-de-uso" }],
  }),
});

function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-5 pb-24 pt-36 lg:px-8">
        <h1 className="text-3xl font-bold sm:text-4xl">Termos de Uso</h1>
        <div className="mt-8 space-y-6 leading-relaxed text-muted-foreground">
          <p>
            Ao solicitar uma reserva através deste site ou pelo WhatsApp, você concorda com as
            condições descritas abaixo.
          </p>
          <h2 className="text-xl font-bold text-foreground">Reservas</h2>
          <p>
            As reservas são confirmadas mediante disponibilidade e retorno da nossa equipe. Cada
            buggy comporta até 4 passageiros, além do bugueiro, e é operado de forma privativa.
          </p>
          <h2 className="text-xl font-bold text-foreground">Cancelamentos e remarcações</h2>
          <p>
            Cancelamentos podem ser feitos sem custo com antecedência mínima de 24 horas. Em caso de
            condições climáticas adversas, o passeio pode ser remarcado sem custo adicional.
          </p>
          <h2 className="text-xl font-bold text-foreground">Responsabilidades</h2>
          <p>
            Os passeios são conduzidos por bugueiros credenciados. Os passageiros devem seguir as
            orientações de segurança durante todo o roteiro. Menores de idade devem estar
            acompanhados de responsáveis.
          </p>
          <h2 className="text-xl font-bold text-foreground">Valores</h2>
          <p>
            Os valores são cobrados por buggy, não por pessoa, e podem variar conforme a temporada,
            o roteiro e o ponto de saída. O valor final é sempre informado antes da confirmação.
          </p>
        </div>
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}
