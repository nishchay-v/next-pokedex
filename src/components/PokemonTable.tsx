import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import PokemonRow from "./PokemonRow";

type Pokemon = {
  name: string;
  types: Array<string>;
  sprite: string;
};

type PokemonTableProps = {
  pokemonsList: Array<Pokemon>;
};

export default function PokemonTable(props: PokemonTableProps) {
  const { pokemonsList } = props;

  const renderTableHead = () => (
    <TableHead sx={{ backgroundColor: "whitesmoke" }}>
      <TableRow>
        <TableCell>Pokemon</TableCell>
        <TableCell align="right">Type</TableCell>
        <TableCell align="right">Sprite</TableCell>
      </TableRow>
    </TableHead>
  );

  return (
    <TableContainer sx={{ m: 5 }}>
      <Table aria-label="pokemon table">
        {renderTableHead()}
        <TableBody>
          {pokemonsList.map((pokemon) => PokemonRow({ pokemon }))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
