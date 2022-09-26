import gql from "graphql-tag";

const GET_POKEMONS = gql`query samplePokeAPIquery {
    pokemon_v2_pokemon(limit: 905, order_by: {id: asc}) {
        height
        id
        name
        pokemon_v2_pokemontypes {
            pokemon_v2_type {
                name
                id
            }
        }
    }
}`

export default GET_POKEMONS
