import gql from "graphql-tag";

const POKEMONS = gql`query samplePokeAPIquery {
    pokemon_v2_pokemon(limit: 905, order_by: {id: asc}) {
        height
        id
        name
        pokemon_v2_pokemonabilities {
            pokemon_v2_ability {
                name
                id
                pokemon_v2_abilityeffecttexts {
                    effect
                }
            }
        }
        pokemon_v2_pokemontypes {
            pokemon_v2_type {
                name
                id
            }
        }
    }
}`

export default POKEMONS