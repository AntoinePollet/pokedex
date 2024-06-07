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
    <button class="primary" @click="generateRandomTeam">Generate</button>
  </div>
</template>
