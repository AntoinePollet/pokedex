<script lang="ts">
import { defineComponent, type PropType } from "vue";
import type { PokemonAbilities, PokemonTypes } from "@/types";
import { colorFromType } from "@/utilities/pokemonUtilities";

export default defineComponent({
    name: 'PokemonAbility',
    props: {
        ability: {
            type: Object as PropType<PokemonAbilities>,
            default: () => {
            }
        }
    },
    setup(props) {
        const { ability } = props;

        return {
            ability,
            colorFromType
        }
    }
});

</script>

<template>
    <div class="flex flex-col px-2 py-1 items-center">
        <h5>{{ ability.pokemon_v2_ability.name }}</h5>
        <div>
            {{ ability.pokemon_v2_ability.pokemon_v2_abilityeffecttexts[1].effect }}
        </div>
    </div>
</template>
