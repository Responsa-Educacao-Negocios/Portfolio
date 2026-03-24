"use client";
import experiencia from "@/assets/experiencia.jpeg";
import Image from "next/image";

export default function ExperienciaPage() {
  return (
    <main className="pt-8 sm:pt-16 pb-24 overflow-x-hidden flex-grow w-full">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-20 sm:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-secondary-container"></div>
              <span className="font-label text-xs uppercase tracking-[0.2em] text-secondary font-bold">
                Trajetória Profissional
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-headline italic text-primary leading-tight mb-8">
              Experiência Profissional
            </h1>

            <p className="text-lg sm:text-xl text-on-surface-variant leading-relaxed max-w-2xl font-body">
              Atuo na área educacional há 12 anos, com uma trajetória construída
              entre sala de aula, gestão e consultoria. Ao longo dessa jornada,
              tive a oportunidade de atuar em múltiplos ecossistemas do ensino.
            </p>
          </div>

          <div className="lg:col-span-5 relative order-1 lg:order-2 animate-in fade-in zoom-in-95 duration-1000 delay-200 mt-8 lg:mt-0">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary-container opacity-10 rounded-full hidden sm:block"></div>

            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white bg-surface-container-highest">
              <Image src={experiencia} alt="" />
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-4 border-b-4 border-secondary-container opacity-30 hidden sm:block"></div>
          </div>
        </div>
      </section>

      {/* CURRENT ROLES: BENTO STYLE */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-24 sm:mb-32 animate-in fade-in duration-1000 delay-300">
        <h2 className="text-2xl sm:text-3xl font-headline text-primary-container mb-10 flex items-center gap-4">
          <span className="w-2 h-8 bg-secondary-container rounded-full"></span>
          Atuação Atual
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Role 1: Cruzeiro do Sul */}
          <div className="lg:col-span-2 bg-primary-container text-white p-8 sm:p-10 rounded-2xl shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
              <span className="material-symbols-outlined text-9xl">
                corporate_fare
              </span>
            </div>
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container text-xs font-bold rounded-md mb-4 uppercase tracking-widest">
                Gestão & Liderança
              </span>
              <h3 className="text-2xl sm:text-3xl font-headline mb-2">
                Coordenador Comercial
              </h3>
              <p className="text-lg sm:text-xl font-body text-on-primary-container mb-6 italic">
                Faculdade Cruzeiro do Sul
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                <span className="bg-white/10 px-4 py-2 rounded-full text-xs sm:text-sm backdrop-blur-md border border-white/10">
                  Uberlândia (Centro, Martins, Saraiva)
                </span>
                <span className="bg-white/10 px-4 py-2 rounded-full text-xs sm:text-sm backdrop-blur-md border border-white/10">
                  Araxá
                </span>
                <span className="bg-white/10 px-4 py-2 rounded-full text-xs sm:text-sm backdrop-blur-md border border-white/10">
                  Frutal
                </span>
                <span className="bg-white/10 px-4 py-2 rounded-full text-xs sm:text-sm backdrop-blur-md border border-white/10">
                  Patos de Minas
                </span>
              </div>
            </div>
          </div>

          {/* Role 2: Consultoria Liderança */}
          <div className="bg-surface-container-low p-8 sm:p-10 rounded-2xl border-l-4 border-secondary-container hover:bg-white hover:shadow-md transition-all">
            <span
              className="material-symbols-outlined text-secondary-container text-4xl mb-4"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              psychology
            </span>
            <h3 className="text-xl sm:text-2xl font-headline text-primary mb-4">
              Consultoria em Liderança
            </h3>
            <p className="text-on-surface-variant font-body text-sm sm:text-base leading-relaxed">
              Desenvolvimento de equipes e gestão estratégica de pessoas,
              focando no engajamento e alta performance.
            </p>
          </div>

          {/* Role 3: Sebrae (Wide) */}
          <div className="lg:col-span-3 bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-outline-variant/20 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 group hover:border-primary/20 transition-all">
            <div className="flex-1">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-md mb-3 uppercase tracking-widest border border-primary/10">
                Inovação & Metodologia
              </span>
              <h3 className="text-2xl sm:text-3xl font-headline text-primary mb-3">
                Consultor Educacional Sebrae
              </h3>
              <p className="text-on-surface-variant font-body text-sm sm:text-base leading-relaxed max-w-4xl">
                Acompanhamento pedagógico das metodologias da Escola do Sebrae
                em Minas Gerais e{" "}
                <b>Consultor da metodologia Professor do Futuro</b>, formando
                docentes nos últimos 24 meses com foco nas demandas
                contemporâneas.
              </p>
            </div>
            <div className="flex gap-4 shrink-0">
              <div className="p-4 bg-surface-container rounded-xl group-hover:bg-primary/5 transition-colors">
                <span
                  className="material-symbols-outlined text-primary text-2xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  school
                </span>
              </div>
              <div className="p-4 bg-surface-container rounded-xl group-hover:bg-primary/5 transition-colors">
                <span
                  className="material-symbols-outlined text-primary text-2xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  lightbulb
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAST ROLES: TIMELINE */}
      <section className="bg-surface-container-low py-20 sm:py-24 border-y border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl font-headline text-primary mb-4">
              Histórico Profissional
            </h2>
            <p className="text-on-surface-variant font-body max-w-xl mx-auto text-sm sm:text-base">
              Uma base sólida construída através da experiência direta no
              ensino, coordenação pedagógica e projetos governamentais.
            </p>
          </div>

          <div className="relative">
            {/* Vertical Line (Desktop Only) */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-primary/10 hidden md:block"></div>

            <div className="space-y-12 sm:space-y-16 relative">
              {/* Timeline Item 1 (Left) */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0">
                <div className="md:w-1/2 md:pr-16 md:text-right w-full pl-12 md:pl-0 relative">
                  <div className="absolute left-0 top-1 w-8 h-8 bg-secondary-container rounded-full flex items-center justify-center border-4 border-surface-container-low md:hidden">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-headline text-primary font-bold">
                    Professor da Educação Básica
                  </h3>
                  <p className="text-on-surface-variant font-body mt-2 text-sm sm:text-base">
                    Lecionando Filosofia e Sociologia, desenvolvendo o
                    pensamento crítico e a base intelectual dos alunos.
                  </p>
                </div>
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-secondary-container rounded-full items-center justify-center shadow-lg border-4 border-surface-container-low z-10">
                  <span
                    className="material-symbols-outlined text-white text-sm"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    history_edu
                  </span>
                </div>
                <div className="md:w-1/2 md:pl-16 hidden md:block">
                  <span className="font-label text-xs font-bold text-secondary uppercase tracking-widest bg-secondary/10 px-3 py-1 rounded">
                    Ensino Regular
                  </span>
                </div>
              </div>

              {/* Timeline Item 2 (Right) */}
              <div className="flex flex-col md:flex-row-reverse items-start md:items-center gap-6 md:gap-0">
                <div className="md:w-1/2 md:pl-16 md:text-left w-full pl-12 md:pl-0 relative">
                  <div className="absolute left-0 top-1 w-8 h-8 bg-primary rounded-full flex items-center justify-center border-4 border-surface-container-low md:hidden">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-headline text-primary font-bold">
                    Professor PRONATEC
                  </h3>
                  <p className="text-on-surface-variant font-body mt-2 text-sm sm:text-base">
                    Professor dos cursos técnicos de Administração, Logística e
                    Informática, aliando teoria e prática profissional.
                  </p>
                </div>
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-primary rounded-full items-center justify-center shadow-lg border-4 border-surface-container-low z-10">
                  <span
                    className="material-symbols-outlined text-white text-sm"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    work
                  </span>
                </div>
                <div className="md:w-1/2 md:pr-16 md:text-right hidden md:block">
                  <span className="font-label text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded">
                    Ensino Técnico
                  </span>
                </div>
              </div>

              {/* Timeline Item 3 (Left) */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0">
                <div className="md:w-1/2 md:pr-16 md:text-right w-full pl-12 md:pl-0 relative">
                  <div className="absolute left-0 top-1 w-8 h-8 bg-secondary-container rounded-full flex items-center justify-center border-4 border-surface-container-low md:hidden">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-headline text-primary font-bold">
                    Professor de Jovem Aprendiz
                  </h3>
                  <p className="text-on-surface-variant font-body mt-2 text-sm sm:text-base">
                    Capacitação de jovens para a primeira experiência no mercado
                    de trabalho, unindo habilidades comportamentais e técnicas.
                  </p>
                </div>
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-secondary-container rounded-full items-center justify-center shadow-lg border-4 border-surface-container-low z-10">
                  <span
                    className="material-symbols-outlined text-white text-sm"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    diversity_3
                  </span>
                </div>
                <div className="md:w-1/2 md:pl-16 hidden md:block">
                  <span className="font-label text-xs font-bold text-secondary uppercase tracking-widest bg-secondary/10 px-3 py-1 rounded">
                    Iniciação Profissional
                  </span>
                </div>
              </div>

              {/* Timeline Item 4 (Right) */}
              <div className="flex flex-col md:flex-row-reverse items-start md:items-center gap-6 md:gap-0">
                <div className="md:w-1/2 md:pl-16 md:text-left w-full pl-12 md:pl-0 relative">
                  <div className="absolute left-0 top-1 w-8 h-8 bg-primary rounded-full flex items-center justify-center border-4 border-surface-container-low md:hidden">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-headline text-primary font-bold">
                    Coordenador de Cursos
                  </h3>
                  <p className="text-on-surface-variant font-body mt-2 text-sm sm:text-base">
                    Gestão de currículos, acompanhamento de indicadores
                    pedagógicos e liderança direta do corpo docente.
                  </p>
                </div>
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-primary rounded-full items-center justify-center shadow-lg border-4 border-surface-container-low z-10">
                  <span
                    className="material-symbols-outlined text-white text-sm"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    account_tree
                  </span>
                </div>
                <div className="md:w-1/2 md:pr-16 md:text-right hidden md:block">
                  <span className="font-label text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded">
                    Gestão Educacional
                  </span>
                </div>
              </div>

              {/* Timeline Item 5 (Left) */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0">
                <div className="md:w-1/2 md:pr-16 md:text-right w-full pl-12 md:pl-0 relative">
                  <div className="absolute left-0 top-1 w-8 h-8 bg-secondary-container rounded-full flex items-center justify-center border-4 border-surface-container-low md:hidden">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-headline text-primary font-bold">
                    Agente de Educação Empreendedora
                  </h3>
                  <p className="text-on-surface-variant font-body mt-2 text-sm sm:text-base">
                    Atuação pelo Sebrae Minas, fomentando a cultura
                    empreendedora dentro das instituições de ensino.
                  </p>
                </div>
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-secondary-container rounded-full items-center justify-center shadow-lg border-4 border-surface-container-low z-10">
                  <span
                    className="material-symbols-outlined text-white text-sm"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    rocket_launch
                  </span>
                </div>
                <div className="md:w-1/2 md:pl-16 hidden md:block">
                  <span className="font-label text-xs font-bold text-secondary uppercase tracking-widest bg-secondary/10 px-3 py-1 rounded">
                    Inovação e Negócios
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORKSHOPS E PALESTRAS SECTION */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-20 sm:py-24">
        <div className="bg-gradient-to-br from-primary to-primary-container p-8 sm:p-12 rounded-3xl text-white relative overflow-hidden shadow-2xl">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-secondary-container/20 rounded-full blur-3xl"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-white/10 text-white text-[10px] font-bold rounded-md mb-4 uppercase tracking-widest backdrop-blur-sm border border-white/20">
                Além da Consultoria
              </span>
              <h2 className="text-3xl sm:text-4xl font-headline italic mb-6 font-bold">
                Oficinas & Palestras
              </h2>
              <p className="text-blue-100 font-body text-base sm:text-lg leading-relaxed mb-8">
                Disseminando conhecimento prático e estratégico. Oficinas
                voltadas para alunos do ensino regular, técnico e superior, além
                de formações imersivas para professores em temas inovadores.
              </p>
              <button className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-sm hover:brightness-110 transition-all active:scale-95 shadow-lg shadow-secondary-container/20">
                Solicitar Proposta
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
                <span
                  className="material-symbols-outlined text-secondary-container text-3xl mb-3"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  campaign
                </span>
                <p className="font-headline text-lg font-bold">
                  Alunos (Ensino Regular)
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
                <span
                  className="material-symbols-outlined text-secondary-container text-3xl mb-3"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  engineering
                </span>
                <p className="font-headline text-lg font-bold">
                  Alunos (Técnico e Sup.)
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors sm:col-span-2 flex items-center gap-4">
                <span
                  className="material-symbols-outlined text-secondary-container text-4xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  model_training
                </span>
                <div>
                  <p className="font-headline text-lg font-bold">
                    Formação de Professores
                  </p>
                  <p className="text-xs text-blue-200 uppercase tracking-widest font-bold mt-1">
                    Temas Estratégicos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
