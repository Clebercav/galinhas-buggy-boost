import tour2h from "@/assets/tour-2h.jpg";
import tour4h from "@/assets/tour-4h.jpg";
import tour6h from "@/assets/tour-6h.jpg";
import tour8h from "@/assets/tour-8h.jpg";

/** Troque pelo número real (formato internacional, apenas dígitos). */
export const WHATSAPP_NUMBER = "5581997784354";
export const INSTAGRAM_URL = "https://www.instagram.com/taxsimpasseiosetransfer/";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WHATSAPP_MESSAGE =
  "Olá! Quero reservar um passeio de buggy em Porto de Galinhas.";

export type Tour = {
  id: string;
  name: string;
  duration: string;
  short: string;
  description: string;
  image: string;
  highlights: string[];
  includes: string[];
};

export function whatsappTourMessage(tour: Tour) {
  return `Olá! Quero reservar o ${tour.name} de ${tour.duration} em Porto de Galinhas.`;
}

export const tours: Tour[] = [
  {
    id: "2h",
    name: "Passeio de Buggy",
    duration: "2 Horas\u00a0 R$350",
    short: "Ideal para quem possui pouco tempo.",
    description:
      "Passeio panorâmico pelas principais praias de Porto de Galinhas. Uma experiência rápida e intensa, perfeita para quem chegou hoje ou tem a tarde livre antes do voo.",
    image: tour2h,
    highlights: ["Praia do Cupe", "Porto de Galinhas", "Vila (Panorâmico)"],
    includes: [
      "Buggy privativo para o seu grupo",
      "Bugueiro credenciado pela prefeitura",
      "Paradas para fotos coqueirais de Maracaípe",
      "Roteiro panorâmico pelas praias centrais",
    ],
  },
  {
    id: "4h",
    name: "Passeio de Buggy",
    duration: "4 Horas R$450",
    short: 'O tradicional passeio "Ponta a Ponta".',
    description:
      "Conheça Muro Alto, Cupe, Porto de Galinhas, Maracaípe e Pontal de Maracaípe. O roteiro mais pedido de Porto de Galinhas, com tempo para banho de mar e fotos em cada praia.",
    image: tour4h,
    highlights: ["Muro Alto", "Cupe", "Maracaípe", "Pontal de Maracaípe"],
    includes: [
      "Buggy privativo para o seu grupo",
      "Roteiro clássico Ponta a Ponta",
      "Paradas para banho e fotos",
      "Flexibilidade para ajustar o tempo em cada praia",
    ],
  },
  {
    id: "6h",
    name: "Passeio de Buggy",
    duration: "6 Horas R$550",
    short: "Mais tempo para aproveitar cada parada.",
    description:
      "Banhos de mar, fotos e paisagens incríveis. Com seis horas você percorre todo o litoral com calma, almoça em uma praia à sua escolha e ainda sobra tempo para relaxar.",
    image: tour6h,
    highlights: ["Muro Alto", "Pontal Cupe", "Maracaípe", "Pontal Maracaípe"],
    includes: [
      "Buggy privativo para o seu grupo",
      "Tempo estendido em cada parada",
      "Parada para almoço em praia à sua escolha",
      "Roteiro personalizado com o bugueiro",
    ],
  },
  {
    id: "8h",
    name: "Super Diária",
    duration: "8 Horas R$650",
    short: "O passeio mais completo.",
    description:
      "Explore todo o litoral de Porto de Galinhas com tranquilidade. Do norte ao sul, incluindo praias mais distantes e desertas.",
    image: tour8h,
    highlights: ["Muro Alto", "Pontal do Cupe", "Maracaípe", "Pontal de Maracaípe"],
    includes: [
      "Buggy privativo o dia inteiro",
      "Roteiro completo do litoral, norte e sul",
      "Praias desertas fora do circuito tradicional",
      "Total flexibilidade de horários e paradas",
    ],
  },
];

export const faqs = [
  {
    q: "Quanto custa o passeio de buggy?",
    a: "O valor é por buggy (não por pessoa) e varia conforme a duração escolhida, a temporada e o ponto de saída. Chame no WhatsApp e enviamos o valor atualizado em poucos minutos, sem compromisso.",
  },
  {
    q: "O buggy é compartilhado com outras pessoas?",
    a: "Não. Todos os nossos passeios são 100% privativos: o buggy é exclusivo para você e seu grupo, com bugueiro dedicado durante todo o roteiro.",
  },
  {
    q: "Cabem quantas pessoas no buggy?",
    a: "Até 4 passageiros por buggy, além do bugueiro. Para grupos maiores organizamos vários buggys saindo juntos, mantendo todo mundo no mesmo roteiro.",
  },
  {
    q: "Posso escolher o roteiro?",
    a: "Sim. O roteiro é sugerido pelo bugueiro, mas pode ser ajustado antes e durante o passeio: você decide onde ficar mais tempo, onde tomar banho e onde parar para comer.",
  },
  {
    q: "Tem parada para banho de mar?",
    a: "Sim, em todos os passeios a partir de 2 horas há paradas para fotos, e nos roteiros de 4h, 6h e 8h há tempo confortável para banho de mar e piscinas naturais.",
  },
  {
    q: "É necessário pagar antecipadamente?",
    a: "Não exigimos pagamento antecipado do valor total. A reserva é confirmada pelo WhatsApp e o pagamento pode ser feito no dia do passeio, em dinheiro, Pix ou cartão.",
  },
  {
    q: "Pode levar crianças?",
    a: "Sim, o passeio é excelente para famílias. Informe a idade das crianças na reserva para que o bugueiro leve os equipamentos adequados e ajuste o ritmo do roteiro.",
  },
  {
    q: "O passeio acontece mesmo com chuva?",
    a: "Chuvas rápidas são comuns no litoral e não impedem o passeio: o buggy tem capota. Em caso de chuva forte e persistente, remarcamos sem custo para outro horário ou dia.",
  },
];

export const GOOGLE_REVIEW_URL = "https://g.page/r/Cf2PyP0hgrkIEBM/review";

export type Testimonial = {
  name: string;
  origin: string;
  rating: number;
  text: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Juliana Martins",
    origin: "São Paulo/SP",
    rating: 5,
    text: "Fizemos o passeio de 4 horas e foi o melhor dia da viagem. Bugueiro super atencioso, parou em todas as praias que pedimos e ainda tirou várias fotos nossas.",
  },
  {
    name: "Rafael Andrade",
    origin: "Belo Horizonte/MG",
    rating: 5,
    text: "Atendimento pelo WhatsApp foi rápido e sem enrolação. Buggy limpo, pontual e o roteiro Ponta a Ponta valeu cada minuto. Recomendo demais!",
  },
  {
    name: "Camila e Diego",
    origin: "Curitiba/PR",
    rating: 5,
    text: "Escolhemos o passeio privativo de 6 horas para comemorar nossa lua de mel. Tivemos total liberdade de horário e praias desertas maravilhosas.",
  },
  {
    name: "Patrícia Lopes",
    origin: "Brasília/DF",
    rating: 5,
    text: "Viajamos com duas crianças e nos sentimos muito seguros. O bugueiro dirigiu com cuidado e adaptou o ritmo para a família. Experiência impecável.",
  },
  {
    name: "Marcos Vinícius",
    origin: "Rio de Janeiro/RJ",
    rating: 5,
    text: "A Super Diária de 8 horas é surreal. Conhecemos praias que nenhum passeio curto alcança e ainda paramos para almoçar com o pé na areia.",
  },
  {
    name: "Fernanda Duarte",
    origin: "Porto Alegre/RS",
    rating: 5,
    text: "Preço justo, sem pagamento antecipado e tudo exatamente como combinado. A TAXSIM passou muita confiança do primeiro contato até o fim do passeio.",
  },
];
