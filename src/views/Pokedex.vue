<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import Pokemon from "@/components/Pokemon.vue";
import { usePokedexStore } from "@/stores/pokedex";
import { storeToRefs } from "pinia";
import Filters from "@/components/Filters.vue";
import type { PokedexBaseResult } from "@/types";
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

export default defineComponent({
    name: 'Pokedex',
    components: { Filters, Pokemon, PulseLoader },
    setup() {
        const pokedexStore = usePokedexStore();
        const { getPokedex } = pokedexStore;
        const { pokedex } = storeToRefs(pokedexStore);
        const filteredPokedex = ref<any>([]);

        const isLoading = ref<boolean>(true);

        onMounted(async () => {
            if (filteredPokedex.value.length > 0) return;
            await getPokedex();
            pokemonsFiltered(pokedex.value);
            isLoading.value = false;
        });
;
        const pokemonsFiltered = ((pokemons: PokedexBaseResult[]): void => {
            filteredPokedex.value = pokemons;
        });

        return {
            filteredPokedex,
            pokedex,
            isLoading,
            pokemonsFiltered
        }
    }
});
</script>

<template>
    <div>
        <filters class="flex justify-center gap-x-3 pt-5" @pokemons-filtered="pokemonsFiltered" />

        <div v-if="isLoading" class="pt-20">
            <PulseLoader :loading="isLoading" class="flex items-center justify-center" color="#fcd34d"></PulseLoader>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 py-10">
            <pokemon v-for="pokemon in filteredPokedex" :pokemon="pokemon" :key="pokemon.id" />
        </div>
    </div>
</template>
