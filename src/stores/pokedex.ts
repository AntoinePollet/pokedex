import { defineStore } from 'pinia'
import pokemon from "@/services/Pokemon";
import type { PokemonBaseResult } from "@/types";
import { ref } from "vue";

export const usePokedexStore = defineStore('pokedex', () => {

    const pokedex = ref<PokemonBaseResult[]>([]);

    async function getPokedex(): Promise<void> {
        try {
            const res: PokemonBaseResult[] = await pokemon.getPokemons();
            pokedex.value = res;
        } catch (e: any) {
            throw(e);
        }
    }

    return {
        getPokedex,
        pokedex
    }
})
