import { defineStore } from 'pinia'
import type { PokemonBaseResult } from "@/types";
import { ref, watch } from "vue";
import GET_POKEMONS from "@/graphql/getPokemons";
import { useQuery } from "@vue/apollo-composable";
import GET_POKEMON from "@/graphql/getPokemon";
import type { VariablesParameter } from "@vue/apollo-composable/dist/useQuery";
import type { OperationVariables } from "@apollo/client";

export const usePokedexStore = defineStore('pokedex', () => {

    const pokedex = ref<PokemonBaseResult[]>([]);
    const pokemon = ref<PokemonBaseResult>();

    function getPokedex(): void {
        try {
            const { loading, error, result } = useQuery(GET_POKEMONS)

            watch(result, () => {
                pokedex.value = result.value.pokemon_v2_pokemon;
            })
        } catch (e: any) {
            throw(e);
        }
    }

    function getPokemon(id: VariablesParameter<OperationVariables>): void {
        try {
            const { loading, error, result } = useQuery(GET_POKEMON, { id: id })

            watch(result, () => {
                pokemon.value = result.value.pokemon_v2_pokemon[0];
            })
        } catch (e: any) {
            throw(e);
        }
    }

    return {
        getPokedex,
        getPokemon,
        pokedex,
        pokemon
    }
})
