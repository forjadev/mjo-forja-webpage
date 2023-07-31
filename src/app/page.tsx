"use client"
import { Button } from "@/components"

import { DM_Sans, Space_Grotesk } from 'next/font/google'
 
const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: "700",
  style: "normal",
})
 
const dm_sans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
})

export default function Home() {
  return (
      <main 
      className={
        `${space_grotesk.variable} ${dm_sans.variable}
        flex min-h-screen text-metal flex-col items-center justify-between p-24`
      }>
      </main>
      )
}
