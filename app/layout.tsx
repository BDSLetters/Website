import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Open_Sans, Inter } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"
import { WhatsAppContact } from "@/components/whatsapp-contact"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://bdsletters.nl"),
  title: {
    default: "BDS Letters - Producent van Topkwaliteit Doosletters en Lichtreclame",
    template: "%s | BDS Letters",
  },
  description:
    "BDS Letters is specialist in hoogwaardige doosletters, freesletters, LED neon signs en lichtreclame. Producent van topkwaliteit lichtreclame voor bedrijven in Nederland. Vraag direct een offerte aan!",
  keywords: [
    "BDS Letters",
    "bdsletters",
    "doosletters",
    "freesletters",
    "lichtreclame",
    "LED neon signs",
    "gevelletters",
    "lichtbakken",
    "LED verlichting",
    "bedrijfsreclame",
    "signage",
    "letters met verlichting",
    "neon letters",
    "acrylaat letters",
    "aluminium letters",
    "reclame letters",
    "gevelbelettering",
    "lichtreclame specialist",
    "Nederland",
  ],
  authors: [{ name: "BDS Letters" }],
  creator: "BDS Letters",
  publisher: "BDS Letters",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://bdsletters.nl",
    siteName: "BDS Letters",
    title: "BDS Letters - Producent van Topkwaliteit Doosletters en Lichtreclame",
    description:
      "Specialist in hoogwaardige doosletters, freesletters, LED neon signs en lichtreclame. Producent van topkwaliteit lichtreclame voor bedrijven in Nederland.",
    images: [
      {
        url: "/logo-bds-letters.png",
        width: 1200,
        height: 630,
        alt: "BDS Letters - Doosletters en Lichtreclame",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BDS Letters - Producent van Topkwaliteit Doosletters en Lichtreclame",
    description: "Specialist in hoogwaardige doosletters, freesletters, LED neon signs en lichtreclame.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "", 
  },
  alternates: {
    canonical: "https://bdsletters.nl",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "BDS Letters",
              description: "Producent van topkwaliteit doosletters en lichtreclame",
              url: "https://bdsletters.nl",
              telephone: "+31625505222",
              priceRange: "€€",
              address: {
                "@type": "PostalAddress",
                addressCountry: "NL",
              },
              geo: {
                "@type": "GeoCoordinates",
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:00",
                closes: "17:00",
              },
              sameAs: ["https://www.facebook.com/bdsletters", "https://www.instagram.com/bdsletters"],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Lichtreclame Producten",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Doosletters",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "LED Neon Signs",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Lichtbakken",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans ${montserrat.variable} ${openSans.variable} ${inter.variable}`}>
     
        <Suspense fallback={null}>{children}</Suspense>
     
        <WhatsAppContact />
      </body>
    </html>
  )
}
