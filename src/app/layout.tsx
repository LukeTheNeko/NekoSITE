import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LukeTheNeko - Portifolio",
  description: "Meu Portifolio :3",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <meta name="keywords" content="portifolio, dev, developer, js, ts, react"></meta>
        <meta name="google-adsense-account" content="ca-pub-2763973119875552"></meta>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content="LukeTheNeko" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="LukeTheNeko" />
        <meta
          property="og:description"
          content="Olá, Eu sou o Lucas este é meu portifolio :3"
        />
        <meta
          property="og:image"
          content="https://luketheneko.dev/image-meta.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://luketheneko.dev/"
        />
        <meta property="twitter:title" content="LukeTheNeko" />
        <meta
          property="twitter:description"
          content="Olá, Eu sou o Lucas este é meu portifolio :3"
        />
        <meta
          property="twitter:image"
          content="https://luketheneko.dev/image-meta.png"
        />

        {children}
      </body>
    </html>
  );
} 