<script setup lang="ts">
import { type PropType, toRefs } from 'vue';
import { pokemonSprite } from '@/utilities/pokemonUtilities';
import type { PokemonSpecies } from '@/types/PokemonBaseResult';
import PokemonTypes from '@/components/PokemonType.vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  evolutions: {
    type: Array as PropType<PokemonSpecies[]>,
    default: () => [],
  },
});
const router = useRouter();
const { evolutions } = toRefs(props);
</script>

<template>
  <div class="px-2 py-1">
    <h1 class="text-2xl italic leading-tight">Evolutions</h1>
    <div class="italic pl-2" v-if="evolutions.length === 1">This Pokémon does not evolve.</div>
    <div class="flex flex-col md:justify-around md:flex-row">
      <div class="flex flex-col items-center" v-for="evolution in evolutions" :key="evolution.id">
        <div class="cursor-pointer">
          <img
            @click="router.push({ name: 'pokemonDetails', params: { id: evolution.id } })"
            :src="pokemonSprite(evolution.id)"
            :alt="evolution.name"
          />
          <p class="font-medium italic text-lg text-center">{{ evolution.name }}</p>
        </div>
        <div class="flex gap-2">
          <pokemon-types
            v-for="type in evolution.pokemon_v2_pokemons[0].pokemon_v2_pokemontypes"
            :type="type"
            :key="type"
          />
        </div>
      </div>
    </div>
  </div>
</template>
