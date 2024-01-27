import { api } from "@/utils/api";
import Image from "next/image";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PokemonRow from "./PokemonRow";

type Pokemon = {
  name: string;
  types: Array<string>;
  sprite: string;
};

type Props = {
  pokemonsList: Array<Pokemon>;
};

export default function PokemonTable(props: Props) {
  const { pokemonsList } = props;

  const renderTableHead = () => (
    <TableHead>
      <TableRow>
        <TableCell>Pokemon</TableCell>
        <TableCell align="right">Type</TableCell>
        <TableCell align="right">Sprite</TableCell>
      </TableRow>
    </TableHead>
  );

  return (
    <TableContainer component={Paper} sx={{ m: 5 }}>
      <Table aria-label="pokemon table">
        {renderTableHead()}
        <TableBody>
          {pokemonsList.map((pokemon) => PokemonRow({ pokemon }))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
