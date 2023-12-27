<script setup lang="ts">
import { defineComponent, type PropType, toRefs } from 'vue';
import type { PokemonAbilities } from '@/types';
import { firstUppercase } from '@/utilities/pokemonUtilities';

const props = defineProps({
  abilities: {
    type: Array as PropType<PokemonAbilities[]>,
    default: () => [],
  },
});
const { abilities } = toRefs(props);
</script>

<template>
  <div class="flex flex-col px-2 py-1">
    <h1 class="text-2xl italic leading-tight">Abilities</h1>
    <div class="italic pl-2" v-if="abilities.length === 0">No Abilities</div>
    <div v-else class="pl-2" v-for="ability in abilities" :key="ability.pokemon_v2_ability.id">
      <h5 class="font-bold text-lg">{{ firstUppercase(ability.pokemon_v2_ability.name) }}</h5>
      <div v-if="ability.pokemon_v2_ability.pokemon_v2_abilityeffecttexts[1]" class="leading-6">
        {{ ability.pokemon_v2_ability.pokemon_v2_abilityeffecttexts[1].effect }}
      </div>
      <div v-else-if="ability.pokemon_v2_ability.pokemon_v2_abilityeffecttexts[0]" class="leading-6">
        {{ ability.pokemon_v2_ability.pokemon_v2_abilityeffecttexts[0].effect }}
      </div>
      <div v-else class="italic pl-2">No description</div>
    </div>
  </div>
</template>
