import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { api } from "@/utils/api";
import PokemonForm from "@/components/CreatePokemonForm";
import PokemonTable from "@/components/PokemonTable";
import PokemonNamesInput from "@/components/PokemonNamesInput";
import PokemonSeachTable from "@/components/FilterablePokedexTable";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>PokeDex</title>
        <meta name="description" content="PokeDex demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="to-gray flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-white">
        <div className="flex h-full w-full flex-col items-center p-4">
          <PokemonForm />
          {/* <PokemonTable pokemonName="bulbasaur" /> */}
          <PokemonSeachTable />
        </div>
      </main>
    </>
  );
}
