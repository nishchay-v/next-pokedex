import React, { SyntheticEvent, useState } from "react";

import { Autocomplete, TextField, InputLabel } from "@mui/material";

type PokemonNamesInputProps = {
  onChange: (names: Array<string>) => void;
};

type MultipleValues = Array<string>;

export default function PokemonNamesInput(props: PokemonNamesInputProps) {
  const { onChange } = props;
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
    <div>
      <InputLabel id="pokemon-type-select-label">Type</InputLabel>
      <Autocomplete
        multiple
        id="tags-filled"
        options={[]}
        freeSolo
        limitTags={5}
        value={userInput}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} placeholder="Name" />}
      />
    </div>
  );
}
