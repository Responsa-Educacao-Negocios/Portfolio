"use client";
import formacao from "@/assets/formacao.jpeg";
import Image from "next/image";

export default function FormacaoPage() {
  return (
    <main className="pt-8 sm:pt-16 pb-24 overflow-x-hidden flex-grow w-full">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* SECTION HEADER */}
        <div className="mb-16 sm:mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-secondary-container"></div>
            <span className="font-label text-[10px] sm:text-xs uppercase tracking-[0.2em] text-secondary font-bold">
              Currículo Acadêmico
            </span>
          </div>
          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl text-primary font-bold italic leading-tight tracking-tight">
            Formação Acadêmica
          </h1>
        </div>

        {/* BENTO LAYOUT FOR CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT: ACADEMIC JOURNEY (TIMELINE) */}
          <div className="lg:col-span-7 space-y-0">
            {/* Graduation */}
            <div className="group relative flex gap-6 sm:gap-8 animate-in fade-in slide-in-from-left-8 duration-1000 delay-100">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 shrink-0 rounded-full bg-primary flex items-center justify-center text-white z-10 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    school
                  </span>
                </div>
                {/* Linha conectora */}
                <div className="w-0.5 h-full bg-surface-container-highest absolute top-12 left-6"></div>
              </div>
              <div className="pt-2 pb-14 sm:pb-16">
                <h3 className="font-headline text-2xl sm:text-3xl text-primary font-bold mb-3">
                  Graduação em Administração
                </h3>
                <p className="text-on-surface-variant leading-relaxed max-w-lg text-sm sm:text-base font-medium">
                  Base sólida em gestão estratégica, processos organizacionais e
                  análise crítica de mercado, fundamentando a visão executiva
                  aplicada à educação e ao desenvolvimento humano.
                </p>
              </div>
            </div>

            {/* Post-Graduation */}
            <div className="group relative flex gap-6 sm:gap-8 animate-in fade-in slide-in-from-left-8 duration-1000 delay-300">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 shrink-0 rounded-full bg-primary-container flex items-center justify-center text-white z-10 shadow-lg shadow-primary-container/20 group-hover:scale-110 transition-transform">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    history_edu
                  </span>
                </div>
                {/* Linha conectora */}
                <div className="w-0.5 h-full bg-surface-container-highest absolute top-12 left-6"></div>
              </div>
              <div className="pt-2 pb-14 sm:pb-16 w-full">
                <h3 className="font-headline text-2xl sm:text-3xl text-primary font-bold mb-6">
                  Pós-graduação Multidisciplinar
                </h3>

                {/* Grid de Pós-graduações */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
                  <div className="p-5 sm:p-6 bg-surface-container-low rounded-xl border-l-4 border-secondary-container transition-all hover:bg-white hover:shadow-md">
                    <h4 className="font-body font-bold text-primary mb-1.5 text-base">
                      Logística Operacional
                    </h4>
                    <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold opacity-70">
                      Eficiência em Fluxos
                    </p>
                  </div>

                  <div className="p-5 sm:p-6 bg-surface-container-low rounded-xl border-l-4 border-secondary-container transition-all hover:bg-white hover:shadow-md">
                    <h4 className="font-body font-bold text-primary mb-1.5 text-base">
                      Liderança e Gestão de Pessoas
                    </h4>
                    <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold opacity-70">
                      Capital Humano
                    </p>
                  </div>

                  <div className="sm:col-span-2 p-5 sm:p-6 bg-surface-container-low rounded-xl border-l-4 border-secondary-container transition-all hover:bg-white hover:shadow-md">
                    <h4 className="font-body font-bold text-primary mb-1.5 text-base">
                      Metodologias de Ensino
                    </h4>
                    <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold opacity-70">
                      Inovação Pedagógica
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ongoing Graduation */}
            <div className="group relative flex gap-6 sm:gap-8 animate-in fade-in slide-in-from-left-8 duration-1000 delay-500">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 shrink-0 rounded-full bg-secondary-container flex items-center justify-center text-white z-10 shadow-lg shadow-secondary-container/20 group-hover:scale-110 transition-transform">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    nutrition
                  </span>
                </div>
              </div>
              <div className="pt-1">
                <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-[10px] font-black uppercase tracking-[0.2em] rounded-md mb-4 border border-secondary/20">
                  Em Andamento
                </span>
                <h3 className="font-headline text-2xl sm:text-3xl text-primary font-bold mb-3">
                  Graduando em Nutrição
                </h3>
                <p className="text-on-surface-variant leading-relaxed max-w-lg text-sm sm:text-base font-medium">
                  Expandindo horizontes para a compreensão integral do bem-estar
                  e performance humana, integrando saúde, disciplina e educação.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: HIGH-END IMAGE COMPOSITION */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 animate-in fade-in zoom-in-95 duration-1000 delay-500 mt-10 lg:mt-0">
            <div className="relative pl-4 sm:pl-0">
              {/* Background Accent Shapes */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl hidden sm:block"></div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-secondary-container/10 rounded-full blur-2xl hidden sm:block"></div>

              {/* Main Image Container */}
              <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/10 aspect-[4/5] bg-surface-container-highest group">
                <Image src={formacao} alt="" />

                {/* Overlay Label */}
                <div className="absolute bottom-6 right-6 left-6 p-6 sm:p-8 bg-white/90 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl transform translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="font-headline italic text-primary text-lg sm:text-xl font-bold mb-3 leading-snug">
                    &quot;A educação contínua é o alicerce para a excelência em
                    qualquer domínio.&quot;
                  </p>
                  <div className="w-12 h-[3px] bg-secondary-container rounded-full"></div>
                </div>
              </div>

              {/* Geometric Accents */}
              <div className="absolute top-1/4 -right-6 sm:-right-8 w-12 h-12 bg-secondary-container rounded-xl shadow-xl z-20 flex items-center justify-center text-white -rotate-12 hover:rotate-0 transition-transform duration-300">
                <span
                  className="material-symbols-outlined text-2xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
