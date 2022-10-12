import { useStorage } from "@vueuse/core";
import type { PokedexBaseResult } from "@/types";
import type { Ref } from "vue";

export default function localStorage() {
    const pokemonTeam: Ref<PokedexBaseResult[]> = useStorage('team', [], undefined,{ listenToStorageChanges: true });
    const filters: any = useStorage('filters', { search: '', types: [] });

    const addToStorage = ((pokemon: PokedexBaseResult) => {
        pokemonTeam.value.push(pokemon);
    });

    const addAndReplaceInStorage = ((swappedElement: number, sourceElement: number) => {
        const temp = pokemonTeam.value[swappedElement];
        pokemonTeam.value[swappedElement] = pokemonTeam.value[sourceElement]
        pokemonTeam.value[sourceElement] = temp;
    });

    const removeFromStorage = ((pokemonId: number) => {
        if (pokemonTeam.value.find((poke: PokedexBaseResult) => poke.id === pokemonId)) {
            pokemonTeam.value.splice(pokemonTeam.value.findIndex((poke: PokedexBaseResult) => poke.id === pokemonId), 1);
        }
    });

    const addFiltersToStorage = ((filter: Object) => {
        filters.value = filter;
    });

    return { pokemonTeam, filters, addToStorage, addAndReplaceInStorage, removeFromStorage, addFiltersToStorage }
}
