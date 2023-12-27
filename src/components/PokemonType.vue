<script setup lang="ts">
import { type PropType, toRefs } from 'vue';
import type { PokemonTypes } from '@/types';
import { colorFromType } from '@/utilities/pokemonUtilities';

const props = defineProps({
  type: {
    type: Object as PropType<PokemonTypes>,
    default: () => {},
  },
});
const { type } = toRefs(props);
</script>

<template>
  <div
    class="flex flex-col px-2 py-1 font-bold items-center border rounded-full font-mono text-sm"
    :style="{
      backgroundColor: colorFromType(type.pokemon_v2_type.name).bg,
      color: colorFromType(type.pokemon_v2_type.name).text,
    }"
  >
    {{ type.pokemon_v2_type.name }}
  </div>
</template>
