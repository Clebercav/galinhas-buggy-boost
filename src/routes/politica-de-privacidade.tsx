import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppButton";

const TITLE = "Política de Privacidade | Buggy Porto de Galinhas";
const DESCRIPTION =
  "Saiba como tratamos os dados dos visitantes e clientes dos passeios de buggy em Porto de Galinhas.";

export const Route = createFileRoute("/politica-de-privacidade")({
  component: Page,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/politica-de-privacidade" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/politica-de-privacidade" }],
  }),
});

function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-5 pb-24 pt-36 lg:px-8">
        <h1 className="text-3xl font-bold sm:text-4xl">Política de Privacidade</h1>
        <div className="mt-8 space-y-6 leading-relaxed text-muted-foreground">
          <p>
            Esta política descreve como coletamos, usamos e protegemos as informações fornecidas por
            você ao navegar neste site ou ao solicitar uma reserva de passeio de buggy em Porto de
            Galinhas.
          </p>
          <h2 className="text-xl font-bold text-foreground">Dados coletados</h2>
          <p>
            Coletamos apenas os dados que você nos envia voluntariamente pelo WhatsApp, como nome,
            telefone, data desejada e número de passageiros, com a finalidade exclusiva de organizar
            e confirmar o seu passeio.
          </p>
          <h2 className="text-xl font-bold text-foreground">Uso das informações</h2>
          <p>
            As informações são utilizadas para responder à sua solicitação, confirmar a reserva e
            prestar suporte durante o passeio. Não vendemos nem compartilhamos seus dados com
            terceiros para fins de marketing.
          </p>
          <h2 className="text-xl font-bold text-foreground">Cookies e métricas</h2>
          <p>
            Podemos utilizar cookies e ferramentas de análise para entender o desempenho do site e
            melhorar a experiência de navegação. Você pode desativar os cookies no seu navegador.
          </p>
          <h2 className="text-xl font-bold text-foreground">Seus direitos</h2>
          <p>
            Conforme a Lei Geral de Proteção de Dados (LGPD), você pode solicitar a qualquer momento
            o acesso, a correção ou a exclusão dos seus dados entrando em contato pelo WhatsApp.
          </p>
        </div>
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}
