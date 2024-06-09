<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Pokemon from '@/components/Pokemon.vue';
import { usePokedexStore } from '@/stores/pokedex';
import { storeToRefs } from 'pinia';
import Filters from '@/components/Filters.vue';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import localStorage from '@/composables/localStorage';
import { createToast } from 'mosha-vue-toastify';
const pokedexStore = usePokedexStore();
const { getFilteredPokemons } = pokedexStore;
const { pokedex } = storeToRefs(pokedexStore);

const storage = localStorage();
const { filters } = storage;

const isLoading = ref<boolean>(false);

onMounted(async () => {
  try {
    isLoading.value = true;
    await getFilteredPokemons(filters.value.search, filters.value.types);
    isLoading.value = false;
  } catch (e: any) {
    createToast('Error while fetching data', { type: 'danger', position: 'bottom-right' });
  }
  isLoading.value = false;
});
</script>

<template>
  <div class="flex flex-1 flex-col">
    <filters class="flex justify-center gap-x-3" @loading="isLoading = $event" />

    <div v-if="isLoading" class="pt-20 flex flex-1 items-center justify-center">
      <PulseLoader :loading="isLoading" color="#fcd34d" />
    </div>

    <div v-else-if="pokedex.length === 0" class="text-2xl italic leading-tight text-center pt-5">No pokemons found</div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 ">
      <pokemon v-for="pokemon in pokedex" :pokemon="pokemon" :key="pokemon.id" />
    </div>
  </div>
</template>
