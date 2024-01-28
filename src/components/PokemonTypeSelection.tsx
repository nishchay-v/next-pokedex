import {
  Select,
  MenuItem,
  InputLabel,
  Box,
  SelectChangeEvent,
} from "@mui/material";

const POKEMON_TYPES = [
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

type PokemonTypeSelectionProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  selectedType: any;
  selectType: (type: string | Array<string> | undefined) => void;
  constainerSx?: React.CSSProperties;
  multiple?: boolean;
  showLabel?: boolean;
  selectSx?: React.CSSProperties;
};

export default function PokemonTypeSelection(props: PokemonTypeSelectionProps) {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    selectedType,
    selectType,
    constainerSx,
    multiple,
    showLabel,
    selectSx,
  } = props;

  const onChange = (event: SelectChangeEvent) => {
    selectType(event.target.value);
  };

  return (
    <Box sx={constainerSx}>
      {showLabel && (
        <InputLabel
          sx={{ marginBottom: 1, position: "relative" }}
          shrink={false}
          id="pokemon-type-select-label"
        >
          Type
        </InputLabel>
      )}
      <Select
        multiple={multiple}
        labelId={showLabel ? "pokemon-type-select-label" : undefined}
        id="pokemon-type-select"
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        value={selectedType}
        placeholder="Type"
        label="Type"
        onChange={onChange}
        fullWidth
        defaultValue="type"
        sx={showLabel ? selectSx : { ...selectSx, height: "100%" }}
      >
        {POKEMON_TYPES.map((type) => (
          <MenuItem key={type} value={type}>
            {type}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
}
