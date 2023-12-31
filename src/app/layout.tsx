import "./globals.css"

import type { Metadata } from "next"
import { DM_Sans, Space_Grotesk } from "next/font/google"

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: "700",
  style: "normal",
})

const dm_sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  title: "Forja Dev",
  description: "Forjando o Futuro dos Desenvolvedores!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-surface-primary">
      <body className={`${space_grotesk.variable} ${dm_sans.variable}`}>
        {children}
      </body>
    </html>
  )
}
