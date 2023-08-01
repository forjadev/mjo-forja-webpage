"use client"
import { Button } from "@/components"

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24 bg-[#dce3f1] dark:bg-[#191B21]'>
      <Button size='sm'>Botão 1</Button>
      <Button size='md' variant='info'>
        Botão 2
      </Button>
      <Button size='lg'>Botão 3</Button>
    </main>
  )
}
