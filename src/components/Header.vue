<template>
  <div class="h-[64px] w-full bg-primary-300 dark:bg-dark-1 border-b border-solid border-dark-3 fixed z-50">
    <div class="hidden sm:flex items-center h-full italic leading-loose text-lg relative w-full">
      <div class="flex gap-x-3 absolute left-1/2 top-1/2" style="transform: translate(-50%, -50%)">
        <router-link
          class="hover:text-primary-900 text-primary-800 font-bold dark:text-white dark:hover:text-primary-300"
          to="/"
        >
          Pokedex
        </router-link>
        <div class="flex items-center gap-x-1">
          <router-link
            class="hover:text-primary-900 text-primary-800 font-bold dark:text-white dark:hover:text-primary-300"
            to="/team"
          >
            Team
          </router-link>
          <badge :badge-number="teamSize" />
        </div>
      </div>
      <div class="flex ml-auto gap-x-2 pr-3">
        <div class="flex items-center">
          <button v-if="isDark" class="primary flex">
            <span @click="toggleDark()" class="material-symbols-outlined cursor-pointer text-primary-200">
              light_mode
            </span>
          </button>
          <button v-else class="primary flex">
            <span @click="toggleDark()" class="material-symbols-outlined cursor-pointer text-primary-800">dark_mode</span>
          </button>
        </div>
        <clear-team-button />
        <generate-team-button />
      </div>
    </div>
    <div class="sm:hidden flex justify-start items-center h-full pl-3">
      <span
        @click="toggleMenu"
        class="material-symbols-outlined cursor-pointer dark:text-white"
        style="font-size: xxx-large"
      >
        menu
      </span>
    </div>

    <div v-if="isMenuOpen">
      <div class="sm:hidden h-screen w-screen bg-[#F2F2F2] dark:bg-dark-2 z-50 fixed p-4">
        <div class="flex flex-col items-center gap-y-3">
          <router-link
            class="text-primary-800 hover:text-primary-800 font-bold dark:text-white dark:hover:text-primary-300"
            to="/"
            @click="isMenuOpen = false"
          >
            Pokedex
          </router-link>
          <router-link
            class="hover:text-primary-800 font-bold dark:text-white dark:hover:text-primary-300"
            to="/team"
            @click="isMenuOpen = false"
          >
            Team
          </router-link>

          <div class="flex items-center">
            <button v-if="isDark" class="primary flex">
              <span @click="toggleDark()" class="material-symbols-outlined cursor-pointer text-primary-200">
                light_mode
              </span>
            </button>
            <button v-else class="primary flex">
              <span @click="toggleDark()" class="material-symbols-outlined cursor-pointer text-primary-800">dark_mode</span>
            </button>
          </div>
          <clear-team-button />
          <generate-team-button />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ClearTeamButton from '@/components/ClearTeamButton.vue';
import GenerateTeamButton from '@/components/GenerateTeamButton.vue';
import Badge from '@/components/Badge.vue';
import { useTeamStore } from '@/stores/team';
import { storeToRefs } from 'pinia';
import { useToggle, useDark } from '@vueuse/core';
import { ref } from 'vue';

const teamStore = useTeamStore();
const { teamSize } = storeToRefs(teamStore);

const isMenuOpen = ref<boolean>(false);
const isDark = useDark();
const toggleDark = useToggle(isDark);

const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value);
</script>

<style>
.router-link-active {
  @apply text-primary-800 dark:text-dark-contrast !important;
}
</style>
