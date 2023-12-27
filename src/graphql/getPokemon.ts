import gql from 'graphql-tag';

const GET_POKEMON = gql`
  query samplePokeAPIquery($id: Int!) {
    pokemon_v2_pokemonstat(where: { pokemon_v2_pokemon: { id: { _eq: $id } } }, distinct_on: pokemon_id) {
      pokemon_v2_pokemon {
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
        pokemon_v2_pokemonmoves(where: { pokemon_v2_move: { accuracy: { _lt: 80 } } }, distinct_on: move_id) {
          level
          pokemon_v2_move {
            name
            accuracy
            pokemon_v2_moveeffect {
              pokemon_v2_moveeffecteffecttexts {
                effect
              }
            }
          }
        }
      }
    }
    pokemon_v2_evolutionchain(where: { pokemon_v2_pokemonspecies: { id: { _in: [$id] } } }) {
      pokemon_v2_pokemonspecies {
        name
        order
        id
        is_baby
        is_legendary
        is_mythical
        capture_rate
        gender_rate
        has_gender_differences
        pokemon_v2_pokemons {
          pokemon_v2_pokemontypes(distinct_on: type_id) {
            pokemon_v2_type {
              name
              id
            }
          }
          name
        }
      }
    }
  }
`;

export default GET_POKEMON;
