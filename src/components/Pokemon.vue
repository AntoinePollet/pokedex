<template>
    <div class="border rounded-xl p-3">
        <img :src="pokemonSprite(getPokemonId(pokemon.url))"  :alt="pokemon.name"/>
        {{ pokemon.name }}
    </div>
</template>

<script lang="ts">
import { defineComponent, type PropType, ref } from "vue";
import type { Pokemon } from "@/types";
import pokemonSprite from "@/composables/pokemonSprite"
import getPokemonId from "@/composables/getPokemonId"

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

        return {
            pokemon,
            pokemonSprite,
            getPokemonId
        }
    }
});

</script>
