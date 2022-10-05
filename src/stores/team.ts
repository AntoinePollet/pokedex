import { defineStore } from 'pinia'
import { computed, type ComputedRef, ref } from "vue";
import type { PokedexBaseResult } from "@/types";

export const useTeamStore = defineStore('team', () => {
    const team = ref<PokedexBaseResult[]>([]);

    const alreadyInTeam: ComputedRef<boolean> = computed<boolean>((): any => {
        return (pokemonId: number): boolean => !!team.value.find((poke: PokedexBaseResult) => poke.id === pokemonId);
    });

    function addToTeam(pokemon: PokedexBaseResult): void {
        checkTeamSize();
        const alreadyAdded = !!team.value.find((poke: PokedexBaseResult) => poke.id === pokemon.id);
        if (!alreadyAdded) {
            team.value.push(pokemon);
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
            throw { message: "Team already at max capacity !" };
        }
    }

    return { team, addToTeam, removeFromTeam, addAndReplace, alreadyInTeam }
});
