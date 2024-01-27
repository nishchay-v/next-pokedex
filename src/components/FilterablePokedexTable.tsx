import { useState, useEffect } from "react";

import { api } from "@/utils/api";

import PokemonTable from "./PokemonTable";
import PokemonNamesInput from "./PokemonNamesInput";
import PokemonTypeSelection from "./PokemonTypeSelection";

type MultipleValues = Array<string>;

export default function PokemonSeachTable() {
  const defaultPokemonNames: MultipleValues = [];
  const [pokemonNames, setPokemonNames] = useState(defaultPokemonNames);
  const [pokemonType, setPokemonType] = useState("");

  const filteredPokemons = api.pokemon.getPokemonsByNamesAndType.useQuery({
    nameList: pokemonNames,
    type: pokemonType,
  });

  //TODO: conditinally use routes to fetch data

  return (
    <div className="flex h-full w-full flex-col items-center p-4">
      <PokemonNamesInput onChange={setPokemonNames} />
      <PokemonTypeSelection
        selectedType={pokemonType}
        selectType={(newType: string | undefined) =>
          setPokemonType(newType ?? "")
        }
      />
      <PokemonTable pokemonsList={filteredPokemons?.data || []} />
    </div>
  );
}
