import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "../lib/fonts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ComunidadeViva",
  description: "Descubra os melhores destinos de ecoturismo em Manaus. Passeios sustentáveis, hospedagem ecológica e experiências únicas na Floresta Amazônica.",
  keywords: "ecoturismo em Manaus, turismo sustentável, Amazônia, passeios ecológicos, Encontro das Águas, Presidente Figueiredo",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <Script src="/lasy-bridge.js" strategy="beforeInteractive" />
        {/* FAVICON AQUI */}
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
