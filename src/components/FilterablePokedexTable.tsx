import { useState } from "react";

import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";
import { api } from "@/utils/api";

import PokemonTable from "./PokemonTable";
import PokemonNamesInput from "./PokemonNamesInput";
import PokemonTypeSelection from "./PokemonTypeSelection";

type MultipleValues = Array<string>;

export default function PokemonSeachTable() {
  const defaultPokemonNames: MultipleValues = [];
  const [pokemonNames, setPokemonNames] = useState(defaultPokemonNames);
  const [pokemonType, setPokemonType] = useState("");

  const pokemonsByNameAndTypeResult =
    api.pokemon.getPokemonsByNamesAndType.useQuery(
      {
        nameList: pokemonNames,
        type: pokemonType,
      },
      { enabled: !!(pokemonNames.length && pokemonType.length) },
    );

  const pokemonsByNameResult = api.pokemon.getPokemonsByName.useQuery(
    { nameList: pokemonNames },
    { enabled: !!(pokemonNames.length && !pokemonType.length) },
  );

  const pokemonsByTypeResult = api.pokemon.getPokemonsByType.useQuery(
    { type: pokemonType },
    { enabled: !!(!pokemonNames.length && pokemonType.length) },
  );

  const latestPokemonsResult = api.pokemon.getLatestPokemons.useQuery(
    undefined,
    {
      enabled: !pokemonNames.length && !pokemonType.length,
    },
  );

  const pokemonsList =
    pokemonsByNameAndTypeResult.data ??
    pokemonsByNameResult.data ??
    pokemonsByTypeResult.data ??
    latestPokemonsResult.data ??
    [];

  return (
    <Paper
      sx={{
        display: "flex",
        height: "100%",
        flexDirection: "column",
        alignItems: "center",
        p: 4,
        width: "100%",
        border: "4px solid black",
      }}
      elevation={3}
    >
      <Typography
        variant="h5"
        sx={{ alignSelf: "flex-start", marginBottom: 2 }}
      >
        PokeDex Table
      </Typography>
      <Box
        sx={{
          display: "flex",
          width: "100%",
        }}
      >
        <PokemonNamesInput
          onChange={setPokemonNames}
          containerSx={{ width: "75%", marginRight: 2 }}
        />
        <PokemonTypeSelection
          selectedType={pokemonType}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          selectType={(newType: any) =>
            setPokemonType((newType ?? "") as string)
          }
          constainerSx={{ width: "25%" }}
          showLabel={true}
        />
      </Box>
      <PokemonTable pokemonsList={pokemonsList} />
    </Paper>
  );
}
