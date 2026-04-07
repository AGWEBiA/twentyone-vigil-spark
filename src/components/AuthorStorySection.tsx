import authorImg from "@/assets/author.jpg";

const AuthorStorySection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <img
            src={authorImg}
            alt="Giovanni Sophia"
            className="w-64 h-64 md:w-72 md:h-72 rounded-2xl object-cover shadow-lg flex-shrink-0 mx-auto md:mx-0"
            loading="lazy"
            width={800}
            height={800}
          />
          <div>
            <h2 className="font-display text-foreground text-2xl md:text-4xl mb-6 leading-snug">
              Eu também fiquei preso nesse ciclo. Por 24 anos.
            </h2>
            <p className="font-body text-foreground/90 text-base leading-relaxed mb-4">
              Tem uma cena que eu nunca esqueci.
            </p>
            <p className="font-body text-foreground/90 text-base leading-relaxed mb-4">
              Eu estava fumando na cozinha, como fazia tantas vezes, quando minha filha, com apenas 3 anos, olhou para mim e perguntou:
            </p>
            <blockquote className="border-l-4 border-cream-gold pl-6 my-6">
              <p className="font-display text-foreground italic text-lg">
                — Papai, por que você fuma?
              </p>
            </blockquote>
            <p className="font-body text-foreground/90 text-base leading-relaxed mb-4">
              Naquele momento, eu fiquei sem resposta.
            </p>
            <p className="font-body text-foreground/90 text-base leading-relaxed mb-4">
              E a única coisa que consegui dizer foi a verdade:
            </p>
            <blockquote className="border-l-4 border-cream-gold pl-6 my-6">
              <p className="font-display text-foreground italic text-lg">
                — Porque o papai é viciado em cigarro.
              </p>
            </blockquote>
          </div>
        </div>

        <div className="mt-10 space-y-4 font-body text-foreground/90 text-base leading-relaxed">
          <p>
            Depois disso, tentei explicar o que nem eu mesmo conseguia justificar. Tentei encontrar uma razão para continuar fazendo algo que me fazia mal, que não me trazia benefício nenhum. Mas a verdade era simples: eu estava preso em um vício.
          </p>
          <p>
            A partir dali, comecei a me perguntar que tipo de exemplo eu estava sendo para a minha filha. E, depois daquela conversa, ela passou a repetir várias vezes que eu precisava parar de fumar.
          </p>
          <p>
            Mas o que mais me marcou aconteceu em novembro de 2025.
          </p>
          <p>
            Eu estava no meu cantinho de fumar, em casa, quando ela me viu e disse:
          </p>
          <blockquote className="border-l-4 border-cream-gold pl-6 my-6">
            <p className="font-display text-foreground italic text-lg">
              — Papai, se você não parar de fumar, você vai ficar com machucado na língua.
            </p>
          </blockquote>
          <p>
            Aquilo me assustou de um jeito diferente.
          </p>
          <p>
            Me impressionou ver uma criança tão pequena dizendo algo tão específico. E, ao mesmo tempo, aquilo me encheu de medo.
          </p>
          <p>
            Mais do que medo, aquela cena me obrigou a encarar uma pergunta que eu já não podia mais evitar: por que eu não conseguia me libertar daquele vício?
          </p>
          <p>
            Eu rezava. Pedia a Deus para me ajudar. Queria mudar. Mas, mesmo assim, parecia que me faltavam força, firmeza e domínio sobre mim mesmo.
          </p>
          <p>
            Até que, um dia, eu vi a propaganda de um aplicativo de oração falando sobre o Jejum de Daniel.
          </p>
          <p>
            Fui pesquisar melhor e descobri que aquilo era uma forma de buscar mais domínio, mais força espiritual e mais virtude, com base nos ensinamentos bíblicos de Daniel.
          </p>
          <p>
            Foi aí que algo começou a mudar dentro de mim.
          </p>
          <p>
            Porque eu já tinha tentado parar antes.
          </p>
          <p>Tentei parar na raça.</p>
          <p>Tentei trocar um hábito por outro.</p>
          <p>Tentei fazer promessas em voz alta na frente da família.</p>
          <p>E sempre voltava quando o estresse apertava.</p>
          <p>
            Até que uma frase de Cristo começou a fazer sentido para mim de um jeito completamente diferente:
          </p>
        </div>

        <div className="my-10 content-box text-center">
          <p className="text-cream-gold font-display text-xl md:text-2xl italic mb-2">
            "Vigiai e orai, para que não entreis em tentação."
          </p>
          <p className="text-secondary-foreground font-body text-sm">
            (Mateus 26:41)
          </p>
        </div>

        <div className="space-y-4 font-body text-foreground/90 text-base leading-relaxed">
          <p>Ali eu entendi uma coisa que mudou tudo:</p>
          <p className="font-bold text-foreground">Não era só uma questão de ter mais força.</p>
          <p className="font-bold text-foreground">Era aprender a vigiar. Estar presente.</p>
          <p>Perceber o que estava acontecendo dentro de mim.</p>
          <p>E responder com consciência antes que o automático me levasse de novo para o cigarro.</p>
          <p>Foi isso que me permitiu quebrar um ciclo de 24 anos.</p>
          <p>Porque, pela primeira vez, eu entendi que não bastava apenas querer vencer o vício.</p>
          <p className="font-bold text-foreground text-lg">Eu precisava de um caminho.</p>
        </div>
      </div>
    </section>
  );
};

export default AuthorStorySection;
