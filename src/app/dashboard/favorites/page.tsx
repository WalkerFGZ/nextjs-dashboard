import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/app/pokemons";

import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Favoritos",
  description: "Favoritos",
};

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Pokemons <small className="text-blue-500">favoritos</small>
      </span>
      <PokemonGrid pokemons={[]} />
    </div>
  );
}
