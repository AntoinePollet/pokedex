<script lang="ts">
import { defineComponent, type PropType } from "vue";
import type { PokemonBaseResult } from "@/types";
import { pokemonSprite, firstUppercase } from "@/composables/pokemonUtilities"
import PokemonTypes from "@/components/PokemonTypes.vue";

export default defineComponent({
    name: 'Pokemon',
    components: { PokemonTypes },
    props: {
        pokemon: {
            type: Object as PropType<PokemonBaseResult>,
            default: () => {}
        }
    },
    setup(props) {
        const { pokemon } = props;

        return {
            pokemon,
            pokemonSprite,
            firstUppercase
        }
    }
});

</script>

<template>
    <div class="flex flex-col items-center border rounded-xl cursor-pointer">
        <div class="bg-[#F2F2F2] w-full rounded-t-xl py-5">
            <img class="w-1/2 m-auto" :src="pokemonSprite(pokemon.id) ? pokemonSprite(pokemon.id) : '../assets/not-found.png'" :alt="pokemon.name"/>
            <div class="flex justify-center gap-3 flex-wrap">
                <pokemon-types v-for="type in pokemon.pokemon_v2_pokemontypes" :type="type" />
            </div>
        </div>
        <div class="flex gap-y-2 flex-col items-center py-3">
            <div class="font-bold">{{ pokemon.id }}</div>
            <div>{{ firstUppercase(pokemon.name) }}</div>
        </div>
    </div>
</template>

