import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { SimplePokemon } from "@/app/pokemons";

// {
//     '1': {id: 1, name: 'Bulbasaur'},
// }

interface PokemonsState {
  favorites: { [key: string]: SimplePokemon };
}

// const getInitialState = () => {
//   // if (typeof localStorage === "undefined") return
//   const favorites = JSON.parse(localStorage.getItem("favorite-pokemons") ?? "{}");
//   return favorites
// }

const initialState: PokemonsState = {
  favorites: {},
  // ...getInitialState(),
  // "1": { id: "1", name: "Bulbasaur" },
  // "3": { id: "3", name: "Venusaur" },
  // "4": { id: "4", name: "Charmander" },
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setFavoritePokemons(
      state,
      action: PayloadAction<{ [key: string]: SimplePokemon }>
    ) {
      state.favorites = action.payload;
    },
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;
      if (!!state.favorites[id]) {
        delete state.favorites[id];
      } else {
        state.favorites[id] = pokemon;
      }

      localStorage.setItem(
        "favorite-pokemons",
        JSON.stringify(state.favorites)
      );
    },
  },
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
