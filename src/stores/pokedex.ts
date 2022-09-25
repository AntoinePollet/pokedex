import { defineStore } from 'pinia'
import type { PokemonBaseResult } from "@/types";
import { ref, watch } from "vue";
import POKEMONS from "@/graphql/pokemons";
import { useQuery } from "@vue/apollo-composable";

export const usePokedexStore = defineStore('pokedex', () => {

    const pokedex = ref<PokemonBaseResult[]>([]);

    function getPokedex(): void {
        try {
            const { loading, error, result } = useQuery(POKEMONS)

            watch(result, () => {
                pokedex.value = result.value.pokemon_v2_pokemon;
            })
        } catch (e: any) {
            throw(e);
        }
    }



    return {
        getPokedex,
        pokedex
    }
})
