"use client";

export default function ContatoPage() {
  return (
    <main className="w-full flex-grow pt-8 sm:pt-16 pb-24 px-6 sm:px-8 max-w-7xl mx-auto overflow-x-hidden">
      {/* PAGE HEADER */}
      <header className="mb-16 sm:mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-[2px] bg-secondary-container"></div>
          <span className="font-label text-[10px] sm:text-xs uppercase tracking-[0.2em] text-secondary font-bold">
            Conexão & Parcerias
          </span>
        </div>
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl text-primary italic font-bold leading-tight tracking-tight">
          Vamos Conversar
        </h1>
        <p className="mt-6 text-on-surface-variant max-w-2xl text-base sm:text-lg leading-relaxed font-medium">
          Pronto para transformar a gestão e a educação da sua instituição?
          Entre em contato diretamente ou explore um pouco mais do meu trabalho
          na prática.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* COLUNA ESQUERDA: CONTATOS DIRETOS */}
        <div className="lg:col-span-5 space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
          {/* WhatsApp */}
          <a
            href="https://wa.me/5534984333000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-6 p-6 bg-surface-container-low rounded-2xl border border-outline-variant/20 hover:border-secondary-container/50 hover:bg-white transition-all group shadow-sm"
          >
            <div className="w-14 h-14 bg-primary/5 text-primary rounded-xl flex items-center justify-center group-hover:bg-secondary-container group-hover:text-white transition-colors shrink-0">
              <span
                className="material-symbols-outlined text-3xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                phone_iphone
              </span>
            </div>
            <div>
              <p className="text-[10px] font-label uppercase tracking-widest text-slate-500 font-bold mb-1">
                WhatsApp
              </p>
              <h3 className="font-headline text-xl text-primary font-bold">
                (34) 9 8433-3000
              </h3>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:wallisonbranquinho@hotmail.com"
            className="flex items-center gap-6 p-6 bg-surface-container-low rounded-2xl border border-outline-variant/20 hover:border-secondary-container/50 hover:bg-white transition-all group shadow-sm"
          >
            <div className="w-14 h-14 bg-primary/5 text-primary rounded-xl flex items-center justify-center group-hover:bg-secondary-container group-hover:text-white transition-colors shrink-0">
              <span
                className="material-symbols-outlined text-3xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                mail
              </span>
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-label uppercase tracking-widest text-slate-500 font-bold mb-1">
                E-mail
              </p>
              <h3 className="font-headline text-lg sm:text-xl text-primary font-bold truncate">
                wallisonbranquinho@hotmail.com
              </h3>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/wallison-branquinho-14786a83?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-6 p-6 bg-surface-container-low rounded-2xl border border-outline-variant/20 hover:border-secondary-container/50 hover:bg-white transition-all group shadow-sm"
          >
            <div className="w-14 h-14 bg-primary/5 text-primary rounded-xl flex items-center justify-center group-hover:bg-secondary-container group-hover:text-white transition-colors shrink-0">
              <span
                className="material-symbols-outlined text-3xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                work
              </span>
            </div>
            <div>
              <p className="text-[10px] font-label uppercase tracking-widest text-slate-500 font-bold mb-1">
                LinkedIn
              </p>
              <h3 className="font-headline text-xl text-primary font-bold">
                Conectar Perfil
              </h3>
            </div>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/wallisonbranquinho"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-6 p-6 bg-surface-container-low rounded-2xl border border-outline-variant/20 hover:border-secondary-container/50 hover:bg-white transition-all group shadow-sm"
          >
            <div className="w-14 h-14 bg-primary/5 text-primary rounded-xl flex items-center justify-center group-hover:bg-secondary-container group-hover:text-white transition-colors shrink-0">
              <span
                className="material-symbols-outlined text-3xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                photo_camera
              </span>
            </div>
            <div>
              <p className="text-[10px] font-label uppercase tracking-widest text-slate-500 font-bold mb-1">
                Instagram
              </p>
              <h3 className="font-headline text-xl text-primary font-bold">
                @wallisonbranquinho
              </h3>
            </div>
          </a>
        </div>

        {/* COLUNA DIREITA: VITRINE DE VÍDEOS */}
        <div className="lg:col-span-7 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          <div className="bg-primary-container rounded-[2rem] p-8 sm:p-10 relative overflow-hidden shadow-2xl h-full flex flex-col">
            {/* Decoração de Fundo */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-container/20 rounded-bl-full pointer-events-none"></div>

            <div className="relative z-10 mb-8">
              <span className="inline-block px-3 py-1 bg-white/10 text-white text-[10px] font-bold rounded-md mb-4 uppercase tracking-widest backdrop-blur-sm border border-white/20">
                Conteúdo Prático
              </span>
              <h2 className="text-3xl font-headline italic font-bold text-white mb-2">
                Um pouco do meu trabalho
              </h2>
              <p className="text-blue-100 text-sm sm:text-base font-medium">
                Reflexões sobre educação, metodologias ativas e gestão de
                pessoas. Clique para assistir no Instagram.
              </p>
            </div>

            {/* Grid de Vídeos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10 flex-grow">
              {/* Vídeo 1 */}
              <a
                href="https://instagram.com/wallisonbranquinho"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-surface-container-highest border border-white/10 shadow-lg block"
              >
                <img
                  src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=600&auto=format&fit=crop"
                  alt="Capa do Vídeo 1"
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-colors"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                  <span
                    className="material-symbols-outlined text-white text-5xl mb-2 opacity-90 group-hover:scale-110 transition-transform"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    play_circle
                  </span>
                  <p className="text-white font-headline font-bold text-sm leading-tight drop-shadow-md">
                    O Futuro da Sala de Aula
                  </p>
                </div>
              </a>

              {/* Vídeo 2 */}
              <a
                href="https://instagram.com/wallisonbranquinho"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-surface-container-highest border border-white/10 shadow-lg block"
              >
                <img
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=600&auto=format&fit=crop"
                  alt="Capa do Vídeo 2"
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-colors"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                  <span
                    className="material-symbols-outlined text-white text-5xl mb-2 opacity-90 group-hover:scale-110 transition-transform"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    play_circle
                  </span>
                  <p className="text-white font-headline font-bold text-sm leading-tight drop-shadow-md">
                    Engajamento de Professores
                  </p>
                </div>
              </a>
            </div>

            <div className="relative z-10 mt-6 text-center sm:text-right">
              <a
                href="https://instagram.com/wallisonbranquinho"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-secondary-container hover:text-white transition-colors text-sm font-bold uppercase tracking-widest"
              >
                Ver mais no Instagram
                <span className="material-symbols-outlined text-base">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
