import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

const DEFAULT_SPRITE =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/44.png";

export const pokemonRouter = createTRPCRouter({
  createPokemon: publicProcedure
    .input(z.object({ name: z.string().min(1), types: z.array(z.string()) }))
    .mutation(({ ctx, input }) => {
      return ctx.db.pokemon.create({
        data: {
          name: input.name,
          types: input.types,
          sprite: DEFAULT_SPRITE,
        },
      });
    }),

  getPokemonByName: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.db.pokemon.findFirst({
        where: { name: input.name },
      });
    }),

  getPokemonsByName: publicProcedure
    .input(z.object({ nameList: z.string().array() }))
    .query(({ ctx, input }) => {
      const results = ctx.db.pokemon.findMany({
        where: { name: { in: input.nameList } },
      });
      return results;
    }),

  getPokemonsByType: publicProcedure
    .input(z.object({ type: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.db.pokemon.findMany({
        where: { types: { has: input.type } },
      });
    }),

  getPokemonsByNamesAndType: publicProcedure
    .input(
      z.object({
        nameList: z.string().array(),
        type: z.string(),
      }),
    )
    .query(({ ctx, input }) => {
      return ctx.db.pokemon.findMany({
        where: {
          name: { in: input.nameList },
          types: { has: input.type },
        },
      });
    }),
});
