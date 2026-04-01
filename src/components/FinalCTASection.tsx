import authorImg from "@/assets/author.jpg";

const FinalCTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <h2 className="font-display text-foreground text-2xl md:text-4xl mb-6 leading-snug">
          Você já carregou esse peso sozinho tempo suficiente.
        </h2>

        <h3 className="font-heading text-foreground text-xl md:text-2xl font-bold mb-6">
          21 Dias de Vigilância
        </h3>

        <p className="font-body text-foreground/90 text-base leading-relaxed mb-4">
          Já prometeu. Já tentou. Já se cobrou.
        </p>
        <p className="font-body text-foreground/90 text-base leading-relaxed mb-8">
          Agora existe um caminho com método, estrutura e base espiritual real — construído por alguém que viveu esse ciclo por 24 anos e encontrou a saída.
        </p>

        <div className="content-box inline-block mb-10">
          <p className="text-secondary-foreground font-body text-base leading-relaxed">
            R$ 47 costuma ser menos do que muita gente gasta com cigarro em poucos dias. A diferença é que aqui você está investindo em <strong className="text-cream-gold">liberdade, saúde, paz e governo próprio</strong>.
          </p>
        </div>

        <div>
          <a href="#" className="btn-cta text-lg">
            QUERO COMEÇAR MEUS 21 DIAS AGORA — R$ 47
          </a>
          <p className="text-muted-foreground text-sm mt-4">
            Acesso imediato • Garantia de 30 dias • Comece hoje
          </p>
        </div>

        <div className="mt-14 flex flex-col items-center gap-4">
          <img
            src={authorImg}
            alt="Giovanni Sophia"
            className="w-20 h-20 rounded-full object-cover"
            loading="lazy"
            width={800}
            height={800}
          />
          <div>
            <p className="font-heading text-foreground font-bold">Giovanni Sophia</p>
            <p className="font-body text-muted-foreground text-sm">
              Fumante por 24 anos • Autor do método "21 Dias de Vigilância"
            </p>
          </div>
          <p className="font-display text-foreground/80 italic text-lg max-w-md mt-2">
            "A liberdade que Deus quer te dar já está disponível. Você só precisa do caminho certo para encontrá-la."
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
