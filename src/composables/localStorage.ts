import { useStorage } from "@vueuse/core";
import { onMounted } from "vue";
import type { PokedexBaseResult } from "@/types";

export default function teamLocalStorage() {
    const pokemonTeam: any = useStorage('team', {});

    const addToStorage = ((pokemon: PokedexBaseResult) => {
        pokemonTeam.value[pokemon.name] = pokemon;
        console.log(pokemonTeam.value)
    });

    const removeFromStorage = ((pokemonName: string) => {
        pokemonTeam.value.delete
        const pokemonIndex = pokemonTeam.value.findIndex((pokemon: PokedexBaseResult) => pokemon.id === pokemonId);
        pokemonTeam.value.splice(pokemonIndex, 1);
    });

    onMounted(() => {

    });

    return { pokemonTeam, addToStorage, removeFromStorage }
}
