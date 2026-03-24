"use client";
import boas_vindas_image from "@/assets/boas-vindas.jpeg";
import Image from "next/image";

export default function BoasVindasPage() {
  return (
    <main className="w-full flex-grow flex flex-col items-center justify-center pt-8 md:pt-16 pb-24 px-6 sm:px-8 max-w-7xl mx-auto">
      {/* SEÇÃO PRINCIPAL: LAYOUT ASSIMÉTRICO */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full animate-in fade-in slide-in-from-bottom-8 duration-1000">
        {/* COLUNA ESQUERDA: CONTEÚDO E TIPOGRAFIA (Ocupa 5 colunas no Desktop) */}
        <div className="lg:col-span-5 space-y-10 lg:space-y-12 order-2 lg:order-1 mt-8 lg:mt-0">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-[2px] bg-secondary-container"></div>
              <span className="text-xs font-label uppercase tracking-widest text-secondary font-bold">
                Introdução
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-headline font-bold leading-[1.1] text-primary -tracking-[0.02em]">
              Bem-vindo ao meu portfólio
            </h1>

            <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed max-w-lg font-medium">
              A educação é uma das ferramentas mais poderosas de transformação —
              quando bem estruturada, ela não apenas forma alunos, mas
              desenvolve pessoas, impulsiona carreiras e transforma realidades.
            </p>
          </div>

          {/* CARD DE CITAÇÃO DE DESTAQUE */}
          <div className="relative p-8 sm:p-10 bg-surface-container-low rounded-2xl overflow-hidden shadow-sm border border-outline-variant/20 hover:shadow-md transition-shadow duration-300">
            {/* Linha decorativa lateral */}
            <div className="absolute top-0 left-0 w-1.5 h-full bg-secondary-container"></div>

            <span
              className="material-symbols-outlined text-secondary-container text-4xl mb-4 block opacity-80"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              format_quote
            </span>

            <blockquote className="text-lg sm:text-xl font-headline italic text-primary leading-relaxed pr-4">
              “Educar não é apenas ensinar conteúdos, é desenvolver competências
              para a vida, para o trabalho e para o futuro.”
            </blockquote>
          </div>
        </div>

        {/* COLUNA DIREITA: COMPONENTE VISUAL (Ocupa 7 colunas no Desktop) */}
        <div className="lg:col-span-7 relative order-1 lg:order-2">
          {/* Fundo decorativo (Glow) */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative group">
            {/* Retrato Principal */}
            <div className="bg-surface-container-highest rounded-2xl overflow-hidden editorial-shadow transition-transform duration-700 group-hover:-translate-y-2">
              <Image src={boas_vindas_image} alt="" />
            </div>

            {/* Tag/Selo Flutuante de Inovação */}
            <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-8 bg-secondary-container text-on-secondary-container px-6 sm:px-8 py-5 sm:py-6 rounded-xl shadow-2xl flex items-center gap-4 hover:scale-105 transition-transform duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <span
                  className="material-symbols-outlined text-white text-xl sm:text-2xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  lightbulb
                </span>
              </div>
              <div>
                <p className="text-[10px] sm:text-xs font-label uppercase tracking-widest font-bold opacity-90 mb-0.5">
                  Metodologia
                </p>
                <p className="font-headline text-base sm:text-lg font-bold leading-tight">
                  Inovação Acadêmica
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE INDICADORES DE CONFIANÇA / TRANSIÇÃO */}
      <section className="w-full mt-24 sm:mt-32 pt-12 sm:pt-16 border-t border-outline-variant/20 animate-in fade-in duration-1000 delay-300">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
          <div className="text-center group">
            <span className="block text-4xl sm:text-5xl font-headline font-bold text-primary mb-2 group-hover:-translate-y-1 transition-transform">
              15+
            </span>
            <span className="text-[10px] sm:text-xs font-label text-on-surface-variant uppercase tracking-widest font-semibold">
              Anos de Experiência
            </span>
          </div>

          <div className="text-center group">
            <span className="block text-4xl sm:text-5xl font-headline font-bold text-primary mb-2 group-hover:-translate-y-1 transition-transform">
              500+
            </span>
            <span className="text-[10px] sm:text-xs font-label text-on-surface-variant uppercase tracking-widest font-semibold">
              Projetos Educativos
            </span>
          </div>

          <div className="text-center group">
            <span className="block text-4xl sm:text-5xl font-headline font-bold text-primary mb-2 group-hover:-translate-y-1 transition-transform">
              12k
            </span>
            <span className="text-[10px] sm:text-xs font-label text-on-surface-variant uppercase tracking-widest font-semibold">
              Alunos Impactados
            </span>
          </div>

          <div className="text-center group">
            <span className="block text-4xl sm:text-5xl font-headline font-bold text-primary mb-2 group-hover:-translate-y-1 transition-transform">
              45+
            </span>
            <span className="text-[10px] sm:text-xs font-label text-on-surface-variant uppercase tracking-widest font-semibold">
              Certificações
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
