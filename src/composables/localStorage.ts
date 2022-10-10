import { useStorage } from "@vueuse/core";
import type { PokedexBaseResult } from "@/types";

export default function localStorage() {
    const pokemonTeam: any = useStorage('team', {});
    const filters: any = useStorage('filters', { search: '', types: [] });

    const addToStorage = ((pokemon: PokedexBaseResult) => {
        pokemonTeam.value[pokemon.name] = pokemon;
    });

    const removeFromStorage = ((pokemonName: string) => {
        if (pokemonTeam.value[pokemonName]) {
            delete pokemonTeam.value[pokemonName];
        }
    });

    const addFiltersToStorage = ((filter: Object) => {
        filters.value = filter;
    });

    return { pokemonTeam, filters, addToStorage, removeFromStorage, addFiltersToStorage }
}
