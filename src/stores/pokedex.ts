import { defineStore } from 'pinia'
import type { PokedexBaseResult, PokemonBaseResult } from "@/types";
import {type Ref, ref } from "vue";
import GET_POKEMONS from "@/graphql/getPokemons";
import GET_POKEMON from "@/graphql/getPokemon";
import type { VariablesParameter } from "@vue/apollo-composable/dist/useQuery";
import type { OperationVariables } from "@apollo/client";
import { apolloClient } from "@/apollo";

export const usePokedexStore = defineStore('pokedex', () => {

    const pokedex = ref<PokedexBaseResult[]>([]);
    const pokemon: Ref<PokemonBaseResult | undefined> = ref<PokemonBaseResult>();

    async function getPokedex(): Promise<void> {
        try {
            const { data } = await apolloClient.query({
                query: GET_POKEMONS,
            });
            pokedex.value = data.pokemon_v2_pokemon;
        } catch (e: any) {
            throw(e);
        }
    }

    async function getPokemon(id: VariablesParameter<OperationVariables>): Promise<void> {
        try {
            const { data } = await apolloClient.query({
                query: GET_POKEMON,
                variables: {
                    $id: id
                }
            });
            pokemon.value = data;
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
