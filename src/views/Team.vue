<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useTeamStore } from '@/stores/team';
import PokemonTeam from '@/components/PokemonTeam.vue';

const teamStore = useTeamStore();
const { team } = storeToRefs(teamStore);
</script>

<template>
  <div v-if="team.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
    <pokemon-team v-for="pokemon in team" :pokemon="pokemon" :key="pokemon.id" />
  </div>
  <div v-else class="italic text-3xl font-mono font-bold text-center py-10">No team member, yet !</div>
</template>
