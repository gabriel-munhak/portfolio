import "./globals.css";
import { Inter } from 'next/font/google'
import type { Metadata } from "next";

const inter = Inter({
  subsets: ['latin'],
  weight: ['400'],
})

export const metadata: Metadata = {
  title: "Portifólio - Gabriel Munhak",
  icons: {
    icon: "/favicon.png"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
