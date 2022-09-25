import gql from "graphql-tag";

const GET_POKEMON = gql`query samplePokeAPIquery($id: Int!) {
    pokemon_v2_pokemon(where: { id: { _eq: $id }}) {
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

export default GET_POKEMON
