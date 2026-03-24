"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Header() {
  // Pega a rota atual da URL
  const pathname = usePathname();

  // Estado para controlar o Menu Mobile
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Lista de links para facilitar a manutenção
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Boas-Vindas", href: "/boas-vindas" },
    { name: "Sobre", href: "/sobre" },
    { name: "Formação", href: "/formacao" },
    { name: "Experiência", href: "/experiencia" },
    { name: "Habilidades", href: "/habilidades" },
    { name: "Serviços", href: "/servicos" },
    { name: "Contato", href: "/contato" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-primary/10 shadow-sm transition-all duration-300">
      <div className="flex justify-between items-center px-4 md:px-8 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-lg md:text-xl font-headline font-bold text-primary tracking-tighter truncate pr-4"
        >
          Wallison Branquinho
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors duration-300 ${
                  isActive
                    ? "text-primary font-bold border-b-2 border-secondary-container pb-1"
                    : "text-on-surface-variant font-medium hover:text-secondary-container"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Ações (Mobile e Desktop) */}
        <div className="flex items-center gap-3">
          <Link
            href="/contato"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-primary-container text-on-primary px-4 md:px-6 py-2 rounded-md font-semibold text-sm md:text-base tracking-tight active:opacity-80 active:scale-95 transition-all"
          >
            Consultoria
          </Link>

          {/* Menu Hamburger (Apenas Mobile) */}
          <button
            className="lg:hidden text-primary p-1 flex items-center justify-center active:scale-90 transition-transform"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Abrir menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Menu Mobile Expandido */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden absolute top-[100%] left-0 w-full bg-white border-b border-primary/10 shadow-xl flex flex-col py-4 px-6 gap-2 animate-in slide-in-from-top-4 fade-in duration-200">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-3 border-b border-outline-variant/10 transition-colors duration-300 ${
                  isActive
                    ? "text-primary font-bold border-l-4 border-l-secondary-container pl-3 -ml-4"
                    : "text-on-surface-variant font-medium hover:text-secondary-container"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
