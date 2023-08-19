import { CommunityCard } from "@/components";

export default function Home() {
  return (
    <div className="bg-surface-primary-dark h-screen flex justify-center items-center gap-14">
      <CommunityCard
        icon="/group.svg"
        title="Ambiente"
        paragraph="Espaço dedicado à comunidade de desenvolvedores, onde pessoas de diferentes níveis podem se conectar e encontrar apoio mútuo."
      />

      {/* <CommunityCard
        icon="/focus.svg"
        title="Foco"
        paragraph="Espaço dedicado à comunidade de desenvolvedores, onde pessoas de diferentes níveis podem se conectar e encontrar apoio mútuo."
      />

      <CommunityCard
        icon="/success.svg"
        title="Sucesso"
        paragraph="Espaço dedicado à comunidade de desenvolvedores, onde pessoas de diferentes níveis podem se conectar e encontrar apoio mútuo."
      /> */}
    </div>
  );
}
