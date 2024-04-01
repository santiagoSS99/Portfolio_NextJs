import React from 'react';

import { PokemonsGrid, PokemonsResponse, SimplePokemon } from '@/pokemons';

const getPokemons = async (limit = 200, offset = 0): Promise<SimplePokemon[]> => {
  const pockemonResponse: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((response) => response.json());

  const pokemons = pockemonResponse.results.map((pokemon) => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name,
  }));

  // throw new Error(`Error fetching data`);

  return pokemons;
};

export default async function PokemmonsPage() {
  const pokemons = await getPokemons(151);

  console.log(pokemons);

  return (
    <div className="flex flex-col">
      <PokemonsGrid ipokemons={pokemons} />
    </div>
  );
}
