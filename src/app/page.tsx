"use client"
import { Button } from "@/components"

export default function Home() {
  return (
    <main className='flex h-screen flex-col items-center justify-between p-24 bg-surface-primary'>
      <div
        className='flex flex-col items-center justify-center gap-36 w-3/4 h-2/3
      bg-surface-secondary
      rounded-xl ring-1 ring-metal-dark'
      >
        <div className='flex gap-4'>
          <Button size='sm' variant='callers'>
            Botão Caller
          </Button>
          <Button size='md' variant='callers'>
            Botão Caller
          </Button>
          <Button size='lg' variant='callers'>
            Botão Caller
          </Button>
        </div>
        <div className='flex gap-4'>
          <Button size='sm' variant='info'>
            Botão Info
          </Button>
          <Button size='md' variant='info'>
            Botão Info
          </Button>
          <Button size='lg' variant='info'>
            Botão Info
          </Button>
        </div>
      </div>
    </main>
  )
}
