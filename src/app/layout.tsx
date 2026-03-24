import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import type { Metadata } from "next";
import { Manrope, Noto_Serif } from "next/font/google";
import "./globals.css";

// Configuração das fontes
const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Wallison Alves Branquinho",
  description:
    "Consultor em Educação, Inovação, Criatividade, Gestão e Desenvolvimento de Pessoas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`light ${notoSerif.variable} ${manrope.variable}`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface text-on-surface font-body selection:bg-secondary-container selection:text-on-secondary-container flex flex-col min-h-screen">
        {/* HEADER RESPONSIVO */}
        <Header />

        {/* CONTEÚDO PRINCIPAL */}
        <div className="grow pt-20 md:pt-24 flex flex-col">{children}</div>

        {/* FOOTER RESPONSIVO */}
        <Footer />
      </body>
    </html>
  );
}
