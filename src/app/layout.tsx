import type { Metadata } from "next";
import { Great_Vibes, Playfair_Display } from "next/font/google";
import "./globals.css";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://15lolitadulcemaria.vercel.app/"),
  title: "Mis 15 Años - Lolita Dulce Maria",
  description: "Acompáñanos a celebrar los quince años de Lolita Dulce Maria. Un día lleno de bendición y alegría.",
  openGraph: {
    title: "Mis 15 Años - Lolita Dulce Maria",
    description: "Te invito a celebrar conmigo este día tan especial.",
    images: ["/og-image.png"],
    url: "https://15lolitadulcemaria.vercel.app/",
    type: "website",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${greatVibes.variable} ${playfairDisplay.variable}`}>
        {children}
      </body>
    </html>
  );
}
