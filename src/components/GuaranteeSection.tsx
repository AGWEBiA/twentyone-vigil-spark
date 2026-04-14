import seloGarantia from "@/assets/selo-de-garantia.png";

const GuaranteeSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <img src={seloGarantia} alt="Selo de Garantia 7 Dias Incondicional" className="w-52 h-52 md:w-56 md:h-56 object-contain mx-auto mb-8" />

        <h2 className="font-display text-foreground text-2xl md:text-4xl mb-6 leading-snug">
          Você testa. O risco é meu.
        </h2>

        <div className="space-y-4 font-body text-foreground/90 text-base leading-relaxed">
          <p>
            Eu acredito nesse método porque ele nasceu de 24 anos de tentativas fracassadas e de uma virada real.
          </p>
          <p>
            Por isso: você tem 7 dias para acessar o material, começar a jornada e ver se esse caminho faz sentido para a sua vida.
          </p>
          <p>
            Se dentro desse prazo você não enxergar nenhum avanço na sua relação com esse vício — nenhuma clareza, nenhum novo recurso, nenhuma mudança — você pede o reembolso. Sem questionamento. Sem burocracia.
          </p>
          <p className="font-bold text-foreground text-lg">
            O risco de tentar é zero. O custo de não tentar, você já conhece.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
