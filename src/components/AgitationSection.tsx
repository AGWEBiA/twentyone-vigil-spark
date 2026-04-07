const AgitationSection = () => {
  const consequences = [
    "Você aguenta 2 ou 3 dias… e a primeira pressão vira recaída.",
    "A culpa aumenta — e a culpa vira combustível para fumar de novo.",
    "Você começa a evitar falar disso com Deus, por vergonha.",
    'Você vai perdendo a confiança em si: "eu não consigo".',
    "E o vício vai se tornando mais automático com o tempo.",
  ];

  return (
    <section className="py-20 md:py-28 section-burgundy-dark">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="font-display text-cream-gold text-2xl md:text-4xl text-center mb-4 leading-snug">
          Se você continuar tratando essa luta só como "vou resistir mais forte", o roteiro costuma ser o mesmo:
        </h2>

        <div className="mt-10 mx-auto max-w-xl rounded-xl border border-white/10 bg-white/5 px-6 py-6 space-y-4">
          {consequences.map((item, i) => (
            <div key={i} className="flex gap-3 items-start">
              <span className="text-alert-red font-bold text-lg mt-0.5 flex-shrink-0">✕</span>
              <p className="font-body text-secondary-foreground text-base leading-relaxed">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-cream-gold font-display text-xl md:text-2xl italic mb-6">
            E se esse ciclo continuar por mais um ano? Dois? Cinco?
          </p>
          <p className="font-body text-secondary-foreground text-base leading-relaxed mb-4">
            O cigarro não é só um hábito que persiste.
          </p>
          <p className="font-body text-secondary-foreground text-base leading-relaxed mb-4">
            É uma prova diária de que algo ainda te controla. E quanto mais tempo passa, mais essa sensação se instala — não só no corpo, mas na forma como você se enxerga diante de Deus e de quem você ama.
          </p>
          <p className="font-body text-secondary-foreground text-base leading-relaxed">
            Não é drama. É desgaste diário. É como viver negociando consigo mesmo — e quase sempre perdendo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AgitationSection;
