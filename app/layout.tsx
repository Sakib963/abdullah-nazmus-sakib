import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import Script from "next/script";
import "@/styles/globals.css";
import NavWrapper from "@/components/navbar/NavWrapper";
import SmoothScroll from "@/components/ui/SmoothScroll";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abdullah Sakib | Ethereal Journey",
  description:
    "Full-stack engineer crafting immersive narratives through code. Bridging the gap between human emotion and digital precision.",
  keywords: ["Abdullah Sakib", "Full Stack Developer", "Portfolio", "Next.js"],
  authors: [{ name: "Abdullah Sakib" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="bg-background text-on-surface selection:bg-primary/30 min-h-screen overflow-x-hidden soft-grid antialiased">
        {/* Runs before hydration — prevents flash of wrong theme */}
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var t=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(t===null&&d)){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark')}}catch(e){}})();`}
        </Script>
        <SmoothScroll>
          <NavWrapper />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
