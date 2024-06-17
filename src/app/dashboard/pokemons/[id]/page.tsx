import { Pokemon } from "@/app/pokemons";

interface Props {
  params: { id: string };
}

const getPokemon = async (id: string): Promise<Pokemon> => {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: "force-cache", // TODO: remove this
  }).then((res) => res.json());

  return pokemon;
};

export default async function PokemonsPage({ params }: Props) {
  const pokemon = await getPokemon(params.id);
  return <div>{JSON.stringify(pokemon)}</div>;
}
