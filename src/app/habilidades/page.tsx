"use client";

import Link from "next/link";

export default function HabilidadesPage() {
  return (
    <main className="w-full flex-grow pt-8 sm:pt-16 pb-24 px-6 sm:px-8 max-w-7xl mx-auto overflow-x-hidden">
      {/* PAGE HEADER */}
      <header className="mb-16 sm:mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-[2px] bg-secondary-container"></div>
          <span className="font-label text-[10px] sm:text-xs uppercase tracking-[0.2em] text-secondary font-bold">
            Expertise & Competências
          </span>
        </div>
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl text-primary italic font-bold leading-tight tracking-tight">
          Habilidades
        </h1>
        <p className="mt-6 text-on-surface-variant max-w-2xl text-base sm:text-lg leading-relaxed font-medium">
          Um ecossistema de competências que integra o rigor acadêmico com as
          demandas dinâmicas da inovação educacional e da gestão contemporânea.
        </p>
      </header>

      {/* SKILLS BENTO GRID */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        {/* Skill 1: Gestão Pedagógica (Large Highlight) */}
        <div className="md:col-span-8 bg-primary-container text-white p-8 sm:p-10 rounded-2xl relative overflow-hidden group shadow-lg animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-700">
            <span
              className="material-symbols-outlined text-9xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              school
            </span>
          </div>
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-bold tracking-widest uppercase mb-6 rounded-md border border-secondary-container/50 shadow-sm">
                Liderança
              </span>
              <h3 className="font-headline font-bold text-3xl sm:text-4xl mb-4 italic">
                Gestão Pedagógica e Educacional
              </h3>
              <p className="text-on-primary-container text-base sm:text-lg leading-relaxed max-w-xl">
                Articulação estratégica de currículos, formação docente e
                acompanhamento de indicadores de aprendizagem para promover a
                excelência institucional.
              </p>
            </div>
            <div className="mt-12 flex items-center gap-6">
              <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-secondary-container w-[95%] shadow-[0_0_10px_rgba(253,129,33,0.5)]"></div>
              </div>
              <span className="font-label text-sm font-bold text-secondary-container">
                95%
              </span>
            </div>
          </div>
        </div>

        {/* Skill 2: IA na Educação (Vertical Highlight) */}
        <div className="md:col-span-4 bg-surface-container-low p-8 sm:p-10 rounded-2xl border-l-4 border-secondary-container flex flex-col justify-center shadow-sm hover:shadow-md transition-shadow animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          <div className="mb-6 inline-flex items-center justify-center w-14 h-14 bg-white rounded-xl shadow-sm border border-outline-variant/20">
            <span
              className="material-symbols-outlined text-secondary-container text-3xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              psychology
            </span>
          </div>
          <h3 className="font-headline font-bold text-2xl text-primary mb-4">
            Tecnologia e Inteligência Artificial na Educação
          </h3>
          <p className="text-on-surface-variant leading-relaxed text-sm sm:text-base font-medium">
            Aplicação de IA e ferramentas digitais para personalização do
            ensino, engajamento e otimização de fluxos pedagógicos.
          </p>
        </div>

        {/* Skill 3: Metodologias Ativas */}
        <div className="md:col-span-4 bg-surface-container-low p-8 rounded-2xl border border-transparent hover:border-outline-variant/30 hover:bg-white transition-all duration-300 shadow-sm animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          <h3 className="font-headline font-bold text-xl sm:text-2xl text-primary mb-4">
            Implementação de Metodologias Ativas
          </h3>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="text-[10px] bg-secondary-container/10 text-secondary font-bold px-2 py-1 rounded border border-secondary-container/20">
              PBL
            </span>
            <span className="text-[10px] bg-secondary-container/10 text-secondary font-bold px-2 py-1 rounded border border-secondary-container/20">
              SALA INVERTIDA
            </span>
            <span className="text-[10px] bg-secondary-container/10 text-secondary font-bold px-2 py-1 rounded border border-secondary-container/20">
              GAMIFICAÇÃO
            </span>
          </div>
          <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed font-medium">
            Desenho de experiências de aprendizagem centradas no estudante,
            promovendo autonomia e pensamento crítico.
          </p>
        </div>

        {/* Skill 4: Visão Estratégica (Horizontal Strip) */}
        <div className="md:col-span-8 bg-surface-container-highest p-8 sm:p-10 rounded-2xl flex flex-col md:flex-row gap-8 items-center border border-outline-variant/20 shadow-sm hover:shadow-md transition-shadow animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="material-symbols-outlined text-secondary-container"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                insights
              </span>
              <h3 className="font-headline font-bold text-2xl text-primary">
                Visão Estratégica com Foco em Resultados
              </h3>
            </div>
            <p className="text-on-surface-variant leading-relaxed text-sm sm:text-base font-medium">
              Análise prospectiva do mercado para antecipação de tendências,
              unindo planejamento estratégico educacional e posicionamento
              institucional.
            </p>
          </div>
          <div className="w-full md:w-32 aspect-square bg-white rounded-full flex items-center justify-center p-4 shadow-inner shrink-0">
            <span className="material-symbols-outlined text-5xl text-primary">
              trending_up
            </span>
          </div>
        </div>

        {/* Remaining Skills Grid (6 itens) */}
        <div className="md:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-2 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
          {/* Skill 5 */}
          <div className="bg-white p-8 rounded-2xl border border-outline-variant/20 group hover:shadow-lg hover:-translate-y-1 transition-all">
            <div className="w-12 h-12 bg-surface-container-low rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-container transition-colors">
              <span className="material-symbols-outlined text-secondary-container group-hover:text-on-primary">
                groups
              </span>
            </div>
            <h4 className="font-headline font-bold text-lg text-primary mb-3">
              Desenvolvimento de Lideranças
            </h4>
            <p className="text-sm text-on-surface-variant leading-relaxed font-medium">
              Formação e mentoria de coordenadores e diretores escolares,
              capacitando gestores para a alta performance.
            </p>
          </div>

          {/* Skill 6 */}
          <div className="bg-white p-8 rounded-2xl border border-outline-variant/20 group hover:shadow-lg hover:-translate-y-1 transition-all">
            <div className="w-12 h-12 bg-surface-container-low rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-container transition-colors">
              <span className="material-symbols-outlined text-secondary-container group-hover:text-on-primary">
                forum
              </span>
            </div>
            <h4 className="font-headline font-bold text-lg text-primary mb-3">
              Comunicação e Facilitação
            </h4>
            <p className="text-sm text-on-surface-variant leading-relaxed font-medium">
              Mediação de workshops, condução de reuniões produtivas e
              comunicação assertiva com grupos e equipes.
            </p>
          </div>

          {/* Skill 7 */}
          <div className="bg-white p-8 rounded-2xl border border-outline-variant/20 group hover:shadow-lg hover:-translate-y-1 transition-all">
            <div className="w-12 h-12 bg-surface-container-low rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-container transition-colors">
              <span className="material-symbols-outlined text-secondary-container group-hover:text-on-primary">
                local_library
              </span>
            </div>
            <h4 className="font-headline font-bold text-lg text-primary mb-3">
              Formação de Professores
            </h4>
            <p className="text-sm text-on-surface-variant leading-relaxed font-medium">
              Capacitação contínua do corpo docente, abordando novas
              metodologias, tecnologias e práticas de sala de aula.
            </p>
          </div>

          {/* Skill 8 */}
          <div className="bg-white p-8 rounded-2xl border border-outline-variant/20 group hover:shadow-lg hover:-translate-y-1 transition-all">
            <div className="w-12 h-12 bg-surface-container-low rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-container transition-colors">
              <span className="material-symbols-outlined text-secondary-container group-hover:text-on-primary">
                map
              </span>
            </div>
            <h4 className="font-headline font-bold text-lg text-primary mb-3">
              Planejamento Estratégico Educacional
            </h4>
            <p className="text-sm text-on-surface-variant leading-relaxed font-medium">
              Construção de rotas institucionais, definição de metas pedagógicas
              e estruturação de currículos alinhados ao mercado.
            </p>
          </div>

          {/* Skill 9 */}
          <div className="bg-white p-8 rounded-2xl border border-outline-variant/20 group hover:shadow-lg hover:-translate-y-1 transition-all">
            <div className="w-12 h-12 bg-surface-container-low rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-container transition-colors">
              <span className="material-symbols-outlined text-secondary-container group-hover:text-on-primary">
                troubleshoot
              </span>
            </div>
            <h4 className="font-headline font-bold text-lg text-primary mb-3">
              Diagnóstico e Solução
            </h4>
            <p className="text-sm text-on-surface-variant leading-relaxed font-medium">
              Identificação precisa de problemas educacionais crônicos e
              proposição de planos de ação corretivos e inovadores.
            </p>
          </div>

          {/* Skill 10 */}
          <div className="bg-white p-8 rounded-2xl border border-outline-variant/20 group hover:shadow-lg hover:-translate-y-1 transition-all">
            <div className="w-12 h-12 bg-surface-container-low rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-container transition-colors">
              <span className="material-symbols-outlined text-secondary-container group-hover:text-on-primary">
                diversity_3
              </span>
            </div>
            <h4 className="font-headline font-bold text-lg text-primary mb-3">
              Engajamento de Alunos e Equipes
            </h4>
            <p className="text-sm text-on-surface-variant leading-relaxed font-medium">
              Criação de ambientes e dinâmicas que promovem a motivação, o
              pertencimento e a retenção de talentos e alunos.
            </p>
          </div>
        </div>
      </div>

      {/* CTA SECTION FINAL */}
      <section className="mt-24 sm:mt-32 animate-in fade-in duration-1000 delay-700">
        <div className="relative bg-primary-container rounded-[2rem] overflow-hidden p-10 sm:p-16 md:p-24 text-center shadow-2xl">
          {/* Subtle geometric accents */}
          <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-secondary-container/10 rounded-bl-full pointer-events-none"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 sm:w-56 sm:h-56 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>

          <h3 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold italic text-on-primary mb-6 relative z-10 tracking-tight">
            Pronto para elevar o patamar da sua instituição?
          </h3>
          <p className="text-on-primary-container text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed relative z-10 font-medium">
            Agende uma conversa técnica para diagnosticar as oportunidades de
            inovação, engajamento e excelência no seu projeto educacional.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10">
            <Link
              href="/contato"
              className="w-full sm:w-auto bg-secondary-container text-on-secondary-container font-bold px-8 py-4 rounded-xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-secondary-container/20 flex items-center justify-center gap-3 uppercase tracking-wider text-sm"
            >
              Agendar Consultoria
              <span className="material-symbols-outlined text-lg">
                arrow_forward
              </span>
            </Link>
            <Link
              href="/experiencia"
              className="w-full sm:w-auto text-on-primary border border-on-primary/30 px-8 py-4 rounded-xl hover:bg-white/10 active:scale-95 transition-all font-bold uppercase tracking-wider text-sm flex items-center justify-center"
            >
              Ver Casos de Sucesso
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
