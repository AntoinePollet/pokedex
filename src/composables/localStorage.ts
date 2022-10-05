import { useStorage } from "@vueuse/core";
import type { PokedexBaseResult } from "@/types";

export default function teamLocalStorage() {
    const pokemonTeam: any = useStorage('team', {});

    const addToStorage = ((pokemon: PokedexBaseResult) => {
        pokemonTeam.value[pokemon.name] = pokemon;
    });

    const removeFromStorage = ((pokemonName: string) => {
        if (pokemonTeam.value[pokemonName]) {
            delete pokemonTeam.value[pokemonName];
        }
    });

    return { pokemonTeam, addToStorage, removeFromStorage }
}
