"use client";

import Link from "next/link";

export default function ServicosPage() {
  return (
    <main className="w-full flex-grow pt-8 sm:pt-16 pb-24 px-6 sm:px-8 max-w-7xl mx-auto overflow-x-hidden">
      {/* PAGE HEADER */}
      <header className="mb-16 sm:mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-[2px] bg-secondary-container"></div>
          <span className="font-label text-[10px] sm:text-xs uppercase tracking-[0.2em] text-secondary font-bold">
            Portfólio de Soluções
          </span>
        </div>
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl text-primary italic font-bold leading-tight tracking-tight">
          Serviços Oferecidos
        </h1>
        <p className="mt-6 text-on-surface-variant max-w-2xl text-base sm:text-lg leading-relaxed font-medium">
          Abordagens personalizadas que unem a tradição acadêmica à agilidade da
          inovação contemporânea para transformar a sua instituição de ensino.
        </p>
      </header>

      {/* SERVICES BENTO GRID */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
        {/* Category 1: Gestão Escolar */}
        <div className="bg-surface-container-low p-8 sm:p-10 flex flex-col h-full group hover:bg-white rounded-2xl border border-transparent hover:border-outline-variant/30 hover:shadow-xl transition-all duration-500">
          <div className="mb-8 inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-sm border border-outline-variant/10 group-hover:scale-110 transition-transform duration-500">
            <span
              className="material-symbols-outlined text-secondary-container text-4xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              account_balance
            </span>
          </div>
          <h2 className="text-2xl font-headline font-bold text-primary mb-6 leading-tight">
            Consultorias em Gestão Escolar e Educacional
          </h2>
          <ul className="space-y-4 mb-10 flex-grow">
            {[
              "Implementação da metodologia Sebrae",
              "Monitoramento de resultados educacionais",
              "Apoio à gestão pedagógica",
              "Desenvolvimento de equipes",
              "Organização de processos pedagógicos",
              "Cultura de resultados na escola",
              "Elaboração e acompanhamento de PDI e PEI",
              "Combate à evasão escolar",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span
                  className="material-symbols-outlined text-secondary-container text-lg shrink-0 mt-0.5"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                <span className="text-on-surface-variant text-sm sm:text-base font-medium leading-snug">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <div className="pt-6 border-t border-outline-variant/20">
            <span className="text-[10px] font-label uppercase tracking-widest text-primary font-bold opacity-60">
              Foco em Governança
            </span>
          </div>
        </div>

        {/* Category 2: Educação Empreendedora */}
        <div className="bg-surface-container-low p-8 sm:p-10 flex flex-col h-full group hover:bg-white rounded-2xl border border-transparent hover:border-outline-variant/30 hover:shadow-xl transition-all duration-500">
          <div className="mb-8 inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-sm border border-outline-variant/10 group-hover:scale-110 transition-transform duration-500">
            <span
              className="material-symbols-outlined text-secondary-container text-4xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              rocket_launch
            </span>
          </div>
          <h2 className="text-2xl font-headline font-bold text-primary mb-6 leading-tight">
            Educação Empreendedora
          </h2>
          <ul className="space-y-4 mb-10 flex-grow">
            {[
              "Implementação de programas de educação empreendedora",
              "Desenvolvimento de projetos práticos (empresa simulada, feiras, ações com a comunidade)",
              "Estímulo ao protagonismo dos alunos",
              "Integração entre teoria e prática",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span
                  className="material-symbols-outlined text-secondary-container text-lg shrink-0 mt-0.5"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                <span className="text-on-surface-variant text-sm sm:text-base font-medium leading-snug">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <div className="pt-6 border-t border-outline-variant/20">
            <span className="text-[10px] font-label uppercase tracking-widest text-primary font-bold opacity-60">
              Foco em Atitude e Prática
            </span>
          </div>
        </div>

        {/* Category 3: Educação Inovadora */}
        <div className="bg-surface-container-low p-8 sm:p-10 flex flex-col h-full group hover:bg-white rounded-2xl border border-transparent hover:border-outline-variant/30 hover:shadow-xl transition-all duration-500">
          <div className="mb-8 inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-sm border border-outline-variant/10 group-hover:scale-110 transition-transform duration-500">
            <span
              className="material-symbols-outlined text-secondary-container text-4xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              lightbulb
            </span>
          </div>
          <h2 className="text-2xl font-headline font-bold text-primary mb-6 leading-tight">
            Educação Inovadora
          </h2>
          <ul className="space-y-4 mb-10 flex-grow">
            {[
              "Formação de docentes em metodologias ativas",
              "Capacitação em inteligência artificial aplicada à educação",
              "Desenvolvimento da criatividade no processo de ensino-aprendizagem",
              "Práticas docentes inovadoras",
              "Pessoas e comportamento no ambiente educacional",
              "Oficinas e palestras para alunos do ensino regular, técnico e superior",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span
                  className="material-symbols-outlined text-secondary-container text-lg shrink-0 mt-0.5"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                <span className="text-on-surface-variant text-sm sm:text-base font-medium leading-snug">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <div className="pt-6 border-t border-outline-variant/20">
            <span className="text-[10px] font-label uppercase tracking-widest text-primary font-bold opacity-60">
              Foco no Futuro
            </span>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="mt-24 sm:mt-32 animate-in fade-in duration-1000 delay-500">
        <div className="relative bg-primary-container rounded-[2rem] overflow-hidden p-10 sm:p-16 md:p-24 text-center shadow-2xl">
          {/* Subtle geometric accent */}
          <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-secondary-container/20 rounded-bl-full pointer-events-none"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 sm:w-56 sm:h-56 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>

          <h3 className="text-3xl sm:text-4xl md:text-5xl font-headline italic font-bold text-on-primary mb-6 relative z-10">
            Pronto para elevar o padrão da sua instituição?
          </h3>

          <p className="text-on-primary-container text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed relative z-10 font-medium">
            Vamos desenhar juntos uma estratégia que respeite a sua história e
            impulsione o seu futuro acadêmico. Agende uma reunião exploratória.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10">
            <Link
              href="/contato"
              className="w-full sm:w-auto bg-secondary-container text-on-secondary-container font-bold px-8 py-4 rounded-xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-secondary-container/20 flex items-center justify-center gap-3 uppercase tracking-wider text-sm"
            >
              Agendar Consultoria Especializada
              <span className="material-symbols-outlined text-lg">
                arrow_forward
              </span>
            </Link>
            <Link
              href="/experiencia"
              className="w-full sm:w-auto text-on-primary border border-on-primary/30 px-8 py-4 rounded-xl hover:bg-white/10 active:scale-95 transition-all font-bold uppercase tracking-wider text-sm flex items-center justify-center"
            >
              Ver Case Studies
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
