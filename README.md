# Solution for the Pokedex Problem

## Live Deployment: [Vercel](https://next-pokedex-blue.vercel.app/)

# Pokedex Problem
> Taken from [Theo](https://t3-tools.notion.site/Pokedex-Problem-90f9dcfff10d4418a6fad44581b1ecff) and modified a bit

## Tech Stack
Make sure you're using:
- Typescript
- Next.js 
- Prisma
- tRPC (React Query)
- Material UI

The problem is divided into three parts, you're supposed to complete all three as three different routes.
## Part 1

1. Create a SQL DB with Prisma ORM that stores pokemon (you can fill this with mock data)
2. Create a tRPC router to access Pokemon from the DB and return in this format:

```jsx
const pokemon = getPokemon("Bulbasaur");
...
pokemon = {
  id: 1,
  name: "Bulbasaur",
  types: ["grass"],
  sprite: "https://pokemon.com/pictures/bulbasaur.png"
}
```
3. Create a form to take this input and create a reusable `<PokemonRow />` component that takes in `bulbasaur` as a property and renders a row with the name, id, type and sprite image

## Part 2

Create a second tRPC route to return data as the following when given an input of array:
```jsx
const pokemonArray = getPokemon(["Bulbasaur", "Charmander", ...]);
...
pokemonArray = [
{
  id: 1,
  name: "Bulbasaur",
  types: ["grass"],
  sprite: "https://pokemon.com/pictures/bulbasaur.png"
}, {
  id: 2,
  ...
}, ...]
```

Create a form to take this input and create a `<PokedexTable />` component that takes in the array and renders all the pokemon in that array.

## Part 3

Create a form to take this input in `<PokemonTypeSelection />` component with the following props

```tsx
type PokemonTypeSelectionProps = {
  selectedType: string | undefined;
  selectType: (type: string | undefined) => void;
}
```

...create a `<FilterablePokedexTable />` component that renders both the `<PokemonTypeSelection />` component and `<PokedexTable />` component. Make sure you only display Pokemon with the selected type!
Make sure you create the necessary tRPC routes to get this data.

## Bonus
- Code Quality
- DB Schema
- Pagination
- Caching
- Responsive UI

## Submission
- Deployed link to the project, you can use free hosts like Vercel & Planetscale
- GitHub repo with source code, please make it public
