<script lang="ts">
import { defineComponent, type PropType, ref, toRefs } from "vue";
import type { PokedexBaseResult } from "@/types";
import { pokemonSprite, firstUppercase } from "@/utilities/pokemonUtilities"
import PokemonTypes from "@/components/PokemonType.vue";
import { useRouter } from "vue-router";
import { useTeamStore } from "@/stores/team";

export default defineComponent({
    name: 'PokemonTeam',
    components: { PokemonTypes },
    props: {
        pokemon: {
            type: Object as PropType<PokedexBaseResult>,
            default: () => {}
        }
    },
    setup(props) {
        const router = useRouter();
        const teamStore = useTeamStore();
        const { addToTeam, removeFromTeam } = teamStore;
        const { alreadyInTeam } = teamStore;

        const { pokemon } = toRefs(props);

        return {
            pokemon,
            pokemonSprite,
            firstUppercase,
            router,
            addToTeam,
            alreadyInTeam,
            removeFromTeam
        }
    }
});

</script>

<template>
    <div class="flex flex-col items-center rounded-3xl border">
        <div class="bg-[#F2F2F2] dark:bg-dark-2 relative rounded-t-3xl w-full py-5 cursor-pointer" @click="router.push({ name: 'pokemonDetails', params: { id: pokemon.id }})">
            <img ref="pokemonRef" class="w-1/2 m-auto" :src="pokemonSprite(pokemon.id)" :alt="pokemon.name"/>
            <div class="flex justify-center gap-3 flex-wrap">
                <pokemon-types v-for="type in pokemon.pokemon_v2_pokemontypes" :type="type" :key="type.pokemon_v2_type.id" />
            </div>
            <div class="absolute top-[1rem] left-[1rem] font-bold">{{ pokemon.id }}</div>
        </div>
        <div class="flex gap-y-2 items-center justify-around py-3 w-3/4">
            <p class="font-bold text-md dark:text-dark-contrast">{{ firstUppercase(pokemon.name) }}</p>
            <button :class="alreadyInTeam(pokemon.id) ? 'remove-from-team' : 'add-to-team'" @click="alreadyInTeam(pokemon.id) ? removeFromTeam(pokemon) : addToTeam(pokemon)">
                <span v-if="alreadyInTeam(pokemon.id)" class="material-symbols-outlined">
                    remove
                </span>
                <span v-else class="material-symbols-outlined">
                    add
                </span>
            </button>
        </div>
    </div>
</template>
