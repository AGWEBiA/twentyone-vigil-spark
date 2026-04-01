import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    q: '"Eu não tenho disciplina para seguir 21 dias."',
    a: "O método foi pensado para gente comum, com rotina e pressão. Você não vai depender de motivação alta. Você vai usar presença + ferramentas para manter constância — checklist e diário existem exatamente para isso.",
  },
  {
    q: '"E se eu recair durante os 21 dias?"',
    a: "Você não está comprando um método que te condena por cair. Está entrando em um caminho para aprender com o gatilho, ajustar a rota e continuar. O que destrói a maioria das tentativas não é a queda — é o abandono depois dela. Se você cair ao longo dos 21 dias, recomece. Deus está sempre de portas abertas para nós, então porque você não estaria pra si mesmo?",
  },
  {
    q: '"Eu fumo há muito tempo. Ainda funciona?"',
    a: "Eu fumei por 24 anos. O tempo de vício não impede a mudança. O que costuma impedir é tentar vencer só na força, sem método e sem estratégia para gatilhos.",
  },
  {
    q: '"Isso é só oração? Ou tem prática?"',
    a: 'Tem prática. O método une vida espiritual com ação estruturada: checklist, diário e um guia para mapear e desarmar gatilhos. A oração tem direção e momento específico — não é só "pedir mais força".',
  },
  {
    q: '"Tenho medo de ficar irritado e descontar na família."',
    a: "Esse medo é real. Por isso o método trabalha a raiz: o cigarro como refúgio rápido para aliviar pressão. Você aprende respostas curtas para quando a tensão sobe, sem precisar explodir.",
  },
  {
    q: '"Isso substitui acompanhamento médico?"',
    a: "Não. Este é um material espiritual e educacional. Se você usa medicação ou precisa de suporte médico ou psicológico, siga com acompanhamento profissional.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 md:py-28 section-burgundy">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="font-display text-cream-gold text-2xl md:text-4xl text-center mb-12">
          Perguntas Frequentes
        </h2>

        <Accordion type="single" collapsible className="space-y-3">
          {faqData.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-dusty-rose/80 rounded-lg border-none overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 text-secondary-foreground font-body font-bold text-left hover:no-underline hover:text-cream-gold">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 text-secondary-foreground font-body text-sm leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
