"use client";

import home_image from "@/assets/home.jpeg";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="flex-grow flex items-center max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-20 w-full animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center w-full">
          {/* Content Column */}
          <div className="lg:col-span-5 z-10 order-2 lg:order-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-3 mb-4 md:mb-6">
              <div className="w-6 h-[2px] bg-secondary-container hidden sm:block"></div>
              <span className="text-[10px] md:text-xs font-label uppercase tracking-[0.15em] text-secondary font-bold">
                Inovação & Gestão
              </span>
            </div>

            <h1 className="font-headline text-4xl sm:text-5xl lg:text-7xl italic text-primary leading-[1.1] mb-6 lg:mb-8 tracking-tight">
              Wallison Alves Branquinho
            </h1>

            <p className="font-body text-lg lg:text-xl text-on-surface-variant leading-relaxed mb-8 lg:mb-10 border-l-0 lg:border-l-4 border-primary/10 lg:pl-6 py-2 max-w-2xl mx-auto lg:mx-0">
              Consultor em Educação, Inovação, Criatividade, Gestão e
              Desenvolvimento de Pessoas.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              {/* BOTÃO CORRIGIDO COM LINK */}
              <Link
                href="/boas-vindas"
                className="w-full sm:w-auto bg-secondary-container text-on-secondary-container px-8 py-4 rounded-md font-bold text-base lg:text-lg editorial-shadow hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span>Iniciar Jornada</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <Link
                href="/servicos"
                className="w-full sm:w-auto bg-transparent text-primary px-8 py-4 font-bold text-base lg:text-lg hover:bg-primary/5 active:scale-95 transition-all rounded-md flex items-center justify-center"
              >
                Conheça o Portfólio
              </Link>
            </div>
          </div>

          {/* Image Column */}
          <div className="lg:col-span-7 relative order-1 lg:order-2">
            <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-[16/11] rounded-2xl lg:rounded-xl overflow-hidden editorial-shadow group">
              <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-secondary-container/20 -mr-12 -mt-12 md:-mr-16 md:-mt-16 rounded-full blur-2xl md:blur-3xl"></div>
              <Image
                src={home_image}
                alt="Wallison Alves Branquinho"
                fill
                className="object-cover object-[center_25%]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/60 via-primary/20 to-transparent"></div>

              <div className="hidden sm:block absolute bottom-6 left-6 md:bottom-8 md:left-8 p-4 md:p-6 bg-white/70 backdrop-blur-xl border border-white/20 rounded-lg max-w-xs shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-secondary-container rounded-md flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-white">
                      school
                    </span>
                  </div>
                  <div>
                    <p className="text-[0.65rem] md:text-[0.7rem] font-label uppercase tracking-widest text-primary font-bold">
                      Expertise
                    </p>
                    <p className="text-xs md:text-sm font-semibold text-on-surface">
                      Curadoria Acadêmica
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-4 border-r-4 border-secondary-container/30 hidden lg:block"></div>
          </div>
        </div>
      </section>

      {/* NOVA SEÇÃO: VÍDEOS E ORATÓRIA (Para os vídeos do Drive/Insta) */}
      <section className="bg-surface-container-highest py-16 md:py-24 border-y border-outline-variant/20 animate-in fade-in duration-1000 delay-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-14">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[2px] bg-secondary-container"></div>
                <span className="font-label text-xs uppercase tracking-widest text-secondary font-bold">
                  Dinâmica & Oratória
                </span>
              </div>
              <h2 className="font-headline text-3xl md:text-5xl text-primary font-bold italic tracking-tight">
                Assista em Ação
              </h2>
            </div>
            <Link
              href="https://instagram.com/wallisonbranquinho"
              target="_blank"
              className="text-sm font-bold text-secondary-container hover:text-secondary mt-4 md:mt-0 flex items-center gap-2 transition-colors uppercase tracking-widest"
            >
              Ver mais conteúdos{" "}
              <span className="material-symbols-outlined text-lg">
                arrow_forward
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Video Placeholder 1 */}
            <a
              href="#"
              target="_blank"
              className="group relative aspect-video bg-black rounded-2xl overflow-hidden shadow-lg border border-outline-variant/20 block"
            >
              <img
                src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=800&auto=format&fit=crop"
                alt="Vídeo 1"
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-secondary-container transition-all shadow-xl border border-white/30">
                  <span
                    className="material-symbols-outlined text-white text-4xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    play_arrow
                  </span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary-container mb-1 block">
                  Palestra
                </span>
                <p className="text-white font-headline font-bold text-lg sm:text-xl drop-shadow-md leading-tight">
                  O Futuro da Educação Corporativa
                </p>
              </div>
            </a>

            {/* Video Placeholder 2 */}
            <a
              href="#"
              target="_blank"
              className="group relative aspect-video bg-black rounded-2xl overflow-hidden shadow-lg border border-outline-variant/20 block"
            >
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop"
                alt="Vídeo 2"
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-secondary-container transition-all shadow-xl border border-white/30">
                  <span
                    className="material-symbols-outlined text-white text-4xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    play_arrow
                  </span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary-container mb-1 block">
                  Workshop
                </span>
                <p className="text-white font-headline font-bold text-lg sm:text-xl drop-shadow-md leading-tight">
                  Gestão Estratégica de Professores
                </p>
              </div>
            </a>

            {/* Video Placeholder 3 */}
            <a
              href="#"
              target="_blank"
              className="group relative aspect-video bg-black rounded-2xl overflow-hidden shadow-lg border border-outline-variant/20 block sm:col-span-2 lg:col-span-1"
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
                alt="Vídeo 3"
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-secondary-container transition-all shadow-xl border border-white/30">
                  <span
                    className="material-symbols-outlined text-white text-4xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    play_arrow
                  </span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary-container mb-1 block">
                  Consultoria
                </span>
                <p className="text-white font-headline font-bold text-lg sm:text-xl drop-shadow-md leading-tight">
                  Dinâmica de Metodologias Ativas
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* SECONDARY NAVIGATION / BENTO HIGHLIGHTS */}
      <section className="bg-surface-container-low py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-surface-container-lowest p-6 md:p-8 rounded-xl editorial-shadow border-t-4 border-primary/10 hover:-translate-y-1 transition-transform duration-300">
              <span className="material-symbols-outlined text-secondary-container mb-4 text-3xl md:text-4xl">
                lightbulb
              </span>
              <h3 className="font-headline text-lg md:text-xl text-primary mb-2 md:mb-3 font-bold">
                Educação e Inovação
              </h3>
              {/* TEXTO CORRIGIDO AQUI */}
              <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">
                Transformando ambientes de aprendizagem através de metodologias
                ativas e criatividade aplicada.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-6 md:p-8 rounded-xl editorial-shadow border-t-4 border-primary/10 hover:-translate-y-1 transition-transform duration-300">
              <span className="material-symbols-outlined text-secondary-container mb-4 text-3xl md:text-4xl">
                groups
              </span>
              <h3 className="font-headline text-lg md:text-xl text-primary mb-2 md:mb-3 font-bold">
                Desenvolvimento Humano
              </h3>
              <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">
                Foco na gestão de pessoas e no potencial criativo como motor de
                crescimento institucional.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-6 md:p-8 rounded-xl editorial-shadow border-t-4 border-primary/10 hover:-translate-y-1 transition-transform duration-300 sm:col-span-2 lg:col-span-1">
              <span className="material-symbols-outlined text-secondary-container mb-4 text-3xl md:text-4xl">
                auto_awesome
              </span>
              <h3 className="font-headline text-lg md:text-xl text-primary mb-2 md:mb-3 font-bold">
                Consultoria Estratégica
              </h3>
              <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">
                Soluções personalizadas para desafios complexos em gestão
                educacional e corporativa.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
