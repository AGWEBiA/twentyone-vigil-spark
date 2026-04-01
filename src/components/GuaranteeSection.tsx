import { Shield } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <div className="w-20 h-20 rounded-full bg-cta-green/20 flex items-center justify-center mx-auto mb-8">
          <Shield className="w-10 h-10 text-cta-green" />
        </div>

        <h2 className="font-display text-foreground text-2xl md:text-4xl mb-6 leading-snug">
          Você testa. O risco é meu.
        </h2>

        <div className="space-y-4 font-body text-foreground/90 text-base leading-relaxed">
          <p>
            Eu acredito nesse método porque ele nasceu de 24 anos de tentativas fracassadas e de uma virada real.
          </p>
          <p>
            Por isso: você tem 30 dias para acessar o material, começar a jornada e ver se esse caminho faz sentido para a sua vida.
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
