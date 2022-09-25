<script lang="ts">
import { defineComponent } from "vue";
import Pokemon from "@/components/Pokemon.vue";
import { usePokedexStore } from "@/stores/pokedex";
import { storeToRefs } from "pinia";

export default defineComponent({
    name: 'PokemonDetails',
    components: { Pokemon },
    setup() {
        const pokedexStore = usePokedexStore();
        const { pokemon } = storeToRefs(pokedexStore);

        return {
            pokemon
        }
    }
});
</script>

<template>
    <div class="border rounded-3xl p-10">
        {{ pokemon }}
    </div>
</template>
