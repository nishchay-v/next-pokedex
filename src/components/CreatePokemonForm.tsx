import { useState } from "react";
import { api } from "@/utils/api";
import { Input, Button } from "@mui/material";

export default function PokemonForm() {
  const pokemon = api.pokemon.createPokemon.useMutation({
    onSuccess: () => {
      console.log("pokemon created");
      // router.refresh();
    },
  });
  const [name, setName] = useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    pokemon.mutate({ name, types: ["grass"] });
    setName("");
  };

  return (
    <form onSubmit={onSubmit}>
      <Input
        type="text"
        title="pokemon name"
        value={name}
        onChange={onChange}
      />
      <Button type="submit">Create Pokemon</Button>
    </form>
  );
}
