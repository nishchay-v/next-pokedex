import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Image from "next/image";

type Pokemon = {
  name: string;
  types: Array<string>;
  sprite: string;
};

type PokemonRowProps = {
  pokemon: Pokemon;
};

export default function PokemonRow(props: PokemonRowProps) {
  const { pokemon } = props;
  return (
    <TableRow key={pokemon.name}>
      <TableCell component="th" scope="row">
        {pokemon.name}
      </TableCell>
      <TableCell align="right">{pokemon.types.join(", ")}</TableCell>
      <TableCell align="right">
        <Image
          src={pokemon.sprite}
          alt={pokemon.name}
          width={100}
          height={100}
        />
      </TableCell>
    </TableRow>
  );
}
