export interface PokedexBaseResult {
    height: number
    name: string
    id: number
    pokemon_v2_pokemontypes: PokemonTypes[]
}

export interface PokemonAbilities {
    pokemon_v2_ability: {
        name: string
        id: number
        pokemon_v2_abilityeffecttexts: {
            effect: string
        }
    }
}

export interface PokemonTypes {
    pokemon_v2_type: {
        name: string
        id: number
    }
}
