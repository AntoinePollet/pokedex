<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import Pokemon from "@/components/Pokemon.vue";
import { usePokedexStore } from "@/stores/pokedex";
import { storeToRefs } from "pinia";
import Filters from "@/components/Filters.vue";
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import localStorage from "@/composables/localStorage";
import { createToast } from "mosha-vue-toastify";
export default defineComponent({
    name: 'Pokedex',
    components: { Filters, Pokemon, PulseLoader },
    setup() {
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
                createToast('Error while fetching data', { type: "danger", position: "bottom-right" });
            }
            isLoading.value = false;
        });

        return {
            pokedex,
            isLoading
        }
    }
});
</script>

<template>
    <div>
        <filters class="flex justify-center gap-x-3 pt-5" @loading="isLoading = $event"/>

        <div v-if="isLoading" class="pt-20">
            <PulseLoader :loading="isLoading" class="flex items-center justify-center" color="#fcd34d"></PulseLoader>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 py-10">
            <pokemon v-for="pokemon in pokedex" :pokemon="pokemon" :key="pokemon.id" />
        </div>
    </div>
</template>
