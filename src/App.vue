<template>
  <div class="flex flex-1 flex-col h-screen overflow-hidden">
    <Header @toggleMenu="toggleMenu(!menuOpen)"></Header>
    <div class="py-10 dark:bg-dark-1 bg-white h-full overflow-auto">
      <div class="dark:bg-dark-1 bg-white text-black dark:text-white flex flex-1">
        <div class="flex flex-1 lg:max-w-5xl md:max-w-3xl sm:max-w-2xl mx-auto">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { createToast } from 'mosha-vue-toastify';
import { usePokedexStore } from '@/stores/pokedex';
import localStorage from '@/composables/localStorage';
import Header from '@/components/Header.vue';

const pokedexStore = usePokedexStore();
const { getFilteredPokemons } = pokedexStore;

const menuOpen = ref<boolean>(false);

const storage = localStorage();
const { filters } = storage;

const toggleMenu = (bool: boolean) => (menuOpen.value = bool);

onMounted(async () => {
  try {
    await getFilteredPokemons(filters.value.search, filters.value.types);
  } catch (e: any) {
    createToast('Error while fetching data', { type: 'danger', position: 'bottom-right' });
  }
});
</script>

<style>
html.dark {
  color-scheme: dark;
}
</style>
