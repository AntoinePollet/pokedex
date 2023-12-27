import gql from 'graphql-tag';

const GET_FILTERED_POKEMONS = gql`
  query samplePokeAPIquery($types: [String!], $search: String) {
    pokemon_v2_pokemon(
      limit: 905
      order_by: { id: asc }
      where: {
        name: { _iregex: $search }
        _and: { pokemon_v2_pokemontypes: { pokemon_v2_type: { name: { _in: $types } } } }
        id: { _lte: 905 }
      }
    ) {
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
  }
`;

export default GET_FILTERED_POKEMONS;
