<script setup lang="ts">
import { useTeamStore } from '@/stores/team';

const teamStore = useTeamStore();
const { resetTeam } = teamStore;
const clearTeam = () => {
  resetTeam(true);
};
</script>

<template>
  <div>
    <button class="button-header-reset" @click="clearTeam">Reset</button>
  </div>
</template>
