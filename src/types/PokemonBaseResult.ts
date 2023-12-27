import type { PokemonTypes } from '@/types/PokedexBaseResult';

export interface PokemonBaseResult {
  pokemon_v2_pokemonstat: PokemonStats[];
  pokemon_v2_evolutionchain: PokemonEvolutions[];
}

export interface PokemonAbilities {
  pokemon_v2_ability: {
    name: string;
    id: number;
    pokemon_v2_abilityeffecttexts: {
      effect: string;
    };
  };
}

export interface PokemonStats {
  pokemon_v2_pokemon: {
    height: number;
    name: string;
    id: number;
    pokemon_v2_pokemonabilities: PokemonAbilities[];
    pokemon_v2_pokemontypes: PokemonTypes[];
    pokemon_v2_pokemonmoves: PokemonMoves[];
  };
}

export interface PokemonMoves {
  level: number;
  pokemon_v2_move: PokemonMove;
}

export interface PokemonMove {
  name: string;
  accuracy: number;
  pokemon_v2_moveeffect: PokemonMoveEffect;
}

export interface PokemonMoveEffect {
  pokemon_v2_moveeffecteffecttexts: {
    effect: string;
  };
}

export interface PokemonEvolutions {
  pokemon_v2_pokemonspecies: PokemonSpecies[];
}

export interface PokemonSpecies {
  name: string;
  order: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  capture_rate: number;
  gender_rate: number;
  has_gender_differences: number;
  pokemon_v2_pokemons: {
    pokemon_v2_pokemontypes: PokemonTypes[];
    name: string;
  };
}
