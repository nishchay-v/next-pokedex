import Head from "next/head";

import CreatePokemonForm from "@/components/CreatePokemonForm";
import PokemonSeachTable from "@/components/FilterablePokedexTable";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>PokeDex</title>
        <meta name="description" content="PokeDex demo" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <main
        className="flex min-h-screen flex-col items-center"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(252, 235, 30, 0.5))",
        }}
      >
        {" "}
        <Image src="/icon.png" width={150} height={150} alt="pokedex logog" />
        <div className="flex h-full w-full flex-col items-center p-4 sm:w-3/4">
          <CreatePokemonForm />
          <PokemonSeachTable />
        </div>
      </main>
    </>
  );
}
