import { Check } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    "Reconhecer o começo do gatilho antes que ele vire urgência — e agir antes, não depois.",
    "Ter um plano pronto para os momentos clássicos: café, pós-almoço, estresse, trânsito, noite.",
    "Sair da culpa que paralisa e entrar num caminho de retorno concreto — sem promessa vazia.",
    "Reduzir o piloto automático treinando presença em momentos curtos e repetíveis ao longo do dia.",
    "Lidar com ansiedade e irritação sem descontar em quem você ama, com uma resposta prática para quando o corpo pede alívio.",
    "Entender por que você fuma do jeito que fuma — e isso muda seu nível de controle sobre o hábito.",
    "Usar um Diário de Bordo para enxergar progresso real, mesmo quando o dia não é perfeito.",
    "Ter palavras certas para orar na hora da vontade — com presença, não teatralidade.",
    "Saber o que fazer no dia seguinte a uma recaída, para que a queda não vire abandono.",
    "Construir uma rotina espiritual que sustenta o processo, em vez de tentar vencer só na disciplina.",
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="font-display text-foreground text-2xl md:text-4xl text-center mb-12 leading-snug">
          Ao longo dos 21 dias, você vai desenvolver recursos para:
        </h2>

        <div className="space-y-5">
          {benefits.map((benefit, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="w-6 h-6 rounded-full bg-cta-green flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-accent-foreground" />
              </div>
              <p className="font-body text-foreground/90 text-base leading-relaxed">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
