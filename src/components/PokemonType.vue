<script lang="ts">
import { defineComponent, type PropType } from "vue";
import type { PokemonTypes } from "@/types";
import { colorFromType } from "@/utilities/pokemonUtilities";

export default defineComponent({
    name: 'PokemonTypes',
    props: {
        type: {
            type: Object as PropType<PokemonTypes>,
            default: () => {
            }
        }
    },
    setup(props) {
        const { type } = props;

        return {
            type,
            colorFromType
        }
    }
});

</script>

<template>
    <div class="flex flex-col px-2 py-1 font-bold items-center border rounded-full"
         :style="{ backgroundColor: colorFromType(type.pokemon_v2_type.name)}">
        {{ type.pokemon_v2_type.name }}
    </div>
</template>
