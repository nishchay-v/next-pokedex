import React, { SyntheticEvent, useState } from "react";

import { Autocomplete, TextField, InputLabel, Box } from "@mui/material";

type PokemonNamesInputProps = {
  onChange: (names: Array<string>) => void;
  containerSx?: React.CSSProperties;
};

type MultipleValues = Array<string>;

export default function PokemonNamesInput(props: PokemonNamesInputProps) {
  const { onChange, containerSx } = props;
  const defaultUserInput: MultipleValues = [];
  const [userInput, setUserInput] = useState(defaultUserInput);

  const handleChange = (
    event: SyntheticEvent<Element, Event>,
    value: MultipleValues,
  ) => {
    setUserInput(value);
    onChange(value);
  };

  return (
    <Box sx={containerSx}>
      <InputLabel id="pokemon-type-select-label" sx={{ marginBottom: 1 }}>
        Pokemon Name
      </InputLabel>
      <Autocomplete
        multiple
        id="tags-filled"
        aria-labelledby="pokemon-type-select-label"
        options={[]}
        freeSolo
        limitTags={5}
        value={userInput}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} placeholder="Name" />}
        fullWidth
      />
    </Box>
  );
}
