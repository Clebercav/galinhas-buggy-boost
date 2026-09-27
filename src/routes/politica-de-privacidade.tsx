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
            Ao solicitar uma reserva pelo WhatsApp, você pode nos enviar nome, telefone, data desejada
            e número de passageiros para organizar e confirmar o passeio. Se o rastreamento publicitário
            estiver ativo, o Google Ads também pode receber endereço IP, identificadores de cookies,
            informações do navegador e dispositivo e páginas visitadas.
          </p>
          <h2 className="text-xl font-bold text-foreground">Uso das informações</h2>
          <p>
            Os dados da reserva são usados para responder, confirmar e prestar suporte ao passeio.
            Não enviamos nome, telefone ou dados da conversa ao Google Ads. Dados de navegação podem
            ser compartilhados com o Google LLC para medir anúncios e otimizar publicidade, conforme
            sua escolha de cookies e as regras aplicáveis à sua região.
          </p>
          <h2 className="text-xl font-bold text-foreground">Cookies e publicidade</h2>
          <p>
            Em regiões que exigem consentimento, a publicidade só é ativada após você aceitar no aviso.
            Você pode recusar com a mesma facilidade. Nas demais regiões, a medição pode funcionar sem
            o aviso, respeitando recusas anteriores e sinais de desativação do navegador. Registramos
            no seu navegador a escolha, data, versão do aviso e opções apresentadas. Use “Configurações
            de cookies” no rodapé para mudar a escolha a qualquer momento; a recusa interrompe o
            rastreamento nas próximas visitas e recarrega a página para interromper as tags já abertas.
            Você também pode limitar anúncios nas configurações do Google e no seu navegador.
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
