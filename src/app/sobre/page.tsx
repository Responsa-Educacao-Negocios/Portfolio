"use client";
import sobre from "@/assets/sobre.jpeg";
import Image from "next/image";

export default function SobreMimPage() {
  return (
    <main className="w-full flex-grow pb-24">
      {/* HERO NARRATIVE SECTION: Asymmetric Layout */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pt-10 sm:pt-16 mb-20 sm:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column: Text & Typography (7 columns on desktop) */}
          <div className="lg:col-span-7 order-2 lg:order-1 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="flex items-center space-x-3 mb-6 sm:mb-8">
              <div className="w-12 h-[2px] bg-secondary-container"></div>
              <span className="text-xs font-label uppercase tracking-[0.1em] text-secondary font-bold">
                Trajetória Profissional
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] font-headline font-bold text-primary leading-[1.1] mb-8 sm:mb-10 tracking-tight">
              Quem Sou Eu <br className="hidden sm:block" />
              <span className="italic font-normal text-on-surface-variant">
                | O Que Eu Faço
              </span>
            </h1>

            <div className="space-y-6 text-on-surface-variant leading-relaxed text-base sm:text-lg">
              <p className="font-bold text-primary text-lg sm:text-xl">
                Sou um profissional apaixonado por educação, gestão e
                desenvolvimento humano, com atuação voltada para a transformação
                de instituições de ensino por meio de estratégias práticas e
                resultados reais.
              </p>

              <p className="font-medium">
                Atuo como consultor educacional, apoiando escolas, faculdades e
                organizações no fortalecimento da gestão pedagógica, no
                desenvolvimento de equipes e na implementação de metodologias
                inovadoras.
              </p>

              {/* Highlight Box */}
              <div className="flex items-start gap-4 p-6 sm:p-8 bg-surface-container-low rounded-2xl border-l-4 border-secondary-container shadow-sm mt-8 mb-8">
                <span
                  className="material-symbols-outlined text-secondary-container text-3xl shrink-0"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  lightbulb
                </span>
                <p className="italic text-on-surface font-headline text-lg sm:text-xl leading-relaxed">
                  &quot;Meu trabalho conecta educação, estratégia e prática,
                  sempre com foco em melhorar o desempenho institucional.&quot;
                </p>
              </div>

              <p className="font-medium">
                O objetivo final é claro: engajar alunos e desenvolver
                profissionais plenamente preparados para os complexos desafios
                do presente e do futuro.
              </p>
            </div>
          </div>

          {/* Right Column: Image Side (5 columns on desktop) */}
          <div className="lg:col-span-5 relative order-1 lg:order-2 animate-in fade-in zoom-in-95 duration-1000 delay-200">
            {/* Top-left decorative block */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-secondary-container opacity-20 rounded-tl-xl hidden lg:block"></div>

            <div className="rounded-2xl overflow-hidden editorial-shadow relative z-10 bg-surface-container-highest group">
              <Image src={sobre} alt="" />
            </div>

            {/* Bottom-right decorative blur */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary-container/10 blur-2xl -z-0 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* STATS / PILLARS SECTION (Editorial Layout) */}
      <section className="bg-surface-container-low py-20 sm:py-24 border-y border-outline-variant/20 animate-in fade-in duration-1000 delay-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16">
            <div className="space-y-4 group">
              <span
                className="material-symbols-outlined text-secondary-container text-4xl group-hover:scale-110 transition-transform origin-left"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                menu_book
              </span>
              <h3 className="text-xl sm:text-2xl font-headline font-bold text-primary">
                Gestão Pedagógica
              </h3>
              <p className="text-on-surface-variant font-body text-sm sm:text-base leading-relaxed">
                Fortalecimento institucional através da implementação de
                processos que garantem a excelência acadêmica e a
                sustentabilidade do ensino.
              </p>
            </div>

            <div className="space-y-4 group">
              <span
                className="material-symbols-outlined text-secondary-container text-4xl group-hover:scale-110 transition-transform origin-left"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                psychology
              </span>
              <h3 className="text-xl sm:text-2xl font-headline font-bold text-primary">
                Desenvolvimento Humano
              </h3>
              <p className="text-on-surface-variant font-body text-sm sm:text-base leading-relaxed">
                Mentoria e capacitação de equipes docentes e administrativas
                focadas em resultados práticos e saúde organizacional.
              </p>
            </div>

            <div className="space-y-4 group">
              <span
                className="material-symbols-outlined text-secondary-container text-4xl group-hover:scale-110 transition-transform origin-left"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                rocket_launch
              </span>
              <h3 className="text-xl sm:text-2xl font-headline font-bold text-primary">
                Inovação Metodológica
              </h3>
              <p className="text-on-surface-variant font-body text-sm sm:text-base leading-relaxed">
                Curadoria e aplicação de metodologias ativas e inovadoras que
                preparam as instituições para as reais demandas do futuro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL QUOTE SECTION */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 pt-24 sm:pt-32 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
        <div className="mb-8 flex justify-center">
          <div className="w-1 h-12 bg-secondary-container rounded-full"></div>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-headline italic font-bold text-primary leading-snug sm:leading-relaxed">
          &quot;Acredito que a educação é a ferramenta mais potente para a
          evolução da sociedade, e a gestão qualificada é o motor que a torna
          sustentável.&quot;
        </h2>
      </section>
    </main>
  );
}
