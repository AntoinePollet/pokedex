import type { PokemonTypes, PokemonAbilities } from "@/types/PokedexBaseResult";

export interface PokemonBaseResult {
    height: number
    name: string
    id: number
    pokemon_v2_pokemonabilities: PokemonAbilities[]
    pokemon_v2_pokemontypes: PokemonTypes[]
}
