<script setup lang="ts">
import { useTeamStore } from '@/stores/team';

const teamStore = useTeamStore();
const { generateTeam } = teamStore;
const generateRandomTeam = () => {
  generateTeam();
};
</script>

<template>
  <div>
    <button class="button-header" @click="generateRandomTeam">Generate</button>
  </div>
</template>
