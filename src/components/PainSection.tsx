import { AlertCircle } from "lucide-react";

const PainSection = () => {
  const pains = [
    'Você já tentou parar de fumar "na segunda-feira", "no mês que vem", "depois desse estresse"… e sempre volta.',
    "Você sente culpa, porque sabe que fumar faz mal e mesmo assim acende outro cigarro.",
    "Você ora, pede força a Deus, promete… e na hora da vontade parece que algo assume o controle.",
    "Você se pergunta como pode ser fiel em tantas áreas e, ao mesmo tempo, não conseguir dominar esse hábito.",
    "Você esconde o cigarro de quem ama, ou tenta disfarçar o cheiro, para não ouvir de novo o que já sabe.",
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="font-display text-foreground text-2xl md:text-4xl text-center mb-12 leading-snug">
          Você provavelmente se reconhece em algumas dessas situações…
        </h2>

        <div className="space-y-6">
          {pains.map((pain, i) => (
            <div key={i} className="flex gap-4 items-start">
              <AlertCircle className="w-5 h-5 text-alert-red mt-1 flex-shrink-0" />
              <p className="font-body text-foreground/90 text-base leading-relaxed">{pain}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 content-box text-center">
          <p className="text-secondary-foreground font-body text-base leading-relaxed mb-4">
            E o pior: não é só o cigarro. É o que ele representa… a sensação de estar preso em um ciclo que se repete.
          </p>
          <p className="text-secondary-foreground font-body text-base leading-relaxed mb-6">
            Esse ciclo tem uma explicação. E ela não tem nada a ver com fraqueza de caráter.
          </p>
          <p className="text-cream-gold font-display text-xl md:text-2xl italic">
            "Não é falta de fé. E não é falta de vontade."
          </p>
          <p className="text-secondary-foreground font-body text-base leading-relaxed mt-4">
            Na maioria das vezes, você está tentando vencer do jeito mais pesado: no braço. Sem entender o que acontece dentro de você no minuto em que a vontade aparece.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
