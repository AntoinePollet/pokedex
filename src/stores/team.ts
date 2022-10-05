import { defineStore } from 'pinia'
import { computed, type ComputedRef, ref } from "vue";
import type { PokedexBaseResult } from "@/types";
import { createToast } from "mosha-vue-toastify";

export const useTeamStore = defineStore('team', () => {
    const team = ref<PokedexBaseResult[]>([]);

    const alreadyInTeam: ComputedRef<boolean> = computed<boolean>((): any => {
        return (pokemonId: number): boolean => !!team.value.find((poke: PokedexBaseResult) => poke.id === pokemonId);
    });

    function addToTeam(pokemon: PokedexBaseResult): void {
        try {
            checkTeamSize();
            const alreadyAdded = !!team.value.find((poke: PokedexBaseResult) => poke.id === pokemon.id);
            if (!alreadyAdded) {
                team.value.push(pokemon);
            }
        } catch (e: any) {
            createToast(e.message, { type: "danger", position: "bottom-right" });
        }

    }

    function addAndReplace(pokemon: PokedexBaseResult, index: number): void {
        team.value.splice(index, 1, pokemon);
    }

    function removeFromTeam(pokemonId: number): void {
        const pokemonIndex = team.value.findIndex((pokemon: PokedexBaseResult) => pokemon.id === pokemonId);
        team.value.splice(pokemonIndex, 1);
    }

    function checkTeamSize() {
        if (team.value.length === 6) {
            throw { message: "Team already at max capacity !", description: "Remove a pokemon to add another" };
        }
    }

    return { team, addToTeam, removeFromTeam, addAndReplace, alreadyInTeam }
});
