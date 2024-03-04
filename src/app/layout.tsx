import { Inter } from "next/font/google";

import { MainContainer } from "./layout.styles";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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