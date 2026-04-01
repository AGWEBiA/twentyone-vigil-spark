import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-burgundy-dark/80" />

      <div className="relative z-10 container mx-auto px-6 py-20 text-center max-w-4xl">
        <p className="text-dusty-rose font-body text-sm md:text-base tracking-wider uppercase mb-6">
          ✝ Para cristãos que fumam há anos, já tentaram parar e estão cansados de prometer "agora vai" e voltar para o maço
        </p>

        <h1 className="font-display text-cream-gold text-3xl md:text-5xl lg:text-[56px] leading-tight mb-6">
          Como eu quebrei 24 anos de vício quando parei de lutar contra a vontade de fumar e comecei a entender por que ela existia
        </h1>

        <p className="font-sub text-secondary text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          21 dias com oração, presença e estratégia de gatilhos — para você parar de ser governado pela vontade de fumar.
        </p>

        <a href="#oferta" className="btn-cta text-lg mb-6">
          QUERO COMEÇAR MEUS 21 DIAS AGORA — R$ 47
        </a>

        <p className="text-dusty-rose text-sm mt-4">
          Acesso imediato • Garantia de 30 dias • Download simples
        </p>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4 text-dusty-rose text-sm">
          <span>Criado por Giovanni Sophia — fumante por 24 anos</span>
          <span className="hidden md:inline">•</span>
          <span>Método estruturado: eBook + Checklist + Diário de Bordo + Guia de Gatilhos</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
