import { Eye, Heart, Target } from "lucide-react";

const MethodSection = () => {
  const pillars = [
    {
      icon: Eye,
      title: "Conversão da Atenção",
      description:
        "Você aprende a observar pensamentos, emoções e impulsos sem se condenar — e quebra o automatismo que puxa sua mão para o cigarro antes que ele chegue.",
    },
    {
      icon: Heart,
      title: "Reorganização da Vida Espiritual",
      description:
        "Você não vai apenas orar mais. Você vai orar diferente — com presença direcionada, em momentos específicos do dia, ligada diretamente aos gatilhos que você vai aprender a mapear. É uma prática espiritual com estrutura, não uma promessa repetida.",
    },
    {
      icon: Target,
      title: "Mapeamento e Estratégia de Gatilhos",
      description:
        'Você usa ferramentas objetivas — diário, checklist e guia — para identificar o que dispara a vontade e criar um plano claro para cada cenário.',
    },
  ];

  return (
    <section className="py-20 md:py-28 section-burgundy">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="font-display text-cream-gold text-2xl md:text-4xl text-center mb-4 leading-snug">
          O método: Vigilância Espiritual Ativa
        </h2>
        <p className="font-body text-secondary-foreground text-center text-base mb-4 max-w-2xl mx-auto leading-relaxed">
          O cigarro quase nunca é a causa. Ele costuma ser um sintoma — um "refúgio rápido" para aliviar ansiedade, tensão, vazio, cansaço, frustração.
        </p>
        <p className="font-body text-secondary-foreground text-center text-base mb-12 max-w-2xl mx-auto leading-relaxed">
          Enquanto você tratar o sintoma, o ciclo se repete.
        </p>

        <h3 className="font-heading text-cream-gold text-xl md:text-2xl text-center mb-10">
          Os 3 pilares do método
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <div key={i} className="bg-burgundy-dark/50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-cream-gold/10 flex items-center justify-center mx-auto mb-6">
                <pillar.icon className="w-8 h-8 text-cream-gold" />
              </div>
              <h4 className="font-heading text-cream-gold text-lg font-bold mb-4">
                {i + 1}. {pillar.title}
              </h4>
              <p className="font-body text-secondary-foreground text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        <p className="font-body text-secondary-foreground text-center text-base mt-10 italic">
          Isso não é sobre "nunca mais sentir vontade". É sobre não ser governado por ela.
        </p>
      </div>
    </section>
  );
};

export default MethodSection;
