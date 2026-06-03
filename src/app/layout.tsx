import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "OpenClaw — Clarity-Led Studio for Founders Who Win",
  description: "We close the gap between who you are and how your content represents you online. A systems partner for high-ambition founders.",
  keywords: ["content clarity", "authority building", "founder content", "systems thinking", "clarity"],
  openGraph: {
    type: "website",
    url: "https://openclaw.agency",
    title: "OpenClaw — Clarity-Led Studio for Founders Who Win",
    description: "We close the gap between who you are and how your content represents you online.",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenClaw — Clarity-Led Studio for Founders Who Win",
    description: "We close the gap between who you are and how your content represents you online.",
    images: ["/twitter-image.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}