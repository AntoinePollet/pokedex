<script lang="ts">
import { defineComponent, type PropType } from "vue";
import { firstUppercase, pokemonSprite } from "@/utilities/pokemonUtilities";
import type { PokemonSpecies } from "@/types/PokemonBaseResult";
import PokemonTypes from "@/components/PokemonType.vue";

export default defineComponent({
    name: 'PokemonEvolutions',
    components: { PokemonTypes },
    props: {
        evolutions: {
            type: Array as PropType<PokemonSpecies[]>,
            default: () => {
            }
        }
    },
    setup(props) {
        const { evolutions } = props;

        return {
            evolutions,
            firstUppercase,
            pokemonSprite
        }
    }
});

</script>

<template>
    <div class="px-2 py-1">
        <h1 class="text-2xl italic leading-tight">Evolutions</h1>
        <div class="italic pl-2" v-if="evolutions.length === 1">
            This Pokémon does not evolve.
        </div>
        <div class="flex justify-around">
            <div class="flex flex-col items-center" v-for="evolution in evolutions">
                <div>
                    <img :src="pokemonSprite(evolution.id)" :alt="evolution.name" />
                    <p class="font-medium italic text-lg text-center">{{ evolution.name }}</p>
                </div>
                <div class="flex">
                    <pokemon-types v-for="type in evolution.pokemon_v2_pokemons[0].pokemon_v2_pokemontypes" :type="type" />
                </div>
            </div>

        </div>
    </div>
</template>
