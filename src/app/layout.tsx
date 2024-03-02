import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { MainContainer } from "./layout.styles";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CDT Tech",
  description: "Capacitação Digital para a Terceira Idade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <MainContainer>
          {children}
        </MainContainer>
      </body>
    </html>
  );
}