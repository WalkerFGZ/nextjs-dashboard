"use client";

import { useEffect, useState } from "react";

import { IoHeartOutline } from "react-icons/io5";
import { PokemonGrid } from "./PokemonGrid";
import { useAppSelector } from "@/store";

export const FavoritePokemons = () => {
  const favoritePokemons = useAppSelector((state) => state.pokemons.favorites);
  const pokemonsFormat = Object.values(favoritePokemons);
  // const [pokemons, setPokemons] = useState(pokemonsFormat);

  // useEffect(() => {
  //   setPokemons(favoritePokemons);
  // }, [favoritePokemons]);
  return (
    <>
      {pokemonsFormat.length === 0 ? (
        <NoFavorites />
      ) : (
        <PokemonGrid pokemons={pokemonsFormat} />
      )}
    </>
  );
};

export const NoFavorites = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <IoHeartOutline className="text-9xl text-red-500" />
      <span className="text-5xl my-2">No hay pokemons favoritos</span>
    </div>
  );
};
