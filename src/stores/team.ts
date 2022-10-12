import { defineStore } from 'pinia'
import { computed, type ComputedRef, onMounted, type Ref, ref } from "vue";
import type { PokedexBaseResult } from "@/types";
import { createToast } from "mosha-vue-toastify";
import localStorage from "@/composables/localStorage";

export const useTeamStore = defineStore('team', () => {
    const team: Ref<PokedexBaseResult[]> = ref<PokedexBaseResult[]>([]);
    const { pokemonTeam, addToStorage, removeFromStorage } = localStorage();

    onMounted(() => {
        for (let pokemon of pokemonTeam.value) {
            team.value.push(pokemon);
        }
    });

    const alreadyInTeam: ComputedRef<boolean> = computed<boolean>((): any => {
        return (pokemonId: number): boolean => !!team.value.find((poke: PokedexBaseResult) => poke.id === pokemonId);
    });

    const pokemonIndex: ComputedRef<number> = computed<number>((): any => {
        return (pokemonId: number): number => team.value.findIndex((poke: PokedexBaseResult) => poke.id === pokemonId);
    });

    function addToTeam(pokemon: PokedexBaseResult): void {
        try {
            checkTeamSize();
            const alreadyAdded = !!team.value.find((poke: PokedexBaseResult) => poke.id === pokemon.id);
            if (!alreadyAdded) {
                addToStorage(pokemon);
                team.value.push(pokemon);
            }
        } catch (e: any) {
            createToast(e.message, { type: "danger", position: "bottom-right" });
        }
    }

    function addAndReplace(swappedElementIndex: number, sourceElement: number): void {
        const temp = team.value[swappedElementIndex];
        team.value[swappedElementIndex] = team.value[sourceElement]
        team.value[sourceElement] = temp;
    }

    function removeFromTeam(pokemon: PokedexBaseResult): void {
        const pokemonIndex = team.value.findIndex((poke: PokedexBaseResult) => poke.id === pokemon.id);
        removeFromStorage(pokemon.id);
        team.value.splice(pokemonIndex, 1);
    }

    function checkTeamSize() {
        if (team.value.length === 6) {
            throw { message: "Team already at max capacity !" };
        }
    }

    return { team, addToTeam, removeFromTeam, addAndReplace, alreadyInTeam, pokemonIndex }
});
