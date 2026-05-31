import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/ui/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "db@goncalves - Portfólio",
  description: "Atuo no desenvolvimento de aplicações web, APIs e interfaces modernas, combinando aspectos técnicos e de produto para construir soluções eficientes e intuitivas. Tenho experiência em projetos de transformação digital, prototipação e desenvolvimento de sistemas voltados para diferentes necessidades de negócio.",
  icons: {
    icon: "/assets/images/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth" id="top">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
