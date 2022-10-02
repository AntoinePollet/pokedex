<script lang="ts" xmlns="http://www.w3.org/1999/html">
import { defineComponent, type PropType, toRefs } from "vue";
import { firstUppercase } from "@/utilities/pokemonUtilities";
import type { PokemonMoves } from "@/types/PokemonBaseResult";

export default defineComponent({
    name: 'PokemonMoves',
    props: {
        moves: {
            type: Object as PropType<PokemonMoves[]>,
            default: () => {
            }
        }
    },
    setup(props) {
        const { moves } = toRefs(props);

        return {
            moves,
            firstUppercase
        }
    }
});

</script>

<template>
    <div class="flex flex-col px-2 py-1">
        <h1 class="text-2xl italic leading-tight">Moves</h1>
        <div class="italic pl-2" v-if="moves.length === 0">
            No moves
        </div>
        <div v-else class="pl-2" v-for="move in moves">
            <h5 class="font-bold text-lg">{{ firstUppercase(move.pokemon_v2_move.name) }}
                <span class="text-xl font-medium text-blue-600">{{move.pokemon_v2_move.accuracy}} </span>
                <span class="font-normal text-sm"> (accuracy)</span>
            </h5>
            <div class="leading-6">
                {{ move.pokemon_v2_move.pokemon_v2_moveeffect.pokemon_v2_moveeffecteffecttexts[0].effect }}
            </div>
        </div>
    </div>
</template>
