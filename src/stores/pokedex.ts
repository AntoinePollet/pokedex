import { defineStore } from 'pinia'
import pokemon from "@/services/Pokemon";
import type { PokemonBaseResult } from "@/types";
import { ref } from "vue";
import POKEMONS from "@/graphql/pokemons";
import { useQuery } from "@vue/apollo-composable";

export const usePokedexStore = defineStore('pokedex', () => {

    const pokedex = ref<PokemonBaseResult[]>([]);

    function getPokedex(): void {
        try {
            const { result, loading, error } = useQuery(POKEMONS)
            console.log(result)
        // pokedex.value = res;
        } catch (e: any) {
            throw(e);
        }
    }

    return {
        getPokedex,
        pokedex
    }
})
