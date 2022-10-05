<script lang="ts">
import { defineComponent, type PropType, ref, toRefs } from "vue";
import type { PokedexBaseResult } from "@/types";
import { pokemonSprite, firstUppercase } from "@/utilities/pokemonUtilities"
import PokemonTypes from "@/components/PokemonType.vue";
import { useRouter } from "vue-router";
import { useIntersectionObserver } from "@vueuse/core";
import { useTeamStore } from "@/stores/team";

export default defineComponent({
    name: 'Pokemon',
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
        const pokemonRef = ref(null);

        const { stop } = useIntersectionObserver(
            pokemonRef,
            ([{ isIntersecting, target }], observerElement) => {
                if (isIntersecting && target.classList.contains('lazy')) {
                    target.src = target.dataset.src;
                    target.classList.remove('lazy')
                }
            }
        )

        return {
            pokemon,
            pokemonSprite,
            firstUppercase,
            router,
            pokemonRef,
            addToTeam,
            alreadyInTeam,
            removeFromTeam
        }
    }
});

</script>

<template>
    <div class="flex flex-col items-center border rounded-xl cursor-pointer">
        <div class="bg-[#F2F2F2] w-full rounded-t-xl py-5" @click="router.push({ name: 'pokemonDetails', params: { id: pokemon.id }})">
            <img ref="pokemonRef" class="w-1/2 m-auto lazy" src="../assets/pokeball.svg" :data-src="pokemonSprite(pokemon.id)" :alt="pokemon.name"/>
            <div class="flex justify-center gap-3 flex-wrap">
                <pokemon-types v-for="type in pokemon.pokemon_v2_pokemontypes" :type="type" />
            </div>
        </div>
        <div class="flex gap-y-2 flex-col items-center py-3">
            <div class="font-bold">{{ pokemon.id }}</div>
            <div class="font-bold">{{ firstUppercase(pokemon.name) }}</div>
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
