export interface PokedexBaseResult {
  height: number;
  name: string;
  id: number;
  pokemon_v2_pokemontypes: PokemonTypes[];
}

export interface PokemonTypes {
  pokemon_v2_type: {
    name: string;
    id: number;
  };
}
