import { BookOpen, CheckSquare, FileText, Target } from "lucide-react";
import productImg from "@/assets/product-mockup.jpg";
import offerBg from "@/assets/offer-bg.jpg";

const OfferSection = () => {
  const items = [
    {
      icon: BookOpen,
      emoji: "📖",
      title: 'eBook "21 Dias de Vigilância"',
      desc: "O passo a passo da jornada de 21 dias, com orientações diárias e aplicação prática.",
      value: "R$ 97",
    },
    {
      icon: CheckSquare,
      emoji: "📝",
      title: "Checklist Diário de Vigilância",
      desc: "Para você não depender da memória e saber o que fazer em cada dia.",
      value: "R$ 27",
      bonus: 1,
    },
    {
      icon: FileText,
      emoji: "📋",
      title: "Diário de Bordo Personalizado",
      desc: "Para mapear emoções, gatilhos e progresso com clareza.",
      value: "R$ 27",
      bonus: 2,
    },
    {
      icon: Target,
      emoji: "🎯",
      title: "Guia Completo de Gatilhos",
      desc: "Para identificar padrões e criar estratégia para cada situação.",
      value: "R$ 37",
      bonus: 3,
    },
  ];

  return (
    <section id="oferta" className="relative py-20 md:py-28 section-burgundy-dark overflow-hidden">
      <div
        className="absolute inset-x-0 top-0 h-[500px] bg-cover bg-top bg-no-repeat pointer-events-none"
        style={{ backgroundImage: `url(${offerBg})` }}
      />
      <div className="absolute inset-x-0 top-0 h-[500px] bg-gradient-to-b from-transparent via-burgundy-dark/70 to-burgundy-dark pointer-events-none" />
      <div className="relative z-10 container mx-auto px-6 max-w-4xl">
        <h2 className="font-display text-cream-gold text-2xl md:text-4xl text-center mb-12 leading-snug">
          O que você recebe ao entrar no 21 Dias de Vigilância
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <img
            src={productImg}
            alt="Material do 21 Dias de Vigilância"
            className="w-full lg:w-1/2 rounded-2xl shadow-2xl"
            loading="lazy"
            width={1200}
            height={800}
          />

          <div className="space-y-6 flex-1">
            {items.map((item, i) => (
              <div key={i} className="bg-burgundy/50 rounded-xl p-6">
                {item.bonus && (
                  <span className="inline-block bg-cta-green text-accent-foreground text-xs font-bold px-3 py-1 rounded-full mb-3">
                    Bônus {item.bonus}
                  </span>
                )}
                <h4 className="font-heading text-cream-gold text-lg font-bold mb-2">
                  {item.emoji} {item.title}
                </h4>
                <p className="font-body text-secondary-foreground text-sm leading-relaxed mb-2">
                  {item.desc}
                </p>
                <p className="font-body text-dusty-rose text-sm">
                  Valor: {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 text-center">
          <p className="font-body text-dusty-rose text-base mb-2 line-through">
            Valor total do que você está recebendo: R$ 188
          </p>
          <p className="font-display text-cream-gold text-3xl md:text-4xl mb-2">
            Seu investimento hoje: R$ 47
          </p>
          <p className="font-body text-secondary-foreground text-sm mb-8">
            Você recebe tudo por download, pode ler no celular e, se preferir, pode imprimir.
          </p>
          <a href="#" className="btn-cta text-lg">
            QUERO COMEÇAR MEUS 21 DIAS AGORA — R$ 47
          </a>
          <p className="text-dusty-rose text-sm mt-4">
            Acesso imediato • Garantia de 30 dias • Comece hoje
          </p>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
