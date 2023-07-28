import CommunityCard from "@/components/CommunityCard/CommunityCard";

export default function Home() {
  return (
    <div>
      <CommunityCard
        icon= "/focus.svg"
        title="Foco"
        paragraph="Permanecemos constantemente empenhados em ampliar nossos horizontes e perseguir metas ambiciosas para alcançar novos patamares de sucesso."
      />
    </div>
  )
}

// "use client"

// import {} from "@/components"

// export function Home1() {
//   return (
//     <main className="flex h-screen flex-col items-center justify-between p-24 bg-surface-primary">
//       <div
//         className="flex flex-col items-center justify-center gap-36 w-3/4 h-2/3
//       bg-surface-secondary
//       rounded-xl ring-1 ring-surface-metal-dark"
//       ></div>
//     </main>
//   )
// }