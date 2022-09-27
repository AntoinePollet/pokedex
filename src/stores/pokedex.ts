import { defineStore } from 'pinia'
import type { PokedexBaseResult, PokemonBaseResult } from "@/types";
import {type Ref, ref, watch } from "vue";
import GET_POKEMONS from "@/graphql/getPokemons";
import { provideApolloClient, useQuery } from "@vue/apollo-composable";
import { ApolloClient } from "@apollo/client/core";
import GET_POKEMON from "@/graphql/getPokemon";
import type { VariablesParameter } from "@vue/apollo-composable/dist/useQuery";
import type { OperationVariables } from "@apollo/client";

export const usePokedexStore = defineStore('pokedex', () => {

    // @ts-ignore
    provideApolloClient(ApolloClient);

    const pokedex = ref<PokedexBaseResult[]>([]);
    const pokemon: Ref<PokemonBaseResult | undefined> = ref<PokemonBaseResult>();

    function getPokedex(): void {
        try {
            const { loading, error, result } = useQuery(GET_POKEMONS);

            watch(result, () => {
                pokedex.value = result.value.pokemon_v2_pokemon;
            })
        } catch (e: any) {
            throw(e);
        }
    }

    function getPokemon(id: VariablesParameter<OperationVariables>): void {
        try {
            console.log(id)
            const { loading, error, result } = useQuery(GET_POKEMON, { id: id });
            console.log(result)
            watch(result, () => {
                pokemon.value = result.value;
            });
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
