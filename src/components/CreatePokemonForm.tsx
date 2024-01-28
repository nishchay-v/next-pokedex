import { useState } from "react";
import { api } from "@/utils/api";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Input, Button, Card, FormControl, Typography } from "@mui/material";
import PokemonTypeSelection from "./PokemonTypeSelection";

type MultipleValues = Array<string>;

export default function CreatePokemonForm() {
  const pokemon = api.pokemon.createPokemon.useMutation({
    onSuccess: () => {
      window.alert("Pokemon created!");
    },
  });
  const [name, setName] = useState("");
  const [types, setTypes] = useState<MultipleValues>([]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const onSubmit = () => {
    pokemon.mutate({ name, types });
    setName("");
    setTypes([]);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Card
      sx={{
        p: 4,
        marginBottom: 4,
        width: "100%",
        backgroundColor: "#fceb1e",
        border: "4px solid black",
      }}
      elevation={3}
    >
      <Typography
        variant="h5"
        sx={{ alignSelf: "flex-start", marginBottom: 2 }}
      >
        Create Pokemon
      </Typography>
      <FormControl
        fullWidth
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        <Input
          type="text"
          title="pokemon name"
          value={name}
          onChange={onChange}
          placeholder="Pokemon Name"
          disableUnderline
          sx={{
            width: isMobile ? "100%" : "25%",
            marginRight: 2,
            marginBottom: 2,
            backgroundColor: "white",
            border: "2px solid black",
            borderRadius: "4px",
            p: 2,
          }}
        />
        <PokemonTypeSelection
          multiple={true}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          selectType={(newValue: any) => setTypes(newValue as MultipleValues)}
          selectedType={types}
          showLabel={false}
          constainerSx={{
            width: isMobile ? "100%" : "50%",
            marginRight: 2,
            borderRadius: "4px",
            marginBottom: 2,
          }}
          selectSx={{
            backgroundColor: "white",
          }}
        />
        <Button
          type="submit"
          onClick={onSubmit}
          variant="outlined"
          sx={{
            width: isMobile ? "100%" : "25%",
            border: "2px solid black",
            color: "black",
            marginBottom: 2,
          }}
        >
          Create
        </Button>
      </FormControl>
    </Card>
  );
}
