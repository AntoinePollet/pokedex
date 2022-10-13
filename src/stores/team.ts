import { defineStore } from 'pinia'
import { computed, type ComputedRef, onMounted, ref } from "vue";
import type { PokedexBaseResult } from "@/types";
import { createToast } from "mosha-vue-toastify";
import localStorage from "@/composables/localStorage";
import { usePokedexStore } from "@/stores/pokedex";

export const useTeamStore = defineStore('team', () => {
    const team = ref<PokedexBaseResult[]>([]);
    const { pokemonTeam, addToStorage, removeFromStorage } = localStorage();

    const pokedexStore = usePokedexStore();
    const { pokedex } = pokedexStore;

    onMounted(() => {
        for (let pokemon of Object.values(pokemonTeam.value)) {
            team.value.push(pokemon);
        }
    });

    const alreadyInTeam: ComputedRef<boolean> = computed<boolean>((): any => {
        return (pokemonId: number): boolean => !!team.value.find((poke: PokedexBaseResult) => poke.id === pokemonId);
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

    function removeFromTeam(pokemon: PokedexBaseResult): void {
        const pokemonIndex = team.value.findIndex((poke: PokedexBaseResult) => poke.id === pokemon.id);
        removeFromStorage(pokemon.name);
        team.value.splice(pokemonIndex, 1);
    }

    function generateTeam(): void {
        resetTeam();
        for(let i = 0; i < 6; i ++) {
            console.log(pokedex)
            const random = Math.round(Math.random() * pokedex.length);
            console.log(random)
        }
    }

    function resetTeam(): void {
        team.value = [];
    }

    function checkTeamSize() {
        if (team.value.length === 6) {
            throw { message: "Team already at max capacity !" };
        }
    }

    return { team, addToTeam, removeFromTeam, resetTeam, alreadyInTeam, generateTeam }
});
