"use client";

import { Provider } from "react-redux";
import { setFavoritePokemons } from "./pokemons/pokemons";
import { store } from ".";
import { useEffect } from "react";

interface Props {
  children: React.ReactNode;
}
export const Providers = ({ children }: Props) => {
  useEffect(() => {
    const favorites = JSON.parse(
      localStorage.getItem("favorite-pokemons") ?? "{}"
    );
    store.dispatch(setFavoritePokemons(favorites));
  }, []);

  return <Provider store={store}>{children}</Provider>;
};
