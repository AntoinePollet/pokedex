<script lang="ts">
import { defineComponent, type PropType } from "vue";
import type { PokemonAbilities } from "@/types";
import { firstUppercase } from "@/utilities/pokemonUtilities";

export default defineComponent({
    name: 'PokemonAbilities',
    props: {
        abilities: {
            type: Object as PropType<PokemonAbilities[]>,
            default: () => {
            }
        }
    },
    setup(props) {
        const { abilities } = props;

        return {
            abilities,
            firstUppercase
        }
    }
});

</script>

<template>
    <div class="flex flex-col px-2 py-1">
        <h1 class="text-2xl italic leading-tight">Abilities</h1>
        <div class="pl-2" v-for="ability in abilities">
            <h5 class="font-bold text-lg">{{ firstUppercase(ability.pokemon_v2_ability.name) }}</h5>
            <div v-if="ability.pokemon_v2_ability.pokemon_v2_abilityeffecttexts.length >= 1" class="leading-6">
                {{ ability.pokemon_v2_ability.pokemon_v2_abilityeffecttexts[1].effect }}
            </div>
        </div>
    </div>
</template>
