<template>
    <div class="grid grid-cols-4 gap-3">
        <pokemon v-for="pokemon in pokedex" :pokemon="pokemon" />
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Pokemon from "@/components/Pokemon.vue";
import { usePokedexStore } from "@/stores/pokedex";
import { storeToRefs } from "pinia";

export default defineComponent({
    name: 'Pokedex',
    components: { Pokemon },
    setup() {
        const pokedexStore = usePokedexStore();
        const { getPokedex } = pokedexStore;
        const { pokedex } = storeToRefs(pokedexStore);

        onMounted(async () => {
            await getPokedex();
        });

        return {
            pokedex
        }
    }
});

</script>
