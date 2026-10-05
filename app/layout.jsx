import { Press_Start_2P, JetBrains_Mono, Space_Grotesk, Syne } from "next/font/google";
import "./globals.css";

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata = {
  title: "Rodah — Ingénieur IA & CyberSec | Portfolio",
  description: "Portfolio de Rodolphe C. EDAH — Cybersécurité · Réseau · IA & Big Data",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${pressStart.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} ${syne.variable}`}>
      <body className="bg-black text-white min-h-screen antialiased selection:bg-red-800 selection:text-white">
        <div className="scanlines"></div>
        {children}
      </body>
    </html>
  );
}
