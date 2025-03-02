import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Sandip Dulal | CTO & Software Engineer Portfolio",
  description:
    "Explore my portfolio, a full time CTO, seasoned Project Manager, and Software Engineer with over 5 years of experience.",
  keywords:
    "Sandip Dulal, portfolio, web development, projects, frontend, developer",
  authors: [{ name: "Sandip Dulal", url: "https://sandipdulal.com.np" }],
  openGraph: {
    title: "Sandip Dulal | CTO & Software Engineer Portfolio",
    description:
      "Explore my portfolio, a full time CTO, seasoned Project Manager, and Software Engineer with over 5 years of experience.",

    url: "https://sandipdulal.com.np",
    siteName: "Sandip Dulal Portfolio",
    images: [
      {
        url: "https://sandipdulal.com.np/og_sandip_dulal.webp",
        height: 630,
        alt: "Sandip Dulal Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandip Dulal | CTO & Software Engineer Portfolio",
    description: "Discover my projects and skills in software development.",
    images: ["https://sandipdulal.com.np/og_sandip_dulal.webp"],
  },
  metadataBase: new URL("https://sandipdulal.com.np"),
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/og_sandip_dulal.webp" type="image/webp" />

        {/* Schema.org JSON-LD for better indexing */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sandip Dulal",
              url: "https://sandipdulal.com.np",
              sameAs: [
                "https://github.com/DulalSandip",
                "https://www.linkedin.com/in/sandip-dulal-er-51542a133/",
                "https://x.com/beingdulal",
              ],
              jobTitle: "Chief Technology Officer (CTO)",
              worksFor: {
                "@type": "Organization",
                name: "AITC International",
              },
            }),
          }}
        />
      </head>
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 text-white antialiased font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
