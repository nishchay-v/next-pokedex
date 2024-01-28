const BASE_SPRITE_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/";

export const getRandomPokemonSpriteUrl = () => {
  const randomId = Math.floor(Math.random() * 999) + 1;
  return `${BASE_SPRITE_URL}${randomId}.png`;
};
