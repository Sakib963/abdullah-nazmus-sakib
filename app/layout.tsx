import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import Script from "next/script";
import "@/styles/globals.css";
import NavWrapper from "@/components/navbar/NavWrapper";
import SmoothScroll from "@/components/ui/SmoothScroll";
import BackToTop from "@/components/ui/BackToTop";

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

const SITE_URL = "https://abdullahnazmussakib.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Abdullah Nazmus Sakib | Full Stack Developer",
    template: "%s | Abdullah Nazmus Sakib",
  },
  description:
    "Full-stack engineer with 5+ years building scalable web systems, clean APIs, and interfaces people enjoy using. Specialising in Angular, Next.js, Node.js, and PostgreSQL.",
  keywords: [
    "Abdullah Nazmus Sakib",
    "Full Stack Developer",
    "Software Engineer",
    "Angular Developer",
    "Next.js Developer",
    "Node.js",
    "PostgreSQL",
    "Bangladesh",
    "Portfolio",
    "Web Development",
  ],
  authors: [{ name: "Abdullah Nazmus Sakib", url: SITE_URL }],
  creator: "Abdullah Nazmus Sakib",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Abdullah Nazmus Sakib",
    title: "Abdullah Nazmus Sakib | Full Stack Developer",
    description:
      "Full-stack engineer with 5+ years building scalable web systems, clean APIs, and interfaces people enjoy using.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abdullah Nazmus Sakib — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdullah Nazmus Sakib | Full Stack Developer",
    description:
      "Full-stack engineer building scalable web systems, clean APIs, and interfaces people enjoy using.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  alternates: {
    canonical: SITE_URL,
  },
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
        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Abdullah Nazmus Sakib",
              url: SITE_URL,
              jobTitle: "Full Stack Developer",
              worksFor: { "@type": "Organization", name: "Celloscope Limited" },
              knowsAbout: ["Angular", "Next.js", "Node.js", "PostgreSQL", "TypeScript", "React", "Hapi.js", "Express.js"],
              sameAs: [
                "https://github.com/sakib963",
                "https://linkedin.com/in/abdullahnazmussakib",
              ],
            }),
          }}
        />
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var t=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(t===null&&d)){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark')}}catch(e){}})();`}
        </Script>
        <SmoothScroll>
          <NavWrapper />
          {children}
          <BackToTop />
        </SmoothScroll>
      </body>
    </html>
  );
}
