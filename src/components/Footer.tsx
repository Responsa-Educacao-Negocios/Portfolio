"use client";

import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-surface border-t border-outline-variant/20 pt-16 pb-8 px-6 md:px-8 mt-auto">
      <div className="max-w-7xl mx-auto">
        {/* PARTE SUPERIOR: Links e Marca */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start mb-16 text-center md:text-left">
          {/* Coluna 1: Marca e Tagline */}
          <div className="flex flex-col items-center md:items-start">
            <span className="text-xl font-headline font-bold text-primary tracking-tighter">
              The Academic Editorial
            </span>
            <p className="mt-4 font-body text-sm tracking-wide text-on-surface-variant max-w-xs leading-relaxed">
              Consultoria acadêmica de alta performance, unindo tradição
              institucional e visão contemporânea de mercado.
            </p>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div className="flex flex-col items-center md:items-start">
            <h5 className="font-bold text-primary mb-5 uppercase text-xs tracking-widest font-label">
              Navegação
            </h5>
            <ul className="space-y-3 font-body text-sm tracking-wide text-on-surface-variant">
              <li>
                <Link
                  href="/sobre"
                  className="hover:text-secondary-container transition-colors duration-300"
                >
                  Sobre Mim
                </Link>
              </li>
              <li>
                <Link
                  href="/formacao"
                  className="hover:text-secondary-container transition-colors duration-300"
                >
                  Formação
                </Link>
              </li>
              <li>
                <Link
                  href="/experiencia"
                  className="hover:text-secondary-container transition-colors duration-300"
                >
                  Experiência
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos"
                  className="hover:text-secondary-container transition-colors duration-300"
                >
                  Serviços
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contatos e Social */}
          <div className="flex flex-col items-center md:items-end">
            <h5 className="font-bold text-primary mb-5 uppercase text-xs tracking-widest font-label">
              Conectar
            </h5>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
              <a
                href="https://www.linkedin.com/in/wallison-branquinho-14786a83?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-on-surface-variant hover:text-secondary-container transition-colors text-sm font-medium"
              >
                LinkedIn
              </a>
              <a
                href="https://instagram.com/wallisonbranquinho"
                target="_blank"
                rel="noopener noreferrer"
                className="text-on-surface-variant hover:text-secondary-container transition-colors text-sm font-medium"
              >
                Instagram
              </a>
              <a
                href="mailto:wallisonbranquinho@hotmail.com"
                className="text-on-surface-variant hover:text-secondary-container transition-colors text-sm font-medium"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        {/* PARTE INFERIOR: Copyright, CNPJ e Voltar ao Topo */}
        <div className="pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center md:text-left">
            <span className="font-body text-[11px] sm:text-xs tracking-wide text-on-surface-variant/80 font-semibold">
              © {currentYear} Wallison Branquinho. Todos os direitos reservados.
            </span>
            <span className="hidden sm:inline text-outline-variant/50">•</span>
            <span className="font-body text-[11px] sm:text-xs tracking-widest text-on-surface-variant/60 font-bold uppercase">
              CNPJ: 51.156.469/0001-55
            </span>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden sm:flex gap-1.5">
              <div className="w-1.5 h-1.5 bg-secondary-container rounded-full opacity-60"></div>
              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-secondary-container rounded-full opacity-60"></div>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-2 text-secondary-container hover:text-secondary transition-colors cursor-pointer text-sm font-body font-bold group"
            >
              <span className="group-hover:underline underline-offset-4">
                Voltar ao topo
              </span>
              <span className="material-symbols-outlined text-base group-hover:-translate-y-1 transition-transform">
                arrow_upward
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
