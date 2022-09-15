import { defineStore } from 'pinia'
import pokemon from "@/services/Pokemon";
import type { Pokemon } from "@/types";
import { ref } from "vue";

export const usePokedexStore = defineStore('pokedex', () => {

    const pokedex = ref<Pokemon[]>([]);

    async function getPokedex(): Promise<void> {
        try {
            const res: Pokemon[] = await pokemon.getPokemons();
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
