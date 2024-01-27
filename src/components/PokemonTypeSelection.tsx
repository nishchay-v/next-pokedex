import { useState } from "react";

import {
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";

type PokemonTypeSelectionProps = {
  selectedType: string | undefined;
  selectType: (type: string | undefined) => void;
};

const TYPES = [
  "normal",
  "fire",
  "water",
  "electric",
  "grass",
  "ice",
  "fighting",
  "poison",
  "ground",
  "flying",
  "psychic",
  "bug",
  "rock",
  "ghost",
  "dark",
  "dragon",
  "steel",
  "fairy",
] as const;

export default function PokemonTypeSelection(props: PokemonTypeSelectionProps) {
  const { selectedType, selectType } = props;

  const onChange = (event: SelectChangeEvent) => {
    selectType(event.target.value);
  };

  return (
    <FormControl sx={{ m: 2, width: 100 }}>
      <InputLabel id="pokemon-type-select-label">Type</InputLabel>
      <Select
        labelId="pokemon-type-select-label"
        id="pokemon-type-select"
        value={selectedType}
        label="Pokemon Type"
        onChange={onChange}
      >
        {TYPES.map((type) => (
          <MenuItem key={type} value={type}>
            {type}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
