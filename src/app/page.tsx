"use client";

import { Button } from "@/components";
import { Heading } from "@/components/heading/Heading";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between p-24 bg-surface-primary">
      <div
        className="flex flex-col items-center justify-center gap-36 w-full h-full
      bg-surface-secondary
      rounded-xl ring-1 ring-metal-dark"
      >
        <div className="flex gap-4">
          <Button size="sm" variant="callers" onClick={() => alert("Do Botão")}>
            Botão Caller
          </Button>
          <Button size="md" variant="callers">
            Botão Caller
          </Button>
          <Button size="lg" variant="callers">
            Botão Caller
          </Button>
        </div>
        <div className="flex gap-4">
          <Button size="sm" variant="info">
            Botão Info
          </Button>
          <Button size="md" variant="info">
            Botão Info
          </Button>
          <Button size="lg" variant="info">
            Botão Info
          </Button>
        </div>
      </div>
      <div
        className="flex flex-col items-center justify-center gap-36 w-full h-screen
      bg-surface-secondary
      rounded-xl ring-1 ring-metal-dark"
      >
        <Heading level="h1" colors="gradient">
          The quick brown fox jumps over the lazy dog.
        </Heading>
        <Heading level="h3" colors="surfacePrimaryDark">
          The quick brown fox jumps over the lazy dog.
        </Heading>
        <Heading level="h6" colors="onSecondary">
          The quick brown fox jumps over the lazy dog.
        </Heading>
        <Heading level="h5" colors="surfacePrimaryDark">
          hello
        </Heading>
      </div>
    </main>
  );
}
