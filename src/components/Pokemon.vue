<template>
    <div class="flex flex-col items-center border rounded-xl">
        <div class="bg-[#F2F2F2] w-full rounded-t-xl">
            <img class="w-1/2 m-auto" :src="pokemonSprite(getPokemonIdByUrl(pokemon.url))"  :alt="pokemon.name"/>
        </div>
        <div class="flex flex-col items-center py-3">
            <div class="font-bold">{{ getPokemonIdByUrl(pokemon.url) }}</div>
            <div>{{ pokemonName }}</div>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, ref } from "vue";
import type { Pokemon } from "@/types";
import pokemonSprite from "@/composables/pokemonSprite"
import getPokemonIdByUrl from "@/composables/getPokemonId"

export default defineComponent({
    name: 'Pokemon',
    props: {
        pokemon: {
            type: Object as PropType<Pokemon>,
            default: () => {}
        }
    },
    setup(props) {
        const { pokemon } = props;

        const pokemonName = computed(() => pokemon.name[0].toUpperCase() + pokemon.name.substring(1, pokemon.name.length));

        return {
            pokemon,
            pokemonName,
            pokemonSprite,
            getPokemonIdByUrl
        }
    }
});

</script>
