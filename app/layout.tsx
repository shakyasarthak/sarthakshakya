import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sarthak Shakya - Data Science Portfolio",
  description: "Portfolio website of Sarthak Shakya, an aspiring Data Science student specializing in data analysis, machine learning, and visualization. Currently seeking internship opportunities.",
  keywords: [
    "data science",
    "portfolio",
    "analytics",
    "visualization",
    "Python",
    "R",
    "SQL",
    "machine learning",
    "Sarthak Shakya",
    "data analysis",
    "internship"
  ],
  authors: [{ name: "Sarthak Shakya" }],
  creator: "Sarthak Shakya",
  publisher: "Sarthak Shakya",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    siteName: "Sarthak Shakya Portfolio",
    title: "Sarthak Shakya - Data Science Portfolio",
    description: "Data Science student passionate about transforming data into insights. Explore my projects and skills.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sarthak Shakya - Data Science Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarthak Shakya - Data Science Portfolio",
    description: "Aspiring Data Science student passionate about transforming data into insights",
    creator: "@yourtwitterhandle",
    images: ["/twitter-image.jpg"]
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" }
    ],
    apple: [
      { url: "/apple-icon.png" }
    ]
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://your-domain.com"
  }
}

import { Toaster } from 'sonner'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  )
}