import { PokemonCard, SimplePokemon } from '..';

interface Props {
  ipokemons: SimplePokemon[];
}

export const PokemonsGrid = ({ ipokemons }: Props) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {ipokemons.map((pokemons) => (
        <PokemonCard key={pokemons.id} pokemon={pokemons} />
      ))}
    </div>
  );
};
